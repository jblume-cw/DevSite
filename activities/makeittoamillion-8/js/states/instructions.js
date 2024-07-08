Millionaire.instructions = function(game){
	this.talkBubble = null;
	this.talkIndex = null;
	this.talkText = null;
	this.audio = null;
	this.talking = null;
};

Millionaire.instructions.prototype = {
	
	init: function(){
		Millionaire.questionNumber = 0;
		Millionaire.helpUsage = [];
		for (var i = 0; i < MillionaireSettings.question.helpButtons.length; i++) {
			Millionaire.helpUsage.push(false);
		}

		this.talkIndex = 0;
		this.talking = false;
	},

	update: function(){
		if(this.talking == true && this.audio != null){
			if(this.audio.currentTime >= MillionaireSettings.instructions.talking.textCues[this.talkIndex].time){
				if(this.talkBubble == null){
					this.addTalkBubble();
				}
				this.talkText.text = MillionaireSettings.instructions.talking.textCues[this.talkIndex].text;
				this.talkIndex++;
			}
		}
		if(this.talkIndex == MillionaireSettings.instructions.talking.textCues.length){
			this.talking = false;
		}
	},

	create: function(){
		for (var i = 0; i < MillionaireSettings.instructions.backgroundElements.length; i++) {
			Millionaire.addImage(MillionaireSettings.instructions.backgroundElements[i], this);
		}

		Millionaire.addText(MillionaireSettings.instructions.heading, this);

		var currY = MillionaireSettings.instructions.instructionBullets.y;
		for (var i = 0; i < MillionaireSettings.instructions.instructionBullets.text.length; i++) {
			var bullet = Millionaire.addText(MillionaireSettings.instructions.instructionBullets, this, MillionaireSettings.instructions.instructionBullets.text[i]);
			bullet.y = currY;
			currY += bullet.height + MillionaireSettings.instructions.instructionBullets.intervalGap;
		}

		Millionaire.addButton(MillionaireSettings.instructions.beginButton, this.handleBegin, this);

		this.audio = Millionaire.soundSprite.play(MillionaireSettings.instructions.audio.key, MillionaireSettings.instructions.audio.volume);
		this.talking = true;
	},

	handleBegin: function(){
		Millionaire.soundSprite.stop(MillionaireSettings.instructions.audio.key);
		if(MillionaireSettings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
		this.state.start('question');
		//this.state.start("gameOver", true, false, true);
	},

	addTalkBubble: function(){
		this.talkBubble = Millionaire.addImage(MillionaireSettings.instructions.talkBubble, this);
		this.talkText = Millionaire.addText(MillionaireSettings.instructions.talking.textStyle, this);
	}

}