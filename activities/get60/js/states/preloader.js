Get60.preloader = function(game){
	this.rotator = null;
};

Get60.preloader.prototype = {
	
	init: function(){
	},

	preload: function(){
		this.addLoader();

		for (var i = 0; i < Get60Settings.textures.length; i++) {
			this.load.atlas(Get60Settings.textures[i].key, Get60Settings.textures[i].image, Get60Settings.textures[i].data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		}

		this.load.audiosprite(Get60Settings.audio.key, Get60Settings.audio.urls, null, Get60Settings.audio.data);
	},

	addLoader: function(){
		for (var i = 0; i < Get60Settings.loader.backgroundElements.length; i++) {
			this.add.sprite(Get60Settings.loader.backgroundElements[i].x, Get60Settings.loader.backgroundElements[i].y, Get60Settings.loader.backgroundElements[i].key);
		}

		this.rotator = this.add.sprite(Get60Settings.loader.rotator.x, Get60Settings.loader.rotator.y, Get60Settings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		Get60.addText(Get60Settings.loader.loadingText, this);
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += Get60Settings.loader.rotator.speed;
		}
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += Get60Settings.loader.rotator.speed;
		}
	},

	create: function(){
		Get60.soundSprite = this.add.audioSprite(Get60Settings.audio.key);
		this.sound.setDecodedCallback([Get60Settings.audio.key], this.loadedAndDecoded, this);
		//this.loadedAndDecoded();
	},

	loadedAndDecoded: function(){
		this.state.start('splash');
		//this.state.start('roll', true, false, 0, true, 0);
	},

	shutdown: function(){
		this.rotator.destroy();
	}

};