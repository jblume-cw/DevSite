FiveWords.splash = function(game){
	this.buttons = null;
	this.completion = null;
	this.playIntroMusic = null;
};

FiveWords.splash.prototype = {
	
	init: function(introMusic){
		this.buttons = [];
		this.completion = [];
		this.playIntroMusic = introMusic;
	},

	create: function(){
		this.initializeCompletionData();
		this.initializeSuspendData();
		this.add.sprite(fiveWordsSettings.splash.background.x, fiveWordsSettings.splash.background.y, fiveWordsSettings.splash.background.key);
		this.add.sprite(fiveWordsSettings.splash.bottom.x, fiveWordsSettings.splash.bottom.y, fiveWordsSettings.texture.key, fiveWordsSettings.splash.bottom.key);
		this.add.sprite(fiveWordsSettings.splash.logo.x, fiveWordsSettings.splash.logo.y, fiveWordsSettings.texture.key, fiveWordsSettings.splash.logo.key);
		for (var i = 0; i < fiveWordsSettings.splash.puzzleButtons.length; i++) {
			if(fiveWordsSettings.splash.puzzleButtons[i].conditional == null){
				this.buttons.push(this.addButton(fiveWordsSettings.splash.puzzleButtons[i], this.selectPuzzle, this.completion[i]));
			}
		};
		this.addConditionalButtons();
		if(this.playIntroMusic == true){
			FiveWords.voSprite.play(fiveWordsSettings.splash.music);
		}
	},

	initializeCompletionData: function(){
		if(fiveWordsSettings.scormEnabled){
			for (var i = 0; i < fiveWordsSettings.splash.puzzleButtons.length; i++) {
				if(SCORM_API_adapter.getObjectiveStatus(i) == "completed"){
					this.completion[i] = true;
				}else{
					this.completion[i] = false;
				}
			};
		}else{
			// test cases
			this.completion = [true, true, true, true];
		}
	},

	initializeSuspendData: function(){
		if(fiveWordsSettings.scormEnabled){
			var suspendData = SCORM_API_adapter.getSuspendData();
			if(suspendData == "" || suspendData == null || suspendData == undefined){
				SCORM_API_adapter.setSuspendData("false");
			}else{
				if(suspendData == "true"){
					FiveWords.autoHelpShown = true;
				}else{
					FiveWords.autoHelpShown = false;
				}
			}
		}
		//console.log("autoHelpShown: " + FiveWords.autoHelpShown);
	},

	addConditionalButtons: function(){
		//console.log(this.completion);
		for (var i = 0; i < fiveWordsSettings.splash.puzzleButtons.length; i++) {
			if(fiveWordsSettings.splash.puzzleButtons[i].conditional != undefined){
				if(fiveWordsSettings.splash.puzzleButtons[i].conditional.type == "completion"){
					var allComplete = true;
					for (var j = 0; j < fiveWordsSettings.splash.puzzleButtons[i].conditional.puzzles.length; j++) {
						if(!this.completion[fiveWordsSettings.splash.puzzleButtons[i].conditional.puzzles[j]]){
							allComplete = false;
							break;
						}
					};
					if(allComplete){
						this.buttons.push(this.addButton(fiveWordsSettings.splash.puzzleButtons[i], this.selectPuzzle, this.completion[i]));
					}
				}
			}
		}
	},

	addButton: function(buttonData, callback, completion){
		var button = null;
		if(completion){
			button = this.add.button(
				buttonData.x,
				buttonData.y, 
				fiveWordsSettings.texture.key, 
				callback, 
				this, 
				buttonData.completed.overKey, 
				buttonData.completed.outKey, 
				buttonData.completed.downKey, 
				buttonData.completed.upKey
			);
		}else{
			button = this.add.button(
				buttonData.x,
				buttonData.y, 
				fiveWordsSettings.texture.key, 
				callback, 
				this, 
				buttonData.overKey, 
				buttonData.outKey, 
				buttonData.downKey, 
				buttonData.upKey
			);
		}
		
		var style = { 
		 	font: fiveWordsSettings.splash.puzzleButtonText.font, 
		 	fill: fiveWordsSettings.splash.puzzleButtonText.fill, 
		 	fontSize: fiveWordsSettings.splash.puzzleButtonText.size,
		 	align: "center",
		 	fontWeight: fiveWordsSettings.splash.puzzleButtonText.weight
		};
		if(buttonData.label.size != null){
			style.fontSize = buttonData.label.size;
		}
		var text = this.add.text(
			button.x + (button.width/2) + buttonData.label.offset.x, 
			button.y + (button.height/2) + buttonData.label.offset.y, 
			buttonData.label.text, 
			style
		);
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;

		return button;
	},

	selectPuzzle: function(button){
		var puzzleIndex = 0;
		for (var i = 0; i < this.buttons.length; i++) {
			if(this.buttons[i] == button){
				puzzleIndex = i;
				break;
			}
		};

		this.transitionToPuzzle(puzzleIndex);
	},

	transitionToPuzzle: function(index){
		FiveWords.voSprite.stop();
		this.state.start('game', true, false, index);
	},

	shutdown: function(){
		for (var i = 0; i < this.buttons.length; i++) {
			this.buttons[i].destroy();
		};
	}

}