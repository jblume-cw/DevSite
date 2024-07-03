Slingshopping.game = function(game){
	this.leftStrap = null;
	this.rightStrap = null;
	this.slingshotPocket = null;
	this.crosshairs = null;
	this.healthMeterBar = null;
	this.carts = null;
	this.foodLabel = null;
	this.currentFood = null;
	this.dragging = null;
	this.throwPower = null;
	this.scoreText = null;
	this.levelScore = null;
	this.clockTimer = null;
	this.clock = null;
	this.secondsElapsed = null;
	this.levelEnded = null;
	this.throwInProgress = null;
};

Slingshopping.game.prototype = {
	
	init: function(){
		if(settings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
	},

	preload: function(){
	},

	update: function(){
		if(this.dragging){
			Slingshopping.playStretchSound(this.currentFood, this);
		}
		
	},

	create: function(){
		this.carts = [];
		this.levelScore = 0;
		this.levelEnded = false;
		this.throwInProgress = false;

		for (var i = 0; i < settings.game.backgroundElements.length; i++) {
			Slingshopping.addImage(settings.game.backgroundElements[i], this);
		}

		this.addCarts();

		this.crosshairs = Slingshopping.addImage(settings.slingshot.crosshairs, this);

		Slingshopping.addImage(settings.slingshot.fork, this);
		this.slingshotPocket = Slingshopping.addImage(settings.slingshot.pocket, this);
		Slingshopping.drawStraps(this);

		Slingshopping.addImage(settings.game.foodLabelBackground, this);
		this.foodLabel = Slingshopping.addText(settings.game.foodLabelText, this);

		this.scoreText = Slingshopping.addText(settings.game.score, this);
		this.scoreText.text = Slingshopping.score;
		this.clock = Slingshopping.addText(settings.game.time, this);
		this.clock.text = ":" + settings.game.levelData[Slingshopping.level].clock;

		this.healthMeterBar = this.add.graphics(settings.game.healthMeterBar.x, settings.game.healthMeterBar.y);
		this.healthMeterBar.beginFill(settings.game.healthMeterBar.color);
		this.healthMeterBar.drawRect(0, 0, settings.game.healthMeterBar.maxWidth, settings.game.healthMeterBar.height);
		this.healthMeterBar.endFill();
		this.healthMeterBar.scale.x = 0;

		this.animateCartsOn();
	},

	addCarts: function(){
		//var waitForAnimateOn = false;
		for (var i = 0; i < settings.game.levelData[Slingshopping.level].carts.length; i++) {
			var cartData = settings.game.levelData[Slingshopping.level].carts[i];
			var thisCart = {};

			var cartGroup = this.add.group();
			cartGroup.x = cartData.startPosition.x;
			cartGroup.y = cartData.startPosition.y;

			var cartImage = null;
			if(cartData.reversed){
				cartImage = Slingshopping.addImage({
					x: 0,
					y: 0,
					texture: settings.game.cart.texture,
					key: settings.game.cart.keyReversed,
					hitArea: settings.game.cart.hitAreaReversed
				}, this);
				cartImage.animations.add("hit", settings.game.cart.hitAnimationReversed.frames, settings.game.cart.hitAnimationReversed.rate);
			}else{
				cartImage = Slingshopping.addImage({
					x: 0,
					y: 0,
					texture: settings.game.cart.texture,
					key: settings.game.cart.key,
					hitArea: settings.game.cart.hitArea
				}, this);
				cartImage.animations.add("hit", settings.game.cart.hitAnimation.frames, settings.game.cart.hitAnimation.rate);
			}
			
			cartGroup.add(cartImage);
			var typeImage = Slingshopping.addImage({
				x: cartData.typeDisplay.relativePosition.x,
				y: cartData.typeDisplay.relativePosition.y,
				texture: cartData.typeDisplay.texture,
				key: cartData.typeDisplay.key
			}, this);
			cartGroup.add(typeImage);
			var valueImage = Slingshopping.addImage({
				x: cartData.valueDisplay.relativePosition.x,
				y: cartData.valueDisplay.relativePosition.y,
				texture: cartData.valueDisplay.texture,
				key: cartData.valueDisplay.key
			}, this);
			cartGroup.add(valueImage);

			cartGroup.scale.x = cartData.scale.x;
			cartGroup.scale.y = cartData.scale.y;

			/*if(cartData.motion.type == "still"){
				var tween = this.add.tween(cartGroup).to({ x: cartData.motion.animateOn.toPosition.x, y: cartData.motion.animateOn.toPosition.y }, cartData.motion.animateOn.duration, Phaser.Easing.Cubic.Out, true, cartData.motion.animateOn.delay);
				if(i == settings.game.levelData[Slingshopping.level].carts.length - 1){
					tween.onComplete.add(this.startLevel, this);
				}
				waitForAnimateOn = true;
			}else{
				if(cartData.motion.type == "moving"){
					this.time.events.add(cartData.motion.startDelay, this.moveCart, this, thisCart, cartData.motion);
				}
			}*/

			thisCart.group = cartGroup;
			thisCart.cartImage = cartImage;
			thisCart.type = cartData.type;
			thisCart.value = cartData.value;
			thisCart.index = i;

			this.carts.push(thisCart);
		}

		/*if(!waitForAnimateOn){
			this.startLevel();
		}*/
	},

	animateCartsOn: function(){
		var waitForAnimateOn = false;
		for (var i = 0; i < this.carts.length; i++) {
			var cartData = settings.game.levelData[Slingshopping.level].carts[i];
			if(cartData.motion.type == "still"){
				var tween = this.add.tween(this.carts[i].group).to({ x: cartData.motion.animateOn.toPosition.x, y: cartData.motion.animateOn.toPosition.y }, cartData.motion.animateOn.duration, Phaser.Easing.Cubic.Out, true, cartData.motion.animateOn.delay);
				if(i == settings.game.levelData[Slingshopping.level].carts.length - 1){
					tween.onComplete.add(this.startLevel, this);
				}
				waitForAnimateOn = true;
			}else{
				if(cartData.motion.type == "moving"){
					this.time.events.add(cartData.motion.startDelay, this.moveCart, this, this.carts[i], cartData.motion);
				}
			}
		}
		if(!waitForAnimateOn){
			this.startLevel();
		}
	},

	moveCart: function(cart, motionData){
		var tween = this.add.tween(cart.group).to({ x: motionData.endPosition.x, y: motionData.endPosition.y }, motionData.timeToCrossScreen, null, true, 0, -1);
		cart.motionTween = tween;
	},

	startLevel: function(){
		if(Slingshopping.foodPool.length == 0){
			this.resetFoodPool();
		}
		this.loadNewFood();
		this.startClock();
	},

	resetFoodPool: function(){
		Slingshopping.foodPool = [];
		for (var i = 0; i < settings.game.foods.length; i++) {
			Slingshopping.foodPool.push(i);
		}
	},

	startClock: function(){
		this.secondsElapsed = 0;
		//this.clockTimer = this.time.events.loop(Phaser.Timer.SECOND, this.updateClock, this);
		this.clockTimer = this.time.create(true);
		this.clockTimer.loop(1000, this.updateClock, this);
		this.clockTimer.start();
	},

	updateClock: function(){
		this.secondsElapsed++;
		var newTime = settings.game.levelData[Slingshopping.level].clock - this.secondsElapsed;
		if(newTime < 10){
			newTime = "0" + newTime;
			if(newTime < 6 && newTime > 0){
				Slingshopping.soundSprite.play(settings.game.clockWarningTick);
			}
		}
		this.clock.text = ":" + newTime;
		if(newTime == "00"){
			this.endLevel();
		}
	},

	stopClock: function(){
		this.clockTimer.stop();
	},

	loadNewFood: function(){
		if(Slingshopping.foodPool.length == 0){
			this.resetFoodPool();
		}
		var rand = Math.floor(Math.random() * Slingshopping.foodPool.length);
		var foodIndex = Slingshopping.foodPool.splice(rand, 1)[0];
		//var foodIndex = Slingshopping.foodPool.splice(0, 1)[0];
		//console.log(foodIndex + " | " + Slingshopping.foodPool);

		this.foodLabel.text = settings.game.foods[foodIndex].label;

		var foodObj = {
			x: settings.slingshot.foodStart.x,
			y: settings.slingshot.foodStart.y,
			texture: settings.game.foods[foodIndex].texture,
			key: settings.game.foods[foodIndex].key,
			anchor: { x: 0.5, y: 0.5 }
		}
		this.currentFood = Slingshopping.addImage(foodObj, this);
		this.currentFood.data.index = foodIndex;
		this.currentFood.data.type = settings.game.foods[foodIndex].type;
		this.world.setChildIndex(this.currentFood, this.world.getChildIndex(this.slingshotPocket));

		this.currentFood.inputEnabled = true;
		this.currentFood.events.onDragStart.add(this.dragStart, this);
		this.currentFood.events.onDragUpdate.add(this.dragUpdate, this);
		this.currentFood.events.onDragStop.add(this.dragStop, this);
		this.currentFood.input.enableDrag(true, false, true, 255, new Phaser.Rectangle(settings.slingshot.dragRect.x, settings.slingshot.dragRect.y, settings.slingshot.dragRect.width, settings.slingshot.dragRect.height));

		Slingshopping.resizePocket(this.slingshotPocket, this.currentFood, this);
	},

	dragStart: function(){
		this.dragging = true;
	},

	dragUpdate: function(){
		this.throwPower = Slingshopping.aim(this.slingshotPocket, this.currentFood, this.crosshairs, this);
	},

	dragStop: function(){
		this.dragging = false;
		Slingshopping.throw(this.currentFood, this.throwPower, this.slingshotPocket, this.crosshairs, this.checkForHit, this);
		//this.currentFood.data.inAir = true;
		this.throwInProgress = true;
	},

	checkForHit: function(){
		//this.currentFood.data.inAir = false;
		for (var i = 0; i < this.carts.length; i++) {
			var area1 = new Phaser.Rectangle(this.carts[i].group.x + (this.carts[i].cartImage.hitArea.x * this.carts[i].group.scale.x), this.carts[i].group.y + (this.carts[i].cartImage.hitArea.y * this.carts[i].group.scale.y), this.carts[i].cartImage.hitArea.width * this.carts[i].group.scale.x, this.carts[i].cartImage.hitArea.height * this.carts[i].group.scale.y);
			var area2 = this.currentFood.getBounds();
			if(Phaser.Rectangle.intersects(area1, area2)){
				this.handleHit(this.carts[i]);
				return;
			}
		}
		this.handleMiss();
	},

	handleMiss: function(){
		this.currentFood.destroy();
		this.throwInProgress = false;
		if(this.levelEnded){
			this.animateOff();
		}else{
			this.loadNewFood();
		}
		
	},

	handleHit: function(cart){
		if(cart.type == this.currentFood.data.type){
			this.showCorrectCartHit(cart);
		}else{
			this.showIncorrectCartHit();
		}
		this.currentFood.destroy();
		if(!this.levelEnded){
			this.loadNewFood();
		}
	},

	showCorrectCartHit: function(cart){
		cart.cartImage.animations.play("hit");
		var meterFilled = this.incrementScore(cart.value);
		if(meterFilled){
			this.showMeterFilledIcon(cart);
			Slingshopping.soundSprite.play(settings.game.meterFullSoundKey);
		}else{
			this.showScoreIcon(cart);
			Slingshopping.soundSprite.play(settings.game.correctSoundKey);
		}
	},

	incrementScore: function(value){
		Slingshopping.score += value;
		this.scoreText.text = Slingshopping.score;
		this.levelScore += value;

		var filledMeter = false;
		if(this.levelScore >= settings.game.levelData[Slingshopping.level].meterFullPoints && this.healthMeterBar.width < settings.game.healthMeterBar.maxWidth){
			filledMeter = true;
		}

		var pctToFull = this.levelScore / settings.game.levelData[Slingshopping.level].meterFullPoints;
		if(pctToFull >= 1){
			pctToFull = 1;
		}
		this.healthMeterBar.width = settings.game.healthMeterBar.maxWidth * pctToFull;

		return filledMeter;
	},

	showScoreIcon: function(cart){
		var icon = null;
		for (var i = 0; i < settings.game.scoreIcons.length; i++) {
			if(settings.game.scoreIcons[i].value == cart.value){
				icon = Slingshopping.addImage(settings.game.scoreIcons[i], this);
				break;
			}
		}

		icon.x = this.currentFood.x;
		icon.y = this.currentFood.y;

		this.add.tween(icon).to({ alpha: 0 }, 1000, Phaser.Easing.Cubic.In, true);
		var tween = this.add.tween(icon).to({ y: icon.y - 100 }, 1000, Phaser.Easing.Cubic.Out, true);
		tween.onComplete.add(function(){ 
			icon.destroy();
			this.throwInProgress = false;
			if(this.levelEnded){
				this.animateOff();
			}
		}, this);
	},

	showIncorrectCartHit: function(){
		this.showIncorrectIcon();
		Slingshopping.soundSprite.play(settings.game.incorrectSoundKey);
	},

	showIncorrectIcon: function(value){
		var icon = Slingshopping.addImage(settings.game.incorrectIcon, this);
		icon.x = this.currentFood.x;
		icon.y = this.currentFood.y;

		var tween = this.add.tween(icon).to({ alpha: 0 }, 1000, Phaser.Easing.Cubic.In, true);
		tween.onComplete.add(function(){ 
			icon.destroy();
			this.throwInProgress = false;
			if(this.levelEnded){
				this.animateOff();
			}
		}, this);
	},

	showMeterFilledIcon: function(value){
		var icon = Slingshopping.addImage(settings.game.meterFullIcon, this);
		icon.x = this.currentFood.x;
		icon.y = this.currentFood.y;

		this.add.tween(icon).to({ alpha: 0 }, 1000, Phaser.Easing.Cubic.In, true);
		var tween = this.add.tween(icon).to({ y: icon.y - 100 }, 1000, Phaser.Easing.Cubic.Out, true);
		tween.onComplete.add(function(){ 
			icon.destroy();
			this.throwInProgress = false;
			if(this.levelEnded){
				this.animateOff();
			}
		}, this);
	},

	endLevel: function(){
		this.stopClock();
		Slingshopping.soundSprite.play(settings.game.endLevelSoundKey);
		this.levelEnded = true;

		if(this.dragging){
			this.slingshotPocket.position = { x: settings.slingshot.pocket.x, y: settings.slingshot.pocket.y };
			Slingshopping.drawStraps(this);
			this.currentFood.destroy();
			this.crosshairs.destroy();
			this.animateOff();
		}else{
			//if(!this.currentFood.data.inAir){
			if(!this.throwInProgress){
				this.currentFood.destroy();
				this.animateOff();
			}
		}

	},

	animateOff: function(){
		if(this.currentFood != null){
			this.currentFood.destroy();
		}
		this.foodLabel.text = "";
		var longestAnimation = 0;
		for (var i = 0; i < this.carts.length; i++) {
			var cartData = settings.game.levelData[Slingshopping.level].carts[i];
			if(cartData.motion.type == "still"){
				var tween = this.add.tween(this.carts[i].group).to({ x: cartData.motion.animateOff.toPosition.x, y: cartData.motion.animateOff.toPosition.y }, cartData.motion.animateOff.duration, Phaser.Easing.Cubic.In, true, cartData.motion.animateOff.delay);
				if((cartData.motion.animateOff.duration + cartData.motion.animateOff.delay) > longestAnimation){
					longestAnimation = cartData.motion.animateOff.duration + cartData.motion.animateOff.delay;
				}
			}else{
				if(cartData.motion.type == "moving"){
					this.carts[i].motionTween.stop();
					this.add.tween(this.carts[i].group).to({ x: this.carts[i].group.x + cartData.motion.animateOff.distance.x, y: this.carts[i].group.y + cartData.motion.animateOff.distance.y }, cartData.motion.animateOff.duration, Phaser.Easing.Cubic.In, true);
					if(cartData.motion.animateOff.duration > longestAnimation){
						longestAnimation = cartData.motion.animateOff.duration;
					}
				}
			}
			
		}
		this.time.events.add(longestAnimation + 100, this.moveOn, this);
	},

	moveOn: function(){
		if(this.levelScore >= settings.game.levelData[Slingshopping.level].meterFullPoints){
			if(Slingshopping.level < settings.game.levelData.length - 1){
				Slingshopping.level++;
				this.state.start('levelIntro', true, false, "level");
			}else{
				this.state.start('levelIntro', true, false, "win");
			}
		}else{
			this.state.start('levelIntro', true, false, "lose");
		}
	},

	shutdown: function(){
		this.leftStrap.destroy();
		this.rightStrap.destroy();
		this.slingshotPocket.destroy();
		this.crosshairs.destroy();
		this.healthMeterBar.destroy();
		for (var i = 0; i < this.carts.length; i++) {
			this.carts[i].group.destroy();
			this.carts[i].group = null;
			this.carts[i].cartImage.destroy();
			this.carts[i].cartImage = null;
			this.carts[i] = null;
		}
		this.foodLabel.destroy();
		this.currentFood.destroy();
		this.scoreText.destroy();
		this.clockTimer.destroy();
		this.clock.destroy();
	}

}