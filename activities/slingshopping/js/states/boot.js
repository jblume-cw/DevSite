var Slingshopping = {
	soundSprite: null,
	clickthroughGroup: null,
	lastDragDistance: null,
	level: null,
	score: null,
	foodPool: null,

	addText: function(data, context){
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

		var text = context.add.text(data.x, data.y, data.text, style);
		text.anchor = data.anchor;
		text.lineSpacing = data.lineSpacing;

		return text;
	},

	addImage: function(data, context){
		var image = context.add.image(data.x, data.y, data.texture, data.key);
		if(data.anchor){
			image.anchor = data.anchor;
		}
		if(data.hitArea){
			image.hitArea = new Phaser.Rectangle(data.hitArea.x, data.hitArea.y, data.hitArea.width, data.hitArea.height);
			//image.hitArea = new Phaser.Polygon(data.hitArea);
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
			//sprite.hitArea = new Phaser.Polygon(data.hitArea);
		}

		return sprite;
	},

	addButton: function(data, callback, context){
		var button = context.add.button(data.x, data.y, data.texture, callback, context, data.overKey, data.outKey, data.downKey, data.upKey);
		if(button.anchor){
			button.anchor = data.anchor;
		}

		return button;
	},

	resizePocket: function(pocket, projectile, context){
		if(pocket != null){
			pocket.width = settings.slingshot.pocket.scaleToFood * projectile.width;
			Slingshopping.drawStraps(context);
		}
	},

	drawStraps: function(context){
		if(context.leftStrap != null){
			context.leftStrap.clear();
		}
		if(context.rightStrap != null){
			context.rightStrap.clear();
		}

		context.leftStrap = context.add.graphics(settings.slingshot.leftStrap.x, settings.slingshot.leftStrap.y);
		context.leftStrap.lineStyle(settings.slingshot.leftStrap.stroke, settings.slingshot.leftStrap.color, 1);
		context.leftStrap.lineTo(context.slingshotPocket.x  - (context.slingshotPocket.width / 2) - settings.slingshot.leftStrap.x + settings.slingshot.leftStrap.pocketOverlap, context.slingshotPocket.y - settings.slingshot.leftStrap.y);
		context.rightStrap = context.add.graphics(settings.slingshot.rightStrap.x, settings.slingshot.rightStrap.y);
		context.rightStrap.lineStyle(settings.slingshot.rightStrap.stroke, settings.slingshot.rightStrap.color, 1);
		context.rightStrap.lineTo(-(settings.slingshot.rightStrap.x - context.slingshotPocket.x  - (context.slingshotPocket.width / 2)) + settings.slingshot.rightStrap.pocketOverlap, context.slingshotPocket.y - settings.slingshot.rightStrap.y);
	},

	aim: function(slingshotPocket, projectile, crosshairs, context){
		slingshotPocket.x = projectile.x;
		slingshotPocket.y = projectile.y;
		Slingshopping.drawStraps(context);

		var vChange = projectile.y - settings.slingshot.foodStart.y;
		var hChange = projectile.x - settings.slingshot.foodStart.x;

		crosshairs.x = settings.slingshot.foodStart.x - (hChange * settings.slingshot.aim.horizontalMultiplier);
		crosshairs.y = settings.slingshot.foodStart.y - (vChange * settings.slingshot.aim.verticalMultiplier);

		var maxVChange = settings.slingshot.dragRect.y + settings.slingshot.dragRect.height - settings.slingshot.foodStart.y - (projectile.height / 2);
		var throwPower = vChange / maxVChange;
		crosshairs.scale.x = crosshairs.scale.y = 1 - (settings.slingshot.crosshairs.minimumScale * throwPower);

		return throwPower;
	},

	playStretchSound: function(projectile, context){
		var currentDragDistance = Slingshopping.getHypotenuse({ x: settings.slingshot.foodStart.x, y: settings.slingshot.foodStart.y }, projectile.position);
		var change = currentDragDistance - Slingshopping.lastDragDistance;
		if(change < 0.01){
			Slingshopping.soundSprite.stop(settings.slingshot.stretchSoundKey);
		}else{
			var sound = Slingshopping.soundSprite.get(settings.slingshot.stretchSoundKey);
			if(!sound.isPlaying){
				Slingshopping.soundSprite.play(settings.slingshot.stretchSoundKey);
			}
		}
		Slingshopping.lastDragDistance = currentDragDistance;
	},

	getHypotenuse: function(pointA, pointB){
		var dx = Math.abs(pointB.x - pointA.x);
		var dy = Math.abs(pointB.y - pointA.y);
		return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
	},

	throw: function(projectile, power, slingshotPocket, crosshairs, hitCheck, context){
		projectile.input.disableDrag();

		var minFlightTime = settings.slingshot.throw.minFlightTime;
		var maxFlightTime = settings.slingshot.throw.maxFlightTime;
		var duration = minFlightTime + ((maxFlightTime - minFlightTime) * power);

		var pocketTween = context.add.tween(slingshotPocket).to({ x: settings.slingshot.pocket.x, y: settings.slingshot.pocket.y }, duration * settings.slingshot.throw.pocketDurationScale, Phaser.Easing.Elastic.Out, true);
		pocketTween.onUpdateCallback(function() { Slingshopping.drawStraps(context); }, context);

		var arcPoint = { 
			x: settings.slingshot.foodStart.x + (settings.slingshot.throw.arcPointXFactor * (crosshairs.x - settings.slingshot.foodStart.x)), 
			y: crosshairs.y - (settings.slingshot.throw.arcPointYFactor * power)
		};
		var rotation = settings.slingshot.throw.minRotation + (Math.random() * (settings.slingshot.throw.maxRotation - settings.slingshot.throw.minRotation));
		context.add.tween(projectile.scale).to({ x: crosshairs.scale.x, y: crosshairs.scale.y }, duration, Phaser.Easing.Sinusoidal.In, true);
		context.add.tween(projectile).to({ rotation: rotation }, duration, Phaser.Easing.Sinusoidal.In, true);
		var appleTravelTween = context.add.tween(projectile).to({ x: [arcPoint.x, crosshairs.x], y: [arcPoint.y, crosshairs.y] }, duration, Phaser.Easing.Sinusoidal.Out, true);
		appleTravelTween.interpolation(Phaser.Math.bezierInterpolation);
		appleTravelTween.onComplete.add(hitCheck, context);

		crosshairs.x = settings.slingshot.crosshairs.x;
		crosshairs.y = settings.slingshot.crosshairs.y;

		Slingshopping.soundSprite.play(settings.slingshot.throwSoundKey);
	}
};

