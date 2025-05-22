var FiveWords = {
	voSprite: null,
	autoHelpShown: false
};

FiveWords.boot = function(game){
	this.clickthroughGroup = null;
};

FiveWords.boot.prototype = {
	
	init: function(){
		this.stage.backgroundColor = '#ffffff';

		if(fiveWordsSettings.autoScale){
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
		this.load.image(fiveWordsSettings.loader.rotator.key, fiveWordsSettings.loader.rotator.file);
		this.load.image(fiveWordsSettings.loader.background.key, fiveWordsSettings.loader.background.file);
	},

	create: function(){
		if(fiveWordsSettings.inspectorEnabled){
			this.game.plugins.add(Phaser.Plugin.Inspector);
		}
		var canContinue = true;
		if(fiveWordsSettings.scormEnabled){
			var canContinue = SCORM_API_adapter.lmsInitialize();
		}
		if(canContinue){
			this.initializeObjectives();

			if(this.game.device.iOS){
				this.addClickthrough();
			}else{
				this.moveOn();
			}

		}else{
			alert("Unable to initialize SCORM API. Re-start course to try again.");
		}
		
	},

	initializeObjectives: function(){
		if(SCORM_API_adapter.getObjectiveCount() == "0"){
			for (var i = 0; i < fiveWordsSettings.splash.puzzleButtons.length; i++) {
				SCORM_API_adapter.createObjective(i, "puzzle" + i, "incomplete");
			};
		}
	},

	addClickthrough: function(){
		this.clickthroughGroup = this.add.group();

		var background = this.add.sprite(fiveWordsSettings.loader.background.x, fiveWordsSettings.loader.background.y, fiveWordsSettings.loader.background.key);

    	var messageStyle = { 
		 	font: fiveWordsSettings.loader.label.font, 
		 	fill: fiveWordsSettings.loader.label.fill, 
		 	fontSize: fiveWordsSettings.loader.label.size,
		 	align: "center",
		 	weight: fiveWordsSettings.loader.label.weight
		};
		var messageText = this.add.text(fiveWordsSettings.loader.rotator.x, 
									    fiveWordsSettings.loader.rotator.y, 
			                            fiveWordsSettings.loader.label.clickthroughText, messageStyle);
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

};