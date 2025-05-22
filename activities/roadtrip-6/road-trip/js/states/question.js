RoadTrip.question = function(game){
	this.questionBank = null;
	this.questionIndex = null;
	this.optionLabels = null;
	this.optionTexts = null;
	this.currentVo = null;
	//this.loaderText = null;
	this.loaderGroup = null;
	this.rotator = null;
};

RoadTrip.question.prototype = {
	
	init: function(){
		if(this.questionBank == null){
			this.resetQuestionBank();
		}
		this.optionLabels = [];
		this.optionTexts = [];

		var randInd = Math.floor(Math.random() * this.questionBank.length);
		this.questionIndex = this.questionBank.splice(randInd, 1)[0];
		console.log("current question: " + this.questionIndex + " / [" + this.questionBank + "]");
	},

	preload: function(){
	},

	create: function(){
		var sounds = [roadTripSettings.question.bank[this.questionIndex].audioData];
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

		var background = this.add.sprite(0, 0, roadTripSettings.loader.background.key);
		this.rotator = this.add.sprite(roadTripSettings.loader.rotator.x, roadTripSettings.loader.rotator.y, roadTripSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: roadTripSettings.loader.label.font, 
		 	fill: roadTripSettings.loader.label.fill, 
		 	fontSize: roadTripSettings.loader.label.size,
		 	align: "center"
		};
		var loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - roadTripSettings.loader.label.padding, 
			                           roadTripSettings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 1;

		this.loaderGroup.add(background);
		this.loaderGroup.add(this.rotator);
		this.loaderGroup.add(loaderText);
		/*var loaderStyle = { 
		 	font: roadTripSettings.loader.font, 
		 	fill: roadTripSettings.loader.fill, 
		 	fontSize: roadTripSettings.loader.size,
		 	align: "center"
		};
		this.loaderText = this.add.text(roadTripSettings.loader.x, 
			                      roadTripSettings.loader.y, 
			                      roadTripSettings.loader.text, loaderStyle);
		this.loaderText.anchor.x = 0.5;*/
	},

	removeLoader: function(){
		this.loaderGroup.destroy();
		//this.loaderText.destroy();
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += roadTripSettings.loader.rotator.speed;
		}
	},

	audioLoaded: function(){
		this.removeLoader();
		this.startBuild();
	},

	startBuild: function(){
		this.add.sprite(roadTripSettings.question.background.x, 
						roadTripSettings.question.background.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.question.background.key);
		this.add.sprite(roadTripSettings.question.dialogBox.x, 
						roadTripSettings.question.dialogBox.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.question.dialogBox.key);
		this.showQuestion();
	},

	resetQuestionBank: function(){
		this.questionBank = [];
		for (var i = 0; i < roadTripSettings.question.bank.length; i++) {
			this.questionBank.push(i);
		};
	},

	showQuestion: function(){
		if(this.questionBank.length == 0){
			this.resetQuestionBank();
		}
		/*var randInd = Math.floor(Math.random() * this.questionBank.length);
		this.questionIndex = this.questionBank.splice(randInd, 1)[0];
		console.log("current question: " + this.questionIndex + " / [" + this.questionBank + "]");*/

		var qText = this.add.text(roadTripSettings.question.questionText.x, 
			                      roadTripSettings.question.questionText.y, 
			                      roadTripSettings.question.bank[this.questionIndex].questionText);
	    qText.font = roadTripSettings.question.questionText.font;
    	qText.fontSize = roadTripSettings.question.questionText.size;
		qText.fill = roadTripSettings.question.questionText.fill;
		qText.wordWrapWidth = roadTripSettings.question.questionText.width;
		qText.wordWrap = true;

		var currY = qText.y + qText.height + roadTripSettings.question.questionText.paddingBottom;
		for (var i = 0; i < roadTripSettings.question.bank[this.questionIndex].options.length; i++) {
			var oText = this.add.text(roadTripSettings.question.optionText.x, 
									  currY, 
									  roadTripSettings.question.bank[this.questionIndex].options[i]);
			oText.font = roadTripSettings.question.optionText.font;
    		oText.fontSize = roadTripSettings.question.optionText.size;
			oText.fill = roadTripSettings.question.optionText.fill;
			oText.wordWrapWidth = roadTripSettings.question.optionText.width;
			oText.wordWrap = true;
			this.optionTexts.push(oText);

			var oLabel = this.add.button(roadTripSettings.question.optionLabel.x, 
										 oText.y + (oText.height / 2), 
										 'texture', 
										 null, 
										 this,
										 roadTripSettings.question.optionLabel.overKey, 
										 roadTripSettings.question.optionLabel.outKey, 
										 roadTripSettings.question.optionLabel.downKey, 
										 roadTripSettings.question.optionLabel.upKey);
			oLabel.anchor.x = .5;
			oLabel.anchor.y = .5;
			oLabel.hitArea = new PIXI.Rectangle(-oLabel.offsetX, -oLabel.offsetY, ((oText.x + oText.width) - oLabel.left), ((oText.y + oText.height) - oLabel.top));
			oLabel.onInputUp.add(this.selectOption, this, 0, i);
			this.optionLabels.push(oLabel);

			var oLabelText = this.add.text(oLabel.x, 
									       oLabel.y, 
									       roadTripSettings.question.optionLabel.text.labels[i]);
			oLabelText.font = roadTripSettings.question.optionLabel.text.font;
    		oLabelText.fontSize = roadTripSettings.question.optionLabel.text.size;
			oLabelText.fill = roadTripSettings.question.optionLabel.text.fill;
			oLabelText.anchor.x = 0.5;
			oLabelText.anchor.y = 0.5;
			oLabelText.x += roadTripSettings.question.optionLabel.textOffset.x;
			oLabelText.y += roadTripSettings.question.optionLabel.textOffset.y;

			currY = oText.y + oText.height + roadTripSettings.question.optionText.paddingBottom;
		};
		this.currentVo = createjs.Sound.play(roadTripSettings.question.bank[this.questionIndex].audioKey);
	},

	selectOption: function(button, context, priority, index){
		this.disableOptions();
		this.optionLabels[index].setFrames(roadTripSettings.question.optionLabel.downKey, roadTripSettings.question.optionLabel.downKey, roadTripSettings.question.optionLabel.downKey, roadTripSettings.question.optionLabel.downKey);
		this.optionTexts[index].fill = roadTripSettings.question.optionLabel.text.selectedFill;

		if(index == roadTripSettings.question.bank[this.questionIndex].correct){
			this.showRemediation(index, true);
			this.showContinueButton(true);
		}else{
			this.showRemediation(index, false);
			this.showContinueButton(false);
		}
	},

	disableOptions: function(){
		for (var i = 0; i < this.optionLabels.length; i++) {
			this.optionLabels[i].inputEnabled = false;
		};
	},

	showRemediation: function(optionIndex, isCorrect){
		var rText = this.add.text(roadTripSettings.question.remediationText.x, 
			                      roadTripSettings.question.remediationText.y, 
			                      roadTripSettings.question.bank[this.questionIndex].remediations[optionIndex]);
	    rText.font = roadTripSettings.question.remediationText.font;
    	rText.fontSize = roadTripSettings.question.remediationText.size;
		rText.fill = roadTripSettings.question.remediationText.fill;
		rText.wordWrapWidth = roadTripSettings.question.remediationText.width;
		rText.wordWrap = true;

		var labelKey = "";
		if(isCorrect){
			labelKey = roadTripSettings.question.remediationLabel.correctKey;
			RoadTrip.playerProgress[RoadTrip.playerPosition] = 1;
		}else{
			labelKey = roadTripSettings.question.remediationLabel.incorrectKey;
			RoadTrip.playerProgress[RoadTrip.playerPosition] = -1;
		}
		this.add.sprite(roadTripSettings.question.remediationLabel.x, 
						roadTripSettings.question.remediationLabel.y, 
						roadTripSettings.textureKey, 
						labelKey);

		this.currentVo.stop();
		//this.currentVo = createjs.Sound.play(roadTripSettings.question.bank[this.questionIndex].remediationAudioKeys[optionIndex]);
		var sfx = null;
		if(isCorrect){
			sfx = createjs.Sound.play(roadTripSettings.question.correctSoundKey);
		}else{
			sfx = createjs.Sound.play(roadTripSettings.question.incorrectSoundKey);
		}
		sfx.on("complete", this.playRemediationVO, this, true, {index: optionIndex});
	},

	playRemediationVO: function(event, data){
		this.currentVo = createjs.Sound.play(roadTripSettings.question.bank[this.questionIndex].remediationAudioKeys[data.index]);
	},

	showContinueButton: function(isCorrect){
		var button = this.add.button(roadTripSettings.question.continueButton.x, 
						roadTripSettings.question.continueButton.y, 
						'texture', 
						null, 
						this,
						roadTripSettings.question.continueButton.overKey, 
						roadTripSettings.question.continueButton.outKey, 
						roadTripSettings.question.continueButton.downKey, 
						roadTripSettings.question.continueButton.upKey);
		button.onInputUp.add(this.handleContinue, this);
	},

	handleContinue: function(){
		this.currentVo.stop();
		this.state.start('map');
	},

	shutdown: function(){
		createjs.Sound.stop();
		for (var i = 0; i < this.optionLabels.length; i++) {
			this.optionLabels[i].destroy();
		};
		for (i = 0; i < this.optionTexts.length; i++) {
			this.optionTexts[i].destroy();
		};
	}

}