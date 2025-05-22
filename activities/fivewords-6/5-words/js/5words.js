(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

	game.state.add("boot", FiveWords.boot);
	game.state.add("preloader", FiveWords.preloader);
	game.state.add("splash", FiveWords.splash);
	game.state.add("game", FiveWords.game);
	game.state.start("boot");
	
})()