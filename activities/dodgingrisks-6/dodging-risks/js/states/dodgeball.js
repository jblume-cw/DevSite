DodgingRisks.dodgeball = function(game){
	this.signs = null;
	this.scoreText = null;
	this.fastballMeter = null;
	this.lightningSignal = null;
	this.timeMeter = null;
	this.timeMeterHighlight = null;
	this.ball = null;
	this.meterTimer = null;
	this.negativeRate = null;
	this.showDurationBase = null;
	this.showDurationPlay = null;
	this.signShowDelayBase = null;
	this.signShowDelayPlay = null;
	this.fastballs = null;
	this.score = null;
}

DodgingRisks.dodgeball.prototype = {
	init: function(){
		if(drSettings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
	},
	create: function(){
		this.negativeRate = drSettings.game.negativeRateDefault;
		this.showDurationBase = drSettings.game.showDurationBaseDefault;
		this.showDurationPlay = drSettings.game.showDurationPlayDefault;
		this.signShowDelayBase = drSettings.game.signShowDelayBaseDefault;
		this.signShowDelayPlay = drSettings.game.signShowDelayPlayDefault;
		this.fastballs = 0;
		this.score = 0;

		this.createGraphics();
		this.createSounds();
		this.createTimers();
		this.startGame();
	},
	createGraphics: function(){
		this.add.sprite(drSettings.game.background.x, drSettings.game.background.y, drSettings.game.background.key);

		for (var i = 0; i < drSettings.game.backgroundSprites.length; i++) {
			this.add.sprite(drSettings.game.backgroundSprites[i].x, drSettings.game.backgroundSprites[i].y, drSettings.spritesheet.key, drSettings.game.backgroundSprites[i].key);
		};

		this.addSigns();
		this.scoreText = this.game.add.bitmapText(drSettings.game.scoreText.x, drSettings.game.scoreText.y, drSettings.game.scoreText.font, drSettings.game.scoreText.defaultText, drSettings.game.scoreText.size);

		this.fastballMeter = this.add.sprite(drSettings.game.fastballMeter.x, drSettings.game.fastballMeter.y, drSettings.spritesheet.key, drSettings.game.fastballMeter.keys[0]);

		this.lightningSignal = this.add.sprite(drSettings.game.lightningSignal.x, drSettings.game.lightningSignal.y, drSettings.spritesheet.key, drSettings.game.lightningSignal.key);
		this.lightningSignal.alpha = 0;

		this.timeMeter = this.game.add.sprite(drSettings.game.meter.x, drSettings.game.meter.y, drSettings.spritesheet.key, drSettings.game.meter.key);
		this.timeMeter.scale.x = drSettings.game.meter.startScale;
		this.timeMeterHighlight = this.game.add.sprite(drSettings.game.meterHighlight.x, drSettings.game.meterHighlight.y, drSettings.spritesheet.key, drSettings.game.meterHighlight.key);
		this.timeMeterHighlight.alpha = 0;
		this.timeMeterHighlight.scale.x = drSettings.game.meter.startScale;

		this.ball = this.add.sprite(drSettings.ball.x, drSettings.ball.y, drSettings.spritesheet.key, drSettings.ball.key);
		this.ball.anchor.setTo(0.5, 0.5);
		this.ball.visible = false;
	},
	addSigns: function(){
		var masks = [];
		for (var i = 0; i < drSettings.game.signMasks.length; i++) {
			var mask = this.add.graphics(drSettings.game.signMasks[i].x, drSettings.game.signMasks[i].y);
			mask.beginFill(0xffffff);
			mask.drawRect(0, 0, drSettings.game.signMasks[1].width, drSettings.game.signMasks[i].height);
			mask.endFill();
			masks.push(mask);
		};

		var signStyle = {
			font: drSettings.sign.small.font, 
		 	fill: drSettings.sign.small.fill, 
		 	fontSize: drSettings.sign.small.size,
		 	wordWrap: true,
		 	wordWrapWidth: drSettings.sign.small.wordWrapWidth,
		 	align: "center"
		}
		this.signs = [];
		for (var i = 0; i < drSettings.game.signs.location.length; i++) {
			var sign = this.add.group();
			sign.x = drSettings.game.signs.location[i].x;
			sign.y = drSettings.game.signs.location[i].y;
			var signBack = this.add.sprite(0, 0, drSettings.spritesheet.key, drSettings.sign.small.wholeKey, sign);
			signBack.anchor.setTo(drSettings.sign.small.anchor.x, drSettings.sign.small.anchor.y);
			var signText = this.add.text(drSettings.sign.small.textOffset.x, drSettings.sign.small.textOffset.y, "", signStyle, sign);
			signText.lineSpacing = drSettings.sign.small.lineSpacing;
			signText.anchor.setTo(0.5, 0.5);
			sign.rotation = drSettings.sign.small.downRotation;
			sign.mask = masks[drSettings.game.signs.location[i].maskIndex];
			var signObject = { sprite: sign, type: "", retractionTimer: null, showTimer: null, alive: true };
			this.signs.push(signObject);

			this.generateSignContents(i);
		};
	},
	getRandomSign: function(){
		var frameKey;
		var signType;
		var rand = Math.random();
		if(rand <= drSettings.game.powerupRate){
			var randomPU = Math.floor(Math.random() * 3);
			frameKey = drSettings.game.powerups[randomPU].signKey;
			signType = drSettings.game.powerups[randomPU].id;
		}else if(rand > this.negativeRate){
			frameKey = drSettings.game.signs.message.positive[Math.floor(Math.random() * drSettings.game.signs.message.positive.length)].text;
			signType = "positive";
		}else{
			frameKey = drSettings.game.signs.message.negative[Math.floor(Math.random() * drSettings.game.signs.message.negative.length)].text;
			signType = "negative";
		}
		return { contents: frameKey, type: signType };
	},
	createSounds: function(){
		throwSound = this.game.add.audio("ballSound");
		hitSound = this.game.add.audio("signHitSound");
		misHitSound = this.game.add.audio("misHitSound");
	},
	createTimers: function(){
		this.meterTimer = this.game.time.create(true);
		this.meterTimer.loop(drSettings.game.timeMeterInterval, this.degradeMeter, this);

		difficultyTimer = this.game.time.create(true);
		difficultyTimer.loop(drSettings.game.difficultyInterval, this.increaseDifficulty, this);
	},
	degradeMeter: function (){
		this.timeMeter.scale.x -= drSettings.game.meterDecay;
		this.timeMeterHighlight.scale.x = this.timeMeter.scale.x;
		if(this.timeMeter.scale.x <= 0){
			this.endGame();
		}
	},
	retractSign: function(index){
		if(this.signs[index].sprite.rotation == drSettings.sign.small.upRotation){
			var tween = this.game.add.tween(this.signs[index].sprite).to( { rotation: drSettings.sign.small.downRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Cubic.Out, true);
			tween.onComplete.add(this.resetSign, this);
		}
	},
	resetSign: function(signSprite){
		var index = this.findSignObjectIndex(signSprite);
		this.signs[index].sprite.visible = false;
		this.signs[index].retractionTimer.destroy();
		this.generateSignContents(index);
		this.setSignShowTimer(index);
	},
	generateSignContents: function(index){
		var newFrameContents = this.getRandomSign();
		this.signs[index].type = newFrameContents.type;
		switch(newFrameContents.type){
			case "lightning":
			case "meter":
			case "fastball":
				this.signs[index].sprite.getAt(0).frameName = newFrameContents.contents;
				this.signs[index].sprite.getAt(1).text = "";
				break;
			case "positive":
			case "negative":
				this.signs[index].sprite.getAt(0).frameName = drSettings.sign.small.wholeKey;
				this.signs[index].sprite.getAt(1).text = newFrameContents.contents;
				break;
		}
	},
	findSignObjectIndex: function(signSprite){
		var signInd;
		for (var i = this.signs.length - 1; i >= 0; i--) {
			if(this.signs[i].sprite == signSprite){
				signInd = i;
				break;
			}
		}
		return signInd;
	},
	increaseDifficulty: function(){
		this.negativeRate -= 0.03;
		if(this.negativeRate < 0.2){
			this.negativeRate = 0.2;
		}
		if(this.showDurationBase >= 2000){
			this.showDurationBase *= .9;
			this.showDurationPlay *= .9;
		}
		if(this.signShowDelayBase < 7000){
			this.signShowDelayBase *= 1.1;
		}
		
		//console.log("negativeRate: " + this.negativeRate + " showDuration: " + (this.showDurationBase - this.showDurationPlay) + " - " + (this.showDurationBase + this.showDurationPlay) + " showDelay: " + (this.signShowDelayBase - this.signShowDelayPlay) + " - " + (this.signShowDelayBase + this.signShowDelayPlay));
	},
	endGame: function(){
		this.timeMeter.scale.x = 0;
		this.meterTimer.stop(true);
		difficultyTimer.stop(true);
		for(var i = 0; i < this.signs.length; i++){
			this.signs[i].showTimer.destroy();
			this.signs[i].retractionTimer.destroy();
			this.signs[i].alive = false;
			this.retractSign(i);
		}
		//finalScore = this.score;
		
		this.time.events.add(500, this.goToGameOver, this);
	},
	goToGameOver: function(){
		this.game.state.start("GameOver", true, false, this.score);
	},
	startGame: function(){
		this.meterTimer.start();
		this.startSigns();
		difficultyTimer.start();
		this.game.input.onDown.add(this.catchClick, this);
	},
	startSigns: function(){
		for (var i = this.signs.length - 1; i >= 0; i--) {
			this.setSignShowTimer(i);
		}
	},
	setSignShowTimer: function(index){
		var sign = this.signs[index];
		if(sign.alive){
			var time = (this.signShowDelayBase - this.signShowDelayPlay) + (Math.random() * (this.signShowDelayPlay * 2)); // base +/- play
			sign.showTimer = this.time.create(false);
			sign.showTimer.add(time, this.showSign, this, index);
			sign.showTimer.start();
		}
	},
	showSign: function(index){
		var showDuration = (this.showDurationBase - this.showDurationPlay) + (Math.random() * (this.showDurationPlay * 2));
		this.signs[index].sprite.visible = true;
		this.add.tween(this.signs[index].sprite).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true);
		this.signs[index].retractionTimer = this.time.create(false);
		this.signs[index].retractionTimer.add(showDuration, this.retractSign, this, index);
		this.signs[index].retractionTimer.start();
	},
	catchClick: function(){
		var position = this.game.input.position;
		if(position.y > 50){
			this.throwBallAt(position);
		}
	},
	throwBallAt: function(position){
		if(this.ball.visible == false){
			this.ball.x = drSettings.ball.x;
			this.ball.y = drSettings.ball.y;
			this.ball.scale.x = drSettings.ball.scale.start;
			this.ball.scale.y = drSettings.ball.scale.start;
			this.ball.visible = true;
			var throwSpeed = drSettings.ball.throwDuration;
			if(this.fastballs > 0){
				throwSpeed = drSettings.ball.throwDurationFast;
				this.fastballs--;
				this.fastballMeter.frameName = drSettings.game.fastballMeter.keys[this.fastballs];
			}
			this.add.tween(this.ball).to( { x: position.x }, throwSpeed, Phaser.Easing.Linear.None, true);
			this.add.tween(this.ball).to( { y: position.y }, throwSpeed, Phaser.Easing.Back.Out, true);
			var scaleTween = this.game.add.tween(this.ball.scale).to( {x: drSettings.ball.scale.end, y: drSettings.ball.scale.end}, throwSpeed, Phaser.Easing.Linear.None, true);
			scaleTween.onComplete.add(this.handleThrowEnd, this);
			
			DodgingRisks.audioSprite.play(drSettings.ball.throwAudioKey);
		}
	},
	handleThrowEnd: function(){
		this.ball.visible = false;
		this.checkSignHit()
	},
	checkSignHit: function(){
		for( var i = 0; i < this.signs.length; i++){
			if(this.signs[i].sprite.rotation == drSettings.sign.small.upRotation){
				var signBounds = this.signs[i].sprite.getBounds();
				signBounds.height += drSettings.sign.small.hitAreaOffset.height;
				signBounds.width += drSettings.sign.small.hitAreaOffset.width;
				signBounds.x += drSettings.sign.small.hitAreaOffset.x;
				signBounds.y += drSettings.sign.small.hitAreaOffset.y;
				var ballBounds = this.ball.getBounds();
				if(Phaser.Rectangle.intersects(signBounds, ballBounds)){
					this.doSignHit(i);
					break;
				}
			}
		}
	},
	doSignHit: function(index){
		if(this.signs[index].sprite.frameName != drSettings.sign.small.brokeKey){
			switch(this.signs[index].type){
				case "negative":
					this.breakSign(index);
					this.boostMeter(drSettings.game.meterBoost);
					this.updateScore(drSettings.game.correctScore);
					this.showHitScoreFlash(index, true);
					break;
				case "positive":
					DodgingRisks.audioSprite.play(drSettings.ball.misHitAudioKey);
					this.boostMeter(-drSettings.game.meterBoost);
					this.updateScore(drSettings.game.incorrectScore);
					this.showHitScoreFlash(index, false);
					break;
				case "lightning":
					this.breakSign(index);
					for(var i = 0; i < this.signs.length; i++){
						if(this.signs[i].sprite.rotation == drSettings.sign.small.upRotation && this.signs[i].type == "negative"){
							this.breakSign(i);
							this.boostMeter(drSettings.game.meterBoost);
							this.updateScore(drSettings.game.correctScore);
							this.showHitScoreFlash(i, true);
						}
					}
					this.signs[index].sprite.getAt(0).frameName = drSettings.sign.small.brokeKey;
					this.lightningSignal.alpha = 1;
					this.add.tween(this.lightningSignal).to( { alpha: 0 }, 1000, Phaser.Easing.Sinusoidal.In, true, 0, 0, false);
					break;
				case "meter":
					this.breakSign(index);
					this.signs[index].sprite.getAt(0).frameName = drSettings.sign.small.brokeKey;
					this.boostMeter(drSettings.game.meterBoost * 3);
					this.add.tween(this.timeMeterHighlight).to( { alpha: 1 }, 500, Phaser.Easing.Sinusoidal.Out, true, 0, 0, true);
					break;
				case "fastball":
					this.breakSign(index);
					this.signs[index].sprite.getAt(0).frameName = drSettings.sign.small.brokeKey;
					this.fastballs = 4;
					this.fastballMeter.frameName = drSettings.game.fastballMeter.keys[this.fastballs];
					break;
			}
		}
	},
	breakSign: function(index){
		this.signs[index].sprite.getAt(0).frameName = drSettings.sign.small.brokeKey;
		this.signs[index].sprite.getAt(1).text = "";
		DodgingRisks.audioSprite.play(drSettings.ball.hitSignAudioKey);
		this.signs[index].retractionTimer.destroy();
		this.signs[index].retractionTimer = this.time.create(false);
		this.signs[index].retractionTimer.add(500, this.retractSign, this, index);
		this.signs[index].retractionTimer.start();
	},
	boostMeter: function(increment){
		var newScale = this.timeMeter.scale.x + increment;
		if(newScale > 1){
			this.timeMeter.scale.x = 1;	
		}else if(newScale > 0){
			this.timeMeter.scale.x = newScale;
		}
		this.timeMeterHighlight.scale.x = this.timeMeter.scale.x;
	},
	updateScore: function(increment){
		this.score += increment;
		if(this.score < 0){
			this.score = 0;
		}
		this.scoreText.setText(this.score + "");
	},
	showHitScoreFlash: function(signIndex, plus){
		var scoreFlash;
		if(plus){
			scoreFlash = this.add.sprite(this.signs[signIndex].sprite.x + (this.signs[signIndex].sprite.width / 2), this.signs[signIndex].sprite.y - this.signs[signIndex].sprite.height, drSettings.spritesheet.key, drSettings.game.scoreFlash.positiveKey);
		}else{
			scoreFlash = this.add.sprite(this.signs[signIndex].sprite.x + (this.signs[signIndex].sprite.width / 2), this.signs[signIndex].sprite.y - this.signs[signIndex].sprite.height, drSettings.spritesheet.key, drSettings.game.scoreFlash.negativeKey);
		}
		scoreFlash.anchor.setTo(0.5, 0);
		this.game.add.tween(scoreFlash).to( { y: scoreFlash.y - 25 }, 500, Phaser.Easing.Sinusoidal.Out, true);
		var tween = this.game.add.tween(scoreFlash).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(this.cleanUpScoreFlash, this);
	},
	cleanUpScoreFlash: function(sprite){
		sprite.destroy();
	}
}