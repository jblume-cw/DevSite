adSettings = {

	scormEnabled: adScormEnabled,

	autoScale: true,

	interfaceTexture: {
		key: "spritesheet",
		image: "images/spritesheet.png",
		data: "images/spritesheet.json"
	},

	itemTexture:{
		key: "items",
		image: "images/items.png",
		data: "images/items.json"
	},

	backgroundTexture:{
		key: "backgrounds",
		image: "images/backgrounds.png",
		data: "images/backgrounds.json"
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
			key: "smoke-background",
			file: "images/background.png",
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

		background: {
			key: "smoke-background",
			x: 0,
			y: 0
		},

		graphics: [
			{
				key: "logo.png",
				x: 198,
				y: 38
			},
			{
				key: "splash-textframe.png",
				x: 0,
				y: 200
			}
		],

		text: [
			{
				font: "Arial, Helvetica, sans",
				fill: "#414042",
				size: 20,
				x: 400,
				y: 225,
				wordWrapWidth: 700,
				message: "Advertising is one of the methods tobacco companies use to influence people to use their products. In this activity you'll do the opposite and create an ad that influences people not to use tobacco."
			},
			{
				font: "Arial, Helvetica, sans",
				fill: "#5F9B4A",
				size: 32,
				x: 400,
				y: 325,
				wordWrapWidth: 700,
				message: "BE CREATIVE!"
			},
			{
				font: "Arial, Helvetica, sans",
				fill: "#414042",
				size: 20,
				x: 400,
				y: 380,
				wordWrapWidth: 700,
				message: "Try to create something that will influence your friends.  When you're done, you can print and share your ad."
			}
		],

		beginButton: {
			x: 311,
			y: 504,
			overKey: "begin-down.png",
			outKey: "begin-up.png",
			downKey: "begin-down.png",
			upKey: "begin-up.png"
		}

	},

	creator: {

		background: {
			key: "smoke-background",
			x: 0,
			y: 0
		},

		graphics: [
			{
				key: "ad-border.png",
				x: 0,
				y: 79
			}
		],

		highlighter: {
			color: 0x00FFFF,
			alpha: 0.25
		},

		adWindowMask: {
			x: 3,
			y: 82,
			width: 794,
			height: 494
		},

		toolTip: {
			text: {
				font: "Arial, Helvetica, sans",
				fill: "#ffffff",
				size: 12,
				verticalOffset: 60
			},

			box: {
				verticalOffset: -16,
				horizontalPadding: 10,
				fill: 0xf4af1a,
				lineWidth: 1,
				lineColor: 0xf8f8f8,
				height: 28,
				radius: 13
			}
		},

		toolButtons: [
			{
				id: "add-text",
				group: "main",
				x: 140,
				y: 21,
				overKey: "text-down.png",
				outKey: "text-up.png",
				downKey: "text-down.png",
				upKey: "text-up.png",
				tipText: "Add text"
			},
			{
				id: "add-background",
				group: "main",
				x: 20,
				y: 21,
				overKey: "background-down.png",
				outKey: "background-up.png",
				downKey: "background-down.png",
				upKey: "background-up.png",
				tipText: "Change background",
			},
			{
				id: "add-person",
				group: "main",
				x: 180,
				y: 21,
				overKey: "people-down.png",
				outKey: "people-up.png",
				downKey: "people-down.png",
				upKey: "people-up.png",
				tipText: "Add person"
			},
			{
				id: "add-graphic",
				group: "main",
				x: 60,
				y: 21,
				overKey: "graphic-down.png",
				outKey: "graphic-up.png",
				downKey: "graphic-down.png",
				upKey: "graphic-up.png",
				tipText: "Add picture"
			},
			{
				id: "add-tobacco",
				group: "main",
				x: 100,
				y: 21,
				overKey: "tobacco-down.png",
				outKey: "tobacco-up.png",
				downKey: "tobacco-down.png",
				upKey: "tobacco-up.png",
				tipText: "Add tobacco product"
			},
			{
				id: "clear",
				group: "main",
				x: 220,
				y: 21,
				overKey: "clear-down.png",
				outKey: "clear-up.png",
				downKey: "clear-down.png",
				upKey: "clear-up.png",
				tipText: "Clear all"
			},
			{
				id: "print",
				group: "main",
				x: 260,
				y: 21,
				overKey: "print-down.png",
				outKey: "print-up.png",
				downKey: "print-down.png",
				upKey: "print-up.png",
				tipText: "Print ad"
			},
			{
				id: "font",
				group: "text",
				x: 340,
				y: 21,
				overKey: "font-down.png",
				outKey: "font-up.png",
				downKey: "font-down.png",
				upKey: "font-up.png",
				tipText: "Change text style"
			},
			{
				id: "color",
				group: "text",
				x: 380,
				y: 21,
				overKey: "color-down.png",
				outKey: "color-up.png",
				downKey: "color-down.png",
				upKey: "color-up.png",
				tipText: "Change text color"
			},
			{
				id: "delete",
				group: "edit",
				x: 420,
				y: 21,
				overKey: "delete-down.png",
				outKey: "delete-up.png",
				downKey: "delete-down.png",
				upKey: "delete-up.png",
				tipText: "Delete"
			},
			{
				id: "back",
				group: "edit",
				x: 460,
				y: 21,
				overKey: "back-down.png",
				outKey: "back-up.png",
				downKey: "back-down.png",
				upKey: "back-up.png",
				tipText: "Move backward"
			},
			{
				id: "fore",
				group: "edit",
				x: 500,
				y: 21,
				overKey: "fore-down.png",
				outKey: "fore-up.png",
				downKey: "fore-down.png",
				upKey: "fore-up.png",
				tipText: "Move forward"
			},
			{
				id: "flip-h",
				group: "edit",
				x: 540,
				y: 21,
				overKey: "flipH-down.png",
				outKey: "flipH-up.png",
				downKey: "flipH-down.png",
				upKey: "flipH-up.png",
				tipText: "Flip horizontal"
			},
			{
				id: "flip-v",
				group: "edit",
				x: 580,
				y: 21,
				overKey: "flipV-down.png",
				outKey: "flipV-up.png",
				downKey: "flipV-down.png",
				upKey: "flipV-up.png",
				tipText: "Flip vertical"
			},
			{
				id: "rotate-ccw",
				group: "edit",
				x: 620,
				y: 21,
				overKey: "rotateCCW-down.png",
				outKey: "rotateCCW-up.png",
				downKey: "rotateCCW-down.png",
				upKey: "rotateCCW-up.png",
				tipText: "Rotate counter-clockwise"
			},
			{
				id: "rotate-cw",
				group: "edit",
				x: 660,
				y: 21,
				overKey: "rotateCW-down.png",
				outKey: "rotateCW-up.png",
				downKey: "rotateCW-down.png",
				upKey: "rotateCW-up.png",
				tipText: "Rotate clockwise"
			},
			{
				id: "shrink",
				group: "edit",
				x: 700,
				y: 21,
				overKey: "shrink-down.png",
				outKey: "shrink-up.png",
				downKey: "shrink-down.png",
				upKey: "shrink-up.png",
				tipText: "Shrink"
			},
			{
				id: "expand",
				group: "edit",
				x: 740,
				y: 21,
				overKey: "expand-down.png",
				outKey: "expand-up.png",
				downKey: "expand-down.png",
				upKey: "expand-up.png",
				tipText: "Enlarge"
			}
		],

		dialog: {
			box: {
				x: 23,
				y: 92,
				key: "dialog-ds.png"
			},
			closeButton: {
				x: 727,
				y: 105,
				overKey: "close-down.png",
				outKey: "close-up.png",
				downKey: "close-down.png",
				upKey: "close-up.png"
			},
			directionText: {
				font: "Arial, Helvetica, sans",
				fill: "#eeeeee",
				size: 22,
				x: 50,
				y: 110
			},
			backgrounds: {
				direction: "Choose a background",
				options: [
					{
						button: {
							x: 43,
							y: 168,
							overKey: "back1-down.png",
							outKey: "back1.png",
							downKey: "back1-down.png",
							upKey: "back1.png"
						},
						target: {
							x: 3,
							y: 82,
							scaleX: 1,
							scaleY: 1,
							texture: "backgrounds",
							key: "background1.png"
						}
					},
					{
						button: {
							x: 225,
							y: 168,
							overKey: "back2-down.png",
							outKey: "back2.png",
							downKey: "back2-down.png",
							upKey: "back2.png"
						},
						target: {
							x: 3,
							y: 82,
							scaleX: 1,
							scaleY: 1,
							texture: "backgrounds",
							key: "background2.png"
						}
					},
					{
						button: {
							x: 407,
							y: 168,
							overKey: "back3-down.png",
							outKey: "back3.png",
							downKey: "back3-down.png",
							upKey: "back3.png"
						},
						target: {
							x: 3,
							y: 82,
							scaleX: 1,
							scaleY: 1,
							texture: "backgrounds",
							key: "background3.png"
						}
					},
					{
						button: {
							x: 589,
							y: 168,
							overKey: "back4-down.png",
							outKey: "back4.png",
							downKey: "back4-down.png",
							upKey: "back4.png"
						},
						target: {
							x: 3,
							y: 82,
							scaleX: 1,
							scaleY: 1,
							texture: "backgrounds",
							key: "background4.png"
						}
					},
					{
						button: {
							x: 43,
							y: 285,
							overKey: "back5-down.png",
							outKey: "back5.png",
							downKey: "back5-down.png",
							upKey: "back5.png"
						},
						target: {
							x: 3,
							y: 82,
							scaleX: 1,
							scaleY: 1,
							texture: "backgrounds",
							key: "background5.png"
						}
					},
					{
						button: {
							x: 225,
							y: 285,
							overKey: "back6-down.png",
							outKey: "back6.png",
							downKey: "back6-down.png",
							upKey: "back6.png"
						},
						target: {
							x: 3,
							y: 82,
							scaleX: 1,
							scaleY: 1,
							texture: "backgrounds",
							key: "background6.png"
						}
					},
					{
						button: {
							x: 407,
							y: 285,
							overKey: "back7-down.png",
							outKey: "back7.png",
							downKey: "back7-down.png",
							upKey: "back7.png"
						},
						target: {
							x: 3,
							y: 82,
							scaleX: 1,
							scaleY: 1,
							texture: "backgrounds",
							key: "background7.png"
						}
					},
					{
						button: {
							x: 589,
							y: 285,
							overKey: "back8-down.png",
							outKey: "back8.png",
							downKey: "back8-down.png",
							upKey: "back8.png"
						},
						target: {
							x: 3,
							y: 82,
							scaleX: 1,
							scaleY: 1,
							texture: "backgrounds",
							key: "background8.png"
						}
					}
				]
			},
			people: {
				direction: "Choose a person",
				options: [
					{
						button: {
							x: 36,
							y: 193,
							overKey: "man1-down.png",
							outKey: "man1-up.png",
							downKey: "man1-down.png",
							upKey: "man1-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "man1.png"
						}
					},
					{
						button: {
							x: 97,
							y: 192,
							overKey: "man2-down.png",
							outKey: "man2-up.png",
							downKey: "man2-down.png",
							upKey: "man2-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "man2.png"
						}
					},
					{
						button: {
							x: 154,
							y: 193,
							overKey: "woman1-down.png",
							outKey: "woman1-up.png",
							downKey: "woman1-down.png",
							upKey: "woman1-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "woman1.png"
						}
					},
					{
						button: {
							x: 221,
							y: 187,
							overKey: "cop-down.png",
							outKey: "cop-up.png",
							downKey: "cop-down.png",
							upKey: "cop-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "cop.png"
						}
					},
					{
						button: {
							x: 280,
							y: 198,
							overKey: "woman2-down.png",
							outKey: "woman2-up.png",
							downKey: "woman2-down.png",
							upKey: "woman2-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "woman2.png"
						}
					},
					{
						button: {
							x: 330,
							y: 202,
							overKey: "boy1-down.png",
							outKey: "boy1-up.png",
							downKey: "boy1-down.png",
							upKey: "boy1-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "boy1.png"
						}
					},
					{
						button: {
							x: 376,
							y: 205,
							overKey: "boy2-down.png",
							outKey: "boy2-up.png",
							downKey: "boy2-down.png",
							upKey: "boy2-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "boy2.png"
						}
					},
					{
						button: {
							x: 376,
							y: 205,
							overKey: "boy2-down.png",
							outKey: "boy2-up.png",
							downKey: "boy2-down.png",
							upKey: "boy2-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "boy2.png"
						}
					},
					{
						button: {
							x: 432,
							y: 209,
							overKey: "girl1-down.png",
							outKey: "girl1-up.png",
							downKey: "girl1-down.png",
							upKey: "girl1-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "girl1.png"
						}
					},
					{
						button: {
							x: 483,
							y: 211,
							overKey: "boy3-down.png",
							outKey: "boy3-up.png",
							downKey: "boy3-down.png",
							upKey: "boy3-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "boy3.png"
						}
					},
					{
						button: {
							x: 534,
							y: 211,
							overKey: "girl2-down.png",
							outKey: "girl2-up.png",
							downKey: "girl2-down.png",
							upKey: "girl2-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "girl2.png"
						}
					},
					{
						button: {
							x: 591,
							y: 206,
							overKey: "boy4-down.png",
							outKey: "boy4-up.png",
							downKey: "boy4-down.png",
							upKey: "boy4-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "boy4.png"
						}
					},
					{
						button: {
							x: 647,
							y: 209,
							overKey: "boy5-down.png",
							outKey: "boy5-up.png",
							downKey: "boy5-down.png",
							upKey: "boy5-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "boy5.png"
						}
					},
					{
						button: {
							x: 697,
							y: 214,
							overKey: "girl3-down.png",
							outKey: "girl3-up.png",
							downKey: "girl3-down.png",
							upKey: "girl3-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "girl3.png"
						}
					}
				]
			},
			graphics: {
				direction: "Choose a picture",
				options: [
					{
						button: {
							x: 40,
							y: 159,
							overKey: "lungs-down.png",
							outKey: "lungs-up.png",
							downKey: "lungs-down.png",
							upKey: "lungs-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "lungs.png"
						}
					},
					{
						button: {
							x: 175,
							y: 178,
							overKey: "brain-down.png",
							outKey: "brain-up.png",
							downKey: "brain-down.png",
							upKey: "brain-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "brain.png"
						}
					},
					{
						button: {
							x: 316,
							y: 159,
							overKey: "eighteen-down.png",
							outKey: "eighteen-up.png",
							downKey: "eighteen-down.png",
							upKey: "eighteen-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "eighteen.png"
						}
					},
					{
						button: {
							x: 450,
							y: 169,
							overKey: "teeth-down.png",
							outKey: "teeth-up.png",
							downKey: "teeth-down.png",
							upKey: "teeth-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "teeth.png"
						}
					},
					{
						button: {
							x: 639,
							y: 159,
							overKey: "basketball-down.png",
							outKey: "basketball-up.png",
							downKey: "basketball-down.png",
							upKey: "basketball-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "ball.png"
						}
					},
					{
						button: {
							x: 57,
							y: 293,
							overKey: "hospital-down.png",
							outKey: "hospital-up.png",
							downKey: "hospital-down.png",
							upKey: "hospital-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "hospital.png"
						}
					},
					{
						button: {
							x: 203,
							y: 293,
							overKey: "money-down.png",
							outKey: "money-up.png",
							downKey: "money-down.png",
							upKey: "money-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "money.png"
						}
					},
					{
						button: {
							x: 376,
							y: 268,
							overKey: "skull-down.png",
							outKey: "skull-up.png",
							downKey: "skull-down.png",
							upKey: "skull-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "skull.png"
						}
					},
					{
						button: {
							x: 535,
							y: 271,
							overKey: "heart-down.png",
							outKey: "heart-up.png",
							downKey: "heart-down.png",
							upKey: "heart-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "heart.png"
						}
					},
					{
						button: {
							x: 661,
							y: 293,
							overKey: "soccerball-down.png",
							outKey: "soccerball-up.png",
							downKey: "soccerball-down.png",
							upKey: "soccerball-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "soccerball.png"
						}
					}
				]
			},
			tobacco: {
				direction: "Choose a tobacco product",
				options: [
					{
						button: {
							x: 43,
							y: 168,
							overKey: "cigarillos-down.png",
							outKey: "cigarillos-up.png",
							downKey: "cigarillos-down.png",
							upKey: "cigarillos-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "cigarillos.png"
						}
					},
					{
						button: {
							x: 223,
							y: 166,
							overKey: "packofcigs-down.png",
							outKey: "packofcigs-up.png",
							downKey: "packofcigs-down.png",
							upKey: "packofcigs-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "packofcigs.png"
						}
					},
					{
						button: {
							x: 418,
							y: 187,
							overKey: "chew-down.png",
							outKey: "chew-up.png",
							downKey: "chew-down.png",
							upKey: "chew-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "chew.png"
						}
					},
					{
						button: {
							x: 615,
							y: 159,
							overKey: "snus-down.png",
							outKey: "snus-up.png",
							downKey: "snus-down.png",
							upKey: "snus-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "snus.png"
						}
					},
					{
						button: {
							x: 172,
							y: 357,
							overKey: "cig-down.png",
							outKey: "cig-up.png",
							downKey: "cig-down.png",
							upKey: "cig-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "cig.png"
						}
					},
					{
						button: {
							x: 437,
							y: 349,
							overKey: "cigar-down.png",
							outKey: "cigar-up.png",
							downKey: "cigar-down.png",
							upKey: "cigar-up.png"
						},
						target: {
							x: 400,
							y: 330,
							scaleX: 1,
							scaleY: 1,
							texture: "items",
							key: "cigar.png"
						}
					}
				]
			},
			textStyles: {
				direction: "Choose a text style",
				options: [
					{
						button: {
							name: "Sample",
							size: 45,
							x: 50,
							y: 160
						},
						style: {
							font: "Arial, Helvetica, sans",
							fill: "#222222",
							size: 75,
							weight: "bold"
						}
					},
					{
						button: {
							name: "Sample",
							size: 45,
							x: 50,
							y: 240
						},
						style: {
							font: "Special Elite",
							fill: "#222222",
							size: 75,
							weight: "normal"
						}
					},
					{
						button: {
							name: "Sample",
							size: 45,
							x: 50,
							y: 320
						},
						style: {
							font: "Black Ops One",
							fill: "#222222",
							size: 75,
							weight: "normal"
						}
					},
					{
						button: {
							name: "Sample",
							size: 45,
							x: 300,
							y: 160
						},
						style: {
							font: "Bungee Shade",
							fill: "#222222",
							size: 75,
							weight: "normal"
						}
					},
					{
						button: {
							name: "Sample",
							size: 45,
							x: 300,
							y: 240
						},
						style: {
							font: "Alfa Slab One",
							fill: "#222222",
							size: 75,
							weight: "normal"
						}
					},
					{
						button: {
							name: "Sample",
							size: 45,
							x: 300,
							y: 320
						},
						style: {
							font: "Caveat Brush",
							fill: "#222222",
							size: 75,
							weight: "normal"
						}
					},
					{
						button: {
							name: "Sample",
							size: 45,
							x: 550,
							y: 160
						},
						style: {
							font: "Bangers",
							fill: "#222222",
							size: 75,
							weight: "normal"
						}
					},
					{
						button: {
							name: "Sample",
							size: 45,
							x: 550,
							y: 240
						},
						style: {
							font: "Shrikhand",
							fill: "#222222",
							size: 75,
							weight: "normal"
						}
					},
					{
						button: {
							name: "Sample",
							size: 45,
							x: 550,
							y: 320
						},
						style: {
							font: "Nixie One",
							fill: "#222222",
							size: 75,
							weight: "normal"
						}
					}
				]
			},
			textColors: {
				direction: "Choose a text color",
				options: [
					{
						button: {
							x: 65,
							y: 193,
							width: 75,
							height: 75,
							fill: 0x222222,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#222222"
						}
					},
					{
						button: {
							x: 150,
							y: 193,
							width: 75,
							height: 75,
							fill: 0x0000aa,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#0000aa"
						}
					},
					{
						button: {
							x: 235,
							y: 193,
							width: 75,
							height: 75,
							fill: 0x00aa00,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#00aa00"
						}
					},
					{
						button: {
							x: 320,
							y: 193,
							width: 75,
							height: 75,
							fill: 0x00aaaa,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#00aaaa"
						}
					},
					{
						button: {
							x: 405,
							y: 193,
							width: 75,
							height: 75,
							fill: 0xaa0000,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#aa0000"
						}
					},
					{
						button: {
							x: 490,
							y: 193,
							width: 75,
							height: 75,
							fill: 0xaa00aa,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#aa00aa"
						}
					},
					{
						button: {
							x: 575,
							y: 193,
							width: 75,
							height: 75,
							fill: 0xaa5500,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#aa5500"
						}
					},
					{
						button: {
							x: 660,
							y: 193,
							width: 75,
							height: 75,
							fill: 0xaaaaaa,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#aaaaaa"
						}
					},
					{
						button: {
							x: 65,
							y: 278,
							width: 75,
							height: 75,
							fill: 0x555555,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#555555"
						}
					},
					{
						button: {
							x: 150,
							y: 278,
							width: 75,
							height: 75,
							fill: 0x5555ff,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#5555ff"
						}
					},
					{
						button: {
							x: 235,
							y: 278,
							width: 75,
							height: 75,
							fill: 0x55ff55,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#55ff55"
						}
					},
					{
						button: {
							x: 320,
							y: 278,
							width: 75,
							height: 75,
							fill: 0x55ffff,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#55ffff"
						}
					},
					{
						button: {
							x: 405,
							y: 278,
							width: 75,
							height: 75,
							fill: 0xff5555,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#ff5555"
						}
					},
					{
						button: {
							x: 490,
							y: 278,
							width: 75,
							height: 75,
							fill: 0xff55ff,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#ff55ff"
						}
					},
					{
						button: {
							x: 575,
							y: 278,
							width: 75,
							height: 75,
							fill: 0xffff55,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#ffff55"
						}
					},
					{
						button: {
							x: 660,
							y: 278,
							width: 75,
							height: 75,
							fill: 0xf8f8f8,
							strokeWidth: 2,
							strokeColor: 0xffffff
						},
						target: {
							fill: "#f8f8f8"
						}
					}
				]
			}
		}

	}

}