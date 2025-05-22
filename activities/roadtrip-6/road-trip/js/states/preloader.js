RoadTrip.preloader = function(game){
	this.audioLoaded = false;
	this.graphicsLoaded = false;
	this.rotator = null;
	this.loaderText = null;
	this.sounds = null;
	this.audioLoadCount = null;
	this.clickthroughGroup = null;
};

RoadTrip.preloader.prototype = {
	
	init: function(){
	},

	preload: function(){
		if(this.game.device.iOS){
			this.addClickthrough();
		}else{
			this.addLoader();
			this.loadAudio();
		}

		/*var preloadBar = this.add.sprite(200, 403, 'preloadBar');
		this.load.setPreloadSprite(preloadBar);*/

		this.load.atlas(roadTripSettings.textureKey, 'images/texture.png', 'images/texture.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

		
	},

	loadAudio: function(){
		this.audioLoadCount = 0;
		this.sounds = [roadTripSettings.vo.gameOver, roadTripSettings.sfx];
		createjs.Sound.alternateExtensions = ["ogg"];
		createjs.Sound.on("fileload", this.audioComplete, this, false);
		createjs.Sound.on("fileerror", this.audioError, this, true);
		createjs.Sound.registerSounds(this.sounds, "audio/");
	},

	addClickthrough: function(){
		this.clickthroughGroup = this.add.group();

		var background = this.add.sprite(0, 0, roadTripSettings.loader.background.key);

    	var messageStyle = { 
		 	font: roadTripSettings.loader.label.font, 
		 	fill: roadTripSettings.loader.label.fill, 
		 	fontSize: roadTripSettings.loader.label.size,
		 	align: "center"
		};
		var messageText = this.add.text(this.world.width/2, 
									    this.world.height/2, 
			                            roadTripSettings.loader.label.clickthroughText, messageStyle);
		messageText.anchor.x = 0.5;
		messageText.anchor.y = 1;

		this.clickthroughGroup.add(background);
		this.clickthroughGroup.add(messageText);

		this.input.onUp.add(this.handleClickthrough, this);
	},

	handleClickthrough: function(){
		this.clickthroughGroup.destroy();
		this.addLoader();
		this.loadAudio();
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += roadTripSettings.loader.rotator.speed;
		}
	},

	addLoader: function(){
		this.add.sprite(0, 0, roadTripSettings.loader.background.key);
		this.rotator = this.add.sprite(roadTripSettings.loader.rotator.x, roadTripSettings.loader.rotator.y, roadTripSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: roadTripSettings.loader.label.font, 
		 	fill: roadTripSettings.loader.label.fill, 
		 	fontSize: roadTripSettings.loader.label.size,
		 	align: "center"
		};
		this.loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - roadTripSettings.loader.label.padding, 
			                           roadTripSettings.loader.label.loadingText, loaderStyle);
		this.loaderText.anchor.x = 0.5;
		this.loaderText.anchor.y = 1;
	},

	create: function(){
		console.log("graphics loaded");
		this.graphicsLoaded = true;
	},

	audioComplete: function(event){
		console.log("preloader.js: audio loaded " + event.src);
		this.audioLoadCount++;
		if(this.audioLoadCount == this.sounds.length){
			createjs.Sound.removeAllEventListeners();
			this.audioLoaded = true;
		}
		
	},

	audioError: function(){
		console.log("Audio failed to load");
	},

	update: function(){
		if(this.audioLoaded && this.graphicsLoaded){
			this.moveOn();
		}
	},/*

	allLoaded: function(){
		if(this.game.device.iOS){
			this.loaderText.text = roadTripSettings.loader.label.clickthroughText;
			this.rotator.destroy();
			this.input.onUp.add(this.moveOn, this);
		}else{
			this.moveOn();
		}
		
	},*/

	moveOn: function(){
		this.state.start('splash');
	},

	shutdown: function(){
		this.loaderText.destroy();
		if(this.rotator != null){
			this.rotator.destroy();
		}
	}

};