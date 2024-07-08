(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

	game.state.add("boot", Get60.boot);
	game.state.add("preloader", Get60.preloader);
	game.state.add("splash", Get60.splash);
	game.state.add("instructions", Get60.instructions);
	game.state.add("game", Get60.game);
	game.state.start("boot");
	
})()