StrikeItFit.question = function(game){
	this.background = null;
	this.initials = null;
	this.ballScores = null;
	this.frameScores = null;
	this.currentBall = null;
	this.currentFrameMarker = null;
	this.options = null;
	this.lastPinsKnockedDown = null;
	this.lastCorrect = null;
	this.resultGroup = null;
	this.lastAttemptNumber = null;
	this.vo = null;
	this.loadRotator = null;
};

StrikeItFit.question.prototype = {
	
	init: function(pinsKnockedDown, lastCorrect, lastAttempt){
		this.currentBall = [0,0];
		this.currentFrame = this.getCurrentFrame();
		if(this.currentFrame == -1){
			// game complete
		}
		this.initializeQuestionPool();
		//console.log("Position: " + StrikeItFit.position);
		//console.log("lastPinsKnockedDown: " + pinsKnockedDown);
		this.lastPinsKnockedDown = pinsKnockedDown;
		this.lastCorrect = lastCorrect;
		this.lastAttemptNumber = lastAttempt;

		if(settings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
	},

	getCurrentFrame: function(){
		var currentFrame = -1;
		for (var i = 0; i < StrikeItFit.score.length - 1; i++) {
			if(this.getFrameType(StrikeItFit.score[i]) == "incomplete"){
				currentFrame = i;
				break;
			}
		}
		if(currentFrame == -1){
			// first 9 frames complete, check if 10th is
			if(this.getFrameScore(9).frameTotal == null){
				currentFrame = 9;
			}
		}
		//console.log("curentFrame: " + currentFrame);
		return currentFrame;
	},

	initializeQuestionPool: function(){
		if(StrikeItFit.questionPool == null || StrikeItFit.questionPool.length == 0){
			StrikeItFit.questionPool = [];
			for (var i = 0; i < settings.questions.length; i++) {
				StrikeItFit.questionPool.push(i);
			}
			//console.log("reset q pool to: " + StrikeItFit.questionPool);
		}
	},

	preload: function(){
	},

	update: function(){
		if(this.loadRotator != null){
			this.loadRotator.angle += settings.loader.rotator.speed;
		}
	},

	create: function(){
		//if(this.background == null){
			//this.background = this.add.group();
			for (var i = 0; i < settings.question.backgroundElements.length; i++) {
				this.add.image(settings.question.backgroundElements[i].x, settings.question.backgroundElements[i].y, settings.question.backgroundElements[i].texture, settings.question.backgroundElements[i].key);
			}
		//}

		if(this.initials == null){
			this.createInitials();
		}else{
			this.initials.text = StrikeItFit.playerInitials;
		}

		if(this.ballScores == null){
			this.createBallScores();
		}

		if(this.frameScores == null){
			this.createFrameScores();
		}

		if(this.totalScore == null){
			this.createTotalScore();
		}

		if(this.currentFrameMarker == null){
			this.createCurrentFrameMarker();
		}

		this.updateScoreData();
		
		if(this.lastPinsKnockedDown == null || this.lastPinsKnockedDown == undefined){
			this.updateScoreDisplay();
			this.loadQuestion(true);
		}else{
			this.loadResult();
			this.updateScoreDisplay();
		}
		
		//this.testScoring();
	},

	updateScoreData: function(){
		StrikeItFit.score[StrikeItFit.position[0]][StrikeItFit.position[1]] = this.lastPinsKnockedDown;
	},

	updateScoreDisplay: function(){
		var total = 0;
		for (var i = 0; i < 10; i++) {
			var frameResults = this.getFrameScore(i);
			//console.log(i + ") " + frameResults.ballResults + " (" + frameResults.frameTotal + ")")
			var ballString = "";
			var spacer = " ";
			for (var j = 0; j < frameResults.ballResults.length; j++) {
				if(j != 0){
					ballString += spacer;
				}
				ballString += frameResults.ballResults[j];
			}
			this.ballScores[i].text = ballString;
			if(frameResults.frameTotal != null){
				//this.frameScores[i].text = frameResults.frameTotal;
				total += frameResults.frameTotal;
				this.frameScores[i].text = total;
			}
		}
		this.totalScore.text = total;
	},

	createInitials: function(){
		var initialsStyle = { 
		 	font: settings.question.boxScore.initials.font, 
		 	fill: settings.question.boxScore.initials.fill, 
		 	fontSize: settings.question.boxScore.initials.size,
		 	fontWeight: settings.question.boxScore.initials.fontWeight,
		 	align: "center"
		};
		this.initials = this.add.text(settings.question.boxScore.initials.x, 
			                      	   settings.question.boxScore.initials.y, 
			                          StrikeItFit.playerInitials, initialsStyle);
		this.initials.anchor.x = 0.5;
		this.initials.anchor.y = 0.5;
	},

	createBallScores: function(){
		this.ballScores = [];
		var ballScoreStyle = { 
		 	font: settings.question.boxScore.ballScore.font, 
		 	fill: settings.question.boxScore.ballScore.fill, 
		 	fontSize: settings.question.boxScore.ballScore.size,
		 	fontWeight: settings.question.boxScore.ballScore.fontWeight,
		 	align: "center"
		};
		for (var i = 0; i < 10; i++) {
			var text = this.add.text(settings.question.boxScore.ballScore.startX + (i * settings.question.boxScore.ballScore.xInterval), settings.question.boxScore.ballScore.y, "", ballScoreStyle);
			text.anchor.x = 0.5;
			text.anchor.y = 0.5;
			this.ballScores.push(text);
		}
	},

	createFrameScores: function(){
		this.frameScores = [];
		var frameScoreStyle = { 
		 	font: settings.question.boxScore.frameScore.font, 
		 	fill: settings.question.boxScore.frameScore.fill, 
		 	fontSize: settings.question.boxScore.frameScore.size,
		 	fontWeight: settings.question.boxScore.frameScore.fontWeight,
		 	align: "center"
		};
		for (var i = 0; i < 10; i++) {
			var text = this.add.text(settings.question.boxScore.frameScore.startX + (i * settings.question.boxScore.frameScore.xInterval), settings.question.boxScore.frameScore.y, "", frameScoreStyle);
			text.anchor.x = 0.5;
			text.anchor.y = 0.5;
			this.frameScores.push(text);
		}
	},

	createTotalScore: function(){
		var totalScoreHeadingStyle = { 
		 	font: settings.question.boxScore.totalScoreHeading.font, 
		 	fill: settings.question.boxScore.totalScoreHeading.fill, 
		 	fontSize: settings.question.boxScore.totalScoreHeading.size,
		 	fontWeight: settings.question.boxScore.totalScoreHeading.fontWeight,
		 	align: "center"
		};
		var heading = this.add.text(settings.question.boxScore.totalScoreHeading.x, settings.question.boxScore.totalScoreHeading.y, settings.question.boxScore.totalScoreHeading.text, totalScoreHeadingStyle);
		heading.anchor.x = 0.5;
		heading.anchor.y = 0.5;
		
		var totalScoreStyle = { 
		 	font: settings.question.boxScore.totalScore.font, 
		 	fill: settings.question.boxScore.totalScore.fill, 
		 	fontSize: settings.question.boxScore.totalScore.size,
		 	fontWeight: settings.question.boxScore.totalScore.fontWeight,
		 	align: "center"
		};
		//for (i = 0; i < 10; i++) {
			var text = this.add.text(settings.question.boxScore.totalScore.x, settings.question.boxScore.totalScore.y, "", totalScoreStyle);
			text.anchor.x = 0.5;
			text.anchor.y = 0.5;
			this.totalScore = text;
		//}
	},

	createCurrentFrameMarker: function(){
		this.currentFrameMarker = this.add.image(settings.question.currentFrameMarker.positions[this.currentFrame].x, settings.question.currentFrameMarker.positions[this.currentFrame].y, settings.question.currentFrameMarker.texture, settings.question.currentFrameMarker.key);
	},

	positionCurrentFrameMarker: function(){
		this.currentFrameMarker.x = settings.question.currentFrameMarker.positions[this.currentFrame].x;
		this.currentFrameMarker.y = settings.question.currentFrameMarker.positions[this.currentFrame].y;
	},

	getFrameType: function(frame){
		var type = "";
		if(frame.length < 3){
			if(frame[0] == 10){
				type = "strike";
			}else{
				if(frame[0] != null && frame[1] != null){
					if(frame[0] + frame[1] == 10){
						type = "spare";
					}else{
						type = "open";
					}
				}else{
					type = "incomplete";
				}
			}
		}
		
		return type;
	},

	getFrameScore: function(index){
		var frameTotal = null;
		var ballResults = [];
		var type = null;
		if(index < 9){
			// frames 1-9
			type = this.getFrameType(StrikeItFit.score[index]);
			switch(type){
				case "open":
					frameTotal = StrikeItFit.score[index][0] + StrikeItFit.score[index][1];
					ballResults = [String(StrikeItFit.score[index][0]), String(StrikeItFit.score[index][1])];
					break;
				case "spare":
					if(StrikeItFit.score[index + 1][0] != null){
						frameTotal = 10 + StrikeItFit.score[index + 1][0];
					}
					ballResults = [String(StrikeItFit.score[index][0]), "/"];
					break;
				case "strike":
					ballResults = ["X", " "];
					if(index == 8){
						// next frame is 10th
						if(StrikeItFit.score[index + 1][0] != null){
							if(StrikeItFit.score[index + 1][1] != null){
								frameTotal = 10;
								frameTotal += StrikeItFit.score[index + 1][0];
								frameTotal += StrikeItFit.score[index + 1][1];
							}
						}
					}else{
						// next frame is not 10th
						var nextFrameType = this.getFrameType(StrikeItFit.score[index + 1]);
						if(nextFrameType == "strike"){
							// next frame is strike
							if(StrikeItFit.score[index + 2][0] != null){
								frameTotal = 20 + StrikeItFit.score[index + 2][0];
							}
						}else{
							if(nextFrameType == "open" || nextFrameType == "spare"){
								frameTotal = 10 + StrikeItFit.score[index + 1][0] + StrikeItFit.score[index + 1][1];
							}
						}
					}
					break;
				case "incomplete":
					// frameTotal stays null 
					if(StrikeItFit.score[index][0] == null && StrikeItFit.score[index][1] == null){
						ballResults = [];
					}else{
						ballResults = [String(StrikeItFit.score[index][0]), " "];
					}
					break;
			}
		}else{
			// 10th frame
			if(StrikeItFit.score[index][0] != null && StrikeItFit.score[index][1] != null && StrikeItFit.score[index][2] != null){
				// all three balls scored
				frameTotal = StrikeItFit.score[index][0] + StrikeItFit.score[index][1] + StrikeItFit.score[index][2];

				if(StrikeItFit.score[index][0] == 10){
					// strike
					ballResults.push("X");
					if(StrikeItFit.score[index][1] == 10){
						// strike, strike
						ballResults.push("X");
						if(StrikeItFit.score[index][2] == 10){
							// strike, strike, strike
							ballResults.push("X");
						}else{
							// strike, strike, open
							ballResults.push(String(StrikeItFit.score[index][2]));
						}
					}else{
						if(this.getFrameType([StrikeItFit.score[index][1], StrikeItFit.score[index][2]]) == "spare"){
							// strike, open, spare
							ballResults.push(String(StrikeItFit.score[index][1]));
							ballResults.push("/");
						}else{
							// strike, open, open
							ballResults.push(String(StrikeItFit.score[index][1]));
							ballResults.push(String(StrikeItFit.score[index][2]));
						}
					}
				}else{
					if(StrikeItFit.score[index][2] == 10){
						// open, spare, strike
						ballResults = [String(StrikeItFit.score[index][0]), "/", "X"];
					}else{
						// open, spare, open
						ballResults = [String(StrikeItFit.score[index][0]), "/", String(StrikeItFit.score[index][2])];
					}
				}
			}else{
				if(StrikeItFit.score[index][0] != null && StrikeItFit.score[index][1] != null){
					// first two scored
					if(StrikeItFit.score[index][0] + StrikeItFit.score[index][1] < 10){
						// open, open
						frameTotal = StrikeItFit.score[index][0] + StrikeItFit.score[index][1];
						ballResults = [String(StrikeItFit.score[index][0]), String(StrikeItFit.score[index][1]), " "];
					}else{
						// open, spare
						ballResults = [String(StrikeItFit.score[index][0]), "/", " "];
					}

					if(StrikeItFit.score[index][0] == 10){
						if(StrikeItFit.score[index][1] == 10){
							// strike, strike
							ballResults = ["X", "X", " "];
						}else{
							// strike, open
							ballResults = ["X", String(StrikeItFit.score[index][1]), " "];
						}
					}else{
						if(StrikeItFit.score[index][1] == 10){
							// open, strike
							ballResults = [String(StrikeItFit.score[index][0]), "X", " "];
						}
					}
				}else{
					if(StrikeItFit.score[index][0] != null){
						// first scored
						if(String(StrikeItFit.score[index][1] == null)){
							if(StrikeItFit.score[index][0] == 10){
								// strike, null
								ballResults = ["X", " ", " "];
							}else{
								// open, null
								ballResults = [String(StrikeItFit.score[index][0]), " ", " "];
							}
							
						}
					}
					
				}
			}
		}

		for (i = 0; i < ballResults.length; i++) {
			if(ballResults[i] == "0"){
				ballResults[i] = "-";
			}
		}
		
		return { frameTotal: frameTotal, ballResults: ballResults };
	},

	showLoadRotator: function(){
		if(this.loadRotator == null){
			this.loadRotator = this.add.image(settings.question.loadRotator.x, settings.question.loadRotator.y, settings.question.loadRotator.texture, settings.question.loadRotator.key);
			this.loadRotator.anchor = { x: .5, y: .5 };
		}
	},

	hideLoadRotator: function(){
		if(this.loadRotator != null){
			this.loadRotator.destroy();
			this.loadRotator = null;
		}
	},

	loadQuestion: function(chooseNewQuestion){
		if(StrikeItFit.questionPool.length == 0){
			this.initializeQuestionPool();
		}
		if(chooseNewQuestion){
			var rand = 0;
			if(settings.randomizeQuestions){
				rand = Math.floor(Math.random() * StrikeItFit.questionPool.length);
			}
			StrikeItFit.currentQuestion = StrikeItFit.questionPool.splice(rand, 1)[0];
			StrikeItFit.lastGuess = null;

			this.currentFrame = this.getCurrentFrame();
			this.positionCurrentFrameMarker();
		}
		//console.log(StrikeItFit.currentQuestion + " / " + StrikeItFit.questionPool);

		this.showLoadRotator();

		var loader = this.load.audio("question", settings.questions[StrikeItFit.currentQuestion].questionVO);
		loader.onLoadComplete.addOnce(this.showQuestion, this, 0, "question");
		loader.start();
	},

	showQuestion: function(audioKey){
		this.hideLoadRotator();

		this.vo = this.sound.play(audioKey);

		/*if(StrikeItFit.questionPool.length == 0){
			this.initializeQuestionPool();
		}
		if(chooseNewQuestion){
			var rand = 0;
			if(settings.randomizeQuestions){
				rand = Math.floor(Math.random() * StrikeItFit.questionPool.length);
			}
			StrikeItFit.currentQuestion = StrikeItFit.questionPool.splice(rand, 1)[0];
			StrikeItFit.lastGuess = null;

			this.currentFrame = this.getCurrentFrame();
			this.positionCurrentFrameMarker();
		}
		console.log(StrikeItFit.currentQuestion + " / " + StrikeItFit.questionPool);*/

		this.add.image(settings.question.question.questionBox.x, settings.question.question.questionBox.y, settings.question.question.questionBox.texture, settings.question.question.questionBox.key);

		var questionStyle = { 
		 	font: settings.question.question.question.font, 
		 	fill: settings.question.question.question.fill, 
		 	fontSize: settings.question.question.question.size,
		 	fontWeight: settings.question.question.question.fontWeight,
		 	wordWrap: true,
		 	wordWrapWidth: settings.question.question.question.wordWrapWidth,
		 	align: "left"
		};
		var questionText = this.add.text(settings.question.question.question.x, settings.question.question.question.y, settings.questions[StrikeItFit.currentQuestion].question, questionStyle);
		questionText.lineSpacing = settings.question.question.question.lineSpacing;
		questionText.anchor.y = 0.5;

		var optionLabelStyle = { 
		 	font: settings.question.question.optionLabel.font, 
		 	fill: settings.question.question.optionLabel.fill, 
		 	fontSize: settings.question.question.optionLabel.size,
		 	fontWeight: settings.question.question.optionLabel.fontWeight,
		 	align: "left"
		};
		var optionStyle = { 
		 	font: settings.question.question.option.font, 
		 	fill: settings.question.question.option.fill, 
		 	fontSize: settings.question.question.option.size,
		 	fontWeight: settings.question.question.option.fontWeight,
		 	wordWrap: true,
		 	wordWrapWidth: settings.question.question.option.wordWrapWidth,
		 	align: "left"
		};

		this.options = [];
		for (var i = 0; i < settings.questions[StrikeItFit.currentQuestion].options.length; i++) {
			var thisOption = { radio: null, label: null, text: null };
			var optionLabelText = this.add.text(settings.question.question.optionLabel.x, settings.question.question.optionLabel.y[i], settings.question.question.optionLabel.labels[i], optionLabelStyle);
			var optionText = this.add.text(settings.question.question.option.x, settings.question.question.option.y[i], settings.questions[StrikeItFit.currentQuestion].options[i], optionStyle);
			optionText.lineSpacing = settings.question.question.option.lineSpacing;
			var radio = this.add.button(settings.question.question.radioButton.x, 
							settings.question.question.radioButton.y[i], 
							settings.question.question.radioButton.texture, 
							this.chooseOption, 
							this, 
							settings.question.question.radioButton.overKey, 
							settings.question.question.radioButton.outKey, 
							settings.question.question.radioButton.downKey, 
							settings.question.question.radioButton.upKey);
			radio.data.index = i;
			var hitHeight = radio.height;
			if(((optionText.y + optionText.height) - radio.y) > hitHeight){
				hitHeight = (optionText.y + optionText.height) - radio.y;
			}
			radio.hitArea = new Phaser.Rectangle(0, 0, radio.x + optionText.x + optionText.width, hitHeight);

			if(StrikeItFit.lastGuess == i){
				optionLabelText.alpha = settings.question.question.disabledOption.alpha;
				optionText.alpha = settings.question.question.disabledOption.alpha;
				radio.alpha = settings.question.question.disabledOption.alpha;
				radio.inputEnabled = false;
			}

			thisOption.radio = radio;
			thisOption.label = optionLabelText;
			thisOption.text = optionText;
			this.options.push(thisOption);
		}

		//this.vo = StrikeItFit.soundSprite.play(settings.questions[StrikeItFit.currentQuestion].questionVO);
		
	},

	chooseOption: function(button){
		var correct = false;
		if(settings.questions[StrikeItFit.currentQuestion].correctIndex == button.data.index){
			correct = true;
		}else{
			StrikeItFit.lastGuess = button.data.index;
		}
		this.vo.stop();
		this.state.start("lane", true, false, correct);
	},

	loadResult: function(){
		this.showLoadRotator();

		var loader = this.load.audio("remediation", settings.questions[StrikeItFit.currentQuestion].remediationVO);
		loader.onLoadComplete.addOnce(this.showResult, this, 0, "remediation");
		loader.start();
	},

	showResult: function(remediationAudioKey){
		this.hideLoadRotator();

		if(this.resultGroup == null){
			this.resultGroup = this.add.group();
		}
		var evalStyle = { 
		 	font: settings.question.result.evaluation.font, 
		 	fill: settings.question.result.evaluation.fill, 
		 	fontSize: settings.question.result.evaluation.size,
		 	fontWeight: settings.question.result.evaluation.fontWeight,
		 	align: "center"
		};
		var eval = "Incorrect";
		if(this.lastCorrect){
			eval = "Correct"
		}
		var evalText = this.add.text(settings.question.result.evaluation.x, settings.question.result.evaluation.y, eval, evalStyle, this.resultGroup);
		evalText.anchor.x = 0.5;

		var markStyle = { 
		 	font: settings.question.result.mark.font, 
		 	fill: settings.question.result.mark.fill, 
		 	fontSize: settings.question.result.mark.size,
		 	fontWeight: settings.question.result.mark.fontWeight,
		 	align: "center"
		};
		var ballResult = this.getFrameScore(StrikeItFit.position[0]).ballResults;
		var mark = String(ballResult[StrikeItFit.position[1]]);
		var markText = this.add.text(settings.question.result.mark.x, evalText.y + evalText.height + settings.question.result.mark.yPad, mark, markStyle, this.resultGroup);
		markText.anchor.x = 0.5;

		var remediationStyle = { 
		 	font: settings.question.result.remediation.font, 
		 	fill: settings.question.result.remediation.fill, 
		 	fontSize: settings.question.result.remediation.size,
		 	fontWeight: settings.question.result.remediation.fontWeight,
		 	wordWrap: true,
		 	wordWrapWidth: settings.question.result.remediation.wordWrapWidth,
		 	align: "center"
		};
		var remediation = "";
		/*var endOfQuestion = this.isEndOfFrame();
		if(endOfQuestion){
			remediation = settings.questions[StrikeItFit.currentQuestion].remediation;
		}else{
			remediation = settings.question.result.remediation.firstMissText;
		}*/
		var endOfQuestion = null;
		if(this.lastCorrect || (!this.lastCorrect && this.lastAttemptNumber == 2) || (StrikeItFit.position[0] == 9 && StrikeItFit.position[1] == 2) ){
			remediation = settings.questions[StrikeItFit.currentQuestion].remediation;
			endOfQuestion = true;
			//StrikeItFit.soundSprite.play(settings.questions[StrikeItFit.currentQuestion].remediationVO);
			this.vo = null;
			var rand = 0;
			if(this.lastCorrect){
				rand = Math.floor(Math.random() * settings.question.correctAudioKey.length);
				this.vo = StrikeItFit.soundSprite.play(settings.question.correctAudioKey[rand]);
			}else{
				rand = Math.floor(Math.random() * settings.question.incorrectAudioKey.length);
				this.vo = StrikeItFit.soundSprite.play(settings.question.incorrectAudioKey[rand]);
			}
			this.time.events.add(this.vo.durationMS + settings.question.audioPauseGap, function(){ 
				//this.vo = StrikeItFit.soundSprite.play(settings.questions[StrikeItFit.currentQuestion].remediationVO); 
				this.vo = this.sound.play(remediationAudioKey);
			}, this);
		}else{
			remediation = settings.question.result.remediation.firstMissText;
			endOfQuestion = false;

			var rand = Math.floor(Math.random() * settings.question.incorrectAudioKey.length);
			this.vo = StrikeItFit.soundSprite.play(settings.question.incorrectAudioKey[rand]);
			//this.vo = StrikeItFit.soundSprite.play(settings.question.tryAgainAudioKey);
			this.time.events.add(this.vo.durationMS + settings.question.audioPauseGap, function(){ 
				this.vo = StrikeItFit.soundSprite.play(settings.question.tryAgainAudioKey);
			}, this);
		}
		var remediationText = this.add.text(settings.question.result.remediation.x, markText.y + markText.height + settings.question.result.remediation.yPad, remediation, remediationStyle, this.resultGroup);
		remediationText.anchor.x = 0.5;

		var okButton = this.add.button(settings.question.result.okButton.x, 
							remediationText.y + remediationText.height + settings.question.result.okButton.yPad, 
							settings.question.result.okButton.texture, 
							null, 
							this, 
							settings.question.result.okButton.overKey, 
							settings.question.result.okButton.outKey, 
							settings.question.result.okButton.downKey, 
							settings.question.result.okButton.upKey, 
							this.resultGroup);
		okButton.onInputUp.add(this.handleResultOk, this, 0, endOfQuestion);
	},

	isEndOfFrame: function(){
		var end = false;
		if(StrikeItFit.position[0] < 9){
			if(this.lastCorrect || (!this.lastCorrect && this.lastAttemptNumber == 2)){
				end = true;
			}
		}else{
			var ballResults = this.getFrameScore(StrikeItFit.position[0]).ballResults;
			if(StrikeItFit.position[1] == 1){
				var frame = [StrikeItFit.score[9][0], StrikeItFit.score[9][1]];
				var frameType = this.getFrameType(frame);
				//console.log(frame + " type = " + frameType);
				if(frameType == "open"){
					end = true;
				}
			}else{
				if(StrikeItFit.position[1] == 2){
					end = true;
				}
			}
		}	

		return end;
	},

	handleResultOk: function(button, arg1, arg2, endOfQuestion){
		this.vo.stop();
		this.time.events.removeAll();
		if(StrikeItFit.position[0] == 9 && this.isEndOfFrame()){
			this.endGame();
		}else{
			this.updatePosition();
			this.cleanUpResult();
			this.loadQuestion(endOfQuestion);
		}
	},

	cleanUpResult: function(){
		this.resultGroup.destroy(true);
		this.resultGroup = null;
	},

	updatePosition: function(){
		if(StrikeItFit.position[0] < 9){
			// frames 1-9
			if(StrikeItFit.position[1] == 0){
				// first ball
				if(this.lastPinsKnockedDown == 10){
					StrikeItFit.position[0]++;
					StrikeItFit.position[1] = 0;
				}else{
					StrikeItFit.position[1]++;
				}
			}else{
				// second ball
				StrikeItFit.position[0]++;
				StrikeItFit.position[1] = 0;
			}
		}else{
			// frame 10
			StrikeItFit.position[1]++;
		}
		//console.log("position updated: " + StrikeItFit.position);
	},

	endGame: function(){
		this.cleanUpResult();
		var balls = [];
		for (var i = 0; i < this.ballScores.length; i++) {
			balls.push(this.ballScores[i].text);
		}

		var frames = [];
		for (i = 0; i < this.frameScores.length; i++) {
			frames.push(this.frameScores[i].text);
		}

		var score = this.totalScore.text;

		this.state.start("gameOver", true, false, balls, frames, score);
	},

	shutdown: function(){
		this.initials.destroy();
		this.initials = null;
		for (var i = 0; i < this.ballScores.length; i++) {
			this.ballScores[i].destroy();
		}
		this.ballScores = null;
		for (i = 0; i < this.frameScores.length; i++) {
			this.frameScores[i].destroy();
		}
		this.frameScores = null;
		this.totalScore.destroy();
		this.totalScore = null;
		this.currentFrameMarker.destroy();
		this.currentFrameMarker = null;
	},





	testScoring: function(){
		this.input.keyboard.callbackContext = this;
		this.input.keyboard.onUpCallback = this.catchKey;
	},

	catchKey: function(keyboardEvent){
		//console.log(keyboardEvent);
		var scored = false;
		if(keyboardEvent.keyCode >= 48 && keyboardEvent.keyCode <= 57){
			StrikeItFit.score[this.currentBall[0]][this.currentBall[1]] = Number(keyboardEvent.key);
			scored = true;
		}else{
			if(keyboardEvent.keyCode == 88){
				StrikeItFit.score[this.currentBall[0]][this.currentBall[1]] = 10;
				scored = true;
			}
		}
		//console.log(StrikeItFit.score);
		if(scored){
			if(this.currentBall[0] == 9){
				if(this.currentBall[1] < 2 ){
					this.currentBall[1]++;
				}
			}else{
				if(this.currentBall[1] < 1){
					if(StrikeItFit.score[this.currentBall[0]][this.currentBall[1]] == 10){
						this.currentBall[0]++;
						this.currentBall[1] = 0;
					}else{
						this.currentBall[1] = 1;
					}
				}else{
					this.currentBall[0]++;
					this.currentBall[1] = 0;
				}
			}
		}
		this.updateScoreDisplay();
		this.currentFrame = this.getCurrentFrame();
		this.positionCurrentFrameMarker();
	}

};