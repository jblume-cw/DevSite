var AdCreator = {
	vo: null
};

AdCreator.boot = function(game){
	
};

AdCreator.boot.prototype = {
	
	init: function(){
		this.stage.backgroundColor = '#ffffff';

		if(adSettings.autoScale){
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            window.addEventListener("resize", this.onResize.bind(this));
            this.onResize();
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

	preload: function(){
		this.load.image(adSettings.loader.rotator.key, adSettings.loader.rotator.file);
		this.load.image(adSettings.loader.background.key, adSettings.loader.background.file);
	},

	create: function(){
		var canContinue = true;
		if(adSettings.scormEnabled){
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

	addClickthrough: function(){
		this.clickthroughGroup = this.add.group();

		var background = this.add.sprite(adSettings.loader.background.x, adSettings.loader.background.y, adSettings.loader.background.key);

    	var messageStyle = { 
		 	font: adSettings.loader.label.font, 
		 	fill: adSettings.loader.label.fill, 
		 	fontSize: adSettings.loader.label.size,
		 	align: "center"
		};
		var messageText = this.add.text(adSettings.loader.rotator.x, 
									    adSettings.loader.rotator.y, 
			                            adSettings.loader.label.clickthroughText, messageStyle);
		messageText.anchor.x = 0.5;
		messageText.anchor.y = 1;

		this.clickthroughGroup.add(background);
		this.clickthroughGroup.add(messageText);

		this.input.onUp.add(this.handleClickthrough, this);
	},

	handleClickthrough: function(){
		this.clickthroughGroup.destroy();
		this.moveOn();
	},

	moveOn: function(){
		this.state.start('preloader');
	}

}