Slingshopping.boot = function(game){
	this.clickthroughGroup = null;
};

Slingshopping.boot.prototype = {
	
	init: function(){
		this.stage.backgroundColor = settings.backgroundColor;
		Slingshopping.level = 0;
		Slingshopping.score = 0;
		Slingshopping.foodPool = [];

		if(settings.autoScale){
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	        window.addEventListener("resize", this.onResize.bind(this));
	        this.onResize();
		}
	},

	preload: function(){
		this.load.image(settings.loader.rotator.key, settings.loader.rotator.file);
		for (var i = 0; i < settings.loader.backgroundElements.length; i++) {
			this.load.image(settings.loader.backgroundElements[i].key, settings.loader.backgroundElements[i].file);
		}
	},

	create: function(){
		var canContinue = true;
		if(settings.scormEnabled){
			var canContinue = SCORM_API_adapter.lmsInitialize();
		}
		if(canContinue){
			if(this.game.device.iOS){
				this.addClickthrough();
			}else{
				this.moveOn();
			}
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

	addClickthrough: function(){
		this.clickthroughGroup = this.add.group();

		for (var i = 0; i < settings.loader.backgroundElements.length; i++) {
			this.clickthroughGroup.add(this.add.sprite(settings.loader.backgroundElements[i].x, settings.loader.backgroundElements[i].y, settings.loader.backgroundElements[i].key));
		}

    	var messageStyle = { 
		 	font: settings.loader.label.font, 
		 	fill: settings.loader.label.fill, 
		 	fontSize: settings.loader.label.size,
		 	align: "center"
		};
		var messageText = this.add.text(settings.loader.label.x, 
									    settings.loader.label.y, 
			                            settings.loader.label.clickthroughText, messageStyle);
		messageText.anchor.x = 0.5;
		messageText.anchor.y = 0;

		this.clickthroughGroup.add(messageText);

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