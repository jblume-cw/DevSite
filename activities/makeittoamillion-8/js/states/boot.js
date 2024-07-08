var Millionaire = {
	soundSprite: null,
	questionNumber: null,
	questionPool: null,
	helpUsage: null,

	addText: function(data, context, overrideText, group){
		var style = { 
		 	font: data.font, 
		 	fill: data.fill, 
		 	fontSize: data.size,
		 	fontWeight: data.weight,
		 	align: data.align
		};

		if(data.wordWrapWidth > 0){
			style.wordWrap = true;
			style.wordWrapWidth = data.wordWrapWidth;
		};

		if(data.stroke){
			style.stroke = data.stroke;
			style.strokeThickness = data.strokeThickness;
		}

		var text = context.add.text(data.x, data.y, "", style);
		text.anchor = data.anchor;
		text.lineSpacing = data.lineSpacing;

		if(overrideText != null){
			text.text = overrideText;
		}else{
			text.text = data.text;
		}
		if(group != null){
			group.add(text);
		}
		
		return text;
	},

	addImage: function(data, context, group){
		var image = context.add.image(data.x, data.y, data.texture, data.key);
		if(data.anchor){
			image.anchor = data.anchor;
		}
		if(data.hitArea){
			image.hitArea = new Phaser.Rectangle(data.hitArea.x, data.hitArea.y, data.hitArea.width, data.hitArea.height);
		}
		if(data.scale){
			image.scale = data.scale;
		}
		if(group != null){
			group.add(image);
		}

		return image;
	},

	addSprite: function(data, context){
		var sprite = context.add.sprite(data.x, data.y, data.texture, data.key);
		if(data.anchor){
			sprite.anchor = data.anchor;
		}
		if(data.hitArea){
			sprite.hitArea = new Phaser.Rectangle(data.hitArea.x, data.hitArea.y, data.hitArea.width, data.hitArea.height);
		}

		return sprite;
	},

	addButton: function(data, callback, context, group){
		var button = context.add.button(data.x, data.y, data.texture, callback, context, data.overKey, data.outKey, data.downKey, data.upKey);
		if(button.anchor){
			button.anchor = data.anchor;
		}
		if(data.hitArea){
			switch(data.hitArea.type){
				case "ellipse":
					button.hitArea = new Phaser.Ellipse(data.hitArea.x, data.hitArea.y, data.hitArea.width, data.hitArea.height);
					break;
				case "polygon":
					button.hitArea = new Phaser.Polygon(data.hitArea.points);
					break;
				case "circle":
					button.hitArea = new Phaser.Circle(data.hitArea.x, data.hitArea.y, data.hitArea.diameter);
					break;
				case "rectangle":
					button.hitArea = new Phaser.Rectangle(data.hitArea.x, data.hitArea.y, data.hitArea.width, data.hitArea.height);
					break;
			}
		}

		if(group != null){
			group.add(button);
		}

		return button;
	},

	addRect: function(data, context, group){
		var graphics = context.add.graphics(data.x, data.y);
		graphics.beginFill(data.fill, data.alpha);
		graphics.drawRect(0, 0, data.width, data.height);

		if(group != null){
			group.add(graphics);
		}

		return graphics;
	},

	translateStyle: function(data){
		var style = { 
		 	font: data.font, 
		 	fill: data.fill, 
		 	fontSize: data.size,
		 	fontWeight: data.weight,
		 	align: data.align
		};

		if(data.wordWrapWidth > 0){
			style.wordWrap = true;
			style.wordWrapWidth = data.wordWrapWidth;
		};

		return style;
	}

};

Millionaire.boot = function(game){
	this.clickthroughGroup = null;
};

Millionaire.boot.prototype = {
	
	init: function(){
		Millionaire.questionPool = [];

		this.stage.backgroundColor = MillionaireSettings.backgroundColor;

		if(MillionaireSettings.autoScale){
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	        window.addEventListener("resize", this.onResize.bind(this));
	        this.onResize();
		}
	},

	preload: function(){
		this.load.image(MillionaireSettings.loader.rotator.key, MillionaireSettings.loader.rotator.file);
		for (var i = 0; i < MillionaireSettings.loader.backgroundElements.length; i++) {
			this.load.image(MillionaireSettings.loader.backgroundElements[i].key, MillionaireSettings.loader.backgroundElements[i].file);
		}
	},

	create: function(){
		var canContinue = true;
		if(MillionaireSettings.scormEnabled){
			var canContinue = SCORM_API_adapter.lmsInitialize();
		}
		if(canContinue){
			this.addClickthrough();
		}else{
			alert("Unable to initialize SCORM API. Re-start course to try again.");
		}
	},
	
    /**
     * Scales the gameContainer so that it does not exceed the inner browser width or height
     */
    onResize: function(){
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;
        var gameContainer = document.querySelector("canvas");
        var boxRatio = this.game.world.width / this.game.world.height;
        if(windowRatio < boxRatio){
            gameContainer.style.width = windowWidth + "px";
            gameContainer.style.height = (windowWidth / boxRatio) + "px";
        }else{
            gameContainer.style.width = (windowHeight * boxRatio) + "px";
            gameContainer.style.height = windowHeight + "px";
        }
    },

	getInstructionsStatus: function(){
		if(MillionaireSettings.scormEnabled){
			var suspendData = SCORM_API_adapter.getSuspendData();
			if(suspendData == "1"){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	},

	addClickthrough: function(){
		this.clickthroughGroup = this.add.group();

		for (var i = 0; i < MillionaireSettings.loader.backgroundElements.length; i++) {
			this.clickthroughGroup.add(this.add.sprite(MillionaireSettings.loader.backgroundElements[i].x, MillionaireSettings.loader.backgroundElements[i].y, MillionaireSettings.loader.backgroundElements[i].key));
		}

		var clickthroughText = Millionaire.addText(MillionaireSettings.loader.clickthroughText, this);
		this.clickthroughGroup.add(clickthroughText);

		this.input.onTap.add(this.handleClickthrough, this);
	},

	handleClickthrough: function(){
		this.clickthroughGroup.destroy();
		this.moveOn();
	},

	moveOn: function(){
		this.state.start('preloader');
	}

};