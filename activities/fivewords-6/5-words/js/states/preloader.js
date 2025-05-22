FiveWords.preloader = function(game){
	this.rotator = null;
};

FiveWords.preloader.prototype = {
	
	init: function(){},

	preload: function(){
		this.addLoader();
		this.load.atlas(fiveWordsSettings.texture.key, fiveWordsSettings.texture.image, fiveWordsSettings.texture.data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.load.audiosprite(fiveWordsSettings.audio.key, fiveWordsSettings.audio.urls, null, fiveWordsSettings.audio.data);
	},

	addLoader: function(){
		this.add.sprite(fiveWordsSettings.loader.background.x, fiveWordsSettings.loader.background.y, fiveWordsSettings.loader.background.key);

		this.rotator = this.add.sprite(fiveWordsSettings.loader.rotator.x, fiveWordsSettings.loader.rotator.y, fiveWordsSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: fiveWordsSettings.loader.label.font, 
		 	fill: fiveWordsSettings.loader.label.fill, 
		 	fontSize: fiveWordsSettings.loader.label.size,
		 	align: "center",
		 	weight: fiveWordsSettings.loader.label.weight
		};
		var loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - fiveWordsSettings.loader.label.padding, 
			                           fiveWordsSettings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 1;
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += fiveWordsSettings.loader.rotator.speed;
		}
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += fiveWordsSettings.loader.rotator.speed;
		}
	},

	create: function(){
		console.log("assets loaded");
		FiveWords.voSprite = this.add.audioSprite(fiveWordsSettings.audio.key);
		this.sound.setDecodedCallback([fiveWordsSettings.audio.key], this.loadedAndDecoded, this);
	},

	loadedAndDecoded: function(){
		console.log("audio decoded");
		this.state.start('splash', true, false, true);
	},

	shutdown: function(){
		this.rotator.destroy();
	}

};