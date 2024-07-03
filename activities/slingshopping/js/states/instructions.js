Slingshopping.instructions = function(game){
	this.slingshotPocket = null;
	this.textCart = null;
	this.logo = null;
	this.apple = null;
	this.leftStrap = null;
	this.rightStrap = null;
	this.crosshairs = null;
	this.throwPower = null;
	this.targetCart = null;
	this.dragging = null;
	this.cartImage = null;
};

Slingshopping.instructions.prototype = {
	
	init: function(){
	},

	preload: function(){
	},

	update: function(){
		if(this.dragging){
			Slingshopping.playStretchSound(this.apple, this);
		}
	},

	create: function(){
		this.dragging = false;
		Slingshopping.lastDragDistance = 0;

		for (var i = 0; i < settings.instructions.backgroundElements.length; i++) {
			Slingshopping.addImage(settings.instructions.backgroundElements[i], this);
		}
		this.textCart = this.add.group();

		this.logo = Slingshopping.addImage(settings.instructions.logo, this);
		var cart = Slingshopping.addImage(settings.instructions.textCart, this);
		this.textCart.add(cart);

		var heading = Slingshopping.addText(settings.instructions.header, this);
		this.textCart.add(heading);
		var body = Slingshopping.addText(settings.instructions.body, this);
		this.textCart.add(body);

		this.targetCart = this.add.group();
		this.targetCart.x = settings.instructions.targetCart.x;
		this.targetCart.y = settings.instructions.targetCart.y;
		this.cartImage = Slingshopping.addImage({
					x: 0,
					y: 0,
					texture: settings.game.cart.texture,
					key: settings.game.cart.keyReversed,
					hitArea: settings.game.cart.hitAreaReversed
				}, this);
		this.cartImage.animations.add("hit", settings.game.cart.hitAnimationReversed.frames, settings.game.cart.hitAnimationReversed.rate);
		var typeImage = Slingshopping.addImage({
				x: settings.instructions.targetCart.typeDisplay.relativePosition.x,
				y: settings.instructions.targetCart.typeDisplay.relativePosition.y,
				texture: settings.instructions.targetCart.typeDisplay.texture,
				key: settings.instructions.targetCart.typeDisplay.key
			}, this);
		this.targetCart.add(this.cartImage);
		this.targetCart.add(typeImage);
		this.targetCart.scale.x = settings.instructions.targetCart.scale.x;
		this.targetCart.scale.y = settings.instructions.targetCart.scale.y;


		/*this.targetCart = Slingshopping.addSprite(settings.instructions.targetCart, this);
		this.targetCart.inputEnabled = true;
		this.targetCart.animations.add("hit", settings.instructions.targetCart.hitAnimation.frames, settings.instructions.targetCart.hitAnimation.rate);*/

		this.crosshairs = Slingshopping.addImage(settings.slingshot.crosshairs, this);
		Slingshopping.addImage(settings.slingshot.fork, this);
		this.addApple();
		
		this.slingshotPocket = Slingshopping.addImage(settings.slingshot.pocket, this);
		Slingshopping.resizePocket(this.slingshotPocket, this.apple, this);
		Slingshopping.drawStraps(this);

		for (i = 0; i < settings.instructions.foregroundElements.length; i++) {
			Slingshopping.addImage(settings.instructions.foregroundElements[i], this);
		}

		Slingshopping.soundSprite.play(settings.instructions.voKey);
	},

	addApple: function(){
		if(this.apple == null){
			this.apple = Slingshopping.addImage(settings.instructions.apple, this);
			this.apple.inputEnabled = true;
			this.apple.events.onDragStart.add(this.dragStart, this);
			this.apple.events.onDragUpdate.add(this.dragUpdate, this);
			this.apple.events.onDragStop.add(this.dragStop, this);
			this.apple.rotation = 0;
		}else{
			this.apple.x = settings.instructions.apple.x;
			this.apple.y = settings.instructions.apple.y;
			this.apple.scale = { x: 1, y: 1 };
			this.apple.rotation = 0;
		}
		
		this.apple.input.enableDrag(true, false, true, 255, new Phaser.Rectangle(settings.slingshot.dragRect.x, settings.slingshot.dragRect.y, settings.slingshot.dragRect.width, settings.slingshot.dragRect.height));
		Slingshopping.resizePocket(this.slingshotPocket, this.apple, this);
	},

	dragStart: function(){
		this.dragging = true;
	},

	dragUpdate: function(apple){
		this.throwPower = Slingshopping.aim(this.slingshotPocket, this.apple, this.crosshairs, this);
	},

	dragStop: function(){
		this.dragging = false;
		Slingshopping.throw(this.apple, this.throwPower, this.slingshotPocket, this.crosshairs, this.checkForHit, this);
	},

	checkForHit: function(){
		var area1 = new Phaser.Rectangle((this.targetCart.x * this.targetCart.scale.x) + this.cartImage.hitArea.x, (this.targetCart.y * this.targetCart.scale.y) + this.cartImage.hitArea.y, (this.cartImage.hitArea.width * this.targetCart.scale.x), (this.cartImage.hitArea.height * this.targetCart.scale.y));
		var area2 = this.apple.getBounds();
		if(Phaser.Rectangle.intersects(area1, area2)){
			this.onHit(this.cartImage);
			this.apple.destroy();
		}else{
			this.onMiss();
		}
	},

	onMiss: function(){
		this.addApple();
	},

	onHit: function(target){
		//target.animations.play("hit");
		this.cartImage.animations.play("hit");
		this.showScoreAnim();
		Slingshopping.soundSprite.play(settings.instructions.advanceAudioKey);
	},

	showScoreAnim: function(){
		var icon = Slingshopping.addImage(settings.instructions.hitIcon, this);
		icon.x = this.apple.x;
		icon.y = this.apple.y;

		this.add.tween(icon).to({ alpha: 0 }, 1000, Phaser.Easing.Cubic.In, true);
		var tween = this.add.tween(icon).to({ y: icon.y - 100 }, 1000, Phaser.Easing.Cubic.Out, true);
		tween.onComplete.add(function(){ 
			icon.destroy();
			this.animateOff();
		}, this);
	},

	animateOff: function(){
		Slingshopping.soundSprite.get(settings.instructions.voKey).stop();

		this.add.tween(this.targetCart).to({x: settings.instructions.targetCart.offPosition.x, y: settings.instructions.targetCart.offPosition.y }, settings.instructions.animateOffDuration, Phaser.Easing.Cubic.In, true);
		this.add.tween(this.textCart).to({ x: settings.instructions.textCart.animateOffDistance.x, y: settings.instructions.textCart.animateOffDistance.y }, settings.instructions.animateOffDuration, Phaser.Easing.Cubic.In, true);
		var logoTween = this.add.tween(this.logo).to({ x: settings.instructions.logo.offPosition.x, y: settings.instructions.logo.offPosition.y }, settings.instructions.animateOffDuration, Phaser.Easing.Cubic.In, true);
		logoTween.onComplete.add(this.moveOn, this);
	},

	moveOn: function(){
		this.state.start('levelIntro', true, false, "level");
	},

	shutdown: function(){
		this.slingshotPocket.destroy();
		this.textCart.destroy();
		this.logo.destroy();
		this.apple.destroy();
		this.leftStrap.destroy();
		this.rightStrap.destroy();
		this.crosshairs.destroy();
		this.targetCart.destroy();
	}

};