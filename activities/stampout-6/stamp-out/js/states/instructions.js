StampOut.instructions = function(game){
	this.wheelSection = null;
	this.wheelSectionHighlight = null;
	this.pointer = null;
	this.arrowShadow = null;
	this.currentStep = null;
	this.dialogGroup = null;
	this.loaderGroup = null;
	this.rotator = null;
};

StampOut.instructions.prototype = {
	
	init: function(){
		this.wheelSection = [];
		this.wheelSectionHighlight = [];
		this.currentStep = 0;
	},

	create: function(){
		var sounds = [stampOutSettings.audio.instructions];
		var loadResult = createjs.Sound.registerSounds(sounds, "audio/");
		if(loadResult[0] == true){
			this.startBuild();
		}else{
			createjs.Sound.on("fileload", this.audioLoaded, this, true);
			this.showLoader();
		}
	},

	showLoader: function(){
		this.loaderGroup = this.add.group();

		var background = this.add.graphics(0, 0);
		background.beginFill(stampOutSettings.loader.backgroundColor);
		background.drawRect(0, 0, this.world.width, this.world.height);
    	background.endFill();

		this.rotator = this.add.sprite(stampOutSettings.loader.rotator.x, stampOutSettings.loader.rotator.y, stampOutSettings.loader.rotator.key);
		this.rotator.anchor.x = this.rotator.anchor.y = 0.5;

		var loaderStyle = { 
		 	font: stampOutSettings.loader.label.font, 
		 	fill: stampOutSettings.loader.label.fill, 
		 	fontSize: stampOutSettings.loader.label.size,
		 	align: "center"
		};
		var loaderText = this.add.text(this.rotator.x, 
			                      	   this.rotator.y - (this.rotator.height/2) - stampOutSettings.loader.label.padding, 
			                           stampOutSettings.loader.label.loadingText, loaderStyle);
		loaderText.anchor.x = 0.5;
		loaderText.anchor.y = 1;

		this.loaderGroup.add(background);
		this.loaderGroup.add(this.rotator);
		this.loaderGroup.add(loaderText);
	},

	removeLoader: function(){
		this.loaderGroup.destroy();
	},

	audioLoaded: function(){
		this.removeLoader();
		this.startBuild();
	},

	update: function(){
		if(this.rotator != null){
			this.rotator.angle += stampOutSettings.loader.rotator.speed;
		}
	},

	startBuild: function(){
		this.addSpinner();
		this.addPowerUpIndicators();
		this.addCategoryIndicators();
		this.addStreakMeter();

		this.showCurrentStep();
	},

	addSpinner: function(){
		this.add.sprite(stampOutSettings.spinner.background.x, stampOutSettings.spinner.background.y, 'texture', stampOutSettings.spinner.background.key);
		this.add.sprite(stampOutSettings.spinner.wheel.x, stampOutSettings.spinner.wheel.y, 'texture', stampOutSettings.spinner.wheel.upKey);

		for (var i = 0; i < stampOutSettings.spinner.section.length; i++){
			this.wheelSection.push(this.add.sprite(stampOutSettings.spinner.section[i].x, stampOutSettings.spinner.section[i].y, 'texture', stampOutSettings.spinner.section[i].key));

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
	},

	addPowerUpIndicators: function(){
		for (var i = 0; i < stampOutSettings.powerUp.length; i++) {
			this.add.sprite(stampOutSettings.powerUp[i].indicatorX, stampOutSettings.powerUp[i].indicatorY, 'texture', stampOutSettings.powerUp[i].indicatorActiveKey);
		};
	},

	addCategoryIndicators: function(){
		for (var i = 0; i < stampOutSettings.category.length; i++){
			this.add.sprite(stampOutSettings.category[i].spinIndicatorX, stampOutSettings.category[i].spinIndicatorY, 'texture', stampOutSettings.category[i].spinIndicatorKey);
		};
	},

	addStreakMeter: function(){
		this.add.sprite(stampOutSettings.streak[0].x, stampOutSettings.streak[0].y, 'texture', stampOutSettings.streak[0].key);
	},

	showCurrentStep: function(){
		var top = this.add.sprite(stampOutSettings.instructions.steps[this.currentStep].dialogX, stampOutSettings.instructions.steps[this.currentStep].dialogY, 'texture', stampOutSettings.instructions.dialog.topKey);

		var text = this.add.text(top.x + stampOutSettings.instructions.textPadding, top.y + stampOutSettings.instructions.textPadding, stampOutSettings.instructions.steps[this.currentStep].text);
	    text.font = stampOutSettings.instructions.text.font;
    	text.fontSize = stampOutSettings.instructions.text.size;
		text.fill = stampOutSettings.instructions.text.fill;
		text.wordWrapWidth = top.width - stampOutSettings.instructions.textPadding - stampOutSettings.instructions.textPadding;
		text.wordWrap = true;

		var button = this.add.button(top.x + (top.width / 2), text.y + text.height + stampOutSettings.instructions.buttonPadding, 'texture', this.advance, this, stampOutSettings.instructions.steps[this.currentStep].buttonOverKey, stampOutSettings.instructions.steps[this.currentStep].buttonOutKey, stampOutSettings.instructions.steps[this.currentStep].buttonDownKey, stampOutSettings.instructions.steps[this.currentStep].buttonUpKey);
		button.anchor.x = 0.5;

		var bottom = this.add.sprite(top.x, button.y + button.height + stampOutSettings.instructions.textPadding, 'texture', stampOutSettings.instructions.dialog.bottomKey);
		bottom.anchor.y = 1;

		/*var backblock = this.add.graphics();
		backblock.beginFill(stampOutSettings.loader.backgroundColor);
		backblock.drawRect(top.left, top.bottom, top.width, bottom.top - top.bottom);
		backblock.endFill();*/

		var middles =[];
		var middle = this.add.sprite(top.x, top.y + top.height, 'texture', stampOutSettings.instructions.dialog.middleKey);
		middles.push(middle);
		var totalHeight = (bottom.y - bottom.height) - (top.y + top.height);
		var iterations = Math.round(totalHeight / middle.height);
		for (var i = 1; i < iterations; i++) {
			middles.push(this.add.sprite(top.x, middles[i-1].y + middles[i-1].height, 'texture', stampOutSettings.instructions.dialog.middleKey));
			//middles[i].smoothed = false;
		}
		bottom.y = middles[middles.length - 1].y + middles[middles.length - 1].height + bottom.height;

		//this.dialogGroup.add(backblock);
		this.dialogGroup = this.add.group();
		for (i = 0; i < middles.length; i++) {
			this.dialogGroup.add(middles[i]);
		};
		this.dialogGroup.add(top);
		this.dialogGroup.add(bottom);
		this.dialogGroup.add(text);
		this.dialogGroup.add(button);
		
		createjs.Sound.play(stampOutSettings.instructions.steps[this.currentStep].audioKey);
		//StampOut.audioSprite.play(stampOutSettings.instructions.steps[this.currentStep].audioKey);
		
		this.showStepModification();
	},

	showStepModification: function(){
		switch(this.currentStep){
			case 1:
				this.pointer.angle = 30;
				this.arrowShadow.angle = 30;
				this.wheelSectionHighlight[0].visible = true;
				this.wheelSection[0].visible = false;
				break;
			case 2:
				this.pointer.angle = 270;
				this.arrowShadow.angle = 270;
				this.wheelSectionHighlight[4].visible = true;
				this.wheelSection[4].visible = false;
				break;
			case 5:
				for (var i = 0; i < stampOutSettings.category.length; i++) {
					this.add.sprite(stampOutSettings.category[i].spinIndicatorStampedX, stampOutSettings.category[i].spinIndicatorStampedY, 'texture', stampOutSettings.category[i].spinIndicatorStampedKey);
				};
				break;
		}
	},

	removeStepModification: function(){
		switch(this.currentStep){
			case 1:
				this.pointer.angle = 0;
				this.arrowShadow.angle = 0;
				this.wheelSectionHighlight[0].visible = false;
				this.wheelSection[0].visible = true;
				break;
		}
	},

	cleanup: function(){
		for (var i = 0; i < this.wheelSectionHighlight.length; i++) {
			this.wheelSectionHighlight[i].destroy();
		};
		for (i = 0; i < this.wheelSection.length; i++) {
			this.wheelSection[i].destroy();
		};
		this.wheelSectionHighlight = null;
		this.pointer.destroy();
		this.arrowShadow.destroy();
	},

	advance: function(){
		//StampOut.audioSprite.stop();
		createjs.Sound.stop();
		this.dialogGroup.destroy();
		this.removeStepModification();
		this.currentStep++;
		if(this.currentStep >= stampOutSettings.instructions.steps.length){
			this.cleanup();
			this.state.start('spinner');
		}else{
			this.showCurrentStep();
		}
		
	}

}