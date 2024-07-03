Slingshopping.preloader = function(game){
	this.rotator = null;
};

Slingshopping.preloader.prototype = {
	
	init: function(){
	},

	preload: function(){
		this.addLoader();

		for (var i = 0; i < settings.textures.length; i++) {
			this.load.atlas(settings.textures[i].key, settings.textures[i].image, settings.textures[i].data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		}

		this.load.audiosprite(settings.sound.key, settings.sound.urls, null, settings.sound.data);
	},

	addLoader: function(){
		for (var i = 0; i < settings.loader.backgroundElements.length; i++) {
			this.add.sprite(settings.loader.backgroundElements[i].x, settings.loader.backgroundElements[i].y, settings.loader.backgroundElements[i].key);
		}

		this.rotator = this.add.sprite(settings.loader.rotator.x, settings.loader.rotator.y, settings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: settings.loader.label.font, 
		 	fill: settings.loader.label.fill, 
		 	fontSize: settings.loader.label.size,
		 	align: "center"
		};
		var loaderText = this.add.text(settings.loader.label.x, 
			                      	   settings.loader.label.y, 
			                           settings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 0;
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += settings.loader.rotator.speed;
		}
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += settings.loader.rotator.speed;
		}
	},

	create: function(){
		Slingshopping.soundSprite = this.add.audioSprite(settings.sound.key);
		this.sound.setDecodedCallback([settings.sound.key], this.loadedAndDecoded, this);
	},

	loadedAndDecoded: function(){
		this.state.start('instructions');
	},

	shutdown: function(){
		this.rotator.destroy();
	}

};