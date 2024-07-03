StrikeItFit.instructions = function(game){
	this.vo = null;
};

StrikeItFit.instructions.prototype = {
	
	init: function(){
		StrikeItFit.score = [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null,null]];
		StrikeItFit.pinState = [true,true,true,true,true,true,true,true,true,true];
		StrikeItFit.position = [0,0];

		//StrikeItFit.score = [[10,null],[10,null],[10,null],[10,null],[10,null],[10,null],[10,null],[10,null],[10,null],[null,null,null]];
		//StrikeItFit.position = [9,0];
	},

	preload: function(){
	},

	update: function(){
	},

	create: function(){

		for (var i = 0; i < settings.instructions.backgroundElements.length; i++) {
			this.add.image(settings.instructions.backgroundElements[i].x, settings.instructions.backgroundElements[i].y, settings.instructions.backgroundElements[i].texture, settings.instructions.backgroundElements[i].key);
		}

		var headerStyle = { 
		 	font: settings.instructions.header.font, 
		 	fill: settings.instructions.header.fill, 
		 	fontSize: settings.instructions.header.size,
		 	align: "center"
		};
		var headerText = this.add.text(settings.instructions.header.x, 
			                      	   settings.instructions.header.y, 
			                           settings.instructions.header.text, headerStyle);
		headerText.anchor.x = 0.5;
		headerText.anchor.y = 0;

		var bodyStyle = { 
		 	font: settings.instructions.body.font, 
		 	fill: settings.instructions.body.fill, 
		 	fontSize: settings.instructions.body.size,
		 	align: "center"
		};
		var bodyText = this.add.text(settings.instructions.body.x, 
			                      	   settings.instructions.body.y, 
			                           settings.instructions.body.text, bodyStyle);
		bodyText.wordWrap = true;
		bodyText.wordWrapWidth = settings.instructions.body.wordWrapWidth;
		bodyText.anchor.x = 0.5;
		bodyText.anchor.y = 0;

		for (i = 0; i < settings.instructions.ballButtons.length; i++) {
			var button = this.add.button(settings.instructions.ballButtons[i].x, 
							settings.instructions.ballButtons[i].y, 
							settings.instructions.ballButtons[i].texture, 
							null, 
							this, 
							settings.instructions.ballButtons[i].overKey, 
							settings.instructions.ballButtons[i].outKey, 
							settings.instructions.ballButtons[i].downKey, 
							settings.instructions.ballButtons[i].upKey);
			button.onInputUp.add(this.chooseBall, this, 0, i);
			button.hitArea = new Phaser.Circle(button.width / 2, button.height / 2, settings.instructions.ballButtons[i].hitAreaDiameter);
		};

		for (i = 0; i < settings.instructions.foregroundElements.length; i++) {
			this.add.image(settings.instructions.foregroundElements[i].x, settings.instructions.foregroundElements[i].y, settings.instructions.foregroundElements[i].texture, settings.instructions.foregroundElements[i].key);
		}

		if(StrikeItFit.ambientSound == null){
			StrikeItFit.ambientSound = StrikeItFit.soundSprite.play(settings.instructions.ambientSound.key, settings.instructions.ambientSound.volume);
		}else{
			if(!StrikeItFit.ambientSound.isPlaying){
				StrikeItFit.ambientSound.play();
			}
		}

		this.vo = StrikeItFit.soundSprite.play(settings.instructions.voKey);
		
	},

	chooseBall: function(selector, arg1, arg2, ballIndex){
		StrikeItFit.ballIndex = ballIndex;
		this.vo.stop();
		this.state.start("initials");
	},

	shutdown: function(){
	}

};