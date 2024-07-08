Get60Settings = {

	scormEnabled: Get60ScormEnabled,

	autoScale: true,

	backgroundColor: "#ffffff",

	splashLoop: { key: "loop c", volume: 1 },

	instructionsLoop: { key: "loop c", volume: 0.2 },

	gameLoop: { key: "loop b", volume: 0.75 },

	loader: {

		rotator: {
			key: "rotator",
			file: "images/load-rotator.png",
			x: 400,
			y: 470,
			speed: 7
		},

		backgroundElements: [
			{ x: 210, y: 200, key: "logo", file: "images/mission_health_logo.png" }
		],

		loadingText: {
			text: "Loading",
			font: "Arial, Helvetica, sans",
			fill: "#4d4d4d",
			size: 22,
			weight: 400,
			align: "center",
			lineSpacing: 0,
			x: 400,
			y: 415,
			anchor: { x: 0.5, y: 0 }
		},

		clickthroughText: {
			text: "Tap or click here to continue.",
			font: "Arial, Helvetica, sans",
			fill: "#4d4d4d",
			size: 22,
			weight: 400,
			align: "center",
			lineSpacing: 0,
			x: 400,
			y: 415,
			anchor: { x: 0.5, y: 0 }
		}

	},

	textures: [
		{ key: "main", image: "images/main.png", data: "images/main.json" }
	],

	splash: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "splash.png" }
		],

		playButton: {
			x: 449,
			y: 373,
			texture: "main",
			upKey: "play-up.png",
			overKey: "play-down.png",
			downKey: "play-down.png",
			outKey: "play-up.png",
			anchor: { x: 0, y: 0 }
		},

		instructionsButton: {
			x: 261,
			y: 420,
			texture: "main",
			upKey: "instructions-up.png",
			overKey: "instructions-down.png",
			downKey: "instructions-down.png",
			outKey: "instructions-up.png",
			anchor: { x: 0, y: 0 }
		}
	},

	instructions: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "game-bg.png" },
			{ x: 346, y: 88, texture: "main", key: "line.png" }
		],

		title: {
			text: "INSTRUCTIONS",
			font: "Open Sans, Helvetica, sans-serif",
			fill: "#4d4d4d",
			size: 20,
			weight: 700,
			align: "center",
			lineSpacing: 0,
			x: 181,
			y: 149,
			anchor: { x: 0.5, y: 0 }
		},

		box: {
			x: 65,
			y: 183,
			width: 231,
			height: 233,
			fill: 0xffffff,
			alpha: 1
		},

		continueButton: {
			x: 159,
			y: 466,
			texture: "main",
			upKey: "continue-up.png",
			overKey: "continue-down.png",
			downKey: "continue-down.png",
			outKey: "continue-up.png",
			anchor: { x: 0, y: 0 }
		},

		skipButton: {
			x: 65,
			y: 513,
			texture: "main",
			upKey: "skip-up.png",
			overKey: "skip-down.png",
			downKey: "skip-down.png",
			outKey: "skip-up.png",
			anchor: { x: 0, y: 0 }
		},

		playButton: {
			x: 159,
			y: 466,
			texture: "main",
			upKey: "play-up.png",
			overKey: "play-down.png",
			downKey: "play-down.png",
			outKey: "play-up.png",
			anchor: { x: 0, y: 0 }
		},

		steps: [
			{
				voKey: "Instructions 1",
				text: [
					{
						text: "Two types of tiles will drop from the top of the screen.\n\nPhysical activity tiles:",
						font: "Open Sans, Helvetica, sans-serif",
						fill: "#4d4d4d",
						size: 13,
						weight: 700,
						align: "center",
						lineSpacing: -4,
						wordWrapWidth: 200,
						x: 181,
						y: 196,
						anchor: { x: 0.5, y: 0 }
					},
					{
						text: "Screen time tiles:",
						font: "Open Sans, Helvetica, sans-serif",
						fill: "#4d4d4d",
						size: 13,
						weight: 700,
						align: "center",
						lineSpacing: 0,
						wordWrapWidth: 200,
						x: 181,
						y: 329,
						anchor: { x: 0.5, y: 0 }
					}
				],
				image: [
					{
						texture: "main",
						key: "inst-aero10.png",
						x: 111,
						y: 265,
						anchor: { x: 0.5, y: 0 }
					},
					{
						texture: "main",
						key: "inst-flex20.png",
						x: 181,
						y: 265,
						anchor: { x: 0.5, y: 0 }
					},
					{
						texture: "main",
						key: "inst-strength30.png",
						x: 251,
						y: 265,
						anchor: { x: 0.5, y: 0 }
					},
					{
						texture: "main",
						key: "inst-tablet.png",
						x: 92,
						y: 347,
						anchor: { x: 0.5, y: 0 }
					},
					{
						texture: "main",
						key: "inst-tv.png",
						x: 151,
						y: 347,
						anchor: { x: 0.5, y: 0 }
					},
					{
						texture: "main",
						key: "inst-phone.png",
						x: 209,
						y: 347,
						anchor: { x: 0.5, y: 0 }
					},
					{
						texture: "main",
						key: "inst-laptop.png",
						x: 268,
						y: 347,
						anchor: { x: 0.5, y: 0 }
					},
					{
						texture: "main",
						key: "aero20.png",
						x: 466,
						y: 240,
						delay: 3000
					},
					{
						texture: "main",
						key: "arrow-down.png",
						x: 481,
						y: 310,
						delay: 3000
					},
					{
						texture: "main",
						key: "phone.png",
						x: 586,
						y: 180,
						delay: 4300
					},
					{
						texture: "main",
						key: "arrow-down.png",
						x: 601,
						y: 250,
						delay: 4300
					}
				],
				rect: []
			},
			{
				voKey: "Instructions 2",
				text: [
					{
						text: "You can move the physical activity tiles from left to right as they fall, by clicking anywhere to the left or right of them.",
						font: "Open Sans, Helvetica, sans-serif",
						fill: "#4d4d4d",
						size: 13,
						weight: 700,
						align: "center",
						lineSpacing: -4,
						wordWrapWidth: 200,
						x: 181,
						y: 196,
						anchor: { x: 0.5, y: 0 }
					}
				],
				image: [
					{
						texture: "main",
						key: "flex30.png",
						x: 526,
						y: 240
					},
					{
						texture: "main",
						key: "arrow.png",
						x: 596,
						y: 255,
						delay: 5254
					},
					{
						texture: "main",
						key: "arrow.png",
						x: 516,
						y: 255,
						scale: { x: -1, y: 1 },
						delay: 4600
					}
				],
				rect: [
					{
						x: 346,
						y: 0,
						width: 180,
						height: 600,
						fill: 0xffffff,
						alpha: .5,
						delay: 4500
					},
					{
						x: 586,
						y: 0,
						width: 180,
						height: 600,
						fill: 0xffffff,
						alpha: .5,
						delay: 5154
					}
				]
			},
			{
				voKey: "Instructions 3",
				text: [
					{
						text: "The screen time tiles fall straight down and cannot be moved.",
						font: "Open Sans, Helvetica, sans-serif",
						fill: "#4d4d4d",
						size: 13,
						weight: 700,
						align: "center",
						lineSpacing: -4,
						wordWrapWidth: 200,
						x: 181,
						y: 196,
						anchor: { x: 0.5, y: 0 }
					}
				],
				image: [
					{
						texture: "main",
						key: "tablet.png",
						x: 406,
						y: 180
					},
					{
						texture: "main",
						key: "arrow-down.png",
						x: 421,
						y: 250
					},
					{
						texture: "main",
						key: "tv.png",
						x: 526,
						y: 180
					},
					{
						texture: "main",
						key: "arrow-down.png",
						x: 541,
						y: 250
					},
					{
						texture: "main",
						key: "laptop.png",
						x: 646,
						y: 180
					},
					{
						texture: "main",
						key: "arrow-down.png",
						x: 661,
						y: 250
					}
				],
				rect: []
			},
			{
				voKey: "Instructions 4",
				text: [
					{
						text: "Each physical activity tile has a time value. Your goal is to line up physical activity tiles whose values add up to 60 minutes or more.",
						font: "Open Sans, Helvetica, sans-serif",
						fill: "#4d4d4d",
						size: 13,
						weight: 700,
						align: "center",
						lineSpacing: -4,
						wordWrapWidth: 200,
						x: 181,
						y: 196,
						anchor: { x: 0.5, y: 0 }
					}
				],
				image: [
					{
						texture: "main",
						key: "tileblock.png",
						x: 346,
						y: 240
					},
					{
						texture: "main",
						key: "aero30.png",
						x: 406,
						y: 240
					},
					{
						texture: "main",
						key: "arrow-down.png",
						x: 421,
						y: 310
					}
				],
				rect: []
			},
			{
				voKey: "Instructions 5",
				text: [
					{
						text: "Line them up horizontally to clear the entire row.",
						font: "Open Sans, Helvetica, sans-serif",
						fill: "#4d4d4d",
						size: 13,
						weight: 700,
						align: "center",
						lineSpacing: -4,
						wordWrapWidth: 200,
						x: 181,
						y: 196,
						anchor: { x: 0.5, y: 0 }
					}
				],
				image: [
					{
						texture: "main",
						key: "tileblock.png",
						x: 346,
						y: 240
					},
					{
						texture: "main",
						key: "aero30.png",
						x: 406,
						y: 360
					}
				],
				rect: [
					{
						x: 346,
						y: 360,
						width: 420,
						height: 60,
						fill: 0xcccccc,
						alpha: .66,
						delay: 1569
					}
				]
			},
			{
				voKey: "Instructions 6",
				text: [
					{
						text: "Line them up vertically to clear the entire column. Each time you clear a row or column you earn one day of physical activity.",
						font: "Open Sans, Helvetica, sans-serif",
						fill: "#4d4d4d",
						size: 13,
						weight: 700,
						align: "center",
						lineSpacing: -4,
						wordWrapWidth: 200,
						x: 181,
						y: 196,
						anchor: { x: 0.5, y: 0 }
					}
				],
				image: [
					{
						texture: "main",
						key: "tileblock.png",
						x: 346,
						y: 240
					},
					{
						texture: "main",
						key: "aero30.png",
						x: 466,
						y: 300
					}
				],
				rect: [
					{
						x: 466,
						y: 300,
						width: 60,
						height: 300,
						fill: 0xcccccc,
						alpha: .66,
						delay: 992
					}
				]
			},
			{
				voKey: "Instructions 7",
				text: [
					{
						text: "When the tiles reach the line at the top, the game ends. See how many days of activity you can earn before this happens. Ready to begin?",
						font: "Open Sans, Helvetica, sans-serif",
						fill: "#4d4d4d",
						size: 13,
						weight: 700,
						align: "center",
						lineSpacing: -4,
						wordWrapWidth: 200,
						x: 181,
						y: 196,
						anchor: { x: 0.5, y: 0 }
					}
				],
				image: [
					{
						texture: "main",
						key: "tileblock.png",
						x: 346,
						y: 240
					},
					{
						texture: "main",
						key: "tileblock2.png",
						x: 526,
						y: 60
					}
				],
				rect: []
			}
		]
	},

	game: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "game-bg.png" },
			{ x: 346, y: 88, texture: "main", key: "line.png" }
		],

		title: {
			text: "DAYS OF EXERCISE",
			font: "Open Sans, Helvetica, sans-serif",
			fill: "#4d4d4d",
			size: 20,
			weight: 700,
			align: "center",
			lineSpacing: 0,
			x: 181,
			y: 149,
			anchor: { x: 0.5, y: 0 }
		},

		box: {
			x: 112,
			y: 183,
			width: 137,
			height: 138,
			fill: 0xffffff,
			alpha: 1
		},

		daysOfExercise: {
			text: "20",
			font: "Open Sans, Helvetica, sans-serif",
			fill: "#387C2B",
			size: 90,
			weight: 700,
			align: "center",
			lineSpacing: 0,
			x: 181,
			y: 202,
			anchor: { x: 0.5, y: 0 }
		},

		grid: { 
			rows: 10, 
			columns: 7,
			origin: { x: 346, y: 600 },
			cellSize: { width: 60, height: 60 },
			gameOverRow: 8
		},

		interferenceDropAudio: "leveldown",

		interferenceDropDuration: 1500,

		interferenceDropCount: 3,

		interferenceDropInterval: 2,

		interferenceMaxDelay: 200,

		interferenceTiles: [
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "tv.png" 
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "phone.png" 
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "tablet.png" 
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "laptop.png" 
			}
		],

		activeTileDropAudio: "ching02",

		activeTileStartColumn: 3,

		activeTileDropInterval: 600,

		collapseDropDurationPerCell: 333,

		scoringTiles: [
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "flex15.png",
				value: 15
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "flex30.png",
				value: 30
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "flex45.png",
				value: 45
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "aero15.png",
				value: 15
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "aero30.png",
				value: 30
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "aero45.png",
				value: 45
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "strength15.png",
				value: 15
			},
			{
				x: -100, 
				y: -100,
				texture: "main",
				key: "strength30.png",
				value: 30
			}
		],

		targetTotal: 60,

		tileDestroyDruation: 200,

		lineClearAudio: "magicmallet_a",

		gameOver: {
			screen: {
				x: 346,
				y: -600,
				width: 420,
				height: 600,
				fill: 0xffffff,
				alpha: 0.8,
				dropDuration: 1500,
				dropDelay: 0,
				dropDistance: 600
			},
			gameOverText: {
				text: "GAME\nOVER",
				font: "Open Sans, Arial, Helvetica, sans-serif",
				fill: "#387C2B",
				size: 100,
				weight: 700,
				align: "center",
				lineSpacing: -40,
				stroke: "#ffffff",
				strokeThickness: 12,
				x: 556,
				y: -420,
				anchor: { x: 0.5, y: 0 },
				dropDuration: 1300,
				dropDelay: 200,
				dropDistance: 600
			},

			playAgainButton: {
				x: 159,
				y: 419,
				texture: "main",
				upKey: "play-again-up.png",
				overKey: "play-again-down.png",
				downKey: "play-again-down.png",
				outKey: "play-again-up.png",
				anchor: { x: 0, y: 0 }
			},

			instructionsButton: {
				x: 66,
				y: 466,
				texture: "main",
				upKey: "instructions-up.png",
				overKey: "instructions-down.png",
				downKey: "instructions-down.png",
				outKey: "instructions-up.png",
				anchor: { x: 0, y: 0 }
			},

			audio: "melodic_lose_04"
		},

		debugGrid: {
			text: "",
			font: "Courier New",
			fill: "#000000",
			size: 12,
			weight: 400,
			align: "left",
			lineSpacing: 0,
			x: 50,
			y: 350,
			anchor: { x: 0, y: 0 }
		}
	},

	audio: {
		key: "audio",
		urls: [ "audio/get60.ogg", "audio/get60.m4a" ],
		data: {
			spritemap: {
				"Instructions 1": {
			      "start": 0,
			      "end": 5.417777777777777,
			      "loop": false
			    },
			    "Instructions 2": {
			      "start": 6,
			      "end": 11.802721088435373,
			      "loop": false
			    },
			    "Instructions 3": {
			      "start": 12,
			      "end": 15.060702947845805,
			      "loop": false
			    },
			    "Instructions 4": {
			      "start": 16,
			      "end": 23.3659410430839,
			      "loop": false
			    },
			    "Instructions 5": {
			      "start": 24,
			      "end": 26.502063492063492,
			      "loop": false
			    },
			    "Instructions 6": {
			      "start": 27,
			      "end": 33.40315192743764,
			      "loop": false
			    },
			    "Instructions 7": {
			      "start": 34,
			      "end": 40.86766439909297,
			      "loop": false
			    },
			    "loop b": {
			      "start": 41,
			      "end": 48.78002267573696,
			      "loop": false
			    },
			    "loop c": {
			      "start": 49,
			      "end": 56.80580498866213,
			      "loop": false
			    },
			    "magicmallet_a": {
			      "start": 57,
			      "end": 57.96628117913832,
			      "loop": false
			    },
			    "melodic_lose_04": {
			      "start": 58,
			      "end": 59.947210884353744,
			      "loop": false
			    },
			    "tag": {
			      "start": 60,
			      "end": 65.87804988662131,
			      "loop": false
			    }
			}
		}
	}
}