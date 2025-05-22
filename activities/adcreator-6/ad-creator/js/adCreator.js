(function(){
	var game = new Phaser.Game(800, 600, Phaser.CANVAS, "game"); //Print function only works in CANVAS mode

	game.state.add("boot", AdCreator.boot);
	game.state.add("preloader", AdCreator.preloader);
	game.state.add("splash", AdCreator.splash);
	game.state.add("creator", AdCreator.creator);
	game.state.start("boot");
	
})()