EscapeTheSituation.splash = function(game){};

EscapeTheSituation.splash.prototype = {
	
	init: function(){
	},

	preload: function(){
	},

	create: function(){
		this.add.sprite(etsSettings.splash.background.x, etsSettings.splash.background.y, etsSettings.splash.background.key);
		this.add.sprite(etsSettings.splash.logo.x, etsSettings.splash.logo.y, etsSettings.textureKey, etsSettings.splash.logo.key);
		this.add.button(etsSettings.splash.beginButton.x, etsSettings.splash.beginButton.y, etsSettings.textureKey, this.beginGame, this, etsSettings.splash.beginButton.overKey, etsSettings.splash.beginButton.outKey, etsSettings.splash.beginButton.downKey, etsSettings.splash.beginButton.upKey);

		EscapeTheSituation.sfxSprite.play(etsSettings.splash.soundStingerKey);
	},

	beginGame: function(){
		EscapeTheSituation.sfxSprite.stop();
		EscapeTheSituation.sfxSprite.play(etsSettings.splash.beginSound);
		this.state.start('map');
	}

};