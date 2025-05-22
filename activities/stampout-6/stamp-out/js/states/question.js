StampOut.question = function(game){
	this.categoryIndex = null;
	this.questionIndex = null;
	this.puButtons = null;
	this.optionButtons = null;
	this.optionTexts = null;
	this.correct = null;
	this.forStamp = null;
	this.streakMeter = null;

	this.powerUpPrompt = null;
	this.powerUpIndexInUse = null;
	this.eliminatedOptions = null;
	this.attemptsRemaining = null;
	this.remediationSfx = null;
	this.loaderGroup = null;
	this.rotator = null;
};

StampOut.question.prototype = {
	
	init: function(categoryIndex, forStamp){
		//console.log("categoryIndex " + categoryIndex);
		if(StampOut.questionPool.length == 0){
			this.resetQuestionPool();
		}
		this.categoryIndex = categoryIndex;
		this.questionIndex = this.getQuestionIndex(categoryIndex);
		this.puButtons = [];
		this.optionButtons = [];
		this.optionTexts = [];
		this.correct = false;
		if(forStamp != null){
			this.forStamp = forStamp;
		}else{
			this.forStamp = false;
		}
		this.powerUpIndexInUse = null;
		this.eliminatedOptions = [];
		this.attemptsRemaining = 1;
	},

	create: function(){
		var sounds = [stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].audioData];
		var loadResult = createjs.Sound.registerSounds(sounds, "audio/");
		if(loadResult[0] == true){
			this.startBuild();
		}else{
			createjs.Sound.on("fileload", this.audioLoaded, this, true);
			this.showLoader();
		}
	},

	showLoader: function(){
		this.loaderGroup = this.add.group();

		var background = this.add.graphics(0, 0);
		background.beginFill(stampOutSettings.loader.backgroundColor);
		background.drawRect(0, 0, this.world.width, this.world.height);
    	background.endFill();

		this.rotator = this.add.sprite(stampOutSettings.loader.rotator.x, stampOutSettings.loader.rotator.y, stampOutSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: stampOutSettings.loader.label.font, 
		 	fill: stampOutSettings.loader.label.fill, 
		 	fontSize: stampOutSettings.loader.label.size,
		 	align: "center"
		};
		var loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - stampOutSettings.loader.label.padding, 
			                           stampOutSettings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 1;

		this.loaderGroup.add(background);
		this.loaderGroup.add(this.rotator);
		this.loaderGroup.add(loaderText);
	},

	removeLoader: function(){
		this.loaderGroup.destroy();
	},

	audioLoaded: function(){
		this.removeLoader();
		this.startBuild();
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += stampOutSettings.loader.rotator.speed;
		}
	},

	startBuild: function(){
		this.add.sprite(0, 0, 'texture', stampOutSettings.category[this.categoryIndex].questionBackgroundKey);
		this.showPowerUpButtons();
		if(!this.forStamp){
			this.showStreakMeter();
		}
		this.showQuestion();
	},

	showPowerUpButtons: function(){
		this.add.sprite(stampOutSettings.questionScreen.powerUpLabelX, stampOutSettings.questionScreen.powerUpLabelY, 'texture', stampOutSettings.questionScreen.powerUpLabelKey);
		for (var i = 0; i < stampOutSettings.powerUp.length; i++) {
			if(StampOut.powerUpStatus[i] == 0){
				this.puButtons.push(this.add.button(stampOutSettings.powerUp[i].questionButtonX, stampOutSettings.powerUp[i].questionButtonY, 'texture', this.selectPowerUp, this, stampOutSettings.powerUp[i].questionButtonOverKey, stampOutSettings.powerUp[i].questionButtonOutKey, stampOutSettings.powerUp[i].questionButtonDownKey,stampOutSettings.powerUp[i].questionButtonUpKey));
			}else{
				this.puButtons.push(this.add.sprite(stampOutSettings.powerUp[i].questionButtonX, stampOutSettings.powerUp[i].questionButtonY, 'texture', stampOutSettings.powerUp[i].questionButtonDisabledKey));
			}
		};
	},

	refreshPowerUpButtons: function(){
		for (var i = 0; i < this.puButtons.length; i++) {
			this.puButtons[i].destroy();
		};
		this.puButtons = [];
		this.showPowerUpButtons();
	},

	disablePowerUpButtons: function(){
		for (var i = 0; i < this.puButtons.length; i++) {
			this.puButtons[i].inputEnabled = false;
		}
	},

	enablePowerUpButtons: function(){
		for (var i = 0; i < this.puButtons.length; i++) {
			this.puButtons[i].inputEnabled = true;
		}
	},

	showStreakMeter: function(){
		this.streakMeter = this.add.sprite(stampOutSettings.streak[StampOut.currentStreak].x, stampOutSettings.streak[StampOut.currentStreak].y, 'texture', stampOutSettings.streak[StampOut.currentStreak].key);
	},

	removeStreakMeter: function(){
		this.streakMeter.destroy();
	},

	selectOption: function(button){
		//this.disableOptions();
		//this.disablePowerUpButtons();
		var index = this.optionButtons.indexOf(button);
		button.setFrames(stampOutSettings.questionScreen.optionLabelHighlightKey[index], stampOutSettings.questionScreen.optionLabelHighlightKey[index], stampOutSettings.questionScreen.optionLabelHighlightKey[index], stampOutSettings.questionScreen.optionLabelHighlightKey[index]);
		this.optionTexts[index].fill = stampOutSettings.questionScreen.optionText.highlightFill;
		if(stampOutSettings.questionScreen.optionText.highlightShadow.use){
			this.optionTexts[index].setShadow(stampOutSettings.questionScreen.optionText.highlightShadow.offset, stampOutSettings.questionScreen.optionText.highlightShadow.offset, stampOutSettings.questionScreen.optionText.highlightShadow.color);
		}
		this.showRemediation(index);
	},

	showRemediation: function(chosenIndex){
		this.attemptsRemaining--;
		//StampOut.audioSprite.stop();
		createjs.Sound.stop();
		if(stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].correctIndex == chosenIndex){
			this.correct = true;
			if(this.forStamp){
				StampOut.categoryStatus[this.categoryIndex] = 1;
			}else{
				StampOut.currentStreak++;
			}

			//this.remediationSfx = StampOut.audioSprite.play(stampOutSettings.questionScreen.correctSfxKey);
			this.remediationSfx = createjs.Sound.play(stampOutSettings.questionScreen.correctSfxKey);
		}else{
			if(this.attemptsRemaining == 0){
				this.correct = false;
				//if(!this.forStamp){
					StampOut.currentStreak = 0;
				//}
			}else{
				this.eliminateOption(chosenIndex);
			}

			//this.remediationSfx = StampOut.audioSprite.play(stampOutSettings.questionScreen.incorrectSfxKey);
			this.remediationSfx = createjs.Sound.play(stampOutSettings.questionScreen.incorrectSfxKey);
		}
		this.remediationSfx.on("complete", this.playRemediationVO, this, true, { index: chosenIndex });
		//this.remediationSfx.onStop.add(this.playRemediationVO, this, 0, chosenIndex);

		this.add.sprite(stampOutSettings.questionScreen.remediationBackgroundX, stampOutSettings.questionScreen.remediationBackgroundY, 'texture', stampOutSettings.questionScreen.remediationBackgroundKey);
		var text = this.add.text(42, 433, stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].remediation[chosenIndex]);
		text.font = stampOutSettings.questionScreen.remediationText.font;
		text.fill = stampOutSettings.questionScreen.remediationText.fill;
		text.fontSize = stampOutSettings.questionScreen.remediationText.size;
		text.wordWrapWidth = this.world.width - stampOutSettings.questionScreen.remediationText.paddingRight - text.x;
		text.wordWrap = true;

		if(this.correct || this.attemptsRemaining == 0){
			this.add.button(stampOutSettings.questionScreen.continueButton.x, stampOutSettings.questionScreen.continueButton.y, 'texture', this.handleContinue, this, stampOutSettings.questionScreen.continueButton.downKey, stampOutSettings.questionScreen.continueButton.outKey, stampOutSettings.questionScreen.continueButton.overKey,stampOutSettings.questionScreen.continueButton.upKey);
			this.disableOptions();
		}
		this.disablePowerUpButtons();
		

		if(this.streakMeter != null){
			//this.streakMeter.bringToTop();
			this.removeStreakMeter();
			this.showStreakMeter();
		}
	},

	//playRemediationVO: function(sound, priority, optionIndex){
	playRemediationVO: function(event, data){
		//this.remediationSfx.onStop.remove(this.playRemediationVO, this);
		if(stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].remediationAudio[data.index] != ""){
			createjs.Sound.play(stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].remediationAudio[data.index]);
			//StampOut.audioSprite.play(stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].remediationAudio[data.index]);
		}
		
	},

	showQuestion: function(){
		//Question
		var qText = this.add.text(stampOutSettings.questionScreen.questionText.x, stampOutSettings.questionScreen.questionText.y, stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].questionText);
	    qText.font = stampOutSettings.questionScreen.questionText.font;
    	qText.fontSize = stampOutSettings.questionScreen.questionText.size;
		qText.fill = stampOutSettings.questionScreen.questionText.fill;
		qText.wordWrapWidth = this.world.width - stampOutSettings.questionScreen.questionText.paddingRight - stampOutSettings.questionScreen.questionText.x;
		qText.wordWrap = true;
		//Options
		var currY = qText.y + qText.height + stampOutSettings.questionScreen.questionText.paddingBottom;
		for (var i = 0; i < stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].option.length; i++) {
			var oText = this.add.text(stampOutSettings.questionScreen.optionText.x, currY, stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].option[i]);
			oText.font = stampOutSettings.questionScreen.optionText.font;
    		oText.fontSize = stampOutSettings.questionScreen.optionText.size;
			oText.fill = stampOutSettings.questionScreen.optionText.fill;
			oText.wordWrapWidth = this.world.width - stampOutSettings.questionScreen.optionText.paddingRight - stampOutSettings.questionScreen.optionText.x;
			oText.wordWrap = true;

			currY = oText.y + oText.height + stampOutSettings.questionScreen.optionText.paddingBottom;

			var oLabel = this.add.button(qText.x, oText.y + (oText.height / 2), 'texture', this.selectOption, this,stampOutSettings.questionScreen.optionLabelHighlightKey[i], stampOutSettings.questionScreen.optionLabelKey[i], stampOutSettings.questionScreen.optionLabelHighlightKey[i], stampOutSettings.questionScreen.optionLabelKey[i]);
			oLabel.anchor.y = .5;
			oLabel.hitArea = new PIXI.Rectangle(-oLabel.offsetX, -oLabel.offsetY, ((oText.x + oText.width) - oLabel.left), ((oText.y + oText.height) - oLabel.top));

			this.optionButtons.push(oLabel);
			this.optionTexts.push(oText);
		};

		if(stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].questionAudio != ""){
			createjs.Sound.play(stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].questionAudio);
			//StampOut.audioSprite.play(stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].questionAudio);
		}
		

		var alphabet = ["a", "b", "c", "d"];
		//console.log("question " + (this.questionIndex + 1) + " correct: " + alphabet[stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].correctIndex]);
	},

	disableOptions: function(){
		for (var i = 0; i < this.optionButtons.length; i++) {
			this.optionButtons[i].inputEnabled = false;
		};
	},

	enableOptions: function(){
		for (var i = 0; i < this.optionButtons.length; i++) {
			this.optionButtons[i].inputEnabled = true;
		};
	},

	eliminateOption: function(optionIndex){
		this.optionButtons[optionIndex].inputEnabled = false;
		this.optionButtons[optionIndex].alpha = 0.5;
		this.optionTexts[optionIndex].alpha = 0.5;
		this.eliminatedOptions.push(optionIndex);
	},

	resetQuestionPool: function(){
		StampOut.questionPool = [];
		for (var i = 0; i < stampOutSettings.questionCategory.length; i++) {
			StampOut.questionPool.push([]);
			this.resetQuestionPoolCategory(i);
		};
		//this.dumpQuestionPool();
	},

	resetQuestionPoolCategory: function(categoryIndex){
		StampOut.questionPool[categoryIndex] = [];
		for (var i = 0; i < stampOutSettings.questionCategory[categoryIndex].question.length; i++) {
			StampOut.questionPool[categoryIndex].push(i);
		};
	},

	getQuestionIndex: function(categoryIndex){
		if(StampOut.questionPool[categoryIndex].length == 0){
			//console.log("  resetting category");
			this.resetQuestionPoolCategory(categoryIndex);
		}
		//console.log("  before: " + StampOut.questionPool[categoryIndex]);
		var randomPoolIndex = Math.floor(Math.random() * StampOut.questionPool[categoryIndex].length);
		//randomPoolIndex = 0;
		var questionIndex = StampOut.questionPool[categoryIndex][randomPoolIndex];
		StampOut.questionPool[categoryIndex].splice(randomPoolIndex, 1);
		//this.dumpQuestionPool();
		//console.log("   after: " + StampOut.questionPool[categoryIndex]);
		return questionIndex;
	},

	selectPowerUp: function(button){
		var puIndex = this.puButtons.indexOf(button);
		//this.state.start('powerUpSelection', true, false, puIndex);
		this.powerUpIndexInUse = puIndex;
		this.showPowerUpPrompt(puIndex);
	},

	showPowerUpPrompt: function(powerUpIndex){
		this.disableOptions();
		this.disablePowerUpButtons();
		var background = this.add.sprite(0, 0, 'texture', stampOutSettings.powerUpSelectScreen.backgroundKey);
		var icon = this.add.sprite(stampOutSettings.powerUpSelectScreen.iconX, stampOutSettings.powerUpSelectScreen.iconY, 'texture', stampOutSettings.powerUp[powerUpIndex].iconKey);
		var use = this.add.button(stampOutSettings.powerUpSelectScreen.useButton.x, stampOutSettings.powerUpSelectScreen.useButton.y, 'texture', this.executePowerUp, this, stampOutSettings.powerUpSelectScreen.useButton.downKey, stampOutSettings.powerUpSelectScreen.useButton.outKey, stampOutSettings.powerUpSelectScreen.useButton.overKey,stampOutSettings.powerUpSelectScreen.useButton.upKey);

		var cancel = this.add.button(stampOutSettings.powerUpSelectScreen.cancelButton.x, stampOutSettings.powerUpSelectScreen.cancelButton.y, 'texture', this.clearPowerUpDialog, this, stampOutSettings.powerUpSelectScreen.cancelButton.downKey, stampOutSettings.powerUpSelectScreen.cancelButton.outKey, stampOutSettings.powerUpSelectScreen.cancelButton.overKey,stampOutSettings.powerUpSelectScreen.cancelButton.upKey);

		var prompt = this.add.text(stampOutSettings.powerUpSelectScreen.prompt.x, stampOutSettings.powerUpSelectScreen.prompt.y, stampOutSettings.powerUp[powerUpIndex].description);
	    prompt.font = stampOutSettings.powerUpSelectScreen.prompt.font;
    	prompt.fontSize = stampOutSettings.powerUpSelectScreen.prompt.size;
		prompt.fill = stampOutSettings.powerUpSelectScreen.prompt.fill;
		prompt.wordWrapWidth = stampOutSettings.powerUpSelectScreen.prompt.width;
		prompt.wordWrap = true;
		prompt.align = stampOutSettings.powerUpSelectScreen.prompt.align;
		prompt.anchor.x = 0.5;

		this.powerUpPrompt = this.add.group();
		this.powerUpPrompt.add(background);
		this.powerUpPrompt.add(icon);
		this.powerUpPrompt.add(use);
		this.powerUpPrompt.add(cancel);
		this.powerUpPrompt.add(prompt);

		createjs.Sound.stop();
		var sfx = createjs.Sound.play(stampOutSettings.questionScreen.powerUpSelectSfxKey);
		sfx.on("complete", this.playPowerUpSelectionVO, this, true, { index: powerUpIndex });
	},

	playPowerUpSelectionVO: function(event, data){
		createjs.Sound.play(stampOutSettings.powerUp[data.index].audioKey);
	},

	clearPowerUpDialog: function(){
		this.powerUpPrompt.destroy();
		this.enableOptions();
		this.enablePowerUpButtons();
		createjs.Sound.stop();
	},

	executePowerUp: function(){
		var powerUpType = stampOutSettings.powerUp[this.powerUpIndexInUse].type;
		StampOut.powerUpStatus[this.powerUpIndexInUse] = 1;
		this.refreshPowerUpButtons();
		switch(powerUpType){
			case "eliminate-two":
				this.clearPowerUpDialog();
				var correctOption = stampOutSettings.questionCategory[this.categoryIndex].question[this.questionIndex].correctIndex;
				var incorrectOptions = [];
				for (var i = 0; i < 4; i++) {
					if(i != correctOption && this.eliminatedOptions.indexOf(i) == -1){
						incorrectOptions.push(i);
					}
				};
				var randomIndex = Math.floor(Math.random() * 3);
				incorrectOptions.splice(randomIndex, 1);
				for (i = 0; i < incorrectOptions.length; i++) {
					this.eliminateOption(incorrectOptions[i]);
				};
				
				break;
			case "two-attempts":
				this.clearPowerUpDialog();
				this.attemptsRemaining++;
				break;
			case "skip":
				if(this.forStamp){
					this.state.start('topicSelection');
				}else{
					this.state.start('spinner');
				}
				
				break;
		}
	},

	dumpQuestionPool: function(){
		//console.log("question pool");
		for (var i = 0; i < StampOut.questionPool.length; i++) {
			//console.log("  cat " + i + ": " + StampOut.questionPool[i]);
		}
	},

	shutdown: function(){
		for (var i = 0; i < this.puButtons.length; i++) {
			this.puButtons[i].destroy();
		};
		this.puButtons = null;
		for (i = 0; i < this.optionButtons.length; i++) {
			this.optionButtons[i].destroy();
		};
		if(this.streakMeter != null){
			this.streakMeter.destroy();
			this.streakMeter = null;
		};
		this.optionButtons = null;
		for (i = 0; i < this.optionTexts.length; i++) {
			this.optionTexts[i].destroy();
		};
		this.optionTexts = null;

		//this.remediationSfx.onStop.removeAll();
		//StampOut.audioSprite.stop();
		createjs.Sound.stop();
	},

	handleContinue: function(){
		//this.cleanup();

		if(this.correct){
			if(this.forStamp){
				this.state.start('topicWin', true, false, this.categoryIndex);
			}else{
				//StampOut.currentStreak++;
				if(StampOut.currentStreak >= stampOutSettings.streakLimit){
					StampOut.currentStreak = 0;
					this.state.start('topicSelection');
				}else{
					this.state.start('spinner');
				}
			}
		}else{
			//StampOut.currentStreak = 0;
			this.state.start('spinner');
		}


		/*if(this.correct && !this.forStamp){
			StampOut.currentStreak++;
		}
		if(StampOut.currentStreak >= stampOutSettings.streakLimit){
			StampOut.currentStreak = 0;
			this.state.start('topicSelection');
		}else{
			this.state.start('spinner');
		}*/
	}

}