ccSettings = {

	scormEnabled: false,

	autoScale: false,

	randomizeQuestions: true,

	gameConfig: {
        width: 800,
        height: 600,
        title:'Cyber Climb',
        backgroundColor: 0xffffff,
        physics: {
		    default: 'arcade',
		    arcade: {
		      gravity: {y: 1000},
		      debug: false
		    	}
  			}
    },

    spritesheets: [

    	{ key: "general", textureURL: "images/general.png", atlasURL: "images/general.json" },
    	{ key: "splash", textureURL: "images/splash.png", atlasURL: "images/splash.json" },
    	{ key: "instructions", textureURL: "images/instructions.png", atlasURL: "images/instructions.json" },
    	{ key: "question", textureURL: "images/question.png", atlasURL: "images/question.json" },
    	{ key: "gameEnd", textureURL: "images/gameend.png", atlasURL: "images/gameend.json" }

    ],

    voSprite: { key: "VOI", jsonURL: "audio/cyber-climb-vo-instructions.json", audioURL: [ "audio/cyber-climb-vo-instructions.m4a", "audio/cyber-climb-vo-instructions.ogg" ] },

    sfxSprite: { key: "sfx", jsonURL: "audio/cyber-climb-sfx.json", audioURL: [ "audio/cyber-climb-sfx.m4a", "audio/cyber-climb-sfx.ogg" ] },

    loader: {

		rotator: {
			key: "rotator",
			file: "images/e-point.png",
			x: 570,
			y: 255,
			rotationDuration: 2000
		},

		backgroundElements: [
			{ x: 400, y: 261, key: "logo", file: "images/Logo-nopoint.png" }
		],

		loadingText: {
			text: "Loading...",
			x: 400,
			y: 451,
			origin: { x: 0.5, y: 0.5 },
			style: {
				fontFamily: 'Kanit', 
                fontSize: 36, 
                fontStyle: "400", 
                color: '#000000'
			}
		},

		clickthroughText: {
			text: "Tap or click here to continue.",
			x: 400,
			y: 451,
			origin: { x: 0.5, y: 0.5 },
			style: {
				fontFamily: 'Kanit', 
                fontSize: 36, 
                fontStyle: "400", 
                color: '#000000'
			}
		}

	},

	backgroundImages: [
		{ x: 400, y: 300, texture: "splash", frame: "background-scale.png" }
	],

	splash: {
		backgroundImages: [
			{ x: 397, y: 150, texture: "splash", frame: "CyberClimb-scale.png" }
		],

		playButton: {
			texture:'splash',
            up: "Play-intro.png",
            over: "Play-intro-hover.png",
            down: "Play-intro-down.png",
            x: 400,
            y: 330
		},

		instructionsButton: {
			texture:'splash',
            up: "instructions-intro.png",
            over: "instructions-intro-hover.png",
            down: "instructions-intro-down.png",
            x: 400,
            y: 460
		},

		sfx: {
			key: "sfx",
			sprite: "Interstellar Odyssey",
			delay: 200,
			config: {volume: .10}
		},

		voSprite: {
			key: "VOI",
			sprite: "Splash",
			delay: 0,
			config: {}
		}
	},


	gameEnd: {
		backgroundImages: [
			{ x: 400, y: 300, texture: "gameEnd", frame: "background-endscreen.png" }
		],

		tryagainButton: {
			texture:'gameEnd',
            up: "tryagain-scale.png",
            over: "tryagain-scale-hover.png",
            down: "tryagain-scale-down.png",
            x: 400,
            y: 530
		},
		happyicon: {
			texture: 'general',
			frame: "happy.png",
			x: 400,
			y:300
		},
		sfx: {
			key: "sfx",
			sprite: "Interstellar Odyssey",
			delay: 200,
			config: {volume: .14}
		},
		voSprite: {
			key: "VOI",
			sprite: "Lose-edit",
			delay: 200,
			config: {}
		},
		voSprite1: {
			key: "VOI",
			sprite: "Win level 3",
			delay: 0,
			config: {}
		}
	},
	progress: {
		backgroundImages: [
			{ x: 400, y: 300, texture: "gameEnd", frame: "background-endscreen.png" }
		],

		nextButton: {
			texture:'instructions',
            up: "next-button.png",
            over: "next-hover.png",
            down: "next-down.png",
            x: 400,
            y: 530
		},

		sfx: {
			key: "sfx",
			sprite: "Interstellar Odyssey",
			delay: 200,
			config: {volume: .14}
		},
		voSprite: {
			key: "VOI",
			sprite: "Win level 2",
			delay: 200,
			config: {}
		},
		voSprite1: {
			key: "VOI",
			sprite: "WinLevel1-edit",
			delay: 200,
			config: {}
		}
	},

	instructions: {

		backgroundImages: [
			{ x: 400, y: 300, texture: "instructions", frame: "instructions.png" }
		],

		playButton: {
			texture:'instructions',
            up: "play-instructions.png",
            over: "play-instructions-hover.png",
            down: "play-instructions-down.png",
            x: 390,
            y: 545
		},
		replayButton: {
			texture:'instructions',
            up: "replay.png",
            over: "replay-hover.png",
            down: "replay-down.png",
            x: 390,
            y: 470
		},
		voSprite: {
			key: "VOI",
			sprite: "Instructions",
			delay: 400,
			config: {}
		}
	},

	levelOne: {

		backgroundImages: [
			{ x: 400, y: 300, texture: "general", frame: "background-basegame.png" }
						
		],

		menuButton: {
			texture:'general',
            up: "Menu-gameplay.png",
            over: "Menu-gameplay-hover.png",
            down: "Menu-gameplay-down.png",
            x: 66,
            y: 24
		},
		upButton: {
			texture:'general',
            up: "Nav-up.png",
            over: "Nav-up.png",
            down: "Nav_up1.png",
            x: 680,
            y: 80
		},
		leftButton: {
			texture:'general',
            up: "Nav-left.png",
            over: "Nav-left.png",
            down: "Nav-left1.png",
            x: 610,
            y: 80
		},
		rightButton: {
			texture:'general',
            up: "Nav-right1.png",
            over: "Nav-right1.png",
            down: "Nav-right.png",
            x: 750,
            y: 80
		},
		sfx: {
			key: "sfx",
			sprite: "Interplanetary Odyssey",
			delay: 200,
			config: {volume: .14}
		},

		levelText: {
			text: "1",
			x: 750,
			y: 25,
			style: {
				fontFamily: 'Kanit', 
                fontSize: 36, 
                fontStyle: "400", 
                color: '#000000'
			}
		},

		happyicon: {
			texture: 'general',
			frame: "happy.png",
			x: 400,
			y:300
		},
		
		alien: {
		  texture: 'general',
		  frame: "alien-sclae.png",
		  x: 566,
          y: 24
		  
		},
		
		hero: {
		  texture: 'general',
		  frame: "hero-spritesheet.png",
		  key: 'hero',
		  x: 566,
          y: 24,
		  frameWidth: 20,
    	  frameHeight: 40,
		  margin: 1,
          spacing: 1
		},
		spawner: {
		  interval: 1000,
		  speed: 100,
		  lifespan: 3000
 		 }
	 },

	 levelTwo: {

		backgroundImages: [
			{ x: 400, y: 300, texture: "general", frame: "background-basegame.png" }
						
		],

		menuButton: {
			texture:'general',
            up: "Menu-gameplay.png",
            over: "Menu-gameplay-hover.png",
            down: "Menu-gameplay-down.png",
            x: 66,
            y: 24
		},
		sfx: {
			key: "sfx",
			sprite: "Child's Nightmare",
			delay: 200,
			config: {volume: .14}
		},

		levelText: {
			text: "1",
			x: 750,
			y: 25,
			style: {
				fontFamily: 'Kanit', 
                fontSize: 36, 
                fontStyle: "400", 
                color: '#000000'
			}
		},

		happyicon: {
			texture: 'general',
			frame: "happy.png",
			x: 400,
			y:300
		},
		
		alien: {
		  texture: 'general',
		  frame: "alien-sclae.png",
		  x: 566,
          y: 24
		  
		},

		loadRotator: {
				texture: "general",
				frame: "happy-scale.png",
				x: 400,
				y: 300,
				rotationDuration: 2000
			},
		
		hero: {
		  texture: 'general',
		  frame: "hero-spritesheet.png",
		  key: 'hero',
		  x: 566,
          y: 24,
		  frameWidth: 20,
    	  frameHeight: 40,
		  margin: 1,
          spacing: 1
		},
		spawner: {
		  interval: 1000,
		  speed: 100,
		  lifespan: 3000
 		 }
	 },
	 levelThree: {

		backgroundImages: [
			{ x: 400, y: 300, texture: "general", frame: "background-basegame.png" }
						
		],

		menuButton: {
			texture:'general',
            up: "Menu-gameplay.png",
            over: "Menu-gameplay-hover.png",
            down: "Menu-gameplay-down.png",
            x: 66,
            y: 24
		},
		sfx: {
			key: "sfx",
			sprite: "Intergalactic Odyssey",
			delay: 200,
			config: {volume: .14}
		},

		levelText: {
			text: "1",
			x: 750,
			y: 25,
			style: {
				fontFamily: 'Kanit', 
                fontSize: 36, 
                fontStyle: "400", 
                color: '#000000'
			}
		},

		happyicon: {
			texture: 'general',
			frame: "happy.png",
			x: 400,
			y:300
		},
		
		alien: {
		  texture: 'general',
		  frame: "alien-sclae.png",
		  x: 566,
          y: 24
		  
		},
		
		hero: {
		  texture: 'general',
		  frame: "hero-spritesheet.png",
		  key: 'hero',
		  x: 566,
          y: 24,
		  frameWidth: 20,
    	  frameHeight: 40,
		  margin: 1,
          spacing: 1
		},
		spawner: {
		  interval: 1000,
		  speed: 100,
		  lifespan: 3000
 		 }
	 },
	 question: {
			scrim: { x: 0, y: 0, width: 800, height: 600, fill: 0xffffff, alpha: 0.5 },

			background: { x: 400, y: 300, texture: "question", frame: "background-question.png" },

			remediationBackground: { x: 400, y: 300, texture: "question", frame: "background-question-correct.png" },

			remediationBackground1: { x: 400, y: 300, texture: "question", frame: "background-question-incorrect.png" },

			
			questionPosition: {
				x: 120,
				y: 30
			},

			questionStyle: {
				fontFamily: "Kanit",
				fontSize: "25px",
				fontStyle: "600",
				color: "#23deff",
				align: "center",
				wordWrap: { width: 600 },
				lineSpacing: 3
			},

			optionTextPosition: {
				x: 50,
				y: 0
			},

			optionTextStyle: {
				fontFamily: "Kanit",
				fontSize: "24px",
				fontStyle: "400",
				color: "#23deff",
				align: "left",
				wordWrap: { width: 600 }
			},

			optionTextOverStyle: {
				fontFamily: "Kanit",
				fontSize: "24px",
				fontStyle: "400",
				color: "#b8b8b8",
				align: "left",
				wordWrap: { width: 600 }
			},

			optionTextDownStyle: {
				fontFamily: "Kanit",
				fontSize: "24px",
				fontStyle: "400",
				color: "#b8b8b8",
				align: "left",
				wordWrap: { width: 600 }
			},

			optionTextSelectedStyle: {
				fontFamily: "Kanit",
				fontSize: "24px",
				fontStyle: "400",
				color: "#b8b8b8",
				align: "left",
				wordWrap: { width: 600 }
			},

			optionPrefixes: [ "A. ", "B. ", "C. ", "D. ", "E. " ],

			remediationTextPosition: {
				x: 130,
				y: 70
			},

			remediationTextStyle: {
				fontFamily: "Kanit",
				fontSize: "30px",
				color: "#23deff",
				align: "center",
				wordWrap: { width: 600 },
				lineSpacing: 3
			},

			continueButton: {
				texture:'question',
            up: "continue-button.png",
            over: "continue-hover.png",
            down: "continue-down.png",
	            x: 615,
	            y: 485
			},

			loadRotator: {
				texture: "general",
				frame: "happy-scale.png",
				x: 400,
				y: 300,
				rotationDuration: 2000
			},

			appearSound: {
				key: "sfx",
				sprite: "bubble",
				config: {}
			},

			correctSound: {
				key: "sfx",
				sprite: "coin",
				config: {}
			},

			audioPath: "audio/questions",

			bank: [
				{
					text: "What is cyberbullying?",
					vo: [ 'Question 1.ogg', 'Question 1.m4a' ],
					options: [
						{ text: "Stealing someone’s cell phone ", remediationIndex: 1 },
						{ text: "Using technology to repeatedly harass, threaten, or embarrass someone ", remediationIndex: 0 },
						{ text: "Getting into a disagreement with a friend on social media", remediationIndex: 1 }

					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "You got it!", 
							vo: [ "Question 1b remediation.ogg", "Question 1ac remediation.m4a" ] 
						},
						{ 
							text: "Nope. Cyberbullying is using technology to repeatedly harass, threaten, or embarrass someone.", 
							vo: [ "Question 1ac remediation.ogg", "Question 1b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Repeatedly sharing embarrassing photos of someone on social media is an example of cyberbullying.",
					vo: [ 'Question 2.ogg', 'Question 2.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }
					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "Correct!", 
							vo: [ "Question 2a remediation.ogg", "Question 2a remediation.m4a" ] 
						},
						{ 
							text: "Sorry, but that's actually true.", 
							vo: [ "Question 2b remediation.ogg", "Question 2b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Is creating a fake social media account to hurt, shame or embarrass someone an example of cyberbullying?",
					vo: [ 'Question 3.ogg', 'Question 3.m4a' ],
					options: [
						{ text: "Yes", remediationIndex: 0 },
						{ text: "No", remediationIndex: 1 }
					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "That's right!", 
							vo: [ "Question 3a remediation.ogg", "Question 3a remediation.m4a" ] 
						},
						{ 
							text: "Sorry, but that is considered cyberbullying.", 
							vo: [ "Question 3b remediation.ogg", "Question 3b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Is having an argument with a friend on social media considered cyberbullying?",
					vo: [ 'Question 4.ogg', 'Question 4.m4a' ],
					options: [
						{ text: "Yes", remediationIndex: 0 },
						{ text: "No", remediationIndex: 1 },
					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "That’s incorrect. Having a disagreement with someone on social media is different than cyberbullying.", 
							vo: [ "Question 4a remediation.ogg", "Question 4a remediation.m4a" ] 
						},
						{ 
							text: "Correct! Having a disagreement with someone on social media is different than cyberbullying.", 
							vo: [ "Question 4b remediation.ogg", "Question 4b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Posting hurtful messages about another player in an online game is an example of cyberbullying.",
					vo: [ 'Question 5.ogg', 'Question 5.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }
					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "You’re right!", 
							vo: [ "Question 5a remediation.ogg", "Question 5a remediation.m4a" ] 
						},
						{ 
							text: "Actually, that’s true.", 
							vo: [ "Question 5b remediation.ogg", "Question 5b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Which of the following is an example of cyberbullying?",
					vo: [ 'Question 6.ogg', 'Question 6.m4a' ],
					options: [
						{ text: "Having a disagreement with a friend on social media", remediationIndex: 0 },
						{ text: "Posting hurtful videos of a friend on social media", remediationIndex: 1 },
						{ text: "Making fun of someone’s outdated phone", remediationIndex: 2 }
					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "Nope. Having a disagreement with a friend on social media is not considered cyberbullying.", 
							vo: [ "Question 6a remediation.ogg", "Question 6a remediation.m4a" ] 
						},
						{ 
							text: "That’s right. Posting videos of someone on social media with the intent to hurt them is considered cyberbullying.", 
							vo: [ "Question 6b remediation.ogg", "Question 6b remediation.m4a" ] 
						},
						{ 
							text: "Nope. Making fun of someone's phone is not considered cyberbullying.", 
							vo: [ "Question 6c remediation.ogg", "Question 6c remediation.m4a" ] 
						}
					]
				},
				{
					text: "After you break up, you post nude pictures of your ex online. Is that considered cyberbullying?",
					vo: [ 'Question 7.ogg', 'Question 7.m4a' ],
					options: [
						{ text: "Yes", remediationIndex: 0 },
						{ text: "No", remediationIndex: 1 }
					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "You’re right. This would definitely be considered cyberbullying. And remember, even having nude pictures of someone who is under the age of 18 is illegal, whether you post them or not.", 
							vo: [ "Question 7a remediation.ogg", "Question 7a remediation.m4a" ] 
						},
						{ 
							text: "That’s incorrect. This would definitely be considered cyberbullying. And remember, even having nude pictures of someone who is under the age of 18 is illegal, whether you post them or not.", 
							vo: [ "Question 7b remediation.ogg", "Question 7b remediation.m4a" ] 
						}
					]
				},
				{
					text: "What are the four steps to take if you are being cyberbullied?",
					vo: [ 'Question 8.ogg', 'Question 8.m4a' ],
					options: [
						{ text: "Respond immediately, discard all evidence, block the person bullying you, and report the cyberbullying.", remediationIndex: 0 },
						{ text: "Respond immediately, keep all evidence, block the person bullying you, and report the cyberbullying.", remediationIndex: 0 },
						{ text: "Don’t respond, keep all evidence, block the person bullying you, and report the cyberbullying.", remediationIndex: 1 }
					],
					correctIndex: 2,
					remediation: [
						{ 
							text: "Not quite. You should not respond, but you should keep all evidence, block the person bullying you, and report the cyberbullying.", 
							vo: [ "Question 8ab remediation.ogg", "Question 8ab remediation.m4a" ] 
						},
						{ 
							text: "Nice job!", 
							vo: [ "Question 8c remediation.ogg", "Question 8c remediation.m4a" ] 
						}
					]
				},
				{
					text: "If you feel that your safety is in danger as a result of cyberbullying, what should you do? ",
					vo: [ 'Question 9.ogg', 'Question 9.m4a' ],
					options: [
						{ text: "Call your best friend right away.", remediationIndex: 0 },
						{ text: "Call your local police immediately.", remediationIndex: 1 },
						{ text: "Wait and see what happens.", remediationIndex: 2 }
					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "Nope. You need more help than your best friend can give you right now.", 
							vo: [ "Question 9a remediation.ogg", "Question 9a remediation.m4a" ] 
						},
						{ 
							text: "That’s right! You should call your local police immediately.", 
							vo: [ "Question 9b remediation.ogg", "Question 9b remediation.m4a" ] 
						},
						{ 
							text: "Nope. You should call your local police immediately.", 
							vo: [ "Question 9c remediation.ogg", "Question 9c remediation.m4a" ] 
						}
					]
				},
				{
					text: "What can a bystander do to stop cyberbullying?",
					vo: [ 'Question 10.ogg', 'Question 10.m4a' ],
					options: [
						{ text: "Forward messages or texts to friends.", remediationIndex: 0 },
						{ text: "Tell an adult.", remediationIndex: 1 },
						{ text: "Reply to the cyberbullying messages or pictures.", remediationIndex: 0 }
					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "Sorry, but that’s just going to make it worse. You need to tell an adult.", 
							vo: [ "Question 10ac remediation.ogg", "Question 10ac remediation.m4a" ] 
						},
						{ 
							text: "That’s right!", 
							vo: [ "Question 10b remediation.ogg", "Question 10b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Victims of cyberbullying are more likely to suffer from depression, anxiety, low self-esteem, and loneliness.",
					vo: [ 'Question 11.ogg', 'Question 11.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }
					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "You're right!", 
							vo: [ "Question 11a remediation.ogg", "Question 11a remediation.m4a" ] 
						},
						{ 
							text: "Unfortunately that’s true.", 
							vo: [ "Question 11b remediation.ogg", "Question 11b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Some types of cyberbullying can have legal consequences.",
					vo: [ 'Question 12.ogg', 'Question 12.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }
					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "Correct!", 
							vo: [ "Question 12a remediation.ogg", "Question 12a remediation.m4a" ] 
						},
						{ 
							text: "Sorry, but that’s true.", 
							vo: [ "Question 12b remediation.ogg", "Question 12b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Most social media sites and gaming platforms can block a user from using their site if that user is cyberbullying others.",
					vo: [ 'Question 13.ogg', 'Question 13.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }
					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "That’s right!", 
							vo: [ "Question 13a remediation.ogg", "Question 13a remediation.m4a" ] 
						},
						{ 
							text: "That’s actually true.", 
							vo: [ "Question 13b remediation.ogg", "Question 13b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Somebody has been sending you threatening texts all day from a number you don’t recognize. You tell your mom that night. What should you do next?",
					vo: [ 'Question 14.ogg', 'Question 14.m4a' ],
					options: [
						{ text: "Reply back and ask who they are.", remediationIndex: 0 },
						{ text: "Ask your friends if they’ve been getting any weird messages.", remediationIndex: 1 },
						{ text: "Block the number on your phone.", remediationIndex: 2 }
					],
					correctIndex: 2,
					remediation: [
						{ 
							text: "That’s incorrect. You should never respond to cyberbullying.", 
							vo: [ "Question 14a remediation.ogg", "Question 14a remediation.m4a" ] 
						},
						{ 
							text: "Not quite. That’s not going to stop the cyberbullying. Be sure to block the number on your phone.", 
							vo: [ "Question 14b remediation.ogg", "Question 14b remediation.m4a" ] 
						},
						{ 
							text: "You got it!", 
							vo: [ "Question 14c remediation.ogg", "Question 14c remediation.m4a" ] 
						}
					]
				},
				{
					text: "A classmate has been spreading rumors about you on social media, but she usually deletes it shortly after posting it. What should you do?",
					vo: [ 'Question 15.ogg', 'Question 15.m4a' ],
					options: [
						{ text: "Start spreading rumors about her.", remediationIndex: 0 },
						{ text: "Take screenshots of the posts when you see them and report it. ", remediationIndex: 1 },
						{ text: "Have your friends threaten her if she doesn’t stop.", remediationIndex: 0 }
					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "No way! That’s not the answer.", 
							vo: [ "Question 15ac remediation.ogg", "Question 15ac remediation.m4a" ] 
						},
						{ 
							text: "Correct!", 
							vo: [ "Question 15b remediation.ogg", "Question 15b remediation.m4a" ] 
						}
					]
				},
				{
					text: "When is the best time to respond to a cyberbullying message?",
					vo: [ 'Question 16.ogg', 'Question 16.m4a' ],
					options: [
						{ text: "As soon as you see the message", remediationIndex: 1 },
						{ text: "After you have talked to a friend ", remediationIndex: 1 },
						{ text: "Never respond to cyberbullying messages.", remediationIndex: 0 }
					],
					correctIndex: 2,
					remediation: [
						{ 
							text: "You got it!", 
							vo: [ "Question 16c remediation.ogg", "Question 16c remediation.m4a" ] 
						},
						{ 
							text: "Actually, you should never respond to cyberbullying messages.", 
							vo: [ "Question 16ab remediation.ogg", "Question 16ab remediation.m4a" ] 
						}
					]
				},
				{
					text: "Students posted hurtful comments about your classmate on a social media site. What action should you take?",
					vo: [ 'Question 17.ogg', 'Question 17.m4a' ],
					options: [
						{ text: "Resist forwarding or replying to the messages and tell an adult.", remediationIndex: 0 },
						{ text: "Confront the students at school defending your classmate.", remediationIndex: 1 },
						{ text: "Send the comments to your friends.", remediationIndex: 1 }
					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "Great job!", 
							vo: [ "Question 17a remediation.ogg", "Question 17a remediation.m4a" ] 
						},
						{ 
							text: "No way! You should tell an adult.", 
							vo: [ "Question 17bc remediation.ogg", "Question 17bc remediation.m4a" ] 
						}
					]
				},
				{
					text: "Most social media sites and gaming platforms do not take cyberbullying seriously.",
					vo: [ 'Question 18.ogg', 'Question 18.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }
					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "Nope. Most social media sites and gaming platforms do take cyberbullying seriously.", 
							vo: [ "Question 18a remediation.ogg", "Question 18a remediation.m4a" ] 
						},
						{ 
							text: "Correct!", 
							vo: [ "Question 18b remediation.ogg", "Question 18b remediation.m4a" ] 
						}
					]
				},
				{
					text: "What should you do if you feel your safety is in danger as a result of cyberbullying?",
					vo: [ 'Question 19.ogg', 'Question 19.m4a' ],
					options: [
						{ text: "Isolate yourself.", remediationIndex: 0 },
						{ text: "Call your local police immediately.", remediationIndex: 1 },
						{ text: "Talk to a friend right away.", remediationIndex: 0 }
					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "That’s incorrect. You should call your local police immediately.", 
							vo: [ "Question 19ac remediation.ogg", "Question 19ac remediation.m4a" ] 
						},
						{ 
							text: "That’s right.", 
							vo: [ "Question 19b remediation.ogg", "Question 19b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Avoiding social media will stop cyberbullying.",
					vo: [ 'Question 20.ogg', 'Question 20.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }
					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "Nope. Cyberbullying can take place through texts, gaming platforms, emails, etc.", 
							vo: [ "Question 20a remediation.ogg", "Question 20a remediation.m4a" ] 
						},
						{ 
							text: "That’s right. Cyberbullying can take place through texts, gaming platforms, emails, etc. so avoiding social media won’t stop cyberbullying.", 
							vo: [ "Question 20b remediation.ogg", "Question 20b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Which of the following is an example of cyberbullying?",
					vo: [ 'Question 21.ogg', 'Question 21.m4a' ],
					options: [
						{ text: "Sending a classmate threatening texts", remediationIndex: 0 },
						{ text: "Encouraging someone on social media to commit suicide", remediationIndex: 0 },
						{ text: "Pretending to be someone else online in order to post hurtful information about another person", remediationIndex: 0 },
						{ text: "All of the above", remediationIndex: 1 }

					],
					correctIndex: 3,
					remediation: [
						{ 
							text: "Not quite. These are all examples of cyberbullying.", 
							vo: [ "Question 21abc remediation.ogg", "Question 21abc remediation.m4a" ] 
						},
						{ 
							text: "Correct!", 
							vo: [ "Question 21d remediation.ogg", "Question 21d remediation.m4a" ] 
						}
					]
				},
				{
					text: "What is bullying that takes place over digital devices like cell phones, computers and tablets called?",
					vo: [ 'Question 22.ogg', 'Question 22.m4a' ],
					options: [
						{ text: "Digital bullying", remediationIndex: 0 },
						{ text: "Cyberbullying", remediationIndex: 1 },
						{ text: "Contextual bullying", remediationIndex: 0 }

					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "Not quite. It's called cyberbullying.", 
							vo: [ "Question 22ac remediation.ogg", "Question 22ac remediation.m4a" ] 
						},
						{ 
							text: "That's right!", 
							vo: [ "Question 22b remediation.ogg", "Question 22b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Most social media sites and gaming platforms offer users a way to report cyberbullying.",
					vo: [ 'Question 23.ogg', 'Question 23.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }

					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "That's right!", 
							vo: [ "Question 23a remediation.ogg", "Question 23a remediation.m4a" ] 
						},
						{ 
							text: "That's incorrect. Most do offer a way to report cyberbullying.", 
							vo: [ "Question 23b remediation.ogg", "Question 23b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Social media can be used for good.",
					vo: [ 'Question 24.ogg', 'Question 24.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }

					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "That’s correct. Social media has the potential to be a force for good by connecting others meaningfully, spreading awareness on important issues, and introducing new people and ideas into your life.", 
							vo: [ "Question 24a remediation.ogg", "Question 24a remediation.m4a" ] 
						},
						{ 
							text: "Not quite. That’s actually true. Social media has the potential to be a force for good by connecting others meaningfully, spreading awareness on important issues, and introducing new people and ideas into your life.", 
							vo: [ "Question 24b remediation.ogg", "Question 24b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Cyberbullying can have serious consequences that carry into adulthood.",
					vo: [ 'Question 25.ogg', 'Question 25.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }

					],
					correctIndex: 0,
					remediation: [
						{ 
							text: "That’s correct. Research shows that the effects of cyberbullying are still detected in adults.", 
							vo: [ "Question 25a remediation.ogg", "Question 25a remediation.m4a" ] 
						},
						{ 
							text: "Nope. That’s actually true. Research shows that the effects of cyberbullying are still detected in adults.", 
							vo: [ "Question 25b remediation.ogg", "Question 25b remediation.m4a" ] 
						}
					]
				},
				{
					text: "There is really nothing you can do to help if you witness cyberbullying.",
					vo: [ 'Question 26.ogg', 'Question 26.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }

					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "No way! You can report it to an adult, and you can make sure you don’t pass the cyberbullying messages along to anyone else. ", 
							vo: [ "Question 26a remediation.ogg", "Question 26a remediation.m4a" ] 
						},
						{ 
							text: "That’s right! You can report it to an adult, and you can make sure you don’t pass the cyberbullying messages along to anyone else. ", 
							vo: [ "Question 26b remediation.ogg", "Question 26b remediation.m4a" ] 
						}
					]
				},
				{
					text: "Cyberbullying is a normal rite of passage that all teens experience these days.",
					vo: [ 'Question 27.ogg', 'Question 27.m4a' ],
					options: [
						{ text: "True", remediationIndex: 0 },
						{ text: "False", remediationIndex: 1 }

					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "No way! Cyberbullying shouldn’t be considered normal, and it is never acceptable. ", 
							vo: [ "Question 27a remediation.ogg", "Question 27a remediation.m4a" ] 
						},
						{ 
							text: "That’s right! Cyberbullying shouldn’t be considered normal, and it is never acceptable. ", 
							vo: [ "Question 27b remediation.ogg", "Question 27b remediation.m4a" ] 
						}
					]
				},
				{
					text: "If your friend is being cyberbullied the best thing you can do is:",
					vo: [ 'Question 28.ogg', 'Question 28.m4a' ],
					options: [
						{ text: "Delete the evidence.", remediationIndex: 0 },
						{ text: "Save the evidence.", remediationIndex: 1 },
						{ text: "Forward the evidence to another friend.", remediationIndex: 0 }

					],
					correctIndex: 1,
					remediation: [
						{ 
							text: "Sorry, but that’s not going to help your friend. You should save all evidence of bullying and give it to an adult.", 
							vo: [ "Question 28ac remediation.ogg", "Question 28ac remediation.m4a" ] 
						},
						{ 
							text: "That’s correct. Make sure to share the evidence with a trusted adult.", 
							vo: [ "Question 28b remediation.ogg", "Question 28b remediation.m4a" ] 
						}
					]
				}
			]
		}
}

