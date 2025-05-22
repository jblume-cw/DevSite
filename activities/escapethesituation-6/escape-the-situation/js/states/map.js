EscapeTheSituation.map = function(game){
	this.background = null;
	this.selectors = null;
};

EscapeTheSituation.map.prototype = {
	
	init: function(){
	},

	preload: function(){
	},

	create: function(){
		this.background = this.add.sprite(etsSettings.map.background.x, etsSettings.map.background.y, etsSettings.map.background.key);

		this.selectors = [];
		for (var i = 0; i < etsSettings.map.levels.identifiers.length; i++) {
			var selectorGroup = this.add.group();

			var button = this.add.button(etsSettings.map.levels.identifiers[i].x, 
				                         etsSettings.map.levels.identifiers[i].y, 
				                         etsSettings.textureKey, 
				                         null, 
				                         this, 
				                         etsSettings.map.levels.button.overKey, 
				                         etsSettings.map.levels.button.outKey, 
				                         etsSettings.map.levels.button.downKey, 
				                         etsSettings.map.levels.button.upKey);
			button.onInputUp.addOnce(this.beginLevel, this, 0, i);

			var icon = this.add.sprite(button.x + etsSettings.map.levels.identifiers[i].icon.x, 
				                       button.y + etsSettings.map.levels.identifiers[i].icon.y, 
				                       etsSettings.textureKey,
				                       etsSettings.map.levels.identifiers[i].icon.key);
			var stars = [];
			for (var j = 0; j < etsSettings.map.levels.stars.positions.length; j++) {
				var starKey = null;
				if(EscapeTheSituation.gameState.progress[i] > j){
					starKey = etsSettings.map.levels.stars.fullKey
				}else{
					starKey = etsSettings.map.levels.stars.emptyKey
				}
				var star = this.add.sprite(button.x + etsSettings.map.levels.stars.positions[j].x, 
				                           button.y + etsSettings.map.levels.stars.positions[j].y, 
				                           etsSettings.textureKey,
				                           starKey);
				stars.push(star);
			};

			var labelStyle = { 
			 	font: etsSettings.map.levels.label.font, 
			 	fill: etsSettings.map.levels.label.fill, 
			 	fontSize: etsSettings.map.levels.label.size,
			 	align: "center"
			};
			var labelText = this.add.text(button.x + etsSettings.map.levels.label.x, 
										  button.y + etsSettings.map.levels.label.y, 
				                          etsSettings.map.levels.identifiers[i].label, 
				                          labelStyle);
			labelText.anchor.x = 0.5;
			labelText.anchor.y = 0;

			selectorGroup.add(button);
			selectorGroup.add(icon);
			for (var k = 0; k < stars.length; k++) {
				selectorGroup.add(stars[k]);
			};
			selectorGroup.add(labelText);
			this.selectors.push(selectorGroup);
		};

		this.updateSelectorStates();
	},

	updateSelectorStates: function(){
		var firstZero = null;
		for (var i = 0; i < EscapeTheSituation.gameState.progress.length; i++) {
			if(EscapeTheSituation.gameState.progress[i] == 0){
				if(firstZero == null){
					firstZero = i;
				}else{
					this.disableSelector(i);
				}
			}
		};
	},

	disableSelector: function(index){
		//this.selectors[index].inputEnabled = false;
		this.selectors[index].forEach(function(sel){ sel.inputEnabled = false }, this);
		this.selectors[index].alpha = 0.75;
	},

	beginLevel: function(button, arg1, arg2, index){
		EscapeTheSituation.sfxSprite.play(etsSettings.map.selectSound);
		EscapeTheSituation.gameState.currentLevel = index;
		this.state.start('levelLoader');
	},

	shutdown: function(){
		this.background.destroy();
		for (var i = 0; i < this.selectors.length; i++) {
			this.selectors[i].destroy();
		};
	}

};