DodgingRisks.preload = function(game){
	this.rotator = null;
}

DodgingRisks.preload.prototype = {
	init: function(){
	},
	preload: function(){ 
		this.addLoader();

		this.load.atlas(drSettings.spritesheet.key, drSettings.spritesheet.image, drSettings.spritesheet.data, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		
		this.game.load.bitmapFont('ds-digital', 'fonts/ds-digital.png', 'fonts/ds-digital.xml');

		this.load.audiosprite(drSettings.audio.key, drSettings.audio.urls, null, drSettings.audio.data);

	},

	addLoader: function(){
		this.add.sprite(drSettings.loader.background.x, drSettings.loader.background.y, drSettings.loader.background.key);

		this.rotator = this.add.sprite(drSettings.loader.rotator.x, drSettings.loader.rotator.y, drSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: drSettings.loader.label.font, 
		 	fill: drSettings.loader.label.fill, 
		 	fontSize: drSettings.loader.label.size,
		 	align: "center"
		};
		var loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - drSettings.loader.label.padding, 
			                           drSettings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 1;
	},

	loadUpdate: function(){
		if(this.rotator != null){
			this.rotator.angle += drSettings.loader.rotator.speed;
		}
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += drSettings.loader.rotator.speed;
		}
	},

  	create: function(){
  		DodgingRisks.audioSprite = this.add.audioSprite(drSettings.audio.key);
  		this.sound.setDecodedCallback([drSettings.audio.key], this.loadedAndDecoded, this);
	},

	loadedAndDecoded: function(){
		this.game.state.start("Splash");
	}
}