(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

	game.state.add("boot", StrikeItFit.boot);
	game.state.add("preloader", StrikeItFit.preloader);
	game.state.add("splash", StrikeItFit.splash);
	game.state.add("instructions", StrikeItFit.instructions);
	game.state.add("initials", StrikeItFit.initials);
	game.state.add("question", StrikeItFit.question);
	game.state.add("lane", StrikeItFit.lane);
	game.state.add("gameOver", StrikeItFit.gameOver);
	game.state.start("boot");
	
})()