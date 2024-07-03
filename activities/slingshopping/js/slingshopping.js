(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

	game.state.add("boot", Slingshopping.boot);
	game.state.add("preloader", Slingshopping.preloader);
	game.state.add("instructions", Slingshopping.instructions);
	game.state.add("levelIntro", Slingshopping.levelIntro);
	game.state.add("game", Slingshopping.game);
	game.state.start("boot");
	
})()