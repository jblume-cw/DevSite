Get60.game = function(game){
	this.dayCount = null;
	this.dayCountText = null;
	this.grid = null; // grid[column][row]
	this.debugGrid = null;
	this.consecutiveScoringDrops = null;
	this.activeTile = null;
	this.activeTileDropTimer = null;
	this.tapBinding = null;
};

Get60.game.prototype = {
	
	init: function(step){
		this.dayCount = 0;
		this.grid = [];
		for (var c = 0; c < Get60Settings.game.grid.columns; c++) {
			this.grid.push([]);
			for (var r = 0; r < Get60Settings.game.grid.rows; r++) {
				this.grid[c].push(null);
			}
		}
		this.consecutiveScoringDrops = Get60Settings.game.interferenceDropInterval;
	},

	create: function(){
		for (var i = 0; i < Get60Settings.game.backgroundElements.length; i++) {
			Get60.addImage(Get60Settings.game.backgroundElements[i], this);
		}
		Get60.addText(Get60Settings.game.title, this);
		Get60.addRect(Get60Settings.game.box, this);
		this.dayCountText = Get60.addText(Get60Settings.game.daysOfExercise, this, this.dayCount);

		this.prePopulateGrid();

		this.startGame();
	},

	update: function(){
		/*if(this.debugGrid == null){
			this.debugGrid = Get60.addText(Get60Settings.game.debugGrid, this);
		}else{
			var str = "";
			for (var r = Get60Settings.game.grid.rows - 1; r >= 0; r--) {
				for (var c = 0; c < Get60Settings.game.grid.columns; c++) {
					if(this.grid[c][r] == null){
						str += "-- ";
					}else{
						if(this.grid[c][r].data.type == "interference"){
							str += "xx ";
						}else{
							str += this.grid[c][r].data.value + " ";
						}
					}
				}
				str += "\n";
			}
			this.debugGrid.text = str;
		}*/
	},

	startGame: function(){
		this.newDrop();
		Get60.beginLoop(Get60Settings.gameLoop);
	},

	newDrop: function(){
		if(this.checkGameOver()){
			this.handleGameOver();
			return;
		}
		if(this.consecutiveScoringDrops < Get60Settings.game.interferenceDropInterval){
			this.dropScoringTile();
			this.consecutiveScoringDrops++;
		}else{
			var omitColumns = [];
			for (var i = 0; i < Get60Settings.game.interferenceDropCount; i++) {
				var newColumn = this.dropInterference(omitColumns);
				omitColumns.push(newColumn);
			}
			this.consecutiveScoringDrops = 0;
			var timer = this.time.create(true);
			timer.add(Get60Settings.game.interferenceDropDuration + Get60Settings.game.interferenceMaxDelay, this.newDrop, this);
			timer.start();
		}
	},

	dropInterference: function(omitColumns){
		var column = this.getRandomColumn();
		while(omitColumns.indexOf(column) != -1){
			column = this.getRandomColumn();
		}
		var tile = this.getInterferenceTile();
		tile.data.column = column;
		var tilesInColumn = this.getTileCountInColumn(column);
		tile.data.row = tilesInColumn;
		var dropToY = Get60Settings.game.grid.origin.y - (Get60Settings.game.grid.cellSize.height * (tilesInColumn + 1));

		tile.x = Get60Settings.game.grid.origin.x + (Get60Settings.game.grid.cellSize.width * column);
		tile.y = -Get60Settings.game.grid.cellSize.height;
		var delay = Math.random() * Get60Settings.game.interferenceMaxDelay;
		this.add.tween(tile).to( { y: dropToY }, Get60Settings.game.interferenceDropDuration, Phaser.Easing.Bounce.Out, true, delay);
		this.grid[column][tilesInColumn] = tile;

		//Get60.soundSprite.play(Get60Settings.game.interferenceDropAudio);

		return column;
	},

	getRandomColumn: function(){
		return Math.floor(Math.random() * Get60Settings.game.grid.columns);
	},

	getInterferenceTile: function(){
		var index = Math.floor(Math.random() * Get60Settings.game.interferenceTiles.length);
		var tile =  Get60.addImage(Get60Settings.game.interferenceTiles[index], this);
		tile.data = {
			value: 0,
			type: "interference",
			row: 0,
			column: 0
		}
		return tile;
	},

	getTileCountInColumn: function(column){
		var count = 0;
		for (var i = this.grid[column].length - 1; i >= 0; i--) {
			if(this.grid[column][i] != null){
				count++;
			}
		}
		return count;
	},

	dropScoringTile: function(){
		this.activeTile = this.getScoringTile();
		this.grid[this.activeTile.data.column][this.activeTile.data.row] = this.activeTile;
		this.positionScoringTile(this.activeTile);

		this.activeTileDropTimer = this.time.create(true);
		this.activeTileDropTimer.loop(Get60Settings.game.activeTileDropInterval, this.incrementActiveTileDrop, this);
		this.activeTileDropTimer.start();

		this.enableTap();
	},

	getScoringTile: function(){
		var index = Math.floor(Math.random() * Get60Settings.game.scoringTiles.length);
		var tile = Get60.addImage(Get60Settings.game.scoringTiles[index], this);
		tile.data = {
			value: Get60Settings.game.scoringTiles[index].value,
			type: "scoring",
			row: Get60Settings.game.grid.rows - 1,
			column: Get60Settings.game.activeTileStartColumn
		}
		return tile;
	},

	positionScoringTile: function(tile){
		tile.x = Get60Settings.game.grid.origin.x + (tile.data.column * Get60Settings.game.grid.cellSize.width);
		tile.y = Get60Settings.game.grid.origin.y - ((tile.data.row + 1) * Get60Settings.game.grid.cellSize.height);
	},

	incrementActiveTileDrop: function(){
		this.nudgeActiveTile("down");
		//Get60.soundSprite.play(Get60Settings.game.activeTileDropAudio);
	},

	nudgeActiveTile: function(direction){
		var tileHolder = this.grid[this.activeTile.data.column].splice(this.activeTile.data.row, 1, null)[0];
		switch(direction){
			case "down":
				tileHolder.data.row--;
				break;
			case "left":
				tileHolder.data.column--;
				break;
			case "right":
				tileHolder.data.column++;
				break;
		}
		this.grid[tileHolder.data.column][tileHolder.data.row] = tileHolder;
		this.positionScoringTile(tileHolder);
		this.activeTile = tileHolder

		if(!this.isCellEmpty(this.activeTile.data.column, this.activeTile.data.row - 1)){
			this.stopActiveTileDrop();
		}
	},

	/*isCellBelowOccupied: function(column, row){
		if(row > 0){
			if(this.grid[column][row - 1] == null){
				return false;
			}else{
				return true;
			}
		}else{
			return true;
		}
	},*/

	isCellEmpty: function(column, row){
		if(column < 0 || column >= Get60Settings.game.grid.columns || row < 0 || row >= Get60Settings.game.grid.rows || this.grid[column][row] != null){
			return false;
		}else{
			return true;
		}
	},

	stopActiveTileDrop: function(){
		this.activeTileDropTimer.stop();
		this.disableTap();
		this.handleMatches(this.activeTile.data.column, this.activeTile.data.row);
	},

	enableTap: function(){
		this.tapBinding = this.input.onTap.add(this.moveActiveTile, this);
	},

	moveActiveTile: function(pointer){
		if(pointer.x < this.activeTile.x){
			if(this.isCellEmpty(this.activeTile.data.column - 1, this.activeTile.data.row)){
				this.nudgeActiveTile("left");
			}
		}else{
			if(pointer.x > this.activeTile.x + this.activeTile.width){
				if(this.isCellEmpty(this.activeTile.data.column + 1, this.activeTile.data.row)){
					this.nudgeActiveTile("right");
				}
			}
		}
	},

	disableTap: function(){
		this.tapBinding.detach();
	},

	handleMatches: function(column, row){
		// remove matches
		var columnMatch = this.checkColumnMatch(column);
		var rowMatch = this.checkRowMatch(row);
		
		if(columnMatch){
			this.clearColumn(column);
		}

		if(rowMatch){
			this.clearRow(row);
		}

		/*if(columnMatch || rowMatch){
			this.time.events.add(Get60Settings.game.tileDestroyDruation, this.newDrop, this);
		}else{
			this.newDrop();
		}*/
		/*if(rowMatch){
			this.time.events.add(Get60Settings.game.tileDestroyDruation, this.collapseGrid, this);
		}else{
			if(columnMatch){
				this.time.events.add(Get60Settings.game.tileDestroyDruation, this.newDrop, this);
			}else{
				this.newDrop();
			}
		}*/

		if(rowMatch){
			this.time.events.add(Get60Settings.game.tileDestroyDruation, this.collapseGrid, this);
		}
		if(columnMatch && !rowMatch){
			this.time.events.add(Get60Settings.game.tileDestroyDruation, this.newDrop, this);
		}
		if(!columnMatch && !rowMatch){
			this.newDrop();
		}
		
	},

	checkColumnMatch: function(column){
		var consecutiveTally = 0;
		for (var i = 0; i < this.grid[column].length; i++) {
			if(this.grid[column][i] != null){
				if(this.grid[column][i].data.value > 0){
					consecutiveTally += this.grid[column][i].data.value;
					if(consecutiveTally >= Get60Settings.game.targetTotal){
						return true;
					}
				}else{
					consecutiveTally = 0;
				}
			}
		}
		return false;
	},

	checkRowMatch: function(row){
		var consecutiveTally = 0;
		for (var i = 0; i < this.grid.length; i++) {
			if(this.grid[i][row] != null){
				if(this.grid[i][row].data.value > 0){
					consecutiveTally += this.grid[i][row].data.value;
					if(consecutiveTally >= Get60Settings.game.targetTotal){
						return true;
					}
				}else{
					consecutiveTally = 0;
				}
			}else{
				consecutiveTally = 0;
			}
		}
		return false;
	},

	clearColumn: function(column){
		for (var i = 0; i < this.grid[column].length; i++) {
			if(this.grid[column][i] != null){
				this.clearTile(column, i);
			}
		}
		this.incrementScore(1);
		Get60.soundSprite.play(Get60Settings.game.lineClearAudio);
	},

	clearTile: function(column, row){
		var tile = this.grid[column].splice(row, 1, null)[0];
		var tween = this.add.tween(tile).to( { alpha: 0 }, Get60Settings.game.tileDestroyDruation, Phaser.Easing.Sinusoidal.In, true);
		tween.onComplete.add(
			function(target){
				target.destroy();
			}, this
		);
	},

	clearRow: function(row){
		for (var i = 0; i < this.grid.length; i++) {
			if(this.grid[i][row] != null){
				this.clearTile(i, row);
			}
		}
		this.incrementScore(1);
		Get60.soundSprite.play(Get60Settings.game.lineClearAudio);
	},

	incrementScore: function(amount){
		this.dayCount += amount;
		this.dayCountText.text = this.dayCount;
	},

	collapseGrid: function(){
		var largestGap = 0;
		for (var c = 0; c < this.grid.length; c++) {
			var gap = 0;
			var droppers = [];
			for (var r = 0; r < this.grid[c].length; r++) {
				if(this.grid[c][r] == null){
					if(droppers.length == 0){
						gap++;
					}
				}else{
					if(gap > 0){
						droppers.push(this.grid[c][r]);
					}
				}
			}
			for (var i = 0; i < droppers.length; i++) {
				this.collapseDropTile(droppers[i].data.column, droppers[i].data.row, gap);
			}
			if(droppers.length > 0 && gap > largestGap){
				largestGap = gap;
			}
		}

		this.time.events.add(Get60Settings.game.collapseDropDurationPerCell * largestGap, this.scanGridFormatches, this);
	},

	collapseDropTile: function(column, row, cells){
		var tile = this.grid[column].splice(row, 1, null)[0];
		this.grid[column][row - cells] = tile;
		tile.data.row -= cells;

		this.add.tween(tile).to( { y: tile.y + (cells * Get60Settings.game.grid.cellSize.height) }, Get60Settings.game.collapseDropDurationPerCell * cells, Phaser.Easing.Bounce.Out, true);
	},

	scanGridFormatches: function(){
		var clearColumns = [];
		for (var c = 0; c < this.grid.length; c++) {
			if(this.checkColumnMatch(c)){
				clearColumns.push(c);
			}
		}
		var clearRows = [];
		for (var r = 0; r < this.grid[0].length; r++) {
			if(this.checkRowMatch(r)){
				clearRows.push(r);
			}
		}

		if(clearRows.length > 0){
			for (i = 0; i < clearRows.length; i++) {
				this.clearRow(clearRows[i]);
			}
			this.time.events.add(Get60Settings.game.tileDestroyDruation, this.collapseGrid, this);
		}
		if(clearColumns.length > 0 && clearRows.length == 0){
			for (var i = 0; i < clearColumns.length; i++) {
				this.clearColumn(clearColumns[i]);
			}
			this.time.events.add(Get60Settings.game.tileDestroyDruation, this.newDrop, this);
		}
		if(clearRows.length == 0 && clearColumns.length == 0){
			this.newDrop();
		}
	},

	checkGameOver: function(){
		var gameOver = false;
		for (var i = 0; i < this.grid.length; i++) {
			if(this.grid[i][Get60Settings.game.grid.gameOverRow] != null){
				gameOver = true;
				break;
			}
		}
		/*if(gameOver){
			this.handleGameOver();
		}else{
			this.newDrop();
		}*/
		return gameOver;
	},

	handleGameOver: function(){
		var screen = Get60.addRect(Get60Settings.game.gameOver.screen, this);
		var text = Get60.addText(Get60Settings.game.gameOver.gameOverText, this);

		this.add.tween(screen).to( { y: screen.y + Get60Settings.game.gameOver.screen.dropDistance }, Get60Settings.game.gameOver.screen.dropDuration, Phaser.Easing.Bounce.Out, true, Get60Settings.game.gameOver.screen.dropDelay);
		this.add.tween(text).to( { y: text.y + Get60Settings.game.gameOver.gameOverText.dropDistance }, Get60Settings.game.gameOver.gameOverText.dropDuration, Phaser.Easing.Bounce.Out, true, Get60Settings.game.gameOver.gameOverText.dropDelay);

		this.time.events.add(Get60Settings.game.gameOver.screen.dropDuration, this.addGameOverButtons, this);

		Get60.stopLoop();
		Get60.soundSprite.play(Get60Settings.game.gameOver.audio);
	},

	addGameOverButtons: function(){
		Get60.addButton(Get60Settings.game.gameOver.playAgainButton, this.handlePlayAgain, this);
		Get60.addButton(Get60Settings.game.gameOver.instructionsButton, this.handleInstructions, this);

		this.storeHighScore();
	},

	storeHighScore: function(){
		if(Get60Settings.scormEnabled){
			var sd = SCORM_API_adapter.getSuspendData();
			if(sd == "" || sd == null){
				SCORM_API_adapter.setSuspendData(this.dayCount);
			}else{
				var storedScore = Number(sd);
				if(Number(this.dayCount) > storedScore){
					SCORM_API_adapter.setSuspendData(this.dayCount);
				}
			}
		}
	},

	handlePlayAgain: function(){
		this.state.start('game');
	},

	handleInstructions: function(){
		this.state.start('instructions', true, false, 0);
	},

	prePopulateGrid: function(){

	}
}