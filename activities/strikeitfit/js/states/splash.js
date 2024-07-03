StrikeItFit.splash = function(game){
};

StrikeItFit.splash.prototype = {
	
	init: function(){
	},

	preload: function(){
	},

	update: function(){
	},

	create: function(){

		for (var i = 0; i < settings.splash.backgroundElements.length; i++) {
			this.add.image(settings.splash.backgroundElements[i].x, settings.splash.backgroundElements[i].y, settings.splash.backgroundElements[i].texture, settings.splash.backgroundElements[i].key);
		}

		var button = this.add.button(settings.splash.beginButton.x, 
									 settings.splash.beginButton.y, 
									 settings.splash.beginButton.texture, 
									 this.onBegin, 
									 this, 
									 settings.splash.beginButton.overKey, 
							         settings.splash.beginButton.outKey, 
									 settings.splash.beginButton.downKey, 
									 settings.splash.beginButton.upKey);

		StrikeItFit.soundSprite.play(settings.splash.splashAudioKey);

		//if(StrikeItFit.ambientSound == null){
			StrikeItFit.ambientSound = StrikeItFit.soundSprite.play(settings.instructions.ambientSound.key, settings.instructions.ambientSound.volume);
		/*}else{
			if(!StrikeItFit.ambientSound.isPlaying){
				StrikeItFit.ambientSound.play();
			}
		}*/
		
	},

	onBegin: function(){
		this.state.start("instructions");
	},

	shutdown: function(){
	}

};