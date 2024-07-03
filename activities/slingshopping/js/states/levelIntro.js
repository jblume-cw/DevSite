Slingshopping.levelIntro = function(game){
	this.leftStrap = null;
	this.rightStrap = null;
	this.slingshotPocket = null;
	this.textCart = null;
	this.mode = null;
};

Slingshopping.levelIntro.prototype = {
	
	init: function(mode){
		this.mode = mode;
	},

	preload: function(){
	},

	update: function(){
	},

	create: function(){
		for (var i = 0; i < settings.levelIntro.backgroundElements.length; i++) {
			Slingshopping.addImage(settings.levelIntro.backgroundElements[i], this);
		}

		Slingshopping.addImage(settings.slingshot.fork, this);
		this.slingshotPocket = Slingshopping.addImage(settings.slingshot.pocket, this);
		Slingshopping.drawStraps(this);

		var score = Slingshopping.addText(settings.levelIntro.score, this);
		score.text = Slingshopping.score;
		var time = Slingshopping.addText(settings.levelIntro.time, this);
		if(this.mode == "level"){
			time.text = ":" + settings.game.levelData[Slingshopping.level].clock;
		}else{
			time.text = ":00";
		}

		this.textCart = this.add.group();
		var cart = Slingshopping.addImage(settings.levelIntro.textCart, this);
		this.textCart.add(cart);
		var heading = Slingshopping.addText(settings.levelIntro.header, this);
		this.textCart.add(heading);
		var body = Slingshopping.addText(settings.levelIntro.body, this);
		this.textCart.add(body);
		/*var beginBtn = Slingshopping.addButton(settings.levelIntro.beginButton, this.animateOff, this);
		this.textCart.add(beginBtn);*/

		var beginBtn = null;
		switch(this.mode){
			case "level":
				heading.text = settings.levelIntro.header.levelText[Slingshopping.level];
				body.text = settings.levelIntro.body.levelText[Slingshopping.level];
				beginBtn = Slingshopping.addButton(settings.levelIntro.beginButton, this.animateOff, this);
				break;
			case "win":
				heading.text = settings.levelIntro.header.winText;
				body.text = settings.levelIntro.body.winText;
				beginBtn = Slingshopping.addButton(settings.levelIntro.playAgainButton, this.animateOff, this);
				break;
			case "lose":
				heading.text = settings.levelIntro.header.loseText;
				body.text = settings.levelIntro.body.loseText;
				beginBtn = Slingshopping.addButton(settings.levelIntro.playAgainButton, this.animateOff, this);
				break;
		}
		this.textCart.add(beginBtn);

		this.animateOn();
	},

	animateOn: function(){
		var tween = this.add.tween(this.textCart).to({ x: settings.levelIntro.textCart.animateOnDistance.x, y: settings.levelIntro.textCart.animateOnDistance.y }, settings.levelIntro.textCart.animationDuration, Phaser.Easing.Cubic.Out, true);
		tween.onComplete.add(this.playVO, this);
	},

	playVO: function(){
		//Slingshopping.soundSprite.play(settings.levelIntro.levelVo[Slingshopping.level]);
		switch(this.mode){
			case "level":
				Slingshopping.soundSprite.play(settings.levelIntro.levelVo[Slingshopping.level]);
				break;
			case "win":
				Slingshopping.soundSprite.play(settings.levelIntro.winVo);
				this.storeHighScore();
				break;
			case "lose":
				Slingshopping.soundSprite.play(settings.levelIntro.loseVo);
				this.storeHighScore();
				break;
		}
	},

	animateOff: function(){
		Slingshopping.soundSprite.stop();
		var tween = this.add.tween(this.textCart).to({ x: settings.levelIntro.textCart.animateOffDistance.x, y: settings.levelIntro.textCart.animateOffDistance.y }, settings.levelIntro.textCart.animationDuration, Phaser.Easing.Cubic.In, true);
		tween.onComplete.add(this.moveOn, this);
	},

	storeHighScore: function(){
		if(settings.scormEnabled){
			var sd = SCORM_API_adapter.getSuspendData();
			if(sd == "" || sd == null){
				SCORM_API_adapter.setSuspendData(Slingshopping.score + "_" + Slingshopping.level);
			}else{
				var highScore = Number(sd.split("_")[0]);
				if(Slingshopping.score > highScore){
					SCORM_API_adapter.setSuspendData(Slingshopping.score + "_" + Slingshopping.level);
				}
			}
		}
	},

	moveOn: function(){
		switch(this.mode){
			case "level":
				this.state.start('game');
				break;
			case "win":
			case "lose":
				Slingshopping.level = 0;
				Slingshopping.score = 0;
				this.state.start('levelIntro', true, false, "level");
				break;
		}
	},

	shutdown: function(){
		this.leftStrap.destroy();
		this.rightStrap.destroy();
		this.slingshotPocket.destroy();
		this.textCart.destroy();
	}
}