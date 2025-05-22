FiveWords.game = function(game){
	this.puzzleIndex = null;
	this.guessText = null;
	this.hintsLeftText = null;
	this.hintsLeft = null;
	this.clues = null;
	this.audioButtons = null;
	this.hintButtons = null;
	this.segmentButtons = null;
	this.segmentsInPlay = null;
	this.smallMenuButton = null;
	this.helpButton = null;
	this.helpActive = null;
	this.helpLayer = null;
	this.helpCueIndex = null;
	this.soundChannel = null;
	this.guessButton = null;
	this.clearButton = null;
};

FiveWords.game.prototype = {
	
	init: function(index){
		this.puzzleIndex = index;
		this.hintsLeft = fiveWordsSettings.game.hintsGiven;
		this.clues = [];
		this.audioButtons = [];
		this.hintButtons = [];
		this.segmentButtons = [];
		this.segmentsInPlay = [];
		this.helpActive = false;
	},

	create: function(){
		this.add.sprite(fiveWordsSettings.game.background.x, fiveWordsSettings.game.background.y, fiveWordsSettings.game.background.key);
		this.add.sprite(fiveWordsSettings.game.bottom.x, fiveWordsSettings.game.bottom.y, fiveWordsSettings.texture.key, fiveWordsSettings.game.bottom.key);
		this.add.sprite(fiveWordsSettings.game.guessField.x, fiveWordsSettings.game.guessField.y, fiveWordsSettings.texture.key, fiveWordsSettings.game.guessField.backgroundKey);
		this.smallMenuButton = this.addButton(fiveWordsSettings.game.menuButton, this.transitionToMenu);
		this.helpButton = this.addButton(fiveWordsSettings.game.helpButton, this.startHelp);
		this.guessButton = this.addButton(fiveWordsSettings.game.guessButton, this.guess);
		this.clearButton = this.addButton(fiveWordsSettings.game.clearButton, this.clearGuess);
		this.addGuessField();
		this.addHintsLeftText();

		this.addClues();
		this.addAudioButtons();
		this.addHintButtons();
		this.addSegmentButtons();

		if(FiveWords.autoHelpShown == false){
			this.startHelp();
			FiveWords.autoHelpShown = true;
			if(fiveWordsSettings.scormEnabled){
				SCORM_API_adapter.setSuspendData("true");
			}
		}
	},

	addButton: function(buttonData, callback){
		var button = this.add.button(
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
		return button;
	},
	
	addGuessField: function(){
		var style = { 
		 	font: fiveWordsSettings.game.guessText.font, 
		 	fill: fiveWordsSettings.game.guessText.fill, 
		 	fontSize: fiveWordsSettings.game.guessText.size,
		 	align: "left",
		 	fontWeight: fiveWordsSettings.game.guessText.weight
		};
		var text = this.add.text(
			fiveWordsSettings.game.guessText.x, 
			fiveWordsSettings.game.guessText.y, 
			"", 
			style
		);
		this.guessText = text;
	},
	
	addHintsLeftText: function(){
		var style = { 
		 	font: fiveWordsSettings.game.hintsLeftText.font, 
		 	fill: fiveWordsSettings.game.hintsLeftText.fill, 
		 	fontSize: fiveWordsSettings.game.hintsLeftText.size,
		 	align: "left",
		 	fontWeight: fiveWordsSettings.game.hintsLeftText.weight
		};
		var text = this.add.text(
			fiveWordsSettings.game.hintsLeftText.x, 
			fiveWordsSettings.game.hintsLeftText.y, 
			"Hints left: " + this.hintsLeft, 
			style
		);
		this.hintsLeftText = text;
	},

	addClues: function(){
		var style = { 
		 	font: fiveWordsSettings.game.clueText.font, 
		 	fill: fiveWordsSettings.game.clueText.fill, 
		 	fontSize: fiveWordsSettings.game.clueText.size,
		 	align: "left",
		 	fontWeight: fiveWordsSettings.game.clueText.weight
		};
		for (var i = 0; i < fiveWordsSettings.game.clueText.positions.length; i++) {
			var clueBackground = this.add.sprite(fiveWordsSettings.game.clueBackground.positions[i].x, 
				            					 fiveWordsSettings.game.clueBackground.positions[i].y, 
				            					 fiveWordsSettings.texture.key, 
				            					 fiveWordsSettings.game.clueBackground.key);
			var solution = fiveWordsSettings.game.puzzle[this.puzzleIndex].words[i].solution.join("");
			this.clues.push(this.add.text(
				fiveWordsSettings.game.clueText.positions[i].x, 
				fiveWordsSettings.game.clueText.positions[i].y, 
				fiveWordsSettings.game.puzzle[this.puzzleIndex].words[i].clue + " (" + solution.length + " letters)", 
				style
			));
			this.clues[i].backgroundDisplay = clueBackground;
			this.clues[i].solved = false;
		};
	},

	addAudioButtons: function(){
		for (var i = 0; i < this.clues.length; i++) {
			var x = this.clues[i].x + this.clues[i].width + fiveWordsSettings.game.audioButton.xOffset;
			var y = this.clues[i].y + fiveWordsSettings.game.audioButton.yOffset;
			var buttonData = fiveWordsSettings.game.audioButton;
			buttonData.x = x;
			buttonData.y = y;
			this.audioButtons.push(this.addButton(buttonData, this.playClueAudio));
		};
	},

	addHintButtons: function(){
		for (var i = 0; i < this.clues.length; i++) {
			var x = this.clues[i].x + this.clues[i].width + fiveWordsSettings.game.hintButton.xOffset;
			var y = this.clues[i].y + fiveWordsSettings.game.hintButton.yOffset;
			var buttonData = fiveWordsSettings.game.hintButton;
			buttonData.x = x;
			buttonData.y = y;
			this.hintButtons.push(this.addButton(buttonData, this.showHint));
		};
	},

	addSegmentButtons: function(){
		var style = { 
		 	font: fiveWordsSettings.game.segmentButtonText.font, 
		 	fill: fiveWordsSettings.game.segmentButtonText.fill, 
		 	fontSize: fiveWordsSettings.game.segmentButtonText.size,
		 	align: "center",
		 	fontWeight: fiveWordsSettings.game.segmentButtonText.weight
		};

		var segmentTexts = [];
		for (var i = 0; i < fiveWordsSettings.game.puzzle[this.puzzleIndex].words.length; i++) {
			for (var j = 0; j < fiveWordsSettings.game.puzzle[this.puzzleIndex].words[i].solution.length; j++) {
				segmentTexts.push(fiveWordsSettings.game.puzzle[this.puzzleIndex].words[i].solution[j]);
			};
		};

		segmentTexts = this.randomize(segmentTexts);

		for (i = 0; i < fiveWordsSettings.game.segmentButtonPositions.length; i++) {
			var buttonData = fiveWordsSettings.game.segmentButton;
			buttonData.x = fiveWordsSettings.game.segmentButtonPositions[i].x;
			buttonData.y = fiveWordsSettings.game.segmentButtonPositions[i].y;
			this.segmentButtons.push(this.addButton(buttonData, this.chooseSegment));

			var text = this.add.text(
				buttonData.x + (this.segmentButtons[i].width/2) + fiveWordsSettings.game.segmentButtonText.xOffset, 
				buttonData.y + (this.segmentButtons[i].height/2) + fiveWordsSettings.game.segmentButtonText.yOffset, 
				segmentTexts[i], 
				style
			);
			text.anchor.x = 0.5;
			text.anchor.y = 0.5;
			this.segmentButtons[i].segmentText = text;
		};
	},

	randomize: function(arr){
		var randomized = [];
		while(arr.length > 0){
			var rand = Math.floor(Math.random() * arr.length);
			randomized.push(arr.splice(rand, 1)[0]);
		}
		return randomized;
	},

	transitionToMenu: function(){
		this.state.start('splash', true, false, false);
	},

	startHelp: function(){
		if(this.helpActive == false){
			this.helpActive = true;
			this.lockInterface();

			this.helpCueIndex = 0;
			
			FiveWords.voSprite.stop();
			this.soundChannel = FiveWords.voSprite.get(fiveWordsSettings.game.help.audioKey);
			this.soundChannel.play(fiveWordsSettings.game.help.audioKey, 0);

			//this.soundChannel = FiveWords.voSprite.play(fiveWordsSettings.game.help.audioKey);
			this.soundChannel.onStop.add(this.endHelp, this);
		}
	},

	showHelpCue: function(index){
		if(this.helpLayer != null){
			this.helpLayer.destroy();
		}
		this.helpLayer = this.add.group();
		switch(fiveWordsSettings.game.help.cues[index].position){
			case "absolute":
				for (i = 0; i < fiveWordsSettings.game.help.cues[index].sprites.length; i++) {
					this.helpLayer.add(this.add.sprite(fiveWordsSettings.game.help.cues[index].sprites[i].x, 
						                         fiveWordsSettings.game.help.cues[index].sprites[i].y, 
						                         fiveWordsSettings.texture.key, 
						                         fiveWordsSettings.game.help.cues[index].sprites[i].key));
				};
				break;
			case "relative-audio":
				for (var i = 0; i < this.audioButtons.length; i++) {
					if(this.audioButtons[i].visible == true){
						this.helpLayer.add(this.add.sprite(this.audioButtons[i].x + fiveWordsSettings.game.help.cues[index].offset.x, 
						                         this.audioButtons[i].y + fiveWordsSettings.game.help.cues[index].offset.y, 
						                         fiveWordsSettings.texture.key, 
						                         fiveWordsSettings.game.help.cues[index].key));
					}
				};
				break;
			case "relative-hint":
				for (var i = 0; i < this.hintButtons.length; i++) {
					if(this.hintButtons[i].visible == true){
						this.helpLayer.add(this.add.sprite(this.hintButtons[i].x + fiveWordsSettings.game.help.cues[index].offset.x, 
						                         this.hintButtons[i].y + fiveWordsSettings.game.help.cues[index].offset.y, 
						                         fiveWordsSettings.texture.key, 
						                         fiveWordsSettings.game.help.cues[index].key));
					}
				};
				break;
		}
				
	},

	endHelp: function(sound){
		sound.onStop.remove(this.endHelp, this);
		if(this.helpLayer != null){
			this.helpLayer.destroy();
		}
		this.helpActive = false;
		this.unlockInterface();
	},

	update: function(){
		if(this.helpActive){
			if(this.helpCueIndex < fiveWordsSettings.game.help.cues.length){
				var cueTime = fiveWordsSettings.game.help.cues[this.helpCueIndex].time;
				if(this.soundChannel.currentTime > cueTime){
					this.showHelpCue(this.helpCueIndex);
					this.helpCueIndex++;
					/*if(this.helpCueIndex == fiveWordsSettings.game.help.cues.length){
						this.helpActive = false;
						this.unlockInterface();
					}*/
				}
			}
		}
	},

	lockInterface: function(){
		for (var i = 0; i < this.audioButtons.length; i++) {
			this.audioButtons[i].inputEnabled = false;
			this.hintButtons[i].inputEnabled = false;
		};
		this.guessButton.inputEnabled = false;
		this.clearButton.inputEnabled = false;
		for (i = 0; i < this.segmentButtons.length; i++) {
			this.segmentButtons[i].inputEnabled = false;
		};
		//this.smallMenuButton.inputEnabled = false;
		this.helpButton.inputEnabled = false;
	},

	unlockInterface: function(){
		for (var i = 0; i < this.audioButtons.length; i++) {
			this.audioButtons[i].inputEnabled = true;
			this.hintButtons[i].inputEnabled = true;
		};
		this.guessButton.inputEnabled = true;
		this.clearButton.inputEnabled = true;
		for (i = 0; i < this.segmentButtons.length; i++) {
			this.segmentButtons[i].inputEnabled = true;
		};
		//this.smallMenuButton.inputEnabled = true;
		this.helpButton.inputEnabled = true;
	},

	guess: function(){
		var guessValue = this.guessText.text;
		for (var i = 0; i < fiveWordsSettings.game.puzzle[this.puzzleIndex].words.length; i++) {
			var solution = fiveWordsSettings.game.puzzle[this.puzzleIndex].words[i].solution.join("");
			if(guessValue == solution){
				this.handleSolvedWord(i, solution);
				break;
			}else{
				if(guessValue != ""){
					this.handleIncorrectGuess();
				}
			}
		}
	},

	handleIncorrectGuess: function(){
		FiveWords.voSprite.play(fiveWordsSettings.game.incorrectSound);
	},

	handleSolvedWord: function(index, solution){
		this.clues[index].backgroundDisplay.visible = false;
		this.clues[index].solved = true;
		var style = { 
		 	font: fiveWordsSettings.game.clueText.font, 
		 	fill: fiveWordsSettings.game.clueText.foundFill, 
		 	fontSize: fiveWordsSettings.game.clueText.size,
		 	align: "left",
		 	fontWeight: fiveWordsSettings.game.clueText.weight
		};
		this.clues[index].text = fiveWordsSettings.game.puzzle[this.puzzleIndex].words[index].clue + " (" + solution + ")";
		this.clues[index].setStyle(style);

		this.guessText.text = "";
		this.segmentsInPlay = [];

		this.audioButtons[index].visible = false;
		this.hintButtons[index].visible = false;

		FiveWords.voSprite.stop();
		FiveWords.voSprite.play(fiveWordsSettings.game.correctSound);

		this.time.events.add(fiveWordsSettings.game.solutionAudioDelay, function(){
			this.soundChannel = FiveWords.voSprite.play(fiveWordsSettings.game.puzzle[this.puzzleIndex].words[index].solutionAudioKey);
			this.soundChannel.onStop.add(this.checkForCompletion, this);
		}, this);
		
	},

	checkForCompletion: function(sound){
		sound.onStop.remove(this.checkForCompletion, this);

		var allComplete = true;
		for (var i = 0; i < this.clues.length; i++) {
			if(this.clues[i].solved == false){
				allComplete = false;
				break;
			}
		};

		if(allComplete){
			if(fiveWordsSettings.scormEnabled){
				SCORM_API_adapter.setObjectiveStatus(this.puzzleIndex, "completed");

				var allComplete = true;
				for (var i = 0; i < fiveWordsSettings.splash.puzzleButtons.length; i++) {
					if(fiveWordsSettings.splash.puzzleButtons[i].conditional == undefined){
						if(SCORM_API_adapter.getObjectiveStatus(i) != "completed" && i != this.puzzleIndex){
							// checking all but current puzzle - current puzzle objective completion may not have registered yet, assume completion
							allComplete = false;
							break;
						}
					}
				};
				if(allComplete == true){
					SCORM_API_adapter.markComplete();
				}
			}
			this.showWinScreen();
		}
	},

	showWinScreen: function(){
		for (var i = 0; i < fiveWordsSettings.game.winMessage.text.length; i++) {
			var style = { 
			 	font: fiveWordsSettings.game.winMessage.text[i].font, 
			 	fill: fiveWordsSettings.game.winMessage.text[i].fill, 
			 	fontSize: fiveWordsSettings.game.winMessage.text[i].size,
			 	align: fiveWordsSettings.game.winMessage.text[i].align,
			 	fontWeight: fiveWordsSettings.game.winMessage.text[i].weight
			};
			var text = this.add.text(
				fiveWordsSettings.game.winMessage.text[i].x, 
				fiveWordsSettings.game.winMessage.text[i].y, 
				fiveWordsSettings.game.winMessage.text[i].text, 
				style
			);
			if(fiveWordsSettings.game.winMessage.text[i].align == "center"){
				text.anchor.x = 0.5;
				text.anchor.y = 0.5;
			}
		};

		this.smallMenuButton.visible = false;
		this.helpButton.visible = false;

		this.addButton(fiveWordsSettings.game.winMessage.menuButton, this.transitionToMenu);

		this.time.events.add(fiveWordsSettings.game.winMessage.completionAudioDelay, function(){
			FiveWords.voSprite.stop();
			FiveWords.voSprite.play(fiveWordsSettings.game.winMessage.audio);
		}, this);
		
	},

	clearGuess: function(){
		this.segmentsInPlay.forEach(this.showSegmentButton);
		this.guessText.text = "";
		this.segmentsInPlay = [];
	},

	playClueAudio: function(button){
		FiveWords.voSprite.stop();
		var index = this.audioButtons.indexOf(button);
		FiveWords.voSprite.play(fiveWordsSettings.game.puzzle[this.puzzleIndex].words[index].clueAudioKey);
	},

	showHint: function(button){
		if(this.hintsLeft > 0){
			this.resetHint();
			var index = this.hintButtons.indexOf(button);
			var solutionButtons = [];
			for (var i = 0; i < fiveWordsSettings.game.puzzle[this.puzzleIndex].words[index].solution.length; i++) {
				for (var j = 0; j < this.segmentButtons.length; j++) {
					if(this.segmentButtons[j].segmentText.text == fiveWordsSettings.game.puzzle[this.puzzleIndex].words[index].solution[i]){
						solutionButtons.push(this.segmentButtons[j]);
					}
				};
			}
			for (i = 0; i < this.segmentButtons.length; i++) {
				if(solutionButtons.indexOf(this.segmentButtons[i]) == -1){
					this.fadeSegmentButton(this.segmentButtons[i]);
				}
			};
			this.hintsLeft--;
			this.hintsLeftText.text = "Hints left: " + this.hintsLeft;
		}
	},

	resetHint: function(){
		for (var i = 0; i < this.segmentButtons.length; i++) {
			this.unfadeSegmentButton(this.segmentButtons[i]);
		};
	},

	chooseSegment: function(button){
		this.resetHint();
		if(this.segmentsInPlay.length < fiveWordsSettings.game.maxSegmentsInGuess){
			this.guessText.text += button.segmentText.text;
			this.hideSegmentButton(button);
			this.segmentsInPlay.push(button);
		}
	},

	hideSegmentButton: function(button){
		button.visible = false;
		button.segmentText.visible = false;
	},

	showSegmentButton: function(button){
		button.visible = true;
		button.segmentText.visible = true;
	},

	fadeSegmentButton: function(button){
		button.alpha = 0.5;
		button.segmentText.alpha = 0.5;
	},

	unfadeSegmentButton: function(button){
		button.alpha = 1;
		button.segmentText.alpha = 1;
	},

	shutdown: function(){
		FiveWords.voSprite.stop();
		this.guessText.destroy();
		this.hintsLeftText.destroy();
		for (var i = 0; i < this.clues.length; i++) {
			this.clues[i].destroy();
		};
		this.clues = null;
		for (i = 0; i < this.audioButtons.length; i++) {
			this.audioButtons[i].destroy();
		};
		this.audioButtons = null;
		for (i = 0; i < this.hintButtons.length; i++) {
			this.hintButtons[i].destroy();
		};
		this.hintButtons = null;
		for (i = 0; i < this.segmentButtons.length; i++) {
			this.segmentButtons[i].destroy();
		};
		this.segmentButtons = null;
		for (i = 0; i < this.segmentsInPlay.length; i++) {
			this.segmentsInPlay[i].destroy();
		};
		this.segmentsInPlay = null;
		this.smallMenuButton.destroy();
		this.helpButton.destroy();
		if(this.helpLayer != null){
			this.helpLayer.destroy();
		}
		/*if(this.soundChannel != null){
			this.soundChannel.destroy();
		}*/
		this.guessButton.destroy();
		this.clearButton.destroy();
	}

}