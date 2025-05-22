StampOut.topicWin = function(game){
	this.stampedCategoryIndex = null;
};

StampOut.topicWin.prototype = {
	
	init: function(categoryIndex){
		this.stampedCategoryIndex = categoryIndex;
		StampOut.saveState();
	},

	create: function(){
		this.add.sprite(0, 0, 'texture', stampOutSettings.topicWinScreen.backgroundKey);

		for (var i = 0; i < stampOutSettings.category.length; i++) {
			this.add.sprite(stampOutSettings.category[i].winScreenIcon.x, stampOutSettings.category[i].winScreenIcon.y, 'texture', stampOutSettings.category[i].winScreenIcon.key);
			if(StampOut.categoryStatus[i] == 1 && this.stampedCategoryIndex != i){
				this.add.sprite(stampOutSettings.category[i].winScreenIcon.stampX, stampOutSettings.category[i].winScreenIcon.stampY, 'texture', stampOutSettings.topicWinScreen.stampKey);
			}
		};

		this.time.events.add(Phaser.Timer.SECOND * 1, this.stampCategory, this);
		
	},

	stampCategory: function(){
		this.add.sprite(stampOutSettings.category[this.stampedCategoryIndex].winScreenIcon.stampX, stampOutSettings.category[this.stampedCategoryIndex].winScreenIcon.stampY, 'texture', stampOutSettings.topicWinScreen.stampKey);
		if(!this.allCategoriesStamped()){
			this.add.button(stampOutSettings.topicWinScreen.continueButton.x, stampOutSettings.topicWinScreen.continueButton.y, 'texture', this.handleContinue, this, stampOutSettings.topicWinScreen.continueButton.downKey, stampOutSettings.topicWinScreen.continueButton.outKey, stampOutSettings.topicWinScreen.continueButton.overKey,stampOutSettings.topicWinScreen.continueButton.upKey);

			createjs.Sound.play(stampOutSettings.topicWinScreen.stampSfxKey);
			//StampOut.audioSprite.play(stampOutSettings.topicWinScreen.stampSfxKey);
		}else{
			this.add.sprite(stampOutSettings.topicWinScreen.greatJob.x, stampOutSettings.topicWinScreen.greatJob.y, 'texture', stampOutSettings.topicWinScreen.greatJob.key);

			var prompt = this.add.text(stampOutSettings.topicWinScreen.winPrompt.x, stampOutSettings.topicWinScreen.winPrompt.y, stampOutSettings.topicWinScreen.winPrompt.text);
		    prompt.font = stampOutSettings.topicWinScreen.winPrompt.font;
	    	prompt.fontSize = stampOutSettings.topicWinScreen.winPrompt.size;
			prompt.fill = stampOutSettings.topicWinScreen.winPrompt.fill;
			prompt.wordWrapWidth = stampOutSettings.topicWinScreen.winPrompt.width;
			prompt.wordWrap = true;
			prompt.align = stampOutSettings.topicWinScreen.winPrompt.align;
			prompt.anchor.x = 0.5;

			this.add.button(stampOutSettings.topicWinScreen.playAgainButton.x, stampOutSettings.topicWinScreen.playAgainButton.y, 'texture', this.handlePlayAgain, this, stampOutSettings.topicWinScreen.playAgainButton.downKey, stampOutSettings.topicWinScreen.playAgainButton.outKey, stampOutSettings.topicWinScreen.playAgainButton.overKey,stampOutSettings.topicWinScreen.playAgainButton.upKey);
			StampOut.clearSavedState();

			var sfx = createjs.Sound.play(stampOutSettings.topicWinScreen.stampSfxKey);
			sfx.on("complete", this.playWinVO, this, true);
			/*var sfx = StampOut.audioSprite.play(stampOutSettings.topicWinScreen.stampSfxKey);
			sfx.onStop.add(this.playWinVO, this);*/

		}
		
	},

	playWinVO: function(){
		createjs.Sound.play(stampOutSettings.topicWinScreen.winVoKey);
		//sound.onStop.remove(this.playWinVO, this);
		//StampOut.audioSprite.play(stampOutSettings.topicWinScreen.winVoKey);
	},

	allCategoriesStamped: function(){
		var allStamped = true;
		for(var i = 0; i < StampOut.categoryStatus.length; i++){
			if(StampOut.categoryStatus[i] == 0){
				allStamped = false;
				break;
			};
		};
		return allStamped;
	},

	handleContinue: function(){
		//StampOut.audioSprite.stop();
		this.state.start('spinner');
	},

	handlePlayAgain: function(){
		//StampOut.audioSprite.stop();
		this.state.start('splash');
	},

	shutdown: function(){
		createjs.Sound.stop();
	}

}