StrikeItFit.initials = function(game){
	this.inputString = null;
	this.inputText = null;
};

StrikeItFit.initials.prototype = {
	
	init: function(){
		this.inputString = "";
	},

	preload: function(){
	},

	update: function(){
	},

	create: function(){

		for (var i = 0; i < settings.initials.backgroundElements.length; i++) {
			this.add.image(settings.initials.backgroundElements[i].x, settings.initials.backgroundElements[i].y, settings.initials.backgroundElements[i].texture, settings.initials.backgroundElements[i].key);
		}

		var promptStyle = { 
		 	font: settings.initials.prompt.font, 
		 	fill: settings.initials.prompt.fill, 
		 	fontSize: settings.initials.prompt.size,
		 	align: "center"
		};
		var promptText = this.add.text(settings.initials.prompt.x, 
			                      	   settings.initials.prompt.y, 
			                           settings.initials.prompt.text, promptStyle);
		promptText.anchor.x = 0.5;
		promptText.anchor.y = 0;

		var inputStyle = { 
		 	font: settings.initials.initialText.font, 
		 	fill: settings.initials.initialText.fill, 
		 	fontSize: settings.initials.initialText.size,
		 	fontWeight: settings.initials.initialText.fontWeight,
		 	align: "center"
		};
		this.inputText = this.add.text(settings.initials.initialText.x, 
			                      	   settings.initials.initialText.y, 
			                           "", inputStyle);
		this.inputText.anchor.x = 0.5;
		this.inputText.anchor.y = 0.5;
		if(StrikeItFit.playerInitials != null){
			this.inputText.text = StrikeItFit.playerInitials;
			this.inputString = StrikeItFit.playerInitials;
		}

		for (i = 0; i < settings.initials.keyboard.keys.length; i++) {
			var key = this.add.button(settings.initials.keyboard.keys[i].x,
				            settings.initials.keyboard.keys[i].y,
				            settings.initials.keyboard.keys[i].texture,
				            this.handleScreenKey,
				            this,
				            settings.initials.keyboard.keys[i].overKey,
				            settings.initials.keyboard.keys[i].outKey,
				            settings.initials.keyboard.keys[i].downKey,
				            settings.initials.keyboard.keys[i].upKey);
			key.data.value = settings.initials.keyboard.keys[i].value;
		}

		for (i = 0; i < settings.initials.foregroundElements.length; i++) {
			this.add.image(settings.initials.foregroundElements[i].x, settings.initials.foregroundElements[i].y, settings.initials.foregroundElements[i].texture, settings.initials.foregroundElements[i].key);
		}
		
		this.input.keyboard.callbackContext = this;
		this.input.keyboard.onUpCallback = this.catchKey;

		this.add.button(settings.initials.okButton.x, 
							settings.initials.okButton.y, 
							settings.initials.okButton.texture, 
							this.handleSubmit, 
							this, 
							settings.initials.okButton.overKey, 
							settings.initials.okButton.outKey, 
							settings.initials.okButton.downKey, 
							settings.initials.okButton.upKey);

		this.add.button(settings.initials.deleteButton.x, 
							settings.initials.deleteButton.y, 
							settings.initials.deleteButton.texture, 
							this.handleDelete, 
							this, 
							settings.initials.deleteButton.overKey, 
							settings.initials.deleteButton.outKey, 
							settings.initials.deleteButton.downKey, 
							settings.initials.deleteButton.upKey);
		
	},

	handleScreenKey: function(key){
		this.addLetter(key.data.value);
	},

	handleDelete: function(){
		this.deleteLetter();
	},

	catchKey: function(keyboardEvent){
		if(keyboardEvent.keyCode == 8){ //backspace
			this.deleteLetter();
		}
		if(keyboardEvent.keyCode >= 65 && keyboardEvent.keyCode <= 90){ //a-z
			var letter = keyboardEvent.key.toUpperCase();
			this.addLetter(letter);
		}
	},

	addLetter: function(letter){
		if(this.inputString.length < 3){
			this.inputString += letter;
		}
		this.inputText.text = this.inputString;
	},

	deleteLetter: function(){
		if(this.inputString.length > 0){
			this.inputString = this.inputString.substr(0, this.inputString.length - 1);
		}
		this.inputText.text = this.inputString;
	},

	handleSubmit: function(){
		StrikeItFit.playerInitials = this.inputString;
		this.state.start("question");
	},

	shutdown: function(){
	}

};