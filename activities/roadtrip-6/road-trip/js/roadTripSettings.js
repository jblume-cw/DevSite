roadTripSettings = {

	scormEnabled: rtScormEnabled,

	autoScale: true,

	inspectorEnabled: false,

	textureKey: "texture",

	loader: {
		background: {
			file: "images/grass.png",
			key: "loaderBackground"
		},
		rotator: {
			file: "images/load-rotator.png",
			key: "loaderRotator",
			x: 400,
			y: 300,
			speed: 7
		},
		label: {
			loadingText: "Loading",
			clickthroughText: "Tap here to continue.",
			font: "Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 22,
			padding: 10
		},
		text: "Loading",
		font: "Cabin",
		x: 400,
		y: 300,
		fill: "#FFFFFF",
		size: 24
	},

	splash: {
		background: {
			key: "splash-background.png",
			x: 0,
			y: 0
		},
		howToButton: {
			downKey: "how-to-play-down.png",
			outKey: "how-to-play-up.png",
			overKey: "how-to-play-down.png",
			upKey: "how-to-play-up.png",
			x: 119,
			y: 479
		},
		beginButton: {
			downKey: "begin-down.png",
			outKey: "begin-up.png",
			overKey: "begin-down.png",
			upKey: "begin-up.png",
			x: 498,
			y: 479
		},
		musicKey: "marvelous_moment03"
	},

	howToPlay: {
		background: {
			key: "instructions-background.png",
			x: 0,
			y: 0
		},
		text: {
			font: "Cabin",
			x: 50,
			y: 480,
			width: 700,
			fill: "#474749",
			size: 18
		},
		steps: [
			{
				text: "Your goal is to drive from home to your destination without running out of fuel.",
				audioKey: "RTI1",
				visual: {
					key: "instructions-step-1.png",
					x: 110,
					y: 8
				},
				cues: [
					{
						time: 1100,
						visual: {
							key: "pointer-right.png",
							x: 54,
							y: 64
						}
					},
					{
						time: 1650,
						visual: {
							key: "pointer-left.png",
							x: 450,
							y: 336
						}
					}
				],
				nextButton: {
					downKey: "next-down.png",
					outKey: "next-up.png",
					overKey: "next-down.png",
					upKey: "next-up.png",
					x: 650,
					y: 540
				}
			},
			{
				text: "At each checkpoint along the way, you will be asked a question about addiction or prescription drugs. If you answer it correctly, you will earn more fuel for your trip.",
				audioKey: "RTI2",
				visual: {
					key: "instructions-step-1.png",
					x: 110,
					y: 8
				},
				cues: [
					{
						time: 350,
						visual: {
							key: "pointer-right.png",
							x: 74,
							y: 213
						}
					}
				],
				nextButton: {
					downKey: "next-down.png",
					outKey: "next-up.png",
					overKey: "next-down.png",
					upKey: "next-up.png",
					x: 650,
					y: 540
				}
			},
			{
				text: "At some checkpoints, you will be able to choose which path to take after answering the question. The longer paths allow you to skip checkpoints, but will cost you more fuel so use them carefully.",
				audioKey: "RTI3",
				visual: {
					key: "instructions-step-3.png",
					x: 110,
					y: 8
				},
				cues: [
					{
						time: 375,
						visual: {
							key: "pointer-right.png",
							x: 110,
							y: 337
						}
					}
				],
				nextButton: {
					downKey: "next-down.png",
					outKey: "next-up.png",
					overKey: "next-down.png",
					upKey: "next-up.png",
					x: 650,
					y: 540
				}
			},
			{
				text: "Ready to begin your trip?",
				audioKey: "RTI4",
				visual: {
					key: "instructions-step-1.png",
					x: 110,
					y: 8
				},
				cues: [],
				nextButton: {
					downKey: "begin-sm-down.png",
					outKey: "begin-sm-up.png",
					overKey: "begin-sm-down.png",
					upKey: "begin-sm-up.png",
					x: 650,
					y: 540
				}
			}
		]
	},

	options: {
		background: {
			key: "options-background.png",
			x: 0,
			y: 0
		},
		vehicles: {
			heading: {
				text: "Choose your vehicle",
				font: "Cabin",
				x: 400,
				y: 37,
				width: 600,
				fill: "#FFFFFF",
				size: 35
			},
			selectors: [
				{
					downKey: "option-suv-down.png",
					outKey: "option-suv-up.png",
					overKey: "option-suv-up.png",
					upKey: "option-suv-up.png",
					selectedKey: "option-suv-down.png",
					x: 149,
					y: 80
				},
				{
					downKey: "option-convertible-down.png",
					outKey: "option-convertible-up.png",
					overKey: "option-convertible-up.png",
					upKey: "option-convertible-up.png",
					selectedKey: "option-convertible-down.png",
					x: 316,
					y: 80
				},
				{
					downKey: "option-truck-down.png",
					outKey: "option-truck-up.png",
					overKey: "option-truck-up.png",
					upKey: "option-truck-up.png",
					selectedKey: "option-truck-down.png",
					x: 483,
					y: 80
				}
			]
		},
		destinations: {
			heading: {
				text: "Choose your destination",
				font: "Cabin",
				x: 400,
				y: 266,
				width: 600,
				fill: "#FFFFFF",
				size: 35
			},
			selectors: [
				{
					downKey: "option-park-down.png",
					outKey: "option-park-up.png",
					overKey: "option-park-up.png",
					upKey: "option-park-up.png",
					selectedKey: "option-park-down.png",
					x: 149,
					y: 310
				},
				{
					downKey: "option-beach-down.png",
					outKey: "option-beach-up.png",
					overKey: "option-beach-up.png",
					upKey: "option-beach-up.png",
					selectedKey: "option-beach-down.png",
					x: 316,
					y: 310
				},
				{
					downKey: "option-movie-down.png",
					outKey: "option-movie-up.png",
					overKey: "option-movie-up.png",
					upKey: "option-movie-up.png",
					selectedKey: "option-movie-down.png",
					x: 483,
					y: 310
				}
			]
		},
		startGameButton: {
			downKey: "start-down.png",
			outKey: "start-up.png",
			overKey: "start-down.png",
			upKey: "start-up.png",
			x: 326,
			y: 509
		}
	},

	map: {
		fuelReward: 0.48,
		fuelRewardDuration: 1200,
		fuelRewardSoundKey: "scroll43_mod",
		checkpointSoundKey: "nice_nav_42",
		travelSoundKey: "scroll16",
		background: {
			key: "map-background.png",
			x: 0,
			y: 0
		},
		fuel: {
			gauge: {
				key: "fuel-gauge.png",
				x: 637,
				y: 437
			},
			needle: {
				key: "fuel-gauge-needle.png",
				x: 707, 
				y: 519, 
				xAnchor: 0.5,
				yAnchor: 0.833,
				emptyAngle: -65,
				fullAngle: 65
			}
		},
		player: {
			vehicleKeys: [
				"suv.png",
				"convertible.png",
				"truck.png"
			]
		},
		destination: {
			x: 280,
			y: 359,
			visual: [
				{ key: "destination-park.png" },
				{ key: "destination-beach.png" },
				{ key: "destination-movie.png" }
			]
		},
		checkpoint: {
			plainKey: "checkpoint-plain.png",
			correctKey: "checkpoint-correct.png",
			incorrectKey: "checkpoint-incorrect.png",
			option: {
				downKey: "checkpoint-option-down.png",
				outKey: "checkpoint-option-up.png",
				overKey: "checkpoint-option-down.png",
				upKey: "checkpoint-option-up.png"
			}
		},
		locations: [
			{
				x: 101,
				y: 153,
				next: [1],
				travelTimes: [2000],
				fuelCosts: [-.33],
				type: "home",
				interpolation: [[]]
			},
			{ 
				x: 100, 
				y: 300, 
				next: [2],
				travelTimes: [2000],
				fuelCosts: [-.33],
				type: "checkpoint",
				interpolation: [
					[
						{ x: 94, y: 461 }
					]
				]
			},
			{ 
				x: 151, 
				y: 468, 
				next: [3, 4],
				travelTimes: [2000, 4000],
				fuelCosts: [-.33, -.57],
				type: "checkpoint",
				interpolation: [
					[
						{ x: 211, y: 363 }
					], 
					[
						{ x: 119, y: 381 },
						{ x: 164, y: 331 },
						{ x: 250, y: 300 },
						{ x: 177, y: 216 },
						{ x: 145, y: 140 }
					]
				]
			},
			{ 
				x: 251, 
				y: 340, 
				next: [4],
				travelTimes: [2000],
				fuelCosts: [-.33],
				type: "checkpoint",
				interpolation: [[]]
			},
			{ 
				x: 250, 
				y: 167, 
				next: [5, 6],
				travelTimes: [2000, 4000],
				fuelCosts: [-.33, -.57],
				type: "checkpoint",
				interpolation: [
					[], 
					[
						{ x: 312, y: 179 },
						{ x: 316, y: 288 },
						{ x: 465, y: 364 },
						{ x: 408, y: 144 },
						{ x: 462, y: 108 },
						{ x: 543, y: 180 }
					]
				]
			},
			{ 
				x: 391, 
				y: 75, 
				next: [6],
				travelTimes: [2000],
				fuelCosts: [-.33],
				type: "checkpoint",
				interpolation: [[]]
			},
			{ 
				x: 567, 
				y: 104, 
				next: [7, 8],
				travelTimes: [2000, 4000],
				fuelCosts: [-.33, -.57],
				type: "checkpoint",
				interpolation: [
					[], 
					[
						{ x: 600, y: 0 },
						{ x: 699, y: 170 },
						{ x: 799, y: 188 },
						{ x: 795, y: 248 },
						{ x: 642, y: 295 }
					]
				]
			},
			{ 
				x: 601, 
				y: 237, 
				next: [8],
				travelTimes: [2000],
				fuelCosts: [-.33],
				type: "checkpoint",
				interpolation: [
					[
						{ x: 627, y: 369 }
					]
				]
			},
			{ 
				x: 682, 
				y: 373, 
				next: [9],
				travelTimes: [4000],
				fuelCosts: [-.57],
				type: "checkpoint",
				interpolation: [
					[
						{ x: 602, y: 529 },
						{ x: 420, y: 153 }
					]
				]
			},
			{ 
				x: 378, 
				y: 376, 
				next: [],
				travelTimes: [],
				type: "destination"
			}
		],
		endDialog: {
			background: {
				key: "end-dialog.png",
				x: 143,
				y: 20
			},
			playAgainButton: {
				downKey: "play-again-down.png",
				outKey: "play-again-up.png",
				overKey: "play-again-down.png",
				upKey: "play-again-up.png",
				vPadding: 20,
			},
			titleText: {
				font: "Cabin",
				hPadding: 20,
				vPadding: 30,
				fill: "#474749",
				size: 50
			},
			messageText: {
				font: "Cabin",
				hPadding: 40,
				vPadding: 10,
				fill: "#2D8EB6",
				size: 40
			},
			win: {
				title: "Great job!",
				winSoundKey: "marvelous_moment07",
				messages: [
					"You made it to the amusement park with fuel to spare!",
					"You made it to the beach with fuel to spare!",
					"You made it to the movie theater with fuel to spare!"
				],
				audioKeys: [
					"RTGoWAm",
					"RTGoWBe",
					"RTGoWMo"
				]
			},
			lose: {
				title: "Game over.",
				loseSoundKey: "scroll16_out",
				messages: [
					"You didn't have enough fuel to get to the amusement park.",
					"You didn't have enough fuel to get to the beach.",
					"You didn't have enough fuel to get to the movie theater.",
				],
				audioKeys: [
					"RTGoLAm",
					"RTGoLBe",
					"RTGoLMo"
				]
			}
		}
	},

	question: {
		background: {
			key: "map-background.png",
			x: 0,
			y: 0
		},
		dialogBox: {
			key: "question-dialog.png",
			x: 20,
			y: 26
		},
		questionText: {
			x: 65,
			y: 66,
			font: "Cabin",
			size: 18,
			fill: "#474749",
			width: 720,
			paddingBottom: 30
		},
		optionText: {
			x: 145,
			font: "Cabin",
			size: 17,
			fill: "#474749",
			width: 660,
			paddingBottom: 25
		},
		optionLabel: {
			overKey: "radio-down.png",
			outKey: "radio-up.png",
			downKey: "radio-down.png",
			upKey: "radio-up.png",
			highlightKey: "radio-down.png",
			text: {
				labels: ["A", "B", "C", "D", "E", "F"],
				font: "Cabin",
				size: 17,
				fill: "#ffffff",
				selectedFill: "#2D8EB6"
			},
			x: 110,
			textOffset: {
				x: 1,
				y: 3
			}
		},
		remediationText: {
			x: 100,
			y: 395,
			font: "Cabin",
			size: 18,
			fill: "#ffffff",
			width: 660
		},
		remediationLabel: {
			correctKey: "correct-icon.png",
			incorrectKey: "incorrect-icon.png",
			x: 44,
			y: 387
		},
		continueButton: {
			overKey: "continue-down.png",
			outKey: "continue-up.png",
			downKey: "continue-down.png",
			upKey: "continue-up.png",
			x: 296, 
			y: 492
		},
		incorrectSoundKey: "coolmallet_cmiddle",
		correctSoundKey: "coolmallet_c",
		bank: [
			{
				questionText: "Medications that are prescribed to a person by a doctor are called:",
				options: ["Over the counter drugs", "Prescription drugs", "Illegal drugs", "Safe drugs"],
				remediations: ["Not quite. Over the counter drugs don't need a prescription.", "That's right!", "Nope. Medications prescribed by a doctor are called prescription drugs.", "Incorrect. While prescription drugs can be safe when taken exactly as the doctor prescribes them, they're very dangerous when abused."],
				correct: 1,
				audioKey: "RTPQ1",
				remediationAudioKeys: ["RTPQ1rA", "RTPQ1rB", "RTPQ1rC", "RTPQ1rD"],
				audioData: {
				  "src": "q01.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ1",
				        "startTime": 0,
				        "duration": 12068.639455782313
				      },
				      {
				        "id": "RTPQ1rA",
				        "startTime": 14000,
				        "duration": 3322.67573696145
				      },
				      {
				        "id": "RTPQ1rB",
				        "startTime": 19000,
				        "duration": 796.1904761904748
				      },
				      {
				        "id": "RTPQ1rC",
				        "startTime": 21000,
				        "duration": 4726.145124716552
				      },
				      {
				        "id": "RTPQ1rD",
				        "startTime": 27000,
				        "duration": 7780.725623582768
				      }
				    ]
				  }
				}
			},
			{
				questionText: "What is one way people abuse prescription drugs?",
				options: ["Taking too little of the drug", "Forgetting to take the prescribed drug", "Taking the drug exactly as prescribed", "Taking someone else's prescription drug"],
				remediations: ["Nope. One way a person may abuse prescription drugs is by taking too much of the drug.", "Nope. Forgetting to take a prescribed drug isn't considered abusing it.", "Nope. This wouldn't be considered abuse.", "Correct! You should never take someone else's prescription drug. It can be very dangerous."],
				correct: 3,
				audioKey: "RTPQ2",
				remediationAudioKeys: ["RTPQ2rA", "RTPQ2rB", "RTPQ2rC", "RTPQ2rD"],
				audioData: {
				  "src": "q02.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ2",
				        "startTime": 0,
				        "duration": 14645.283446712017
				      },
				      {
				        "id": "RTPQ2rA",
				        "startTime": 16000,
				        "duration": 4842.947845804989
				      },
				      {
				        "id": "RTPQ2rB",
				        "startTime": 22000,
				        "duration": 3925.7596371882073
				      },
				      {
				        "id": "RTPQ2rC",
				        "startTime": 27000,
				        "duration": 2388.072562358275
				      },
				      {
				        "id": "RTPQ2rD",
				        "startTime": 31000,
				        "duration": 5557.50566893424
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Is it legal to take someone else's prescription drug?",
				options: ["Yes", "No", "It depends on the drug", "It depends on how old you are"],
				remediations: ["Sorry, but it's actually illegal to take someone else's prescription drug.", "That's right. Not only is it illegal, but it's also very dangerous.", "Sorry, but it doesn't matter what type of drug. It's not legal to take someone else's prescription drug.", "Sorry, but it doesn't matter how old you are. It's illegal to take someone else's prescription drug."],
				correct: 1,
				audioKey: "RTPQ3",
				remediationAudioKeys: ["RTPQ3rA", "RTPQ3rB", "RTPQ3rC", "RTPQ3rD"],
				audioData: {
				  "src": "q03.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ3",
				        "startTime": 0,
				        "duration": 11681.42857142857
				      },
				      {
				        "id": "RTPQ3rA",
				        "startTime": 13000,
				        "duration": 3892.0408163265315
				      },
				      {
				        "id": "RTPQ3rB",
				        "startTime": 18000,
				        "duration": 4153.28798185941
				      },
				      {
				        "id": "RTPQ3rC",
				        "startTime": 24000,
				        "duration": 5463.287981859409
				      },
				      {
				        "id": "RTPQ3rD",
				        "startTime": 31000,
				        "duration": 4792.040816326534
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Is taking too much of a prescribed drug considered abusing it?",
				options: ["Yes", "No", "It depends on the drug", "It depends on how old you are"],
				remediations: ["That's right. A person should never take more than what's prescribed by their doctor.", "Sorry, but taking too much of a prescribed drug is considered abusing it.", "Nope. It doesn't matter which drug it is. Taking too much of any prescribed drug is considered abusing it.", "Nope. It doesn't matter how old you are. Taking too much of any prescribed drug is considered abusing it."],
				correct: 0,
				audioKey: "RTPQ4",
				remediationAudioKeys: ["RTPQ4rA", "RTPQ4rB", "RTPQ4rC", "RTPQ4rD"],
				audioData: {
				  "src": "q04.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ4",
				        "startTime": 0,
				        "duration": 11504.489795918367
				      },
				      {
				        "id": "RTPQ4rA",
				        "startTime": 13000,
				        "duration": 3908.185941043083
				      },
				      {
				        "id": "RTPQ4rB",
				        "startTime": 18000,
				        "duration": 3781.3151927437652
				      },
				      {
				        "id": "RTPQ4rC",
				        "startTime": 23000,
				        "duration": 5611.496598639455
				      },
				      {
				        "id": "RTPQ4rD",
				        "startTime": 30000,
				        "duration": 5664.376417233562
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Which of these can be a long-term health effect of abusing prescription drugs?",
				options: ["Mood changes", "Addiction", "Heart failure", "All of the above"],
				remediations: ["Not quite. These are all considered long-term effects of abusing prescription drugs.", "Not quite. These are all considered long-term effects of abusing prescription drugs.", "Not quite. These are all considered long-term effects of abusing prescription drugs.", "Correct!"],
				correct: 3,
				audioKey: "RTPQ5",
				remediationAudioKeys: ["RTPQ5rABC", "RTPQ5rABC", "RTPQ5rABC", "RTPQ5rD"],
				audioData: {
				  "src": "q05.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ5",
				        "startTime": 0,
				        "duration": 11274.716553287983
				      },
				      {
				        "id": "RTPQ5rABC",
				        "startTime": 13000,
				        "duration": 4900.294784580499
				      },
				      {
				        "id": "RTPQ5rD",
				        "startTime": 19000,
				        "duration": 649.9999999999986
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Often, people who are addicted to heroin first became addicted to what?",
				options: ["Alcohol", "Snus", "Prescription drugs", "Inhalants"],
				remediations: ["Not quite. People who are addicted to heroin usually first became addicted to prescription drugs.", "Not quite. People who are addicted to heroin usually first became addicted to prescription drugs.", "Correct. People who are addicted to heroin often start out using prescription drugs.", "Not quite. People who are addicted to heroin usually first became addicted to prescription drugs."],
				correct: 2,
				audioKey: "RTPQ6",
				remediationAudioKeys: ["RTPQ6rABD", "RTPQ6rABD", "RTPQ6rD", "RTPQ6rABD"],
				audioData: {
				  "src": "q06.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ6",
				        "startTime": 0,
				        "duration": 10567.64172335601
				      },
				      {
				        "id": "RTPQ6rABD",
				        "startTime": 12000,
				        "duration": 5368.639455782315
				      },
				      {
				        "id": "RTPQ6rD",
				        "startTime": 19000,
				        "duration": 4396.303854875285
				      }
				    ]
				  }
				}
			},
			{
				questionText: "When someone who is addicted to a prescription drug stops using that drug they may experience diarrhea, shaking, vomiting and body aches. These are called:",
				options: ["Tolerance symptoms", "Alcohol poisoning", "Withdrawal symptoms", "Short-term effects"],
				remediations: ["That's incorrect. They're actually called withdrawal symptoms.", "That's incorrect. They're actually called withdrawal symptoms.", "That's correct.", "That's incorrect. They're actually called withdrawal symptoms."],
				correct: 2,
				audioKey: "RTPQ7",
				remediationAudioKeys: ["RTPQ7rABD", "RTPQ7rABD", "RTPQ7rC", "RTPQ7rABD"],
				audioData: {
				  "src": "q07.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ7",
				        "startTime": 0,
				        "duration": 16772.743764172337
				      },
				      {
				        "id": "RTPQ7rABD",
				        "startTime": 18000,
				        "duration": 4168.140589569162
				      },
				      {
				        "id": "RTPQ7rC",
				        "startTime": 24000,
				        "duration": 1006.8934240362814
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Which drug is so addictive that a person might only use it once or twice before becoming addicted to it?",
				options: ["Inhalants", "Marijuana", "Alcohol", "Heroin"],
				remediations: ["Sorry, the correct answer is heroin.", "Sorry, the correct answer is heroin.", "Sorry, the correct answer is heroin.", "That's right. It doesn't take much to become addicted to heroin."],
				correct: 3,
				audioKey: "RTPQ8",
				remediationAudioKeys: ["RTPQ8rABC", "RTPQ8rABC", "RTPQ8rABC", "RTPQ8rD"],
				audioData: {
				  "src": "q08.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ8",
				        "startTime": 0,
				        "duration": 12006.757369614512
				      },
				      {
				        "id": "RTPQ8rABC",
				        "startTime": 14000,
				        "duration": 2124.8526077097517
				      },
				      {
				        "id": "RTPQ8rD",
				        "startTime": 18000,
				        "duration": 3211.882086167801
				      }
				    ]
				  }
				}
			},
			{
				questionText: "As a person uses a drug, like alcohol, more often, it takes more of that drug to give them the same high that they experienced the first time. This is called:",
				options: ["Addiction", "Tolerance", "First use", "Sudden Sniffing Death Syndrome"],
				remediations: ["Not quite. It's actually called tolerance.", "Correct!", "Not quite. It's actually called tolerance.", "Not quite. It's actually called tolerance."],
				correct: 1,
				audioKey: "RTPQ9",
				remediationAudioKeys: ["RTPQ9rACD", "RTPQ9rB", "RTPQ9rACD", "RTPQ9rACD"],
				audioData: {
				  "src": "q09.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ9",
				        "startTime": 0,
				        "duration": 16215.555555555557
				      },
				      {
				        "id": "RTPQ9rACD",
				        "startTime": 18000,
				        "duration": 2801.269841269843
				      },
				      {
				        "id": "RTPQ9rB",
				        "startTime": 22000,
				        "duration": 787.5056689342408
				      }
				    ]
				  }
				}
			},
			{
				questionText: "As a person uses a drug more often, it takes less of the drug to give them the same high that they experienced the first time.",
				options: ["True", "False"],
				remediations: ["Nope. The opposite actually happens. It takes more of the drug to give them the same high.", "Correct! The opposite actually happens. It takes more of the drug to give them the same high."],
				correct: 1,
				audioKey: "RTPQ10",
				remediationAudioKeys: ["RTPQ10rA", "RTPQ10rB"],
				audioData: {
				  "src": "q10.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ10",
				        "startTime": 0,
				        "duration": 9215.079365079366
				      },
				      {
				        "id": "RTPQ10rA",
				        "startTime": 11000,
				        "duration": 4407.959183673469
				      },
				      {
				        "id": "RTPQ10rB",
				        "startTime": 17000,
				        "duration": 4417.165532879817
				      }
				    ]
				  }
				}
			},
			{
				questionText: "People can only become addicted to illegal drugs.",
				options: ["True", "False"],
				remediations: ["No way! A person can become addicted to legal drugs too, like prescription drugs.", "You're right! A person can become addicted to legal drugs too, like prescription drugs."],
				correct: 1,
				audioKey: "RTPQ11",
				remediationAudioKeys: ["RTPQ11rA", "RTPQ11rB"],
				audioData: {
				  "src": "q11.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ11",
				        "startTime": 0,
				        "duration": 5757.6870748299325
				      },
				      {
				        "id": "RTPQ11rA",
				        "startTime": 7000,
				        "duration": 5142.380952380952
				      },
				      {
				        "id": "RTPQ11rB",
				        "startTime": 14000,
				        "duration": 4473.492063492064
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Some drugs are more addictive than others.",
				options: ["True", "False"],
				remediations: ["That's correct!", "Sorry, but it's true. Some drugs are more addictive than others."],
				correct: 0,
				audioKey: "RTPQ12",
				remediationAudioKeys: ["RTPQ12rA", "RTPQ12rB"],
				audioData: {
				  "src": "q12.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ12",
				        "startTime": 0,
				        "duration": 4852.222222222223
				      },
				      {
				        "id": "RTPQ12rA",
				        "startTime": 6000,
				        "duration": 933.764172335601
				      },
				      {
				        "id": "RTPQ12rB",
				        "startTime": 8000,
				        "duration": 3792.517006802722
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Drugs like cocaine and heroin are so addictive that they might only be used once or twice before the user loses control and becomes addicted.",
				options: ["True", "False"],
				remediations: ["That's right! Scary, but true.", "Sorry, but it's true."],
				correct: 0,
				audioKey: "RTPQ13",
				remediationAudioKeys: ["RTPQ13rA", "RTPQ13rB"],
				audioData: {
				  "src": "q13.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ13",
				        "startTime": 0,
				        "duration": 9731.269841269841
				      },
				      {
				        "id": "RTPQ13rA",
				        "startTime": 11000,
				        "duration": 2499.7505668934236
				      },
				      {
				        "id": "RTPQ13rB",
				        "startTime": 15000,
				        "duration": 1824.126984126984
				      }
				    ]
				  }
				}
			},
			{
				questionText: "When is taking someone else's prescription drugs ok?",
				options: ["Always", "Never", "When you're sick or in pain"],
				remediations: ["No way! It's never safe to take someone else's prescription drugs.", "You're right! It's never safe to take someone else's prescription drugs.", "Nope. Because every person is different, it's never safe to take someone else's prescription drug."],
				correct: 1,
				audioKey: "RTPQ14",
				remediationAudioKeys: ["RTPQ14rA", "RTPQ14rB", "RTPQ14rC"],
				audioData: {
				  "src": "q14.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ14",
				        "startTime": 0,
				        "duration": 8567.233560090703
				      },
				      {
				        "id": "RTPQ14rA",
				        "startTime": 10000,
				        "duration": 3633.764172335601
				      },
				      {
				        "id": "RTPQ14rB",
				        "startTime": 15000,
				        "duration": 4038.752834467118
				      },
				      {
				        "id": "RTPQ14rC",
				        "startTime": 21000,
				        "duration": 4774.331065759636
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Prescription drugs are:",
				options: ["Medications you can buy over the counter", "Medications that a doctor prescribes to a person", "Not addicting"],
				remediations: ["Not quite. You need a prescription from your doctor to buy prescription drugs.", "Correct!", "Sorry, but prescription drugs can be addicting."],
				correct: 1,
				audioKey: "RTPQ15",
				remediationAudioKeys: ["RTPQ15rA", "RTPQ15rB", "RTPQ15rC"],
				audioData: {
				  "src": "q15.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ15",
				        "startTime": 0,
				        "duration": 9933.7641723356
				      },
				      {
				        "id": "RTPQ15rA",
				        "startTime": 11000,
				        "duration": 3974.7845804988665
				      },
				      {
				        "id": "RTPQ15rB",
				        "startTime": 16000,
				        "duration": 866.2585034013616
				      },
				      {
				        "id": "RTPQ15rC",
				        "startTime": 18000,
				        "duration": 2987.9365079365066
				      }
				    ]
				  }
				}
			},
			{
				questionText: "One way people may abuse prescription drugs is by crushing the pills and snorting the powder.",
				options: ["True", "False"],
				remediations: ["Unfortunately, that's true.", "Nope. Unfortunately, that's true."],
				correct: 0,
				audioKey: "RTPQ16",
				remediationAudioKeys: ["RTPQ16rA", "RTPQ16rB"],
				audioData: {
				  "src": "q16.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ16",
				        "startTime": 0,
				        "duration": 7256.25850340136
				      },
				      {
				        "id": "RTPQ16rA",
				        "startTime": 9000,
				        "duration": 1811.043083900227
				      },
				      {
				        "id": "RTPQ16rB",
				        "startTime": 12000,
				        "duration": 2331.1564625850333
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Taking a prescription drug without a prescription, or sharing a prescription drug with someone else, is breaking the law.",
				options: ["True", "False"],
				remediations: ["That's right!", "Actually, that's true."],
				correct: 0,
				audioKey: "RTPQ17",
				remediationAudioKeys: ["RTPQ17rA", "RTPQ17rB"],
				audioData: {
				  "src": "q17.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ17",
				        "startTime": 0,
				        "duration": 9514.98866213152
				      },
				      {
				        "id": "RTPQ17rA",
				        "startTime": 11000,
				        "duration": 843.7641723356002
				      },
				      {
				        "id": "RTPQ17rB",
				        "startTime": 13000,
				        "duration": 1642.5170068027217
				      }
				    ]
				  }
				}
			},
			{
				questionText: "People who abuse prescription drugs often have trouble:",
				options: ["At school", "At home", "With friends and family", "All of the above"],
				remediations: ["Not quite. There's usually trouble other places too.", "Not quite. There's usually trouble other places too.", "Not quite. There's usually trouble with other things too.", "Correct. Abusing prescription drugs can affect all areas of a person's life."],
				correct: 3,
				audioKey: "RTPQ18",
				remediationAudioKeys: ["RTPQ18rAB", "RTPQ18rAB", "RTPQ18rC", "RTPQ18rD"],
				audioData: {
				  "src": "q18.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ18",
				        "startTime": 0,
				        "duration": 9604.3537414966
				      },
				      {
				        "id": "RTPQ18rAB",
				        "startTime": 11000,
				        "duration": 3048.7528344671196
				      },
				      {
				        "id": "RTPQ18rC",
				        "startTime": 16000,
				        "duration": 3044.85260770975
				      },
				      {
				        "id": "RTPQ18rD",
				        "startTime": 21000,
				        "duration": 4473.12925170068
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Once a doctor writes a prescription for a drug like Oxycontin or Vicodin, the person can always get that drug.",
				options: ["True", "False"],
				remediations: ["Nope. Doctors won't usually authorize a refill for a prescription without first examining the person to make sure that he or she isn't getting addicted.", "Correct. Doctors won't usually authorize a refill for a prescription without first examining the person to make sure he or she isn't getting addicted."],
				correct: 1,
				audioKey: "RTPQ19",
				remediationAudioKeys: ["RTPQ19rA", "RTPQ19rB"],
				audioData: {
				  "src": "q19.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ19",
				        "startTime": 0,
				        "duration": 9970.408163265307
				      },
				      {
				        "id": "RTPQ19rA",
				        "startTime": 11000,
				        "duration": 7700.634920634919
				      },
				      {
				        "id": "RTPQ19rB",
				        "startTime": 20000,
				        "duration": 7586.258503401361
				      }
				    ]
				  }
				}
			},
			{
				questionText: "Prescription drugs that are considered opiates, such as Oxycontin and Vicodin, can have effects similar to heroin, when taken in higher doses.",
				options: ["True", "False"],
				remediations: ["That's right!", "That's incorrect. It's actually true."],
				correct: 0,
				audioKey: "RTPQ20",
				remediationAudioKeys: ["RTPQ20rA", "RTPQ20rB"],
				audioData: {
				  "src": "q20.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ20",
				        "startTime": 0,
				        "duration": 10195.895691609976
				      },
				      {
				        "id": "RTPQ20rA",
				        "startTime": 12000,
				        "duration": 945.0113378684808
				      },
				      {
				        "id": "RTPQ20rB",
				        "startTime": 14000,
				        "duration": 2969.999999999999
				      }
				    ]
				  }
				}
			},
			{
				questionText: "People cannot overcome addiction.",
				options: ["True", "False"],
				remediations: ["That's incorrect. Overcoming addiction isn't easy, but it can be done with the right help.", "That's right. Overcoming addiction isn't easy, but it can be done with the right help."],
				correct: 1,
				audioKey: "RTPQ21",
				remediationAudioKeys: ["RTPQ21rA", "RTPQ21rB"],
				audioData: {
				  "src": "q21.m4a",
				  "data": {
				    "audioSprite": [
				      {
				        "id": "RTPQ21",
				        "startTime": 0,
				        "duration": 4646.25850340136
				      },
				      {
				        "id": "RTPQ21rA",
				        "startTime": 6000,
				        "duration": 6218.662131519274
				      },
				      {
				        "id": "RTPQ21rB",
				        "startTime": 14000,
				        "duration": 4544.285714285714
				      }
				    ]
				  }
				}
			}
		]
	},

	vo: {
		gameOver: {
		  "src": "gameover.m4a",
		  "data": {
		    "audioSprite": [
		      {
		        "id": "RTGoLAm",
		        "startTime": 0,
		        "duration": 3521.269841269841
		      },
		      {
		        "id": "RTGoLBe",
		        "startTime": 5000,
		        "duration": 2721.088435374149
		      },
		      {
		        "id": "RTGoLCh",
		        "startTime": 9000,
		        "duration": 3706.916099773242
		      },
		      {
		        "id": "RTGoLMo",
		        "startTime": 14000,
		        "duration": 2931.632653061225
		      },
		      {
		        "id": "RTGoWAm",
		        "startTime": 18000,
		        "duration": 3381.292517006802
		      },
		      {
		        "id": "RTGoWBe",
		        "startTime": 23000,
		        "duration": 2771.723356009069
		      },
		      {
		        "id": "RTGoWMo",
		        "startTime": 27000,
		        "duration": 3285.0113378684823
		      }
		    ]
		  }
		},
		instructions: {
		  "src": "instructions.m4a",
		  "data": {
		    "audioSprite": [
		      {
		        "id": "RTI1",
		        "startTime": 0,
		        "duration": 3763.151927437642
		      },
		      {
		        "id": "RTI2",
		        "startTime": 5000,
		        "duration": 8152.040816326531
		      },
		      {
		        "id": "RTI3",
		        "startTime": 15000,
		        "duration": 9963.809523809523
		      },
		      {
		        "id": "RTI4",
		        "startTime": 26000,
		        "duration": 1045.7596371882082
		      }
		    ]
		  }
		}
	},

	sfx: {
	  "src": "sfx.m4a",
	  "data": {
	    "audioSprite": [
	      {
	        "id": "silence",
	        "startTime": 0,
	        "duration": 3000
	      },
	      {
	        "id": "coolmallet_c",
	        "startTime": 4000,
	        "duration": 911.383219954649
	      },
	      {
	        "id": "coolmallet_cmiddle",
	        "startTime": 6000,
	        "duration": 1339.7732426303853
	      },
	      {
	        "id": "deadbatteries",
	        "startTime": 9000,
	        "duration": 956.0997732426308
	      },
	      {
	        "id": "marvelous_moment03",
	        "startTime": 11000,
	        "duration": 3088.2539682539696
	      },
	      {
	        "id": "marvelous_moment07",
	        "startTime": 16000,
	        "duration": 2821.2244897959167
	      },
	      {
	        "id": "nice_nav_42",
	        "startTime": 20000,
	        "duration": 1233.560090702948
	      },
	      {
	        "id": "scroll16",
	        "startTime": 23000,
	        "duration": 1371.4285714285702
	      },
	      {
	        "id": "scroll16_out",
	        "startTime": 26000,
	        "duration": 1699.9999999999993
	      },
	      {
	        "id": "scroll43_mod",
	        "startTime": 29000,
	        "duration": 1250
	      }
	    ]
	  }
	}
}