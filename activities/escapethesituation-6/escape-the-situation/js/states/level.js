EscapeTheSituation.level = function(game){
	this.RIGHT = 1;
	this.LEFT = -1;

	//this.debug = true;
	this.logFPS = false;

	this.levelIndex = 0;

	this.tileMap = null;
	this.surfacesLayer = null;
	this.backgroundLayer = null;
	this.turnaroundLayer = null;
	this.deathLayer = null;
	this.finishlineLayer = null;

	this.player = null;
	this.playerSpeed = null;
	this.playerDirection = null;
	this.playerMode = null;

	this.situationDialog = null;
	this.showInstructions = null;
	this.instructionDialog = null;
	this.instructionIndex = null;
	this.coins = null;
	this.checkpoints = null;
	this.checkpointProgress = null;
	this.coinsCollected = null;
	this.coinsPossible = null;
	this.gameOverDialog = null;
	this.doors = null;
	this.chosenDoor = null;
	this.coinCounter = null;
	this.coinCounterText = null;
	this.levelBuilt = null;
	this.situationLayer = null;
	this.fpsText = null;
	this.music = null;
	this.voDelayTimer = null;
};

EscapeTheSituation.level.prototype = {
	
	init: function(){
		this.levelIndex = EscapeTheSituation.gameState.currentLevel;
		if(this.levelIndex == 0){
			this.showInstructions = true;
		}else{
			this.showInstructions = false;
		}
		this.levelBuilt = false;
	},

	shutdown: function(){
		if(this.voDelayTimer != null){
			this.voDelayTimer.destroy();
		}
		if(this.situationLayer != null){
			this.situationLayer.destroy();
		}
		this.coinCounterText.destroy();
		this.coinCounter.destroy();
		this.chosenDoor = null;
		this.doors.destroy();
		this.checkpoints.destroy();
		this.coins.destroy();
		this.player.destroy();
		this.backgroundLayer.destroy();
		this.turnaroundLayer.destroy();
		this.deathLayer.destroy();
		this.finishlineLayer.destroy();
		this.surfacesLayer.destroy();
		this.tileMap.destroy();
	},

	preload: function(){
	},

	create: function(){
		//console.log("create");
		this.stage.backgroundColor = etsSettings.game.defaults.backgroundColor;
		var background = this.add.sprite(etsSettings.game.defaults.background.x, etsSettings.game.defaults.background.y, etsSettings.game.defaults.background.key);
		background.fixedToCamera = true;

		this.buildLevel();

		//this.showSituationDialog();
		if(this.showInstructions){
			this.instructionIndex = 0;
			this.time.events.add(250, function(){ this.showInstruction(0) }, this);
		}else{
			this.startLevel();
		}
	},

	buildLevel: function(){
		if(!this.levelBuilt){
			this.initializeTileMap();
			this.initializeCoins();
			this.initializeDoors();
			this.initializeCheckpoints();
			this.initializeCheckpointProgress();
			this.initializeCoinCounter();
			this.initializePlayer();
			this.levelBuilt = true;

			if(this.logFPS){
				this.addFPSText();
				this.time.advancedTiming = true;
			}
		}
		//console.log(this.player.y + " / " + this.tileMap.heightInPixels);
	},

	render: function(){
		//console.log("render");
	},

	update: function(){
		if(this.levelBuilt){
			//console.log(this.player.y);
			this.physics.arcade.collide(this.player, this.surfacesLayer, this.playerOnSurface, null, this);
			this.physics.arcade.collide(this.player, this.deathLayer, this.playerOnDeath, null, this);
			this.physics.arcade.collide(this.player, this.turnaroundLayer, this.playerOnTurnaround, null, this);
			if(this.situationLayer != null){
				this.physics.arcade.collide(this.player, this.situationLayer, this.playerOnSituation, null, this);
			}
			if(this.finishlineLayer != null){
				this.physics.arcade.collide(this.player, this.finishlineLayer, this.playerOnFinishline, null, this);
			}
			this.physics.arcade.overlap(this.player, this.coins, this.playerOnCoin, null, this);
			this.physics.arcade.overlap(this.player, this.checkpoints, this.playerOnCheckpoint, null, this);

			if(this.chosenDoor != null){
				if(this.playerDirection == this.RIGHT && this.player.x >= (this.chosenDoor.x + (this.chosenDoor.width / 2)) || 
				   this.playerDirection == this.LEFT && this.player.x <= (this.chosenDoor.x + (this.chosenDoor.width / 2))){
					this.player.x = this.chosenDoor.x + (this.chosenDoor.width / 2);
					this.playerMode == "back";
					this.playerSpeed = 0;
					this.player.body.velocity.x = this.playerSpeed;
					this.player.animations.play('back');
					this.enterDoor();
					return;
				}
			}

			if(this.playerMode == "still"){
				this.playerSpeed = 0;
				this.player.body.velocity.x = this.playerSpeed;
				this.player.animations.play('still');
				return;
			}

			if(this.playerMode == "running" || this.playerMode == "jumping"){
				this.player.body.velocity.x = this.playerSpeed;
			}

			if(this.player.body.onFloor() && this.playerMode != "dying"){
				if(this.playerDirection == this.RIGHT){
					this.player.animations.play('run-right');
				}else{
					this.player.animations.play('run-left');
				}
				this.playerMode = "running";
			}else{
				if(this.playerMode == "running"){
					this.playerMode = "falling";
					if(this.playerDirection == this.RIGHT){
						this.player.animations.play('falling-right');
					}else{
						this.player.animations.play('falling-left');
					}
				}
			}

			if(this.player.y > this.tileMap.heightInPixels && this.playerMode != "dying"){
				this.playerOnDeath(this.player, this.deathLayer);
			}

			if(this.logFPS){
				this.fpsText.text = this.time.fps + " FPS";
			}
		}
	},

	initializeTileMap: function(){
		this.tileMap = this.add.tilemap(etsSettings.game.levels[this.levelIndex].tileMap.key);
		this.tileMap.addTilesetImage(etsSettings.game.levels[this.levelIndex].tileMap.tileSet, etsSettings.game.levels[this.levelIndex].tileMap.tileKey);

		this.surfacesLayer = this.tileMap.createLayer('surfaces');
		this.tileMap.setCollisionBetween(1, 100000, true, 'surfaces');
		this.surfacesLayer.resizeWorld();
		//console.log("surfaces");

		this.backgroundLayer = this.tileMap.createLayer('background');
		//this.tileMap.setCollisionBetween(1, 100000, true, 'background');
		//console.log("background");

		this.turnaroundLayer = this.tileMap.createLayer('turnaround');
		this.tileMap.setCollisionBetween(1, 100000, true, 'turnaround');
		//console.log("turnaround");

		this.deathLayer = this.tileMap.createLayer('death');
		this.tileMap.setCollisionBetween(1, 100000, true, 'death');
		//console.log("death");

		this.finishlineLayer = this.tileMap.createLayer('finishline');
		this.tileMap.setCollisionBetween(1, 100000, true, 'finishline');
		//console.log("finishline");

		this.initializeSituationLayer();
	},

	initializeSituationLayer: function(){
		if(this.removeSituationLayer){
			this.situationLayer = this.tileMap.createLayer('situation');
			this.tileMap.setCollisionBetween(1, 100000, true, 'situation');
			//console.log("situation");
		}
		
	},

	initializeCheckpoints: function(){
		this.checkpoints = this.add.group();
		this.checkpoints.enableBody = true;
		this.tileMap.createFromObjects("checkpoints", etsSettings.game.levels[this.levelIndex].objects.checkpointGID, etsSettings.textureKey, "sign-exc.png", true, false, this.checkpoints);
	},

	initializeCoins: function(){
		this.coinsCollected = 0;
		if(this.coins != null){
			this.coins.destroy();
		}
		this.coins = this.add.group();
		this.coins.enableBody = true;
		this.tileMap.createFromObjects("coins", etsSettings.game.levels[this.levelIndex].objects.coinGID, etsSettings.textureKey, "coin.png", true, false, this.coins);
		this.coinsPossible = this.coins.length;
	},

	initializeDoors: function(){
		if(this.doors != null){
			this.doors.destroy();
		}
		this.doors = this.add.group();
		this.doors.enableBody = false;
		this.tileMap.createFromObjects("doors", 2, etsSettings.textureKey, "door-closed.png", true, false, this.doors);
	},

	initializeCheckpointProgress: function(){
		if(etsSettings.game.levels[this.levelIndex].instructions){
			this.checkpointProgress = [];
			for (var i = 0; i < etsSettings.game.levels[this.levelIndex].instructions.length; i++) {
				this.checkpointProgress.push(false);
			};
		}
	},

	initializePlayer: function(){
		if(this.player != null){
			this.player.destroy();
		}
		this.player = this.add.sprite(etsSettings.game.levels[this.levelIndex].playerStartPosition.x, etsSettings.game.levels[this.levelIndex].playerStartPosition.y, etsSettings.game.defaults.player.key);
		this.player.anchor.x = this.player.anchor.y = 0.5;
		for (var i = 0; i < etsSettings.game.defaults.player.animations.length; i++) {
			this.player.animations.add(etsSettings.game.defaults.player.animations[i].key, 
									   etsSettings.game.defaults.player.animations[i].frames, 
									   etsSettings.game.defaults.player.animations[i].frameRate, 
									   etsSettings.game.defaults.player.animations[i].loop);
		};
		
		this.physics.arcade.enable(this.player);
		this.player.body.gravity.y = etsSettings.game.defaults.player.gravity;
		this.player.body.setSize(etsSettings.game.defaults.player.bodySize.width, 
			                     etsSettings.game.defaults.player.bodySize.height, 
			                     etsSettings.game.defaults.player.bodySize.xOffset, 
			                     etsSettings.game.defaults.player.bodySize.yOffset);
		this.camera.follow(this.player);
		this.playerMode = "still";
	},

	initializeCoinCounter: function(){
		this.coinCounter = this.add.group();
		this.coinCounter.fixedToCamera = true;
		var coinIcon = this.add.sprite(15, 15, etsSettings.textureKey, "coin-sm.png", this.coinCounter);

		var textStyle = {
			font: "Luckiest Guy", 
		 	fill: "#ffffff", 
		 	fontSize: 32,
		 	align: "left",
		 	wordWrap: false
		}
		this.coinCounterText = this.add.text(coinIcon.x + coinIcon.width + 5, 
								 coinIcon.y, 
			                    "x0", 
			                     textStyle,
			                     this.coinCounter);
	},

	showSituationDialog: function(){
		this.situationDialog = this.add.group();
		this.situationDialog.x = 0;
		this.situationDialog.y = 0;
		this.situationDialog.fixedToCamera = true;

		var scrim = this.add.graphics(0, 0, this.situationDialog);
		scrim.beginFill(0x000000, .5);
		scrim.drawRect(0, 0, 800, 600);
		scrim.endFill();

		var box = this.add.sprite(etsSettings.game.defaults.situation.dialogBox.x, etsSettings.game.defaults.situation.dialogBox.y, etsSettings.textureKey, etsSettings.game.defaults.situation.dialogBox.key, this.situationDialog);

		var titleStyle = { 
		 	font: etsSettings.game.defaults.situation.titleStyle.font, 
		 	fill: etsSettings.game.defaults.situation.titleStyle.fill, 
		 	fontSize: etsSettings.game.defaults.situation.titleStyle.size,
		 	align: "center",
		 	stroke: etsSettings.game.defaults.situation.titleStyle.stroke,
		 	strokeThickness: etsSettings.game.defaults.situation.titleStyle.strokeThickness
		};
		var title = this.add.text(box.x + (box.width / 2), 
								  box.y + etsSettings.game.levels[this.levelIndex].situation.titlePadding, 
			                      etsSettings.game.levels[this.levelIndex].situation.title, 
			                      titleStyle,
			                      this.situationDialog);
		title.anchor.x = 0.5;

		var descriptionStyle = {
			font: etsSettings.game.defaults.situation.descriptionStyle.font, 
		 	fill: etsSettings.game.defaults.situation.descriptionStyle.fill, 
		 	fontSize: etsSettings.game.defaults.situation.descriptionStyle.size,
		 	align: "center",
		 	wordWrap: true,
		 	wordWrapWidth: etsSettings.game.defaults.situation.descriptionStyle.wordWrapWidth
		}
		var description = this.add.text(box.x + (box.width / 2), 
								        box.y + etsSettings.game.levels[this.levelIndex].situation.descriptionPadding, 
			                     		etsSettings.game.levels[this.levelIndex].situation.description, 
			                            descriptionStyle,
			                            this.situationDialog);
		description.anchor.x = 0.5;

		var continueButton = this.add.button(etsSettings.game.defaults.situation.continueButton.x, 
				                             etsSettings.game.defaults.situation.continueButton.y, 
				                             etsSettings.textureKey, 
				                             null, 
				                             this, 
				                             etsSettings.game.defaults.situation.continueButton.overKey, 
				                             etsSettings.game.defaults.situation.continueButton.outKey, 
				                             etsSettings.game.defaults.situation.continueButton.downKey, 
				                             etsSettings.game.defaults.situation.continueButton.upKey,
				                             this.situationDialog);
		continueButton.onInputUp.addOnce(this.closeSituationDialog, this);

		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.situationAlert);
		this.stopMusic();
		this.playAudioOnDelay(etsSettings.game.audio.situationVoDelay, etsSettings.game.levels[this.levelIndex].situation.voKeyShort);
	},

	closeSituationDialog: function(){
		if(this.voDelayTimer != null){
			this.voDelayTimer.stop();
		}
		EscapeTheSituation.voSprite.stop();
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.buttonClick);
		this.startMusic();

		this.situationDialog.destroy();
		this.removeSituationLayer();
		this.startPlayer();

		/*if(this.showInstructions){
			this.instructionIndex = 0;
			this.showInstruction(0);
		}else{
			this.startLevel();
		}*/
	},

	startLevel: function(){
		//console.log("startlevel");
		//this.startMusic();
		//this.input.onTap.addOnce(this.startPlayer, this);
		this.playerDirection = this.RIGHT;
		this.input.onDown.addOnce(this.startPlayer, this);
	},

	startMusic: function(){
		//console.log("startMusic");
		if(this.music == null){
			this.music = EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.music);
			//this.music.onLoop.add(function(){console.log("loop")}, this);
		}
	},

	stopMusic: function(){
		if(this.music != null){
			this.music.stop();
			this.music = null;
		}
	},

	showInstruction: function(index){
		this.instructionDialog = this.add.group();
		this.instructionDialog.x = 0;
		this.instructionDialog.y = 0;
		this.instructionDialog.fixedToCamera = true;

		var scrim = this.add.graphics(0, 0, this.instructionDialog);
		scrim.beginFill(0x000000, .5);
		scrim.drawRect(0, 0, 800, 600);
		scrim.endFill();

		var box = this.add.sprite(etsSettings.game.levels[this.levelIndex].instructions[index].dialogBox.x, 
			                      etsSettings.game.levels[this.levelIndex].instructions[index].dialogBox.y, 
			                      etsSettings.textureKey, 
			                      etsSettings.game.levels[this.levelIndex].instructions[index].dialogBox.key, 
			                      this.instructionDialog);

		var messageStyle = {
			font: etsSettings.game.defaults.instructions.messageStyle.font, 
		 	fill: etsSettings.game.defaults.instructions.messageStyle.fill, 
		 	fontSize: etsSettings.game.defaults.instructions.messageStyle.size,
		 	align: "center",
		 	wordWrap: true,
		 	wordWrapWidth: etsSettings.game.defaults.instructions.messageStyle.wordWrapWidth
		}
		var message = this.add.text(box.x + (box.width / 2), 
								    box.y + etsSettings.game.levels[this.levelIndex].instructions[index].message.padding, 
			                     	etsSettings.game.levels[this.levelIndex].instructions[index].message.text, 
			                        messageStyle,
			                        this.instructionDialog);
		message.anchor.x = 0.5;

		var continueButton = this.add.button(etsSettings.game.defaults.instructions.continueButton.x, 
				                             etsSettings.game.defaults.instructions.continueButton.y, 
				                             etsSettings.textureKey, 
				                             null, 
				                             this, 
				                             etsSettings.game.defaults.instructions.continueButton.overKey, 
				                             etsSettings.game.defaults.instructions.continueButton.outKey, 
				                             etsSettings.game.defaults.instructions.continueButton.downKey, 
				                             etsSettings.game.defaults.instructions.continueButton.upKey,
				                             this.instructionDialog);
		continueButton.onInputUp.addOnce(this.closeInstruction, this, 0, index);

		this.stopMusic();
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.instructionAlert);
		this.playAudioOnDelay(etsSettings.game.audio.instructionVoDelay, etsSettings.game.levels[this.levelIndex].instructions[index].message.voKey);
	},

	closeInstruction: function(button, arg1, arg2, index){
		if(this.voDelayTimer != null){
			this.voDelayTimer.stop();
		}
		EscapeTheSituation.voSprite.stop();
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.buttonClick);

		this.instructionDialog.destroy();
		if(index == 0){
			this.startLevel();
		}else{
			this.startPlayer();
			//this.startMusic();
		}
		
	},

	playAudioOnDelay: function(delay, audio){
		this.voDelayTimer = this.time.create();
		this.voDelayTimer.add(delay, function(){
			EscapeTheSituation.voSprite.play(audio);
		}, this);
		this.voDelayTimer.start();
	},

	startPlayer: function(){
		if(this.playerDirection == null){
			this.playerDirection = this.RIGHT;
		}
		if(this.playerSpeed == null){
			this.playerSpeed = etsSettings.game.defaults.player.speed;
		}else{
			if(this.playerSpeed == 0){
				if(this.playerDirection == this.RIGHT){
					this.playerSpeed = etsSettings.game.defaults.player.speed;
				}else{
					if(this.playerDirection == this.LEFT){
						this.playerSpeed = -etsSettings.game.defaults.player.speed;
					}
				}
			}
		}
		this.playerMode = "running";
		//this.input.onTap.add(this.onTap, this);
		this.input.onDown.add(this.onTap, this);
		this.startMusic();
	},

	render: function(){
		if(this.debug){
			if(this.player){
				this.game.debug.body(this.player);
			}
		}
	},

	onTap: function(){
		if(this.playerMode == "running"){
			this.jump();
		}
	},

	playerOnSurface: function(player, layer){
	},

	playerOnDeath: function(player, layer){
		this.camera.unfollow();
		this.playerMode = "dying";
		this.player.body.enable = false;
		this.player.animations.play('death-up');

		var riseDistance = 200;
		var riseTime = 600;
		var tweenUp = this.add.tween(this.player).to( { y: this.player.y - riseDistance }, riseTime, Phaser.Easing.Cubic.Out);
		var dropTarget = this.camera.bounds.y + this.camera.bounds.height + this.player.height;
		var dropDistance = dropTarget - this.player.y;
		var dropTime = 600;
		var tweenDown = this.add.tween(this.player).to( { y: dropTarget }, dropTime, Phaser.Easing.Cubic.In);
		tweenUp.onComplete.add(this.deathHalf, this);
		tweenDown.onComplete.add(this.deathComplete, this);
		tweenUp.chain(tweenDown);
		tweenUp.start();

		this.stopMusic();
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.die);
	},

	deathHalf: function(){
		this.player.animations.play('death-down');
	},

	deathComplete: function(){
		this.showGameOver();
	},

	showGameOver: function(){
		this.gameOverDialog = this.add.group();
		this.gameOverDialog.x = 0;
		this.gameOverDialog.y = 0;
		this.gameOverDialog.fixedToCamera = true;

		var scrim = this.add.graphics(0, 0, this.gameOverDialog);
		scrim.beginFill(0x000000, .5);
		scrim.drawRect(0, 0, 800, 600);
		scrim.endFill();

		var box = this.add.sprite(etsSettings.game.defaults.gameOver.dialogBox.x, 
			                      etsSettings.game.defaults.gameOver.dialogBox.y, 
			                      etsSettings.textureKey, 
			                      etsSettings.game.defaults.gameOver.dialogBox.key, 
			                      this.gameOverDialog);

		var messageStyle = {
			font: etsSettings.game.defaults.gameOver.messageStyle.font, 
		 	fill: etsSettings.game.defaults.gameOver.messageStyle.fill, 
		 	fontSize: etsSettings.game.defaults.gameOver.messageStyle.size,
		 	align: "center"
		}
		var message = this.add.text(box.x + (box.width / 2), 
								    box.y + etsSettings.game.defaults.gameOver.message.padding, 
			                     	etsSettings.game.defaults.gameOver.message.text, 
			                        messageStyle,
			                        this.gameOverDialog);
		message.anchor.x = 0.5;

		var backButton = this.add.button(etsSettings.game.defaults.gameOver.backButton.x, 
				                             etsSettings.game.defaults.gameOver.backButton.y, 
				                             etsSettings.textureKey, 
				                             null, 
				                             this, 
				                             etsSettings.game.defaults.gameOver.backButton.overKey, 
				                             etsSettings.game.defaults.gameOver.backButton.outKey, 
				                             etsSettings.game.defaults.gameOver.backButton.downKey, 
				                             etsSettings.game.defaults.gameOver.backButton.upKey,
				                             this.gameOverDialog);
		backButton.onInputUp.addOnce(this.handleMapButtonClick, this);
		var replayButton = this.add.button(etsSettings.game.defaults.gameOver.replayButton.x, 
				                             etsSettings.game.defaults.gameOver.replayButton.y, 
				                             etsSettings.textureKey, 
				                             null, 
				                             this, 
				                             etsSettings.game.defaults.gameOver.replayButton.overKey, 
				                             etsSettings.game.defaults.gameOver.replayButton.outKey, 
				                             etsSettings.game.defaults.gameOver.replayButton.downKey, 
				                             etsSettings.game.defaults.gameOver.replayButton.upKey,
				                             this.gameOverDialog);
		replayButton.onInputUp.addOnce(this.replayLevel, this);
	},

	handleMapButtonClick: function(){
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.buttonClick);
		this.navigateToMap();
	},

	navigateToMap: function(){
		this.state.start('map');
	},

	replayLevel: function(){
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.buttonClick);
		this.closeGameOver();
		this.initializePlayer();
		this.initializeCoins();
		this.coinCounterText.text = "x0";
		this.initializeCheckpointProgress();
		this.initializeSituationLayer();
		this.startLevel();
	},

	closeGameOver: function(){
		this.gameOverDialog.destroy();
	},

	playerOnTurnaround: function(player, layer){
		if(this.player.body.onWall()){
			this.playerSpeed = -this.playerSpeed;
			this.playerDirection = -this.playerDirection;
			if(this.playerMode == "jumping"){
				if(this.playerDirection == this.RIGHT){
					this.player.animations.play('jump-right');
				}else{
					this.player.animations.play('jump-left');
				}
			}
			EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.wall);
		}
	},

	playerOnCoin: function(player, object){
		object.destroy();
		this.coinsCollected++;
		//console.log(this.coinsCollected + "/" + this.coinsPossible + " coins");
		this.coinCounterText.text = "x" + this.coinsCollected;
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.coin);
	},

	playerOnCheckpoint: function(player, layer){
		var spriteIndex = this.checkpoints.getChildIndex(layer);
		var instructionIndex = 0;
		for (var i = 0; i < etsSettings.game.levels[this.levelIndex].instructions.length; i++) {
			if(etsSettings.game.levels[this.levelIndex].instructions[i].checkpointSpriteIndex == spriteIndex){
				instructionIndex = i;
				break;
			}
		};
		//console.log("at sprite " + spriteIndex + " instruction " + instructionIndex);
		if(this.checkpointProgress[instructionIndex] == false){
			// stop for this instruction
			this.playerMode = "still";
			this.showInstruction(instructionIndex);
			this.checkpointProgress[instructionIndex] = true;
		}
		//this.playerMode = "still";
	},

	playerOnSituation: function(player, layer){
		this.playerMode = "still";
		this.showSituationDialog();
	},

	removeSituationLayer: function(){
		this.situationLayer.destroy();
	},

	playerOnFinishline: function(player, layer){
		this.playerMode = "still";
		this.showEndSituation();
	},

	showEndSituation: function(){
		this.situationDialog = this.add.group();
		this.situationDialog.x = 0;
		this.situationDialog.y = 0;
		this.situationDialog.fixedToCamera = true;

		var scrim = this.add.graphics(0, 0, this.situationDialog);
		scrim.beginFill(0x000000, .5);
		scrim.drawRect(0, 0, 800, 600);
		scrim.endFill();

		var box = this.add.sprite(etsSettings.game.defaults.levelEnd.dialogBox.x, 
			                      etsSettings.game.defaults.levelEnd.dialogBox.y, 
			                      etsSettings.textureKey, 
			                      etsSettings.game.defaults.levelEnd.dialogBox.key, 
			                      this.situationDialog);

		var descriptionStyle = {
			font: etsSettings.game.defaults.levelEnd.descriptionStyle.font, 
		 	fill: etsSettings.game.defaults.levelEnd.descriptionStyle.fill, 
		 	fontSize: etsSettings.game.defaults.levelEnd.descriptionStyle.size,
		 	align: "left",
		 	wordWrap: true,
		 	wordWrapWidth: etsSettings.game.defaults.levelEnd.descriptionStyle.wordWrapWidth
		}
		var description = this.add.text(box.x + 25, 
								        box.y + 20, 
			                     		etsSettings.game.levels[this.levelIndex].situation.description, 
			                            descriptionStyle,
			                            this.situationDialog);

		var optionStyle = {
			font: etsSettings.game.defaults.levelEnd.optionStyle.font, 
		 	fill: etsSettings.game.defaults.levelEnd.optionStyle.fill, 
		 	fontSize: etsSettings.game.defaults.levelEnd.optionStyle.size,
		 	align: "left",
		 	wordWrap: false
		}
		for (var i = 0; i < etsSettings.game.levels[this.levelIndex].situation.options.length; i++) {
			this.add.text(box.x + 100, 
					      box.y + 160 + (i*35), 
			                     		    etsSettings.game.levels[this.levelIndex].situation.options[i], 
			                            	optionStyle,
			                            	this.situationDialog);
			var btn = this.add.button(box.x + 60, 
				            box.y + 156 + (i*35), 
				            etsSettings.textureKey, 
				            null, 
				            this, 
				            etsSettings.game.defaults.levelEnd.optionButtons[i].overKey, 
				            etsSettings.game.defaults.levelEnd.optionButtons[i].outKey, 
				            etsSettings.game.defaults.levelEnd.optionButtons[i].downKey, 
				            etsSettings.game.defaults.levelEnd.optionButtons[i].upKey,
				            this.situationDialog);
			btn.onInputUp.addOnce(this.handleSituationOption, this, 0, i);
		};
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.situationAlert);
		this.stopMusic();
		this.playAudioOnDelay(etsSettings.game.audio.situationVoDelay, etsSettings.game.levels[this.levelIndex].situation.voKeyLong);
	},

	handleSituationOption: function(button, arg1, arg2, index){
		if(this.voDelayTimer != null){
			this.voDelayTimer.stop();
		}
		EscapeTheSituation.voSprite.stop();
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.buttonClick);
		this.situationDialog.destroy();

		this.chosenDoor = this.doors.getAt(index);
		this.chosenDoor.loadTexture(etsSettings.textureKey, "door-open.png", true);

		this.removeFinishline();

		this.time.events.add(500, this.startPlayer, this);
	},

	removeFinishline: function(){
		this.finishlineLayer.destroy();
	},

	enterDoor: function(){
		if(this.player.alpha == 1){
			var tween = this.add.tween(this.player).to( { alpha: 0 }, 500, "Linear", true, 250);
			tween.onComplete.add(this.endLevel, this);
			EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.door);
			this.stopMusic();
		}
	},

	endLevel: function(){
		var score = this.coinsCollected / this.coinsPossible;
		var stars = 0;
		if(score == 1){
			stars = 3;
		}else{
			if(score > 0.5){
				stars = 2;
			}else{
				if(score > 0){
					stars = 1;
				}
			}
		}
		if(EscapeTheSituation.gameState.progress[this.levelIndex] < stars){
			EscapeTheSituation.gameState.progress[this.levelIndex] = stars;
			if(etsSettings.scormEnabled){
				SCORM_API_adapter.setSuspendData(EscapeTheSituation.gameState.progress.join(","));
			}
		}
		if(etsSettings.scormEnabled){
			SCORM_API_adapter.markComplete();
		}
		this.time.events.add(1000, this.navigateToMap, this);
	},

	jump: function(){
		EscapeTheSituation.sfxSprite.play(etsSettings.game.audio.jump);
		this.player.body.velocity.y = -700;
		this.playerMode = "jumping";
		if(this.playerDirection == this.RIGHT){
			this.player.animations.play('jump-right');
		}else{
			this.player.animations.play('jump-left');
		}
	},

	addFPSText: function(){
		var textStyle = {
			font: "Arial, sans", 
		 	fill: "#ffffff", 
		 	fontSize: 24,
		 	align: "left",
		 	wordWrap: false
		}
		this.fpsText = this.add.text(10, 
								     550, 
			                         "FPS", 
			                         textStyle);
		this.fpsText.fixedToCamera = true;
	}

};