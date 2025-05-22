DodgingRisks.instructions = function(game){
	this.dialogGroup = null;
	this.scoreText = null;
	this.ball = null;
	this.fastballMeter = null;
	this.lightningSignal = null;
	this.superballs = 0;
	this.score = 0;
	this.currentStep = 0;
	this.timeMeter = null;
	this.timeMeterHighlight = null;
	this.targetSigns = null;
	this.autoAdvanceTimerEvent = null;
}

DodgingRisks.instructions.prototype = {
	init: function(){
	},
	create: function(){
		this.add.sprite(drSettings.instructions.background.x, drSettings.instructions.background.y, drSettings.instructions.background.key);
		for (var i = 0; i < drSettings.instructions.backgroundSprites.length; i++) {
			this.add.sprite(drSettings.instructions.backgroundSprites[i].x, drSettings.instructions.backgroundSprites[i].y, drSettings.spritesheet.key, drSettings.instructions.backgroundSprites[i].key);
		};
		

		this.addSigns();

		for (var i = 0; i < drSettings.instructions.foregroundSprites.length; i++) {
			this.add.sprite(drSettings.instructions.foregroundSprites[i].x, drSettings.instructions.foregroundSprites[i].y, drSettings.spritesheet.key, drSettings.instructions.foregroundSprites[i].key);
		};
		this.scoreText = this.game.add.bitmapText(drSettings.instructions.scoreText.x, drSettings.instructions.scoreText.y, drSettings.instructions.scoreText.font, drSettings.instructions.scoreText.defaultText, drSettings.instructions.scoreText.size);

		this.dialogGroup = this.add.group();
		this.dialogGroup.x = drSettings.dialog.startAt.x;
		this.dialogGroup.y = drSettings.dialog.startAt.y;
		var dialogBox = this.add.sprite(0, 0, drSettings.spritesheet.key, drSettings.dialog.key, this.dialogGroup);
		dialogBox.anchor.setTo(0.5, 0.5);
		var dialogStyle = {
			font: drSettings.dialog.font, 
		 	fill: drSettings.dialog.fill, 
		 	fontSize: drSettings.dialog.size,
		 	wordWrap: true,
			wordWrapWidth: drSettings.dialog.wordWrapWidth,
		 	align: "center"
		}
		var dialogText = this.add.text(0, 0, "", dialogStyle, this.dialogGroup).anchor.setTo(0.5, 0.5);
		dialogText.lineSpacing = drSettings.dialog.lineSpacing;

		this.ball = this.add.sprite(drSettings.ball.x, drSettings.ball.y, drSettings.spritesheet.key, drSettings.ball.key);
		this.ball.anchor.setTo(0.5, 0.5);
		this.ball.visible = false;
		this.timeMeter = this.game.add.sprite(drSettings.instructions.meter.x, drSettings.instructions.meter.y, drSettings.spritesheet.key, drSettings.instructions.meter.key);
		this.timeMeter.scale.x = drSettings.instructions.meter.startScale;
		this.timeMeterHighlight = this.game.add.sprite(drSettings.instructions.meterHighlight.x, drSettings.instructions.meterHighlight.y, drSettings.spritesheet.key, drSettings.instructions.meterHighlight.key);
		this.timeMeterHighlight.alpha = 0;
		this.timeMeterHighlight.scale.x = drSettings.instructions.meter.startScale;
		this.fastballMeter = this.add.sprite(drSettings.instructions.fastballMeter.x, drSettings.instructions.fastballMeter.y, drSettings.spritesheet.key, drSettings.instructions.fastballMeter.keys[0]);
		this.lightningSignal = this.add.sprite(drSettings.instructions.lightningSignal.x, drSettings.instructions.lightningSignal.y, drSettings.spritesheet.key, drSettings.instructions.lightningSignal.key);
		this.lightningSignal.alpha = 0;

		this.superballs = 0;
		this.score = 0;
		this.currentStep = 0;
		this.nextStep();
	},
	addSigns: function(){
		this.targetSigns = [];
		var signStyle = {
			font: drSettings.sign.small.font, 
		 	fill: drSettings.sign.small.fill, 
		 	fontSize: drSettings.sign.small.size,
		 	wordWrap: true,
		 	wordWrapWidth: drSettings.sign.small.wordWrapWidth,
		 	align: "center"
		}
		for (var i = 0; i < drSettings.instructions.targetSigns.length; i++) {
			var sign = this.add.group();
			sign.x = drSettings.instructions.targetSigns[i].x;
			sign.y = drSettings.instructions.targetSigns[i].y;
			var signBack = this.add.sprite(0, 0, drSettings.spritesheet.key, drSettings.sign.small.wholeKey, sign);
			signBack.anchor.setTo(drSettings.sign.small.anchor.x, drSettings.sign.small.anchor.y);
			var signText = this.add.text(drSettings.sign.small.textOffset.x, drSettings.sign.small.textOffset.y, "-", signStyle, sign);
			signText.lineSpacing = drSettings.sign.small.lineSpacing;
			signText.anchor.setTo(0.5, 0.5);
			sign.rotation = drSettings.sign.small.downRotation;
			this.targetSigns.push(sign);
		};
	},
	nextStep: function(){
		this.cancelAutoAdvance();
		this.currentStep++;
		if(this.currentStep <= drSettings.instructions.steps.length){
			this.dialogGroup.getAt(1).text = drSettings.instructions.steps[this.currentStep - 1].text;
			DodgingRisks.audioSprite.stop();
			this.dialogGroup.getAt(1).lineSpacing = drSettings.dialog.lineSpacing;
			var vo = DodgingRisks.audioSprite.play(drSettings.instructions.steps[this.currentStep - 1].audio);
			vo.onStop.addOnce(this.handleAutoAdvanceDelay, this);
		}

		var leftSign = this.targetSigns[0];
		var leftCenterSign = this.targetSigns[1];
		var centerSign = this.targetSigns[2];
		var rightCenterSign = this.targetSigns[3];
		var rightSign = this.targetSigns[4];

		switch(this.currentStep){
			case 1:
				centerSign.getAt(1).text = "Skip school";

				this.game.add.tween(this.dialogGroup).to( { x: drSettings.dialog.endAt.x, y: drSettings.dialog.endAt.y }, 400, Phaser.Easing.Back.Out, true);
				this.game.add.tween(centerSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);
				this.enableThrow();
				break;
			case 2:
				centerSign.getAt(1).text = "Stand up for a friend";
				centerSign.getAt(0).frameName = drSettings.sign.small.wholeKey;

				this.game.add.tween(centerSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);
				this.enableThrow();
				break;
			case 3:
				centerSign.getAt(1).text = "";
				centerSign.getAt(0).frameName = "fastball-sign.png";

				leftSign.getAt(1).text = "Shoplift";
				leftSign.getAt(0).frameName = drSettings.sign.small.wholeKey;
				leftCenterSign.getAt(1).text = "Cheat on a test";
				leftCenterSign.getAt(0).frameName = drSettings.sign.small.wholeKey;
				rightCenterSign.getAt(1).text = "Try chewing tobacco";
				rightCenterSign.getAt(0).frameName = drSettings.sign.small.wholeKey;
				rightSign.getAt(1).text = "Steal money from a friend";
				rightSign.getAt(0).frameName = drSettings.sign.small.wholeKey;

				this.game.add.tween(centerSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);
				this.enableThrow();
				break;
			case 4:
				centerSign.getAt(1).text = "";
				centerSign.getAt(0).frameName = "lightning-sign.png";
				leftSign.getAt(1).text = "Stand up for a friend";
				leftSign.getAt(0).frameName = drSettings.sign.small.wholeKey;
				rightSign.getAt(1).text = "Skip school";
				rightSign.getAt(0).frameName = drSettings.sign.small.wholeKey;

				this.game.add.tween(centerSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);
				this.game.add.tween(leftSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);
				this.game.add.tween(rightSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);
				this.enableThrow();
				break;
			case 5:
				centerSign.getAt(1).text = "";
				centerSign.getAt(0).frameName = "meter-boost-sign.png";
				this.game.add.tween(centerSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);
				this.enableThrow();
				break;
			case 6:
				centerSign.getAt(1).text = "Start";
				centerSign.getAt(0).frameName = drSettings.sign.small.wholeKey;
				this.game.add.tween(centerSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);
				this.enableThrow();
				break;
			case 7:
				var tween = this.game.add.tween(this.dialogGroup).to( { x: drSettings.dialog.startAt.x, y: drSettings.dialog.startAt.y }, 400, Phaser.Easing.Back.In, true);
				tween.onComplete.add(this.goToDodgeBall, this);
				break;
		}
	},
	enableThrow: function(){
		this.game.input.onDown.add(this.catchClick, this);
	},
	disableThrow: function(){
		this.game.input.onDown.remove(this.catchClick, this);
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
			if(this.superballs > 0){
				throwSpeed = drSettings.ball.throwDurationFast;
				this.superballs--;
				this.fastballMeter.frameName = drSettings.instructions.fastballMeter.keys[this.superballs];
			}
			this.game.add.tween(this.ball).to( { x: position.x }, throwSpeed, Phaser.Easing.Linear.None, true);
			this.game.add.tween(this.ball).to( { y: position.y }, throwSpeed, Phaser.Easing.Back.Out, true);
			var scaleTween = this.game.add.tween(this.ball.scale).to( {x: drSettings.ball.scale.end, y: drSettings.ball.scale.end}, throwSpeed, Phaser.Easing.Linear.None, true);
			scaleTween.onComplete.add(this.handleThrowEnd, this);
			DodgingRisks.audioSprite.play(drSettings.ball.throwAudioKey);
		}
	},
	handleThrowEnd: function(){
		this.ball.visible = false;
		this.checkSignHit();
	},
	checkSignHit: function(){
		var checkSigns = [];
		switch(this.currentStep){
			case 1:
				checkSigns.push(this.targetSigns[2]);
				break;
			case 2:
				checkSigns.push(this.targetSigns[2]);
				break;
			case 3:
				checkSigns.push(this.targetSigns[2], this.targetSigns[0], this.targetSigns[1], this.targetSigns[3], this.targetSigns[4]);
				break;
			case 4:
				checkSigns.push(this.targetSigns[0], this.targetSigns[2], this.targetSigns[4]);
				break;
			case 5:
				checkSigns.push(this.targetSigns[2]);
				break;
			case 6:
				checkSigns.push(this.targetSigns[2]);
				break;
		}
		var ballBounds = this.ball.getBounds();
		var signHit = null;
		for (var i = checkSigns.length - 1; i >= 0; i--) {
			var signBounds = checkSigns[i].getBounds();
			signBounds.height += drSettings.sign.small.hitAreaOffset.height;
			signBounds.width += drSettings.sign.small.hitAreaOffset.width;
			signBounds.x += drSettings.sign.small.hitAreaOffset.x;
			signBounds.y += drSettings.sign.small.hitAreaOffset.y;
			if(Phaser.Rectangle.intersects(signBounds, ballBounds)){
				signHit = checkSigns[i];
				break;
			}
		}
		if(signHit != null){
			this.disableThrow();
			this.handleSignHit(signHit);
		}
	},
	handleSignHit: function(sign){
		switch(this.currentStep){
			case 1:
				this.destroySign(sign);
				this.cancelAutoAdvance();
				this.game.time.events.add(1000, this.nextStep, this);
				this.boostMeter(0.05);
				this.updateScore(25);
				this.showHitScoreFlash(sign, true);
				break;
			case 2:
				DodgingRisks.audioSprite.play(drSettings.ball.misHitAudioKey);
				this.game.time.events.add(1000, this.retractSign, this, sign);
				this.cancelAutoAdvance();
				this.game.time.events.add(1500, this.nextStep, this);
				this.boostMeter(-0.05);
				this.updateScore(-25);
				this.showHitScoreFlash(sign, false);
				break;
			case 3:
				this.destroySign(sign);
				if(sign == this.targetSigns[2]){
					this.game.add.tween(this.targetSigns[0]).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 500);
					this.game.add.tween(this.targetSigns[1]).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 500);
					this.game.add.tween(this.targetSigns[3]).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 500);
					this.game.add.tween(this.targetSigns[4]).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 500);
					this.superballs = 4;
					this.fastballMeter.frameName = drSettings.instructions.fastballMeter.keys[this.superballs];
				}else{
					this.boostMeter(0.05);
					this.updateScore(25);
					this.showHitScoreFlash(sign, true);
					if(this.targetSigns[0].getAt(0).frameName == drSettings.sign.small.brokeKey && 
					   this.targetSigns[1].getAt(0).frameName == drSettings.sign.small.brokeKey && 
					   this.targetSigns[3].getAt(0).frameName == drSettings.sign.small.brokeKey && 
					   this.targetSigns[4].getAt(0).frameName == drSettings.sign.small.brokeKey){
						this.cancelAutoAdvance();
						this.game.time.events.add(1000, this.nextStep, this);
					}
				}
				
				this.enableThrow();
				break;
			case 4:
				if(sign == this.targetSigns[2]){
					this.destroySign(sign);
					this.lightningSignal.alpha = 1;
					this.game.add.tween(this.lightningSignal).to( { alpha: 0 }, 1000, Phaser.Easing.Sinusoidal.In, true, 0, 0, false);
					if(this.targetSigns[4].frameName != drSettings.sign.small.brokeKey){
						this.destroySign(this.targetSigns[4]);
						this.boostMeter(0.05);
						this.updateScore(25);
						this.showHitScoreFlash(this.targetSigns[4], true);
					}
					if(this.targetSigns[0].frameName != drSettings.sign.small.brokeKey){
						this.game.time.events.add(500, this.retractSign, this, this.targetSigns[0]);
					}
					this.cancelAutoAdvance();
					this.game.time.events.add(1000, this.nextStep, this);
				}else{
					if(sign == this.targetSigns[4]){
						this.destroySign(sign);
						this.boostMeter(0.05);
						this.updateScore(25);
						this.showHitScoreFlash(this.targetSigns[4], true);
					}else{
						misHitSound.play();
						this.boostMeter(-0.05);
						this.updateScore(-25);
						this.showHitScoreFlash(this.targetSigns[0], false);
					}
					this.enableThrow();
				}
				break;
			case 5:
				this.destroySign(sign);
				this.cancelAutoAdvance();
				this.game.time.events.add(1000, this.nextStep, this);
				this.boostMeter(0.05*3);
				this.game.add.tween(this.timeMeterHighlight).to( { alpha: 1 }, 500, Phaser.Easing.Sinusoidal.Out, true, 0, 0, true);
				break;
			case 6:
				this.destroySign(sign);
				this.cancelAutoAdvance();
				this.game.time.events.add(1000, this.nextStep, this);
				break;
		}
	},
	destroySign: function(sign){
		DodgingRisks.audioSprite.play(drSettings.ball.hitSignAudioKey);
		sign.getAt(0).frameName = drSettings.sign.small.brokeKey;
		sign.getAt(1).text = " ";
		this.game.time.events.add(500, this.retractSign, this, sign);
	},
	retractSign: function(sign){
		this.game.add.tween(sign).to( { rotation: drSettings.sign.small.downRotation }, 250, Phaser.Easing.Cubic.Out, true);
	},
	goToDodgeBall: function(){
		DodgingRisks.audioSprite.stop();
		this.game.state.start("DodgeBall");
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
	showHitScoreFlash: function(sign, plus){
		var scoreFlash;
		if(plus){
			scoreFlash = this.game.add.sprite(sign.x + (sign.width / 2), sign.y - sign.height, drSettings.spritesheet.key, drSettings.instructions.scoreFlash.positiveKey);
		}else{
			scoreFlash = this.game.add.sprite(sign.x + (sign.width / 2), sign.y - sign.height, drSettings.spritesheet.key, drSettings.instructions.scoreFlash.negativeKey);
		}
		scoreFlash.anchor.setTo(0.5, 0);
		this.game.add.tween(scoreFlash).to( { y: scoreFlash.y - 25 }, 500, Phaser.Easing.Sinusoidal.Out, true);
		tween = this.game.add.tween(scoreFlash).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
		tween.onComplete.add(this.cleanUpScoreFlash, this);
	},
	cleanUpScoreFlash: function(sprite){
		sprite.destroy();
	},
	handleAutoAdvanceDelay: function(sound){
		if(sound.currentTime >= sound.durationMS && this.currentStep < 6){
			//console.log("initiate auto advance (" + drSettings.instructions.steps[this.currentStep - 1].autoAdvanceDelay + "ms)");
			this.autoAdvanceTimerEvent = this.time.events.add(drSettings.instructions.steps[this.currentStep - 1].autoAdvanceDelay, this.autoAdvance, this);
		}
	},

	cancelAutoAdvance: function(){
		if(this.autoAdvanceTimerEvent != null){
			//console.log("cancel auto advance");
			this.time.events.remove(this.autoAdvanceTimerEvent);
		}
	},

	autoAdvance: function(){
		//console.log("execute auto advance");
		this.autoAdvanceTimerEvent = null;
		for (var i = 0; i < this.targetSigns.length; i++) {
			this.retractSign(this.targetSigns[i]);
		}
		if(this.currentStep == 3){
			this.superballs = 0;
			this.fastballMeter.frameName = drSettings.instructions.fastballMeter.keys[this.superballs];
		}
		this.time.events.add(500, this.nextStep, this);
	}
}