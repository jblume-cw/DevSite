(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

	game.state.add("boot", RoadTrip.boot);
	game.state.add("preloader", RoadTrip.preloader);
	game.state.add("splash", RoadTrip.splash);
	game.state.add("howToPlay", RoadTrip.howToPlay);
	game.state.add("options", RoadTrip.options);
	game.state.add("map", RoadTrip.map);
	game.state.add("question", RoadTrip.question);

	game.state.start("boot");
	
})()