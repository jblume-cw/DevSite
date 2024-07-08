(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

	game.state.add("boot", Millionaire.boot);
	game.state.add("preloader", Millionaire.preloader);
	game.state.add("instructions", Millionaire.instructions);
	game.state.add("question", Millionaire.question);
	game.state.add("gameOver", Millionaire.gameOver);
	game.state.start("boot");
	
})()