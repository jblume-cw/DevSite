StampOut.spinner = function(game){
	this.pointer = null;
	this.arrowShadow = null;
	this.spinButton = null;
	this.wheelSection = null;
	this.wheelSectionHighlight = null;
	this.lastAngle = null;
	this.cheatKeys = null;
};

StampOut.spinner.prototype = {
	
	init: function(){
		this.wheelSection = [];
		this.wheelSectionHighlight = [];
		this.cheatKeys = [this.input.keyboard.addKey(Phaser.Keyboard.ZERO), this.input.keyboard.addKey(Phaser.Keyboard.ONE), this.input.keyboard.addKey(Phaser.Keyboard.TWO), this.input.keyboard.addKey(Phaser.Keyboard.THREE), this.input.keyboard.addKey(Phaser.Keyboard.FOUR), this.input.keyboard.addKey(Phaser.Keyboard.FIVE)];
		StampOut.saveState();
	},

	create: function(){
		this.addSpinner();
		this.addPowerUpIndicators();
		this.addCategoryIndicators();
		this.addStreakMeter();

		this.enableSpin();
	},

	addSpinner: function(){
		this.add.sprite(stampOutSettings.spinner.background.x, stampOutSettings.spinner.background.y, 'texture', stampOutSettings.spinner.background.key);
		this.spinButton = this.add.button(stampOutSettings.spinner.wheel.x, stampOutSettings.spinner.wheel.y, 'texture', this.spin, this, stampOutSettings.spinner.wheel.overKey, stampOutSettings.spinner.wheel.outKey, stampOutSettings.spinner.wheel.downKey,stampOutSettings.spinner.wheel.upKey);

		for (var i = 0; i < stampOutSettings.spinner.section.length; i++){
			var section = this.add.sprite(stampOutSettings.spinner.section[i].x, stampOutSettings.spinner.section[i].y, 'texture', stampOutSettings.spinner.section[i].key);
			this.wheelSection.push(section);

			var sectionHighlight = this.add.sprite(stampOutSettings.spinner.section[i].x, stampOutSettings.spinner.section[i].y, 'texture', stampOutSettings.spinner.section[i].highlightKey);
			sectionHighlight.visible = false;
			this.wheelSectionHighlight.push(sectionHighlight);
		};

		this.arrowShadow = this.add.sprite(stampOutSettings.spinner.pointerShadow.x, stampOutSettings.spinner.pointerShadow.y, 'texture', stampOutSettings.spinner.pointerShadow.key);
		this.arrowShadow.pivot.x = stampOutSettings.spinner.pointerShadow.pivotX;
		this.arrowShadow.pivot.y = stampOutSettings.spinner.pointerShadow.pivotY;
		this.pointer = this.add.sprite(stampOutSettings.spinner.pointer.x, stampOutSettings.spinner.pointer.y, 'texture', stampOutSettings.spinner.pointer.key);
		this.pointer.pivot.x = stampOutSettings.spinner.pointer.pivotX;
		this.pointer.pivot.y = stampOutSettings.spinner.pointer.pivotY;

		if(this.lastAngle != null){
			this.pointer.angle = this.lastAngle;
			this.arrowShadow.angle = this.lastAngle;
		}
	},

	addPowerUpIndicators: function(){
		for (var i = 0; i < stampOutSettings.powerUp.length; i++) {
			var puKey;
			if(StampOut.powerUpStatus[i] == 0){
				puKey = stampOutSettings.powerUp[i].indicatorActiveKey;
			}else{
				puKey = stampOutSettings.powerUp[i].indicatorInactiveKey;
			}
			this.add.sprite(stampOutSettings.powerUp[i].indicatorX, stampOutSettings.powerUp[i].indicatorY, 'texture', puKey);
		};
	},

	addCategoryIndicators: function(){
		for (var i = 0; i < stampOutSettings.category.length; i++){
			//if(stampOutSettings.category[i].id != "stamp"){
				if(StampOut.categoryStatus[i] == 1){
					this.add.sprite(stampOutSettings.category[i].spinIndicatorStampedX, stampOutSettings.category[i].spinIndicatorStampedY, 'texture', stampOutSettings.category[i].spinIndicatorStampedKey);
				}else{
					this.add.sprite(stampOutSettings.category[i].spinIndicatorX, stampOutSettings.category[i].spinIndicatorY, 'texture', stampOutSettings.category[i].spinIndicatorKey);
				}
			//}
		};
	},

	addStreakMeter: function(){
		this.add.sprite(stampOutSettings.streak[StampOut.currentStreak].x, stampOutSettings.streak[StampOut.currentStreak].y, 'texture', stampOutSettings.streak[StampOut.currentStreak].key);
	},

	enableSpin: function(){
		this.spinButton.inputEnabled = true;
	},

	disableSpin: function(){
		this.spinButton.inputEnabled = false;
	},

	spin: function(){
		/*var cheatIndex = this.getCheatKeyDown();
		var randomAngle = stampOutSettings.spinner.completeSpins * 360;
		if(cheatIndex != -1){
			var sectionSize = 360 / stampOutSettings.spinner.section.length;
			randomAngle += (cheatIndex * sectionSize) + (sectionSize/2);
			//console.log("CHEAT TO " + cheatIndex);
		}else{

			randomAngle += (Math.random() * 360);
		}*/
		//var randomAngle = (stampOutSettings.spinner.completeSpins * 360) + (Math.random() * 360);
		//randomAngle = 360;

		var randomAngle = stampOutSettings.spinner.completeSpins * 360;
		var result = this.getSpinResult();
		//console.log("result: " + result);
		var sectionSize = 360 / stampOutSettings.spinner.section.length;
		randomAngle += (result * sectionSize) + (1 + (Math.random() * (sectionSize - 2))); // 1 degree padding on either edge

		var spinTween = this.add.tween(this.pointer).to( { angle: randomAngle }, stampOutSettings.spinner.spinDuration, Phaser.Easing.Cubic.Out, true);
		this.add.tween(this.arrowShadow).to( { angle: randomAngle }, stampOutSettings.spinner.spinDuration, Phaser.Easing.Cubic.Out, true);
		this.disableSpin();

		spinTween.onComplete.add(this.evaluateSpin, this);

		createjs.Sound.play(stampOutSettings.spinner.spinSfxKey);
		//StampOut.audioSprite.play(stampOutSettings.spinner.spinSfxKey);
	},

	getSpinResult: function(){
		var keyDown = this.getCheatKeyDown();
		if(keyDown != -1){
			return keyDown;
		}else{
			var resultPool = stampOutSettings.spinner.resultPool;
			var randomInd = Math.floor(Math.random() * resultPool.length);
			return resultPool[randomInd];
		}
	},

	evaluateSpin: function(){
		var angle = this.pointer.angle;
		if(angle < 0){
			angle = 360 + angle;
		}
		//console.log("angle: " + angle);
		var sectionIndex = 0;
		for (var i = 0; i < stampOutSettings.spinner.section.length; i++) {
			if(angle >= stampOutSettings.spinner.section[i].spinRange[0] && angle < stampOutSettings.spinner.section[i].spinRange[1]){
				sectionIndex = i;
				break;
			}
		};
		//console.log(stampOutSettings.spinner.section[sectionIndex].id);
		this.wheelSection[sectionIndex].visible = false;
		this.wheelSectionHighlight[sectionIndex].visible = true;

		if(stampOutSettings.spinner.section[sectionIndex].id != "stamp"){
			createjs.Sound.play(stampOutSettings.spinner.categoryHighlightSfxKey);
			//StampOut.audioSprite.play(stampOutSettings.spinner.categoryHighlightSfxKey);
		}else{
			createjs.Sound.play(stampOutSettings.spinner.stampHighlightSfxKey);
			//StampOut.audioSprite.play(stampOutSettings.spinner.stampHighlightSfxKey);
		}
		

		this.time.events.add(stampOutSettings.spinner.postSpinPause, this.goToQuestion, this, sectionIndex);
		this.lastAngle = angle;
	},

	getCheatKeyDown: function(){
		var cheatKeyDown = -1;
		
		for (var i = 0; i < this.cheatKeys.length; i++) {
			if(this.cheatKeys[i].isDown){
				cheatKeyDown = i;
				break;
			}
		};

		return cheatKeyDown;
	},

	cleanup: function(){
		this.pointer.destroy();
		this.pointer = null;
		this.arrowShadow.destroy();
		this.arrowShadow = null;
		this.spinButton.destroy();
		this.spinButton = null;
		for (var i = 0; i < this.wheelSection.length; i++) {
			this.wheelSection[i].destroy();
		};
		this.wheelSection = null;
		for (i = 0; i < this.wheelSectionHighlight.length; i++) {
			this.wheelSectionHighlight[i].destroy();
		};
		this.wheelSectionHighlight = null;
	},

	goToQuestion: function(sectionIndex){
		//console.log("categoryId " + stampOutSettings.spinner.section[sectionIndex].id);
		if(stampOutSettings.spinner.section[sectionIndex].id != "stamp"){
			var categoryId = stampOutSettings.spinner.section[sectionIndex].id;
			var categoryIndex = null;
			for (var i = 0; i < stampOutSettings.category.length; i++) {
				if(stampOutSettings.category[i].id == categoryId){
					categoryIndex = i;
					break;
				}
			};
			this.cleanup();
			this.state.start('question', true, false, categoryIndex, false);
			//this.state.start('question', true, false, 0);
		}else{
			this.cleanup();
			this.state.start('topicSelection');
			//this.state.start('question', true, false, 0);
		}
		
	}

};