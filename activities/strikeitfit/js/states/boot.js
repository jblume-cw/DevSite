var StrikeItFit = {
	soundSprite: null,
	ambientSound: null,
	ballIndex: null, // index of ball chosen during instructions
	playerInitials: null,
	score: null, // 2D array holding frame by frame results
	questionPool: null, // indexes of unused questions
	currentQuestion: null, // current question index
	pinState: null, // array of pins that are standing - true = standing
	position: null, // array [0] = current frame [1] = current ball within frame. e.g. [3,1] = second ball in fourth frame
	lastGuess: null // index of previous guess at question, if guessed incorrectly
};

StrikeItFit.boot = function(game){
	this.clickthroughGroup = null;
};

StrikeItFit.boot.prototype = {
	
	init: function(){
		this.stage.backgroundColor = settings.backgroundColor;

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