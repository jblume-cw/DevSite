var StampOut = {
	currentStreak: null,
	powerUpStatus: null, // Array of values, one for each power up. 0 = unused, 1 = used
	categoryStatus: null, // Array of values, one for each category. 0 = open, 1 = closed
	questionPool: null,
	audioSprite: null,

	saveState: function(){
		if(stampOutSettings.scormEnabled){
			var saveString = StampOut.currentStreak + StampOut.powerUpStatus.join("") + StampOut.categoryStatus.join("");
			SCORM_API_adapter.setSuspendData(saveString);
			//console.log("saveState: " + saveString);
		}
	},

	clearSavedState: function(){
		SCORM_API_adapter.setSuspendData("");
		//console.log("save state cleared");
	}
};

StampOut.boot = function(game){};

StampOut.boot.prototype = {
	
	init: function(){
		this.stage.backgroundColor = '#ffffff';

		if(stampOutSettings.autoScale){
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
		/*this.load.path = 'images/';
		this.load.image('preloadLogo', 'preload-logo.png');
		this.load.image('preloadBar', 'preload-bar.png');*/
		this.load.image(stampOutSettings.loader.rotator.key, stampOutSettings.loader.rotator.file);
	},

	create: function(){
		if(stampOutSettings.inspectorEnabled){
			this.game.plugins.add(Phaser.Plugin.Inspector);
		}
		var canContinue = true;
		if(stampOutSettings.scormEnabled){
			var canContinue = SCORM_API_adapter.lmsInitialize();
		}
		if(canContinue){
			this.state.start('preloader');
		}else{
			alert("Unable to initialize SCORM API. Re-start course to try again.");
		}
		
	}/*,

	parseStateData: function(){
		if(stampOutSettings.scormEnabled){
			var rawStateData = SCORM_API_adapter.getSuspendData();
			if(rawStateData != null && rawStateData != ""){
				StampOut.currentStreak = Number(rawStateData.charAt(0));

				var powerUpCount = stampOutSettings.powerUp.length;
				StampOut.powerUpStatus = rawStateData.substr(1, powerUpCount).join("");

				var categoryCount = stampOutSettings.category.length;
				StampOut.categoryStatus = rawStateData.substr(1 + powerUpCount, categoryCount).join("");

				StampOut.questionPool = [];
			}
		}
	}*/

};