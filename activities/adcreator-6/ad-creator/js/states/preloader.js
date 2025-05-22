AdCreator.preloader = function(game){
	this.rotator = null;
};

AdCreator.preloader.prototype = {
	
	init: function(){
	},

	preload: function(){
		this.addLoader();

		this.load.atlas(adSettings.interfaceTexture.key, adSettings.interfaceTexture.image, adSettings.interfaceTexture.data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.load.atlas(adSettings.itemTexture.key, adSettings.itemTexture.image, adSettings.itemTexture.data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.load.atlas(adSettings.backgroundTexture.key, adSettings.backgroundTexture.image, adSettings.backgroundTexture.data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.load.audio('instructions', ['audio/instructions.m4a', 'audio/instructions.ogg']);
	},

	addLoader: function(){
		this.add.sprite(adSettings.loader.background.x, adSettings.loader.background.y, adSettings.loader.background.key);

		this.rotator = this.add.sprite(adSettings.loader.rotator.x, adSettings.loader.rotator.y, adSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: adSettings.loader.label.font, 
		 	fill: adSettings.loader.label.fill, 
		 	fontSize: adSettings.loader.label.size,
		 	align: "center"
		};
		var loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - adSettings.loader.label.padding, 
			                           adSettings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 1;
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += adSettings.loader.rotator.speed;
		}
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += adSettings.loader.rotator.speed;
		}
	},

	create: function(){
		//console.log("assets loaded");
		AdCreator.vo = this.add.audio("instructions");
		this.sound.setDecodedCallback([AdCreator.vo], this.loadedAndDecoded, this);
	},

	loadedAndDecoded: function(){
		this.state.start('splash');
	},

	shutdown: function(){
		this.rotator.destroy();
	}

}