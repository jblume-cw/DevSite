settings = {

	scormEnabled: slingshoppingScormEnabled,

	autoScale: true,

	backgroundColor: "#EBE7DE",

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

		label: {
			loadingText: "Loading",
			clickthroughText: "Tap here to continue.",
			font: "Arial, Helvetica, sans",
			fill: "#666666",
			size: 22,
			x: 400,
			y: 410
		}

	},

	textures: [
		{ key: "spritesheet", image: "images/spritesheet.png", data: "images/spritesheet.json" }
	],

	slingshot: {
		fork: {
			x: 278,
			y: 418,
			texture: "spritesheet",
			key: "SlingshotForks.png"
		},
		pocket: {
			x: 400,
			y: 433,
			texture: "spritesheet",
			key: "SlingBack.png",
			anchor: { x: 0.5, y: 0.4 },
			scaleToFood: 1.25
		},
		leftStrap: {
			x: 292, 
			y: 434,
			color: 0x271E15,
			stroke: 5,
			pocketOverlap: 3
		},
		rightStrap: {
			x: 512, 
			y: 434,
			color: 0x271E15,
			stroke: 5,
			pocketOverlap: -3
		},
		dragRect: {
			x: 289,
			y: 400,
			width: 223,
			height: 185,
		},
		crosshairs: {
			x: -100,
			y: -100,
			texture: "spritesheet",
			key: "Crosshairs.png",
			anchor: { x: 0.5, y: 0.5 },
			minimumScale: 0.6
		},
		throw: {
			minFlightTime: 1000,
			maxFlightTime: 1500,
			arcPointXFactor: 0.8,
			arcPointYFactor: 400,
			pocketDurationScale: 0.6,
			minRotation: -0.765,
			maxRotation: 0.765
		},
		foodStart: {
			x: 400,
			y: 433
		},
		aim: {
			horizontalMultiplier: 4.3,
			verticalMultiplier: 3.4
		},
		stretchSoundKey: "stretch01",
		throwSoundKey: "boing06"
	},

	instructions: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "spritesheet", key: "background.png" },
			{ x: 22, y: 468, texture: "spritesheet", key: "instructionapples.png" },
			{ x: 594, y: 471, texture: "spritesheet", key: "instructionoranges.png" }
		],

		logo: { 
			x: 5, 
			y: 5, 
			texture: "spritesheet", 
			key: "sl-logo.png",
			offPosition: { x: 5, y: -125 }
		},

		textCart: {
			x: 34, 
			y: 120, 
			texture: "spritesheet", 
			key: "message-cart.png",
			animateOffDistance: { x: -415, y: 0 }
		},

		animateOffDuration: 750,

		voKey: "Instructions",

		advanceAudioKey: "success_sound_exploding_glass_03",

		header: {
			font: "Oswald, Helvetica, sans",
			fill: "#EBE7DE",
			size: 28,
			weight: 600,
			align: "center",
			lineSpacing: 0,
			x: 223,
			y: 125,
			text: "Welcome to Slingshopping!",
			anchor: { x: 0.5, y: 0 },
			wordWrapWidth: 0
		},

		body: {
			font: "Oswald, Helvetica, sans",
			fill: "#271E15",
			size: 20,
			weight: 400,
			align: "center",
			lineSpacing: -5,
			x: 223,
			y: 180,
			text: "To play this game you'll need to identify foods as Go, Whoa, or Slow foods, and shoot them into the matching carts using your slingshot. Shoot the apple at the Go shopping cart to begin the first level. Click and drag the apple until the X is over the cart, then let go.",
			anchor: { x: 0.5, y: 0 },
			wordWrapWidth: 350
		},

		apple: {
			x: 400,
			y: 433,
			texture: "spritesheet",
			key: "Apple.png",
			anchor: { x: 0.5, y: 0.5 }
		},

		targetCart: {
			x: 520,
			y: 175,
			scale: { x: .9, y: .9 },
			typeDisplay: {
				relativePosition: { x: 54, y: 48 },
				texture: "spritesheet",
				key: "RtoL-cart-type-go.png"
			},
			texture: "spritesheet",
			key: "instructions cart.png",
			anchor: { x: 0, y: 0 },
			hitArea: { x: 0, y: 0, width: 173, height: 94 },
			hitAnimation: {
				frames: ["instructions cart0001.png", "instructions cart0002.png", "instructions cart0003.png", "instructions cart0004.png", "instructions cart0005.png", "instructions cart0006.png", "instructions cart0007.png", "instructions cart0008.png", "instructions cart0009.png", "instructions cart0010.png", "instructions cart0011.png", "instructions cart0012.png" ],
				rate: 24
			},
			offPosition: { x: 814, y: 175 }
		},

		hitIcon: {
			x: -100,
			y: -100,
			texture: "spritesheet",
			key: "InstructionsHitIcon.png",
			anchor: { x: 0.5, y: 0.5 }
		},

		foregroundElements: []
	},

	levelIntro: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "spritesheet", key: "background.png" },
			{ x: 20, y: 417, texture: "spritesheet", key: "score-board.png" },
			{ x: 595, y: 417, texture: "spritesheet", key: "time-board.png" },
			{ x: 7, y: 505, texture: "spritesheet", key: "level-apples.png" },
			{ x: 569, y: 489, texture: "spritesheet", key: "level-oranges.png" },
			{ x: 566, y: 562, texture: "spritesheet", key: "health meter.png" }
		],

		score: {
			font: "Oswald, Helvetica, sans",
			fill: "#FF6600",
			size: 40,
			weight: 400,
			align: "center",
			lineSpacing: 0,
			x: 115,
			y: 501,
			text: "",
			anchor: { x: 0.5, y: 0.5 },
			wordWrapWidth: 0
		},

		time: {
			font: "Oswald, Helvetica, sans",
			fill: "#FF6600",
			size: 40,
			weight: 400,
			align: "center",
			lineSpacing: 0,
			x: 688,
			y: 501,
			text: "",
			anchor: { x: 0.5, y: 0.5 },
			wordWrapWidth: 0
		},

		textCart: {
			x: -380, 
			y: 100, 
			texture: "spritesheet", 
			key: "message-cart.png",
			animateOnDistance: { x: 593, y: 0 },
			animateOffDistance: { x: 1182, y: 0 },
			animationDuration: 1000
		},

		header: {
			font: "Oswald, Helvetica, sans",
			fill: "#EBE7DE",
			size: 28,
			weight: 600,
			align: "center",
			lineSpacing: 0,
			x: -191,
			y: 126,
			text: "",
			anchor: { x: 0.5, y: 0.5 },
			wordWrapWidth: 0,
			levelText: ["Level 1", "Level 2", "Level 3", "Level 4"],
			winText: "Great job!",
			loseText: "Sorry!"
		},

		body: {
			font: "Oswald, Helvetica, sans",
			fill: "#271E15",
			size: 18,
			weight: 400,
			align: "center",
			lineSpacing: -5,
			x: -191,
			y: 162,
			text: "",
			anchor: { x: 0.5, y: 0 },
			wordWrapWidth: 350,
			levelText: ["Shoot each food into the correct Go, Slow, and Whoa carts. Fill the health meter before the timer runs out and you'll move on to level two. Good luck!", "Great job! You've made it to level two. Fill the health meter before the timer runs out and you'll move on to level three. Good luck!", "Nice work! You've made it to level three. In this level, the carts will be moving targets. Fill the health meter before the timer runs out and you'll move on to Level four. Good luck!", "Great job! You've made it to the fourth and final level. Fill the health meter before the timer runs out and you'll win the game. Good luck!"],
			winText: "You've cleared all four levels. Click play again to try and beat your high score.",
			loseText: "The timer ran out before you filled the health meter. Click play again and give it another try."
		},

		beginButton: {
			x: -191,
			y: 275,
			texture: "spritesheet",
			upKey: "btn_begin0001.png",
			overKey: "btn_begin0002.png",
			downKey: "btn_begin0002.png",
			outKey: "btn_begin0001.png",
			anchor: { x: 0.5, y: 0 }
		},

		playAgainButton: {
			x: -191,
			y: 275,
			texture: "spritesheet",
			upKey: "btn_playAgain0001.png",
			overKey: "btn_playAgain0002.png",
			downKey: "btn_playAgain0002.png",
			outKey: "btn_playAgain0001.png",
			anchor: { x: 0.5, y: 0 }
		},

		levelVo: ["Level 1", "Level 2", "Level 3", "Level 4"],

		winVo: "Win",

		loseVo: "Lose"
	},

	game: {

		backgroundElements: [
			{ x: 0, y: 0, texture: "spritesheet", key: "background.png" },
			{ x: 20, y: 417, texture: "spritesheet", key: "score-board.png" },
			{ x: 595, y: 417, texture: "spritesheet", key: "time-board.png" },
			{ x: 7, y: 505, texture: "spritesheet", key: "level-apples.png" },
			{ x: 569, y: 489, texture: "spritesheet", key: "level-oranges.png" },
			{ x: 566, y: 562, texture: "spritesheet", key: "health meter.png" }
		],

		healthMeterBar: {
			x: 639,
			y: 571,
			maxWidth: 148,
			height: 16,
			color: 0xFF6600
		},

		score: {
			font: "Oswald, Helvetica, sans",
			fill: "#FF6600",
			size: 40,
			weight: 400,
			align: "center",
			lineSpacing: 0,
			x: 115,
			y: 501,
			text: "",
			anchor: { x: 0.5, y: 0.5 },
			wordWrapWidth: 0
		},

		time: {
			font: "Oswald, Helvetica, sans",
			fill: "#FF6600",
			size: 40,
			weight: 400,
			align: "center",
			lineSpacing: 0,
			x: 688,
			y: 501,
			text: "",
			anchor: { x: 0.5, y: 0.5 },
			wordWrapWidth: 0
		},

		foodLabelBackground: {
			x: 267,
			y: 553,
			texture: "spritesheet",
			key: "FoodName.png"
		},

		foodLabelText: {
			font: "Oswald, Helvetica, sans",
			fill: "#EBE7DE",
			size: 20,
			weight: 300,
			align: "center",
			lineSpacing: 0,
			x: 400,
			y: 560,
			text: "",
			anchor: { x: 0.5, y: 0 },
			wordWrapWidth: 0
		},

		scoreIcons: [
			{ x: -100, y: -100, value: 15, texture: "spritesheet", key: "ScoreIcon-15.png", anchor: { x: 0.5, y: 0.5 } },
			{ x: -100, y: -100, value: 25, texture: "spritesheet", key: "ScoreIcon-25.png", anchor: { x: 0.5, y: 0.5 } },
			{ x: -100, y: -100, value: 35, texture: "spritesheet", key: "ScoreIcon-35.png", anchor: { x: 0.5, y: 0.5 } },
			{ x: -100, y: -100, value: 50, texture: "spritesheet", key: "ScoreIcon-50.png", anchor: { x: 0.5, y: 0.5 } }
		],

		incorrectIcon: { x: -100, y: -100, texture: "spritesheet", key: "IncorrectIcon.png", anchor: { x: 0.5, y: 0.5 } },

		meterFullIcon: { x: -100, y: -100, texture: "spritesheet", key: "MeterFullIcon.png", anchor: { x: 0.5, y: 0.5 } },

		incorrectSoundKey: "no",

		correctSoundKey: "success_sound_exploding_glass_01",

		meterFullSoundKey: "success_sound_exploding_glass_03",

		clockWarningTick: "pip02",

		endLevelSoundKey: "buzzer02",

		cart: {
			x: -1000,
			y: -1000,
			texture: "spritesheet",
			key: "cart0001.png",
			keyReversed: "cart reversed0001.png",
			anchor: { x: 0, y: 0 },
			hitArea: { x: 29, y: 28, width: 180, height: 75 },
			hitAreaReversed: { x: -6, y: 27, width: 180, height: 75 },
			hitAnimation: {
				frames: ["cart0002.png", "cart0003.png", "cart0004.png", "cart0005.png", "cart0006.png", "cart0007.png", "cart0008.png", "cart0009.png", "cart0010.png", "cart0011.png", "cart0012.png" ],
				rate: 24
			},
			hitAnimationReversed: {
				frames: ["cart reversed0002.png", "cart reversed0003.png", "cart reversed0004.png", "cart reversed0005.png", "cart reversed0006.png", "cart reversed0007.png", "cart reversed0008.png", "cart reversed0009.png", "cart reversed0010.png", "cart reversed0011.png", "cart reversed0012.png" ],
				rate: 24
			}
		},

		levelData: [
			{
				number: 1,
				meterFullPoints: 90,
				clock: 60,
				carts: [
					{
						startPosition: { x: -165, y: 126 },
						scale: { x: 0.75, y: 0.75 },
						reversed: false,
						type: "whoa",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-whoa.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "still",
							animateOn: {
								toPosition: { x: 559, y: 126 },
								duration: 1000,
								delay: 0
							},
							animateOff: {
								toPosition: { x: 1359, y: 126 },
								duration: 1000,
								delay: 500
							}
						}
						
					},
					{
						startPosition: { x: -205, y: 204 },
						scale: { x: 0.9, y: 0.9 },
						reversed: false,
						type: "go",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-go.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "still",
							animateOn: {
								toPosition: { x: 278, y: 204 },
								duration: 1000,
								delay: 250
							},
							animateOff: {
								toPosition: { x: 1078, y: 204 },
								duration: 1000,
								delay: 500
							}
						}
						
					},
					{
						startPosition: { x: -165, y: 126 },
						scale: { x: 0.75, y: 0.75 },
						reversed: false,
						type: "slow",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-slow.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "still",
							animateOn: {
								toPosition: { x: 60, y: 126 },
								duration: 1000,
								delay: 500
							},
							animateOff: {
								toPosition: { x: 860, y: 126 },
								duration: 1000,
								delay: 500
							}
						}
					}
				]
			},
			{
				number: 2,
				meterFullPoints: 175,
				clock: 60,
				carts: [
					{
						startPosition: { x: -165, y: 105 },
						scale: { x: 0.7, y: 0.7 },
						reversed: false,
						type: "go",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-go.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-25.png"
						},
						motion: {
							type: "still",
							animateOn: {
								toPosition: { x: 559, y: 105 },
								duration: 1000,
								delay: 0
							},
							animateOff: {
								toPosition: { x: 1359, y: 105 },
								duration: 1000,
								delay: 500
							}
						}
						
					},
					{
						startPosition: { x: -205, y: 105 },
						scale: { x: 0.7, y: 0.7 },
						reversed: false,
						type: "slow",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-slow.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-25.png"
						},
						motion: {
							type: "still",
							animateOn: {
								toPosition: { x: 310, y: 105 },
								duration: 1000,
								delay: 250
							},
							animateOff: {
								toPosition: { x: 1078, y: 105 },
								duration: 1000,
								delay: 500
							}
						}
						
					},
					{
						startPosition: { x: -165, y: 105 },
						scale: { x: 0.7, y: 0.7 },
						reversed: false,
						type: "whoa",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-whoa.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-25.png"
						},
						motion: {
							type: "still",
							animateOn: {
								toPosition: { x: 60, y: 105 },
								duration: 1000,
								delay: 500
							},
							animateOff: {
								toPosition: { x: 860, y: 105 },
								duration: 1000,
								delay: 500
							}
						}
					}
				]
			},
			{
				number: 3,
				meterFullPoints: 120,
				clock: 60,
				carts: [
					{
						startPosition: { x: -155, y: 100 },
						scale: { x: 0.75, y: 0.75 },
						reversed: false,
						type: "go",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-go.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-25.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 100 },
							timeToCrossScreen: 10500,
							startDelay: 0,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: -155, y: 100 },
						scale: { x: 0.75, y: 0.75 },
						reversed: false,
						type: "slow",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-slow.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-25.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 100 },
							timeToCrossScreen: 10500,
							startDelay: 3500,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: -155, y: 100 },
						scale: { x: 0.75, y: 0.75 },
						reversed: false,
						type: "whoa",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-whoa.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-25.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 100 },
							timeToCrossScreen: 10500,
							startDelay: 7000,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: -204, y: 232 },
						scale: { x: 1, y: 1 },
						reversed: false,
						type: "whoa",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-whoa.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 232 },
							timeToCrossScreen: 9600,
							startDelay: 0,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: -204, y: 232 },
						scale: { x: 1, y: 1 },
						reversed: false,
						type: "slow",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-slow.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 232 },
							timeToCrossScreen: 9600,
							startDelay: 3200,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: -204, y: 232 },
						scale: { x: 1, y: 1 },
						reversed: false,
						type: "go",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-go.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 232 },
							timeToCrossScreen: 9600,
							startDelay: 6400,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					}
				]
			},
			{
				number: 4,
				meterFullPoints: 140,
				clock: 60,
				carts: [
					{
						startPosition: { x: 800, y: 100 },
						scale: { x: 0.75, y: 0.75 },
						reversed: true,
						type: "go",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 66, y: 48 },
							texture: "spritesheet",
							key: "RtoL-cart-type-go.png"
						},
						valueDisplay: {
							relativePosition: { x: 32, y: 49 },
							texture: "spritesheet",
							key: "RtoL-cart-score-25.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: -555, y: 100 },
							timeToCrossScreen: 9600,
							startDelay: 0,
							animateOff: {
								distance: { x: -800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: 800, y: 100 },
						scale: { x: 0.75, y: 0.75 },
						reversed: true,
						type: "slow",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 66, y: 48 },
							texture: "spritesheet",
							key: "RtoL-cart-type-slow.png"
						},
						valueDisplay: {
							relativePosition: { x: 32, y: 49 },
							texture: "spritesheet",
							key: "RtoL-cart-score-25.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: -555, y: 100 },
							timeToCrossScreen: 9600,
							startDelay: 3200,
							animateOff: {
								distance: { x: -800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: 800, y: 100 },
						scale: { x: 0.75, y: 0.75 },
						reversed: true,
						type: "whoa",
						value: 25,
						typeDisplay: {
							relativePosition: { x: 66, y: 48 },
							texture: "spritesheet",
							key: "RtoL-cart-type-whoa.png"
						},
						valueDisplay: {
							relativePosition: { x: 32, y: 49 },
							texture: "spritesheet",
							key: "RtoL-cart-score-25.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: -555, y: 100 },
							timeToCrossScreen: 9600,
							startDelay: 6400,
							animateOff: {
								distance: { x: -800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: -204, y: 232 },
						scale: { x: 1, y: 1 },
						reversed: false,
						type: "whoa",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-whoa.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 232 },
							timeToCrossScreen: 8700,
							startDelay: 0,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: -204, y: 232 },
						scale: { x: 1, y: 1 },
						reversed: false,
						type: "slow",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-slow.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 232 },
							timeToCrossScreen: 8700,
							startDelay: 2900,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					},
					{
						startPosition: { x: -204, y: 232 },
						scale: { x: 1, y: 1 },
						reversed: false,
						type: "go",
						value: 15,
						typeDisplay: {
							relativePosition: { x: 65, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-type-go.png"
						},
						valueDisplay: {
							relativePosition: { x: 129, y: 48 },
							texture: "spritesheet",
							key: "LtoR-cart-score-15.png"
						},
						motion: {
							type: "moving",
							endPosition: { x: 800, y: 232 },
							timeToCrossScreen: 8700,
							startDelay: 5800,
							animateOff: {
								distance: { x: 800, y: 0 },
								duration: 1000
							}
						}
					}
				]
			}
		],

		foods: [
			{ 
				label: "Apple",
				texture: "spritesheet",
				key: "Apple.png",
				type: "go"
			},
			{ 
				label: "Baby Carrots",
				texture: "spritesheet",
				key: "BabyCarrots.png",
				type: "go"
			},
			{ 
				label: "Bacon",
				texture: "spritesheet",
				key: "Bacon.png",
				type: "whoa"
			},
			{ 
				label: "Bag Salad",
				texture: "spritesheet",
				key: "BagSalad.png",
				type: "go"
			},
			{ 
				label: "Corn",
				texture: "spritesheet",
				key: "CornCob.png",
				type: "slow"
			},
			{ 
				label: "Bananas",
				texture: "spritesheet",
				key: "Bananas.png",
				type: "go"
			},
			{ 
				label: "Beet",
				texture: "spritesheet",
				key: "Beet.png",
				type: "go"
			},
			{ 
				label: "Blueberries",
				texture: "spritesheet",
				key: "Blueberries.png",
				type: "go"
			},
			{ 
				label: "Bologna",
				texture: "spritesheet",
				key: "Bologna.png",
				type: "whoa"
			},
			{ 
				label: "Bran Cereal",
				texture: "spritesheet",
				key: "BranCereal.png",
				type: "go"
			},
			{ 
				label: "Broccoli",
				texture: "spritesheet",
				key: "Broccoli.png",
				type: "go"
			},
			{ 
				label: "Brownies",
				texture: "spritesheet",
				key: "Brownies.png",
				type: "whoa"
			},
			{ 
				label: "Candy Bar",
				texture: "spritesheet",
				key: "CandyBar.png",
				type: "whoa"
			},
			{ 
				label: "Celery",
				texture: "spritesheet",
				key: "Celery.png",
				type: "go"
			},
			{ 
				label: "Cheesecake",
				texture: "spritesheet",
				key: "Cheesecake.png",
				type: "whoa"
			},
			{ 
				label: "Cheese Curls",
				texture: "spritesheet",
				key: "CheeseCurls.png",
				type: "whoa"
			},
			{ 
				label: "Boneless, Skinless Chicken Breasts",
				texture: "spritesheet",
				key: "ChickenBreasts.png",
				type: "go"
			},
			{ 
				label: "Chicken Nuggets",
				texture: "spritesheet",
				key: "ChickenNuggets.png",
				type: "whoa"
			},
			{ 
				label: "Chocolate Milk",
				texture: "spritesheet",
				key: "ChocolateMilk.png",
				type: "whoa"
			},
			{ 
				label: "Cola",
				texture: "spritesheet",
				key: "Cola.png",
				type: "whoa"
			},
			{ 
				label: "Cookies",
				texture: "spritesheet",
				key: "Cookies.png",
				type: "whoa"
			},
			{ 
				label: "Cucumber",
				texture: "spritesheet",
				key: "Cucumber.png",
				type: "go"
			},
			{ 
				label: "Doughnuts",
				texture: "spritesheet",
				key: "Doughnuts.png",
				type: "whoa"
			},
			{ 
				label: "Fish Sticks",
				texture: "spritesheet",
				key: "FishSticks.png",
				type: "whoa"
			},
			{ 
				label: "French Fries",
				texture: "spritesheet",
				key: "FrenchFries.png",
				type: "whoa"
			},
			{ 
				label: "Fruit Punch",
				texture: "spritesheet",
				key: "FruitPunch.png",
				type: "whoa"
			},
			{ 
				label: "Grape Soda",
				texture: "spritesheet",
				key: "GrapeSoda.png",
				type: "whoa"
			},
			{ 
				label: "Green Grapes",
				texture: "spritesheet",
				key: "GreenGrapes.png",
				type: "go"
			},
			{ 
				label: "Hot Dogs",
				texture: "spritesheet",
				key: "HotDogs.png",
				type: "whoa"
			},
			{ 
				label: "Ice Cream Sandwiches",
				texture: "spritesheet",
				key: "IceCreamSandwiches.png",
				type: "whoa"
			},
			{ 
				label: "Kiwi Fruit",
				texture: "spritesheet",
				key: "Kiwi.png",
				type: "go"
			},
			{ 
				label: "Mushrooms",
				texture: "spritesheet",
				key: "Mushrooms.png",
				type: "go"
			},
			{ 
				label: "Orange",
				texture: "spritesheet",
				key: "Orange.png",
				type: "go"
			},
			{ 
				label: "Orange Soda",
				texture: "spritesheet",
				key: "OrangeSoda.png",
				type: "whoa"
			},
			{ 
				label: "Peach",
				texture: "spritesheet",
				key: "Peach.png",
				type: "go"
			},
			{ 
				label: "Pear",
				texture: "spritesheet",
				key: "Pear.png",
				type: "go"
			},
			{ 
				label: "Pork Chop",
				texture: "spritesheet",
				key: "PorkChop.png",
				type: "go"
			},
			{ 
				label: "Potato",
				texture: "spritesheet",
				key: "Potato.png",
				type: "slow"
			},
			{ 
				label: "Pototo Chips",
				texture: "spritesheet",
				key: "PotatoChips.png",
				type: "whoa"
			},
			{ 
				label: "Raspberries",
				texture: "spritesheet",
				key: "Raspberries.png",
				type: "go"
			},
			{ 
				label: "Red Grapes",
				texture: "spritesheet",
				key: "RedGrapes.png",
				type: "go"
			},
			{ 
				label: "Root Beer",
				texture: "spritesheet",
				key: "RootBeer.png",
				type: "whoa"
			},
			{ 
				label: "Sandwich Cookies",
				texture: "spritesheet",
				key: "SandwichCookies.png",
				type: "whoa"
			},
			{ 
				label: "Skim Milk",
				texture: "spritesheet",
				key: "SkimMilk.png",
				type: "go"
			},
			{ 
				label: "Spinach",
				texture: "spritesheet",
				key: "Spinach.png",
				type: "go"
			},
			{ 
				label: "Sports Drink",
				texture: "spritesheet",
				key: "SportsDrink.png",
				type: "whoa"
			},
			{ 
				label: "Strawberry",
				texture: "spritesheet",
				key: "Strawberry.png",
				type: "go"
			},
			{ 
				label: "Sweetened Cereal",
				texture: "spritesheet",
				key: "SweetenedCereal.png",
				type: "whoa"
			},
			{ 
				label: "Tomato",
				texture: "spritesheet",
				key: "Tomato.png",
				type: "go"
			},
			{ 
				label: "Water",
				texture: "spritesheet",
				key: "Water.png",
				type: "go"
			},
			{ 
				label: "Watermelon",
				texture: "spritesheet",
				key: "Watermelon.png",
				type: "go"
			},
			{ 
				label: "Whole Grain Bread",
				texture: "spritesheet",
				key: "WholeGrainBread.png",
				type: "go"
			},
			{ 
				label: "Whole Wheat English Muffins",
				texture: "spritesheet",
				key: "WholeWheatEnglishMuffins.png",
				type: "go"
			},
			{ 
				label: "Whole Wheat Hamburger Buns",
				texture: "spritesheet",
				key: "WholeWheatHamburgerBuns.png",
				type: "go"
			},
			{ 
				label: "Whole Wheat Hot Dog Buns",
				texture: "spritesheet",
				key: "WholeWheatHotDogBuns.png",
				type: "go"
			},
			{ 
				label: "Whole Wheat Pasta",
				texture: "spritesheet",
				key: "WholeWheatPasta.png",
				type: "go"
			},
			{ 
				label: "Whole Wheat Tortillas",
				texture: "spritesheet",
				key: "WholeWheatTortillas.png",
				type: "go"
			},
			{ 
				label: "Eggs",
				texture: "spritesheet",
				key: "eggs.png",
				type: "go"
			},
			{ 
				label: "Peanut Butter",
				texture: "spritesheet",
				key: "peanut-butter.png",
				type: "go"
			},
			{ 
				label: "2% Milk",
				texture: "spritesheet",
				key: "2-percent-milk.png",
				type: "slow"
			},
			{ 
				label: "85% Lean Ground Beef",
				texture: "spritesheet",
				key: "beef.png",
				type: "slow"
			},
			{ 
				label: "Chicken With Skin",
				texture: "spritesheet",
				key: "chicken-with-skin.png",
				type: "slow"
			},
			{ 
				label: "100% Fruit Juice",
				texture: "spritesheet",
				key: "juice.png",
				type: "slow"
			},
			{ 
				label: "Fruits Canned in Light Syrup",
				texture: "spritesheet",
				key: "canned-peaches.png",
				type: "slow"
			},
			{ 
				label: "White Bread",
				texture: "spritesheet",
				key: "white-bread.png",
				type: "slow"
			},
			{ 
				label: "French Toast",
				texture: "spritesheet",
				key: "french-toast.png",
				type: "slow"
			},
			{ 
				label: "Waffles",
				texture: "spritesheet",
				key: "waffles.png",
				type: "slow"
			},
			{ 
				label: "Pancakes",
				texture: "spritesheet",
				key: "pancake.png",
				type: "slow"
			},
			{ 
				label: "Cream Cheese",
				texture: "spritesheet",
				key: "cream-cheese.png",
				type: "slow"
			},
			{ 
				label: "Pretzels",
				texture: "spritesheet",
				key: "pretzels.png",
				type: "slow"
			},
			{ 
				label: "Baked Potato Chips",
				texture: "spritesheet",
				key: "baked-chips.png",
				type: "slow"
			},
			{ 
				label: "Granola Bar",
				texture: "spritesheet",
				key: "granola-bar.png",
				type: "slow"
			},
			{ 
				label: "Pudding",
				texture: "spritesheet",
				key: "pudding.png",
				type: "slow"
			},
			{ 
				label: "Cereal Bar",
				texture: "spritesheet",
				key: "cereal-bar.png",
				type: "slow"
			},
			{ 
				label: "Low-fat Mayo",
				texture: "spritesheet",
				key: "mayo.png",
				type: "slow"
			},
			{ 
				label: "Ketchup",
				texture: "spritesheet",
				key: "ketchup.png",
				type: "slow"
			},
			{ 
				label: "Graham Crackers",
				texture: "spritesheet",
				key: "graham-crackers.png",
				type: "slow"
			},
			{ 
				label: "Goldfish Crackers",
				texture: "spritesheet",
				key: "goldfish-crackers.png",
				type: "slow"
			},
			{ 
				label: "White Rice",
				texture: "spritesheet",
				key: "white-rice.png",
				type: "slow"
			},
			{ 
				label: "Corn Flakes",
				texture: "spritesheet",
				key: "corn-flakes.png",
				type: "slow"
			}
		]
	},

	sound: {
		key: "sound",
		urls: [ "audio/slingshoppingAudio.ogg", "audio/slingshoppingAudio.m4a" ],
		data: {
			spritemap: {
				"boing06": {
			      "start": 0,
			      "end": 1.4353968253968254,
			      "loop": false
			    },
			    "buzzer02": {
			      "start": 2,
			      "end": 2.522448979591837,
			      "loop": false
			    },
			    "no": {
			      "start": 3,
			      "end": 3.2075283446712017,
			      "loop": false
			    },
			    "pip02": {
			      "start": 4,
			      "end": 4.0580498866213155,
			      "loop": false
			    },
			    "stretch01": {
			      "start": 5,
			      "end": 6.015192743764173,
			      "loop": false
			    },
			    "success_sound_exploding_glass_01": {
			      "start": 7,
			      "end": 8.860498866213153,
			      "loop": false
			    },
			    "success_sound_exploding_glass_02": {
			      "start": 9,
			      "end": 11.29877551020408,
			      "loop": false
			    },
			    "success_sound_exploding_glass_03": {
			      "start": 12,
			      "end": 13.645714285714286,
			      "loop": false
			    },
			    "Instructions": {
			      "start": 14,
			      "end": 31.624988662131518,
			      "loop": false
			    },
			    "Level 1": {
			      "start": 32,
			      "end": 41.25,
			      "loop": false
			    },
			    "Level 2": {
			      "start": 42,
			      "end": 49.70560090702948,
			      "loop": false
			    },
			    "Level 3": {
			      "start": 50,
			      "end": 60.643514739229026,
			      "loop": false
			    },
			    "Level 4": {
			      "start": 61,
			      "end": 68.74997732426304,
			      "loop": false
			    },
			    "Lose": {
			      "start": 69,
			      "end": 74.58333333333333,
			      "loop": false
			    },
			    "Win": {
			      "start": 75,
			      "end": 80.12501133786849,
			      "loop": false
			    }
			}
		}
	}

}