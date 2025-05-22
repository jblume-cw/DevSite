StampOut.powerUpSelection = function(game){
	this.powerUpIndex = null;
};

StampOut.powerUpSelection.prototype = {
	
	init: function(powerUpIndex){
		this.powerUpIndex = powerUpIndex;
	},

	create: function(){
		this.add.sprite(0, 0, 'texture', stampOutSettings.powerUpSelectScreen.backgroundKey);

		this.add.sprite(stampOutSettings.powerUpSelectScreen.iconX, stampOutSettings.powerUpSelectScreen.iconY, 'texture', stampOutSettings.powerUp[this.powerUpIndex].iconKey);

		this.add.button(stampOutSettings.powerUpSelectScreen.useButton.x, stampOutSettings.powerUpSelectScreen.useButton.y, 'texture', this.handleUse, this, stampOutSettings.powerUpSelectScreen.useButton.downKey, stampOutSettings.powerUpSelectScreen.useButton.outKey, stampOutSettings.powerUpSelectScreen.useButton.overKey,stampOutSettings.powerUpSelectScreen.useButton.upKey);

		this.add.button(stampOutSettings.powerUpSelectScreen.cancelButton.x, stampOutSettings.powerUpSelectScreen.cancelButton.y, 'texture', this.handleCancel, this, stampOutSettings.powerUpSelectScreen.cancelButton.downKey, stampOutSettings.powerUpSelectScreen.cancelButton.outKey, stampOutSettings.powerUpSelectScreen.cancelButton.overKey,stampOutSettings.powerUpSelectScreen.cancelButton.upKey);

		var prompt = this.add.text(stampOutSettings.powerUpSelectScreen.prompt.x, stampOutSettings.powerUpSelectScreen.prompt.y, stampOutSettings.powerUp[this.powerUpIndex].description);
	    prompt.font = stampOutSettings.powerUpSelectScreen.prompt.font;
    	prompt.fontSize = stampOutSettings.powerUpSelectScreen.prompt.size;
		prompt.fill = stampOutSettings.powerUpSelectScreen.prompt.fill;
		prompt.wordWrapWidth = stampOutSettings.powerUpSelectScreen.prompt.width;
		prompt.wordWrap = true;
		prompt.align = stampOutSettings.powerUpSelectScreen.prompt.align;
		prompt.anchor.x = 0.5;
	},

	handleUse: function(){
		
	},

	handleCancel: function(){
		//this.state.start('question', true, false, categoryIndex, false);
	}

}