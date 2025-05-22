(function(){
	var game = new Phaser.Game(800, 600, Phaser.CANVAS, "game");

	game.state.add("boot", EscapeTheSituation.boot);
	game.state.add("preloader", EscapeTheSituation.preloader);
	game.state.add("splash", EscapeTheSituation.splash);
	game.state.add("map", EscapeTheSituation.map);
	game.state.add("level", EscapeTheSituation.level);
	game.state.add("levelLoader", EscapeTheSituation.levelLoader);
	game.state.start("boot");
	
})()