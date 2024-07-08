var Get60 = {
	soundSprite: null,
	instructionsCompleted: null,
	loop: null,

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

		var text = context.add.text(data.x, data.y, data.text, style);
		text.anchor = data.anchor;
		text.lineSpacing = data.lineSpacing;

		if(overrideText != null){
			text.text = overrideText;
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
					button.hitArea = new Phaser.Ellipse(data.hitArea.data.x, data.hitArea.data.y, data.hitArea.data.width, data.hitArea.data.height);
					break;
				case "polygon":
					button.hitArea = new Phaser.Polygon(data.hitArea.data.points);
					break;
				case "circle":
					button.hitArea = new Phaser.Circle(data.hitArea.data.x, data.hitArea.data.y, data.hitArea.data.diameter);
					break;
				case "rectangle":
					button.hitArea = new Phaser.Rectangle(data.hitArea.data.x, data.hitArea.data.y, data.hitArea.data.width, data.hitArea.data.height);
					break;
			}
		}

		if(group != null){
			group.add(button);
		}

		return button;
	},

	addRect: function(data, context){
		var graphics = context.add.graphics(data.x, data.y);
		graphics.beginFill(data.fill, data.alpha);
		graphics.drawRect(0, 0, data.width, data.height);

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
	},

	beginLoop: function(loopData){
		if(Get60.loop != null){
			if(Get60.loop.currentMarker == loopData.key && Get60.loop.volume == loopData.volume){
				return;
			}else{
				Get60.stopLoop();
			}
		}
		Get60.loop = Get60.soundSprite.play(loopData.key, loopData.volume);
		Get60.loop.loop = true;
	},

	beginGameLoop: function(){
		if(Get60.loop != null){
			if(Get60.loop.currentMarker == Get60Settings.gameLoop.key){
				return;
			}else{
				Get60.stopLoop();
			}
		}
		Get60.loop = Get60.soundSprite.play(Get60Settings.gameLoop.key, Get60Settings.gameLoop.volume);
		Get60.loop.loop = true;
	},

	stopLoop: function(){
		Get60.loop.loop = false;
		Get60.loop.stop();
	},

	beginInstructionsLoop: function(){
		if(Get60.loop != null){
			if(Get60.loop.currentMarker == Get60Settings.instructionsLoop.key){
				return;
			}else{
				Get60.stopLoop();
			}
		}
		Get60.loop = Get60.soundSprite.play(Get60Settings.instructionsLoop.key, Get60Settings.instructionsLoop.volume);
		Get60.loop.loop = true;
	},

	markComplete: function(){
		if(Get60Settings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
	}

};

Get60.boot = function(game){
	this.clickthroughGroup = null;
	Get60.instructionsCompleted = this.getInstructionsStatus();
	Get60.instructionsCompleted = true;
};

Get60.boot.prototype = {
	
	init: function(){
		this.stage.backgroundColor = Get60Settings.backgroundColor;

		if(Get60Settings.autoScale){
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	        window.addEventListener("resize", this.onResize.bind(this));
	        this.onResize();
		}
	},

	preload: function(){
		this.load.image(Get60Settings.loader.rotator.key, Get60Settings.loader.rotator.file);
		for (var i = 0; i < Get60Settings.loader.backgroundElements.length; i++) {
			this.load.image(Get60Settings.loader.backgroundElements[i].key, Get60Settings.loader.backgroundElements[i].file);
		}
	},

	create: function(){
		var canContinue = true;
		if(Get60Settings.scormEnabled){
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
		if(Get60Settings.scormEnabled){
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

		for (var i = 0; i < Get60Settings.loader.backgroundElements.length; i++) {
			this.clickthroughGroup.add(this.add.sprite(Get60Settings.loader.backgroundElements[i].x, Get60Settings.loader.backgroundElements[i].y, Get60Settings.loader.backgroundElements[i].key));
		}

		var clickthroughText = Get60.addText(Get60Settings.loader.clickthroughText, this);
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