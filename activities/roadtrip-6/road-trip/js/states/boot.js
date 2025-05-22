var RoadTrip = {
	questionPool: null,
	voSprite: null,
	vehicleIndex: null,
	destinationIndex: null,
	playerProgress: null,
	playerPosition: null,
	fuelRemaining: null
};

RoadTrip.boot = function(game){};

RoadTrip.boot.prototype = {
	
	init: function(){
		this.stage.backgroundColor = '#ffffff';
		createjs.FlashAudioPlugin.swfPath = "../js/";
		createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
		//createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashAudioPlugin, createjs.HTMLAudioPlugin]);
		console.log("active plugin: " + createjs.Sound.activePlugin);
		//createjs.Sound.activePlugin.showOutput = true;

		if(roadTripSettings.autoScale){
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            window.addEventListener("resize", this.onResize.bind(this));
            this.onResize();
		}
	},
	
    /**
     * Scales the gameContainer so that it does not exceed the inner browser width or height
     */
    onResize: function(){
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;
        var gameContainer = document.querySelector("canvas");
        var boxRatio = this.game.world.width / this.game.world.height;
        if(windowRatio < boxRatio){
            gameContainer.style.width = windowWidth + "px";
            gameContainer.style.height = (windowWidth / boxRatio) + "px";
        }else{
            gameContainer.style.width = (windowHeight * boxRatio) + "px";
            gameContainer.style.height = windowHeight + "px";
        }
    },

	preload: function(){
		//this.load.path = 'images/';
		//this.load.image('preloadLogo', 'preload-logo.png');
		//this.load.image('preloadBar', 'preload-bar.png');
		this.load.image(roadTripSettings.loader.background.key, roadTripSettings.loader.background.file);
		this.load.image(roadTripSettings.loader.rotator.key, roadTripSettings.loader.rotator.file);
		//this.load.path = '';
	},

	create: function(){
		if(roadTripSettings.inspectorEnabled){
			this.game.plugins.add(Phaser.Plugin.Inspector);
		}
		var canContinue = true;
		if(roadTripSettings.scormEnabled){
			var canContinue = SCORM_API_adapter.lmsInitialize();
		}
		if(canContinue){
			this.state.start('preloader');
		}else{
			alert("Unable to initialize SCORM API. Re-start course to try again.");
		}
		
	}

};