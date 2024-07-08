MillionaireSettings = {

	scormEnabled: MillionaireScormEnabled,

	autoScale: true,

	backgroundColor: "#50616d",

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
			fill: "#ffffff",
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
			fill: "#ffffff",
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

	instructions: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "stage.png" },
			{ x: 15, y: 30, texture: "main", key: "instructions-box-bg.png" },
			{ x: 573, y: 185, texture: "main", key: "male host.png" },
			{ x: 545, y: 341, texture: "main", key: "podium 2.png" },
			{ x: 47, y: 37, texture: "main", key: "M2M logo.png" }
		],

		audio: { key: "millionaire-intro_mixdown", volume: "1" },

		heading: {
			text: "Welcome to Make it to a Million!",
			font: "Barlow, Helvetica, sans-serif",
			fill: "#333333",
			size: 22,
			weight: 700,
			align: "left",
			lineSpacing: -4,
			x: 40,
			y: 210,
			anchor: { x: 0, y: 0 }
		},

		instructionBullets: {
			text: [ "Answer eight questions in a row to earn 1,000,000 points.", "Use the 50/50 option to eliminate two incorrect choices.", "Use the Poll option to ask the audience what they think the answer is.", "Use the Text a Friend option to ask a friend what they think the answer is." ],
			font: "Barlow, Helvetica, sans-serif",
			fill: "#333333",
			size: 20,
			weight: 400,
			align: "left",
			lineSpacing: -4,
			wordWrapWidth: 375,
			x: 55,
			y: 250,
			anchor: { x: 0, y: 0 },
			intervalGap: 10
		},

		beginButton: {
			x: 145,
			y: 495,
			texture: "main",
			upKey: "begin button0001.png",
			overKey: "begin button0002.png",
			downKey: "begin button0003.png",
			outKey: "begin button0001.png",
			anchor: { x: 0, y: 0 }
		},

		talkBubble: {
			x: 624,
			y: 117,
			texture: "main",
			key: "talkBubble.png",
			anchor: { x: 0.5, y: 0.5 }
		},

		talking: {
			audioKey: "",
			textStyle: {
				text: "",
				font: "Open Sans, Helvetica, sans-serif",
				fill: "#333333",
				size: 14,
				weight: 600,
				align: "left",
				lineSpacing: -6,
				wordWrapWidth: 290,
				x: 624,
				y: 107,
				anchor: { x: 0.5, y: 0.5 }
			},
			textCues: [
				{
					text: "Welcome to Make it to a Million!",
					time: 400
				},
				{
					text: "The goal of this game is to earn one million points by correctly answering eight questions in a row.",
					time: 7500
				},
				{
					text: "You can ask for help if you need it. Use the fifty fifty option to eliminate two of the incorrect choices.",
					time: 14500
				},
				{
					text: "Use the poll option to ask the audience what they think the answer is ...",
					time: 21900
				},
				{
					text: "or use the text a friend option to text a friend and ask them what they think the answer is. You can only use each of these options once per game.",
					time: 27200
				},
				{
					text: "Good luck! Click the begin button to see if you can make it to a million!",
					time: 38600
				}
			]
		}

	},

	question: {
		backgroundElements: [
			{ x: 0, y: 0, texture: "main", key: "stage.png" },
			{ x: 573, y: 185, texture: "main", key: "male host.png" },
			{ x: 545, y: 341, texture: "main", key: "podium 2.png" },
			{ x: 20, y: 0, texture: "main", key: "tower-back.png" }
		],

		towerHighlights: [
			{
				x: 32,
				y: 509,
				texture: "main",
				key: "scorelight_mc0001.png",
				activeKey: "scorelight_mc0002.png",
				usedKey: "scorelight_mc0003.png",
			},
			{
				x: 32,
				y: 439,
				texture: "main",
				key: "scorelight_mc0001.png",
				activeKey: "scorelight_mc0002.png",
				usedKey: "scorelight_mc0003.png",
			},
			{
				x: 32,
				y: 369,
				texture: "main",
				key: "scorelight_mc0001.png",
				activeKey: "scorelight_mc0002.png",
				usedKey: "scorelight_mc0003.png",
			},
			{
				x: 32,
				y: 299,
				texture: "main",
				key: "scorelight_mc0001.png",
				activeKey: "scorelight_mc0002.png",
				usedKey: "scorelight_mc0003.png",
			},
			{
				x: 32,
				y: 229,
				texture: "main",
				key: "scorelight_mc0001.png",
				activeKey: "scorelight_mc0002.png",
				usedKey: "scorelight_mc0003.png",
			},
			{
				x: 32,
				y: 159,
				texture: "main",
				key: "scorelight_mc0001.png",
				activeKey: "scorelight_mc0002.png",
				usedKey: "scorelight_mc0003.png",
			},
			{
				x: 32,
				y: 89,
				texture: "main",
				key: "scorelight_mc0001.png",
				activeKey: "scorelight_mc0002.png",
				usedKey: "scorelight_mc0003.png",
			},
			{
				x: 32,
				y: 19,
				texture: "main",
				key: "scorelight_mc0001.png",
				activeKey: "scorelight_mc0002.png",
				usedKey: "scorelight_mc0003.png",
			}
		],

		towerForeground: {
			x: -80,
			y: -12,
			texture: "main",
			key: "tower-fore.png"
		},

		preloader: {
			x: 400,
			y: 300,
			texture: "main",
			key: "load-rotator.png",
			anchor: { x: 0.5, y: 0.5 },
			speed: 7
		},

		talkBubble: {
			x: 624,
			y: 117,
			texture: "main",
			key: "talkBubble.png",
			anchor: { x: 0.5, y: 0.5 }
		},

		questionIntro: {
			text: ["Your first question is for 100 points.", "The next question is for five hundred points.", "Answer this question correctly for one thousand points.", "The next question is for five thousand points.", "Answer this question correctly for fifty thousand points.", "The next question is for one hundred thousand points.", "Answer this question correctly for five hundred thousand points.", "This is it … the final question. Answer it correctly and win one million points."],
			font: "Open Sans, Helvetica, sans-serif",
			fill: "#333333",
			size: 14,
			weight: 600,
			align: "left",
			lineSpacing: -6,
			wordWrapWidth: 290,
			x: 624,
			y: 107,
			anchor: { x: 0.5, y: 0.5 },
			voKey: [""],
			delayAfter: 600,
			vo: [ "Intro100", "Intro500", "Intro1000", "Intro5000", "Intro50000", "Intro100000", "Intro500000", "Intro1000000"]
		},

		questionBox: {
			x: 205,
			y: 21,
			texture: "main",
			key: "question-box.png"
		},

		questionValues: [ "100", "500", "1,000", "5,000", "50,000", "100,000", "500,000", "1,000,000" ],

		questionTitleStyle: {
			text: "",
			font: "Luckiest Guy, Helvetica, sans-serif",
			fill: "#ffffff",
			size: 29,
			weight: 400,
			align: "center",
			lineSpacing: 0,
			x: 476,
			y: 37,
			anchor: { x: 0.5, y: 0 }
		},

		questionStyle: {
			text: "",
			font: "Barlow, Helvetica, sans-serif",
			fill: "#333333",
			size: 24,
			weight: 700,
			align: "left",
			lineSpacing: -7,
			wordWrapWidth: 475,
			x: 240,
			y: 100,
			anchor: { x: 0, y: 0 }
		},

		optionSpacing: 60,

		optionButtons: [
			{
				x: 255,
				y: -100,
				texture: "main",
				upKey: "a button0001.png",
				overKey: "a button0002.png",
				downKey: "a button0003.png",
				outKey: "a button0001.png",
				disabledKey: "a button0004.png",
				selectedKey: "a button0005.png",
				anchor: { x: 0, y: 0.5 },
				hitArea: {
					x: 0,
					y: -27,
					width: 470,
					height: 54,
					type: "rectangle"
				}
			},
			{
				x: 255,
				y: -100,
				texture: "main",
				upKey: "b button0001.png",
				overKey: "b button0002.png",
				downKey: "b button0003.png",
				outKey: "b button0001.png",
				disabledKey: "b button0004.png",
				selectedKey: "b button0005.png",
				anchor: { x: 0, y: 0.5 },
				hitArea: {
					x: 0,
					y: -27,
					width: 470,
					height: 54,
					type: "rectangle"
				}
			},
			{
				x: 255,
				y: -100,
				texture: "main",
				upKey: "c button0001.png",
				overKey: "c button0002.png",
				downKey: "c button0003.png",
				outKey: "c button0001.png",
				disabledKey: "c button0004.png",
				selectedKey: "c button0005.png",
				anchor: { x: 0, y: 0.5 },
				hitArea: {
					x: 0,
					y: -27,
					width: 470,
					height: 54,
					type: "rectangle"
				}
			},
			{
				x: 255,
				y: -100,
				texture: "main",
				upKey: "d button0001.png",
				overKey: "d button0002.png",
				downKey: "d button0003.png",
				outKey: "d button0001.png",
				disabledKey: "d button0004.png",
				selectedKey: "d button0005.png",
				anchor: { x: 0, y: 0.5 },
				hitArea: {
					x: 0,
					y: -27,
					width: 470,
					height: 54,
					type: "rectangle"
				}
			}
		],

		optionStyle: {
			text: "",
			font: "Barlow, Helvetica, sans-serif",
			fill: "#333333",
			size: 20,
			weight: 400,
			align: "left",
			lineSpacing: -7,
			wordWrapWidth: 410,
			x: 315,
			y: -100,
			anchor: { x: 0, y: 0.5 }
		},

		helpBox: {
			x: 205,
			y: 490,
			texture: "main",
			key: "help-box.png",
		},

		helpBoxTitle: {
			text: "Help",
			font: "Luckiest Guy, Helvetica, sans-serif",
			fill: "#ffffff",
			size: 29,
			weight: 400,
			align: "left",
			lineSpacing: 0,
			x: 230,
			y: 510,
			anchor: { x: 0, y: 0 }
		},

		helpButtons: [
			{
				x: 342,
				y: 503,
				texture: "main",
				upKey: "5050 button0001.png",
				overKey: "5050 button0002.png",
				downKey: "5050 button0003.png",
				outKey: "5050 button0001.png",
				disabledKey: "5050 button0004.png",
				anchor: { x: 0, y: 0 },
				type: "50/50"
			},
			{
				x: 472,
				y: 503,
				texture: "main",
				upKey: "poll button0001.png",
				overKey: "poll button0002.png",
				downKey: "poll button0003.png",
				outKey: "poll button0001.png",
				disabledKey: "poll button0004.png",
				anchor: { x: 0, y: 0 },
				type: "poll"
			},
			{
				x: 602,
				y: 503,
				texture: "main",
				upKey: "askafriend button0001.png",
				overKey: "askafriend button0002.png",
				downKey: "askafriend button0003.png",
				outKey: "askafriend button0001.png",
				disabledKey: "askafriend button0004.png",
				anchor: { x: 0, y: 0 },
				type: "text"
			}
		],

		poll: {
			background: {
				x: 8,
				y: 40,
				texture: "main",
				key: "help-use-box.png"
			},
			boxTitle: {
				text: "Poll",
				font: "Luckiest Guy, Helvetica, sans-serif",
				fill: "#ffffff",
				size: 24,
				weight: 400,
				align: "center",
				lineSpacing: 0,
				x: 107,
				y: 52,
				anchor: { x: 0.5, y: 0 }
			},
			grid: {
				x: 21,
				y: 101,
				texture: "main",
				key: "poll-grid.png"
			},
			bars: [
				{
					x: 34,
					y: 253,
					width: 25,
					height: -200,
					fill: 0x007cc2,
					alpha: 1
				},
				{
					x: 72,
					y: 253,
					width: 25,
					height: -200,
					fill: 0x007cc2,
					alpha: 1
				},
				{
					x: 110,
					y: 253,
					width: 25,
					height: -200,
					fill: 0x007cc2,
					alpha: 1
				},
				{
					x: 148,
					y: 253,
					width: 25,
					height: -200,
					fill: 0x007cc2,
					alpha: 1
				}
			]
		},

		textAFriend: {
			background: {
				x: 8,
				y: 305,
				texture: "main",
				key: "help-use-box.png"
			},
			boxTitle: {
				text: "Text a Friend",
				font: "Luckiest Guy, Helvetica, sans-serif",
				fill: "#ffffff",
				size: 24,
				weight: 400,
				align: "center",
				lineSpacing: 0,
				x: 107,
				y: 317,
				anchor: { x: 0.5, y: 0 }
			},
			askBubble: {
				bubble: {
					x: 17,
					y: 400,
					texture: "main",
					key: "chat bubble.png",
					anchor: { x: 0, y: 0.5 }
				},
				text: {
					text: "-",
					font: "Open sans, Helvetica, sans-serif",
					fill: "#ffffff",
					size: 14,
					weight: 400,
					align: "left",
					lineSpacing: -8,
					wordWrapWidth: 118,
					x: 42,
					y: 403,
					anchor: { x: 0, y: 0.5 }
				},
				delay: 750,
				sfx: { key: "dooweep02", volume: 1 }
			},
			typingBubble: {
				x: 120,
				y: 455,
				texture: "main",
				key: "chat bubble typing.png",
				anchor: { x: 0, y: 0 },
				delay: 4000
			},
			responseBubble: {
				bubble: {
					x: 38,
					y: 487,
					texture: "main",
					key: "chat-bubble-reverse.png",
					anchor: { x: 0, y: 0.5 }
				},
				text: {
					text: "",
					font: "Open sans, Helvetica, sans-serif",
					fill: "#333333",
					size: 14,
					weight: 400,
					align: "left",
					lineSpacing: -8,
					wordWrapWidth: 122,
					x: 52,
					y: 490,
					anchor: { x: 0, y: 0.5 }
				},
				delay: 7500,
				sfx: { key: "dooweep03", volume: 1 }
			}
		},

		remediation: {
			background: {
				x: 205,
				y: 460,
				texture: "main",
				key: "remediation-box.png",
				anchor: { x: 0, y: 0 }
			},
			text: {
				text: "",
				font: "Open sans, Helvetica, sans-serif",
				fill: "#333333",
				size: 18,
				weight: 700,
				align: "left",
				lineSpacing: -5,
				wordWrapWidth: 505,
				x: 230,
				y: 480,
				anchor: { x: 0, y: 0 }
			},
			continueButton: {
				x: 615,
				y: 535,
				texture: "main",
				upKey: "continue button0001.png",
				overKey: "continue button0002.png",
				downKey: "continue button0003.png",
				outKey: "continue button0001.png",
				anchor: { x: 0, y: 0 }
			},
			correctSFX: { key: "cheering2-short", volume: 1 },
			incorrectSFX: { key: "crowd_01_reaction_ah_01", volume: 1 }
		}

	},

	gameOver: {
		winMessage: {
			text: "Congratulations! You answered all of the questions correctly and made it to a million! Great job!",
			voKey: ""
		},
		loseMessage: {
			text: "Sorry, you didn't make it a million points. Click play again to give it another try.",
			voKey: ""
		},
		winGraphic: {
			x: 140,
			y: 130,
			texture: "main",
			key: "win graphic.png"
		},
		playAgainButton: {
			x: 340,
			y: 485,
			texture: "main",
			upKey: "playagain button0001.png",
			overKey: "playagain button0002.png",
			downKey: "playagain button0003.png",
			outKey: "playagain button0001.png",
			anchor: { x: 0, y: 0 }
		},
		confetti: {
			x: 400,
			y: -10,
			particles: 400,
			width: 800,
			minXSpeed: -10,
			maxXSpeed: 10,
			minYSpeed: 66,
			maxYSpeed: 100,
			minRotation: -30,
			maxRotation: 30,
			gravity: 4,
			texture: "main",
			frames: ["confetti-yellow.png", "confetti-blue.png", "confetti-red.png", "confetti-sky.png"],
			lifespan: 6300,
			frequency: 10,
			shimmerFrequency: 20,
			shimmerMultiplier: 2,
			shimmerFrame: "confetti-white.png",
			shimmerFrameRate: 4
		},
		loseSFX: { key: "game_over.-shortwav", volume: .5 },
		loseVO: "GameOver",
		winVO: "game-win_mixdown"
	},

	audio: {
		key: "audio",
		urls: [ "audio/millionaire.ogg", "audio/millionaire.m4a" ],
		data: {
			spritemap: {
				"applause": {
			      "start": 0,
			      "end": 3.1956462585034013,
			      "loop": false
			    },
			    "cheering2-short": {
			      "start": 4,
			      "end": 9,
			      "loop": false
			    },
			    "crowd_01_reaction_ah_01": {
			      "start": 9,
			      "end": 11.161972789115646,
			      "loop": false
			    },
			    "dooweep02": {
			      "start": 12,
			      "end": 12.374172335600907,
			      "loop": false
			    },
			    "dooweep03": {
			      "start": 13,
			      "end": 13.391972789115647,
			      "loop": false
			    },
			    "game_over.-shortwav": {
			      "start": 14,
			      "end": 17.571678004535148,
			      "loop": false
			    },
			    "game-win_mixdown": {
			      "start": 18,
			      "end": 54.33269841269841,
			      "loop": false
			    },
			    "GameOver": {
			      "start": 55,
			      "end": 60.912018140589566,
			      "loop": false
			    },
			    "Intro100": {
			      "start": 61,
			      "end": 64.18931972789116,
			      "loop": false
			    },
			    "Intro1000": {
			      "start": 65,
			      "end": 68.85068027210885,
			      "loop": false
			    },
			    "Intro100000": {
			      "start": 69,
			      "end": 73.24535147392291,
			      "loop": false
			    },
			    "Intro1000000": {
			      "start": 74,
			      "end": 80.38931972789116,
			      "loop": false
			    },
			    "Intro500": {
			      "start": 81,
			      "end": 84.13621315192744,
			      "loop": false
			    },
			    "Intro5000": {
			      "start": 85,
			      "end": 88.4880045351474,
			      "loop": false
			    },
			    "Intro50000": {
			      "start": 89,
			      "end": 92.96800453514739,
			      "loop": false
			    },
			    "Intro500000": {
			      "start": 93,
			      "end": 97.56,
			      "loop": false
			    },
			    "millionaire-intro_mixdown": {
			      "start": 98,
			      "end": 158.23018140589568,
			      "loop": false
			    }
			}
		}
	},

	questions: [
		{
			questionText: "What does the “3” in 3-2-1-0 stand for?",
			options: [
				"Limit screen time to three hours or less each day.",
				"Eat three meals per day.",
				"Get at least three hours of physical activity each day.",
				"Drink no more than three sweetened drinks per day."
			],
			correctRemediationText: "That's right! Eating three meals per day is important. Skipping meals is not good for your body.",
			incorrectRemediationText: "Not quite. Three stands for eating three meals per day.",
			correctOption: 1,
			questionVOKey: ["audio/Question1.ogg", "audio/Question1.m4a"],
			correctRemediationVOKey: ["audio/Question1-correct.ogg", "audio/Question1-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question1-incorrect.ogg", "audio/Question1-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .15, .60, .20, .05 ],
			textAFriendText: {
				call: "Do you know the answer to this question?",
				response: "I'm pretty sure the answer is B"
			}
		},
		{
			questionText: "What does the “2” in 3-2-1-0 stand for?",
			options: [
				"Limit screen time to two hours or less each day.",
				"Eat two meals per day.",
				"Get at least two hours of physical activity each day.",
				"Drink no more than two sweetened drinks per day."
			],
			correctRemediationText: "You're right! Two stands for two hours or less of screen time each day.",
			incorrectRemediationText: "Sorry, two stands for two hours or less of screen time each day.",
			correctOption: 0,
			questionVOKey: ["audio/Question2.ogg", "audio/Question2.m4a"],
			correctRemediationVOKey: ["audio/Question2-correct.ogg", "audio/Question2-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question2-incorrect.ogg", "audio/Question2-incorrect.m4a"],
			fiftyfiftyRemovals: [ 1, 3 ],
			pollLevels: [ .75, .10, .05, .10 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I'm pretty sure the answer is A"
			}
		},
		{
			questionText: "What does the “1” in 3-2-1-0 stand for?",
			options: [
				"Get at least one hour of screen time each day.",
				"Eat one large meal per day.",
				"Get at least one hour of physical activity each day.",
				"Drink no more than one sweetened drink per day."
			],
			correctRemediationText: "That's right. One stands for one hour of physical activity each day.",
			incorrectRemediationText: "Nope. One stands for getting at least one hour of physical activity each day.",
			correctOption: 2,
			questionVOKey: ["audio/Question3.ogg", "audio/Question3.m4a"],
			correctRemediationVOKey: ["audio/Question3-correct.ogg", "audio/Question3-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question3-incorrect.ogg", "audio/Question3-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .05, .05, .50, .40 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I'm pretty sure the answer is C"
			}
		},
		{
			questionText: "What does the “0” in 3-2-1-0 stand for?",
			options: [
				"Get zero hours of screen time each day.",
				"Eat zero snacks per day.",
				"Start out exercising zero days per week.",
				"Drink zero sweetened drinks per day."
			],
			correctRemediationText: "That's right! Zero stands for drinking zero sweetened drinks per day. It's best to avoid drinks like soda, juice, lemonade, chocolate milk and sports drinks.",
			incorrectRemediationText: "Nope. Zero stands for drinking zero sweetened drinks per day. It's best to avoid drinks like soda, juice, lemonade, chocolate milk and sports drinks.",
			correctOption: 3,
			questionVOKey: ["audio/Question4.ogg", "audio/Question4.m4a"],
			correctRemediationVOKey: ["audio/Question4-correct.ogg", "audio/Question4-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question4-incorrect.ogg", "audio/Question4-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 2 ],
			pollLevels: [ .05, .3, .15, .5 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "D. Sweetened drinks are really bad for you."
			}
		},
		{
			questionText: "Which of the following is a valid source of nutrition information?",
			options: [
				"MyPlate",
				"Your friends",
				"TV commercials",
				"Front of food packages"
			],
			correctRemediationText: "You got it! MyPlate is a valid source of nutrition information.",
			incorrectRemediationText: "Sorry, but MyPlate is the only valid source of nutrition information listed here.",
			correctOption: 0,
			questionVOKey: ["audio/Question5.ogg", "audio/Question5.m4a"],
			correctRemediationVOKey: ["audio/Question5-correct.ogg", "audio/Question5-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question5-incorrect.ogg", "audio/Question5-incorrect.m4a"],
			fiftyfiftyRemovals: [ 1, 2 ],
			pollLevels: [ .4, .15, .4, .05 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I'm pretty sure it's MyPlate. Go with A."
			}
		},
		{
			questionText: "Which of these is not a question you should ask yourself to determine if a source of information is valid?",
			options: [
				"Who wrote it?",
				"Is the information up to date?",
				"What is the intent?",
				"Do I like what they're saying?"
			],
			correctRemediationText: "Correct. Liking what they're saying doesn't make it a valid source.",
			incorrectRemediationText: "Not quite. To determine if a source is valid, you need to know who wrote it, if the information is up to date, and what the intent of the information is.",
			correctOption: 3,
			questionVOKey: ["audio/Question6.ogg", "audio/Question6.m4a"],
			correctRemediationVOKey: ["audio/Question6-correct.ogg", "audio/Question6-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question6-incorrect.ogg", "audio/Question6-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 1 ],
			pollLevels: [ .1, .2, .25, .45 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "It doesn't matter if you like what they're saying. D."
			}
		},
		{
			questionText: "What is the United States Department of Agriculture's website called?",
			options: [
				"choosemyfood.com",
				"choosemyplate.gov",
				"healthieryou.org",
				"healthyfoods.com"
			],
			correctRemediationText: "That's right! Their website is choosemyplate.gov.",
			incorrectRemediationText: "Not quite. You can find their website at choosemyplate.gov.",
			correctOption: 1,
			questionVOKey: ["audio/Question7.ogg", "audio/Question7.m4a"],
			correctRemediationVOKey: ["audio/Question7-correct.ogg", "audio/Question7-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question7-incorrect.ogg", "audio/Question7-incorrect.m4a"],
			fiftyfiftyRemovals: [ 2, 3 ],
			pollLevels: [ .4, .5, .08, .02 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "It's B. I heard about this website in health class."
			}
		},
		{
			questionText: "How many food groups are in MyPlate?",
			options: [
				"Four",
				"Five",
				"Six",
				"Seven"
			],
			correctRemediationText: "That's right! There are five food groups: vegetables, fruits, grains, protein and dairy.",
			incorrectRemediationText: "Not quite. There are actually five food groups: vegetables, fruits, grains, protein and dairy.",
			correctOption: 1,
			questionVOKey: ["audio/Question8.ogg", "audio/Question8.m4a"],
			correctRemediationVOKey: ["audio/Question8-correct.ogg", "audio/Question8-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question8-incorrect.ogg", "audio/Question8-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .3, .4, .25, .05 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I think there are 5. I would go with B."
			}
		},
		{
			questionText: "Changing the way a food looks or tastes is called:",
			options: [
				"Food enhancing",
				"Food cleansing",
				"Food processing",
				"Food healthifying"
			],
			correctRemediationText: "That's correct! Changing the way a food looks or tastes is called food processing.",
			incorrectRemediationText: "Nope. Changing the way a food looks or tastes is called food processing.",
			correctOption: 2,
			questionVOKey: ["audio/Question9.ogg", "audio/Question9.m4a"],
			correctRemediationVOKey: ["audio/Question9-correct.ogg", "audio/Question9-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question9-incorrect.ogg", "audio/Question9-incorrect.m4a"],
			fiftyfiftyRemovals: [ 1, 3 ],
			pollLevels: [ .15, .05, .4, .4 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "This is called food processing. C"
			}
		},
		{
			questionText: "Highly processed foods tend to have more of what?",
			options: [
				"Protein, calcium and iron",
				"Weight, protein and fiber",
				"Vitamins, wheat and fiber",
				"Sugar, fat and salt"
			],
			correctRemediationText: "That's right! Foods that are highly processed often have more sugar, fat and salt.",
			incorrectRemediationText: "Sorry, but foods that are highly processed often have more sugar, fat and salt.",
			correctOption: 3,
			questionVOKey: ["audio/Question10.ogg", "audio/Question10.m4a"],
			correctRemediationVOKey: ["audio/Question10-correct.ogg", "audio/Question10-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question10-incorrect.ogg", "audio/Question10-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 2 ],
			pollLevels: [ .03, .07, .2, .7 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I think it's either C or D. Not sure which, though."
			}
		},
		{
			questionText: "Which of the following is true about whole grains?",
			options: [
				"They include all parts of the grain.",
				"They have less fiber, vitamins and minerals.",
				"An example of a whole grain is white rice.",
				"They consist of grains that have been significantly modified."
			],
			correctRemediationText: "That's correct. Whole grains include all parts of the grain.",
			incorrectRemediationText: "Nope. Whole grains include all parts of the grain.",
			correctOption: 0,
			questionVOKey: ["audio/Question11.ogg", "audio/Question11.m4a"],
			correctRemediationVOKey: ["audio/Question11-correct.ogg", "audio/Question11-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question11-incorrect.ogg", "audio/Question11-incorrect.m4a"],
			fiftyfiftyRemovals: [ 1, 2 ],
			pollLevels: [ .5, .2, .17, .13 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "If it's 'whole' it must include all parts. I'd say A."
			}
		},
		{
			questionText: "How does fiber help your body?",
			options: [
				"It helps fight infection.",
				"It builds strong bones.",
				"It helps keep the food moving through the body.",
				"It helps repair muscles."
			],
			correctRemediationText: "Correct! Fiber helps keep food moving through the body.",
			incorrectRemediationText: "That's incorrect. Fiber helps keep food moving through the body.",
			correctOption: 2,
			questionVOKey: ["audio/Question12.ogg", "audio/Question12.m4a"],
			correctRemediationVOKey: ["audio/Question12-correct.ogg", "audio/Question12-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question12-incorrect.ogg", "audio/Question12-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .05, .2, .65, .1 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I'm not sure, but I think it's C."
			}
		},
		{
			questionText: "Which of the following would be the least processed?",
			options: [
				"Tomato juice",
				"Tomato",
				"Canned tomatoes",
				"Tomato sauce"
			],
			correctRemediationText: "That's right. Whole foods, like tomatoes, are the least processed.",
			incorrectRemediationText: "That's incorrect. Whole foods, like tomatoes, are the least processed.",
			correctOption: 1,
			questionVOKey: ["audio/Question13.ogg", "audio/Question13.m4a"],
			correctRemediationVOKey: ["audio/Question13-correct.ogg", "audio/Question13-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question13-incorrect.ogg", "audio/Question13-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .1, .5, .15, .25 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "A tomato isn't processed at all. Go with B."
			}
		},
		{
			questionText: "Which of the following would be the least processed?",
			options: [
				"Raisins",
				"Pears packed in syrup",
				"Grapes",
				"Apple juice"
			],
			correctRemediationText: "You're right! Whole fruits, like grapes, are the least processed.",
			incorrectRemediationText: "Not quite. Whole fruits, like grapes, are the least processed.",
			correctOption: 2,
			questionVOKey: ["audio/Question14.ogg", "audio/Question14.m4a"],
			correctRemediationVOKey: ["audio/Question14-correct.ogg", "audio/Question14-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question14-incorrect.ogg", "audio/Question14-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .05, .1, .75, .1 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I think it's C"
			}
		},
		{
			questionText: "Which food group is a good source of calcium?",
			options: [
				"Fruits",
				"Vegetables",
				"Grains",
				"Dairy"
			],
			correctRemediationText: "That's right! Dairy products are excellent sources of calcium.",
			incorrectRemediationText: "That's incorrect. All food groups are important, but it's the dairy group that provides calcium.",
			correctOption: 3,
			questionVOKey: ["audio/Question15.ogg", "audio/Question15.m4a"],
			correctRemediationVOKey: ["audio/Question15-correct.ogg", "audio/Question15-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question15-incorrect.ogg", "audio/Question15-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 1 ],
			pollLevels: [ .13, .07, .1, .7 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "Milk has lots of calcium. It must be dairy."
			}
		},
		{
			questionText: "How much physical activity should someone your age get each day?",
			options: [
				"30 minutes",
				"45 minutes",
				"60 minutes",
				"120 minutes"
			],
			correctRemediationText: "That's right! It's recommended that someone your age gets 60 minutes of physical activity each day.",
			incorrectRemediationText: "Nope. It's recommended that someone your age gets 60 minutes of physical activity each day.",
			correctOption: 2,
			questionVOKey: ["audio/Question16.ogg", "audio/Question16.m4a"],
			correctRemediationVOKey: ["audio/Question16-correct.ogg", "audio/Question16-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question16-incorrect.ogg", "audio/Question16-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .03, .45, .5, .02 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I would go with C"
			}
		},
		{
			questionText: "Which type of physical activity gets your heart pumping blood faster and quickens your breathing?",
			options: [
				"Aerobic exercise",
				"Strength training",
				"Flexibility training",
				"Anaerobic exercise"
			],
			correctRemediationText: "Correct! Aerobic exercise gets your heart pumping blood faster and quickens your breathing.",
			incorrectRemediationText: "Sorry, but aerobic exercise is the type of physical activity that gets your heart pumping blood faster and quickens your breathing.",
			correctOption: 0,
			questionVOKey: ["audio/Question17.ogg", "audio/Question17.m4a"],
			correctRemediationVOKey: ["audio/Question17-correct.ogg", "audio/Question17-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question17-incorrect.ogg", "audio/Question17-incorrect.m4a"],
			fiftyfiftyRemovals: [ 1, 3 ],
			pollLevels: [ .66, .1, .04, .2 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "It's either A or D. I think it's A."
			}
		},
		{
			questionText: "Which type of physical activity helps build lean muscle and reduces fat?",
			options: [
				"Aerobic exercise",
				"Strength training",
				"Flexibility training",
				"Anaerobic exercise"
			],
			correctRemediationText: "You're right. Strength training helps build lean muscle and reduces fat.",
			incorrectRemediationText: "That's incorrect. While all types of physical activity are good for you, strength training is the type that will build lean muscle and reduce fat.",
			correctOption: 1,
			questionVOKey: ["audio/Question18.ogg", "audio/Question18.m4a"],
			correctRemediationVOKey: ["audio/Question18-correct.ogg", "audio/Question18-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question18-incorrect.ogg", "audio/Question18-incorrect.m4a"],
			fiftyfiftyRemovals: [ 2, 3 ],
			pollLevels: [ .2, .6, .12, .08 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "This sounds like strength training. Go with B."
			}
		},
		{
			questionText: "Which of these is an example of flexibility training?",
			options: [
				"Running",
				"Lifting weights",
				"Push-ups",
				"Yoga"
			],
			correctRemediationText: "Correct! Yoga is an example of flexibility training.",
			incorrectRemediationText: "That's incorrect. All these activities can be good for you, but yoga is an example of flexibility training.",
			correctOption: 3,
			questionVOKey: ["audio/Question19.ogg", "audio/Question19.m4a"],
			correctRemediationVOKey: ["audio/Question19-correct.ogg", "audio/Question19-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question19-incorrect.ogg", "audio/Question19-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 1 ],
			pollLevels: [ .26, .24, .2, .3 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I do yoga to keep me flexible. D"
			}
		},
		{
			questionText: "Which of the following can be a result of not getting regular physical activity?",
			options: [
				"Weight loss",
				"Poor sleep, mood and outlook",
				"Stronger bones",
				"Decreased risk of certain diseases"
			],
			correctRemediationText: "That's right! Not getting regular physical activity can result in poor sleep, mood and general outlook on life.",
			incorrectRemediationText: "Not quite. Poor sleep, mood and outlook can be a result of not getting regular physical activity, but the others are not.",
			correctOption: 1,
			questionVOKey: ["audio/Question20.ogg", "audio/Question20.m4a"],
			correctRemediationVOKey: ["audio/Question20-correct.ogg", "audio/Question20-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question20-incorrect.ogg", "audio/Question20-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .1, .5, .15, .25 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I would say B makes the most sense out of those"
			}
		},
		{
			questionText: "Which of the following is true about mental illness.",
			options: [
				"Someone with a mental illness cannot get better.",
				"Anyone can experience a mental illness.",
				"Only people in their 30s and 40s can experience a mental illness.",
				"You can catch a mental illness from someone just like you can catch a cold."
			],
			correctRemediationText: "That's right. Anyone can experience a mental illness, but that doesn't mean the person can't get help and feel better.",
			incorrectRemediationText: "That's incorrect. The only true statement here is that anyone can experience a mental illness.",
			correctOption: 1,
			questionVOKey: ["audio/Question21.ogg", "audio/Question21.m4a"],
			correctRemediationVOKey: ["audio/Question21-correct.ogg", "audio/Question21-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question21-incorrect.ogg", "audio/Question21-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .1, .7, .2, 0 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "The answer is B. Anyone can experience mental illness."
			}
		},
		{
			questionText: "What is it called when someone's worry or fear is excessive and interferes with their life?",
			options: [
				"Depression",
				"ADHD",
				"Anxiety disorder",
				"Hyperactivity disorder"
			],
			correctRemediationText: "That's right. Anxiety disorder is when someone's worry or fear is excessive and interferes with their sleep, behavior, or relationships.",
			incorrectRemediationText: "That's incorrect. When someone's worry or fear is excessive and interferes with their life it's called an anxiety disorder.",
			correctOption: 2,
			questionVOKey: ["audio/Question22.ogg", "audio/Question22.m4a"],
			correctRemediationVOKey: ["audio/Question22-correct.ogg", "audio/Question22-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question22-incorrect.ogg", "audio/Question22-incorrect.m4a"],
			fiftyfiftyRemovals: [ 1, 3 ],
			pollLevels: [ .2, .35, .4, .05 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "This sounds like an anxiety disorder. C"
			}
		},
		{
			questionText: "Which of the following is not true about depression?",
			options: [
				"Depression causes long-lasting feelings of sadness.",
				"Depression often causes a person to lose interest in activities they used to enjoy.",
				"Depression is not treatable.",
				"Depression can occur without a specific sad event."
			],
			correctRemediationText: "That's correct. Depression is treatable with the right help.",
			incorrectRemediationText: "That's incorrect. Depression is treatable with the right help.",
			correctOption: 2,
			questionVOKey: ["audio/Question23.ogg", "audio/Question23.m4a"],
			correctRemediationVOKey: ["audio/Question23-correct.ogg", "audio/Question23-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question23-incorrect.ogg", "audio/Question23-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .1, .07, .6, .23 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I would go with C"
			}
		},
		{
			questionText: "Which of the following is not true about ADHD?",
			options: [
				"ADHD makes it harder to stay focused.",
				"ADHD can cause a person to be more fidgety than others.",
				"ADHD makes it harder to manage impulses.",
				"ADHD makes is easier to pay attention."
			],
			correctRemediationText: "That's right! ADHD makes it harder to pay attention.",
			incorrectRemediationText: "Nope. ADHD makes it harder to stay focused, pay attention, and manage impulses. It can also cause a person to fidget more than others.",
			correctOption: 3,
			questionVOKey: ["audio/Question24.ogg", "audio/Question24.m4a"],
			correctRemediationVOKey: ["audio/Question24-correct.ogg", "audio/Question24-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question24-incorrect.ogg", "audio/Question24-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 1 ],
			pollLevels: [ .1, .25, .15, .5 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I think it's D"
			}
		},
		{
			questionText: "If you think a friend is struggling with a mental health concern, which of the following could help them?",
			options: [
				"Leave them alone.",
				"Use “you” statements.",
				"Check in with them regularly.",
				"Force them to tell you what's wrong."
			],
			correctRemediationText: "You're right. Check in with them regularly, and continue to include them in your plans, even if they don't always come.",
			incorrectRemediationText: "That's incorrect. You should check in with them regularly, and continue to include them in your plans, even if they don't always come.",
			correctOption: 2,
			questionVOKey: ["audio/Question25.ogg", "audio/Question25.m4a"],
			correctRemediationVOKey: ["audio/Question25-correct.ogg", "audio/Question25-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question25-incorrect.ogg", "audio/Question25-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .11, .17, .7, .02 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "You should check in with your friend regularly. C"
			}
		},
		{
			questionText: "How many hours of sleep does someone your age need?",
			options: [
				"5-6 hours",
				"6-7 hours",
				"8-10 hours",
				"11-13 hours"
			],
			correctRemediationText: "That's right! Someone your age needs between 8-10 hours of sleep each night.",
			incorrectRemediationText: "Not quite. Someone your age needs between 8-10 hours of sleep each night.",
			correctOption: 2,
			questionVOKey: ["audio/Question27.ogg", "audio/Question27.m4a"],
			correctRemediationVOKey: ["audio/Question27-correct.ogg", "audio/Question27-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question27-incorrect.ogg", "audio/Question27-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .1, .2, .4, .3 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "You need 8-10 hours every night. C"
			}
		},
		{
			questionText: "Which of the following is a healthy habit for your mind?",
			options: [
				"Focus only on school.",
				"Keep your phone with you while you sleep.",
				"Take time each day to relax and let your mind wander.",
				"Get involved in as many activities as possible."
			],
			correctRemediationText: "That's right! It's really important to take time each day to relax and let your mind wander.",
			incorrectRemediationText: "Sorry, but it's really important to take time each day to relax and let your mind wander.",
			correctOption: 2,
			questionVOKey: ["audio/Question28.ogg", "audio/Question28.m4a"],
			correctRemediationVOKey: ["audio/Question28-correct.ogg", "audio/Question28-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question28-incorrect.ogg", "audio/Question28-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 1 ],
			pollLevels: [ .05, .15, .6, .2 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "I would say C. It's good to let your mind wander."
			}
		},
		{
			questionText: "A SMART goal should be:",
			options: [
				"Smart, meaningful, attainable, reliable and true",
				"Smart, measurable, attainable, relevant and true",
				"Specific, measurable, attainable, relevant and timely",
				"Specific, meaningful, accurate, realistic and timely"
			],
			correctRemediationText: "You're right! A SMART goal is specific, measurable, attainable, relevant and timely.",
			incorrectRemediationText: "Not quite. A SMART goal is specific, measurable, attainable, relevant and timely.",
			correctOption: 2,
			questionVOKey: ["audio/Question29.ogg", "audio/Question29.m4a"],
			correctRemediationVOKey: ["audio/Question29-correct.ogg", "audio/Question29-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question29-incorrect.ogg", "audio/Question29-incorrect.m4a"],
			fiftyfiftyRemovals: [ 0, 3 ],
			pollLevels: [ .1, .3, .35, .25 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "This one is hard, but I think it's C."
			}
		},
		{
			questionText: "Which of the following would be a SMART goal?",
			options: [
				"I will get more physical activity.",
				"I will get more physical activity each day.",
				"I will be active for 60 minutes each day this week.",
				"I will get more physical activity next month."
			],
			correctRemediationText: "You're right. “I will be active for 60 minutes each day this week” is specific, measurable, attainable, relevant and timely.",
			incorrectRemediationText: "Not quite. “I will be active for 60 minutes each day this week” is the only one listed that is specific, measurable, attainable, relevant and timely.",
			correctOption: 2,
			questionVOKey: ["audio/Question30.ogg", "audio/Question30.m4a"],
			correctRemediationVOKey: ["audio/Question30-correct.ogg", "audio/Question30-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question30-incorrect.ogg", "audio/Question30-incorrect.m4a"],
			fiftyfiftyRemovals: [ 1, 3 ],
			pollLevels: [ .13, .2, .5, .17 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "A SMART goal needs to be specific. So it must be C."
			}
		},
		{
			questionText: "Which of the following will help you reach your goal?",
			options: [
				"Write it down.",
				"Don't tell anyone.",
				"Don't think about it.",
				"Only track your progress if you meet your goal."
			],
			correctRemediationText: "That's right. Writing down your goal can help you actually reach it.",
			incorrectRemediationText: "That's incorrect. Writing down your goal can help you reach it.",
			correctOption: 0,
			questionVOKey: ["audio/Question31.ogg", "audio/Question31.m4a"],
			correctRemediationVOKey: ["audio/Question31-correct.ogg", "audio/Question31-correct.m4a"],
			incorrectRemediationVOKey: ["audio/Question31-incorrect.ogg", "audio/Question31-incorrect.m4a"],
			fiftyfiftyRemovals: [ 1, 3 ],
			pollLevels: [ .7, .05, .05, .2 ],
			textAFriendText: {
				call: "Do you know the answer to this one?",
				response: "Writing my goals down helps me. Choose A."
			}
		}
	]

}