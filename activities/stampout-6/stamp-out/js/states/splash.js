StampOut.splash = function(game){};

StampOut.splash.prototype = {
	
	init: function(){
	},

	create: function(){
		this.add.sprite(stampOutSettings.splash.background.x, stampOutSettings.splash.background.x, 'texture', stampOutSettings.splash.background.key);
		this.add.sprite(stampOutSettings.splash.logo.x, stampOutSettings.splash.logo.y, 'texture', stampOutSettings.splash.logo.key);
		this.add.button(stampOutSettings.splash.newGameButton.x, stampOutSettings.splash.newGameButton.y, 'texture', this.startNewGame, this, stampOutSettings.splash.newGameButton.overKey, stampOutSettings.splash.newGameButton.outKey, stampOutSettings.splash.newGameButton.downKey, stampOutSettings.splash.newGameButton.upKey);
		if(stampOutSettings.scormEnabled){
			if(this.savedStateDataAvailable()){
				this.add.button(stampOutSettings.splash.continueButton.x, stampOutSettings.splash.continueButton.y, 'texture', this.continueGame, this, stampOutSettings.splash.continueButton.overKey, stampOutSettings.splash.continueButton.outKey, stampOutSettings.splash.continueButton.downKey, stampOutSettings.splash.continueButton.upKey);
			}
		}
		
		this.add.button(stampOutSettings.splash.howToPlayButton.x, stampOutSettings.splash.howToPlayButton.y, 'texture', this.instructions, this, stampOutSettings.splash.howToPlayButton.overKey, stampOutSettings.splash.howToPlayButton.outKey, stampOutSettings.splash.howToPlayButton.downKey, stampOutSettings.splash.howToPlayButton.upKey);

		//StampOut.audioSprite.play(stampOutSettings.splash.musicKey);
		createjs.Sound.play(stampOutSettings.splash.musicKey);
	},

	savedStateDataAvailable: function(){
		var rawStateData = SCORM_API_adapter.getSuspendData();
		console.log("rawStateData " + rawStateData);
		if(rawStateData == null || rawStateData == ""){
			return false;
		}else{
			return true;
		}
	},

	resetStateData: function(){
		StampOut.currentStreak = 0;

		StampOut.powerUpStatus = []; // Array of values, one for each power up. 0 = unused, 1 = used
		for (var i = 0; i < stampOutSettings.powerUp.length; i++) {
			StampOut.powerUpStatus.push(0);
		};
		//StampOut.powerUpStatus = [1,0,1];
		//StampOut.categoryStatus = [0,1,0,1,0];

		StampOut.categoryStatus = []; // Array of values, one for each category. 0 = open, 1 = closed
		for (i = 0; i < stampOutSettings.category.length; i++) {
			if(stampOutSettings.category[i].id != "stamp"){
				StampOut.categoryStatus.push(0);
			}
		};
		
		if(StampOut.questionPool == null){
			StampOut.questionPool = [];
		}
	},

	startNewGame: function(){
		if(stampOutSettings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
		this.resetStateData();
		//StampOut.audioSprite.stop();
		this.state.start('spinner');
	},

	continueGame: function(){
		this.retrieveStateData();
		//StampOut.audioSprite.stop();
		this.state.start('spinner');
	},

	retrieveStateData: function(){
		if(stampOutSettings.scormEnabled){
			var rawStateData = SCORM_API_adapter.getSuspendData();
			if(rawStateData != null && rawStateData != ""){
				StampOut.currentStreak = Number(rawStateData.charAt(0));

				var powerUpCount = stampOutSettings.powerUp.length;
				StampOut.powerUpStatus = rawStateData.substr(1, powerUpCount).split("");
				StampOut.powerUpStatus.forEach(function(x, i, a){
					Number(a[i]);
				});

				var categoryCount = stampOutSettings.category.length;
				StampOut.categoryStatus = rawStateData.substr(1 + powerUpCount, categoryCount).split("");
				StampOut.categoryStatus.forEach(function(x, i, a){
					Number(a[i]);
				});

				StampOut.questionPool = [];
			}
		}
	},

	instructions: function(){
		this.resetStateData();
		//StampOut.audioSprite.stop();
		this.state.start('instructions');
	},

	shutdown: function(){
		createjs.Sound.stop();
	}

};