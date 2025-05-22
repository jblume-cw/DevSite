AdCreator.creator = function(game){
	this.interfaceBackground = null;
	this.mainButtons = null;
	this.textButtons = null;
	this.editButtons = null;
	this.dialog = null;
	this.dialogOptions = null;
	this.adCanvas = null;
	this.selectedItem = null;
	this.highlighter = null;
	this.adMask = null;
	this.toolTip = null;
	this.printFlag = null;
};

AdCreator.creator.prototype = {
	
	init: function(){
		this.printFlag = false;
		if(adSettings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
	},

	preload: function(){
	},

	create: function(){
		this.interfaceBackground = this.add.sprite(adSettings.creator.background.x, adSettings.creator.background.y, adSettings.creator.background.key);

		for (var i = 0; i < adSettings.creator.graphics.length; i++) {
			this.add.sprite(adSettings.creator.graphics[i].x, adSettings.creator.graphics[i].y, adSettings.interfaceTexture.key, adSettings.creator.graphics[i].key);
		};

		this.addMask();
		this.createAdCanvas();
		this.addDefaultBackground();
		this.createHighlighter();
		this.createToolButtons();
		
	},

	update: function(){
		if(this.selectedItem != null && this.highlighter != null){
			if(this.selectedItem.input.isDragged){
				this.highlighter.x = this.selectedItem.x;
				this.highlighter.y = this.selectedItem.y;
			}
		}
	},

	render: function(){
		if(this.printFlag){
			this.captureCanvas();
			this.printFlag = false;
		}
	},

	handleToolButtonClick: function(button){
		switch(button.data.id){
			case "add-text":
				this.handleDialogClose();
				this.captureText();
				this.hideToolTip(); // tooltip doesn't auto-hide because of browser UI
				break;
			case "add-background":
				this.openDialog();
				this.addDialogOptions(adSettings.creator.dialog.backgrounds, "background");
				break;
			case "add-person":
				this.openDialog();
				this.addDialogOptions(adSettings.creator.dialog.people, "image");
				break;
			case "add-graphic":
				this.openDialog();
				this.addDialogOptions(adSettings.creator.dialog.graphics, "image");
				break;
			case "add-tobacco":
				this.openDialog();
				this.addDialogOptions(adSettings.creator.dialog.tobacco, "image");
				break;
			case "clear":
				this.clearAll();
				break;
			case "back":
				this.moveSelectedItemBack();
				break;
			case "fore":
				this.moveSelectedItemForward();
				break;
			case "flip-h":
				this.flipSelectedHorizontal();
				break;
			case "flip-v":
				this.flipSelectedVertical();
				break;
			case "rotate-ccw":
				this.rotateSelected(-1);
				break;
			case "rotate-cw":
				this.rotateSelected(1);
				break;
			case "shrink":
				this.scaleSelected(-1);
				break;
			case "expand":
				this.scaleSelected(1);
				break;
			case "font":
				this.openDialog();
				this.addDialogOptions(adSettings.creator.dialog.textStyles, "text");
				break;
			case "color":
				this.openDialog();
				this.addDialogOptions(adSettings.creator.dialog.textColors, "color");
				break;
			case "delete":
				this.deleteSelectedItem();
				this.hideEditMenu();
				break;
			case "print":
				this.printAd();
				break;
		}
	},

	captureText: function(){
		var textEntered = window.prompt("Enter text:");
		if(textEntered != null){
			this.addText(" " + textEntered + " "); // space added to keep italic text from cutting off
		}
		//this.addText("Tobacco");
	},

	openDialog: function(){
		if(this.dialog == null){
			this.dialog = this.add.group();
			var background = this.add.sprite(adSettings.creator.dialog.box.x, adSettings.creator.dialog.box.y, adSettings.interfaceTexture.key, adSettings.creator.dialog.box.key, this.dialog);
			background.inputEnabled = true;
			this.add.button(adSettings.creator.dialog.closeButton.x, 
				            adSettings.creator.dialog.closeButton.y, 
				            adSettings.interfaceTexture.key, 
				            this.handleDialogClose, 
				            this, 
				            adSettings.creator.dialog.closeButton.overKey, 
				            adSettings.creator.dialog.closeButton.outKey, 
				            adSettings.creator.dialog.closeButton.downKey, 
				            adSettings.creator.dialog.closeButton.upKey,
				            this.dialog);
		}
		if(!this.dialog.visible){
			this.dialog.visible = true;
		}
		this.world.bringToTop(this.dialog);
	},

	handleDialogClose: function(){
		if(this.dialogOptions != null){
			this.dialog.visible = false;
			this.dialogOptions.destroy();
			this.dialogOptions = null;
		}
		
	},

	addDialogOptions: function(optionData, type){
		if(this.dialogOptions != null){
			this.dialogOptions.destroy();
		}
		this.dialogOptions = this.add.group();

		var thisStyle = { 
		 	font: adSettings.creator.dialog.directionText.font, 
		 	fill: adSettings.creator.dialog.directionText.fill, 
		 	fontSize: adSettings.creator.dialog.directionText.size,
		 	align: "left"
		};
		this.add.text(adSettings.creator.dialog.directionText.x, 
									 adSettings.creator.dialog.directionText.y, 
			                         optionData.direction,
			                         thisStyle,
			                         this.dialogOptions);

		switch(type){
			case "text":
				for (var i = 0; i < optionData.options.length; i++) {
					var thisStyle = { 
					 	font: adSettings.creator.dialog.textStyles.options[i].style.font, 
					 	fill: adSettings.creator.dialog.textStyles.options[i].style.fill, 
					 	fontSize: adSettings.creator.dialog.textStyles.options[i].button.size,
					 	fontWeight: adSettings.creator.dialog.textStyles.options[i].style.weight,
					 	align: "center"
					};
					var thisText = this.add.text(adSettings.creator.dialog.textStyles.options[i].button.x, adSettings.creator.dialog.textStyles.options[i].button.y, adSettings.creator.dialog.textStyles.options[i].button.name, thisStyle, this.dialogOptions);
					thisText.inputEnabled = true;
					thisText.input.enableDrag(); // WHY IS THIS HERE?
					thisText.events.onInputDown.add(this.handleDialogOptionChosen, this);
					thisText.data.target = optionData.options[i].style;
					thisText.data.target.isText = true;
				}
				break;
			case "color":
				for (var i = 0; i < optionData.options.length; i++) {
					var thisChip = this.add.graphics(optionData.options[i].button.x, optionData.options[i].button.y, this.dialogOptions);
					thisChip.beginFill(optionData.options[i].button.fill);
					thisChip.lineStyle(optionData.options[i].button.strokeWidth, optionData.options[i].button.strokeColor);
					thisChip.drawRect(0, 0, optionData.options[i].button.width, optionData.options[i].button.height);
					thisChip.endFill();
					thisChip.inputEnabled = true;
					thisChip.events.onInputDown.add(this.handleDialogOptionChosen, this);
					thisChip.data.target = optionData.options[i].target;
					thisChip.data.target.isColor = true;
				}
				break;
			case "background":
			case "image":
				for (var i = 0; i < optionData.options.length; i++) {
					var thisButton = this.add.button(optionData.options[i].button.x, 
										            optionData.options[i].button.y, 
										            adSettings.interfaceTexture.key, 
										            this.handleDialogOptionChosen, 
										            this, 
										            optionData.options[i].button.overKey, 
										            optionData.options[i].button.outKey, 
										            optionData.options[i].button.downKey, 
										            optionData.options[i].button.upKey,
										            this.dialogOptions);
					thisButton.data.target = optionData.options[i].target;
					if(type == "background"){
						thisButton.data.target.isBackground = true;
					}else{
						thisButton.data.target.isBackground = false;
					}
				};
				break;
		}
		
	},

	handleDialogOptionChosen: function(button){
		if(button.data.target.isBackground){
			this.changeBackground(button.data.target);
		}else{
			if(button.data.target.isText){
				this.changeTextStyle(button.data.target);
			}else{
				if(button.data.target.isColor){
					this.changeTextColor(button.data.target);
				}else{
					this.addItem(button.data.target);
				}
			}
		}
		this.handleDialogClose();
	},

	createAdCanvas: function(){
		this.adCanvas = this.add.group();
		this.adCanvas.mask = this.adMask;
	},

	addDefaultBackground: function(){
		this.changeBackground(adSettings.creator.dialog.backgrounds.options[0].target);
	},

	changeBackground: function(itemData){
		if(this.adCanvas.length > 0){
			var oldBackground = this.adCanvas.getChildAt(0);
			oldBackground.destroy();
		}
		var newBackground = this.add.sprite(itemData.x, 
							            	itemData.y, 
							           		itemData.texture, 
							            	itemData.key,
							            	this.adCanvas);
		this.adCanvas.sendToBack(newBackground);

		newBackground.inputEnabled = true;
		newBackground.events.onInputDown.add(this.deselectItem, this);
	},

	createHighlighter: function(){
		var shape = this.add.graphics(0, 0);
		shape.beginFill(adSettings.creator.highlighter.color);
		shape.drawRect(0, 0, 10, 10);
		shape.endFill();
		var texture = shape.generateTexture();
		this.highlighter = this.add.sprite(0, 0, texture, 0, this.adCanvas);
		this.highlighter.alpha = adSettings.creator.highlighter.alpha;
		this.highlighter.anchor.x = 0.5;
		this.highlighter.anchor.y = 0.5;
		this.highlighter.visible = false;
		this.highlighter.data.type = "highlighter";
		shape.clear();
		shape.destroy();
	},

	hideHighlighter: function(){
		this.highlighter.visible = false;
	},

	addMask: function(){
		if(this.adMask == null){
			this.adMask = this.add.graphics(0, 0);
	    	this.adMask.beginFill(0xffffff);
	    	this.adMask.drawRect(adSettings.creator.adWindowMask.x, adSettings.creator.adWindowMask.y, adSettings.creator.adWindowMask.width, adSettings.creator.adWindowMask.height);
	    	this.adMask.endFill();
		}
	},

	createToolButtons: function(){
		this.mainButtons = this.add.group();
		this.textButtons = this.add.group();
		this.textButtons.visible = false;
		this.editButtons = this.add.group();
		this.hideEditMenu();

		for (i = 0; i < adSettings.creator.toolButtons.length; i++) {
			var button = this.add.button(adSettings.creator.toolButtons[i].x, 
				            adSettings.creator.toolButtons[i].y, 
				            adSettings.interfaceTexture.key, 
				            this.handleToolButtonClick, 
				            this, 
				            adSettings.creator.toolButtons[i].overKey, 
				            adSettings.creator.toolButtons[i].outKey, 
				            adSettings.creator.toolButtons[i].downKey, 
				            adSettings.creator.toolButtons[i].upKey);
			button.data.id = adSettings.creator.toolButtons[i].id;
			button.data.tipText = adSettings.creator.toolButtons[i].tipText;
			button.onInputOver.add(this.showToolTip, this);
			button.onInputOut.add(this.hideToolTip, this);

			switch(adSettings.creator.toolButtons[i].group){
				case "main":
					this.mainButtons.add(button);
					break;
				case "text":
					this.textButtons.add(button);
					break;
				case "edit":
					this.editButtons.add(button);
					break;
			}
		};
	},

	showToolTip: function(button){
		if(this.toolTip == null){
			this.toolTip = this.add.group();
		}

		var style = { 
		 	font: adSettings.creator.toolTip.text.font, 
		 	fill: adSettings.creator.toolTip.text.fill, 
		 	fontSize: adSettings.creator.toolTip.text.size,
		 	align: "center"
		};
		var tipText = this.add.text(button.x + (button.width / 2), button.y + adSettings.creator.toolTip.text.verticalOffset, button.data.tipText, style, this.toolTip);
		tipText.anchor.x = 0.5;
		tipText.anchor.y = 0.5;

		var box = this.add.graphics(tipText.x - (tipText.width / 2) - adSettings.creator.toolTip.box.horizontalPadding, tipText.y + adSettings.creator.toolTip.box.verticalOffset, this.toolTip);
		box.beginFill(adSettings.creator.toolTip.box.fill);
		box.lineStyle(adSettings.creator.toolTip.box.lineWidth, adSettings.creator.toolTip.box.lineColor);
		box.drawRoundedRect(0, 0, tipText.width + (adSettings.creator.toolTip.box.horizontalPadding * 2), adSettings.creator.toolTip.box.height, adSettings.creator.toolTip.box.radius);
		box.endFill();

		if(box.x < 5){
			tipText.x += 5 - box.x;
			box.x = 5;
		}else{
			if(box.x + box.width > 795){
				tipText.x -= (box.x + box.width) - 795;
			}
		}

		this.toolTip.moveDown(box);
	},

	hideToolTip: function(){
		this.toolTip.removeAll(true);
	},

	addItem: function(itemData){
		var newItem = this.add.sprite(itemData.x, 
			            itemData.y, 
			            itemData.texture, 
			            itemData.key,
			            this.adCanvas);
		newItem.anchor.x = newItem.anchor.y = 0.5;
		newItem.inputEnabled = true;
		newItem.input.enableDrag();
		newItem.events.onInputDown.add(this.selectItem, this);
		newItem.data.type = "graphic";

		//newItem.texture.mipmap = true;
	},

	addText: function(text){
		var thisStyle = { 
		 	font: adSettings.creator.dialog.textStyles.options[0].style.font, 
		 	fill: adSettings.creator.dialog.textStyles.options[0].style.fill, 
		 	fontSize: adSettings.creator.dialog.textStyles.options[0].style.size,
		 	fontWeight: adSettings.creator.dialog.textStyles.options[0].style.weight,
		 	align: "center"
		};
		var newText = this.add.text(400, 330, text, thisStyle, this.adCanvas);
		newText.anchor.x = newText.anchor.y = 0.5;
		newText.inputEnabled = true;
		newText.input.enableDrag();
		newText.events.onInputDown.add(this.selectItem, this);
		newText.data.type = "text";
	},

	selectItem: function(item){
		this.selectedItem = item;
		this.highlighter.visible = true;

		this.adCanvas.setChildIndex(this.highlighter, 0);
		while(this.adCanvas.getChildIndex(this.highlighter) < this.adCanvas.getChildIndex(this.selectedItem)){
			this.adCanvas.moveUp(this.highlighter);
		}
		this.highlighter.width = this.selectedItem.width;
		this.highlighter.height = this.selectedItem.height;
		this.highlighter.x = this.selectedItem.x;
		this.highlighter.y = this.selectedItem.y;
		this.highlighter.rotation = this.selectedItem.rotation;
		if(item.data.type == "text"){
			this.showEditMenu(true);
		}else{
			this.showEditMenu(false);
		}
		//this.dumpGroupChildren(this.adCanvas);
	},

	deselectItem: function(){
		this.hideHighlighter();
		this.hideEditMenu();
		this.selectedItem = null;
	},

	showEditMenu: function(showTextButtons){
		this.editButtons.visible = true;
		if(showTextButtons){
			this.textButtons.visible = true;
		}else{
			this.textButtons.visible = false;
		}
	},

	hideEditMenu: function(){
		this.editButtons.visible = false;
		this.textButtons.visible = false;
	},

	deleteSelectedItem: function(){
		if(this.selectedItem != null){
			var item = this.adCanvas.remove(this.selectedItem, true);
			this.selectedItem.destroy();
			this.selectedItem = null;
			this.deselectItem();
		}
	},

	clearAll: function(){
		this.deselectItem();
		this.adCanvas.removeAll(true);
		this.addDefaultBackground();
		this.createHighlighter();
	},

	moveSelectedItemBack: function(){
		if(this.selectedItem != null){
			if(this.selectedItem.z > 1){
				this.adCanvas.moveDown(this.selectedItem);
				this.adCanvas.moveDown(this.highlighter);
			}
		}
		//this.dumpGroupChildren(this.adCanvas);
	},

	moveSelectedItemForward: function(){
		if(this.selectedItem != null){
			if(this.highlighter.z < this.adCanvas.children.length - 1){
				this.adCanvas.moveUp(this.highlighter);
				this.adCanvas.moveUp(this.selectedItem);
			}
		}
		//this.dumpGroupChildren(this.adCanvas);
	},

	flipSelectedHorizontal: function(){
		if(this.selectedItem != null){
			this.selectedItem.scale.x *= -1;
			//this.highlighter.scale.x *= -1;
		}
	},

	flipSelectedVertical: function(){
		if(this.selectedItem != null){
			this.selectedItem.scale.y *= -1;
			//this.highlighter.scale.y *= -1;
		}
	},

	rotateSelected: function(direction){
		if(this.selectedItem != null){
			this.selectedItem.rotation += Phaser.Math.degToRad(5) * direction;
			this.highlighter.rotation = this.selectedItem.rotation;
		}
	},

	scaleSelected: function(direction){
		if(this.selectedItem != null){
			var factor = 1 + (direction * 0.1);
			// setting the min and max scales still allow scale values to change, so values checked manually
			var newAbsoluteScale = Math.abs(this.selectedItem.scale.x * factor);
			if(newAbsoluteScale > 0.1 && newAbsoluteScale < 4){
				this.selectedItem.scale.x *= factor;
				this.selectedItem.scale.y *= factor;
				this.highlighter.width = this.selectedItem.width;
				this.highlighter.height = this.selectedItem.height;
			}
			//console.log("scale: " + this.selectedItem.scale.x);
		}
	},

	changeTextStyle: function(styleData){
		if(this.selectedItem != null){
			var thisStyle = { 
			 	font: styleData.font, 
			 	fill: this.selectedItem.fill, 
			 	fontSize: styleData.size,
			 	fontWeight: styleData.weight,
			 	align: "center"
			};
			this.selectedItem.setStyle(thisStyle);
			this.highlighter.width = this.selectedItem.width;
			this.highlighter.height = this.selectedItem.height;
		}
	},

	changeTextColor: function(styleData){
		if(this.selectedItem != null){
			this.selectedItem.fill = styleData.fill;
		}
	},

	/*printAd: function(){
		this.hideInterface();
		var doc = new jsPDF({
			orientation: 'l',
			unit: 'mm',
			format: 'a4',
			putOnlyUsedFonts:true
		});
		doc.addImage(this.game.canvas.toDataURL('image/png'), 'png', 20, 10, 253, 190);
		doc.save('anti-tobacco-ad.pdf');
		this.unhideInterface();
	},*/

	printAd: function(){
		// creates print cycle: (1) hide interface (2) set print flag (3) detect flag in render() (4) capture canvas and save as pdf (5) show interface
		this.hideInterface();
		this.printFlag = true;
	},

	hideInterface: function(){
		this.deselectItem();
		this.hideToolTip();
		this.interfaceBackground.visible = false;
		this.mainButtons.visible = false;
		this.editButtons.visible = false;
		this.textButtons.visible = false;
	},

	unhideInterface: function(){
		this.interfaceBackground.visible = true;
		this.mainButtons.visible = true;
	},

	captureCanvas: function(){
		//var img = this.game.canvas.toDataURL("image/jpeg", 1.0);
		/*var img = this.game.canvas.toDataURL("image/png");
		window.open(img, "_blank");*/
		var doc = new jsPDF({
			orientation: 'l',
			unit: 'mm',
			format: 'a4',
			putOnlyUsedFonts:true
		});
		doc.addImage(this.game.canvas.toDataURL('image/png'), 'png', 45, 10, 200, 150);
		doc.save('anti-tobacco-ad.pdf');
		this.unhideInterface();
		this.hideToolTip(); // doesn't always hide before window opens
	},

	dumpGroupChildren: function(group){
		for (var i = 0; i < group.children.length; i++) {
			console.log(i + " : " + group.getChildAt(i).frameName);
		};
		console.log("--------------");
	}

}