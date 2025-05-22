(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");
	//var game = new Phaser.Game(800, 600, Phaser.CANVAS, "game");

	game.state.add("Boot", DodgingRisks.boot);
	game.state.add("Preload", DodgingRisks.preload);
	game.state.add("Splash", DodgingRisks.splash);
	game.state.add("Instructions", DodgingRisks.instructions);
	game.state.add("Ready", DodgingRisks.ready);
	game.state.add("DodgeBall", DodgingRisks.dodgeball);
	game.state.add("GameOver", DodgingRisks.gameOver);
	game.state.start("Boot");
	
})()