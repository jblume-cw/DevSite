RoadTrip.splash = function(game){};

RoadTrip.splash.prototype = {
	
	init: function(){
		RoadTrip.playerProgress = [];
		for (var i = 0; i < roadTripSettings.map.locations.length; i++) {
			RoadTrip.playerProgress.push(0);
		};
		RoadTrip.playerPosition = 0;
		RoadTrip.fuelRemaining = 1;
	},

	create: function(){
		console.log("create splash");
		this.add.sprite(roadTripSettings.splash.background.x, 
						roadTripSettings.splash.background.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.splash.background.key);
		this.add.button(roadTripSettings.splash.howToButton.x, 
						roadTripSettings.splash.howToButton.y, 
						roadTripSettings.textureKey, 
						this.startHowTo, 
						this, 
						roadTripSettings.splash.howToButton.overKey, 
						roadTripSettings.splash.howToButton.outKey, 
						roadTripSettings.splash.howToButton.downKey, 
						roadTripSettings.splash.howToButton.upKey);
		this.add.button(roadTripSettings.splash.beginButton.x, 
						roadTripSettings.splash.beginButton.y, 
						roadTripSettings.textureKey, 
						this.begin, 
						this, 
						roadTripSettings.splash.beginButton.overKey, 
						roadTripSettings.splash.beginButton.outKey, 
						roadTripSettings.splash.beginButton.downKey, 
						roadTripSettings.splash.beginButton.upKey);
		//createjs.Sound.play("RTGoLAm");
		createjs.Sound.play(roadTripSettings.splash.musicKey);
	},

	startHowTo: function(){
		this.state.start('howToPlay', true, false, 0);
	},

	begin: function(){
		this.state.start('options');
	}

};