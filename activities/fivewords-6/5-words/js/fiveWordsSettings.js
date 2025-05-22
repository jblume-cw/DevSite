fiveWordsSettings = {

	scormEnabled: fiveWordsScormEnabled,

	autoScale: true,

	inspectorEnabled: false,

	texture: {
		key: "spritesheet",
		image: "images/spritesheet.png",
		data: "images/spritesheet.json"
	},

	loader: {

		rotator: {
			key: "rotator",
			file: "images/load-rotator.png",
			x: 400,
			y: 300,
			speed: 7
		},

		background: {
			key: "backdrop",
			file: "images/backdrop.png",
			x: 0,
			y: 0
		},

		label: {
			loadingText: "Loading",
			clickthroughText: "Tap here to continue.",
			font: "Open Sans Condensed, Arial, Helvetica, sans",
			fill: "#FFFFFF",
			weight: 700,
			size: 22,
			padding: 10
		}

	},

	splash: {

		music: "asunshineintro04",

		background: {
			key: "backdrop",
			x: 0,
			y: 0
		},

		bottom: {
			key: "splash-bottom.png",
			x: 0,
			y: 305
		},

		logo: {
			key: "logo.png",
			x: 239,
			y: 67
		},

		puzzleButtonText: {
			font: "Open Sans Condensed, Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 28,
			weight: 700
		},

		puzzleButtons: [
			{
				x: 127,
				y: 440,
				downKey: "puzzle-button-dn.png",
				upKey: "puzzle-button-up.png",
				overKey: "puzzle-button-up.png",
				outKey: "puzzle-button-up.png",
				label: {
					text: "PUZZLE #1",
					offset: {
						x: -4,
						y: 0
					}
				},
				completed: {
					downKey: "puzzle-button-completed-dn.png",
					upKey: "puzzle-button-completed-up.png",
					overKey: "puzzle-button-completed-up.png",
					outKey: "puzzle-button-completed-up.png"
				}
			},
			{
				x: 317,
				y: 440,
				downKey: "puzzle-button-dn.png",
				upKey: "puzzle-button-up.png",
				overKey: "puzzle-button-up.png",
				outKey: "puzzle-button-up.png",
				label: {
					text: "PUZZLE #2",
					offset: {
						x: -4,
						y: 0
					}
				},
				completed: {
					downKey: "puzzle-button-completed-dn.png",
					upKey: "puzzle-button-completed-up.png",
					overKey: "puzzle-button-completed-up.png",
					outKey: "puzzle-button-completed-up.png"
				}
			},
			{
				x: 507,
				y: 440,
				downKey: "puzzle-button-dn.png",
				upKey: "puzzle-button-up.png",
				overKey: "puzzle-button-up.png",
				outKey: "puzzle-button-up.png",
				label: {
					text: "PUZZLE #3",
					offset: {
						x: -4,
						y: 0
					}
				},
				completed: {
					downKey: "puzzle-button-completed-dn.png",
					upKey: "puzzle-button-completed-up.png",
					overKey: "puzzle-button-completed-up.png",
					outKey: "puzzle-button-completed-up.png"
				}
			},
			{
				x: 317,
				y: 515,
				downKey: "puzzle-button-dn.png",
				upKey: "puzzle-button-up.png",
				overKey: "puzzle-button-up.png",
				outKey: "puzzle-button-up.png",
				label: {
					text: "BONUS PUZZLE",
					offset: {
						x: -4,
						y: 0
					},
					size: 22
				},
				conditional: {
					type: "completion",
					puzzles: [0, 1, 2]
				},
				completed: {
					downKey: "puzzle-button-completed-dn.png",
					upKey: "puzzle-button-completed-up.png",
					overKey: "puzzle-button-completed-up.png",
					outKey: "puzzle-button-completed-up.png"
				}
			}
		]

	},

	game: {

		hintsGiven: 4,

		maxSegmentsInGuess: 4,

		background: {
			key: "backdrop",
			x: 0,
			y: 0
		},

		bottom: {
			key: "game-bottom.png",
			x: 0,
			y: 300
		},

		clueBackground: {
			key: "clue-background.png",
			positions: [
				{ x: 15, y: 10 },
				{ x: 15, y: 60 },
				{ x: 15, y: 110 },
				{ x: 15, y: 160 },
				{ x: 15, y: 210 }
			]
		},

		guessField: {
			backgroundKey: "field.png",
			x: 200,
			y: 269,
		},

		menuButton: {
			x: 14,
			y: 502,
			downKey: "menu-button-dn.png",
			upKey: "menu-button-up.png",
			overKey: "menu-button-up.png",
			outKey: "menu-button-up.png"
		},

		helpButton: {
			x: 14,
			y: 548,
			downKey: "help-button-dn.png",
			upKey: "help-button-up.png",
			overKey: "help-button-up.png",
			outKey: "help-button-up.png"
		},

		guessButton: {
			x: 506,
			y: 277,
			downKey: "guess-button-dn.png",
			upKey: "guess-button-up.png",
			overKey: "guess-button-up.png",
			outKey: "guess-button-up.png"
		},

		clearButton: {
			x: 551,
			y: 277,
			downKey: "cancel-button-dn.png",
			upKey: "cancel-button-up.png",
			overKey: "cancel-button-up.png",
			outKey: "cancel-button-up.png"
		},

		guessText: {
			font: "Open Sans Condensed, Arial, Helvetica, sans",
			fill: "#343434",
			size: 32,
			weight: 700,
			x: 220,
			y: 280
		},

		hintsLeftText: {
			font: "Open Sans Condensed, Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 20,
			weight: 700,
			x: 620,
			y: 288
		},

		clueText: {
			font: "Open Sans Condensed, Arial, Helvetica, sans",
			fill: "#343434",
			foundFill: "#ffffff",
			size: 20,
			weight: 700,
			positions: [
				{ x: 30, y: 22 },
				{ x: 30, y: 72 },
				{ x: 30, y: 122 },
				{ x: 30, y: 172 },
				{ x: 30, y: 222 }
			]
		},

		audioButton: {
			downKey: "audio-button-dn.png",
			upKey: "audio-button-up.png",
			overKey: "audio-button-up.png",
			outKey: "audio-button-up.png",
			xOffset: 10,
			yOffset: 1
		},

		hintButton: {
			downKey: "hint-button-dn.png",
			upKey: "hint-button-up.png",
			overKey: "hint-button-up.png",
			outKey: "hint-button-up.png",
			xOffset: 40,
			yOffset: 0
		},

		segmentButton: {
			downKey: "letter-button-dn.png",
			upKey: "letter-button-up.png",
			overKey: "letter-button-up.png",
			outKey: "letter-button-up.png"
		},

		segmentButtonPositions: [
			{ x: 112, y: 376 },
			{ x: 262, y: 376 },
			{ x: 412, y: 376 },
			{ x: 562, y: 376 },
			{ x: 112, y: 446 },
			{ x: 262, y: 446 },
			{ x: 412, y: 446 },
			{ x: 562, y: 446 },
			{ x: 112, y: 516 },
			{ x: 262, y: 516 },
			{ x: 412, y: 516 },
			{ x: 562, y: 516 }
		],

		segmentButtonText: {
			font: "Open Sans Condensed, Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 34,
			weight: 700,
			xOffset: -4,
			yOffset: -1
		},

		winMessage: {
			text: [
				{
					font: "Open Sans Condensed, Arial, Helvetica, sans",
					fill: "#ffffff",
					size: 40,
					weight: 700,
					y: 418,
					x: 400,
					align: "center",
					text: "Great job!"
				},
				{
					font: "Open Sans Condensed, Arial, Helvetica, sans",
					fill: "#ffffff",
					size: 34,
					weight: 700,
					y: 465,
					x: 400,
					align: "center",
					text: "You have completed this puzzle."
				}
			],
			audio: "FLWPuzComp",
			completionAudioDelay: 500,
			menuButton: {
				x: 375,
				y: 500,
				downKey: "menu-button-lg-dn.png",
				upKey: "menu-button-lg-up.png",
				overKey: "menu-button-lg-up.png",
				outKey: "menu-button-lg-up.png"
			}
		},

		help: {
			audioKey: "instructions_mixdown",
			cues: [
				{
					time: 50,
					position: "absolute",
					sprites: [
						{
							key: "help-clues.png",
							x: 8,
							y: 3
						}
					]
				},
				{
					time: 2280,
					position: "absolute",
					sprites: [
						{
							key: "help-letters.png",
							x: 97,
							y: 359
						}
					]
				},
				{
					time: 6000,
					position: "absolute",
					sprites: [
						{
							key: "help-guess.png",
							x: 496,
							y: 268
						}
					]
				},
				{
					time: 11000,
					position: "relative-audio",
					key: "help-audio.png",
					offset: { x: -12, y: -11 }
				},
				{
					time: 14300,
					position: "relative-hint",
					key: "help-hint.png",
					offset: { x: -15, y: -10 }
				},
				{
					time: 19000,
					position: "absolute",
					sprites: []
				},
				{
					time: 23000,
					position: "absolute",
					sprites: [
						{
							key: "help-guess.png",
							x: 4,
							y: 538
						}
					]
				}
			]
		},

		incorrectSound: "gameshow_buzzer_01",

		correctSound: "game_show_bell_02",

		solutionAudioDelay: 1000,

		puzzle: [
			{
				words: [
					{
						solution: ["STR", "ESS"],
						clue: "An anxious, nervous, or worried feeling",
						solutionAudioKey: "FLWSt",
						clueAudioKey: "FLWStCl"
					},
					{
						solution: ["DIS", "ORD", "ER"],
						clue: "When worry becomes extreme you may have an anxiety ______.",
						solutionAudioKey: "FLWDi",
						clueAudioKey: "FLWDiCl"
					},
					{
						solution: ["BRE", "ATH", "ING"],
						clue: "Doing this can help calm you down",
						solutionAudioKey: "FLWBr",
						clueAudioKey: "FLWBrCl"
					},
					{
						solution: ["ILLE", "GAL"],
						clue: "Against the law",
						solutionAudioKey: "FLWIl",
						clueAudioKey: "FLWIlCl"
					},
					{
						solution: ["DRU", "GS"],
						clue: "A dangerous way to cope",
						solutionAudioKey: "FLWDr",
						clueAudioKey: "FLWDrCl"
					}
				]
			},
			{
				words: [
					{
						solution: ["AD", "ULT"],
						clue: "It can help to talk to a trusted one of them",
						solutionAudioKey: "FLWAd",
						clueAudioKey: "FLWAdCl"
					},
					{
						solution: ["SMO", "KED"],
						clue: "One way that marijuana is used",
						solutionAudioKey: "FLWSm",
						clueAudioKey: "FLWSmCl"
					},
					{
						solution: ["ATTI", "TUDE"],
						clue: "Changing yours can help deal with stress",
						solutionAudioKey: "FLWAt",
						clueAudioKey: "FLWAtCl"
					},
					{
						solution: ["MARI", "JU", "ANA"],
						clue: "A shredded, green or brown mix from the Cannabis sativa plant",
						solutionAudioKey: "FLWMa",
						clueAudioKey: "FLWMaCl"
					},
					{
						solution: ["DE", "PRES", "SION"],
						clue: "Feeling sad, moody, angry or not caring for an extended period",
						solutionAudioKey: "FLWDe",
						clueAudioKey: "FLWDeCl"
					}
				]
			},
			{
				words: [
					{
						solution: ["SL", "EEP"],
						clue: "A good night of this is good for your body",
						solutionAudioKey: "FLWSl",
						clueAudioKey: "FLWSlCl"
					},
					{
						solution: ["EXER", "CISE"],
						clue: "Getting this regularly will help keep you healthy",
						solutionAudioKey: "FLWEx",
						clueAudioKey: "FLWExCl"
					},
					{
						solution: ["APPE", "TITE"],
						clue: "This increases with marijuana use",
						solutionAudioKey: "FLWAp",
						clueAudioKey: "FLWApCl"
					},
					{
						solution: ["RESP", "IRA", "TORY"],
						clue: "Long-term use of marijuana can lead to problems with this body system",
						solutionAudioKey: "FLWRe",
						clueAudioKey: "FLWReCl"
					},
					{
						solution: ["BLO", "OD", "SHOT"],
						clue: "Eyes become this when a person uses marijuana",
						solutionAudioKey: "FLWBl",
						clueAudioKey: "FLWBlCl"
					}
				]
			},
			{
				words: [
					{
						solution: ["HI", "GH"],
						clue: "A temporary period of feeling really good",
						solutionAudioKey: "FLWHi",
						clueAudioKey: "FLWHiCl"
					},
					{
						solution: ["IMM", "UNE"],
						clue: "Harder to fight infections when this system is affected",
						solutionAudioKey: "FLWIm",
						clueAudioKey: "FLWImCl"
					},
					{
						solution: ["ANX", "IETY"],
						clue: "A worried feeling",
						solutionAudioKey: "FLWAn",
						clueAudioKey: "FLWAnCl"
					},
					{
						solution: ["CANN", "ABIS"],
						clue: "Marijuana comes from the ______ sativa plant",
						solutionAudioKey: "FLWCa",
						clueAudioKey: "FLWCaCl"
					},
					{
						solution: ["HALL", "UCI", "NAT", "IONS"],
						clue: "Seeing things that aren’t really there",
						solutionAudioKey: "FLWHa",
						clueAudioKey: "FLWHaCl"
					}
				]
			}
		]
		
	},

	audio: {
		key: "vo",
		urls: ["audio/fivewords.ogg", "audio/fivewords.m4a"],
		data: {
			spritemap: {
				"FLWAd": {
			        "start": 0,
			        "end": 0.9732879818594105,
			        "loop": false
			      },
			      "FLWAdCl": {
			        "start": 2,
			        "end": 4.748344671201814,
			        "loop": false
			      },
			      "FLWAn": {
			        "start": 6,
			        "end": 6.779092970521542,
			        "loop": false
			      },
			      "FLWAnCl": {
			        "start": 8,
			        "end": 9.023061224489796,
			        "loop": false
			      },
			      "FLWAp": {
			        "start": 11,
			        "end": 11.638208616780044,
			        "loop": false
			      },
			      "FLWApCl": {
			        "start": 13,
			        "end": 15.067936507936508,
			        "loop": false
			      },
			      "FLWAt": {
			        "start": 17,
			        "end": 17.74532879818594,
			        "loop": false
			      },
			      "FLWAtCl": {
			        "start": 19,
			        "end": 21.222539682539683,
			        "loop": false
			      },
			      "FLWBl": {
			        "start": 23,
			        "end": 23.764625850340135,
			        "loop": false
			      },
			      "FLWBlCl": {
			        "start": 25,
			        "end": 27.554149659863945,
			        "loop": false
			      },
			      "FLWBr": {
			        "start": 29,
			        "end": 29.66249433106576,
			        "loop": false
			      },
			      "FLWBrCl": {
			        "start": 31,
			        "end": 32.63385487528345,
			        "loop": false
			      },
			      "FLWCa": {
			        "start": 34,
			        "end": 34.886916099773245,
			        "loop": false
			      },
			      "FLWCaCl": {
			        "start": 36,
			        "end": 38.58321995464853,
			        "loop": false
			      },
			      "FLWDe": {
			        "start": 40,
			        "end": 40.67902494331066,
			        "loop": false
			      },
			      "FLWDeCl": {
			        "start": 42,
			        "end": 45.94281179138322,
			        "loop": false
			      },
			      "FLWDi": {
			        "start": 47,
			        "end": 47.79571428571428,
			        "loop": false
			      },
			      "FLWDiCl": {
			        "start": 49,
			        "end": 52.694761904761904,
			        "loop": false
			      },
			      "FLWDr": {
			        "start": 54,
			        "end": 54.78476190476191,
			        "loop": false
			      },
			      "FLWDrCl": {
			        "start": 56,
			        "end": 57.497573696145125,
			        "loop": false
			      },
			      "FLWEx": {
			        "start": 59,
			        "end": 60.464671201814056,
			        "loop": false
			      },
			      "FLWExCl": {
			        "start": 62,
			        "end": 64.62551020408164,
			        "loop": false
			      },
			      "FLWHa": {
			        "start": 66,
			        "end": 67.18229024943311,
			        "loop": false
			      },
			      "FLWHaCl": {
			        "start": 69,
			        "end": 70.84739229024943,
			        "loop": false
			      },
			      "FLWHi": {
			        "start": 72,
			        "end": 72.65585034013606,
			        "loop": false
			      },
			      "FLWHiCl": {
			        "start": 74,
			        "end": 76.36814058956917,
			        "loop": false
			      },
			      "FLWIl": {
			        "start": 78,
			        "end": 78.6227664399093,
			        "loop": false
			      },
			      "FLWIlCl": {
			        "start": 80,
			        "end": 81.00281179138322,
			        "loop": false
			      },
			      "FLWIm": {
			        "start": 83,
			        "end": 83.94630385487528,
			        "loop": false
			      },
			      "FLWImCl": {
			        "start": 85,
			        "end": 88.26643990929705,
			        "loop": false
			      },
			      "FLWMa": {
			        "start": 90,
			        "end": 90.76358276643991,
			        "loop": false
			      },
			      "FLWMaCl": {
			        "start": 92,
			        "end": 95.49160997732426,
			        "loop": false
			      },
			      "FLWPuzComp": {
			        "start": 97,
			        "end": 99.2878231292517,
			        "loop": false
			      },
			      "FLWRe": {
			        "start": 101,
			        "end": 101.85501133786848,
			        "loop": false
			      },
			      "FLWReCl": {
			        "start": 103,
			        "end": 106.80126984126984,
			        "loop": false
			      },
			      "FLWSl": {
			        "start": 108,
			        "end": 108.62256235827664,
			        "loop": false
			      },
			      "FLWSlCl": {
			        "start": 110,
			        "end": 111.94904761904762,
			        "loop": false
			      },
			      "FLWSm": {
			        "start": 113,
			        "end": 113.90614512471656,
			        "loop": false
			      },
			      "FLWSmCl": {
			        "start": 115,
			        "end": 117.35031746031746,
			        "loop": false
			      },
			      "FLWSt": {
			        "start": 119,
			        "end": 119.84399092970521,
			        "loop": false
			      },
			      "FLWStCl": {
			        "start": 121,
			        "end": 123.43537414965986,
			        "loop": false
			      },
			      "asunshineintro04": {
			        "start": 125,
			        "end": 127.22224489795919,
			        "loop": false
			      },
			      "game_show_bell_02": {
			        "start": 129,
			        "end": 130.99836734693878,
			        "loop": false
			      },
			      "gameshow_buzzer_01": {
			        "start": 132,
			        "end": 132.4290702947846,
			        "loop": false
			      },
			      "instructions_mixdown": {
			        "start": 134,
			        "end": 160.3277097505669,
			        "loop": false
			      }
			}
		}
	}
	
}