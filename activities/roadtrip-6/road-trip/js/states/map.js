RoadTrip.map = function(game){
	this.player = null;
	this.options = null;
	this.needle = null;
	this.needleRange = null;
	this.traveling = null;
	this.currentVo = null;
	this.travelSound = null;
};

RoadTrip.map.prototype = {
	
	init: function(){
		this.options = [];
		//RoadTrip.playerPosition = 8;
		//RoadTrip.playerProgress = [ -1, 1, 0, 1, -1, 1, -1, 0];
		this.needleRange = Math.abs(roadTripSettings.map.fuel.needle.fullAngle) + Math.abs(roadTripSettings.map.fuel.needle.emptyAngle);
		this.traveling = false;

		if(roadTripSettings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
	},

	create: function(){
		this.add.sprite(roadTripSettings.map.background.x, 
						roadTripSettings.map.background.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.map.background.key);
		this.placeFuel();
		this.placeDestination();
		this.placeCheckpoints();
		if(!this.preFuelAdjustment()){
			this.placeOptions();
		}
		
		this.placePlayer();
	},

	update: function(){
		if(this.traveling){
			if(this.needle.angle < roadTripSettings.map.fuel.needle.emptyAngle){
				this.endGame();
			}
		}
		
	},

	placeFuel: function(){
		this.add.sprite(roadTripSettings.map.fuel.gauge.x, 
						roadTripSettings.map.fuel.gauge.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.map.fuel.gauge.key);
		this.needle = this.add.sprite(roadTripSettings.map.fuel.needle.x, 
										roadTripSettings.map.fuel.needle.y, 
										roadTripSettings.textureKey, 
										roadTripSettings.map.fuel.needle.key);
		this.needle.anchor.x = roadTripSettings.map.fuel.needle.xAnchor;
		this.needle.anchor.y = roadTripSettings.map.fuel.needle.yAnchor;

		var fromBottom = this.needleRange * RoadTrip.fuelRemaining;
		this.needle.angle = roadTripSettings.map.fuel.needle.emptyAngle + fromBottom;
	},

	placeDestination: function(){
		this.add.sprite(roadTripSettings.map.destination.x, 
						roadTripSettings.map.destination.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.map.destination.visual[RoadTrip.destinationIndex].key);
	},

	placeCheckpoints: function(){
		//for (var i = 0; i < roadTripSettings.map.checkpoint.locations.length; i++) {
		for (var i = 0; i < roadTripSettings.map.locations.length; i++) {
			if(roadTripSettings.map.locations[i].type == "checkpoint"){
				var checkpointKey = null;
				switch(RoadTrip.playerProgress[i]){
					case 0:
						checkpointKey = roadTripSettings.map.checkpoint.plainKey;
						break;
					case -1: 
						checkpointKey = roadTripSettings.map.checkpoint.incorrectKey;
						break;
					case 1:
						checkpointKey = roadTripSettings.map.checkpoint.correctKey;
						break;
				}
				var checkpoint = this.add.sprite(roadTripSettings.map.locations[i].x, 
							roadTripSettings.map.locations[i].y, 
							roadTripSettings.textureKey, 
							checkpointKey);
				checkpoint.anchor.x = 0.5;
				checkpoint.anchor.y = 0.5;
			}
			
		};
	},

	preFuelAdjustment: function(){
		var adjusting = false;
		if(RoadTrip.playerPosition > 0){
			if(RoadTrip.playerProgress[RoadTrip.playerPosition] == 1){
				this.moveNeedle(roadTripSettings.map.fuelReward, roadTripSettings.map.fuelRewardDuration, this.placeOptions);
				createjs.Sound.play(roadTripSettings.map.fuelRewardSoundKey);
				RoadTrip.fuelRemaining += roadTripSettings.map.fuelReward;
				if(RoadTrip.fuelRemaining > 1){
					RoadTrip.fuelRemaining = 1;
				}
				adjusting = true;
			}
		}
		return adjusting;
	},

	moveNeedle: function(byFactor, duration, completionCallback){
		var angleChange = this.needleRange * byFactor;
		var newAngle = this.needle.angle + angleChange;
		if(newAngle > roadTripSettings.map.fuel.needle.fullAngle){
			newAngle = roadTripSettings.map.fuel.needle.fullAngle;
		}
		var needleTween = this.add.tween(this.needle).to( { angle: newAngle }, duration, Phaser.Easing.Linear.None, true);
		if(completionCallback != null){
			needleTween.onComplete.add(completionCallback, this);
		}
		
	},

	placeOptions: function(){
		//if(roadTripSettings.map.locations[RoadTrip.playerPosition].next.length > 1){
		if(RoadTrip.playerPosition < roadTripSettings.map.locations.length - 2){
			for (var i = 0; i < roadTripSettings.map.locations[RoadTrip.playerPosition].next.length; i++) {
				var nextIndex = roadTripSettings.map.locations[RoadTrip.playerPosition].next[i];
				var option = this.add.button(roadTripSettings.map.locations[nextIndex].x, 
											roadTripSettings.map.locations[nextIndex].y, 
											roadTripSettings.textureKey, 
											null, 
											this, 
											roadTripSettings.map.checkpoint.option.overKey, 
											roadTripSettings.map.checkpoint.option.outKey, 
											roadTripSettings.map.checkpoint.option.downKey, 
											roadTripSettings.map.checkpoint.option.upKey);
				option.onInputUp.add(this.chooseCheckpoint, this, 0, nextIndex);
				option.anchor.x = option.anchor.y = 0.5;
				this.options.push(option);
			}
		}else{
			// advance to end
			this.time.events.add(500, this.autoAdvancePlayer, this);
		}
		//}

	},

	chooseCheckpoint: function(option, arg1, arg2, checkpointIndex){
		for (var i = 0; i < this.options.length; i++) {
			this.options[i].destroy();
		};
		this.options = [];
		this.advancePlayer(checkpointIndex);
	},

	placePlayer: function(){
		var position = { x: 0, y: 0 };
		position.x = roadTripSettings.map.locations[RoadTrip.playerPosition].x;
		position.y = roadTripSettings.map.locations[RoadTrip.playerPosition].y;
		this.player = this.add.sprite(position.x, 
									  position.y, 
									  roadTripSettings.textureKey, 
									  roadTripSettings.map.player.vehicleKeys[RoadTrip.vehicleIndex]);
		this.player.anchor.x = this.player.anchor.y = 0.5;
	},

	autoAdvancePlayer: function(){
		if(roadTripSettings.map.locations[RoadTrip.playerPosition].next.length == 1){
			var nextCheckpoint = roadTripSettings.map.locations[RoadTrip.playerPosition].next[0];
			this.advancePlayer(nextCheckpoint);
		}
	},

	advancePlayer: function(nextCheckpoint){
		var nextIndex = 0;
		if(roadTripSettings.map.locations[RoadTrip.playerPosition].next.length > 1){
			nextIndex = roadTripSettings.map.locations[RoadTrip.playerPosition].next.indexOf(nextCheckpoint);
		}
		var xArr = [];
		var yArr = [];
		if(roadTripSettings.map.locations[RoadTrip.playerPosition].interpolation[nextIndex].length > 0){
			for (var i = 0; i < roadTripSettings.map.locations[RoadTrip.playerPosition].interpolation[nextIndex].length; i++) {
				xArr.push(roadTripSettings.map.locations[RoadTrip.playerPosition].interpolation[nextIndex][i].x);
				yArr.push(roadTripSettings.map.locations[RoadTrip.playerPosition].interpolation[nextIndex][i].y);
			};
		}
		xArr.push(roadTripSettings.map.locations[nextCheckpoint].x);
		yArr.push(roadTripSettings.map.locations[nextCheckpoint].y);

		this.moveNeedle(roadTripSettings.map.locations[RoadTrip.playerPosition].fuelCosts[nextIndex], roadTripSettings.map.locations[RoadTrip.playerPosition].travelTimes[nextIndex]);

		var vehicleTween = this.add.tween(this.player).to( { x: xArr, y: yArr }, roadTripSettings.map.locations[RoadTrip.playerPosition].travelTimes[nextIndex], Phaser.Easing.Linear.None, true);
		vehicleTween.interpolation(Phaser.Math.bezierInterpolation);
		vehicleTween.onComplete.add(this.endTravel, this, 0, nextCheckpoint, roadTripSettings.map.locations[RoadTrip.playerPosition].fuelCosts[nextIndex]);


		this.travelSound = createjs.Sound.play(roadTripSettings.map.travelSoundKey, "none", 0, 0, -1);

		this.traveling = true;
	},

	endTravel: function(tween, contex, checkpointIndex, fuelCost){
		this.traveling = false;

		RoadTrip.playerPosition = checkpointIndex;
		console.log("playerPosition " + RoadTrip.playerPosition);

		RoadTrip.fuelRemaining += fuelCost;
		console.log("fuelRemaining " + RoadTrip.fuelRemaining);

		this.travelSound.stop();

		if(RoadTrip.playerPosition < roadTripSettings.map.locations.length - 1){
			//this.time.events.add(500, this.showQuestion, this);
			var cpSound = createjs.Sound.play(roadTripSettings.map.checkpointSoundKey);
			cpSound.on("complete", this.showQuestion, this, true);
		}else{
			this.endGame(true);
		}	
	},

	showQuestion: function(){
		this.state.start('question');
	},

	endGame: function(gameWon){
		this.traveling = false;
		this.tweens.removeAll();
		createjs.Sound.stop();

		var endSoundEffect = null;
		if(gameWon){
			endSoundEffect = createjs.Sound.play(roadTripSettings.map.endDialog.win.winSoundKey);
		}else{
			endSoundEffect = createjs.Sound.play(roadTripSettings.map.endDialog.lose.loseSoundKey);
		}
		endSoundEffect.on("complete", this.showEndDialog, this, true, { win: gameWon });
		
		//this.time.events.add(500, this.showEndDialog, this, gameWon);
	},

	showEndDialog: function(gameWon, data){
		var gameWon = data.win;
		var box = this.add.sprite(roadTripSettings.map.endDialog.background.x, 
						roadTripSettings.map.endDialog.background.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.map.endDialog.background.key);

		var titleText = "";
		var messageText = "";
		if(gameWon){
			titleText = roadTripSettings.map.endDialog.win.title;
			messageText = roadTripSettings.map.endDialog.win.messages[RoadTrip.destinationIndex];
			this.currentVo = createjs.Sound.play(roadTripSettings.map.endDialog.win.audioKeys[RoadTrip.destinationIndex]);
		}else{
			titleText = roadTripSettings.map.endDialog.lose.title;
			messageText = roadTripSettings.map.endDialog.lose.messages[RoadTrip.destinationIndex];
			this.currentVo = createjs.Sound.play(roadTripSettings.map.endDialog.lose.audioKeys[RoadTrip.destinationIndex]);
		}
		var titleStyle = { 
		 	font: roadTripSettings.map.endDialog.titleText.font, 
		 	fill: roadTripSettings.map.endDialog.titleText.fill, 
		 	fontSize: roadTripSettings.map.endDialog.titleText.size, 
		 	wordWrap: true,
		 	wordWrapWidth: box.width - (roadTripSettings.map.endDialog.titleText.hPadding * 2),
		 	align: "center"
		};
		var title = this.add.text(box.x + (box.width/2), 
			                      box.y + roadTripSettings.map.endDialog.titleText.vPadding, 
			                      titleText, titleStyle);
		title.anchor.x = 0.5;
	    
	    var messageStyle = {
	    	font: roadTripSettings.map.endDialog.messageText.font, 
		 	fill: roadTripSettings.map.endDialog.messageText.fill, 
		 	fontSize: roadTripSettings.map.endDialog.messageText.size, 
		 	wordWrap: true,
		 	wordWrapWidth: box.width - (roadTripSettings.map.endDialog.messageText.hPadding * 2),
		 	align: "center"
	    }
	    var message = this.add.text(box.x + (box.width/2), 
			                        title.y + title.height + roadTripSettings.map.endDialog.messageText.vPadding, 
			                        messageText, messageStyle);
		message.anchor.x = 0.5;
	    
		var button = this.add.button(box.x + (box.width/2), 
									message.y + message.height + roadTripSettings.map.endDialog.playAgainButton.vPadding, 
									'texture', 
									this.playAgain, 
									this,
									roadTripSettings.map.endDialog.playAgainButton.overKey, 
									roadTripSettings.map.endDialog.playAgainButton.outKey, 
									roadTripSettings.map.endDialog.playAgainButton.downKey, 
									roadTripSettings.map.endDialog.playAgainButton.upKey);
		button.anchor.x = 0.5;


	},

	playAgain: function(){
		this.currentVo.stop();
		this.state.start('splash');
	},

	shutdown: function(){
		this.player.destroy();
		for (var i = 0; i < this.options.length; i++) {
			this.options[i].destroy();
		};
		this.needle.destroy();
	}

}