StrikeItFit.lane = function(game){
	this.pins = null;
	this.ball = null;
	this.attempt = null;
	this.answeredCorrectly = null;
	this.pinsKnockedDown = null;
};

StrikeItFit.lane.prototype = {
	
	init: function(isCorrect){
		this.answeredCorrectly = isCorrect;
		if(StrikeItFit.position[0] < 9){
			if(StrikeItFit.score[StrikeItFit.position[0]][0] == null && StrikeItFit.score[StrikeItFit.position[0]][1] == null){
				this.attempt = 1;
			}else{
				this.attempt = 2;
			}
		}else{
			if(StrikeItFit.score[StrikeItFit.position[0]][0] == null && StrikeItFit.score[StrikeItFit.position[0]][1] == null && StrikeItFit.score[StrikeItFit.position[0]][2] == null){
				// ---
				this.attempt = 1;
			}else{
				if(StrikeItFit.score[StrikeItFit.position[0]][0] == 10 && StrikeItFit.score[StrikeItFit.position[0]][1] == null && StrikeItFit.score[StrikeItFit.position[0]][2] == null){
					// x--
					this.attempt = 1;
				}else{
					if(StrikeItFit.score[StrikeItFit.position[0]][0] == 10 && StrikeItFit.score[StrikeItFit.position[0]][1] == 10 && StrikeItFit.score[StrikeItFit.position[0]][2] == null){
						// xx-
						this.attempt = 1;
					}else{
						if((StrikeItFit.score[StrikeItFit.position[0]][0] + StrikeItFit.score[StrikeItFit.position[0]][1] == 10) && StrikeItFit.score[StrikeItFit.position[0]][2] == null){
							// n/-
							this.attempt = 1;
						}else{
							if(StrikeItFit.score[StrikeItFit.position[0]][0] < 10 && StrikeItFit.score[StrikeItFit.position[0]][1] == null && StrikeItFit.score[StrikeItFit.position[0]][2] == null){
								// n--
								this.attempt = 2;
							}else{
								if(StrikeItFit.score[StrikeItFit.position[0]][0] == 10 && StrikeItFit.score[StrikeItFit.position[0]][1] < 10 && StrikeItFit.score[StrikeItFit.position[0]][2] == null){
									// xn-
									this.attempt = 2;
								}
							}
						}
					}
				}
			}
		}
		//console.log("attempt: " + this.attempt);
	},

	preload: function(){
	},

	update: function(){
	},

	create: function(){
		for (var i = 0; i < settings.lane.backgroundElements.length; i++) {
			this.add.image(settings.lane.backgroundElements[i].x, settings.lane.backgroundElements[i].y, settings.lane.backgroundElements[i].texture, settings.lane.backgroundElements[i].key);
		}
		if(this.attempt == 1){
			StrikeItFit.pinState = [true,true,true,true,true,true,true,true,true,true];
		}
		this.setPins();
		var animationId = this.chooseAnimation();
		this.startAnimation(animationId);
	},

	setPins: function(){
		this.pins = [];
		for (var i = 0; i < StrikeItFit.pinState.length; i++) {
			var pin = this.add.image(settings.lane.pin.positions[i].x, settings.lane.pin.positions[i].y, settings.lane.pin.texture, settings.lane.pin.key);
			pin.anchor = settings.lane.pin.anchor;
			pin.scale.x = settings.lane.pin.scales[i];
			pin.scale.y = settings.lane.pin.scales[i];
			if(!StrikeItFit.pinState[i]){
				pin.visible = false;
			}
			this.pins.push(pin);
		}
	},

	chooseAnimation: function(){
		var pinsUp = 0;
		for (var i = 0; i < this.pins.length; i++) {
			if(this.pins[i].visible){
				pinsUp++;
			}
		}
		var id = pinsUp + "-";
		if(this.answeredCorrectly){
			this.pinsKnockedDown = pinsUp;
			//id += "0";
		}else{
			if(this.attempt == 1){
				this.pinsKnockedDown = Math.round(Math.random() * settings.lane.wrongAnswerMaxPinsFirstBall);
				//this.pinsKnockedDown = 1;
				//id += String(10 - Math.round(Math.random() * settings.lane.wrongAnswerMaxPinsFirstBall));
			}else{
				this.pinsKnockedDown = Math.round(Math.random() * settings.lane.wrongAnswerMaxPinsSecondBall);
				//this.pinsKnockedDown = 2;
				//id += String(10 - Math.round(Math.random() * settings.lane.wrongAnswerMaxPinsSecondBall));
			}
			//id = "10-10";
		}
		id += String(pinsUp - this.pinsKnockedDown);
		return id;
	},

	startAnimation: function(animationId){
		//console.log("animation: " + animationId);
		var animationData = null;
		for (var i = 0; i < settings.lane.animations.length; i++) {
			if(settings.lane.animations[i].id == animationId){
				animationData = settings.lane.animations[i];
				break;
			}
		}
		this.animateBall(animationData.ball);
		if(Number(animationId.split("-")[0]) != Number(animationId.split("-")[1])){
			this.animatePins(animationData.pins);
		}else{
			// gutter ball
			this.time.events.add(animationData.ball.delay + animationData.ball.duration - 100, function(){ StrikeItFit.soundSprite.play(settings.lane.gutterAudioKey); }, this);
		}
		this.time.events.add(settings.lane.stateDuration, this.returnToQuestion, this);
	},

	animateBall: function(ballData){
		if(this.ball == null){
			this.ball = this.add.image(ballData.pathPoints[0].x, ballData.pathPoints[0].y, settings.lane.ball.texture, settings.lane.ball.keys[StrikeItFit.ballIndex]);
			this.ball.anchor.x = this.ball.anchor.y = 0.5;
		}

		var ballXs = [];
		var ballYs = [];
		for (var i = 1; i < ballData.pathPoints.length; i++) {
			ballXs.push(ballData.pathPoints[i].x);
			ballYs.push(ballData.pathPoints[i].y);
		}
		var motionTween = this.add.tween(this.ball).to( { x: ballXs, y: ballYs }, ballData.duration, Phaser.Easing.Linear.None, true, ballData.delay);
		motionTween.interpolation(Phaser.Math.bezierInterpolation);
		motionTween.onComplete.add(this.hideBall, this);
		this.add.tween(this.ball).to( { rotation: ballData.rotation }, ballData.duration, Phaser.Easing.Linear.None, true, ballData.delay);
		this.add.tween(this.ball.scale).to( { x: ballData.endScale, y: ballData.endScale  }, ballData.duration, Phaser.Easing.Linear.None, true, ballData.delay);

		StrikeItFit.soundSprite.play(settings.lane.ballRollAudioKey);
	},

	hideBall: function(){
		this.ball.visible = false;
	},

	animatePins: function(pinData){
		var delay = 0;
		for (var i = 0; i < this.pins.length; i++) {
			if(pinData.type[i] != "still" && pinData.type[i] != "clear"){
				if(i == 9){
					delay = pinData.delay;
				}else{
					if(i > 6){
						delay = pinData.delay + (1 * pinData.rowDelayIncrement);
					}else{
						if(i > 3){
							delay = pinData.delay + (2 * pinData.rowDelayIncrement);
						}else{
							delay = pinData.delay + (3 * pinData.rowDelayIncrement);
						}
					}
				}
				var typeData = this.getPinMovementData(this.pins[i], pinData.type[i]);
				this.add.tween(this.pins[i]).to( { x: [ typeData.x ], y: [ typeData.y ], rotation: [ typeData.rotation ] }, pinData.motionDuration, Phaser.Easing.Linear.None, true, delay);
				this.add.tween(this.pins[i].scale).to( { x: [ pinData.endScale ], y: [ pinData.endScale ] }, pinData.motionDuration, Phaser.Easing.Linear.None, true, delay);
				this.add.tween(this.pins[i]).to( { alpha: 0 }, pinData.fadeDelay, Phaser.Easing.Linear.None, true, delay + pinData.motionDuration - pinData.fadeDelay);
			}
		}
		if(this.answeredCorrectly){
			this.time.events.add(pinData.delay, function(){ StrikeItFit.soundSprite.play(settings.lane.pinsCorrectAudioKey); }, this);
		}else{
			this.time.events.add(pinData.delay, function(){ StrikeItFit.soundSprite.play(settings.lane.pinsIncorrectAudioKey); }, this);
		}
		this.updatePinStates(pinData);
	},

	getPinMovementData: function(pin, type){
		var data = { x: null, y: null, rotation: null };
		var typeData = null;
		for (var i = 0; i < settings.lane.pinAnimationType.length; i++) {
			if(settings.lane.pinAnimationType[i].id == type){
				typeData = settings.lane.pinAnimationType[i];
				break;
			}
		}
		data.x = pin.x + (typeData.xRange[0] + (Math.random() * (typeData.xRange[1] - typeData.xRange[0])));
		data.y = pin.y + (typeData.yRange[0] + (Math.random() * (typeData.yRange[1] - typeData.yRange[0])));
		data.rotation = typeData.rotationRange[0] + (Math.random() * (typeData.rotationRange[1] - typeData.rotationRange[0]));
		
		return data;
	},

	returnToQuestion: function(){
		this.state.start("question", true, false, this.pinsKnockedDown, this.answeredCorrectly, this.attempt);
	},

	updatePinStates: function(pinData){
		for (var i = 0; i < pinData.type.length; i++) {
			if(pinData.type[i] == "still"){
				StrikeItFit.pinState[i] = true;
			}else{
				StrikeItFit.pinState[i] = false;
			}
		}
	},

	shutdown: function(){
		for (var i = 0; i < this.pins.length; i++) {
			this.pins[i].destroy();
		}
		this.pins = null;
		this.ball.destroy();
		this.ball = null;
	}

};