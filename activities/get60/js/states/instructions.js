Get60.instructions = function(game){
	this.stepIndex = 0;
	this.vo = null;
	this.delayedTexts = null;
	this.delayedImages = null;
	this.delayedRects = null;
};

Get60.instructions.prototype = {
	
	init: function(step){
		this.stepIndex = step;
		this.delayedTexts = [];
		this.delayedImages = [];
		this.delayedRects = [];
	},

	update: function(){
		if(this.vo != null){
			for (var i = this.delayedTexts.length - 1; i >= 0; i--) {
				if(this.vo.currentTime >= this.delayedTexts[i].delay){
					Get60.addText(this.delayedTexts[i], this);
					this.delayedTexts.splice(i, 1);
				}
			}
			for (i = this.delayedImages.length - 1; i >= 0; i--) {
				if(this.vo.currentTime >= this.delayedImages[i].delay){
					Get60.addImage(this.delayedImages[i], this);
					this.delayedImages.splice(i, 1);
				}
			}
			for (i = this.delayedRects.length - 1; i >= 0; i--) {
				if(this.vo.currentTime >= this.delayedRects[i].delay){
					Get60.addRect(this.delayedRects[i], this);
					this.delayedRects.splice(i, 1);
				}
			}
		}
	},

	create: function(){
		for (var i = 0; i < Get60Settings.instructions.backgroundElements.length; i++) {
			Get60.addImage(Get60Settings.instructions.backgroundElements[i], this);
		}

		Get60.addText(Get60Settings.instructions.title, this);
		Get60.addRect(Get60Settings.instructions.box, this);

		this.addTexts();
		this.addImages();
		this.addRects();

		this.vo = Get60.soundSprite.play(Get60Settings.instructions.steps[this.stepIndex].voKey);

		if(this.stepIndex < Get60Settings.instructions.steps.length - 1){
			Get60.addButton(Get60Settings.instructions.continueButton, this.handleContinue, this);
			if(Get60.instructionsCompleted){
				Get60.addButton(Get60Settings.instructions.skipButton, this.handleSkip, this);
			}
		}else{
			Get60.addButton(Get60Settings.instructions.playButton, this.handleSkip, this);
			if(Get60Settings.scormEnabled){
				SCORM_API_adapter.setSuspendData("1");
			}
		}
		//Get60.beginInstructionsLoop();
		Get60.beginLoop(Get60Settings.instructionsLoop);
	},

	addTexts: function(){
		for (var i = 0; i < Get60Settings.instructions.steps[this.stepIndex].text.length; i++) {
			if(Get60Settings.instructions.steps[this.stepIndex].text[i].delay > 0){
				this.delayedTexts.push(Get60Settings.instructions.steps[this.stepIndex].text[i]);
			}else{
				Get60.addText(Get60Settings.instructions.steps[this.stepIndex].text[i], this);
			}
		}
	},

	addImages: function(){
		for (var i = 0; i < Get60Settings.instructions.steps[this.stepIndex].image.length; i++) {
			if(Get60Settings.instructions.steps[this.stepIndex].image[i].delay > 0){
				this.delayedImages.push(Get60Settings.instructions.steps[this.stepIndex].image[i]);
			}else{
				Get60.addImage(Get60Settings.instructions.steps[this.stepIndex].image[i], this);
			}
		}
	},

	addRects: function(){
		for (var i = 0; i < Get60Settings.instructions.steps[this.stepIndex].rect.length; i++) {
			if(Get60Settings.instructions.steps[this.stepIndex].rect[i].delay > 0){
				this.delayedRects.push(Get60Settings.instructions.steps[this.stepIndex].rect[i]);
			}else{
				Get60.addRect(Get60Settings.instructions.steps[this.stepIndex].rect[i], this);
			}
		}
	},

	handleContinue: function(){
		this.stopVO();
		this.stepIndex++;
		this.state.start('instructions', true, false, this.stepIndex);
	},

	handleSkip: function(){
		this.stopVO();
		//Get60.stopLoop();
		Get60.markComplete();
		this.state.start('game');
	},

	stopVO: function(){
		Get60.soundSprite.stop(Get60Settings.instructions.steps[this.stepIndex].voKey);
	}
}