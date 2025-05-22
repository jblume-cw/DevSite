drSettings = {

	scormEnabled: drScormEnabled,

	autoScale: true,

	spritesheet: {
		key: "spritesheet",
		image: "images/spritesheet.png",
		data: "images/spritesheet.json"
	},

	sign: {
		small: {
			font: "Teko, Arial, Helvetica, sans",
			fill: "#5e0230",
			size: 17,
			lineSpacing: -9,
			wholeKey: "blank-sign.png",
			brokeKey: "small-sign-broken.png",
			anchor: {
				x: 0,
				y: 1
			},
			textOffset: {
				x: 60,
				y: -103
			},
			downRotation: 1.53,
			upRotation: 0,
			flipDuration: 400,
			wordWrapWidth: 100,
			hitAreaOffset: {
				height: -70,
				width: 0,
				x: 0,
				y: 0
			}
		},
		large: {
			font: "Teko, Arial, Helvetica, sans",
			fill: "#5e0230",
			size: 36,
			wholeKey: "blank-sign-large.png",
			brokeKey: "large-sign-broken.png",
			anchor: {
				x: 0,
				y: 1
			},
			textOffset: {
				x: 118,
				y: -203
			},
			downRotation: 1.53,
			upRotation: 0,
			flipDuration: 400,
			hitAreaOffset: {
				height: -128,
				width: 0,
				x: 0,
				y: 0
			}
		}
	},

	ball: {
		key: "ball.png",
		x: 500,
		y: 600,
		scale: {
			start: 1,
			end: .2
		},
		throwDuration: 500,
		throwDurationFast: 200,
		throwAudioKey: "db_throw7",
		hitSignAudioKey: "db_paper1",
		misHitAudioKey: "db_wall3"
	},

	dialog: {
		key: "blank-dialog.png",
		startAt: {
			x: 400,
			y: -200
		},
		endAt: {
			x: 400,
			y: 280
		},
		font: "Teko, Arial, Helvetica, sans",
		fill: "#ffffff",
		size: 28,
		wordWrapWidth: 400,
		lineSpacing: -8
	},

	loader: {
		rotator: {
			key: "rotator",
			file: "images/load-rotator.png",
			x: 400,
			y: 333,
			speed: 7
		},

		background: {
			key: "background",
			file: "images/brick_wall.png",
			x: 0,
			y: 0
		},

		label: {
			loadingText: "Loading",
			clickthroughText: "Tap here to continue.",
			font: "Arial, Helvetica, sans",
			fill: "#FFFFFF",
			size: 22,
			padding: 10
		}
	},

	splash: {
		backgroundKey: "splash_bg.png",
		instructionsSign: {
			text: "Learn to play",
			x: 128,
			y: 619
		},
		playSign: {
			text: "Play",
			x: 439,
			y: 619
		}
	},

	instructions: {
		background: {
			key: "background",
			x: 0,
			y: 0
		},
		backgroundSprites: [
			{
				key: "bleacher-back.png",
				x: 27,
				y: 340
			},
			{
				key: "bleacher-mid.png",
				x: 0,
				y: 426
			}
		],
		foregroundSprites: [
			{
				key: "bleacher-fore.png",
				x: 0,
				y: 512
			},
			{
				key: "scoreboard.png",
				x: 207,
				y: 20
			}
		],
		scoreText: {
			x: 420,
			y: 100,
			font: "ds-digital",
			size: 44,
			defaultText: "0"
		},
		meter: {
			key: "meter.png",
			x: 304,
			y: 151,
			startScale: 0.5
		},
		meterHighlight: {
			key: "meterHighlight.png",
			x: 304,
			y: 151
		},
		fastballMeter: {
			keys: ["fastball_meter_0.png", "fastball_meter_1.png", "fastball_meter_2.png", "fastball_meter_3.png", "fastball_meter_4.png"],
			x: 516,
			y: 58
		},
		lightningSignal: {
			key: "bolt.png",
			x: 232,
			y: 58
		},
		scoreFlash: {
			positiveKey: "plus25.png",
			negativeKey: "minus25.png"
		},
		steps: [
			{
				text: "Click the signs showing negative risks to throw a ball at them, score points and boost the meter.",
				autoAdvanceDelay: 4000,
				audio: "DRI1"
			},
			{
				text: "If you hit a positive risk you'll lose points and the meter will drop.",
				autoAdvanceDelay: 4000,
				audio: "DRI2"
			},
			{
				text: "Hit the superball sign to make your next four throws go faster.",
				autoAdvanceDelay: 10000,
				audio: "DRI3"
			},
			{
				text: "Hit the lightning sign to clear and score points for all of the negative risks that are showing.",
				autoAdvanceDelay: 4000,
				audio: "DRI4"
			},
			{
				text: "Hit the meter boost sign to give the meter a boost.",
				autoAdvanceDelay: 4000,
				audio: "DRI5"
			},
			{
				text: "Play as long as you can before your meter runs out.\n\nAre you ready?",
				autoAdvanceDelay: 0,
				audio: "DRI6"
			}
		],
		targetSigns: [
			{
				x: 50,
				y: 522
			},
			{
				x: 240,
				y: 522
			},
			{
				x: 330,
				y: 522
			},
			{
				x: 430,
				y: 522
			},
			{
				x: 620,
				y: 522
			}
		]
	},

	ready: {
		sign: {
			text: "Start",
			x: 330,
			y: 522
		},
		dialogText: "Hit as many negative risk signs as you can. Are you ready?",
		vo: "DRReady"
	},

	game: {
		powerupRate: 0.04,
		meterDecay: 0.02,
		timeMeterInterval: 1000,
		difficultyInterval: 20000,
		meterBoost: 0.05,
		correctScore: 25,
		incorrectScore: -25,
		negativeRateDefault: 0.5,
		showDurationBaseDefault: 8000,
		showDurationPlayDefault: 1000,
		signShowDelayBaseDefault: 2500,
		signShowDelayPlayDefault: 2000,
		background: {
			key: "background",
			x: 0,
			y: 0
		},
		backgroundSprites: [
			{
				key: "bleacher-back.png",
				x: 27,
				y: 340
			},
			{
				key: "bleacher-mid.png",
				x: 0,
				y: 426
			},
			{
				key: "bleacher-fore.png",
				x: 0,
				y: 512
			},
			{
				key: "scoreboard.png",
				x: 207,
				y: 20
			}
		],
		fastballMeter: {
			keys: ["fastball_meter_0.png", "fastball_meter_1.png", "fastball_meter_2.png", "fastball_meter_3.png", "fastball_meter_4.png"],
			x: 516,
			y: 58
		},
		lightningSignal: {
			key: "bolt.png",
			x: 232,
			y: 58
		},
		meter: {
			key: "meter.png",
			x: 304,
			y: 151,
			startScale: 0.5
		},
		meterHighlight: {
			key: "meterHighlight.png",
			x: 304,
			y: 151
		},
		signMasks: [
			{
				x: 0,
				y: 368,
				width: 800,
				height: 145
			},
			{
				x: 0,
				y: 281,
				width: 800,
				height: 145
			},
			{
				x: 0,
				y: 195,
				width: 800,
				height: 145
			}
		],
		scoreText: {
			x: 420,
			y: 100,
			font: "ds-digital",
			size: 44,
			defaultText: "0"
		},
		powerups: [
			{
				signKey: "lightning-sign.png",
				id: "lightning"
			},
			{
				signKey: "meter-boost-sign.png",
				id: "meter"
			},
			{
				signKey: "fastball-sign.png",
				id: "fastball"
			}
		],
		scoreFlash: {
			positiveKey: "plus25.png",
			negativeKey: "minus25.png"
		},
		signs: {
			location: [
				{
					x: 61,
					y: 350,
					maskIndex: 2
				},
				{
					x: 321,
					y: 350,
					maskIndex: 2
				},
				{
					x: 581,
					y: 350,
					maskIndex: 2
				},
				{
					x: 155,
					y: 436,
					maskIndex: 1
				},
				{
					x: 415,
					y: 436,
					maskIndex: 1
				},
				{
					x: 675,
					y: 436,
					maskIndex: 1
				},
				{
					x: 24,
					y: 522,
					maskIndex: 0
				},
				{
					x: 284,
					y: 522,
					maskIndex: 0
				},
				{
					x: 544,
					y: 522,
					maskIndex: 0
				}
			],
			message: {
				positive: [
					{
						text: "Make friends with a new student",
						type: "positive"
					},
					{
						text: "Ask someone out",
						type: "positive"
					},
					{
						text: "Try out for basketball team",
						type: "positive"
					},
					{
						text: "Get a new haircut",
						type: "positive"
					},
					{
						text: "Stand up for a friend",
						type: "positive"
					},
					{
						text: "Try out for a school play",
						type: "positive"
					},
					{
						text: "Call home for a ride at 1:00 am",
						type: "positive"
					},
					{
						text: "Babysit on a Saturday night",
						type: "positive"
					},
					{
						text: "Learn a musical instrument",
						type: "positive"
					},
					{
						text: "Tell an adult a friend is using drugs",
						type: "positive"
					},
					{
						text: "Go rock climbing",
						type: "positive"
					},
					{
						text: "Say no when offered drugs",
						type: "positive"
					},
					{
						text: "Volunteer at a homeless shelter",
						type: "positive"
					},
					{
						text: "Run for student council",
						type: "positive"
					},
					{
						text: "Go away to camp for the first time",
						type: "positive"
					},
					{
						text: "Report bullying to a teacher",
						type: "positive"
					},
					{
						text: "Try whitewater rafting",
						type: "positive"
					},
					{
						text: "Jump or dive off the high dive platform",
						type: "positive"
					},
					{
						text: "Take an advanced math class",
						type: "positive"
					},
					{
						text: "Stand up to a bully on social media",
						type: "positive"
					}
				],
				negative: [
					{
						text: "Smoke marijuana at a party",
						type: "negative"
					},
					{
						text: "Use inhalants to get a quick high",
						type: "negative"
					},
					{
						text: "Smoke a cigarette with a friend",
						type: "negative"
					},
					{
						text: "Go to a party where there are drugs",
						type: "negative"
					},
					{
						text: "Skip school",
						type: "negative"
					},
					{
						text: "Shoplift",
						type: "negative"
					},
					{
						text: "Play football without a helmet",
						type: "negative"
					},
					{
						text: "Stay out all night",
						type: "negative"
					},
					{
						text: "Skip breakfast",
						type: "negative"
					},
					{
						text: "Don't brush your teeth before school",
						type: "negative"
					},
					{
						text: "Sneak alcohol from your parents",
						type: "negative"
					},
					{
						text: "Drink beer at a party",
						type: "negative"
					},
					{
						text: "Spread a rumor about someone",
						type: "negative"
					},
					{
						text: "Don't study for your math test",
						type: "negative"
					},
					{
						text: "Join a gang",
						type: "negative"
					},
					{
						text: "Hit snooze too many times",
						type: "negative"
					},
					{
						text: "Take someone else's medication",
						type: "negative"
					},
					{
						text: "Walk inside railroad tracks",
						type: "negative"
					},
					{
						text: "Try chewing tobacco",
						type: "negative"
					},
					{
						text: "Cheat on a test",
						type: "negative"
					},
					{
						text: "Get a piercing without permission",
						type: "negative"
					},
					{
						text: "Lie about a friend's parents being home",
						type: "negative"
					},
					{
						text: "Skip meals to lose weight",
						type: "negative"
					},
					{
						text: "Copy off of someone's paper",
						type: "negative"
					},
					{
						text: "Steal money from a friend",
						type: "negative"
					},
					{
						text: "Text during class",
						type: "negative"
					},
					{
						text: "Text mean messages to a classmate",
						type: "negative"
					}
				]
			}
		}
	},

	gameOver: {
		sign: {
			text: "Play again",
			x: 330,
			y: 522
		},
		feedback: [
			{
				ifGreaterThan: 1000,
				message: "Fantastic! You really know the difference between positive and negative risks!",
				audio: "DROverHi"
			},
			{
				ifGreaterThan: 200,
				message: "Good job! You eliminated a lot of negative risks!",
				audio: "DROverMid"
			},
			{
				ifGreaterThan: -1000,
				message: "Game over. Play again to practice recognizing negative risks.",
				audio: "DROverLo"
			}
		]
	},

	audio: {
		key: "audio",
		urls: ["audio/dodgingRisks.ogg", "audio/dodgingRisks.m4a"],
		data: {
			spritemap: {
				"DRI1": {
			        "start": 0,
			        "end": 5.816666666666666,
			        "loop": false
			      },
			      "DRI2": {
			        "start": 7,
			        "end": 10.716666666666667,
			        "loop": false
			      },
			      "DRI3": {
			        "start": 12,
			        "end": 15.633333333333333,
			        "loop": false
			      },
			      "DRI4": {
			        "start": 17,
			        "end": 21.683333333333334,
			        "loop": false
			      },
			      "DRI5": {
			        "start": 23,
			        "end": 26,
			        "loop": false
			      },
			      "DRI6": {
			        "start": 27,
			        "end": 31.341678004535147,
			        "loop": false
			      },
			      "DROverHi": {
			        "start": 33,
			        "end": 37.53333333333333,
			        "loop": false
			      },
			      "DROverLo": {
			        "start": 39,
			        "end": 43.666666666666664,
			        "loop": false
			      },
			      "DROverMid": {
			        "start": 45,
			        "end": 48,
			        "loop": false
			      },
			      "DRReady": {
			        "start": 49,
			        "end": 53.13333333333333,
			        "loop": false
			      },
			      "db_paper1": {
			        "start": 55,
			        "end": 55.64263038548753,
			        "loop": false
			      },
			      "db_throw7": {
			        "start": 57,
			        "end": 57.47074829931973,
			        "loop": false
			      },
			      "db_wall3": {
			        "start": 59,
			        "end": 59.399478458049884,
			        "loop": false
			      }
		    }
		}
	}

}