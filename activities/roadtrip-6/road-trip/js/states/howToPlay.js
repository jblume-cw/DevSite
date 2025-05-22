RoadTrip.howToPlay = function(game){
	this.currentStep = null;
	this.currentVo = null;
	this.waitingForCue = null;
	//this.loaderText = null;
	this.loaderGroup = null;
	this.rotator = null;
};

RoadTrip.howToPlay.prototype = {
	
	init: function(step){
		console.log("on step " + step);
		this.currentStep = step;
		this.waitingForCue = 0;
	},

	preload: function(){
	},

	create: function(){
		var sounds = [roadTripSettings.vo.instructions];
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

	audioLoaded: function(){
		this.removeLoader();
		this.startBuild();
	},

	startBuild: function(){
		this.add.sprite(roadTripSettings.howToPlay.background.x, 
						roadTripSettings.howToPlay.background.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.howToPlay.background.key);
		this.showNextStep();
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += roadTripSettings.loader.rotator.speed;
		}
		if(this.currentVo != null){
			if(this.waitingForCue < roadTripSettings.howToPlay.steps[this.currentStep].cues.length){
				if(this.currentVo.position >= roadTripSettings.howToPlay.steps[this.currentStep].cues[this.waitingForCue].time){
					//console.log("cue " + this.waitingForCue + " hit");
					this.add.sprite(roadTripSettings.howToPlay.steps[this.currentStep].cues[this.waitingForCue].visual.x, 
								roadTripSettings.howToPlay.steps[this.currentStep].cues[this.waitingForCue].visual.y, 
								roadTripSettings.textureKey, 
								roadTripSettings.howToPlay.steps[this.currentStep].cues[this.waitingForCue].visual.key);
					this.waitingForCue++;
				}
			}
		}
	},

	showNextStep: function(){
		this.add.sprite(roadTripSettings.howToPlay.steps[this.currentStep].visual.x, 
						roadTripSettings.howToPlay.steps[this.currentStep].visual.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.howToPlay.steps[this.currentStep].visual.key);

		var text = this.add.text(roadTripSettings.howToPlay.text.x, 
								 roadTripSettings.howToPlay.text.y, 
								 roadTripSettings.howToPlay.steps[this.currentStep].text);
		text.font = roadTripSettings.howToPlay.text.font;
		text.fill = roadTripSettings.howToPlay.text.fill;
		text.fontSize = roadTripSettings.howToPlay.text.size;
		text.wordWrapWidth = roadTripSettings.howToPlay.text.width;
		text.wordWrap = true;

		this.add.button(roadTripSettings.howToPlay.steps[this.currentStep].nextButton.x, 
						roadTripSettings.howToPlay.steps[this.currentStep].nextButton.y, 
						roadTripSettings.textureKey, 
						this.initializeNextStep, 
						this, 
						roadTripSettings.howToPlay.steps[this.currentStep].nextButton.overKey, 
						roadTripSettings.howToPlay.steps[this.currentStep].nextButton.outKey, 
						roadTripSettings.howToPlay.steps[this.currentStep].nextButton.downKey, 
						roadTripSettings.howToPlay.steps[this.currentStep].nextButton.upKey);
		this.currentVo = createjs.Sound.play(roadTripSettings.howToPlay.steps[this.currentStep].audioKey);
		this.waitingForCue = 0;
	},

	initializeNextStep: function(){
		console.log("initializeNextStep");
		this.currentVo.stop();
		this.currentVo = null;
		this.currentStep++;
		if(this.currentStep < roadTripSettings.howToPlay.steps.length){
			this.state.start('howToPlay', true, false, this.currentStep);
		}else{
			this.state.start('options');
		}
	},

	shutdown: function(){
		if(this.currentVo != null){
			this.currentVo.stop();
		}
		this.currentVo = null;
	}

};