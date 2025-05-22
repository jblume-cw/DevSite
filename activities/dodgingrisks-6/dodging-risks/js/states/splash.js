DodgingRisks.splash = function(game){
	this.learnGroup = null;
	this.playGroup = null;
	this.ball = null;
}

DodgingRisks.splash.prototype = {
  	create: function(){
		this.add.sprite(0, 0, drSettings.spritesheet.key, drSettings.splash.backgroundKey);

		var signStyle = {
			font: drSettings.sign.large.font, 
		 	fill: drSettings.sign.large.fill, 
		 	fontSize: drSettings.sign.large.size,
		 	align: "center"
		}

		this.playGroup = this.add.group();
		this.playGroup.x = drSettings.splash.playSign.x;
		this.playGroup.y = drSettings.splash.playSign.y;
		var playSign = this.add.sprite(0, 0, drSettings.spritesheet.key, drSettings.sign.large.wholeKey, this.playGroup);
		playSign.anchor.setTo(drSettings.sign.large.anchor.x, drSettings.sign.large.anchor.y);
		var playText = this.add.text(drSettings.sign.large.textOffset.x, drSettings.sign.large.textOffset.y, drSettings.splash.playSign.text, signStyle, this.playGroup);
		playText.anchor.setTo(0.5, 0.5);
		this.playGroup.rotation = drSettings.sign.large.downRotation;
		this.game.add.tween(this.playGroup).to( { rotation: drSettings.sign.large.upRotation }, drSettings.sign.large.flipDuration, Phaser.Easing.Back.Out, true, 100);

		this.learnGroup = this.add.group();
		this.learnGroup.x = drSettings.splash.instructionsSign.x;
		this.learnGroup.y = drSettings.splash.instructionsSign.y;
		var learnSign = this.add.sprite(0, 0, drSettings.spritesheet.key, drSettings.sign.large.wholeKey, this.learnGroup);
		learnSign.anchor.setTo(drSettings.sign.large.anchor.x, drSettings.sign.large.anchor.y);
		var learnText = this.add.text(drSettings.sign.large.textOffset.x, drSettings.sign.large.textOffset.y, drSettings.splash.instructionsSign.text, signStyle, this.learnGroup);
		learnText.anchor.setTo(0.5, 0.5);
		this.learnGroup.rotation = drSettings.sign.large.downRotation;
		this.game.add.tween(this.learnGroup).to( { rotation: drSettings.sign.large.upRotation }, drSettings.sign.large.flipDuration, Phaser.Easing.Back.Out, true, 100);

		this.ball = this.add.sprite(drSettings.ball.x, drSettings.ball.y, drSettings.spritesheet.key, drSettings.ball.key);
		this.ball.anchor.setTo(0.5, 0.5);
		this.ball.visible = false;

		this.game.input.onDown.add(this.catchClick, this);
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
		var playSignBounds = this.playGroup.getBounds();
		var learnToPlayBounds = this.learnGroup.getBounds();
		var ballBounds = this.ball.getBounds();

		playSignBounds.height += drSettings.sign.large.hitAreaOffset.height;
		playSignBounds.width += drSettings.sign.large.hitAreaOffset.width;
		playSignBounds.x += drSettings.sign.large.hitAreaOffset.x;
		playSignBounds.y += drSettings.sign.large.hitAreaOffset.y;

		learnToPlayBounds.height += drSettings.sign.large.hitAreaOffset.height;
		learnToPlayBounds.width += drSettings.sign.large.hitAreaOffset.width;
		learnToPlayBounds.x += drSettings.sign.large.hitAreaOffset.x;
		learnToPlayBounds.y += drSettings.sign.large.hitAreaOffset.y;
		
		if(Phaser.Rectangle.intersects(playSignBounds, ballBounds)){
			this.destroySign(this.playGroup);
			this.game.time.events.add(1000, this.goToPlay, this);
		}else{
			if(Phaser.Rectangle.intersects(learnToPlayBounds, ballBounds)){
				this.destroySign(this.learnGroup);
				this.game.time.events.add(1000, this.goToLearn, this);
			}
		}
	},
	destroySign: function(sign){
		DodgingRisks.audioSprite.play(drSettings.ball.hitSignAudioKey);
		this.game.input.onDown.remove(this.catchClick, this);
		sign.getAt(0).frameName = drSettings.sign.large.brokeKey;
		sign.getAt(1).destroy();
	},
	goToPlay: function(){
		this.game.state.start("Ready");
	},
	goToLearn: function(){
		this.game.state.start("Instructions");
	}
}