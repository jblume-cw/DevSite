AdCreator.splash = function(game){};

AdCreator.splash.prototype = {
	
	init: function(){
	},

	preload: function(){
	},

	create: function(){
		this.add.sprite(adSettings.splash.background.x, adSettings.splash.background.y, adSettings.splash.background.key);
		for (var i = 0; i < adSettings.splash.graphics.length; i++) {
			this.add.sprite(adSettings.splash.graphics[i].x, adSettings.splash.graphics[i].y, adSettings.interfaceTexture.key, adSettings.splash.graphics[i].key);
		};
		for (i = 0; i < adSettings.splash.text.length; i++) {
			var thisStyle = { 
			 	font: adSettings.splash.text[i].font, 
			 	fill: adSettings.splash.text[i].fill, 
			 	fontSize: adSettings.splash.text[i].size,
			 	wordWrap: true,
			 	wordWrapWidth: adSettings.splash.text[i].wordWrapWidth,
			 	align: "center"
			};
			var thisText = this.add.text(adSettings.splash.text[i].x, 
										    adSettings.splash.text[i].y, 
				                            adSettings.splash.text[i].message,
				                            thisStyle);
			thisText.anchor.x = 0.5;
			thisText.anchor.y = 0;
		}
		this.add.button(adSettings.splash.beginButton.x, adSettings.splash.beginButton.y, adSettings.interfaceTexture.key, this.beginGame, this, adSettings.splash.beginButton.overKey, adSettings.splash.beginButton.outKey, adSettings.splash.beginButton.downKey, adSettings.splash.beginButton.upKey);

		AdCreator.vo.play();
	},

	beginGame: function(){
		AdCreator.vo.stop();
		this.state.start('creator');
	}

};