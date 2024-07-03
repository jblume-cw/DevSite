settings = {

	scormEnabled: strikeItFitScormEnabled,

	autoScale: true,

	backgroundColor: "#1c2136",

	randomizeQuestions: true,

	loader: {

		rotator: {
			key: "rotator",
			file: "images/load-rotator.png",
			x: 400,
			y: 470,
			speed: 7
		},

		backgroundElements: [
			{ x: 0, y: 0, key: "background", file: "images/bg.png" },
			{ x: 210, y: 200, key: "logo", file: "images/mission_health_logo.png" }
		],

		label: {
			loadingText: "Loading",
			clickthroughText: "Tap here to continue.",
			font: "Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 22,
			x: 400,
			y: 410
		}

	},

	textures: [
		{ key: "main", image: "images/main.png", data: "images/main.json" }
	],

	splash: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "splash-bg.png" }
		],

		beginButton: {
			texture: "main",
			downKey: "begin-button0002.png",
			outKey: "begin-button0001.png",
			overKey: "begin-button0002.png",
			upKey: "begin-button0001.png",
			x: 540,
			y: 450
		},

		splashAudioKey: "splash_mixdown"
	},

	instructions: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "instructions-bg.png" }
		],

		voKey: "Instructions",

		ambientSound: {
			key: "bowling_amb_B_30",
			volume: 0.15
		},

		header: {
			font: "Monoton, Helvetica, sans",
			fill: "#8CEAEA",
			size: 44,
			x: 400,
			y: 25,
			text: "Welcome to Strike it Fit"
		},

		body: {
			font: "Maven Pro, Helvetica, sans",
			fill: "#ffffff",
			size: 22,
			x: 400,
			y: 100,
			wordWrapWidth: 740,
			text: "You will be asked a question in each bowling frame. Answer it correctly to knock all of the pins down and score a strike. Answer it incorrectly and you will be given a second chance to get it right and pick up the spare. Play ten frames and see how high you can score.\nPick a ball to get started."
		},

		ballButtons: [
			{
				texture: "main",
				downKey: "ball green0002.png",
				outKey: "ball green0001.png",
				overKey: "ball green0002.png",
				upKey: "ball green0001.png",
				x: 581,
				y: 289,
				hitAreaDiameter: 151
			},
			{
				texture: "main",
				downKey: "ball purple0002.png",
				outKey: "ball purple0001.png",
				overKey: "ball purple0002.png",
				upKey: "ball purple0001.png",
				x: 495,
				y: 296,
				hitAreaDiameter: 181
			},
			{
				texture: "main",
				downKey: "ball pink0002.png",
				outKey: "ball pink0001.png",
				overKey: "ball pink0002.png",
				upKey: "ball pink0001.png",
				x: 389,
				y: 302,
				hitAreaDiameter: 201
			},
			{
				texture: "main",
				downKey: "ball red0002.png",
				outKey: "ball red0001.png",
				overKey: "ball red0002.png",
				upKey: "ball red0001.png",
				x: 271,
				y: 326,
				hitAreaDiameter: 214
			},
			{
				texture: "main",
				downKey: "ball blue0002.png",
				outKey: "ball blue0001.png",
				overKey: "ball blue0002.png",
				upKey: "ball blue0001.png",
				x: 144,
				y: 337,
				hitAreaDiameter: 226
			},
			{
				texture: "main",
				downKey: "ball black0002.png",
				outKey: "ball black0001.png",
				overKey: "ball black0002.png",
				upKey: "ball black0001.png",
				x: -19,
				y: 363,
				hitAreaDiameter: 250
			}
		],

		foregroundElements: [
			{ x: 36, y: 443, texture: "main", key: "rail.png" }
		]
	},

	initials: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "enter-initials-bg.png" }
		],

		prompt: {
			font: "Monoton, Helvetica, sans",
			fill: "#8CEAEA",
			size: 44,
			x: 400,
			y: 25,
			text: "Enter your initials"
		},

		initialText: {
			font: "Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 175,
			fontWeight: "bold",
			x: 400,
			y: 250
		},

		okButton: {
			texture: "main",
			downKey: "ok-btn0002.png",
			outKey: "ok-btn0001.png",
			overKey: "ok-btn0002.png",
			upKey: "ok-btn0001.png",
			x: 635,
			y: 518
		},

		deleteButton: {
			texture: "main",
			downKey: "key delete0002.png",
			outKey: "key delete0001.png",
			overKey: "key delete0002.png",
			upKey: "key delete0001.png",
			x: 35,
			y: 518
		},

		keyboard: {
			keys: [
				{	
					texture: "main",
					upKey: "key0001.png",
					outKey: "key0001.png",
					downKey: "key0027.png",
					overKey: "key0027.png",
					x: 55, y: 378, value: "Q"
				},
				{	
					texture: "main",
					upKey: "key0002.png",
					outKey: "key0002.png",
					downKey: "key0028.png",
					overKey: "key0028.png",
					x: 125,	y: 378,	value: "W"
				},
				{	
					texture: "main",
					upKey: "key0003.png",
					outKey: "key0003.png",
					downKey: "key0029.png",
					overKey: "key0029.png",
					x: 195,	y: 378,	value: "E"
				},
				{	
					texture: "main",
					upKey: "key0004.png",
					outKey: "key0004.png",
					downKey: "key0030.png",
					overKey: "key0030.png",
					x: 265,	y: 378,	value: "R"
				},
				{	
					texture: "main",
					upKey: "key0005.png",
					outKey: "key0005.png",
					downKey: "key0031.png",
					overKey: "key0031.png",
					x: 335,	y: 378,	value: "T"
				},
				{	
					texture: "main",
					upKey: "key0006.png",
					outKey: "key0006.png",
					downKey: "key0032.png",
					overKey: "key0032.png",
					x: 405,	y: 378,	value: "Y"
				},
				{	
					texture: "main",
					upKey: "key0007.png",
					outKey: "key0007.png",
					downKey: "key0033.png",
					overKey: "key0033.png",
					x: 475,	y: 378,	value: "U"
				},
				{	
					texture: "main",
					upKey: "key0008.png",
					outKey: "key0008.png",
					downKey: "key0034.png",
					overKey: "key0034.png",
					x: 545,	y: 378,	value: "I"
				},
				{	
					texture: "main",
					upKey: "key0009.png",
					outKey: "key0009.png",
					downKey: "key0035.png",
					overKey: "key0035.png",
					x: 615,	y: 378,	value: "O"
				},
				{	
					texture: "main",
					upKey: "key0010.png",
					outKey: "key0010.png",
					downKey: "key0036.png",
					overKey: "key0036.png",
					x: 685,	y: 378,	value: "P"
				},
				{	
					texture: "main",
					upKey: "key0011.png",
					outKey: "key0011.png",
					downKey: "key0037.png",
					overKey: "key0037.png",
					x: 80,	y: 448,	value: "A"
				},
				{	
					texture: "main",
					upKey: "key0012.png",
					outKey: "key0012.png",
					downKey: "key0038.png",
					overKey: "key0038.png",
					x: 150,	y: 448,	value: "S"
				},
				{	
					texture: "main",
					upKey: "key0013.png",
					outKey: "key0013.png",
					downKey: "key0039.png",
					overKey: "key0039.png",
					x: 220,	y: 448,	value: "D"
				},
				{	
					texture: "main",
					upKey: "key0014.png",
					outKey: "key0014.png",
					downKey: "key0040.png",
					overKey: "key0040.png",
					x: 290,	y: 448,	value: "F"
				},
				{	
					texture: "main",
					upKey: "key0015.png",
					outKey: "key0015.png",
					downKey: "key0041.png",
					overKey: "key0041.png",
					x: 360,	y: 448,	value: "G"
				},
				{	
					texture: "main",
					upKey: "key0016.png",
					outKey: "key0016.png",
					downKey: "key0042.png",
					overKey: "key0042.png",
					x: 430,	y: 448,	value: "H"
				},
				{	
					texture: "main",
					upKey: "key0017.png",
					outKey: "key0017.png",
					downKey: "key0043.png",
					overKey: "key0043.png",
					x: 500,	y: 448,	value: "J"
				},
				{	
					texture: "main",
					upKey: "key0018.png",
					outKey: "key0018.png",
					downKey: "key0044.png",
					overKey: "key0044.png",
					x: 570,	y: 448,	value: "K"
				},
				{	
					texture: "main",
					upKey: "key0019.png",
					outKey: "key0019.png",
					downKey: "key0045.png",
					overKey: "key0045.png",
					x: 640,	y: 448,	value: "L"
				},
				{	
					texture: "main",
					upKey: "key0020.png",
					outKey: "key0020.png",
					downKey: "key0046.png",
					overKey: "key0046.png",
					x: 135,	y: 518,	value: "Z"
				},
				{	
					texture: "main",
					upKey: "key0021.png",
					outKey: "key0021.png",
					downKey: "key0047.png",
					overKey: "key0047.png",
					x: 205,	y: 518,	value: "X"
				},
				{	
					texture: "main",
					upKey: "key0022.png",
					outKey: "key0022.png",
					downKey: "key0048.png",
					overKey: "key0048.png",
					x: 275,	y: 518,	value: "C"
				},
				{	
					texture: "main",
					upKey: "key0023.png",
					outKey: "key0023.png",
					downKey: "key0049.png",
					overKey: "key0049.png",
					x: 345,	y: 518,	value: "V"
				},
				{	
					texture: "main",
					upKey: "key0024.png",
					outKey: "key0024.png",
					downKey: "key0050.png",
					overKey: "key0050.png",
					x: 415,	y: 518,	value: "B"
				},
				{	
					texture: "main",
					upKey: "key0025.png",
					outKey: "key0025.png",
					downKey: "key0051.png",
					overKey: "key0051.png",
					x: 485,	y: 518,	value: "N"
				},
				{	
					texture: "main",
					upKey: "key0026.png",
					outKey: "key0026.png",
					downKey: "key0052.png",
					overKey: "key0052.png",
					x: 555,	y: 518,	value: "M"
				}
			]
		},

		foregroundElements: []
	},

	question: {
		backgroundElements: [
			{ x: 11, y: 10, texture: "main", key: "FrameScore.png" },
			{ x: 12, y: 122, texture: "main", key: "question-area.png" }
		],

		currentFrameMarker: {
			texture: "main", 
			key: "frame highlight.png",
			positions: [ { x: 110, y: 10 }, { x: 170, y: 10 }, { x: 230, y: 10 }, { x: 290, y: 10 }, { x: 350, y: 10 }, { x: 410, y: 10 }, { x: 470, y: 10 }, { x: 530, y: 10 }, { x: 590, y: 10 }, { x: 650, y: 10 } ]
		},

		loadRotator: {
			key: "load-rotator.png",
			texture: "main",
			x: 400,
			y: 350,
			speed: 7
		},

		tryAgainAudioKey: "Try Again",
		correctAudioKey: [ "Correct 1 - Jack", "Correct 2 - Jack", "Correct 3 - Jack", "Correct 4 - Jack", "Correct 5 - Jack" ],
		incorrectAudioKey: [ "Incorrect 1 - Jack", "Incorrect 2 - Jack", "Incorrect 3 - Jack", "Incorrect 4 - Jack" ],

		audioPauseGap: 200,

		boxScore: {
			initials: {
				font: "Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 36,
				fontWeight: "bold",
				x: 63,
				y: 80
			},
			ballScore: {
				font: "Arial, Helvetica, sans",
				fill: "#3333FF",
				size: 18,
				fontWeight: "bold",
				startX: 144,
				xInterval: 60,
				y: 59
			},
			frameScore: {
				font: "Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 28,
				fontWeight: "bold",
				startX: 144,
				xInterval: 60,
				y: 97
			},
			totalScore: {
				font: "Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 32,
				fontWeight: "bold",
				x: 750,
				y: 97
			},
			totalScoreHeading: {
				font: "Arial, Helvetica, sans",
				fill: "#8CEAEA",
				size: 20,
				fontWeight: "bold",
				x: 750,
				y: 59,
				text: "Total"
			}
		},

		question: {
			questionBox: { x: 40, y: 144, texture: "main", key: "question-box.png" },
			question: {
				font: "Maven Pro, Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 24,
				fontWeight: "normal",
				wordWrapWidth: 680,
				lineSpacing: -3,
				x: 60,
				y: 197
			},
			optionLabel: {
				font: "Maven Pro, Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 20,
				fontWeight: "normal",
				x: 140,
				y: [280, 350, 420, 490],
				labels: [ "A.", "B.", "C.", "D." ]
			},
			option: {
				font: "Maven Pro, Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 20,
				fontWeight: "normal",
				wordWrapWidth: 540,
				lineSpacing: -3,
				x: 170,
				y: [280, 350, 420, 490]
			},
			disabledOption: {
				alpha: 0.33
			},
			radioButton: {
				texture: "main",
				downKey: "QuestionMarker0002.png",
				outKey: "QuestionMarker0001.png",
				overKey: "QuestionMarker0002.png",
				upKey: "QuestionMarker0001.png",
				x: 85,
				y: [270, 340, 410, 480]
			}
		},

		result: {
			evaluation: {
				font: "Maven Pro, Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 48,
				fontWeight: "normal",
				x: 400,
				y: 160
			},
			mark: {
				font: "Maven Pro, Arial, Helvetica, sans",
				fill: "#8ceaea",
				size: 150,
				fontWeight: "normal",
				x: 400,
				yPad: 0
			},
			remediation: {
				font: "Maven Pro, Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 24,
				fontWeight: "normal",
				wordWrapWidth: 680,
				lineSpacing: -3,
				x: 400,
				yPad: 0,
				firstMissText: "Try again to pick up the spare."
			},
			okButton: {
				texture: "main",
				downKey: "ok button0002.png",
				outKey: "ok button0001.png",
				overKey: "ok button0002.png",
				upKey: "ok button0001.png",
				x: 596,
				yPad: 10
			}
		}
	},

	lane: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "lane.png" }
		],
		wrongAnswerMaxPinsFirstBall: 4,
		wrongAnswerMaxPinsSecondBall: 2,
		pin: { 
			texture: "main", 
			key: "pin.png",
			anchor: { x: .5, y: .5 },
			scales: [ .83, .83, .83, .83, .89, .89, .89, .94, .94, 1 ],
			positions: [
				{ x: 270, y: 80 },
				{ x: 343, y: 80 },
				{ x: 415, y: 80 },
				{ x: 490, y: 80 },
				{ x: 307, y: 90 },
				{ x: 380, y: 90 },
				{ x: 453, y: 90 },
				{ x: 343, y: 100 },
				{ x: 415, y: 100 },
				{ x: 380, y: 110 }
			]
		},
		ball: {
			texture: "main",
			keys: [ "ball0006.png", "ball0005.png", "ball0004.png", "ball0003.png", "ball0002.png", "ball0001.png" ]
		},
		ballRollAudioKey: "dropandroll",
		pinsCorrectAudioKey: "bowling_pins02",
		pinsIncorrectAudioKey: "bowling_pins01",
		gutterAudioKey: "bowling_gutter_ball01",
		stateDuration: 3600,
		animations: [
			{
				id: "10-0",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 550, y: 690 },
						{ x: 625, y: 250 },
						{ x: 380, y: 110 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "random", "random", "random", "random", "random", "random", "random", "random", "random"]
				}
			},
			{
				id: "10-6",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 582, y: 690 },
						{ x: 650, y: 201 },
						{ x: 450, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["still", "still", "still", "random", "still", "random", "right", "still", "left", "still"]
				}
			},
			{
				id: "10-7",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 510, y: 690 },
						{ x: 650, y: 201 },
						{ x: 470, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["still", "still", "random", "random", "still", "still", "left", "still", "still", "still"]
				}
			},
			{
				id: "10-8",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 338, y: 690 },
						{ x: 406, y: 261 },
						{ x: 253, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "still", "still", "still", "straight", "still", "still", "still", "still", "still"]
				}
			},
			{
				id: "10-9",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 500, y: 690 },
						{ x: 645, y: 371 },
						{ x: 510, y: 117 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["still", "still", "still", "random", "still", "still", "still", "still", "still", "still"]
				}
			},
			{
				id: "10-10",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 500, y: 690 },
						{ x: 645, y: 371 },
						{ x: 545, y: 127 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: null,
					motionDuration: null,
					fadeDelay: null,
					rowDelayIncrement: null,
					endScale: null,
					type: ["still", "still", "still", "still", "still", "still", "still", "still", "still", "still"]
				}
			},
			{
				id: "9-0",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 400, y: 690 },
						{ x: 650, y: 250 },
						{ x: 380, y: 110 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "random", "random", "clear", "random", "random", "random", "random", "random", "random"]
				}
			},
			{
				id: "9-7",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 300, y: 690 },
						{ x: 423, y: 251 },
						{ x: 230, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "still", "still", "clear", "random", "still", "still", "still", "still", "still"]
				}
			},
			{
				id: "9-8",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 362, y: 690 },
						{ x: 423, y: 251 },
						{ x: 230, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "still", "still", "clear", "still", "still", "still", "still", "still", "still"]
				}
			},
			{
				id: "9-9",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 500, y: 690 },
						{ x: 645, y: 371 },
						{ x: 510, y: 117 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: null,
					motionDuration: null,
					fadeDelay: null,
					rowDelayIncrement: null,
					endScale: null,
					type: ["still", "still", "still", "clear", "still", "still", "still", "still", "still", "still"]
				}
			},
			{
				id: "8-0",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 500, y: 690 },
						{ x: 650, y: 250 },
						{ x: 380, y: 110 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["clear", "random", "random", "random", "clear", "random", "random", "random", "random", "random"]
				}
			},
			{
				id: "8-6",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 560, y: 690 },
						{ x: 671, y: 291 },
						{ x: 477, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["clear", "still", "still", "random", "clear", "still", "random", "still", "still", "still"]
				}
			},
			{
				id: "8-7",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 500, y: 690 },
						{ x: 715, y: 375 },
						{ x: 505, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["clear", "still", "still", "random", "clear", "still", "still", "still", "still", "still"]
				}
			},
			{
				id: "8-8",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 500, y: 690 },
						{ x: 500, y: 251 },
						{ x: 230, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: null,
					motionDuration: null,
					fadeDelay: null,
					rowDelayIncrement: null,
					endScale: null,
					type: ["clear", "still", "still", "still", "clear", "still", "still", "still", "still", "still"]
				}
			},
			{
				id: "7-0",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 400, y: 690 },
						{ x: 700, y: 250 },
						{ x: 350, y: 110 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "random", "clear", "clear", "random", "random", "clear", "random", "random", "random"]
				}
			},
			{
				id: "7-5",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 338, y: 690 },
						{ x: 406, y: 253 },
						{ x: 261, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "still", "clear", "clear", "straight", "still", "clear", "still", "still", "still"]
				}
			},
			{
				id: "7-6",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 362, y: 690 },
						{ x: 423, y: 251 },
						{ x: 230, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "still", "clear", "clear", "still", "still", "clear", "still", "still", "still"]
				}
			},
			{
				id: "7-7",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 600, y: 690 },
						{ x: 671, y: 291 },
						{ x: 471, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: null,
					motionDuration: null,
					fadeDelay: null,
					rowDelayIncrement: null,
					endScale: null,
					type: ["still", "still", "clear", "clear", "still", "still", "clear", "still", "still", "still"]
				}
			},
			{
				id: "6-0",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 600, y: 690 },
						{ x: 700, y: 291 },
						{ x: 350, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["random", "random", "random", "clear", "random", "clear", "clear", "random", "clear", "random"]
				}
			},
			{
				id: "6-4",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 380, y: 690 },
						{ x: 411, y: 291 },
						{ x: 405, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["still", "still", "random", "clear", "still", "clear", "clear", "still", "clear", "straight"]
				}
			},
			{
				id: "6-5",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 350, y: 690 },
						{ x: 500, y: 291 },
						{ x: 440, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: 2600,
					motionDuration: 200,
					fadeDelay: 50,
					rowDelayIncrement: 50,
					endScale: .8,
					type: ["still", "still", "random", "clear", "still", "clear", "clear", "still", "clear", "still"]
				}
			},
			{
				id: "6-6",
				ball: {
					delay: 1700,
					pathPoints: [
						{ x: 363, y: 690 },
						{ x: 531, y: 291 },
						{ x: 220, y: 111 }
					],
					duration: 1000,
					rotation: -25,
					endScale: .27
				},
				pins: {
					delay: null,
					motionDuration: null,
					fadeDelay: null,
					rowDelayIncrement: null,
					endScale: null,
					type: ["still", "still", "still", "clear", "still", "clear", "clear", "still", "clear", "still"]
				}
			}
		],
		pinAnimationType: [
			{
				id: "random",
				xRange: [ -30, 30 ],
				yRange: [ -10, 10 ],
				rotationRange: [ -5, 5 ]
			},
			{
				id: "straight",
				xRange: [ -5, 5 ],
				yRange: [ 0, 10 ],
				rotationRange: [ -1, 1 ]
			},
			{
				id: "left",
				xRange: [ -30, 0 ],
				yRange: [ -10, 10 ],
				rotationRange: [ -5, 5 ]
			},
			{
				id: "right",
				xRange: [ 0, 30 ],
				yRange: [ -10, 10 ],
				rotationRange: [ -5, 5 ]
			}
		],
	},

	gameOver: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "game-over-background.png" },
			{ x: 11, y: 120, texture: "main", key: "FrameScore.png" }
		],
		header: {
			font: "Monoton, Helvetica, sans",
			fill: "#8CEAEA",
			size: 64,
			x: 400,
			y: 15,
			text: "Game Over"
		},
		body: {
			font: "Maven Pro, Helvetica, sans",
			fill: "#8CEAEA",
			size: 26,
			x: 400,
			y: 270,
			wordWrapWidth: 700,
			recap: [
				{
					max: 300,
					text: "A perfect game! Great job! Think you can do it again? Click play again to try.",
					audio: "Recap Perfect"
				},
				{
					max: 299,
					text: "Nice Job! You really know your stuff! Think you can beat your score? Click play again to find out.",
					audio: "Recap High"
				},
				{
					max: 220,
					text: "Good game. A quick review of some of the lessons could help you get a better score.",
					audio: "Recap Medium"
				},
				{
					max: 120,
					text: "Keep practicing. You might want to review some of the lessons before trying again.",
					audio: "Recap Low"
				}
			]
		},
		initials: {
			font: "Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 36,
			fontWeight: "bold",
			x: 63,
			y: 190
		},
		ballScore: {
			font: "Arial, Helvetica, sans",
			fill: "#3333FF",
			size: 18,
			fontWeight: "bold",
			startX: 144,
			xInterval: 60,
			y: 169
		},
		frameScore: {
			font: "Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 28,
			fontWeight: "bold",
			startX: 144,
			xInterval: 60,
			y: 207
		},
		totalScore: {
			font: "Arial, Helvetica, sans",
			fill: "#ffffff",
			size: 32,
			fontWeight: "bold",
			x: 750,
			y: 207
		},
		totalScoreHeading: {
			font: "Arial, Helvetica, sans",
			fill: "#8CEAEA",
			size: 20,
			fontWeight: "bold",
			x: 750,
			y: 169,
			text: "Total"
		},
		playAgainButton: {
			texture: "main",
			downKey: "play again button0002.png",
			outKey: "play again button0001.png",
			overKey: "play again button0002.png",
			upKey: "play again button0001.png",
			x: 400,
			y: 450
		}
	},

	questions: [
		{
			question: "What does the zero stand for in 3-2-1-0?",
			options: [
				"Zero hours of screen time",
				"Zero sweetened drinks",
				"Zero snacks between meals",
				"Zero minutes of physical activity"
			],
			correctIndex: 1,
			remediation: "The zero in 3-2-1-0 stands for drinking zero sweetened drinks.",
			questionVO: [ "audio/Question 1.m4a", "audio/Question 1.ogg" ],
			remediationVO: [ "audio/Question 1 remediation.m4a", "audio/Question 1 remediation.ogg" ]
		},
		{
			question: "Which of these is the United States Department of Agriculture's website that can help us make healthy food choices?",
			options: [
				"choosemyfood.gov",
				"healthyfoods.com",
				"choosemyplate.gov",
				"choosehealthy.org"
			],
			correctIndex: 2,
			remediation: "choosemyplate.gov is the United States Department of Agriculture's website that can help us make healthy food choices.",
			questionVO: [ "audio/Question 2.m4a", "audio/Question 2.ogg" ],
			remediationVO: [ "audio/Question 2 remediation.m4a", "audio/Question 2 remediation.ogg" ]
		},
		{
			question: "What are 'go foods'?",
			options: [
				"Foods that are ok to eat at any snack or meal",
				"Foods that are ok to eat once in a while but not every day",
				"Foods that should be limited and only eaten as a special treat",
				"Foods that go bad quickly"
			],
			correctIndex: 0,
			remediation: "'Go foods' are foods that are ok to eat at any snack or meal.",
			questionVO: [ "audio/Question 3.m4a", "audio/Question 3.ogg" ],
			remediationVO: [ "audio/Question 3 remediation.m4a", "audio/Question 3 remediation.ogg" ]
		},
		{
			question: "What are 'slow foods'?",
			options: [
				"Foods that are ok to eat at any snack or meal",
				"Foods that are ok to eat once in a while but not every day",
				"Foods that should be limited and only eaten as a special treat",
				"Foods that are slow to cook"
			],
			correctIndex: 1,
			remediation: "'Slow foods' are foods that are ok to eat once in a while but not every day.",
			questionVO: [ "audio/Question 4.m4a", "audio/Question 4.ogg" ],
			remediationVO: [ "audio/Question 4 remediation.m4a", "audio/Question 4 remediation.ogg" ]
		},
		{
			question: "What are 'whoa foods'?",
			options: [
				"Foods that are ok to eat at any snack or meal",
				"Foods that are ok to eat once in a while but not every day",
				"Foods that should be limited and only eaten as a special treat",
				"Foods that are slow to cook"
			],
			correctIndex: 2,
			remediation: "'Whoa foods' are foods that should be limited.",
			questionVO: [ "audio/Question 5.m4a", "audio/Question 5.ogg" ],
			remediationVO: [ "audio/Question 5 remediation.m4a", "audio/Question 5 remediation.ogg" ]
		},
		{
			question: "Which of these is an example of a 'whoa food'?",
			options: [
				"Potatoes",
				"Celery",
				"Frozen green beans",
				"French fries"
			],
			correctIndex: 3,
			remediation: "French fries are an example of a 'whoa food'.",
			questionVO: [ "audio/Question 6.m4a", "audio/Question 6.ogg" ],
			remediationVO: [ "audio/Question 6 remediation.m4a", "audio/Question 6 remediation.ogg" ]
		},
		{
			question: "Which of these is an example of a 'slow food'?",
			options: [
				"Whole wheat bread",
				"Pancakes",
				"Sweetened breakfast cereal",
				"Cinnamon rolls"
			],
			correctIndex: 1,
			remediation: "Pancakes are an example of a 'slow food'.",
			questionVO: [ "audio/Question 7.m4a", "audio/Question 7.ogg" ],
			remediationVO: [ "audio/Question 7 remediation.m4a", "audio/Question 7 remediation.ogg" ]
		},
		{
			question: "Which of the following is an example of a 'go food'?",
			options: [
				"Skim milk",
				"2% milk",
				"Whole milk",
				"Ice cream"
			],
			correctIndex: 0,
			remediation: "Skim milk is an example of a 'go food'.",
			questionVO: [ "audio/Question 8.m4a", "audio/Question 8.ogg" ],
			remediationVO: [ "audio/Question 8 remediation.m4a", "audio/Question 8 remediation.ogg" ]
		},
		{
			question: "Which type of exercise is really good for the heart?",
			options: [
				"Aerobic activity",
				"Strength training",
				"Plyometric training",
				"Flexibility training"
			],
			correctIndex: 0,
			remediation: "Aerobic activity is really good for the heart.",
			questionVO: [ "audio/Question 9.m4a", "audio/Question 9.ogg" ],
			remediationVO: [ "audio/Question 9 remediation.m4a", "audio/Question 9 remediation.ogg" ]
		},
		{
			question: "Which of these is an example of aerobic activity?",
			options: [
				"Swimming",
				"Lifting weights",
				"Stretching",
				"Yoga"
			],
			correctIndex: 0,
			remediation: "Swimming is an example of an aerobic activity.",
			questionVO: [ "audio/Question 10.m4a", "audio/Question 10.ogg" ],
			remediationVO: [ "audio/Question 10 remediation.m4a", "audio/Question 10 remediation.ogg" ]
		},
		{
			question: "Which of these is an example of strength training?",
			options: [
				"Walking",
				"Push-ups",
				"Martial arts",
				"Swimming"
			],
			correctIndex: 1,
			remediation: "Push-ups are an example of strength training.",
			questionVO: [ "audio/Question 11.m4a", "audio/Question 11.ogg" ],
			remediationVO: [ "audio/Question 11 remediation.m4a", "audio/Question 11 remediation.ogg" ]
		},
		{
			question: "Which of these is an example of flexibility training?",
			options: [
				"Running",
				"Pull-ups",
				"Biking",
				"Yoga"
			],
			correctIndex: 3,
			remediation: "Yoga is an example of flexibility training.",
			questionVO: [ "audio/Question 12.m4a", "audio/Question 12.ogg" ],
			remediationVO: [ "audio/Question 12 remediation.m4a", "audio/Question 12 remediation.ogg" ]
		},
		{
			question: "How much physical activity should you aim to get each day?",
			options: [
				"15 minutes",
				"30 minutes",
				"45 minutes",
				"1 hour"
			],
			correctIndex: 3,
			remediation: "You should aim to get one hour of physical activity each day.",
			questionVO: [ "audio/Question 13.m4a", "audio/Question 13.ogg" ],
			remediationVO: [ "audio/Question 13 remediation.m4a", "audio/Question 13 remediation.ogg" ]
		},
		{
			question: "Which of these is a benefit of physical activity?",
			options: [
				"Sleep better",
				"Learn better",
				"Stronger muscles and bones",
				"All of the above"
			],
			correctIndex: 3,
			remediation: "All of these are benefits of physical activity.",
			questionVO: [ "audio/Question 14.m4a", "audio/Question 14.ogg" ],
			remediationVO: [ "audio/Question 14 remediation.m4a", "audio/Question 14 remediation.ogg" ]
		},
		{
			question: "6th graders need about how many hours of sleep each night?",
			options: [
				"7 hours",
				"8 hours",
				"9 hours",
				"10 hours"
			],
			correctIndex: 3,
			remediation: "The average 6th grader needs about 10 hours of sleep each night.",
			questionVO: [ "audio/Question 15.m4a", "audio/Question 15.ogg" ],
			remediationVO: [ "audio/Question 15 remediation.m4a", "audio/Question 15 remediation.ogg" ]
		},
		{
			question: "Which of the following is a healthy sleep habit?",
			options: [
				"Sleep in a few extra hours on the weekends.",
				"Sleep with your phone under your pillow.",
				"Go to bed and get up around the same time every day, including weekends.",
				"Stay up later on the weekends because you don't have school."
			],
			correctIndex: 2,
			remediation: "Going to bed and getting up around the same time every day, including weekends, is a healthy sleep habit.",
			questionVO: [ "audio/Question 16.m4a", "audio/Question 16.ogg" ],
			remediationVO: [ "audio/Question 16 remediation.m4a", "audio/Question 16 remediation.ogg" ]
		},
		{
			question: "Which of the following will help you sleep?",
			options: [
				"Keep your room warm.",
				"Keep your room cool.",
				"Watch TV before going to sleep.",
				"Keep your lights on."
			],
			correctIndex: 1,
			remediation: "Keeping your room cool will help you sleep better.",
			questionVO: [ "audio/Question 17.m4a", "audio/Question 17.ogg" ],
			remediationVO: [ "audio/Question 17 remediation.m4a", "audio/Question 17 remediation.ogg" ]
		},
		{
			question: "All electronics should be turned off at least how many minutes before bedtime?",
			options: [
				"10 minutes",
				"15 minutes",
				"20 minutes",
				"30 minutes"
			],
			correctIndex: 3,
			remediation: "All electronics should be turned off at least 30 minutes before bedtime.",
			questionVO: [ "audio/Question 18.m4a", "audio/Question 18.ogg" ],
			remediationVO: [ "audio/Question 18 remediation.m4a", "audio/Question 18 remediation.ogg" ]
		},
		{
			question: "What is the hormone called that controls your sleep/wake cycle?",
			options: [
				"Adrenaline",
				"Melatonin",
				"Dopamine",
				"Cortisol"
			],
			correctIndex: 1,
			remediation: "Melatonin is the hormone that controls your sleep/wake cycle.",
			questionVO: [ "audio/Question 19.m4a", "audio/Question 19.ogg" ],
			remediationVO: [ "audio/Question 19 remediation.m4a", "audio/Question 19 remediation.ogg" ]
		},
		{
			question: "For the best sleep, where should electronics be kept?",
			options: [
				"In another room",
				"Across the room",
				"On your night stand",
				"Under your pillow"
			],
			correctIndex: 0,
			remediation: "For the best sleep, all electronics should be kept outside the bedroom, in another room.",
			questionVO: [ "audio/Question 20.m4a", "audio/Question 20.ogg" ],
			remediationVO: [ "audio/Question 20 remediation.m4a", "audio/Question 20 remediation.ogg" ]
		},
		{
			question: "Which of the following statements about stress is true?",
			options: [
				"Stress is a negative thing.",
				"There's nothing you can do about stress.",
				"Stress is a response to pressure or a threat.",
				"Stress causes your heart to beat slower."
			],
			correctIndex: 2,
			remediation: "Stress is a response to pressure or a threat.",
			questionVO: [ "audio/Question 21.m4a", "audio/Question 21.ogg" ],
			remediationVO: [ "audio/Question 21 remediation.m4a", "audio/Question 21 remediation.ogg" ]
		},
		{
			question: "Which of these could cause long-term stress?",
			options: [
				"A math test",
				"Moving to a new school",
				"A cold",
				"A gymnastics meet"
			],
			correctIndex: 1,
			remediation: "Moving to a new school could cause long-term stress.",
			questionVO: [ "audio/Question 22.m4a", "audio/Question 22.ogg" ],
			remediationVO: [ "audio/Question 22 remediation.m4a", "audio/Question 22 remediation.ogg" ]
		},
		{
			question: "What is the opposite of the body's stress response?",
			options: [
				"The body's relaxation response",
				"The body's hunger response",
				"Sweating",
				"Increased heart rate"
			],
			correctIndex: 0,
			remediation: "The body's relaxation response is the opposite of the stress response.",
			questionVO: [ "audio/Question 23.m4a", "audio/Question 23.ogg" ],
			remediationVO: [ "audio/Question 23 remediation.m4a", "audio/Question 23 remediation.ogg" ]
		},
		{
			question: "What is the last step of the decision-making process?",
			options: [
				"List the positives and negatives of each option.",
				"Evaluate the results.",
				"Make your decision.",
				"Define the situation."
			],
			correctIndex: 1,
			remediation: "The last step of the decision-making process is to evaluate the results of your decision.",
			questionVO: [ "audio/Question 24.m4a", "audio/Question 24.ogg" ],
			remediationVO: [ "audio/Question 24 remediation.m4a", "audio/Question 24 remediation.ogg" ]
		},
		{
			question: "What is the first step of the decision-making process?",
			options: [
				"Look at your options.",
				"Make your decision.",
				"Evaluate the results.",
				"Define the situation."
			],
			correctIndex: 3,
			remediation: "The first step of the decision-making process is to define the situation.",
			questionVO: [ "audio/Question 25.m4a", "audio/Question 25.ogg" ],
			remediationVO: [ "audio/Question 25 remediation.m4a", "audio/Question 25 remediation.ogg" ]
		},
		{
			question: "When setting a SMART goal, it should be:",
			options: [
				"Smart, measurable, attainable, right, and treasured",
				"Simple, magical, acknowledged, realistic, and trendy",
				"Simple, measurable, approachable, realistic, and true",
				"Specific, measurable, attainable, relevant, and timely"
			],
			correctIndex: 3,
			remediation: "When setting a SMART goal, it should be specific, measurable, attainable, relevant, and timely.",
			questionVO: [ "audio/Question 26.m4a", "audio/Question 26.ogg" ],
			remediationVO: [ "audio/Question 26 remediation.m4a", "audio/Question 26 remediation.ogg" ]
		},
		{
			question: "Which of the following is an example of a SMART goal.",
			options: [
				"I will be physically active for at least 30 minutes every day in March.",
				"I will get more sleep.",
				"I will eat lots of fruits and vegetables.",
				"I will drink fewer sugary drinks."
			],
			correctIndex: 0,
			remediation: "'I will be physically active for at least 30 minutes every day in March.' is an example of a SMART goal.",
			questionVO: [ "audio/Question 27.m4a", "audio/Question 27.ogg" ],
			remediationVO: [ "audio/Question 27 remediation.m4a", "audio/Question 27 remediation.ogg" ]
		},
		{
			question: "Which three things can help you meet your goal?",
			options: [
				"Write it down, make it easy, and don't tell anyone.",
				"Write it down, come up with a plan, and track your progress.",
				"Keep it a secret, come up with a plan, and eat healthy.",
				"Delay it until you're less busy, keep it a secret, and track your progress."
			],
			correctIndex: 1,
			remediation: "Three things that can help you meet your goal is to write it down, come up with a plan, and track your progress.",
			questionVO: [ "audio/Question 28.m4a", "audio/Question 28.ogg" ],
			remediationVO: [ "audio/Question 28 remediation.m4a", "audio/Question 28 remediation.ogg" ]
		}
	],

	sound: {
		key: "sound",
		urls: [ "audio/strikeItFit.ogg", "audio/strikeItFit.m4a" ],
		data: {
			spritemap: {
				"bowling_amb_B_30": {
			      "start": 0,
			      "end": 30.040816326530614,
			      "loop": true
			    },
			    "bowling_gutter_ball01": {
			      "start": 31,
			      "end": 31.99546485260771,
			      "loop": false
			    },
			    "bowling_gutter_ball02": {
			      "start": 32,
			      "end": 32.55102040816327,
			      "loop": false
			    },
			    "bowling_pins01": {
			      "start": 33,
			      "end": 34.021133786848075,
			      "loop": false
			    },
			    "bowling_pins02": {
			      "start": 35,
			      "end": 36.31065759637188,
			      "loop": false
			    },
			    "dropandroll": {
			      "start": 37,
			      "end": 39.63111111111111,
			      "loop": false
			    },
			    "splash_mixdown": {
			      "start": 40,
			      "end": 42.06417233560091,
			      "loop": false
			    },
			    "Correct 1 - Jack": {
			      "start": 43,
			      "end": 44.37501133786848,
			      "loop": false
			    },
			    "Correct 2 - Jack": {
			      "start": 45,
			      "end": 46.5,
			      "loop": false
			    },
			    "Correct 3 - Jack": {
			      "start": 47,
			      "end": 48.62498866213152,
			      "loop": false
			    },
			    "Correct 4 - Jack": {
			      "start": 49,
			      "end": 50.75,
			      "loop": false
			    },
			    "Correct 5 - Jack": {
			      "start": 51,
			      "end": 53.12501133786848,
			      "loop": false
			    },
			    "Incorrect 1 - Jack": {
			      "start": 54,
			      "end": 55.593764172335604,
			      "loop": false
			    },
			    "Incorrect 2 - Jack": {
			      "start": 56,
			      "end": 57.5,
			      "loop": false
			    },
			    "Incorrect 3 - Jack": {
			      "start": 58,
			      "end": 59.843764172335604,
			      "loop": false
			    },
			    "Incorrect 4 - Jack": {
			      "start": 60,
			      "end": 61.68750566893424,
			      "loop": false
			    },
			    "Instructions": {
			      "start": 62,
			      "end": 80,
			      "loop": false
			    },
			    "Recap High": {
			      "start": 80,
			      "end": 86.5,
			      "loop": false
			    },
			    "Recap Low": {
			      "start": 87,
			      "end": 92.25,
			      "loop": false
			    },
			    "Recap Medium": {
			      "start": 93,
			      "end": 97.75,
			      "loop": false
			    },
			    "Recap Perfect": {
			      "start": 98,
			      "end": 103.96875283446713,
			      "loop": false
			    },
			    "Try Again": {
			      "start": 104,
			      "end": 106.42607709750567,
			      "loop": false
			    }
			}
		}
	}

}