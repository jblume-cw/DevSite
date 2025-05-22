var EscapeTheSituation = {
	gameState: {
		progress: [],
		currentLevel: null
	},
	voSprite: null,
	sfxSprite: null
};

EscapeTheSituation.boot = function(game){
	this.clickthroughGroup = null;
};

EscapeTheSituation.boot.prototype = {
	
	init: function(){
		this.stage.backgroundColor = '#ffffff';

		for (var i = 0; i < etsSettings.map.levels.identifiers.length; i++) {
			EscapeTheSituation.gameState.progress.push(0);
		};
		//EscapeTheSituation.gameState.progress = [1,1,1,1,1,1,1,1];
		//console.log(EscapeTheSituation.gameState.progress);

		if(etsSettings.autoScale){
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
		this.load.image(etsSettings.loader.rotator.key, etsSettings.loader.rotator.file);
		this.load.image(etsSettings.loader.background.key, etsSettings.loader.background.file);
	},

	create: function(){
		if(etsSettings.inspectorEnabled){
			this.game.plugins.add(Phaser.Plugin.Inspector);
		}
		var canContinue = true;
		if(etsSettings.scormEnabled){
			var canContinue = SCORM_API_adapter.lmsInitialize();
			this.readProgressFromLMS();
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

	readProgressFromLMS: function(){
		var suspendData = SCORM_API_adapter.getSuspendData();
		if(suspendData == ""){
			SCORM_API_adapter.setSuspendData(EscapeTheSituation.gameState.progress.join(","));
		}else{
			EscapeTheSituation.gameState.progress = suspendData.split(",");
		}
	},

	addClickthrough: function(){
		this.clickthroughGroup = this.add.group();

		var background = this.add.sprite(etsSettings.loader.background.x, etsSettings.loader.background.y, etsSettings.loader.background.key);

    	var messageStyle = { 
		 	font: etsSettings.loader.label.font, 
		 	fill: etsSettings.loader.label.fill, 
		 	fontSize: etsSettings.loader.label.size,
		 	align: "center"
		};
		var messageText = this.add.text(etsSettings.loader.rotator.x, 
									    etsSettings.loader.rotator.y, 
			                            etsSettings.loader.label.clickthroughText, messageStyle);
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