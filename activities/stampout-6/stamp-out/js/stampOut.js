(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

	game.state.add("boot", StampOut.boot);
	game.state.add("preloader", StampOut.preloader);
	game.state.add("splash", StampOut.splash);
	game.state.add("instructions", StampOut.instructions);
	game.state.add("spinner", StampOut.spinner);
	game.state.add("question", StampOut.question);
	game.state.add("topicSelection", StampOut.topicSelection);
	game.state.add("topicWin", StampOut.topicWin);
	game.state.add("powerUpSelection", StampOut.powerUpSelection);
	game.state.start("boot");
	
})()