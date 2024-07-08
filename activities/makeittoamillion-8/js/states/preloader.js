Millionaire.preloader = function(game){
	this.rotator = null;
};

Millionaire.preloader.prototype = {
	
	init: function(){
	},

	preload: function(){
		this.addLoader();

		for (var i = 0; i < MillionaireSettings.textures.length; i++) {
			this.load.atlas(MillionaireSettings.textures[i].key, MillionaireSettings.textures[i].image, MillionaireSettings.textures[i].data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		}

		this.load.audiosprite(MillionaireSettings.audio.key, MillionaireSettings.audio.urls, null, MillionaireSettings.audio.data);
	},

	addLoader: function(){
		for (var i = 0; i < MillionaireSettings.loader.backgroundElements.length; i++) {
			this.add.sprite(MillionaireSettings.loader.backgroundElements[i].x, MillionaireSettings.loader.backgroundElements[i].y, MillionaireSettings.loader.backgroundElements[i].key);
		}

		this.rotator = this.add.sprite(MillionaireSettings.loader.rotator.x, MillionaireSettings.loader.rotator.y, MillionaireSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		Millionaire.addText(MillionaireSettings.loader.loadingText, this);
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += MillionaireSettings.loader.rotator.speed;
		}
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += MillionaireSettings.loader.rotator.speed;
		}
	},

	create: function(){
		Millionaire.soundSprite = this.add.audioSprite(MillionaireSettings.audio.key);
		this.sound.setDecodedCallback([MillionaireSettings.audio.key], this.loadedAndDecoded, this);
		this.loadedAndDecoded();
	},

	loadedAndDecoded: function(){
		this.state.start('instructions');
		//this.state.start('roll', true, false, 0, true, 0);
	},

	shutdown: function(){
		this.rotator.destroy();
	}

};