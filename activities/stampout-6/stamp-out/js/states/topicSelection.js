StampOut.topicSelection = function(game){
	this.categoryButtons = null;
};

StampOut.topicSelection.prototype = {
	
	init: function(){
		this.categoryButtons = [];
		StampOut.saveState();
	},

	create: function(){
		this.add.sprite(0, 0, 'texture', stampOutSettings.topicSelectScreen.backgroundKey);
		var prompt = this.add.text(stampOutSettings.topicSelectScreen.prompt.x, stampOutSettings.topicSelectScreen.prompt.y, stampOutSettings.topicSelectScreen.prompt.text);
	    prompt.font = stampOutSettings.topicSelectScreen.prompt.font;
    	prompt.fontSize = stampOutSettings.topicSelectScreen.prompt.size;
		prompt.fill = stampOutSettings.topicSelectScreen.prompt.fill;
		prompt.wordWrapWidth = stampOutSettings.topicSelectScreen.prompt.width;
		prompt.wordWrap = true;
		prompt.align = stampOutSettings.topicSelectScreen.prompt.align;

		for (var i = 0; i < stampOutSettings.category.length; i++) {
			if(stampOutSettings.category[i].id != "stamp"){
				this.categoryButtons.push(this.add.button(stampOutSettings.category[i].selectionButton.x, 
				                stampOutSettings.category[i].selectionButton.y, 
				                'texture', 
				                this.selectCategory, 
				                this,
				                stampOutSettings.category[i].selectionButton.overKey, 
				                stampOutSettings.category[i].selectionButton.outKey, 
				                stampOutSettings.category[i].selectionButton.downKey, 
				                stampOutSettings.category[i].selectionButton.upKey));
				if(StampOut.categoryStatus[i] == 1){
					this.categoryButtons[i].visible = false;
				}
			}else{
				this.categoryButtons.push(null);
			}
		};

		createjs.Sound.play(stampOutSettings.topicSelectScreen.prompt.audioKey);
	},

	shutdown: function(){
		for (var i = 0; i < this.categoryButtons.length; i++) {
			this.categoryButtons[i].destroy();
		};
		this.categoryButtons = null;
		createjs.Sound.stop();
	},

	selectCategory: function(button){
		var index = this.categoryButtons.indexOf(button);

		this.state.start('question', true, false, index, true);
	}

}