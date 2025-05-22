DodgingRisks.gameOver = function(game){
	this.playAgainSign = null;
	this.dialogGroup = null;
	this.ball = null;
	this.score = null;
}

DodgingRisks.gameOver.prototype = {
	init: function(finalScore){
		this.score = finalScore;
	},
  	create: function(){

		this.add.sprite(drSettings.game.background.x, drSettings.game.background.y, drSettings.game.background.key);

		for (var i = 0; i < drSettings.game.backgroundSprites.length; i++) {
			this.add.sprite(drSettings.game.backgroundSprites[i].x, drSettings.game.backgroundSprites[i].y, drSettings.spritesheet.key, drSettings.game.backgroundSprites[i].key);
		};

		this.game.add.bitmapText(drSettings.game.scoreText.x, drSettings.game.scoreText.y, drSettings.game.scoreText.font, "" + this.score, drSettings.game.scoreText.size);

		var signStyle = {
			font: drSettings.sign.small.font, 
		 	fill: drSettings.sign.small.fill, 
		 	fontSize: drSettings.sign.small.size,
		 	wordWrap: true,
		 	wordWrapWidth: drSettings.sign.small.wordWrapWidth,
		 	align: "center"
		}
		this.playAgainSign = this.add.group();
		this.playAgainSign.x = drSettings.gameOver.sign.x;
		this.playAgainSign.y = drSettings.gameOver.sign.y;
		var signBack = this.add.sprite(0, 0, drSettings.spritesheet.key, drSettings.sign.small.wholeKey, this.playAgainSign);
		signBack.anchor.setTo(drSettings.sign.small.anchor.x, drSettings.sign.small.anchor.y);
		var signText = this.add.text(drSettings.sign.small.textOffset.x, drSettings.sign.small.textOffset.y, drSettings.gameOver.sign.text, signStyle, this.playAgainSign);
		signText.lineSpacing = drSettings.sign.small.lineSpacing;
		signText.anchor.setTo(0.5, 0.5);
		this.playAgainSign.rotation = drSettings.sign.small.downRotation;

		var mask = this.add.graphics(drSettings.game.signMasks[0].x, drSettings.game.signMasks[0].y);
		mask.beginFill(0xffffff);
		mask.drawRect(0, 0, drSettings.game.signMasks[0].width, drSettings.game.signMasks[0].height);
		mask.endFill();
		this.playAgainSign.mask = mask;

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
		var message = "";
		for (var i = 0; i < drSettings.gameOver.feedback.length; i++) {
			if(this.score >= drSettings.gameOver.feedback[i].ifGreaterThan){
				message = drSettings.gameOver.feedback[i].message;
				DodgingRisks.audioSprite.play(drSettings.gameOver.feedback[i].audio);
				break;
			}
		};
		var dialogText = this.add.text(0, 0, message, dialogStyle, this.dialogGroup);
		dialogText.anchor.setTo(0.5, 0.5);
		dialogText.lineSpacing = drSettings.dialog.lineSpacing;

		this.ball = this.add.sprite(drSettings.ball.x, drSettings.ball.y, drSettings.spritesheet.key, drSettings.ball.key);
		this.ball.anchor.setTo(0.5, 0.5);
		this.ball.visible = false;

		this.game.add.tween(this.dialogGroup).to( { y: drSettings.dialog.endAt.x, y: drSettings.dialog.endAt.y }, 400, Phaser.Easing.Back.Out, true);
		this.add.tween(this.playAgainSign).to( { rotation: drSettings.sign.small.upRotation }, drSettings.sign.small.flipDuration, Phaser.Easing.Back.Out, true, 250);


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
		var ballBounds = this.ball.getBounds();
		var signBounds = this.playAgainSign.getBounds();
		signBounds.height += drSettings.sign.small.hitAreaOffset.height;
		signBounds.width += drSettings.sign.small.hitAreaOffset.width;
		signBounds.x += drSettings.sign.small.hitAreaOffset.x;
		signBounds.y += drSettings.sign.small.hitAreaOffset.y;
		if(Phaser.Rectangle.intersects(signBounds, ballBounds)){
			this.destroySign(this.playAgainSign);
			this.game.time.events.add(500, this.animateOff, this);
		}
	},
	destroySign: function(sign){
		DodgingRisks.audioSprite.play(drSettings.ball.hitSignAudioKey);

		this.game.input.onDown.remove(this.catchClick, this);
		sign.getAt(0).frameName = drSettings.sign.small.brokeKey;
		sign.getAt(1).text = " ";
	},
	animateOff: function(){
		this.game.add.tween(this.playAgainSign).to( { rotation: drSettings.sign.small.downRotation }, 250, Phaser.Easing.Cubic.Out, true);
		
		var tween = this.game.add.tween(this.dialogGroup).to( { x: drSettings.dialog.startAt.x, y: drSettings.dialog.startAt.y }, 400, Phaser.Easing.Back.In, true);
		tween.onComplete.add(this.goToReady, this);
	},
	goToReady: function(){
		DodgingRisks.audioSprite.stop();
		this.game.state.start("Ready");
  	}
}