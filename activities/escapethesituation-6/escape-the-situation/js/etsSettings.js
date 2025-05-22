etsSettings = {

	scormEnabled: etsScormEnabled,

	autoScale: true,

	inspectorEnabled: false,

	textureKey: "spritesheet",

	loader: {

		rotator: {
			key: "rotator",
			file: "images/load-rotator.png",
			x: 400,
			y: 333,
			speed: 7
		},

		background: {
			key: "cloud-background",
			file: "images/cloud-background-01.png",
			x: 0,
			y: 0
		},

		label: {
			loadingText: "Loading",
			clickthroughText: "Tap here to continue.",
			font: "Arial, Helvetica, sans",
			fill: "#33BFE5",
			size: 22,
			padding: 10
		}

	},

	splash: {

		background: {
			key: "cloud-background",
			x: 0,
			y: 0
		},

		logo: {
			key: "splash-logo.png",
			x: 61,
			y: 90
		},

		beginButton: {
			x: 306,
			y: 437,
			overKey: "begin-down.png",
			outKey: "begin-up.png",
			downKey: "begin-down.png",
			upKey: "begin-up.png"
		},

		soundStingerKey: "newsstinger",

		beginSound: "generic_ui_10b"

	},

	map: {

		background: {
			key: "cloud-background",
			x: 0,
			y: 0
		},

		selectSound: "generic_ui_10b",

		levels: {

			button: {
				downKey: "situation-back-down.png",
				outKey: "situation-back-up.png",
				overKey: "situation-back-down.png",
				upKey: "situation-back-up.png"
			},
			stars: {
				emptyKey: "star-empty.png",
				fullKey: "star-full.png",
				positions: [
					{ x: 13, y: 12 },
					{ x: 13, y: 52 },
					{ x: 13, y: 92 }
				]
			},
			label: {
				font: "Luckiest Guy",
				fill: "#FFFFFF",
				downFill: "#414042",
				size: 22,
				x: 87,
				y: 142,
			},
			identifiers: [
				{
					label: "Situation 1",
					x: 27,
					y: 117,
					icon: {
						key: "glue-icon.png",
						x: 80,
						y: 11
					}
				},
				{
					label: "Situation 2",
					x: 217,
					y: 117,
					icon: {
						key: "paint-icon.png",
						x: 78,
						y: 14
					}
				},
				{
					label: "Situation 3",
					x: 407,
					y: 117,
					icon: {
						key: "gas-icon.png",
						x: 71,
						y: 30
					}
				},
				{
					label: "Situation 4",
					x: 597,
					y: 117,
					icon: {
						key: "marker-icon.png",
						x: 59,
						y: 12
					}
				},
				{
					label: "Situation 5",
					x: 27,
					y: 305,
					icon: {
						key: "white-out-icon.png",
						x: 80,
						y: 10
					}
				},
				{
					label: "Situation 6",
					x: 217,
					y: 305,
					icon: {
						key: "hair-spray-icon.png",
						x: 84,
						y: 17
					}
				},
				{
					label: "Situation 7",
					x: 407,
					y: 305,
					icon: {
						key: "spray-paint-icon.png",
						x: 87,
						y: 10
					}
				},
				{
					label: "Situation 8",
					x: 597,
					y: 305,
					icon: {
						key: "cleaner-icon.png",
						x: 77,
						y: 13
					}
				}
			]

		}

	},

	game: {
		defaults: {
			backgroundColor: "#2dc0e8",
			background: {
				key: "cloud-background",
				x: 0,
				y: 0
			},
			tiles: {
				key: "gameTiles",
				file: "images/tiles2.png"
			},
			player: {
				key: "player",
				atlasImage: "images/player.png",
				atlasData: "images/player.json",
				speed: 200,
				gravity: 1000,
				bodySize: {
					width: 40,
					height: 59,
					xOffset: 12,
					yOffset: 3
				},
				animations: [
					{
						key: "still",
						frames: ["player-death1-01.png"],
						frameRate: 12,
						loop: false
					},
					{
						key: "back",
						frames: ["player-back.png"],
						frameRate: 12,
						loop: false
					},
					{
						key: 'run-right',
						frames: ["player-run1-01.png", "player-run2-01.png", "player-run3-01.png", "player-run4-01.png", "player-run5-01.png", "player-run6-01.png", "player-run7-01.png", "player-run8-01.png"],
						frameRate: 12,
						loop: true
					},
					{
						key: 'run-left',
						frames: ["player-left-run1-01.png", "player-left-run2-01.png", "player-left-run3-01.png", "player-left-run4-01.png", "player-left-run5-01.png", "player-left-run6-01.png", "player-left-run7-01.png", "player-left-run8-01.png"],
						frameRate: 12,
						loop: true
					},
					{
						key: 'jump-right',
						frames: ["player-jump2-01.png", "player-jump3-01.png"],
						frameRate: 12,
						loop: false
					},
					{
						key: 'jump-left',
						frames: ["player-left-jump2-01.png", "player-left-jump3-01.png"],
						frameRate: 12,
						loop: false
					},
					{
						key: 'falling-right',
						frames: ["player-jump3-01.png"],
						frameRate: 12,
						loop: false
					},
					{
						key: 'falling-left',
						frames: ["player-left-jump3-01.png"],
						frameRate: 12,
						loop: false
					},
					{
						key: 'death-up',
						frames: ["player-death2-01.png"],
						frameRate: 12,
						loop: false
					},
					{
						key: 'death-down',
						frames: ["player-death3-01.png"],
						frameRate: 12,
						loop: false
					}
				]
			},
			situation: {
				dialogBox: {
					x: 25,
					y: 36,
					key: "large-dialog-box-01.png"
				},
				titleStyle: {
					font: "Luckiest Guy",
					fill: "#FFFFFF",
					size: 60,
					stroke: "#2dc0e8",
					strokeThickness: 6
				},
				descriptionStyle: {
					font: "Helvetica, Arial, sans",
					fill: "#FFFFFF",
					size: 24,
					wordWrapWidth: 600
				},
				continueButton:{
					downKey: "go-down.png",
					outKey: "go-up.png",
					overKey: "go-down.png",
					upKey: "go-up.png",
					x: 353,
					y: 470
				}
			},
			levelEnd: {
				dialogBox: {
					key: "small-dialog-box.png",
					x: 25,
					y: 25
				},
				descriptionStyle: {
					font: "Helvetica, Arial, sans",
					fill: "#FFFFFF",
					size: 20,
					wordWrapWidth: 700
				},
				optionStyle: {
					font: "Helvetica, Arial, sans",
					fill: "#FFFFFF",
					size: 20
				},
				optionButtons: [
					{
						downKey: "button-a-down.png",
						outKey: "button-a.png",
						overKey: "button-a-down.png",
						upKey: "button-a.png"
					},
					{
						downKey: "button-b-down.png",
						outKey: "button-b.png",
						overKey: "button-b-down.png",
						upKey: "button-b.png"
					},
					{
						downKey: "button-c-down.png",
						outKey: "button-c.png",
						overKey: "button-c-down.png",
						upKey: "button-c.png"
					}
				]
			},
			instructions: {
				messageStyle: {
					font: "Helvetica, Arial, sans",
					fill: "#FFFFFF",
					size: 22,
					wordWrapWidth: 700
				},
				continueButton:{
					downKey: "ok-down.png",
					outKey: "ok-up.png",
					overKey: "ok-down.png",
					upKey: "ok-up.png",
					x: 353,
					y: 195
				}
			},
			gameOver: {
				dialogBox: {
					key: "small-dialog-box.png",
					x: 25,
					y: 25
				},
				messageStyle: {
					font: "Luckiest Guy",
					fill: "#FFFFFF",
					size: 60,
					stroke: "#2dc0e8",
					strokeThickness: 6
				},
				message: {
					text: "Game over",
					padding: 50
				},
				backButton:{
					downKey: "menu-lg-down.png",
					outKey: "menu-lg-up.png",
					overKey: "menu-lg-down.png",
					upKey: "menu-lg-up.png",
					x: 154,
					y: 195
				},
				replayButton:{
					downKey: "replay-lg-down.png",
					outKey: "replay-lg-up.png",
					overKey: "replay-lg-down.png",
					upKey: "replay-lg-up.png",
					x: 415,
					y: 195
				}
			}
			
		},

		levels: [
			{
				// level 1
				tileMap: {
					key: "level1",
					file: "images/level1a.json",
					type: Phaser.Tilemap.TILED_JSON,
					tileSet: "tiles2",
					tileKey: "gameTiles"
				},
				objects: {
					coinGID: 1,
					checkpointGID: 22
				},
				playerStartPosition:{
					x: 100,
					y: 481
				},
				situation: {
					title: "Situation 1",
					titlePadding: 30,
					description: "A couple kids at school heard that you can get high from sniffing glue and want you to try it with them. \nWhat do you do?",
					descriptionPadding: 150,
					options: [
						"Say no",
						"Walk away",
						"Reverse the situation"
					],
					voKeyShort: "Sit1-short",
					voKeyLong: "Sit1.aiff"
				},
				instructions: [
					{
						dialogBox: {
							key: "small-dialog-box.png",
							x: 25,
							y: 25
						},
						message: {
							text: "Tap or click the screen to start running.",
							voKey: "EscI1.aiff",
							padding: 70
						},
						checkpointSpriteIndex: -1
					},
					{
						dialogBox: {
							key: "small-dialog-box.png",
							x: 25,
							y: 25
						},
						message: {
							text: "Make it to the doors at the end and choose how you will escape the pressure situation presented at the beginning of the level.",
							voKey: "EscI6.aiff",
							padding: 70
						},
						checkpointSpriteIndex: 0
					},
					{
						dialogBox: {
							key: "small-dialog-box.png",
							x: 25,
							y: 25
						},
						message: {
							text: "If you run into a wall you will turn around. Tap or click the screen to jump over them when you can.",
							voKey: "EscI2.aiff",
							padding: 70
						},
						checkpointSpriteIndex: 1
					},
					{
						dialogBox: {
							key: "small-dialog-box.png",
							x: 25,
							y: 25
						},
						message: {
							text: "Watch out for the chemical pits.",
							voKey: "EscI3.aiff",
							padding: 70
						},
						checkpointSpriteIndex: 2
					},
					{
						dialogBox: {
							key: "small-dialog-box.png",
							x: 25,
							y: 25
						},
						message: {
							text: "You will encounter inhalants in each level. If you hit an inhalant you must start the level over. Jump over them to avoid contact.",
							voKey: "EscI4.aiff",
							padding: 70
						},
						checkpointSpriteIndex: 3
					},
					{
						dialogBox: {
							key: "small-dialog-box.png",
							x: 25,
							y: 25
						},
						message: {
							text: "Gather as many coins as you can to earn stars.",
							voKey: "EscI5.aiff",
							padding: 70
						},
						checkpointSpriteIndex: 4
					}
				]
			},
			{
				// level 2
				tileMap: {
					key: "level2",
					file: "images/level2.json",
					type: Phaser.Tilemap.TILED_JSON,
					tileSet: "tiles2",
					tileKey: "gameTiles"
				},
				objects: {
					coinGID: 1,
					checkpointGID: 22
				},
				playerStartPosition:{
					x: 100,
					y: 481
				},
				situation: {
					title: "Situation 2",
					titlePadding: 30,
					description: "You're sleeping over at a friend's house and your friend is trying to convince you to inhale paint thinner to get high.\nWhat do you do?",
					descriptionPadding: 150,
					options: [
						"Give a personal reason",
						"Use your safe code with a trusted adult",
						"Come up with something else to do"
					],
					voKeyShort: "Sit2-short",
					voKeyLong: "Sit2.aiff"
				}
			},
			{
				// level 3
				tileMap: {
					key: "level3",
					file: "images/level3.json",
					type: Phaser.Tilemap.TILED_JSON,
					tileSet: "tiles2",
					tileKey: "gameTiles"
				},
				objects: {
					coinGID: 1,
					checkpointGID: 22
				},
				playerStartPosition:{
					x: 100,
					y: 1762
				},
				situation: {
					title: "Situation 3",
					titlePadding: 30,
					description: "You and your brother are cleaning out the garage, and he is pressuring you to inhale gasoline with him to get high.\nWhat do you do?",
					descriptionPadding: 150,
					options: [
						"Reverse the situation",
						"Say no",
						"Give a personal reason"
					],
					voKeyShort: "Sit3-short",
					voKeyLong: "Sit3.aiff"
				}
			},
			{
				// level 4
				tileMap: {
					key: "level4",
					file: "images/level4.json",
					type: Phaser.Tilemap.TILED_JSON,
					tileSet: "tiles2",
					tileKey: "gameTiles"
				},
				objects: {
					coinGID: 1,
					checkpointGID: 22
				},
				playerStartPosition:{
					x: 100,
					y: 1762
				},
				situation: {
					title: "Situation 4",
					titlePadding: 30,
					description: "You and two of your friends are working on a school project together, and they are pressuring you to sniff markers to get high.\nWhat do you do?",
					descriptionPadding: 150,
					options: [
						"Say no",
						"Make up an excuse",
						"Give a personal reason"
					],
					voKeyShort: "Sit4-short",
					voKeyLong: "Sit4.aiff"
				}
			},
			{
				// level 5
				tileMap: {
					key: "level5",
					file: "images/level5.json",
					type: Phaser.Tilemap.TILED_JSON,
					tileSet: "tiles2",
					tileKey: "gameTiles"
				},
				objects: {
					coinGID: 1,
					checkpointGID: 22
				},
				playerStartPosition:{
					x: 100,
					y: 1122
				},
				situation: {
					title: "Situation 5",
					titlePadding: 30,
					description: "You're hanging out at a friend's house after school, and your friend is pressuring you to sniff white-out to get high.\nWhat do you do?",
					descriptionPadding: 150,
					options: [
						"Use a safe code with a trusted adult",
						"Reverse the situation",
						"Come up with something else to do"
					],
					voKeyShort: "Sit5-short",
					voKeyLong: "Sit5.aiff"
				}
			},
			{
				// level 6
				tileMap: {
					key: "level6",
					file: "images/level6.json",
					type: Phaser.Tilemap.TILED_JSON,
					tileSet: "tiles2",
					tileKey: "gameTiles"
				},
				objects: {
					coinGID: 1,
					checkpointGID: 22
				},
				playerStartPosition:{
					x: 100,
					y: 6242
				},
				situation: {
					title: "Situation 6",
					titlePadding: 30,
					description: "Your sister is trying to convince you to inhale hair spray to get high.\nWhat do you do?",
					descriptionPadding: 150,
					options: [
						"Say no",
						"Walk away",
						"Reverse the situation"
					],
					voKeyShort: "Sit6-short",
					voKeyLong: "Sit6.aiff"
				}
			},
			{
				// level 7
				tileMap: {
					key: "level7",
					file: "images/level7.json",
					type: Phaser.Tilemap.TILED_JSON,
					tileSet: "tiles2",
					tileKey: "gameTiles"
				},
				objects: {
					coinGID: 1,
					checkpointGID: 22
				},
				playerStartPosition:{
					x: 7215,
					y: 1122
				},
				situation: {
					title: "Situation 7",
					titlePadding: 30,
					description: "You and a bunch of your classmates are working on the set for the upcoming school play. A couple of them are talking about how they got high the other night on spray paint. They're trying to convince you to try it with them. What do you do?",
					descriptionPadding: 150,
					options: [
						"Say no",
						"Give a personal reason",
						"Make up an excuse"
					],
					voKeyShort: "Sit7-short",
					voKeyLong: "Sit7.aiff"
				}
			},
			{
				// level 8
				tileMap: {
					key: "level8",
					file: "images/level8.json",
					type: Phaser.Tilemap.TILED_JSON,
					tileSet: "tiles2",
					tileKey: "gameTiles"
				},
				objects: {
					coinGID: 1,
					checkpointGID: 22
				},
				playerStartPosition:{
					x: 164,
					y: 481
				},
				situation: {
					title: "Situation 8",
					titlePadding: 30,
					description: "A couple of your friends are at your house after school, and they find your parents’ cleaning supplies. They begin pressuring you to use them to get high. What do you do?",
					descriptionPadding: 150,
					options: [
						"Come up with something else to do",
						"Say no",
						"Make up an excuse"
					],
					voKeyShort: "Sit8-short",
					voKeyLong: "Sit8.aiff"
				}
			}
		],

		audio: {
			music: "coolcatsonmars",
			situationAlert: "coolmallet_eflat",
			situationVoDelay: 1000,
			instructionAlert: "magicmallet_a",
			instructionVoDelay: 1000,
			jump: "boing01",
			die: "melodic_lose_04",
			buttonClick: "generic_ui_10b",
			coin: "coin_mixdown",
			door: "happyalert",
			wall: "boing05"
		}

	},

	voiceover: {
		key: "vo",
		urls: ["audio/ets_vo.ogg", "audio/ets_vo.m4a"],
		data: {
			spritemap: {
		      "EscI1.aiff": {
		        "start": 0,
		        "end": 2.4578458049886622,
		        "loop": false
		      },
		      "EscI2.aiff": {
		        "start": 4,
		        "end": 9.510385487528344,
		        "loop": false
		      },
		      "EscI3.aiff": {
		        "start": 11,
		        "end": 12.708616780045352,
		        "loop": false
		      },
		      "EscI4.aiff": {
		        "start": 14,
		        "end": 22.33548752834467,
		        "loop": false
		      },
		      "EscI5.aiff": {
		        "start": 24,
		        "end": 26.545396825396825,
		        "loop": false
		      },
		      "EscI6.aiff": {
		        "start": 28,
		        "end": 33.98820861678004,
		        "loop": false
		      },
		      "Sit1.aiff": {
		        "start": 35,
		        "end": 45.7875283446712,
		        "loop": false
		      },
		      "Sit2.aiff": {
		        "start": 47,
		        "end": 61.49795918367347,
		        "loop": false
		      },
		      "Sit3.aiff": {
		        "start": 63,
		        "end": 73.78999999999999,
		        "loop": false
		      },
		      "Sit4.aiff": {
		        "start": 75,
		        "end": 87.39342403628117,
		        "loop": false
		      },
		      "Sit5.aiff": {
		        "start": 89,
		        "end": 102.55038548752835,
		        "loop": false
		      },
		      "Sit6.aiff": {
		        "start": 104,
		        "end": 113.2509977324263,
		        "loop": false
		      },
		      "Sit7.aiff": {
		        "start": 115,
		        "end": 131.91489795918366,
		        "loop": false
		      },
		      "Sit8.aiff": {
		        "start": 133,
		        "end": 147.43868480725624,
		        "loop": false
		      },
		      /* Below sprites manually timed - situations w/o options */
		      "Sit1-short": {
		        "start": 35,
		        "end": 41.400,
		        "loop": false
		      },
		      "Sit2-short": {
		        "start": 47,
		        "end": 54.300,
		        "loop": false
		      },
		      "Sit3-short": {
		        "start": 63,
		        "end": 69.500,
		        "loop": false
		      },
		      "Sit4-short": {
		        "start": 75,
		        "end": 82.500,
		        "loop": false
		      },
		      "Sit5-short": {
		        "start": 89,
		        "end": 95.700,
		        "loop": false
		      },
		      "Sit6-short": {
		        "start": 104,
		        "end": 108.700,
		        "loop": false
		      },
		      "Sit7-short": {
		        "start": 115,
		        "end": 127.000,
		        "loop": false
		      },
		      "Sit8-short": {
		        "start": 133,
		        "end": 142.000,
		        "loop": false
		      }
			}
		}
	},

	soundEffects: {
		key: "sfx",
		urls: ["audio/ets_sfx.ogg", "audio/ets_sfx.m4a"],
		data: {
			spritemap: {
				"boing01": {
			        "start": 0,
			        "end": 1.2190476190476192,
			        "loop": false
			      },
			      "boing05": {
			        "start": 3,
			        "end": 3.679183673469388,
			        "loop": false
			      },
			      "coin_mixdown": {
			        "start": 5,
			        "end": 5.997573696145125,
			        "loop": false
			      },
			      "coolcatsonmars": {
			        "start": 7,
			        "end": 11.366258503401362,
			        "loop": true
			      },
			      "coolmallet_eflat": {
			        "start": 13,
			        "end": 14.20453514739229,
			        "loop": false
			      },
			      "generic_ui_10b": {
			        "start": 16,
			        "end": 16.257891156462584,
			        "loop": false
			      },
			      "happyalert": {
			        "start": 18,
			        "end": 19.95047619047619,
			        "loop": false
			      },
			      "magicmallet_a": {
			        "start": 21,
			        "end": 21.96628117913832,
			        "loop": false
			      },
			      "melodic_lose_04": {
			        "start": 23,
			        "end": 24.94721088435374,
			        "loop": false
			      },
			      "newsstinger": {
			        "start": 26,
			        "end": 29.123083900226757,
			        "loop": false
			      }
			}
		}
	}
	
}