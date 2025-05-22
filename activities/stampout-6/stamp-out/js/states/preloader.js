StampOut.preloader = function(game){
	this.graphicsLoaded = false;
	this.audioLoaded = false;
	this.rotator = null;

	this.clickthroughGroup = null;
	this.sounds = null;
	this.soundsLoaded = null;
};

StampOut.preloader.prototype = {
	
	init: function(){
	},

	preload: function(){
		if(this.game.device.iOS){
			this.addClickthrough();
		}else{
			this.addLoader();
			this.loadAudio();
		}
		
		/*this.add.sprite(198, 172, 'preloadLogo');

		var preloadBar = this.add.sprite(200, 403, 'preloadBar');
		this.load.setPreloadSprite(preloadBar);*/

		this.load.atlas(stampOutSettings.textureKey, 'images/texture.png', 'images/texture.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		/*this.load.path = 'audio/';
		this.load.audiosprite("audioSprite", stampOutSettings.sounds.src, null, stampOutSettings.sounds.data, true);*/
	},

	loadAudio: function(){
		this.soundsLoaded = 0;
		this.sounds = [stampOutSettings.audio.general, stampOutSettings.audio.sfx];
		createjs.Sound.alternateExtensions = ["ogg"];
		createjs.Sound.on("fileload", this.audioLoadComplete, this, false);
		createjs.Sound.registerSounds(this.sounds, "audio/");
	},

	addClickthrough: function(){
		this.clickthroughGroup = this.add.group();

		var graphics = this.add.graphics(0, 0);
		graphics.beginFill(stampOutSettings.loader.backgroundColor);
		graphics.drawRect(0, 0, this.world.width, this.world.height);
    	graphics.endFill();

    	var messageStyle = { 
		 	font: stampOutSettings.loader.label.font, 
		 	fill: stampOutSettings.loader.label.fill, 
		 	fontSize: stampOutSettings.loader.label.size,
		 	align: "center"
		};
		var messageText = this.add.text(this.world.width/2, 
									    this.world.height/2, 
			                            stampOutSettings.loader.label.clickthroughText, messageStyle);
		messageText.anchor.x = 0.5;
		messageText.anchor.y = 1;

		this.clickthroughGroup.add(graphics);
		this.clickthroughGroup.add(messageText);

		this.input.onUp.add(this.handleClickthrough, this);
	},

	handleClickthrough: function(){
		this.clickthroughGroup.destroy();
		this.addLoader();
		this.loadAudio();
	},

	addLoader: function(){
		var graphics = this.add.graphics(0, 0);
		graphics.beginFill(stampOutSettings.loader.backgroundColor);
		graphics.drawRect(0, 0, this.world.width, this.world.height);
    	graphics.endFill();

		this.rotator = this.add.sprite(stampOutSettings.loader.rotator.x, stampOutSettings.loader.rotator.y, stampOutSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: stampOutSettings.loader.label.font, 
		 	fill: stampOutSettings.loader.label.fill, 
		 	fontSize: stampOutSettings.loader.label.size,
		 	align: "center"
		};
		var loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - stampOutSettings.loader.label.padding, 
			                           stampOutSettings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 1;
	},

	create: function(){
		/*StampOut.audioSprite = this.add.audioSprite("audioSprite");
		this.sound.setDecodedCallback(["audioSprite"], this.moveOn, this);*/
		//console.log("graphics loaded");
		this.graphicsLoaded = true;
	},

	audioLoadComplete: function(event){
		//console.log(event.src + " loaded");
		this.soundsLoaded++;
		if(this.soundsLoaded == this.sounds.length){
			createjs.Sound.removeAllEventListeners();
			this.audioLoaded = true;
		}
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += stampOutSettings.loader.rotator.speed;
		}
	},

	update: function(){
		if(this.audioLoaded && this.graphicsLoaded){
			this.allLoaded();
		}
		if(this.rotator != null){
			this.rotator.angle += stampOutSettings.loader.rotator.speed;
		}
	},

	allLoaded: function(){
		// remove new preloader
		this.moveOn();
	},

	moveOn: function(){
		this.state.start('splash');
	}, 

	shutdown: function(){
		this.rotator.destroy();
	}

};