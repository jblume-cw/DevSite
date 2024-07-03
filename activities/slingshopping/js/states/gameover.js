StrikeItFit.gameOver = function(game){
	this.ballText = null;
	this.frameText = null;
	this.scoreText = null;
	this.vo = null;
};

StrikeItFit.gameOver.prototype = {
	
	init: function(ballText, frameText, scoreText){
		this.ballText = ballText;
		this.frameText = frameText;
		this.scoreText = scoreText;
		//console.log(this.scoreText);
	},

	preload: function(){
	},

	update: function(){
	},

	create: function(){
		for (var i = 0; i < settings.gameOver.backgroundElements.length; i++) {
			this.add.image(settings.gameOver.backgroundElements[i].x, settings.gameOver.backgroundElements[i].y, settings.gameOver.backgroundElements[i].texture, settings.gameOver.backgroundElements[i].key);
		}

		var headerStyle = { 
		 	font: settings.gameOver.header.font, 
		 	fill: settings.gameOver.header.fill, 
		 	fontSize: settings.gameOver.header.size,
		 	align: "center"
		};
		var headerText = this.add.text(settings.gameOver.header.x, 
			                      	   settings.gameOver.header.y, 
			                           settings.gameOver.header.text, headerStyle);
		headerText.anchor.x = 0.5;
		headerText.anchor.y = 0;

		var bodyStyle = { 
		 	font: settings.gameOver.body.font, 
		 	fill: settings.gameOver.body.fill, 
		 	fontSize: settings.gameOver.body.size,
		 	align: "center"
		};
		var bodyText = "";
		var audioKey = null;
		for (var i = 0; i < settings.gameOver.body.recap.length; i++) {
			if(Number(this.scoreText) <= settings.gameOver.body.recap[i].max){
				bodyText = settings.gameOver.body.recap[i].text;
				audioKey = settings.gameOver.body.recap[i].audio;
			}
		}
		var bodyText = this.add.text(settings.gameOver.body.x, 
			                      	   settings.gameOver.body.y, 
			                           bodyText, bodyStyle);
		bodyText.wordWrap = true;
		bodyText.wordWrapWidth = settings.gameOver.body.wordWrapWidth;
		bodyText.anchor.x = 0.5;
		bodyText.anchor.y = 0;
		this.vo = StrikeItFit.soundSprite.play(audioKey);

		var playAgain = this.add.button(settings.gameOver.playAgainButton.x, 
							settings.gameOver.playAgainButton.y, 
							settings.gameOver.playAgainButton.texture, 
							this.handlePlayAgain, 
							this, 
							settings.gameOver.playAgainButton.overKey, 
							settings.gameOver.playAgainButton.outKey, 
							settings.gameOver.playAgainButton.downKey, 
							settings.gameOver.playAgainButton.upKey);
		playAgain.anchor.x = 0.5;

		this.createInitials();
		this.createBallScores();
		this.createFrameScores();
		this.createTotalScore();
		this.storeHighScore();
	},

	createInitials: function(){
		var initialsStyle = { 
		 	font: settings.gameOver.initials.font, 
		 	fill: settings.gameOver.initials.fill, 
		 	fontSize: settings.gameOver.initials.size,
		 	fontWeight: settings.gameOver.initials.fontWeight,
		 	align: "center"
		};
		var initials = this.add.text(settings.gameOver.initials.x, 
			                      	   settings.gameOver.initials.y, 
			                          StrikeItFit.playerInitials, initialsStyle);
		initials.anchor.x = 0.5;
		initials.anchor.y = 0.5;
	},

	createBallScores: function(){
		var ballScoreStyle = { 
		 	font: settings.gameOver.ballScore.font, 
		 	fill: settings.gameOver.ballScore.fill, 
		 	fontSize: settings.gameOver.ballScore.size,
		 	fontWeight: settings.gameOver.ballScore.fontWeight,
		 	align: "center"
		};
		for (var i = 0; i < 10; i++) {
			var text = this.add.text(settings.gameOver.ballScore.startX + (i * settings.gameOver.ballScore.xInterval), settings.gameOver.ballScore.y, this.ballText[i], ballScoreStyle);
			text.anchor.x = 0.5;
			text.anchor.y = 0.5;
		}
	},

	createFrameScores: function(){
		var frameScoreStyle = { 
		 	font: settings.gameOver.frameScore.font, 
		 	fill: settings.gameOver.frameScore.fill, 
		 	fontSize: settings.gameOver.frameScore.size,
		 	fontWeight: settings.gameOver.frameScore.fontWeight,
		 	align: "center"
		};
		for (var i = 0; i < 10; i++) {
			var text = this.add.text(settings.gameOver.frameScore.startX + (i * settings.gameOver.frameScore.xInterval), settings.gameOver.frameScore.y, this.frameText[i], frameScoreStyle);
			text.anchor.x = 0.5;
			text.anchor.y = 0.5;
		}
	},

	createTotalScore: function(){
		var totalScoreHeadingStyle = { 
		 	font: settings.gameOver.totalScoreHeading.font, 
		 	fill: settings.gameOver.totalScoreHeading.fill, 
		 	fontSize: settings.gameOver.totalScoreHeading.size,
		 	fontWeight: settings.gameOver.totalScoreHeading.fontWeight,
		 	align: "center"
		};
		var heading = this.add.text(settings.gameOver.totalScoreHeading.x, settings.gameOver.totalScoreHeading.y, settings.gameOver.totalScoreHeading.text, totalScoreHeadingStyle);
		heading.anchor.x = 0.5;
		heading.anchor.y = 0.5;
		
		var totalScoreStyle = { 
		 	font: settings.gameOver.totalScore.font, 
		 	fill: settings.gameOver.totalScore.fill, 
		 	fontSize: settings.gameOver.totalScore.size,
		 	fontWeight: settings.gameOver.totalScore.fontWeight,
		 	align: "center"
		};
		var text = this.add.text(settings.gameOver.totalScore.x, settings.gameOver.totalScore.y, this.scoreText, totalScoreStyle);
		text.anchor.x = 0.5;
		text.anchor.y = 0.5;
		this.totalScore = text;
	},

	storeHighScore: function(){
		if(settings.scormEnabled){
			var sd = SCORM_API_adapter.getSuspendData();
			if(sd == "" || sd == null){
				SCORM_API_adapter.setSuspendData(Slingshopping.score + "_" + Slingshopping.level);
			}else{
				var highScore = Number(sd.split("_")[0]);
				if(Slingshopping.score > highScore){
					SCORM_API_adapter.setSuspendData(Slingshopping.score + "_" + Slingshopping.level);
				}
			}
		}
	},

	handlePlayAgain: function(){
		this.vo.stop();
		this.state.start("instructions");
	},

	shutdown: function(){
	}

}