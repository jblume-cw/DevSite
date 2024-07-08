Get60.splash = function(game){
};

Get60.splash.prototype = {
	
	init: function(){
	},

	create: function(){
		for (var i = 0; i < Get60Settings.splash.backgroundElements.length; i++) {
			Get60.addImage(Get60Settings.splash.backgroundElements[i], this);
		}
		if(Get60.instructionsCompleted){
			Get60.addButton(Get60Settings.splash.playButton, this.handlePlay, this);
		}
		Get60.addButton(Get60Settings.splash.instructionsButton, this.handleInstructions, this);

		/*this.loop = Get60.soundSprite.play(Get60Settings.splash.loop.key, Get60Settings.splash.loop.volume);
		this.loop.loop = true;*/
		//Get60.beginGameLoop();
		Get60.beginLoop(Get60Settings.splashLoop);
	},

	handlePlay: function(){
		/*this.loop.loop = false;
		this.loop.stop();*/
		Get60.markComplete();
		this.state.start('game');
	},

	handleInstructions: function(){
		//Get60.stopLoop();
		this.state.start('instructions', true, false, 0);
	}
}