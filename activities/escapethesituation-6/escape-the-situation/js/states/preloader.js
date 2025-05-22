EscapeTheSituation.preloader = function(game){
	this.rotator = null;
};

EscapeTheSituation.preloader.prototype = {
	
	init: function(){
	},

	preload: function(){
		this.addLoader();

		this.load.atlas(etsSettings.textureKey, 'images/spritesheet.png', 'images/spritesheet.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.load.atlas(etsSettings.game.defaults.player.key, etsSettings.game.defaults.player.atlasImage, etsSettings.game.defaults.player.atlasData, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		for (var i = 0; i < etsSettings.game.levels.length; i++) {
			this.load.tilemap(etsSettings.game.levels[i].tileMap.key, etsSettings.game.levels[i].tileMap.file, null,  etsSettings.game.levels[i].tileMap.type);
		};
		this.load.image(etsSettings.game.defaults.tiles.key, etsSettings.game.defaults.tiles.file);
		//this.load.tilemap('test1', 'images/test1.json', null, Phaser.Tilemap.TILED_JSON);
		//this.load.image('gameTiles', 'images/tiles.png');

		this.load.audiosprite(etsSettings.voiceover.key, etsSettings.voiceover.urls, null, etsSettings.voiceover.data);
		this.load.audiosprite(etsSettings.soundEffects.key, etsSettings.soundEffects.urls, null, etsSettings.soundEffects.data);
	},

	addLoader: function(){
		this.add.sprite(etsSettings.loader.background.x, etsSettings.loader.background.y, etsSettings.loader.background.key);

		this.rotator = this.add.sprite(etsSettings.loader.rotator.x, etsSettings.loader.rotator.y, etsSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: etsSettings.loader.label.font, 
		 	fill: etsSettings.loader.label.fill, 
		 	fontSize: etsSettings.loader.label.size,
		 	align: "center"
		};
		var loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - etsSettings.loader.label.padding, 
			                           etsSettings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 1;
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += etsSettings.loader.rotator.speed;
		}
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += etsSettings.loader.rotator.speed;
		}
	},

	create: function(){
		//console.log("assets loaded");
		EscapeTheSituation.voSprite = this.add.audioSprite(etsSettings.voiceover.key);
		EscapeTheSituation.sfxSprite = this.add.audioSprite(etsSettings.soundEffects.key);
		this.sound.setDecodedCallback([etsSettings.voiceover.key], this.loadedAndDecoded, this);
	},

	loadedAndDecoded: function(){
		//console.log("audio decoded");
		this.state.start('splash');
		//EscapeTheSituation.gameState.currentLevel = 2;
		//this.state.start('levelLoader');
	},

	shutdown: function(){
		this.rotator.destroy();
	}

};