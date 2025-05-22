stampOutSettings = {

	scormEnabled: soScormEnabled,

	autoScale: true,

	inspectorEnabled: false,

	textureKey: "texture",

	streakLimit: 2,

	loader: {
		backgroundColor: 0x3a3a3c,
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
		}
	},

	splash: {
		musicKey: "fun_in_the_sun",
		background: {
			x: 0,
			y: 0,
			key: 'splash-background.png' 
		},
		logo: {
			x: 187,
			y: 75,
			key: 'stamp-out-logo.png'
		},
		newGameButton: {
			x: 235,
			y: 382,
			overKey: "start-new-game-down.png",
			outKey: "start-new-game.png",
			downKey: "start-new-game-down.png",
			upKey: "start-new-game.png"
		},
		continueButton: {
			x: 253,
			y: 438,
			overKey: "continue-game-down.png",
			outKey: "continue-game.png",
			downKey: "continue-game-down.png",
			upKey: "continue-game.png"
		},
		howToPlayButton: {
			x: 278,
			y: 498,
			overKey: "how-to-play-down.png",
			outKey: "how-to-play.png",
			downKey: "how-to-play-down.png",
			upKey: "how-to-play.png"
		}
	},

	spinner: {
		completeSpins: 10,
		spinDuration: 5000,
		spinSfxKey: "spinner for board game 01",
		categoryHighlightSfxKey: "yourturn02",
		stampHighlightSfxKey: "yourturn08",
		postSpinPause: 1500,
		resultPool: [0, 1, 2, 3, 4, 5, 4],
		background: {
			x: 0,
			y: 0,
			key: "spinner-background.png"
		},
		wheel: {
			x: 153,
			y: 1, 
			overKey: "spinner-wheel-down.png",
			outKey: "spinner-wheel.png",
			downKey: "spinner-wheel-down.png",
			upKey: "spinner-wheel.png"
		},
		pointerShadow: {
			x: 404,
			y: 248,
			key: "spinner-pointer-shadow.png",
			pivotX: 21,
			pivotY: 104
		},
		pointer: {
			x: 401,
			y: 248,
			key: "spinner-pointer.png",
			pivotX: 21,
			pivotY: 104
		},
		section: [
			{
				id: "marijuana",
				x: 402,
				y: 41,
				key: "spinner-section-marijuana.png",
				highlightKey: "spinner-section-marijuana-hi.png",
				spinRange: [0, 60]
			},
			{
				id: "inhalants",
				x: 459,
				y: 146,
				key: "spinner-section-inhalants.png",
				highlightKey: "spinner-section-inhalants-hi.png",
				spinRange: [60, 120]
			},
			{
				id: "alcohol",
				x: 403,
				y: 283,
				key: "spinner-section-alcohol.png",
				highlightKey: "spinner-section-alcohol-hi.png",
				spinRange: [120, 180]
			},
			{
				id: "prescription",
				x: 223,
				y: 283,
				key: "spinner-section-prescription.png",
				highlightKey: "spinner-section-prescription-hi.png",
				spinRange: [180, 240]
			},
			{
				id: "stamp",
				x: 194,
				y: 146,
				key: "spinner-section-stamp.png",
				highlightKey: "spinner-section-stamp-hi.png",
				spinRange: [240, 300]
			},
			{
				id: "tobacco",
				x: 223,
				y: 41,
				key: "spinner-section-tobacco.png",
				highlightKey: "spinner-section-tobacco-hi.png",
				spinRange: [300, 360]
			}
		]
	},

	powerUp: [
		{
			type: "eliminate-two",
			indicatorX: 643,
			indicatorY: 533,
			indicatorActiveKey: "pu-indicator-eliminate.png",
			indicatorInactiveKey: "pu-indicator-eliminate-inactive.png",
			questionButtonX: 572,
			questionButtonY: 511,
			questionButtonOverKey: "power-up-eliminate-down.png",
			questionButtonOutKey: "power-up-eliminate-up.png",
			questionButtonDownKey: "power-up-eliminate-down.png",
			questionButtonUpKey: "power-up-eliminate-up.png",
			questionButtonDisabledKey: "power-up-eliminate-disabled.png",
			iconKey: "pu-icon-eliminate.png",
			description: "This will eliminate two of the options.",
			audioKey: "Pwr2Optns.aiff"
		},
		{
			type: "two-attempts",
			indicatorX: 690,
			indicatorY: 533,
			indicatorActiveKey: "pu-indicator-plus.png",
			indicatorInactiveKey: "pu-indicator-plus-inactive.png",
			questionButtonX: 643,
			questionButtonY: 511,
			questionButtonOverKey: "power-up-plus-down.png",
			questionButtonOutKey: "power-up-plus-up.png",
			questionButtonDownKey: "power-up-plus-down.png",
			questionButtonUpKey: "power-up-plus-up.png",
			questionButtonDisabledKey: "power-up-plus-disabled.png",
			iconKey: "pu-icon-plus.png",
			description: "This will give you a second attempt at the question.",
			audioKey: "Pwr2Tries.aiff"
		},
		{
			type: "skip",
			indicatorX: 736,
			indicatorY: 533,
			indicatorActiveKey: "pu-indicator-skip.png",
			indicatorInactiveKey: "pu-indicator-skip-inactive.png",
			questionButtonX: 712,
			questionButtonY: 511,
			questionButtonOverKey: "power-up-skip-down.png",
			questionButtonOutKey: "power-up-skip-up.png",
			questionButtonDownKey: "power-up-skip-down.png",
			questionButtonUpKey: "power-up-skip-up.png",
			questionButtonDisabledKey: "power-up-skip-disabled.png",
			iconKey: "pu-icon-skip.png",
			description: "This will let you skip this question.",
			audioKey: "PwrSkp.aiff"
		}
	],

	category: [
		{
			id: "marijuana",
			spinIndicatorX: 201,
			spinIndicatorY: 515,
			spinIndicatorKey: "indicator-marijuana.png",
			spinIndicatorStampedX: 192,
			spinIndicatorStampedY: 511,
			spinIndicatorStampedKey: "indicator-marijuana-stamp.png",
			questionBackgroundKey: "background-marijuana.png",
			selectionButton: {
				x: 86,
				y: 294,
				overKey: "marijuana-button-down.png",
				outKey: "marijuana-button-up.png",
				downKey: "marijuana-button-down.png",
				upKey: "marijuana-button-up.png"
			},
			winScreenIcon: {
				x: 91,
				y: 262,
				key: "marijuana-icon.png",
				stampX: 65,
				stampY: 237
			}
		},
		{
			id: "inhalants",
			spinIndicatorX: 284,
			spinIndicatorY: 515,
			spinIndicatorKey: "indicator-inhalants.png",
			spinIndicatorStampedX: 275,
			spinIndicatorStampedY: 511,
			spinIndicatorStampedKey: "indicator-inhalants-stamp.png",
			questionBackgroundKey: "background-inhalants.png",
			selectionButton: {
				x: 217,
				y: 294,
				overKey: "inhalant-button-down.png",
				outKey: "inhalant-button-up.png",
				downKey: "inhalant-button-down.png",
				upKey: "inhalant-button-up.png"
			},
			winScreenIcon: {
				x: 249,
				y: 265,
				key: "inhalant-icon.png",
				stampX: 200,
				stampY: 237
			}
		},
		{
			id: "alcohol",
			spinIndicatorX: 367,
			spinIndicatorY: 515,
			spinIndicatorKey: "indicator-alcohol.png",
			spinIndicatorStampedX: 358,
			spinIndicatorStampedY: 511,
			spinIndicatorStampedKey: "indicator-alcohol-stamp.png",
			questionBackgroundKey: "background-alcohol.png",
			selectionButton: {
				x: 348,
				y: 294,
				overKey: "alcohol-button-down.png",
				outKey: "alcohol-button-up.png",
				downKey: "alcohol-button-down.png",
				upKey: "alcohol-button-up.png"
			},
			winScreenIcon: {
				x: 390,
				y: 257,
				key: "alcohol-icon.png",
				stampX: 332,
				stampY: 237
			}
		},
		{
			id: "prescription",
			spinIndicatorX: 450,
			spinIndicatorY: 515,
			spinIndicatorKey: "indicator-prescription.png",
			spinIndicatorStampedX: 441,
			spinIndicatorStampedY: 511,
			spinIndicatorStampedKey: "indicator-prescription-stamp.png",
			questionBackgroundKey: "background-prescription.png",
			selectionButton: {
				x: 478,
				y: 294,
				overKey: "prescription-button-down.png",
				outKey: "prescription-button-up.png",
				downKey: "prescription-button-down.png",
				upKey: "prescription-button-up.png"
			},
			winScreenIcon: {
				x: 515,
				y: 263,
				key: "prescription-icon.png",
				stampX: 465,
				stampY: 237
			}
		},
		{
			id: "tobacco",
			spinIndicatorX: 533,
			spinIndicatorY: 515,
			spinIndicatorKey: "indicator-tobacco.png",
			spinIndicatorStampedX: 524,
			spinIndicatorStampedY: 511,
			spinIndicatorStampedKey: "indicator-tobacco-stamp.png",
			questionBackgroundKey: "background-tobacco.png",
			selectionButton: {
				x: 609,
				y: 294,
				overKey: "tobacco-button-down.png",
				outKey: "tobacco-button-up.png",
				downKey: "tobacco-button-down.png",
				upKey: "tobacco-button-up.png"
			},
			winScreenIcon: {
				x: 625,
				y: 279,
				key: "tobacco-icon.png",
				stampX: 597,
				stampY: 237
			}
		}
	],

	streak: [
		{
			x: 35,
			y: 526,
			key: "streak-0.png"
		},
		{
			x: 35,
			y: 526,
			key: "streak-1.png"
		},
		{
			x: 35,
			y: 526,
			key: "streak-2.png"
		}
	],

	instructions: {
		textPadding: 25,
		buttonPadding: 5,
		text: {
			width: 500,
			font: "Cabin",
			fill: "#FFFFFF",
			size: 14
		},
		dialog: {
			topKey: "dialog-top.png",
			middleKey: "dialog-middle.png",
			bottomKey: "dialog-bottom.png"
		},
		steps: [
			{
				text: "Spin the wheel to begin each turn. The wheel is split into six sections: inhalants, marijuana, tobacco, prescription drugs, alcohol and the stamp.",
				dialogX: 5,
				dialogY: 5,
				buttonDownKey: "next-over.png",
				buttonOutKey: "next-up.png",
				buttonOverKey: "next-over.png",
				buttonUpKey: "next-up.png",
				audioKey: "I1.aiff"
			},
			{
				text: "When the wheel stops on one of the five drugs, you will have to answer a question about that drug.",
				dialogX: 70,
				dialogY: 20,
				buttonDownKey: "next-over.png",
				buttonOutKey: "next-up.png",
				buttonOverKey: "next-over.png",
				buttonUpKey: "next-up.png",
				audioKey: "I2.aiff"
			},
			{
				text: "When the wheel stops on the stamp, or if you answer two drug questions in a row, you will get a chance to stamp out one of the drugs.",
				dialogX: 475,
				dialogY: 205,
				buttonDownKey: "next-over.png",
				buttonOutKey: "next-up.png",
				buttonOverKey: "next-over.png",
				buttonUpKey: "next-up.png",
				audioKey: "I3.aiff"
			},
			{
				text: "Select the drug category you would like to attempt. Then you will have to answer a question about that drug to stamp it out.",
				dialogX: 475,
				dialogY: 205,
				buttonDownKey: "next-over.png",
				buttonOutKey: "next-up.png",
				buttonOverKey: "next-over.png",
				buttonUpKey: "next-up.png",
				audioKey: "I4.aiff"
			},
			{
				text: "You get three power-ups per game. Use them if you need help with a question.",
				dialogX: 480,
				dialogY: 350,
				buttonDownKey: "next-over.png",
				buttonOutKey: "next-up.png",
				buttonOverKey: "next-over.png",
				buttonUpKey: "next-up.png",
				audioKey: "I5.aiff"
			},
			{
				text: "Stamp out all five drugs to win.",
				dialogX: 250,
				dialogY: 370,
				buttonDownKey: "begin-down.png",
				buttonOutKey: "begin-up.png",
				buttonOverKey: "begin-down.png",
				buttonUpKey: "begin-up.png",
				audioKey: "I6.aiff"
			}
		]
	},

	questionScreen: {
		powerUpLabelX: 400,
		powerUpLabelY: 521,
		powerUpLabelKey: "power-ups-label.png",
		optionLabelKey: [
			"a-up.png", "b-up.png", "c-up.png", "d-up.png"
		],
		optionLabelHighlightKey: [
			"a-down.png", "b-down.png", "c-down.png", "d-down.png"
		],
		questionText: {
			x: 42,
			y: 42,
			font: "Cabin",
			fill: "#ffffff",
			size: 22,
			paddingRight: 20,
			paddingBottom: 20
		},
		optionText: {
			x: 102,
			font: "Cabin",
			fill: "#ffffff",
			highlightFill: "#FFCE06",
			highlightShadow: {
				use: true,
				offset: 2,
				color: "#3F3F3F"
			},
			size: 22,
			paddingRight: 20,
			paddingBottom: 20
		},
		remediationBackgroundX: 0,
		remediationBackgroundY: 397,
		remediationBackgroundKey: "remediation-bg.png",
		remediationText: {
			x: 42,
			y: 433,
			font: "Cabin",
			fill: "#939598",
			size: 20,
			paddingRight: 20
		},
		continueButton: {
			x: 552,
			y: 534,
			downKey: "continue-down.png",
			outKey: "continue-up.png",
			overKey: "continue-down.png",
			upKey: "continue-up.png"
		},
		correctSfxKey: "magicmallet_c",
		incorrectSfxKey: "magicmallet_cmiddle",
		powerUpSelectSfxKey: "nice_nav_40"
	},

	topicSelectScreen: {
		backgroundKey: "background-plain.png",
		prompt: {
			text: "Select the drug you would like to try to stamp out.",
			x: 220,
			y: 180,
			width: 360,
			font: "Cabin",
			fill: "#FFFFFF",
			size: 27,
			align: "center",
			audioKey: "TopSel.aiff"
		}
	},

	topicWinScreen: {
		backgroundKey: "background-plain.png",
		stampKey: "stamp.png",
		stampSfxKey: "cupboard_close_01",
		winVoKey: "Win_mixdown",
		continueButton: {
			x: 552,
			y: 534,
			downKey: "continue-down.png",
			outKey: "continue-up.png",
			overKey: "continue-down.png",
			upKey: "continue-up.png"
		},
		playAgainButton: {
			x: 279,
			y: 429,
			downKey: "play-again-down.png",
			outKey: "play-again-up.png",
			overKey: "play-again-down.png",
			upKey: "play-again-up.png"
		},
		greatJob: {
			x: 200,
			y: 76,
			key: "great-job.png"
		},
		winPrompt: {
			text: "You stamped out all five drugs!",
			x: 400,
			y: 150,
			width: 500,
			font: "Cabin",
			fill: "#FFFFFF",
			size: 27,
			align: "center"
		}
	},

	powerUpSelectScreen: {
		backgroundKey: "background-plain.png",
		useButton: {
			x: 239,
			y: 474,
			downKey: "use-down.png",
			outKey: "use-up.png",
			overKey: "use-down.png",
			upKey: "use-up.png"
		},
		cancelButton: {
			x: 395,
			y: 474,
			downKey: "cancel-down.png",
			outKey: "cancel-up.png",
			overKey: "cancel-down.png",
			upKey: "cancel-up.png"
		},
		iconX: 319,
		iconY: 100,
		prompt: {
			x: 400,
			y: 330,
			width: 600,
			font: "Cabin",
			fill: "#FFFFFF",
			size: 27,
			align: "center"
		}
		
	},

	questionCategory: [

		//marijuana
		{
			id: "marijuana",
			question: [
				{
					questionText: "Marijuana is a shredded, green or brown mix of dried flowers, stems and leaves from which plant?",
					option: ["Poinsetta", 
							 "Tobacco", 
							 "Cannabis sativa", 
							 "Carnation"],
					remediation: ["Sorry, marijuana comes from the cannabis sativa plant.", 
							 	  "Sorry, marijuana comes from the cannabis sativa plant.", 
							 	  "You got it!", 
							 	  "Sorry, marijuana comes from the cannabis sativa plant."],
					correctIndex: 2,
					questionAudio: "MarQ1.aiff",
					remediationAudio: ["MarQ1abd.aiff", "MarQ1abd.aiff", "MarQ1c.aiff", "MarQ1abd.aiff"],
					audioData: {
					  "src": "mar01.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ1.aiff",
					        "startTime": 4000,
					        "duration": 15896.349206349207
					      },
					      {
					        "id": "MarQ1abd.aiff",
					        "startTime": 21000,
					        "duration": 3280.0680272108843
					      },
					      {
					        "id": "MarQ1c.aiff",
					        "startTime": 26000,
					        "duration": 962.1995464852624
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What is the main active chemical in marijuana?",
					option: ["THC", 
							 "HGB", 
							 "DT9", 
							 "LDC"],
					remediation: ["You're right!", 
							 	  "Nope. The main active chemical in marijuana is THC.", 
							 	  "Nope. The main active chemical in marijuana is THC.", 
							 	  "Nope. The main active chemical in marijuana is THC."],
					correctIndex: 0,
					questionAudio: "MarQ2.aiff",
					remediationAudio: ["MarQ2Ra.aiff", "MarQ2Rbcd.aiff", "MarQ2Rbcd.aiff", "MarQ2Rbcd.aiff"],
					audioData: {
					  "src": "mar02.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ2.aiff",
					        "startTime": 4000,
					        "duration": 13184.240362811792
					      },
					      {
					        "id": "MarQ2Ra.aiff",
					        "startTime": 19000,
					        "duration": 839.7959183673471
					      },
					      {
					        "id": "MarQ2Rbcd.aiff",
					        "startTime": 21000,
					        "duration": 4383.696145124716
					      }
					    ]
					  }
					}
				},
				{
					questionText: "About how long does the high from marijuana last?",
					option: ["A few minutues", 
							 "1-3 hours", 
							 "8-9 hours", 
							 "12 hours or more"],
					remediation: ["Not quite. A high from marijuana usually lasts 1-3 hours.", 
							 	  "That's correct!", 
							 	  "Nope. A high from marijuana usually only lasts 1-3 hours.", 
							 	  "No way! A high from marijuana usually only lasts 1-3 hours."],
					correctIndex: 1,
					questionAudio: "MarQ3.aiff",
					remediationAudio: ["MarQ3Ra.aiff", "MarQ3Rb.aiff", "MarQ3Rcd.aiff", "MarQ3Rcd.aiff"],
					audioData: {
					  "src": "mar03.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ3.aiff",
					        "startTime": 4000,
					        "duration": 12595.260770975055
					      },
					      {
					        "id": "MarQ3Ra.aiff",
					        "startTime": 18000,
					        "duration": 4719.727891156463
					      },
					      {
					        "id": "MarQ3Rb.aiff",
					        "startTime": 24000,
					        "duration": 848.7074829931985
					      },
					      {
					        "id": "MarQ3Rcd.aiff",
					        "startTime": 26000,
					        "duration": 4956.167800453514
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of the following is a short-term effect of marijuana use?",
					option: ["Better memory", 
							 "Decreased appetite", 
							 "Clear eyes", 
							 "Feeling lightheaded"],
					remediation: ["Nope. Actually, someone who uses marijuana can have problems with their memory.", 
							 	  "Sorry, but actually the opposite happens when using marijuana.", 
							 	  "Nope. A person's eyes can actually become bloodshot when using marijuana.", 
							 	  "You got it! Feeling lightheaded can definitely be a short-term effect of marijuana use."],
					correctIndex: 3,
					questionAudio: "MarQ4.aiff",
					remediationAudio: ["MarQ4Ra.aiff", "MarQ4Rb.aiff", "MarQ4Rc.aiff", "MarQ4Rd.aiff"],
					audioData: {
					  "src": "mar04.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ4.aiff",
					        "startTime": 4000,
					        "duration": 12091.836734693878
					      },
					      {
					        "id": "MarQ4Ra.aiff",
					        "startTime": 18000,
					        "duration": 4709.931972789114
					      },
					      {
					        "id": "MarQ4Rb.aiff",
					        "startTime": 24000,
					        "duration": 3763.4013605442183
					      },
					      {
					        "id": "MarQ4Rc.aiff",
					        "startTime": 29000,
					        "duration": 4306.870748299318
					      },
					      {
					        "id": "MarQ4Rd.aiff",
					        "startTime": 35000,
					        "duration": 4987.573696145127
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of the following is a long-term effect of marijuana use?",
					option: ["Better memory", 
							 "More energy", 
							 "Vomiting", 
							 "Chronic cough"],
					remediation: ["No way! A person's memory does not improve from marijuana use.", 
							 	  "Nope! Using marijuana does not give a person more energy.", 
							 	  "Nope. Vomiting usually isn't a long-term effect of marijuana use.", 
							 	  "That's right! Long-term use of marijuana can cause other respiratory problems too, such as bronchitis."],
					correctIndex: 3,
					questionAudio: "MarQ5.aiff",
					remediationAudio: ["MarQ5Ra.aiff", "MarQ5Rb.aiff", "MarQ5Rc.aiff", "MarQ5Rd.aiff"],
					audioData: {
					  "src": "mar05.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ5.aiff",
					        "startTime": 4000,
					        "duration": 11195.78231292517
					      },
					      {
					        "id": "MarQ5Ra.aiff",
					        "startTime": 17000,
					        "duration": 4514.013605442176
					      },
					      {
					        "id": "MarQ5Rb.aiff",
					        "startTime": 23000,
					        "duration": 3771.7913832199556
					      },
					      {
					        "id": "MarQ5Rc.aiff",
					        "startTime": 28000,
					        "duration": 4253.4240362811815
					      },
					      {
					        "id": "MarQ5Rd.aiff",
					        "startTime": 34000,
					        "duration": 6179.931972789113
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which body system helps fight off infections, and can be negatively affected by marijuana use?",
					option: ["Skeletal systems", 
							 "Muscular system", 
							 "Immune system", 
							 "Digestive system"],
					remediation: ["Not quite. The immune system is what helps the body fight off infections.", 
							 	  "Not quite. The immune system is what helps the body fight off infections", 
							 	  "Correct! If someone smokes marijuana regularly, their immune system won't work as well.", 
							 	  "Not quite. The immune system is what helps the body fight off infections."],
					correctIndex: 2,
					questionAudio: "MarQ6.aiff",
					remediationAudio: ["MarQ6Rabd.aiff", "MarQ6Rabd.aiff", "MarQ6Rc.aiff", "MarQ6Rabd.aiff"],
					audioData: {
					  "src": "mar06.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ6.aiff",
					        "startTime": 4000,
					        "duration": 16314.444444444443
					      },
					      {
					        "id": "MarQ6Rabd.aiff",
					        "startTime": 22000,
					        "duration": 4712.834467120181
					      },
					      {
					        "id": "MarQ6Rc.aiff",
					        "startTime": 28000,
					        "duration": 5009.999999999998
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Is it legal in Wisconsin to grow or possess marijuana?",
					option: ["Yes", 
							 "No", 
							 "Depends on your age", 
							 "Depends on which city you live in"],
					remediation: ["That's incorrect. It is illegal to grow, possess, or sell marijuana in Wisconsin.", 
							 	  "That's right! It is illegal to grow, possess, or sell marijuana in Wisconsin.", 
							 	  "Sorry, but it doesn't matter how old you are. It is illegal to grow, possess, or sell marijuana in Wisconsin.", 
							 	  "Sorry, but it doesn't matter which city you live in. It is illegal to grow, possess, or sell marijuana in Wisconsin."],
					correctIndex: 1,
					questionAudio: "MarQ7.aiff",
					remediationAudio: ["MarQ7Ra.aiff", "MarQ7Rb.aiff", "MarQ7Rc.aiff", "MarQ7Rd.aiff"],
					audioData: {
					  "src": "mar07.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ7.aiff",
					        "startTime": 4000,
					        "duration": 13466.848072562356
					      },
					      {
					        "id": "MarQ7Ra.aiff",
					        "startTime": 19000,
					        "duration": 5810.544217687074
					      },
					      {
					        "id": "MarQ7Rb.aiff",
					        "startTime": 26000,
					        "duration": 5403.469387755102
					      },
					      {
					        "id": "MarQ7Rc.aiff",
					        "startTime": 33000,
					        "duration": 7815.238095238094
					      },
					      {
					        "id": "MarQ7Rd.aiff",
					        "startTime": 42000,
					        "duration": 7949.047619047618
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these is an example of making up an excuse when a friend pressures you to use marijuana?",
					option: ["Walking away", 
							 "Saying you forgot you had to babysit", 
							 "Saying no", 
							 "Pressuring your friend"],
					remediation: ["Not quite. Walking away is a good option, but it's not considered making up an excuse.", 
							 	  "That's right! Another excuse could be that you have a big test you have to study for.", 
							 	  "Nope. Saying no is a great option, but it's not considered making up an excuse.", 
							 	  "Not quite. Pressuring your friend not to do what they're trying to get you to do is definitely an option, but it's not considered making up an excuse."],
					correctIndex: 1,
					questionAudio: "MarQ8.aiff",
					remediationAudio: ["MarQ8Ra.aiff", "MarQ8Rb.aiff", "MarQ8Rc.aiff", "MarQ8Rd.aiff"],
					audioData: {
					  "src": "mar08.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ8.aiff",
					        "startTime": 4000,
					        "duration": 15770.839002267572
					      },
					      {
					        "id": "MarQ8Ra.aiff",
					        "startTime": 21000,
					        "duration": 6005.7142857142835
					      },
					      {
					        "id": "MarQ8Rb.aiff",
					        "startTime": 29000,
					        "duration": 4313.310657596375
					      },
					      {
					        "id": "MarQ8Rc.aiff",
					        "startTime": 35000,
					        "duration": 5211.088435374151
					      },
					      {
					        "id": "MarQ8Rd.aiff",
					        "startTime": 42000,
					        "duration": 7896.099773242632
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of the following could be an external influence to use marijuana?",
					option: ["Fears", 
							 "Likes and dislikes", 
							 "Peers", 
							 "Interests"],
					remediation: ["No, fears would be considered an internal influence.", 
							 	  "No, likes and dislikes would be considered internal influences.", 
							 	  "You got it! Other external influences are the media, technology and laws.", 
							 	  "No, interests would be considered an internal influence."],
					correctIndex: 2,
					questionAudio: "MarQ9.aiff",
					remediationAudio: ["MarQ9Ra.aiff", "MarQ9Rb.aiff", "MarQ9Rc.aiff", "MarQ9Rd.aiff"],
					audioData: {
					  "src": "mar09.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "MarQ9.aiff",
					        "startTime": 4000,
					        "duration": 12641.519274376416
					      },
					      {
					        "id": "MarQ9Ra.aiff",
					        "startTime": 18000,
					        "duration": 3476.258503401361
					      },
					      {
					        "id": "MarQ9Rb.aiff",
					        "startTime": 23000,
					        "duration": 4208.276643990928
					      },
					      {
					        "id": "MarQ9Rc.aiff",
					        "startTime": 29000,
					        "duration": 5409.546485260769
					      },
					      {
					        "id": "MarQ9Rd.aiff",
					        "startTime": 36000,
					        "duration": 3739.0702947845825
					      }
					    ]
					  }
					}
				}
			]
		},

		//inhalants
		{
			id: "inhalants",
			question: [
				{
					questionText: "Which of the following is an example of inhalants?",
					option: ["Cigarettes", 
							 "Marijuana", 
							 "Cleaning products", 
							 "Soap"],
					remediation: ["Nope. Cigarettes are a tobacco product.", 
							 	  "Sorry, marijuana is not an inhalant.", 
							 	  "You're right! When used to get high, cleaning products are considered inhalants.", 
							 	  "Sorry, soap is not an inhalant."],
					correctIndex: 2,
					questionAudio: "InhQ1.aiff",
					remediationAudio: ["InhQ1Ra.aiff", "InhQ1Rb.aiff", "InhQ1Rc.aiff", "InhQ1Rd.aiff"],
					audioData: {
					  "src": "inh01.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ1.aiff",
					        "startTime": 4000,
					        "duration": 9984.875283446712
					      },
					      {
					        "id": "InhQ1Ra.aiff",
					        "startTime": 15000,
					        "duration": 2351.70068027211
					      },
					      {
					        "id": "InhQ1Rb.aiff",
					        "startTime": 19000,
					        "duration": 2464.8072562358293
					      },
					      {
					        "id": "InhQ1Rc.aiff",
					        "startTime": 23000,
					        "duration": 4080.4988662131514
					      },
					      {
					        "id": "InhQ1Rd.aiff",
					        "startTime": 29000,
					        "duration": 2200.929705215419
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of the following is not considered an inhalant?",
					option: ["Spray paint", 
							 "Beer", 
							 "Hairspray", 
							 "Gasoline"],
					remediation: ["That's incorrect. When used to get high, spray paint is considered an inhalant.", 
							 	  "You got it! Beer is not considered an inhalant.", 
							 	  "Sorry, when used to get high, hairspray is considered an inhalant.", 
							 	  "Nope. When used to get high, gasoline is considered an inhalant."],
					correctIndex: 1,
					questionAudio: "InhQ2.aiff",
					remediationAudio: ["InhQ2Ra.aiff", "InhQ2Rb.aiff", "InhQ2Rc.aiff", "InhQ2Rd.aiff"],
					audioData: {
					  "src": "inh02.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ2.aiff",
					        "startTime": 4000,
					        "duration": 10873.514739229026
					      },
					      {
					        "id": "InhQ2Ra.aiff",
					        "startTime": 16000,
					        "duration": 4288.730158730161
					      },
					      {
					        "id": "InhQ2Rb.aiff",
					        "startTime": 22000,
					        "duration": 2893.696145124718
					      },
					      {
					        "id": "InhQ2Rc.aiff",
					        "startTime": 26000,
					        "duration": 4128.072562358277
					      },
					      {
					        "id": "InhQ2Rd.aiff",
					        "startTime": 32000,
					        "duration": 3639.3197278911557
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these is an example of using inhalants?",
					option: ["Painting a picture", 
							 "Spraying hairspray on your hair", 
							 "Sniffing glue to get high", 
							 "Filling the car with gas"],
					remediation: ["Nope. When used correctly, paint is not an inhalant.", 
							 	  "That's incorrect. When used correctly, hairspray is not an inhalant.", 
							 	  "That's right. Using glue, or other products like hairspray, cleaning products, and spray paint to get high is considered using an inhalant.", 
							 	  "Nope. Remember that using a product as it is supposed to be used is not considered using an inhalant."],
					correctIndex: 2,
					questionAudio: "InhQ3.aiff",
					remediationAudio: ["InhQ3Ra.aiff", "InhQ3Rb.aiff", "InhQ3Rc.aiff", "InhQ3Rd.aiff"],
					audioData: {
					  "src": "inh03.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ3.aiff",
					        "startTime": 4000,
					        "duration": 13866.553287981858
					      },
					      {
					        "id": "InhQ3Ra.aiff",
					        "startTime": 19000,
					        "duration": 3364.6485260770974
					      },
					      {
					        "id": "InhQ3Rb.aiff",
					        "startTime": 24000,
					        "duration": 4107.868480725624
					      },
					      {
					        "id": "InhQ3Rc.aiff",
					        "startTime": 30000,
					        "duration": 7476.553287981858
					      },
					      {
					        "id": "InhQ3Rd.aiff",
					        "startTime": 39000,
					        "duration": 6795.9410430839
					      }
					    ]
					  }
					}
				},
				{
					questionText: "How long does the high from using inhalants usually last?",
					option: ["A few minutes", 
							 "1-2 hours", 
							 "3-4 hours", 
							 "12 hours"],
					remediation: ["You got it! Because the high is so short, some people will continue to sniff the product to make the high last longer.", 
							 	  "No way! A typical high from using inhalants only lasts a few minutes.", 
							 	  "No way! A typical high from using inhalants only lasts a few minutes.", 
							 	  "No way! A typical high from using inhalants only lasts a few minutes."],
					correctIndex: 0,
					questionAudio: "InhQ4.aiff",
					remediationAudio: ["InhQ4Ra.aiff", "InhQ4Rbcd.aiff", "InhQ4Rbcd.aiff", "InhQ4Rbcd.aiff"],
					audioData: {
					  "src": "inh04.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ4.aiff",
					        "startTime": 4000,
					        "duration": 12481.972789115645
					      },
					      {
					        "id": "InhQ4Ra.aiff",
					        "startTime": 18000,
					        "duration": 6274.217687074831
					      },
					      {
					        "id": "InhQ4Rbcd.aiff",
					        "startTime": 26000,
					        "duration": 4267.029478458049
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these can be a long-term health effect of using inhalants?",
					option: ["Headaches", 
							 "Increased energy", 
							 "Increased sense of smell", 
							 "Clearer thinking"],
					remediation: ["That's right. Other long-term effects include nosebleeds, depression, and even brain damage.", 
							 	  "That's incorrect. Using inhalants does not give a person more energy!", 
							 	  "Nope. Actually, the opposite can happen and a person can lose their sense of smell.", 
							 	  "No way! Using inhalants definitely doesn't help a person think clearly."],
					correctIndex: 0,
					questionAudio: "InhQ5.aiff",
					remediationAudio: ["InhQ5Ra.aiff", "InhQ5Rb.aiff", "InhQ5Rc.aiff", "InhQ5Rd.aiff"],
					audioData: {
					  "src": "inh05.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ5.aiff",
					        "startTime": 4000,
					        "duration": 11850.702947845806
					      },
					      {
					        "id": "InhQ5Ra.aiff",
					        "startTime": 17000,
					        "duration": 5681.269841269842
					      },
					      {
					        "id": "InhQ5Rb.aiff",
					        "startTime": 24000,
					        "duration": 3918.571428571429
					      },
					      {
					        "id": "InhQ5Rc.aiff",
					        "startTime": 29000,
					        "duration": 4918.480725623582
					      },
					      {
					        "id": "InhQ5Rd.aiff",
					        "startTime": 35000,
					        "duration": 4596.57596371882
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What is it called when a person's heart stops while using inhalants, causing them to die?",
					option: ["Sudden Inhalant Death", 
							 "Sniffing Glue Syndrome", 
							 "Rapid Death Syndrome", 
							 "Sudden Sniffing Death Syndrome"],
					remediation: ["Not quite. It's actually called Sudden Sniffing Death Syndrome.", 
							 	  "Not quite. It's actually called Sudden Sniffing Death Syndrome.", 
							 	  "Not quite. It's actually called Sudden Sniffing Death Syndrome.", 
							 	  "You got it! And, remember it can happen even the first time a person uses inhalants."],
					correctIndex: 3,
					questionAudio: "InhQ6.aiff",
					remediationAudio: ["InhQ6Rabc.aiff", "InhQ6Rabc.aiff", "InhQ6Rabc.aiff", "InhQ6Rd.aiff"],
					audioData: {
					  "src": "inh06.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ6.aiff",
					        "startTime": 4000,
					        "duration": 14874.036281179136
					      },
					      {
					        "id": "InhQ6Rabc.aiff",
					        "startTime": 20000,
					        "duration": 3939.9319727891148
					      },
					      {
					        "id": "InhQ6Rd.aiff",
					        "startTime": 25000,
					        "duration": 5636.3945578231305
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Can a person die the first time they use inhalants?",
					option: ["It depends on thier age", 
							 "Yes", 
							 "No", 
							 "Only if they're using spray paint"],
					remediation: ["Nope. Age has nothing to do with it. Anyone could die the first time they use an inhalant.", 
							 	  "That's correct!", 
							 	  "Sorry, but a person can die the first time they use an inhalant.", 
							 	  "That's incorrect. It doesn't matter what product is being used as an inhalant. They can all cause a person to die."],
					correctIndex: 1,
					questionAudio: "InhQ7.aiff",
					remediationAudio: ["InhQ7Ra.aiff", "InhQ7Rb.aiff", "InhQ7Rc.aiff", "InhQ7Rd.aiff"],
					audioData: {
					  "src": "inh07.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ7.aiff",
					        "startTime": 4000,
					        "duration": 12935.464852607709
					      },
					      {
					        "id": "InhQ7Ra.aiff",
					        "startTime": 18000,
					        "duration": 5043.718820861677
					      },
					      {
					        "id": "InhQ7Rb.aiff",
					        "startTime": 25000,
					        "duration": 945.4421768707491
					      },
					      {
					        "id": "InhQ7Rc.aiff",
					        "startTime": 27000,
					        "duration": 3946.3265306122466
					      },
					      {
					        "id": "InhQ7Rd.aiff",
					        "startTime": 32000,
					        "duration": 6661.473922902494
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these would be an example of indirect pressure?",
					option: ["Someone handing you a beer and saying 'come on, just try it'",
							 "A friend asking you to to try inhalants", 
							 "A classmate pressuring you to cheat", 
							 "Being at a party where everyone's using inhalants"],
					remediation: ["Nope. That would be direct pressure because a direct offer is being made.", 
							 	  "Nope. That would be direct pressure because a direct offer is being made.", 
							 	  "Nope. That would be direct pressure.", 
							 	  "That's right. Even though no direct offer or comment is made, there may still be pressure to use inhalants in order to fit in, so it's considered indirect pressure."],
					correctIndex: 3,
					questionAudio: "InhQ8.aiff",
					remediationAudio: ["InhQ8Rab.aiff", "InhQ8Rab.aiff", "InhQ8Rc.aiff", "InhQ8Rd.aiff"],
					audioData: {
					  "src": "inh08.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ8.aiff",
					        "startTime": 4000,
					        "duration": 17970.929705215418
					      },
					      {
					        "id": "InhQ8Rab.aiff",
					        "startTime": 23000,
					        "duration": 3905.555555555555
					      },
					      {
					        "id": "InhQ8Rc.aiff",
					        "startTime": 28000,
					        "duration": 2526.0090702947837
					      },
					      {
					        "id": "InhQ8Rd.aiff",
					        "startTime": 32000,
					        "duration": 9173.28798185941
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these would be a personal reason for not wanting to use inhalants?",
					option: ["I have to go!",
							 "No thanks", 
							 "Let's go to a movie instead", 
							 "I have a cousin who almost died from inhalants"],
					remediation: ["Not quite. Giving a personal reason would be telling why you don't want to use inhalants.", 
							 	  "Not quite. Saying no is great, but it's not giving a personal reason.", 
							 	  "Sorry, this would be considered coming up with something else to do.", 
							 	  "Good job! This is definitely a personal reason."],
					correctIndex: 3,
					questionAudio: "InhQ9.aiff",
					remediationAudio: ["InhQ9Ra.aiff", "InhQ9Rb.aiff", "InhQ9Rc.aiff", "InhQ9Rd.aiff"],
					audioData: {
					  "src": "inh09.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ9.aiff",
					        "startTime": 4000,
					        "duration": 15028.684807256233
					      },
					      {
					        "id": "InhQ9Ra.aiff",
					        "startTime": 21000,
					        "duration": 4850.907029478456
					      },
					      {
					        "id": "InhQ9Rb.aiff",
					        "startTime": 27000,
					        "duration": 4411.9274376417225
					      },
					      {
					        "id": "InhQ9Rc.aiff",
					        "startTime": 33000,
					        "duration": 3372.448979591837
					      },
					      {
					        "id": "InhQ9Rd.aiff",
					        "startTime": 38000,
					        "duration": 2799.6145124716563
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of the following would be an internal influence to use inhalants?",
					option: ["Peers",
							 "Family", 
							 "Media", 
							 "Curiosity"],
					remediation: ["Nope. Peers would be considered an external influence.", 
							 	  "Nope. Family would be considered an external influence.", 
							 	  "Nope. The media would be considered an external influence.", 
							 	  "That's right. Other internal influences could be interests, fears, and likes or dislikes."],
					correctIndex: 3,
					questionAudio: "InhQ10.aiff",
					remediationAudio: ["InhQ10Ra.aiff", "InhQ10Rb.aiff", "InhQ10Rc.aiff", "InhQ10Rd.aiff"],
					audioData: {
					  "src": "inh10.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "InhQ10.aiff",
					        "startTime": 4000,
					        "duration": 11327.165532879819
					      },
					      {
					        "id": "InhQ10Ra.aiff",
					        "startTime": 17000,
					        "duration": 3474.0816326530608
					      },
					      {
					        "id": "InhQ10Rb.aiff",
					        "startTime": 22000,
					        "duration": 3483.3333333333344
					      },
					      {
					        "id": "InhQ10Rc.aiff",
					        "startTime": 27000,
					        "duration": 3544.9206349206365
					      },
					      {
					        "id": "InhQ10Rd.aiff",
					        "startTime": 32000,
					        "duration": 5491.405895691613
					      }
					    ]
					  }
					}
				}
			]
		},

		//alcohol
		{
			id: "alcohol",
			question: [
				{
					questionText: "It is legal to drink alcohol in Wisconsin once a person is how old?",
					option: ["16 years old", 
							 "18 years old", 
							 "21 years old", 
							 "25 years old"],
					remediation: ["Not quite. A person must be at least 21 years old to legally drink alcohol in Wisconsin.", 
							 	  "Not quite. A person must be at least 21 years old to legally drink alcohol in Wisconsin.", 
							 	  "That's right. But remember, just because it's legal doesn't mean it's good for you.", 
							 	  "Not quite. A person must be at least 21 years old to legally drink alcohol in Wisconsin."],
					correctIndex: 2,
					questionAudio: "AlcQ1.aiff",
					remediationAudio: ["AlcQ1Rabd.aiff", "AlcQ1Rabd.aiff", "AlcQ1Rc.aiff", "AlcQ1Rabd.aiff"],
					audioData: {
					  "src": "alc01.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ1.aiff",
					        "startTime": 4000,
					        "duration": 15202.358276643992
					      },
					      {
					        "id": "AlcQ1Rabd.aiff",
					        "startTime": 21000,
					        "duration": 6488.73015873016
					      },
					      {
					        "id": "AlcQ1Rc.aiff",
					        "startTime": 29000,
					        "duration": 5512.970521541952
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Why does alcohol affect a teen's brain and body differently than an older person?",
					option: ["Teens are still growing and developing", 
							 "Adults have other health problems", 
							 "Adults don't need as much sleep", 
							 "Teens have a larger brain"],
					remediation: ["That's correct!", 
							 	  "Nope. It's because a teen's brain and body are still growing and developing.", 
							 	  "Nope. It's because a teen's brain and body are still growing and developing.", 
							 	  "Nope. It's because a teen's brain and body are still growing and developing."],
					correctIndex: 0,
					questionAudio: "AlcQ2.aiff",
					remediationAudio: ["AlcQ2Ra.aiff", "AlcQ2Rbcd.aiff", "AlcQ2Rbcd.aiff", "AlcQ2Rbcd.aiff"],
					audioData: {
					  "src": "alc02.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ2.aiff",
					        "startTime": 4000,
					        "duration": 17142.154195011335
					      },
					      {
					        "id": "AlcQ2Ra.aiff",
					        "startTime": 23000,
					        "duration": 927.0521541950103
					      },
					      {
					        "id": "AlcQ2Rbcd.aiff",
					        "startTime": 25000,
					        "duration": 4438.095238095237
					      }
					    ]
					  }
					}
				},
				{
					questionText: "How alcohol affects a person depends on many different factors, including:",
					option: ["Age", 
							 "Weight", 
							 "Whether they're male or female", 
							 "All of the above"],
					remediation: ["Not quite. How alcohol affects a person depends on all these things.", 
							 	  "Not quite. How alcohol affects a person depends on all these things.", 
							 	  "Not quite. How alcohol affects a person depends on all these things.", 
							 	  "Correct!"],
					correctIndex: 3,
					questionAudio: "AlcQ3.aiff",
					remediationAudio: ["AlcQ3Rabc.aiff", "AlcQ3Rabc.aiff", "AlcQ3Rabc.aiff", "AlcQ3Rd.aiff"],
					audioData: {
					  "src": "alc03.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ3.aiff",
					        "startTime": 4000,
					        "duration": 15103.832199546485
					      },
					      {
					        "id": "AlcQ3Rabc.aiff",
					        "startTime": 21000,
					        "duration": 4736.848072562359
					      },
					      {
					        "id": "AlcQ3Rd.aiff",
					        "startTime": 27000,
					        "duration": 588.2539682539693
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Alcohol does what to the central nervous system?",
					option: ["Makes it more efficient", 
							 "Slows it down", 
							 "Speeds it up", 
							 "It does nothing"],
					remediation: ["No, alcohol actually slows down the central nervous system.", 
							 	  "That's right!", 
							 	  "No, alcohol actually slows down the central nervous system.", 
							 	  "No, alcohol actually slows down the central nervous system."],
					correctIndex: 1,
					questionAudio: "AlcQ4.aiff",
					remediationAudio: ["AlcQ4Racd.aiff", "AlcQ4Rb.aiff", "AlcQ4Racd.aiff", "AlcQ4Racd.aiff"],
					audioData: {
					  "src": "alc04.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ4.aiff",
					        "startTime": 4000,
					        "duration": 13071.24716553288
					      },
					      {
					        "id": "AlcQ4Racd.aiff",
					        "startTime": 19000,
					        "duration": 4133.174603174602
					      },
					      {
					        "id": "AlcQ4Rb.aiff",
					        "startTime": 25000,
					        "duration": 785.3741496598623
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What are the two main parts of the central nervous system?",
					option: ["Bones and muscles", 
							 "Brain and stomach", 
							 "Brain and spinal cord", 
							 "Spinal cord and skull"],
					remediation: ["That's incorrect. The brain and spinal cord make up the central nervous system.", 
							 	  "Not quite. The brain and spinal cord make up the central nervous system.", 
							 	  "Correct!", 
							 	  "Not quite. The brain and spinal cord make up the central nervous system."],
					correctIndex: 2,
					questionAudio: "AlcQ5.aiff",
					remediationAudio: ["AlcQ5Rabd.aiff", "AlcQ5Rabd.aiff", "AlcQ5Rc.aiff", "AlcQ5Rabd.aiff"],
					audioData: {
					  "src": "alc05.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ5.aiff",
					        "startTime": 4000,
					        "duration": 15220.249433106574
					      },
					      {
					        "id": "AlcQ5Rabd.aiff",
					        "startTime": 21000,
					        "duration": 4558.027210884355
					      },
					      {
					        "id": "AlcQ5Rc.aiff",
					        "startTime": 27000,
					        "duration": 622.0634920634928
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What is the main job of the central nervous system?",
					option: ["To block negative messages", 
							 "To digest your food", 
							 "To hold you up", 
							 "To send and receive messages throughout the body"],
					remediation: ["Nope. The main job of the central nervous system is to send and receive messages throughout the body.", 
							 	  "Nope. The main job of the central nervous system is to send and receive messages throughout the body.", 
							 	  "Nope. The main job of the central nervous system is to send and receive messages throughout the body.", 
							 	  "You got it!"],
					correctIndex: 3,
					questionAudio: "AlcQ6.aiff",
					remediationAudio: ["AlcQ6Rabc.aiff", "AlcQ6Rabc.aiff", "AlcQ6Rabc.aiff", "AlcQ6Rd.aiff"], 
					audioData: {
					  "src": "alc06.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ6.aiff",
					        "startTime": 4000,
					        "duration": 16082.743764172335
					      },
					      {
					        "id": "AlcQ6Rabc.aiff",
					        "startTime": 22000,
					        "duration": 5799.727891156462
					      },
					      {
					        "id": "AlcQ6Rd.aiff",
					        "startTime": 29000,
					        "duration": 716.3492063492072
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What is it called when a person's body and mind are impaired by alcohol?",
					option: ["Relaxation", 
							 "Withdrawal", 
							 "Intoxication", 
							 "Addiction"],
					remediation: ["Nope. Intoxication is when a person's body and mind are impaired by alcohol.", 
							 	  "Nope. Intoxication is when a person's body and mind are impaired by alcohol.", 
							 	  "You're right!", 
							 	  "Nope. Intoxication is when a person's body and mind are impaired by alcohol."],
					correctIndex: 2,
					questionAudio: "AlcQ7.aiff",
					remediationAudio: ["AlcQ7Rabd.aiff", "AlcQ7Rabd.aiff", "AlcQ7Rc.aiff", "AlcQ7Rabd.aiff"], 
					audioData: {
					  "src": "alc07.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ7.aiff",
					        "startTime": 4000,
					        "duration": 13933.832199546487
					      },
					      {
					        "id": "AlcQ7Rabd.aiff",
					        "startTime": 19000,
					        "duration": 4845.873015873018
					      },
					      {
					        "id": "AlcQ7Rc.aiff",
					        "startTime": 25000,
					        "duration": 703.4693877551028
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What is it called when someone drinks a large amount of alcohol over a short period of time?",
					option: ["Binge drinking", 
							 "Short-term drinking", 
							 "Alcohol sampling", 
							 "Dosing"],
					remediation: ["Correct. And remember, binge drinking is very dangerous!", 
							 	  "Not quite. It's called binge drinking.", 
							 	  "Not quite. It's called binge drinking.", 
							 	  "Not quite. It's called binge drinking."],
					correctIndex: 0,
					questionAudio: "AlcQ8.aiff",
					remediationAudio: ["AlcQ8Ra.aiff", "AlcQ8Rbcd.aiff", "AlcQ8Rbcd.aiff", "AlcQ8Rbcd.aiff"],
					audioData: {
					  "src": "alc08.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ8.aiff",
					        "startTime": 4000,
					        "duration": 15857.936507936507
					      },
					      {
					        "id": "AlcQ8Ra.aiff",
					        "startTime": 21000,
					        "duration": 4435.6235827664395
					      },
					      {
					        "id": "AlcQ8Rbcd.aiff",
					        "startTime": 27000,
					        "duration": 2471.632653061224
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What occurs when the body can't break down alcohol fast enough?",
					option: ["Relaxation", 
							 "Addiction", 
							 "Brain poisoning", 
							 "Alcohol poisoning"],
					remediation: ["Nope. Alcohol poisoning happens when the body can't break down alcohol fast enough.", 
							 	  "Nope. Alcohol poisoning happens when the body can't break down alcohol fast enough.", 
							 	  "Nope. Alcohol poisoning happens when the body can't break down alcohol fast enough.", 
							 	  "That's right, and a person can die from alcohol poisoning."],
					correctIndex: 3,
					questionAudio: "AlcQ9.aiff",
					remediationAudio: ["AlcQ9Rabc.aiff", "AlcQ9Rabc.aiff", "AlcQ9Rabc.aiff", "AlcQ9Rd.aiff"],
					audioData: {
					  "src": "alc09.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ9.aiff",
					        "startTime": 4000,
					        "duration": 14940.589569160999
					      },
					      {
					        "id": "AlcQ9Rabc.aiff",
					        "startTime": 20000,
					        "duration": 5225.419501133785
					      },
					      {
					        "id": "AlcQ9Rd.aiff",
					        "startTime": 27000,
					        "duration": 3685.4421768707475
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Alcohol poisoning can cause:",
					option: ["Death", 
							 "Vomiting", 
							 "All of the above", 
							 "None of the above"],
					remediation: ["Not quite. There's a better answer than that.", 
							 	  "Not quite. There's a better answer than that.", 
							 	  "That's correct.", 
							 	  "Nope. A person can pass out, vomit, and even die from alcohol poisoning."],
					correctIndex: 2,
					questionAudio: "AlcQ10.aiff",
					remediationAudio: ["AlcQ10Ra.aiff", "AlcQ10Rb.aiff", "AlcQ10Rc.aiff", "AlcQ10Rd.aiff"],
					audioData: {
					  "src": "alc10.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ10.aiff",
					        "startTime": 4000,
					        "duration": 11548.43537414966
					      },
					      {
					        "id": "AlcQ10Ra.aiff",
					        "startTime": 17000,
					        "duration": 2936.1224489795923
					      },
					      {
					        "id": "AlcQ10Rb.aiff",
					        "startTime": 21000,
					        "duration": 2515.9863945578245
					      },
					      {
					        "id": "AlcQ10Rc.aiff",
					        "startTime": 25000,
					        "duration": 966.1451247165544
					      },
					      {
					        "id": "AlcQ10Rd.aiff",
					        "startTime": 27000,
					        "duration": 5091.60997732426
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What should you do if you think someone has alcohol poisoning?",
					option: ["Call a friend", 
							 "Call 9-1-1", 
							 "Give them soda or coffee", 
							 "Nothing"],
					remediation: ["Nope. You need to call 9-1-1 as soon as possible.", 
							 	  "Absolutely! It's important to call 9-1-1 as soon as possible.", 
							 	  "Nope. Soda and coffee won't help.", 
							 	  "No way! You should call 9-1-1 as soon as possible."],
					correctIndex: 1,
					questionAudio: "AlcQ11.aiff",
					remediationAudio: ["AlcQ11Ra.aiff", "AlcQ11Rb.aiff", "AlcQ11Rc.aiff", "AlcQ11Rd.aiff"], 
					audioData: {
					  "src": "alc11.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ11.aiff",
					        "startTime": 4000,
					        "duration": 13196.802721088436
					      },
					      {
					        "id": "AlcQ11Ra.aiff",
					        "startTime": 19000,
					        "duration": 3872.7664399092987
					      },
					      {
					        "id": "AlcQ11Rb.aiff",
					        "startTime": 24000,
					        "duration": 4113.650793650795
					      },
					      {
					        "id": "AlcQ11Rc.aiff",
					        "startTime": 30000,
					        "duration": 2467.3469387755135
					      },
					      {
					        "id": "AlcQ11Rd.aiff",
					        "startTime": 34000,
					        "duration": 3418.2539682539714
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of the following might happen when a person binge drinks?",
					option: ["Better grades in school", 
							 "Better relationships", 
							 "Impaired judgement", 
							 "Clearer senses"],
					remediation: ["Nope. Binge drinking won't help your grades.", 
							 	  "Nope. Binge drinking won't help your relationships.", 
							 	  "That's correct, and binge drinking can also lead to alcohol poisoning.", 
							 	  "Nope. Nothing becomes clearer when a person binge drinks."],
					correctIndex: 2,
					questionAudio: "AlcQ12.aiff",
					remediationAudio: ["AlcQ12Ra.aiff", "AlcQ12Rb.aiff", "AlcQ12Rc.aiff", "AlcQ12Rd.aiff"],
					audioData: {
					  "src": "alc12.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ12.aiff",
					        "startTime": 4000,
					        "duration": 14161.020408163267
					      },
					      {
					        "id": "AlcQ12Ra.aiff",
					        "startTime": 20000,
					        "duration": 3109.319727891155
					      },
					      {
					        "id": "AlcQ12Rb.aiff",
					        "startTime": 25000,
					        "duration": 3307.8004535147406
					      },
					      {
					        "id": "AlcQ12Rc.aiff",
					        "startTime": 30000,
					        "duration": 4377.551020408163
					      },
					      {
					        "id": "AlcQ12Rd.aiff",
					        "startTime": 36000,
					        "duration": 3707.301587301586
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these is an example of reversing the situation when being pressured by a friend to drink alcohol?",
					option: ["Telling the friend the negative consequences", 
							 "Saying no", 
							 "Walking away", 
							 "Making up an excuse"],
					remediation: ["Correct!", 
							 	  "Nope. Saying no is a great option, but it's not considered reversing the situation.", 
							 	  "Not quite. Walking away is a good option, but it's not considered reversing the situation.", 
							 	  "Not quite. Making up an excuse is definitely an option, but it's not considered reversing the situation."],
					correctIndex: 0,
					questionAudio: "AlcQ13.aiff",
					remediationAudio: ["AlcQ13Ra.aiff", "AlcQ13Rb.aiff", "AlcQ13Rc.aiff", "AlcQ13Rd.aiff"],
					audioData: {
					  "src": "alc13.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ13.aiff",
					        "startTime": 4000,
					        "duration": 18450.589569160995
					      },
					      {
					        "id": "AlcQ13Ra.aiff",
					        "startTime": 24000,
					        "duration": 645.1247165532869
					      },
					      {
					        "id": "AlcQ13Rb.aiff",
					        "startTime": 26000,
					        "duration": 5489.727891156463
					      },
					      {
					        "id": "AlcQ13Rc.aiff",
					        "startTime": 33000,
					        "duration": 6009.183673469387
					      },
					      {
					        "id": "AlcQ13Rd.aiff",
					        "startTime": 41000,
					        "duration": 7629.297052154193
					      }
					    ]
					  }
					}
				},
				{
					questionText: "As a person uses a drug, like alcohol, more often, it takes more of the drug to give them the same high that they experienced the first time. This is called:",
					option: ["Addiction", 
							 "Tolerance", 
							 "First use", 
							 "Sudden Sniffing Death Syndrome"],
					remediation: ["Not quite. It's actually called tolerance.", 
							 	  "Correct!", 
							 	  "Not quite. It's actually called tolerance.", 
							 	  "Not quite. It's actually called tolerance."],
					correctIndex: 1,
					questionAudio: "AlcQ14.aiff",
					remediationAudio: ["AlcQ14Racd.aiff", "AlcQ14Rb.aiff", "AlcQ14Racd.aiff", "AlcQ14Racd.aiff"],
					audioData: {
					  "src": "alc14.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "AlcQ14.aiff",
					        "startTime": 4000,
					        "duration": 19654.603174603173
					      },
					      {
					        "id": "AlcQ14Racd.aiff",
					        "startTime": 25000,
					        "duration": 3177.097505668932
					      },
					      {
					        "id": "AlcQ14Rb.aiff",
					        "startTime": 30000,
					        "duration": 671.3378684807267
					      }
					    ]
					  }
					}
				}
			]
		},

		//prescription
		{
			id: "prescription",
			question: [
				{
					questionText: "Medications that are prescribed to a person by a doctor are called:",
					option: ["Over the counter drugs", 
							 "Prescription drugs", 
							 "Illegal drugs", 
							 "Safe drugs"],
					remediation: ["Not quite. Over the counter drugs don't need a prescription.", 
							 	  "That's right!", 
							 	  "Nope. Medications prescribed by a doctor are called prescription drugs.", 
							 	  "Incorrect. While prescription drugs can be safe when taken exactly as the doctor prescribes them, they're very dangerous when abused."],
					correctIndex: 1,
					questionAudio: "PreQ1.aiff",
					remediationAudio: ["PreQ1Ra.aiff", "PreQ1Rb.aiff", "PreQ1Rc.aiff", "PreQ1Rd.aiff"],
					audioData: {
					  "src": "pre01.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ1.aiff",
					        "startTime": 4000,
					        "duration": 14954.036281179138
					      },
					      {
					        "id": "PreQ1Ra.aiff",
					        "startTime": 20000,
					        "duration": 3865.1473922902505
					      },
					      {
					        "id": "PreQ1Rb.aiff",
					        "startTime": 25000,
					        "duration": 695.4648526077101
					      },
					      {
					        "id": "PreQ1Rc.aiff",
					        "startTime": 27000,
					        "duration": 4567.981859410431
					      },
					      {
					        "id": "PreQ1Rd.aiff",
					        "startTime": 33000,
					        "duration": 8284.739229024943
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What is one way people abuse prescription drugs?",
					option: ["Taking too little of the drug", 
							 "Forgetting to take the prescribed drug", 
							 "Taking the drug exactly as prescribed", 
							 "Taking someone else's prescription drug"],
					remediation: ["Nope. One way a person may abuse prescription drugs is by taking too much of the drug.", 
							 	  "Nope. Forgetting to take a prescribed drug isn't considered abusing it.", 
							 	  "Nope. This wouldn't be considered abuse.", 
							 	  "Correct! You should never take someone else's prescription drug. It can be very dangerous."],
					correctIndex: 3,
					questionAudio: "PreQ2.aiff",
					remediationAudio: ["PreQ2Ra.aiff", "PreQ2Rb.aiff", "PreQ2Rc.aiff", "PreQ2Rd.aiff"],
					audioData: {
					  "src": "pre02.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ2.aiff",
					        "startTime": 4000,
					        "duration": 17886.689342403628
					      },
					      {
					        "id": "PreQ2Ra.aiff",
					        "startTime": 23000,
					        "duration": 5631.065759637188
					      },
					      {
					        "id": "PreQ2Rb.aiff",
					        "startTime": 30000,
					        "duration": 4533.44671201814
					      },
					      {
					        "id": "PreQ2Rc.aiff",
					        "startTime": 36000,
					        "duration": 2788.2993197278906
					      },
					      {
					        "id": "PreQ2Rd.aiff",
					        "startTime": 40000,
					        "duration": 5772.653061224489
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Is it legal to take someone else's prescription drug?",
					option: ["Yes", 
							 "No", 
							 "It depends on the drug", 
							 "It depends on how old you are"],
					remediation: ["Sorry, but it's actually illegal to take someone else's prescription drug.", 
							 	  "That's right. Not only is it illegal, but it's also very dangerous.", 
							 	  "Sorry, but it doesn't matter what type of drug. It's not legal to take someone else's prescription drug.", 
							 	  "Sorry, but it doesn't matter how old you are. It's illegal to take someone else's prescription drug."],
					correctIndex: 1,
					questionAudio: "PreQ3.aiff",
					remediationAudio: ["PreQ3Ra.aiff", "PreQ3Rb.aiff", "PreQ3Rc.aiff", "PreQ3Rd.aiff"],
					audioData: {
					  "src": "pre03.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ3.aiff",
					        "startTime": 4000,
					        "duration": 13056.870748299318
					      },
					      {
					        "id": "PreQ3Ra.aiff",
					        "startTime": 19000,
					        "duration": 4384.353741496597
					      },
					      {
					        "id": "PreQ3Rb.aiff",
					        "startTime": 25000,
					        "duration": 4502.925170068029
					      },
					      {
					        "id": "PreQ3Rc.aiff",
					        "startTime": 31000,
					        "duration": 5951.11111111111
					      },
					      {
					        "id": "PreQ3Rd.aiff",
					        "startTime": 38000,
					        "duration": 5935.532879818595
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Is taking too much of a prescribed drug considered abusing it?",
					option: ["Yes", 
							 "No", 
							 "It depends on the drug", 
							 "It depends on how old you are"],
					remediation: ["That's right. A person should never take more than what's prescribed by their doctor.", 
							 	  "Sorry, but taking too much of a prescribed drug is considered abusing it.", 
							 	  "Nope. It doesn't matter which drug it is. Taking too much of any prescribed drug is considered abusing it.", 
							 	  "Nope. It doesn't matter how old you are. Taking too much of any prescribed drug is considered abusing it."],
					correctIndex: 0,
					questionAudio: "PreQ4.aiff",
					remediationAudio: ["PreQ4Ra.aiff", "PreQ4Rb.aiff", "PreQ4Rc.aiff", "PreQ4Rd.aiff"],
					audioData: {
					  "src": "pre04.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ4.aiff",
					        "startTime": 4000,
					        "duration": 14163.219954648524
					      },
					      {
					        "id": "PreQ4Ra.aiff",
					        "startTime": 20000,
					        "duration": 4596.145124716553
					      },
					      {
					        "id": "PreQ4Rb.aiff",
					        "startTime": 26000,
					        "duration": 4651.428571428572
					      },
					      {
					        "id": "PreQ4Rc.aiff",
					        "startTime": 32000,
					        "duration": 6219.705215419502
					      },
					      {
					        "id": "PreQ4Rd.aiff",
					        "startTime": 40000,
					        "duration": 6218.072562358273
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these can be a long-term health effect of abusing prescription drugs?",
					option: ["Mood changes", 
							 "Addiction", 
							 "Heart failure", 
							 "All of the above"],
					remediation: ["Not quite. These are all considered long-term effects of abusing prescription drugs.", 
							 	  "Not quite. These are all considered long-term effects of abusing prescription drugs.", 
							 	  "Not quite. These are all considered long-term effects of abusing prescription drugs.", 
							 	  "Correct!"],
					correctIndex: 3,
					questionAudio: "PreQ5.aiff",
					remediationAudio: ["PreQ5Rabc.aiff", "PreQ5Rabc.aiff", "PreQ5Rabc.aiff", "PreQ5Rd.aiff"],
					audioData: {
					  "src": "pre05.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ5.aiff",
					        "startTime": 4000,
					        "duration": 13662.607709750568
					      },
					      {
					        "id": "PreQ5Rabc.aiff",
					        "startTime": 19000,
					        "duration": 5412.15419501134
					      },
					      {
					        "id": "PreQ5Rd.aiff",
					        "startTime": 26000,
					        "duration": 683.7188208616781
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Often, people who are addicted to heroin first became addicted to what?",
					option: ["Alcohol", 
							 "Snus", 
							 "Prescription drugs", 
							 "Inhalants"],
					remediation: ["Not quite. People who are addicted to heroin usually first become addicted to prescription drugs.", 
							 	  "Not quite. People who are addicted to heroin usually first become addicted to prescription drugs.", 
							 	  "Correct. People who are addicted to heroin often start out using prescription drugs.", 
							 	  "Not quite. People who are addicted to heroin usually first become addicted to prescription drugs"],
					correctIndex: 2,
					questionAudio: "PreQ6.aiff",
					remediationAudio: ["PreQ6Rabd.aiff", "PreQ6Rabd.aiff", "PreQ6Rc.aiff", "PreQ6Rabd.aiff"],
					audioData: {
					  "src": "pre06.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ6.aiff",
					        "startTime": 4000,
					        "duration": 14342.040816326531
					      },
					      {
					        "id": "PreQ6Rabd.aiff",
					        "startTime": 20000,
					        "duration": 5932.67573696145
					      },
					      {
					        "id": "PreQ6Rc.aiff",
					        "startTime": 27000,
					        "duration": 5003.968253968253
					      }
					    ]
					  }
					}
				},
				{
					questionText: "When someone who is addicted to a prescription drug stops using that drug they may experience diarrhea, shaking, vomiting and body aches. These are called:",
					option: ["Tolerance symptoms", 
							 "Alcohol poisoning", 
							 "Withdrawal symptoms", 
							 "Short-term effects"],
					remediation: ["That's incorrect. They're actually called withdrawal symptoms.", 
							 	  "That's incorrect. They're actually called withdrawal symptoms.", 
							 	  "That's correct.", 
							 	  "That's incorrect. They're actually called withdrawal symptoms."],
					correctIndex: 2,
					questionAudio: "PreQ7.aiff",
					remediationAudio: ["PreQ7Rabd.aiff", "PreQ7Rabd.aiff", "PreQ7Rc.aiff", "PreQ7Rabd.aiff"],
					audioData: {
					  "src": "pre07.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ7.aiff",
					        "startTime": 4000,
					        "duration": 21108.095238095237
					      },
					      {
					        "id": "PreQ7Rabd.aiff",
					        "startTime": 27000,
					        "duration": 4041.4058956916106
					      },
					      {
					        "id": "PreQ7Rc.aiff",
					        "startTime": 33000,
					        "duration": 862.131519274378
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which drug is so addictive that a person might only use it once or twice before becoming addicted to it?",
					option: ["Inhalants", 
							 "Marijuana", 
							 "Alcohol", 
							 "Heroin"],
					remediation: ["Sorry, the correct answer is heroin.", 
							 	  "Sorry, the correct answer is heroin.", 
							 	  "Sorry, the correct answer is heroin.", 
							 	  "That's right. It doesn't take much to become addicted to heroin."],
					correctIndex: 3,
					questionAudio: "PreQ8.aiff",
					remediationAudio: ["PreQ8Rabc.aiff", "PreQ8Rabc.aiff", "PreQ8Rabc.aiff", "PreQ8Rd.aiff"],
					audioData: {
					  "src": "pre08.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ8.aiff",
					        "startTime": 4000,
					        "duration": 15822.721088435372
					      },
					      {
					        "id": "PreQ8Rabc.aiff",
					        "startTime": 21000,
					        "duration": 2810.7256235827654
					      },
					      {
					        "id": "PreQ8Rd.aiff",
					        "startTime": 25000,
					        "duration": 3632.607709750566
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of the following is a question that can help you figure out if taking someone else's prescription drug is a positive or negative risk?",
					option: ["'Can I tell a trusted adult about this?'", 
							 "'Will it be fun?'", 
							 "'Will I make money if I take this risk?'", 
							 "'If I take this risk will I please others?'"],
					remediation: ["Correct! This is a great question to ask yourself.", 
							 	  "No way! Just because you think something might be fun doesn't make it a positive risk.", 
							 	  "Nope. Making money doesn't make a risk positive or negative.", 
							 	  "Nope. This won't help you figure out if a risk is positive or negative."],
					correctIndex: 0,
					questionAudio: "PreQ9.aiff",
					remediationAudio: ["PreQ9Ra.aiff", "PreQ9Rb.aiff", "PreQ9Rc.aiff", "PreQ9Rd.aiff"],
					audioData: {
					  "src": "pre09.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "PreQ9.aiff",
					        "startTime": 4000,
					        "duration": 21622.902494331065
					      },
					      {
					        "id": "PreQ9Ra.aiff",
					        "startTime": 27000,
					        "duration": 3215.6235827664404
					      },
					      {
					        "id": "PreQ9Rb.aiff",
					        "startTime": 32000,
					        "duration": 5253.945578231295
					      },
					      {
					        "id": "PreQ9Rc.aiff",
					        "startTime": 39000,
					        "duration": 3489.8412698412712
					      },
					      {
					        "id": "PreQ9Rd.aiff",
					        "startTime": 44000,
					        "duration": 4318.117913832197
					      }
					    ]
					  }
					}
				}
			]
		},

		//tobacco
		{
			id: "tobacco",
			question: [
				{
					questionText: "Which of these is not an example of a tobacco product?",
					option: ["Cigarettes", 
							 "Cigarillos", 
							 "Chewing tobacco", 
							 "Inhalants"],
					remediation: ["That's incorrect. Cigarettes are a tobacco product.", 
							 	  "That's incorrect. Cigarillos are a tobacco product.", 
							 	  "That's incorrect. Chewing tobacco is a tobacco product.", 
							 	  "That's right. Inhalants are definitely dangerous, but they are not considered a tobacco product."],
					correctIndex: 3,
					questionAudio: "TobQ1.aiff",
					remediationAudio: ["TobQ1Ra.aiff", "TobQ1Rb.aiff", "TobQ1Rc.aiff", "TobQ1Rd.aiff"],
					audioData: {
					  "src": "tob01.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ1.aiff",
					        "startTime": 4000,
					        "duration": 11434.444444444445
					      },
					      {
					        "id": "TobQ1Ra.aiff",
					        "startTime": 17000,
					        "duration": 3331.7913832199542
					      },
					      {
					        "id": "TobQ1Rb.aiff",
					        "startTime": 22000,
					        "duration": 3558.6848072562348
					      },
					      {
					        "id": "TobQ1Rc.aiff",
					        "startTime": 27000,
					        "duration": 3925.782312925172
					      },
					      {
					        "id": "TobQ1Rd.aiff",
					        "startTime": 32000,
					        "duration": 5783.514739229026
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What is the main goal of tobacco companies?",
					option: ["To keep you healthy", 
							 "To make money", 
							 "To serve the community", 
							 "To raise money for schools"],
					remediation: ["No way! Their main goal is to make money and persuade people to use their products.", 
							 	  "You got it! Their main goal is to make money and persuade people to use their products.", 
							 	  "No way! Their main goal is to make money and persuade people to use their products.", 
							 	  "No way! Their main goal is to make money and persuade people to use their products."],
					correctIndex: 1,
					questionAudio: "TobQ2.aiff",
					remediationAudio: ["TobQ2Racd.aiff", "TobQ2Rb.aiff", "TobQ2Racd.aiff", "TobQ2Racd.aiff"],
					audioData: {
					  "src": "tob02.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ2.aiff",
					        "startTime": 4000,
					        "duration": 12278.117913832197
					      },
					      {
					        "id": "TobQ2Racd.aiff",
					        "startTime": 18000,
					        "duration": 5307.074829931974
					      },
					      {
					        "id": "TobQ2Rb.aiff",
					        "startTime": 25000,
					        "duration": 5123.809523809523
					      }
					    ]
					  }
					}
				},
				{
					questionText: "In 2011, about how much money did tobacco companies spend on marketing their products in Wisconsin?",
					option: ["50 million dollars", 
							 "100 million dollars", 
							 "125 million dollars", 
							 "145 million dollars"],
					remediation: ["Not quite. They spent about 145 million dollars on marketing in 2011…just in Wisconsin!", 
							 	  "Not quite. They spent about 145 million dollars on marketing in 2011…just in Wisconsin!", 
							 	  "Not quite. They spent about 145 million dollars on marketing in 2011…just in Wisconsin!", 
							 	  "Correct! And remember, that was just in the state of Wisconsin!"],
					correctIndex: 3,
					questionAudio: "TobQ3.aiff",
					remediationAudio: ["TobQ3Rabc.aiff", "TobQ3Rabc.aiff", "TobQ3Rabc.aiff", "TobQ3Rd.aiff"],
					audioData: {
					  "src": "tob03.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ3.aiff",
					        "startTime": 4000,
					        "duration": 20063.786848072563
					      },
					      {
					        "id": "TobQ3Rabc.aiff",
					        "startTime": 26000,
					        "duration": 7768.888888888889
					      },
					      {
					        "id": "TobQ3Rd.aiff",
					        "startTime": 35000,
					        "duration": 4283.21995464853
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What percentage of regular smokers began smoking before age 18?",
					option: ["25%", 
							 "55%", 
							 "70%", 
							 "90%"],
					remediation: ["Not quite. About 90% of regular smokers began smoking before age 18.", 
							 	  "Not quite. About 90% of regular smokers began smoking before age 18.", 
							 	  "Not quite. About 90% of regular smokers began smoking before age 18.", 
							 	  "You got it! Most people who smoke cigarettes started before they were 18, and became addicted."],
					correctIndex: 3,
					questionAudio: "TobQ4.aiff",
					remediationAudio: ["TobQ4Rabc.aiff", "TobQ4Rabc.aiff", "TobQ4Rabc.aiff", "TobQ4Rd.aiff"],
					audioData: {
					  "src": "tob04.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ4.aiff",
					        "startTime": 4000,
					        "duration": 15440.136054421771
					      },
					      {
					        "id": "TobQ4Rabc.aiff",
					        "startTime": 21000,
					        "duration": 6079.160997732426
					      },
					      {
					        "id": "TobQ4Rd.aiff",
					        "startTime": 29000,
					        "duration": 5949.20634920635
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What type of advertising targets shoppers at the exact time and place where they can buy the products?",
					option: ["Point of sale, or POS", 
							 "Magazine ads", 
							 "TV commercials", 
							 "Billboards"],
					remediation: ["That's right! This includes signs inside and outside stores, shelving displays, and in-store promotions.", 
							 	  "Nope. Point of sale, or POS, targets shoppers at the exact time and place where they can buy the products.", 
							 	  "Nope. Point of sale, or POS, targets shoppers at the exact time and place where they can buy the products.", 
							 	  "Nope. Point of sale, or POS, targets shoppers at the exact time and place where they can buy the products."],
					correctIndex: 0,
					questionAudio: "TobQ5.aiff",
					remediationAudio: ["TobQ5Ra.aiff", "TobQ5Rbcd.aiff", "TobQ5Rbcd.aiff", "TobQ5Rbcd.aiff"],
					audioData: {
					  "src": "tob05.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ5.aiff",
					        "startTime": 4000,
					        "duration": 16650.748299319726
					      },
					      {
					        "id": "TobQ5Ra.aiff",
					        "startTime": 22000,
					        "duration": 6750.657596371881
					      },
					      {
					        "id": "TobQ5Rbcd.aiff",
					        "startTime": 30000,
					        "duration": 7170.136054421768
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Can tobacco companies flavor cigars and chewing tobacco?",
					option: ["Yes", 
							 "No", 
							 "Yes, but only with chocolate flavor", 
							 "It depends on which state you live in"],
					remediation: ["That's right! They often add flavors such as mint, cherry, and peach.", 
							 	  "That's incorrect. There are laws banning flavoring of cigarettes, but not other tobacco products such as cigars and chewing tobacco.", 
							 	  "Not quite. They often add flavors such as mint, cherry, and peach.", 
							 	  "Nope. It doesn't matter where you live. It is legal for tobacco companies to flavor cigars and chewing tobacco."],
					correctIndex: 0,
					questionAudio: "TobQ6.aiff",
					remediationAudio: ["TobQ6Ra.aiff", "TobQ6Rb.aiff", "TobQ6Rc.aiff", "TobQ6Rd.aiff"],
					audioData: {
					  "src": "tob06.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ6.aiff",
					        "startTime": 4000,
					        "duration": 14564.489795918369
					      },
					      {
					        "id": "TobQ6Ra.aiff",
					        "startTime": 20000,
					        "duration": 4304.875283446712
					      },
					      {
					        "id": "TobQ6Rb.aiff",
					        "startTime": 26000,
					        "duration": 7492.743764172339
					      },
					      {
					        "id": "TobQ6Rc.aiff",
					        "startTime": 35000,
					        "duration": 4475.056689342402
					      },
					      {
					        "id": "TobQ6Rd.aiff",
					        "startTime": 41000,
					        "duration": 6288.1859410430825
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which product is shredded tobacco leaves inside of a small pouch?",
					option: ["E-cigarettes", 
							 "Snus", 
							 "Cigarettes", 
							 "Cigarillos"],
					remediation: ["That's incorrect. Snus is shredded tobacco leaves inside a small pouch.", 
							 	  "That's right!", 
							 	  "That's incorrect. Snus is shredded tobacco leaves inside a small pouch.", 
							 	  "That's incorrect. Snus is shredded tobacco leaves inside a small pouch."],
					correctIndex: 1,
					questionAudio: "TobQ7.aiff",
					remediationAudio: ["TobQ7Racd.aiff", "TobQ7Rb.aiff", "TobQ7Racd.aiff", "TobQ7Racd.aiff"],
					audioData: {
					  "src": "tob07.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ7.aiff",
					        "startTime": 4000,
					        "duration": 12722.925170068027
					      },
					      {
					        "id": "TobQ7Racd.aiff",
					        "startTime": 18000,
					        "duration": 4786.802721088435
					      },
					      {
					        "id": "TobQ7Rb.aiff",
					        "startTime": 24000,
					        "duration": 833.6961451247156
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of the following statements is true about snus?",
					option: ["The user keeps it in thier mouth for at least two hours.", 
							 "The user smokes it.", 
							 "The user doesn't have to spit while using it.", 
							 "You can legally buy it when you're 16."],
					remediation: ["Not quite. Snus is usually kept inside the mouth for about a half hour.", 
							 	  "No, snus isn't smoked. The user puts the pouch in between their gum and lip.", 
							 	  "That's right! Tobacco companies actually include a how-to guide right in the package.", 
							 	  "Nope. You need to be at least 18 years old to buy any tobacco product."],
					correctIndex: 2,
					questionAudio: "TobQ8.aiff",
					remediationAudio: ["TobQ8Ra.aiff", "TobQ8Rb.aiff", "TobQ8Rc.aiff", "TobQ8Rd.aiff"],
					audioData: {
					  "src": "tob08.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ8.aiff",
					        "startTime": 4000,
					        "duration": 18393.4693877551
					      },
					      {
					        "id": "TobQ8Ra.aiff",
					        "startTime": 24000,
					        "duration": 4556.41723356009
					      },
					      {
					        "id": "TobQ8Rb.aiff",
					        "startTime": 30000,
					        "duration": 5210.589569161001
					      },
					      {
					        "id": "TobQ8Rc.aiff",
					        "startTime": 37000,
					        "duration": 6027.3469387755085
					      },
					      {
					        "id": "TobQ8Rd.aiff",
					        "startTime": 45000,
					        "duration": 4809.591836734697
					      }
					    ]
					  }
					}
				},
				{
					questionText: "About how many premature deaths are there in the United States each year due to cigarette smoking?",
					option: ["200,000", 
							 "350,000", 
							 "480,000", 
							 "625,000"],
					remediation: ["Not quite. There are actually about 480,000 premature deaths in the US each year due to cigarette smoking.", 
							 	  "Not quite. There are actually about 480,000 premature deaths in the US each year due to cigarette smoking.", 
							 	  "That's right! And for every one person who dies, about 30 more suffer from a serious tobacco-related illness.", 
							 	  "That's incorrect. There are actually about 480,000 premature deaths in the US each year due to cigarette smoking."],
					correctIndex: 2,
					questionAudio: "TobQ9.aiff",
					remediationAudio: ["TobQ9Rab.aiff", "TobQ9Rab.aiff", "TobQ9c.aiff", "TobQ9d.aiff"],
					audioData: {
					  "src": "tob09.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ9.aiff",
					        "startTime": 4000,
					        "duration": 18903.764172335603
					      },
					      {
					        "id": "TobQ9Rab.aiff",
					        "startTime": 24000,
					        "duration": 7385.850340136052
					      },
					      {
					        "id": "TobQ9c.aiff",
					        "startTime": 33000,
					        "duration": 7298.367346938775
					      },
					      {
					        "id": "TobQ9d.aiff",
					        "startTime": 42000,
					        "duration": 7695.351473922905
					      }
					    ]
					  }
					}
				},
				{
					questionText: "How old do you have to be to legally buy and use tobacco products?",
					option: ["16 yrs old", 
							 "18 yrs old", 
							 "21 yrs old", 
							 "25 yrs old"],
					remediation: ["Not quite. A person must be at least 18 years old to legally buy and use tobacco products.", 
							 	  "That's right. But, remember, just because it's legal, doesn't mean it's healthy.", 
							 	  "Not quite. A person must be at least 18 years old to legally buy and use tobacco products.", 
							 	  "Not quite. A person must be at least 18 years old to legally buy and use tobacco products."],
					correctIndex: 1,
					questionAudio: "TobQ10.aiff",
					remediationAudio: ["TobQ10Racd.aiff", "TobQ10Rb.aiff", "TobQ10Racd.aiff", "TobQ10Racd.aiff"],
					audioData: {
					  "src": "tob10.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ10.aiff",
					        "startTime": 4000,
					        "duration": 14827.414965986392
					      },
					      {
					        "id": "TobQ10Racd.aiff",
					        "startTime": 20000,
					        "duration": 6687.482993197278
					      },
					      {
					        "id": "TobQ10Rb.aiff",
					        "startTime": 28000,
					        "duration": 5563.764172335603
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What is the addictive drug found in tobacco products?",
					option: ["THC", 
							 "Nicotine", 
							 "Heroin", 
							 "Cannabis sativa"],
					remediation: ["Nope. THC is found in marijuana.", 
							 	  "That's correct!", 
							 	  "That's incorrect. The addictive drug in tobacco products is nicotine.", 
							 	  "That's incorrect. The addictive drug in tobacco products is nicotine."],
					correctIndex: 1,
					questionAudio: "TobQ11.aiff",
					remediationAudio: ["TobQ11Ra.aiff", "TobQ11Rb.aiff", "TobQ11Rcd.aiff", "TobQ11Rcd.aiff"],
					audioData: {
					  "src": "tob11.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ11.aiff",
					        "startTime": 4000,
					        "duration": 12480
					      },
					      {
					        "id": "TobQ11Ra.aiff",
					        "startTime": 18000,
					        "duration": 2695.3741496598623
					      },
					      {
					        "id": "TobQ11Rb.aiff",
					        "startTime": 22000,
					        "duration": 979.0249433106588
					      },
					      {
					        "id": "TobQ11Rcd.aiff",
					        "startTime": 24000,
					        "duration": 4717.6643990929715
					      }
					    ]
					  }
					}
				},
				{
					questionText: "What are the battery-operated devices that produce a flavored nicotine vapor called?",
					option: ["E-cigarettes", 
							 "Cigarillos", 
							 "Marijuana", 
							 "Snus"],
					remediation: ["Correct.", 
							 	  "Nope. The battery-operated devices are called e-cigarettes.", 
							 	  "Nope. The battery-operated devices are called e-cigarettes.", 
							 	  "Nope. The battery-operated devices are called e-cigarettes."],
					correctIndex: 0,
					questionAudio: "TobQ12.aiff",
					remediationAudio: ["TobQ12Ra.aiff", "TobQ12Rbcd.aiff", "TobQ12Rbcd.aiff", "TobQ12Rbcd.aiff"],
					audioData: {
					  "src": "tob12.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ12.aiff",
					        "startTime": 4000,
					        "duration": 13832.448979591838
					      },
					      {
					        "id": "TobQ12Ra.aiff",
					        "startTime": 19000,
					        "duration": 634.6031746031748
					      },
					      {
					        "id": "TobQ12Rbcd.aiff",
					        "startTime": 21000,
					        "duration": 4393.9455782312925
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these is something that a teen smoker would experience?",
					option: ["Fresh breath", 
							 "Decreased athletic performance", 
							 "Fewer illnesses", 
							 "Lesser risk of injury"],
					remediation: ["Nope. A teen smoker would probably have bad breath.", 
							 	  "Correct! A teen smoker could definitely see a decrease in their athletic performance.", 
							 	  "Sorry, but teen smokers tend to have more illnesses.", 
							 	  "Sorry, but teen smokers can have a greater risk of injury."],
					correctIndex: 1,
					questionAudio: "TobQ13.aiff",
					remediationAudio: ["TobQ13Ra.aiff", "TobQ13Rb.aiff", "TobQ13Rc.aiff", "TobQ13Rd.aiff"],
					audioData: {
					  "src": "tob13.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ13.aiff",
					        "startTime": 4000,
					        "duration": 14643.310657596374
					      },
					      {
					        "id": "TobQ13Ra.aiff",
					        "startTime": 20000,
					        "duration": 3313.9002267573687
					      },
					      {
					        "id": "TobQ13Rb.aiff",
					        "startTime": 25000,
					        "duration": 4583.061224489797
					      },
					      {
					        "id": "TobQ13Rc.aiff",
					        "startTime": 31000,
					        "duration": 3422.8798185941046
					      },
					      {
					        "id": "TobQ13Rd.aiff",
					        "startTime": 36000,
					        "duration": 3706.4852607709754
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these is a long-term health effect of smoking?",
					option: ["Addiction", 
							 "Oral cancers", 
							 "Lung diseases", 
							 "All of the above"],
					remediation: ["Not quite. All of these are long-term effects of smoking.", 
							 	  "Not quite. All of these are long-term effects of smoking.", 
							 	  "Not quite. All of these are long-term effects of smoking.", 
							 	  "That's right! All of these are long-term effects of smoking."],
					correctIndex: 3,
					questionAudio: "TobQ14.aiff",
					remediationAudio: ["TobQ14Rabc.aiff", "TobQ14Rabc.aiff", "TobQ14Rabc.aiff", "TobQ14Rd.aiff"],
					audioData: {
					  "src": "tob14.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ14.aiff",
					        "startTime": 4000,
					        "duration": 12917.006802721091
					      },
					      {
					        "id": "TobQ14Rabc.aiff",
					        "startTime": 18000,
					        "duration": 3929.229024943311
					      },
					      {
					        "id": "TobQ14Rd.aiff",
					        "startTime": 23000,
					        "duration": 3522.222222222222
					      }
					    ]
					  }
					}
				},
				{
					questionText: "Which of these would be an example of positive pressure?",
					option: ["Pressuring a classmate to give you answers for a test", 
							 "Pressuring a friend to use inhalants", 
							 "Pressuring a parent to quit smoking", 
							 "Pressuring a teammate to skip soccer practice"],
					remediation: ["No way! That would be negative pressure.", 
							 	  "Nope. That would be negative pressure.", 
							 	  "You're right! Pressuring someone to do something healthy would be positive pressure.", 
							 	  "Nope. That would be negative pressure."],
					correctIndex: 2,
					questionAudio: "TobQ15.aiff",
					remediationAudio: ["TobQ15Rabd.aiff", "TobQ15Rabd.aiff", "TobQ15Rc.aiff", "TobQ15Rabd.aiff"],
					audioData: {
					  "src": "tob15.m4a",
					  "data": {
					    "audioSprite": [
					      {
					        "id": "silence",
					        "startTime": 0,
					        "duration": 3000
					      },
					      {
					        "id": "TobQ15.aiff",
					        "startTime": 4000,
					        "duration": 19437.732426303854
					      },
					      {
					        "id": "TobQ15Rabd.aiff",
					        "startTime": 25000,
					        "duration": 2496.8253968253966
					      },
					      {
					        "id": "TobQ15Rc.aiff",
					        "startTime": 29000,
					        "duration": 4739.773242630385
					      }
					    ]
					  }
					}
				}
			]
		}

	],

	audio: {
		general: {
		  "src": "general.m4a",
		  "data": {
		    "audioSprite": [
		      {
		        "id": "silence",
		        "startTime": 0,
		        "duration": 3000
		      },
		      {
		        "id": "Pwr2Optns.aiff",
		        "startTime": 4000,
		        "duration": 2274.467120181406
		      },
		      {
		        "id": "Pwr2Tries.aiff",
		        "startTime": 8000,
		        "duration": 2270.249433106576
		      },
		      {
		        "id": "PwrSkp.aiff",
		        "startTime": 12000,
		        "duration": 1865.1473922902503
		      },
		      {
		        "id": "TopSel.aiff",
		        "startTime": 15000,
		        "duration": 2370.589569160998
		      },
		      {
		        "id": "Win_mixdown",
		        "startTime": 19000,
		        "duration": 6153.832199546486
		      }
		    ]
		  }
		},

		instructions: {
		  "src": "instructions.m4a",
		  "data": {
		    "audioSprite": [
		      {
		        "id": "silence",
		        "startTime": 0,
		        "duration": 3000
		      },
		      {
		        "id": "I1.aiff",
		        "startTime": 4000,
		        "duration": 10488.163265306122
		      },
		      {
		        "id": "I2.aiff",
		        "startTime": 16000,
		        "duration": 5098.480725623581
		      },
		      {
		        "id": "I3.aiff",
		        "startTime": 23000,
		        "duration": 7375.102040816327
		      },
		      {
		        "id": "I4.aiff",
		        "startTime": 32000,
		        "duration": 6164.0816326530585
		      },
		      {
		        "id": "I5.aiff",
		        "startTime": 40000,
		        "duration": 4076.3945578231287
		      },
		      {
		        "id": "I6.aiff",
		        "startTime": 46000,
		        "duration": 2277.278911564629
		      }
		    ]
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
		        "id": "cupboard_close_01",
		        "startTime": 4000,
		        "duration": 702.4036281179135
		      },
		      {
		        "id": "fun_in_the_sun",
		        "startTime": 6000,
		        "duration": 6153.832199546486
		      },
		      {
		        "id": "magicmallet_c",
		        "startTime": 14000,
		        "duration": 972.3356009070301
		      },
		      {
		        "id": "magicmallet_cmiddle",
		        "startTime": 16000,
		        "duration": 845.0566893424032
		      },
		      {
		        "id": "nice_nav_40",
		        "startTime": 18000,
		        "duration": 1272.0181405895694
		      },
		      {
		        "id": "spinner for board game 01",
		        "startTime": 21000,
		        "duration": 4159.931972789117
		      },
		      {
		        "id": "yourturn02",
		        "startTime": 27000,
		        "duration": 655.9637188208604
		      },
		      {
		        "id": "yourturn08",
		        "startTime": 29000,
		        "duration": 1390.2947845804974
		      }
		    ]
		  }
		}
	}
}