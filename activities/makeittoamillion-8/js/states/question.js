Millionaire.question = function(game){
	this.towerHighlights = null;
	this.talkGroup = null;
	this.questionIndex = null;
	this.helpButtons = null;
	this.optionButtons = null;
	this.helpDisplay = null;
	this.preloader = null;
	this.vo = null;
	this.questionAudioLoaded = null;
	this.questionIntroComplete = null;
};

Millionaire.question.prototype = {
	
	init: function(){
		if(this.isQuestionPoolEmpty()){
			this.resetQuestionPool();
		}

		this.questionIndex = this.chooseQuestion();
		//console.log(this.questionIndex);
		//console.log(Millionaire.questionPool);
		this.questionIntroComplete = false;
		this.questionAudioLoaded = false;
	},

	update: function(){
		/*if(this.questionIntroComplete && !this.questionAudioLoaded && this.preloader == null){
			this.showPreloader();
		}*/

		if(this.preloader != null){
			this.preloader.angle += MillionaireSettings.question.preloader.speed;
		}
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

		this.introduceQuestion();
		this.loadAudio();
	},

	updateTower: function(){
		//Millionaire.questionNumber = 4;
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

	loadAudio: function(){
		//this.showPreloader();

		var loader = this.load.audio("question", MillionaireSettings.questions[this.questionIndex].questionVOKey);
		loader.audio("correct", MillionaireSettings.questions[this.questionIndex].correctRemediationVOKey);
		loader.audio("incorrect", MillionaireSettings.questions[this.questionIndex].incorrectRemediationVOKey);
		loader.onLoadComplete.addOnce(this.handleAudioLoadComplete, this);
		//this.time.events.add(4000, this.handleAudioLoadComplete, this);
		loader.start();
	},

	showPreloader: function(){
		this.preloader = Millionaire.addImage(MillionaireSettings.question.preloader, this);
	},

	removePreloader: function(){
		if(this.preloader != null){
			this.preloader.destroy();
			this.preloader = null;
		}
	},

	handleAudioLoadComplete: function(){
		//this.removePreloader();
		//this.introduceQuestion();
		if(this.questionIntroComplete){
			this.removePreloader();
			this.showQuestion();
			this.showHelpBox();
		}else{
			this.questionAudioLoaded = true;
		}
	},

	introduceQuestion: function(){
		this.talkGroup = this.add.group();
		Millionaire.addImage(MillionaireSettings.question.talkBubble, this, this.talkGroup);
		Millionaire.addText(MillionaireSettings.question.questionIntro, this, MillionaireSettings.question.questionIntro.text[Millionaire.questionNumber], this.talkGroup);
		this.playIntroVO();
	},

	playIntroVO: function(){
		// add VO code here
		//this.time.events.add(2500, this.handleIntroVOEnd, this);
		//console.log(MillionaireSettings.question.questionIntro.vo[Millionaire.questionNumber]);
		var introVO = Millionaire.soundSprite.play(MillionaireSettings.question.questionIntro.vo[Millionaire.questionNumber]);
		introVO.onStop.add(this.handleIntroVOEnd, this);
	},

	handleIntroVOEnd: function(){
		//this.time.events.add(MillionaireSettings.question.questionIntro.delayAfter, function(){ this.showQuestion(); this.showHelpBox(); }, this);
		this.time.events.add(MillionaireSettings.question.questionIntro.delayAfter, this.handleIntroVODelayEnd, this);
	},

	handleIntroVODelayEnd: function(){
		if(this.questionAudioLoaded){
			this.showQuestion();
			this.showHelpBox();
		}else{
			this.questionIntroComplete = true;
			this.showPreloader();
		}
	},

	showQuestion: function(){
		this.talkGroup.destroy();

		/*if(this.isQuestionPoolEmpty()){
			this.resetQuestionPool();
		}

		this.questionIndex = this.chooseQuestion();
		console.log(this.questionIndex);
		console.log(Millionaire.questionPool);*/

		Millionaire.addImage(MillionaireSettings.question.questionBox, this);
		Millionaire.addText(MillionaireSettings.question.questionTitleStyle, this, "For " + MillionaireSettings.question.questionValues[Millionaire.questionNumber] + " points");
		var questionText = Millionaire.addText(MillionaireSettings.question.questionStyle, this, MillionaireSettings.questions[this.questionIndex].questionText);

		this.optionButtons = [];
		var currY = questionText.y + questionText.height + 30;
		for (var i = 0; i < MillionaireSettings.questions[this.questionIndex].options.length; i++) {
			var optionButton = Millionaire.addButton(MillionaireSettings.question.optionButtons[i], this.handleOptionChoice, this);
			optionButton.y = currY;

			var optionText = Millionaire.addText(MillionaireSettings.question.optionStyle, this, MillionaireSettings.questions[this.questionIndex].options[i]);
			optionText.y = currY;

			optionButton.data.index = i;
			optionButton.data.text = optionText;
			this.optionButtons.push(optionButton);
			currY += MillionaireSettings.question.optionSpacing;
		}

		this.vo = this.sound.play("question");
	},

	isQuestionPoolEmpty: function(){
		if(Millionaire.questionPool.length == 0){
			return true;
		}else{
			return false;
		}
	},

	resetQuestionPool: function(){
		//console.log("reset pool");
		Millionaire.questionPool = [];
		for (var i = 0; i < MillionaireSettings.questions.length; i++) {
			Millionaire.questionPool.push(i);
		}
	},

	chooseQuestion: function(){
		return Millionaire.questionPool.splice(Math.floor(Math.random() * Millionaire.questionPool.length), 1)[0];
	},

	handleOptionChoice: function(button){
		this.vo.stop();
		this.disableOptionButtons();
		button.setFrames(MillionaireSettings.question.optionButtons[button.data.index].selectedKey, MillionaireSettings.question.optionButtons[button.data.index].selectedKey, MillionaireSettings.question.optionButtons[button.data.index].selectedKey, MillionaireSettings.question.optionButtons[button.data.index].selectedKey);

		if(button.data.index == MillionaireSettings.questions[this.questionIndex].correctOption){
			this.showRemediation(true);
		}else{
			this.showRemediation(false);
		}
	},

	disableOptionButtons: function(){
		for (var i = 0; i < this.optionButtons.length; i++) {
			this.optionButtons[i].inputEnabled = false;
			this.optionButtons[i].setFrames(MillionaireSettings.question.optionButtons[this.optionButtons[i].data.index].disabledKey, MillionaireSettings.question.optionButtons[this.optionButtons[i].data.index].disabledKey, MillionaireSettings.question.optionButtons[this.optionButtons[i].data.index].disabledKey, MillionaireSettings.question.optionButtons[this.optionButtons[i].data.index].disabledKey);

			//this.optionButtons[i].data.text.alpha = 0.5;
		}
	},

	showRemediation: function(correct){
		var background = Millionaire.addImage(MillionaireSettings.question.remediation.background, this);
		background.inputEnabled = true;
		if(correct){
			Millionaire.addText(MillionaireSettings.question.remediation.text, this, MillionaireSettings.questions[this.questionIndex].correctRemediationText);
			Millionaire.addButton(MillionaireSettings.question.remediation.continueButton, this.handleContinueCorrect, this);
			this.playRemediationVO(true);
		}else{
			Millionaire.addText(MillionaireSettings.question.remediation.text, this, MillionaireSettings.questions[this.questionIndex].incorrectRemediationText);
			Millionaire.addButton(MillionaireSettings.question.remediation.continueButton, this.handleContinueIncorrect, this);
			this.playRemediationVO(false);
		}
	},

	playRemediationVO: function(correct){
		if(correct){
			this.time.events.add(600, function(){ this.vo = this.sound.play("correct"); }, this);
			Millionaire.soundSprite.play(MillionaireSettings.question.remediation.correctSFX.key, MillionaireSettings.question.remediation.correctSFX.volume);
		}else{
			this.time.events.add(600, function(){ this.vo = this.sound.play("incorrect"); }, this);
			Millionaire.soundSprite.play(MillionaireSettings.question.remediation.incorrectSFX.key, MillionaireSettings.question.remediation.incorrectSFX.volume);
		}
		
	},

	handleContinueCorrect: function(){
		this.vo.stop();
		//Millionaire.soundSprite.stop();
		Millionaire.questionNumber++;
		if(Millionaire.questionNumber < this.towerHighlights.length){
			this.state.start('question');
		}else{
			this.state.start('gameOver', true, false, true);
		}
		
	},

	handleContinueIncorrect: function(){
		this.vo.stop();
		//Millionaire.soundSprite.stop();
		this.state.start('gameOver', true, false, false);
	},

	showHelpBox: function(){
		Millionaire.addImage(MillionaireSettings.question.helpBox, this);
		Millionaire.addText(MillionaireSettings.question.helpBoxTitle, this);
		this.helpButtons = [];
		for (var i = 0; i < MillionaireSettings.question.helpButtons.length; i++) {
			var button = Millionaire.addButton(MillionaireSettings.question.helpButtons[i], this.handleHelp, this);
			button.data.type = MillionaireSettings.question.helpButtons[i].type;
			button.data.index = i;
			//button.data.used = false;
			if(Millionaire.helpUsage[i]){
				this.deactivateHelpButton(button);
			}
			this.helpButtons.push(button);
		}
	},

	handleHelp: function(button){
		this.disableHelpButtons();
		this.deactivateHelpButton(button);
		Millionaire.helpUsage[button.data.index] = true;

		if(this.helpDisplay == null){
			//console.log("create group");
			this.helpDisplay = this.add.group();
		}

		switch(button.data.type){
			case "50/50":
				this.handle5050();
				this.enableHelpButtons();
				break;
			case "poll":
				this.handlePoll();
				this.enableHelpButtons();
				break;
			case "text":
				this.handleTextAFriend();
				this.enableHelpButtons();
				break;
		}
	},

	deactivateHelpButton: function(button){
		var disabledFrame = MillionaireSettings.question.helpButtons[button.data.index].disabledKey;
		button.setFrames(disabledFrame, disabledFrame, disabledFrame, disabledFrame);
		button.inputEnabled = false;
	},

	disableHelpButtons: function(){
		for (var i = 0; i < this.helpButtons.length; i++) {
			this.helpButtons[i].inputEnabled = false;
		}
	},

	enableHelpButtons: function(){
		for (var i = 0; i < this.helpButtons.length; i++) {
			if(!Millionaire.helpUsage[i]){
				this.helpButtons[i].inputEnabled = true;
			}
		}
	},

	handle5050: function(){
		var removals = MillionaireSettings.questions[this.questionIndex].fiftyfiftyRemovals;
		for (var i = 0; i < removals.length; i++) {
			this.optionButtons[removals[i]].visible = false;
			this.optionButtons[removals[i]].data.text.visible = false;
		}
	},

	handlePoll: function(){
		Millionaire.addImage(MillionaireSettings.question.poll.background, this, this.helpDisplay);
		Millionaire.addText(MillionaireSettings.question.poll.boxTitle, this, null, this.helpDisplay);
		Millionaire.addImage(MillionaireSettings.question.poll.grid, this, this.helpDisplay);
		for (var i = 0; i < MillionaireSettings.question.poll.bars.length; i++) {
			var bar = Millionaire.addRect(MillionaireSettings.question.poll.bars[i], this, this.helpDisplay);
			//console.log(MillionaireSettings.questions[this.questionIndex].pollLevels[i]);
			bar.scale.y = MillionaireSettings.questions[this.questionIndex].pollLevels[i];
		}
	},

	handleTextAFriend: function(){
		Millionaire.addImage(MillionaireSettings.question.textAFriend.background, this, this.helpDisplay);
		Millionaire.addText(MillionaireSettings.question.textAFriend.boxTitle, this, null, this.helpDisplay);

		this.time.events.add(MillionaireSettings.question.textAFriend.askBubble.delay, function(){
			Millionaire.addImage(MillionaireSettings.question.textAFriend.askBubble.bubble, this, this.helpDisplay);
			Millionaire.addText(MillionaireSettings.question.textAFriend.askBubble.text, this, MillionaireSettings.questions[this.questionIndex].textAFriendText.call, this.helpDisplay);
			Millionaire.soundSprite.play(MillionaireSettings.question.textAFriend.askBubble.sfx.key, MillionaireSettings.question.textAFriend.askBubble.sfx.volume);
		}, this);

		this.time.events.add(MillionaireSettings.question.textAFriend.typingBubble.delay, function(){
			Millionaire.addImage(MillionaireSettings.question.textAFriend.typingBubble, this, this.helpDisplay);
		}, this);

		this.time.events.add(MillionaireSettings.question.textAFriend.responseBubble.delay, function(){
			Millionaire.addImage(MillionaireSettings.question.textAFriend.responseBubble.bubble, this, this.helpDisplay);
			Millionaire.addText(MillionaireSettings.question.textAFriend.responseBubble.text, this, MillionaireSettings.questions[this.questionIndex].textAFriendText.response, this.helpDisplay);
			Millionaire.soundSprite.play(MillionaireSettings.question.textAFriend.responseBubble.sfx.key, MillionaireSettings.question.textAFriend.responseBubble.sfx.volume);
		}, this);
		/*this.time.events.add(MillionaireSettings.question.textAFriend.responseBubble.delay, function(){
			Millionaire.addImage(MillionaireSettings.question.textAFriend.responseBubble.bubble, this, this.helpDisplay);
			Millionaire.addText(MillionaireSettings.question.textAFriend.responseBubble.text, this, "I would say C. It's good to let your mind wander once in a while.", this.helpDisplay);
		}, this);*/
		
	},

	shutdown: function(){
		for (var i = 0; i < this.towerHighlights.length; i++) {
			this.towerHighlights[i].destroy();
		}
		if(this.talkGroup != null){
			this.talkGroup.destroy();
		}
		for (i = 0; i < this.helpButtons.length; i++) {
			this.helpButtons[i].destroy();
		}
		for (i = 0; i < this.optionButtons.length; i++) {
			this.optionButtons[i].destroy();
		}
		if(this.helpDisplay != null){
			this.helpDisplay.destroy();
			this.helpDisplay = null;
		}
		
	}

}