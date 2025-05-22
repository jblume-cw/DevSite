/*
Added to insert loader screen while level renders. Tilemap layer creation seems to freeze everything until complete.
Previous state does not clear until it is complete, when it is done at start of level. This state clears the 
map screen and places a loader on screen while freeze occurs.
*/

EscapeTheSituation.levelLoader = function(game){
	this.rotator = null;
};

EscapeTheSituation.levelLoader.prototype = {
	
	init: function(){
	},

	preload: function(){
	},

	create: function(){
		this.addLoader();
		this.state.start('level');
	},

	addLoader: function(){
		this.add.sprite(etsSettings.loader.background.x, etsSettings.loader.background.y, etsSettings.loader.background.key);

		this.rotator = this.add.sprite(etsSettings.loader.rotator.x, etsSettings.loader.rotator.y, etsSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;
		this.rotator.visible = false;

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

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += etsSettings.loader.rotator.speed;
		}
	}

}