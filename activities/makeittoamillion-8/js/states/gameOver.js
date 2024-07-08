Millionaire.gameOver = function(game){
	this.towerHighlights = null;
	this.talkGroup = null;
	this.win = null;
	this.emitter = null;
};

Millionaire.gameOver.prototype = {
	
	init: function(winner){
		this.win = winner;
	},

	update: function(){
	},

	create: function(){
		for (var i = 0; i < MillionaireSettings.question.backgroundElements.length; i++) {
			Millionaire.addImage(MillionaireSettings.question.backgroundElements[i], this);
		}

		this.towerHighlights = [];
		for (i = 0; i < MillionaireSettings.question.towerHighlights.length; i++) {
			this.towerHighlights.push(Millionaire.addImage(MillionaireSettings.question.towerHighlights[i], this));
		}
		Millionaire.addImage(MillionaireSettings.question.towerForeground, this);

		this.updateTower();
		this.storeHighScore();
		//this.showHostTalk();
		if(this.win){
			this.showHostTalk();
		}else{
			this.playLoseSound();
		}
	},

	updateTower: function(){
		for (var i = 0; i < this.towerHighlights.length; i++) {
			if(i < Millionaire.questionNumber){
				this.towerHighlights[i].frameName = MillionaireSettings.question.towerHighlights[i].usedKey;
			}else{
				if(i == Millionaire.questionNumber){
					this.towerHighlights[i].frameName = MillionaireSettings.question.towerHighlights[i].activeKey;
				}
			}
		}
	},

	playLoseSound: function(){
		var sound = Millionaire.soundSprite.play(MillionaireSettings.gameOver.loseSFX.key, MillionaireSettings.gameOver.loseSFX.volume);
		sound.onStop.add(this.showHostTalk, this);
	},

	/*playLoseVO: function(){
		Millionaire.soundSprite.play(MillionaireSettings.gameOver.loseVO);
		this.showHostTalk();
	},*/

	showHostTalk: function(){
		this.talkGroup = this.add.group();
		Millionaire.addImage(MillionaireSettings.question.talkBubble, this, this.talkGroup);
		if(this.win){
			Millionaire.addText(MillionaireSettings.question.questionIntro, this, MillionaireSettings.gameOver.winMessage.text, this.talkGroup);
			Millionaire.addImage(MillionaireSettings.gameOver.winGraphic, this);
			this.showConfetti();
			Millionaire.soundSprite.play(MillionaireSettings.gameOver.winVO);
		}else{
			Millionaire.addText(MillionaireSettings.question.questionIntro, this, MillionaireSettings.gameOver.loseMessage.text, this.talkGroup);
			Millionaire.soundSprite.play(MillionaireSettings.gameOver.loseVO);
		}
		Millionaire.addButton(MillionaireSettings.gameOver.playAgainButton, this.handlePlayAgain, this);
	},

	handlePlayAgain: function(){
		Millionaire.soundSprite.stop();
		this.state.start('instructions');
	},

	showConfetti: function(){
		this.emitter = this.add.emitter(MillionaireSettings.gameOver.confetti.x, MillionaireSettings.gameOver.confetti.y, MillionaireSettings.gameOver.confetti.particles);
		this.emitter.width = MillionaireSettings.gameOver.confetti.width;
		this.emitter.setXSpeed(MillionaireSettings.gameOver.confetti.minXSpeed, MillionaireSettings.gameOver.confetti.maxXSpeed);
		this.emitter.setYSpeed(MillionaireSettings.gameOver.confetti.minYSpeed, MillionaireSettings.gameOver.confetti.maxYSpeed);
		this.emitter.setRotation(MillionaireSettings.gameOver.confetti.minRotation, MillionaireSettings.gameOver.confetti.maxRotation);
		this.emitter.gravity = MillionaireSettings.gameOver.confetti.gravity;
		this.emitter.makeParticles(MillionaireSettings.gameOver.confetti.texture, MillionaireSettings.gameOver.confetti.frames);
		this.emitter.start(false, MillionaireSettings.gameOver.confetti.lifespan, MillionaireSettings.gameOver.confetti.frequency, 0);

		this.time.events.loop(MillionaireSettings.gameOver.confetti.shimmerFrequency, this.shimmer, this);
	},

	shimmer: function(){
		for (var i = 0; i < MillionaireSettings.gameOver.confetti.shimmerMultiplier; i++) {
			var particle = this.emitter.getRandomExists();
			if(particle != null){
				if(particle.frameName != MillionaireSettings.gameOver.confetti.shimmerFrame){
					particle.animations.add("shimmer", [MillionaireSettings.gameOver.confetti.shimmerFrame, particle.frameName ], MillionaireSettings.gameOver.confetti.shimmerFrameRate, false, false);
					particle.animations.play("shimmer");
				}
			}
		}
	},

	storeHighScore: function(){
		if(MillionaireSettings.scormEnabled){
			var sd = SCORM_API_adapter.getSuspendData();
			if(sd == "" || sd == null){
				SCORM_API_adapter.setSuspendData(Millionaire.questionNumber);
			}else{
				var storedScore = Number(sd);
				if(Number(Millionaire.questionNumber) > storedScore){
					SCORM_API_adapter.setSuspendData(Millionaire.questionNumber);
				}
			}
		}
	},

	shutdown: function(){
		for (var i = 0; i < this.towerHighlights.length; i++) {
			this.towerHighlights[i].destroy();
		}
		if(this.talkGroup != null){
			this.talkGroup.destroy();
		}
		if(this.emitter != null){
			this.emitter.destroy();
			this.emitter = null;
		}
	}

}