RoadTrip.options = function(game){
	this.vehicleSelectors = null;
	this.destinationSelectors = null;
};

RoadTrip.options.prototype = {
	
	init: function(){
		RoadTrip.vehicleIndex = 0;
		RoadTrip.destinationIndex = 0;
		this.vehicleSelectors = [];
		this.destinationSelectors = [];
	},

	create: function(){
		this.add.sprite(roadTripSettings.options.background.x, 
						roadTripSettings.options.background.y, 
						roadTripSettings.textureKey, 
						roadTripSettings.options.background.key);

		var vehiclesText = this.add.text(roadTripSettings.options.vehicles.heading.x, 
								 		 roadTripSettings.options.vehicles.heading.y, 
								 		 roadTripSettings.options.vehicles.heading.text);
		vehiclesText.font = roadTripSettings.options.vehicles.heading.font;
		vehiclesText.fill = roadTripSettings.options.vehicles.heading.fill;
		vehiclesText.fontSize = roadTripSettings.options.vehicles.heading.size;
		vehiclesText.wordWrapWidth = roadTripSettings.options.vehicles.heading.width;
		vehiclesText.wordWrap = true;
		vehiclesText.anchor.x = 0.5;

		for (var i = 0; i < roadTripSettings.options.vehicles.selectors.length; i++) {
			var button = this.add.button(roadTripSettings.options.vehicles.selectors[i].x, 
							roadTripSettings.options.vehicles.selectors[i].y, 
							roadTripSettings.textureKey, 
							null, 
							this, 
							roadTripSettings.options.vehicles.selectors[i].overKey, 
							roadTripSettings.options.vehicles.selectors[i].outKey, 
							roadTripSettings.options.vehicles.selectors[i].downKey, 
							roadTripSettings.options.vehicles.selectors[i].upKey);
			button.onInputUp.add(this.chooseVehicle, this, 0, i);
			this.vehicleSelectors.push(button);
		};
		this.highlightVehicleSelector(RoadTrip.vehicleIndex);

		var destinationsText = this.add.text(roadTripSettings.options.destinations.heading.x, 
								 		 roadTripSettings.options.destinations.heading.y, 
								 		 roadTripSettings.options.destinations.heading.text);
		destinationsText.font = roadTripSettings.options.destinations.heading.font;
		destinationsText.fill = roadTripSettings.options.destinations.heading.fill;
		destinationsText.fontSize = roadTripSettings.options.destinations.heading.size;
		destinationsText.wordWrapWidth = roadTripSettings.options.destinations.heading.width;
		destinationsText.wordWrap = true;
		destinationsText.anchor.x = 0.5;

		for (i = 0; i < roadTripSettings.options.destinations.selectors.length; i++) {
			var destinationButton = this.add.button(roadTripSettings.options.destinations.selectors[i].x, 
													roadTripSettings.options.destinations.selectors[i].y, 
													roadTripSettings.textureKey, 
													null, 
													this, 
													roadTripSettings.options.destinations.selectors[i].overKey, 
													roadTripSettings.options.destinations.selectors[i].outKey, 
													roadTripSettings.options.destinations.selectors[i].downKey, 
													roadTripSettings.options.destinations.selectors[i].upKey);
			destinationButton.onInputUp.add(this.chooseDestination, this, 0, i);
			this.destinationSelectors.push(destinationButton);
		};
		this.highlightDestinationSelector(RoadTrip.destinationIndex);

		this.add.button(roadTripSettings.options.startGameButton.x, 
						roadTripSettings.options.startGameButton.y, 
						roadTripSettings.textureKey, 
						this.startGame, 
						this, 
						roadTripSettings.options.startGameButton.overKey, 
						roadTripSettings.options.startGameButton.outKey, 
						roadTripSettings.options.startGameButton.downKey, 
						roadTripSettings.options.startGameButton.upKey);
	},

	chooseVehicle: function(selector, arg1, arg2, vehicleIndex){
		this.resetVehicleSelector(RoadTrip.vehicleIndex);
		this.highlightVehicleSelector(vehicleIndex);
		RoadTrip.vehicleIndex = vehicleIndex;
	},

	highlightVehicleSelector: function(index){
		this.vehicleSelectors[index].setFrames(roadTripSettings.options.vehicles.selectors[index].selectedKey, 
												roadTripSettings.options.vehicles.selectors[index].selectedKey, 
												roadTripSettings.options.vehicles.selectors[index].selectedKey, 
												roadTripSettings.options.vehicles.selectors[index].selectedKey);
	},

	resetVehicleSelector: function(index){
		this.vehicleSelectors[index].setFrames(roadTripSettings.options.vehicles.selectors[index].overKey, 
												roadTripSettings.options.vehicles.selectors[index].outKey, 
												roadTripSettings.options.vehicles.selectors[index].downKey, 
												roadTripSettings.options.vehicles.selectors[index].upKey);
	},

	chooseDestination: function(selector, arg1, arg2, destinationIndex){
		this.resetDestinationSelector(RoadTrip.destinationIndex);
		this.highlightDestinationSelector(destinationIndex);
		RoadTrip.destinationIndex = destinationIndex;
	},

	highlightDestinationSelector: function(index){
		this.destinationSelectors[index].setFrames(roadTripSettings.options.destinations.selectors[index].selectedKey, 
													roadTripSettings.options.destinations.selectors[index].selectedKey, 
													roadTripSettings.options.destinations.selectors[index].selectedKey, 
													roadTripSettings.options.destinations.selectors[index].selectedKey);
	},

	resetDestinationSelector: function(index){
		this.destinationSelectors[index].setFrames(roadTripSettings.options.destinations.selectors[index].overKey, 
												roadTripSettings.options.destinations.selectors[index].outKey, 
												roadTripSettings.options.destinations.selectors[index].downKey, 
												roadTripSettings.options.destinations.selectors[index].upKey);
	},

	startGame: function(){
		this.state.start('map');
	},

	shutdown: function(){
		for (var i = 0; i < this.vehicleSelectors.length; i++) {
			this.vehicleSelectors[i].destroy();
		};
		for (i = 0; i < this.destinationSelectors.length; i++) {
			this.destinationSelectors[i].destroy();
		};
	}

}