// The GameSetup object defines all the optional parameters around an instance of the
// Memory Match game.

MemoryMatch.GameSetup = {
    clientId: "bravotv",
    gameName: "TopChefMemoryChallenge",
    gameTitle: "Top Chef Memory Challenge",
    gameSubTitle: "A true Top Chef knows the recipe for success, so test your recall skills with a memory challenge. Put your memory to the test to earn your own Top Chef coat.",
    gameShortSubTitle: "A Top Chef knows the recipe for success. Test your skills in the ultimate memory challenge:",
    gameId: 1085,
    siteId: 108,
    gameLink: 'http://www.bravotv.com/top-chef/season-12/games/top-chef-memory-challenge',
    gameShortLink: 'http://bravo.ly/1zDMbYw',
    gameIcon: 'http://www.bravotv.com/media/games/top-chef-memory-challenge/assets/icon.png',
    enginesisStage: '',
    developerKey: '8C3EB144786576898',
    gameKey: '8eec6164bf13799cc11fb10d7b296c69',
    siteDomain: 'bravotv.com',
    twitterId: '@bravotv',
    socialHashTag: '',
    facebookAppId: '587652661341236',
    googlePlusClientId: '1074321455870-a4ced89t08vig40dtsjt8rmnljmals53.apps.googleusercontent.com',
    googleAnalyticsAccountId: 'UA-13133265-1',
    promoImage: 'http://www.bravotv.com/media/games/top-chef-memory-challenge/assets/1200x900.png',
    orientation: "landscape",
    assetsFolder: "assets",
    backgroundImage: "background.jpg",
    popupBackground: "gamePopup.png",
    orientationIcon: "rotate-device.png",
    guiSprites: ["guiSpriteSheet1.png", "guiSpriteSheet2.png", "mapSpriteSheet.png", "shareicons.png"],
    particleSprite: "sparkle_21x23.png",
    guiBoldFontName: "SohoStd-BoldItalic",
    guiMediumFontName: "open_sanscondensed_light",
    guiFontColor: "#FFFFFF",
    guiFontColorBonus: "#F7941E",
    guiFontColorAchievement: "#F7941E",
    guiInfoColor: "#FFFFFF",
    guiAlertFontColor: "#FFFFFF",
    guiHUDMatchCountHeight: 0.7,
    guiHUDMatchCountOffset: 0.12,
    guiHUDMatchCountTopMargin: 0.5,
    adMinDisplaySeconds: 15,
    adShowPreroll: 1,
    adInterstitalGameCounter: 3,
    adInterstitalLevelCounter: 0,
    achievementBorderColor: '#185794',
    achievementBackgroundColor: '#78B6DD',
    achievementFontColorEarned: '#FFFFFF',
    achievementFontColorUnearned: '#9C9C9C',
    cardWidth: 384,
    cardHeight: 512,
    cardMatchCounterPosition: 4,
    cardMatchCounterFont: "SohoStd-BoldItalic",
    cardMatchCounterColor: "#185794",
    cardMatchCounterSize: 60,
    numberOfStars: 3,
    unlockAllFirstLevels: true,
    levelButtonAlign: "vertical",
    levels: [
        {gameId: 4,
            title: "Amuse Bouche",
            gameCount: 6,
            challengeGameId: 3,
            challengeAdvanceStreak: 3,
            iconHUD: "iconHudLand1",
            iconPopup: "iconHudLand1",
            gemPosition: {x: 212, y: 188},
            titleColor: '#F59330',
            titleOffset: {x: 12, y: 192},
            titleMaxWidth: 104,
            tipId: 1},
        {gameId: 5,
            title: "Appetizer",
            gameCount: 6,
            challengeGameId: 6,
            challengeAdvanceStreak: 5,
            iconHUD: "iconHudLand2",
            iconPopup: "iconHudLand2",
            gemPosition: {x: 306, y: 188},
            titleColor: '#A5A5A5',
            titleOffset: {x: 12, y: 200},
            titleMaxWidth: 104,
            tipId: 2},
        {gameId: 7,
            title: "Entree",
            gameCount: 6,
            challengeGameId: 8,
            challengeAdvanceStreak: 3,
            iconHUD: "iconHudLand3",
            iconPopup: "iconHudLand3",
            gemPosition: {x: 212, y: 358},
            titleColor: '#1A5895',
            titleOffset: {x: 12, y: 204},
            titleMaxWidth: 104,
            tipId: 3},
        {gameId: 2,
            title: "Dessert",
            gameCount: 6,
            challengeGameId: 1,
            challengeAdvanceStreak: 5,
            iconHUD: "iconHudLand4",
            iconPopup: "iconHudLand4",
            gemPosition: {x: 306, y: 358},
            titleColor: '#44C6E0',
            titleOffset: {x: 12, y: 156},
            titleMaxWidth: 104,
            tipId: 4}],
    games: [
        {gameId: 1, gameType: 2, games:30, tolerance: 0, columns:2, rows:2,
            cardSprites: ["TC41.png", "TC42.png"],
            cardWidth: 384,
            cardHeight: 512,
            numCards: 19,
            levelName:"Repeat After Me",
            levelIntro: "Repeat After Me: I will play a pattern, when I am done you must repeat that pattern. Each turn one more is added. You need at least a streak of 5 to advance."
        },
        {gameId: 2, gameType: 4, games:6, tolerance: 3, columns:3, rows:3,
            cardSprites: ["TC41.png", "TC42.png"],
            cardWidth: 384,
            cardHeight: 512,
            numCards: 19,
            levelName:"Dessert",
            levelIntro: "Remember the cards and when it is your turn you are showed a card and you must remember where it was. You have a limited number of moves to find all the cards.",
            startMatchCount: 2,
            removeMatches: 1,
            cardShowTime: 5000,
            progression: [{tolerance: 4, matchCount: 3, columns:2, rows:2}, {tolerance: 3, matchCount: 3, columns:2, rows:2}, {tolerance: 5, matchCount: 5, columns:2, rows:3}, {tolerance: 5, matchCount: 5, columns:3, rows:2}, {tolerance: 5, matchCount: 5, columns:3, rows:2}, {tolerance: 7, matchCount: 8, columns:3, rows:3}]
        },
        {gameId: 3, gameType: 3, games:20, tolerance: 1, columns:7, rows:4,
            cardSprites: ["TC11.png", "TC12.png"],
            cardWidth: 384,
            cardHeight: 512,
            numCards: 19,
            levelName:"Pattern",
            levelIntro: "You are shown a pattern, you must select the cards in that pattern. You need at least a streak of 3 to advance.",
            startMatchCount: 4,
            cardShowTime: 1000,
            progression: [{tolerance: 1, columns:5, rows:3}, {tolerance: 1, columns:5, rows:3}, {tolerance: 1, columns:5, rows:4}, {tolerance: 1, columns:5, rows:4}, {tolerance: 1, columns:6, rows:4}, {tolerance: 1, columns:6, rows:4}, {tolerance: 1, columns:7, rows:4}]
        },
        {gameId: 4, gameType: 1, games:6, tolerance: 6, columns:4, rows:3,
            cardSprites: ["TC11.png", "TC12.png"],
            cardWidth: 384,
            cardHeight: 512,
            numCards: 19,
            levelName:"Amuse Bouche",
            levelIntro: "Classic memory match game. Each card has one match. Clear the board before you run out of moves.",
            progression: [{tolerance: 10, columns:4, rows:3}, {tolerance: 9, columns:4, rows:3}, {tolerance: 15, columns:4, rows:4}, {tolerance: 13, columns:4, rows:4}, {tolerance: 20, columns:5, rows:4}, {tolerance: 18, columns:5, rows:4}]
        },
        {gameId: 5, gameType: 5, games:6, tolerance: 3, columns:4, rows:2,
            cardSprites: ["TC21.png", "TC22.png"],
            cardWidth: 384,
            cardHeight: 512,
            numCards: 19,
            levelName:"Appetizer",
            levelIntro: "A twist on memory, you must pair all the cards in as few moves as you can. You only get a limited number of moves to pair all the cards.",
            progression: [{tolerance: 2, columns:4, rows:2}, {tolerance: 2, columns:4, rows:2}, {tolerance: 3, columns:5, rows:2}, {tolerance: 3, columns:5, rows:2}, {tolerance: 3, columns:4, rows:3}, {tolerance: 3, columns:4, rows:3}],
            cardShowTime: 5000
        },
        {gameId: 6, gameType: 6, games:20, tolerance: 1, columns:3, rows:1,
            cardSprites: ["TC21.png", "TC22.png"],
            cardWidth: 384,
            cardHeight: 512,
            numCards: 19,
            levelName:"Follow Your Card",
            levelIntro: "A shell game: you are shown a card, follow the cards as they are moved and when they stop, pick only that card. You must complete at least 5 to advance.",
            cardShowTime: 1000,
            shuffleCount: 4,
            cardAdvance: 5,
            advanceToColumns: 5
        },
        {gameId: 7, gameType: 7, games:6, tolerance: 5, columns:4, rows:2,
            cardSprites: ["TC31.png", "TC32.png"],
            cardWidth: 384,
            cardHeight: 512,
            numCards: 19,
            levelName:"Entree",
            levelIntro: "Make matches to stop your nemesis from taking all your olive oil! You miss, you lose a little. You match, you save your Extra Virgin Olive Oil. Now match!",
            progression: [{tolerance: 5, columns:4, rows:2}, {tolerance: 5, columns:4, rows:2}, {tolerance: 9, columns:4, rows:3}, {tolerance: 9, columns:4, rows:3}, {tolerance: 8, columns:4, rows:3}, {tolerance: 8, columns:4, rows:3}]
        },
        {gameId: 8, gameType: 8, games:15, tolerance: 1, columns:5, rows:1,
            levelName:"Parts vs. Whole",
            levelIntro: "You are shown a set of cards, only one is part of the target card. Pick the correct card to advance. You must complete 3 boards to advance.",
            cardSprites: ["TC33.png", "TC34.png"],
            cardWidth: 384,
            cardHeight: 512,
            cardShowTime: 1250,
            imageGroups:[
                {sprites: 0, difficulty: 1, targetCard: 1, matchCard: 7, badCardCount: 2, badCards: [10,13,15]},
                {sprites: 0, difficulty: 1, targetCard: 5, matchCard: 11, badCardCount: 2, badCards: [8,9,14]},
                {sprites: 1, difficulty: 1, targetCard: 4, matchCard: 10, badCardCount: 2, badCards: [12,13,18]},
                {sprites: 1, difficulty: 1, targetCard: 5, matchCard: 11, badCardCount: 2, badCards: [8,14,16]},
                {sprites: 1, difficulty: 1, targetCard: 6, matchCard: 12, badCardCount: 2, badCards: [9,10,19]},
                {sprites: 0, difficulty: 2, targetCard: 4, matchCard: 10, badCardCount: 2, badCards: [7,15,19]},
                {sprites: 1, difficulty: 2, targetCard: 1, matchCard: 7, badCardCount: 2, badCards: [13,15,17]},
                {sprites: 0, difficulty: 2, targetCard: 1, matchCard: 7, badCardCount: 3, badCards: [10,13,15]},
                {sprites: 0, difficulty: 2, targetCard: 5, matchCard: 11, badCardCount: 3, badCards: [8,9,14]},
                {sprites: 1, difficulty: 2, targetCard: 4, matchCard: 10, badCardCount: 3, badCards: [12,13,18]},
                {sprites: 1, difficulty: 2, targetCard: 5, matchCard: 11, badCardCount: 3, badCards: [8,14,16]},
                {sprites: 1, difficulty: 2, targetCard: 6, matchCard: 12, badCardCount: 3, badCards: [9,10,19]},
                {sprites: 0, difficulty: 3, targetCard: 3, matchCard: 9, badCardCount: 3, badCards: [12,14,16]},
                {sprites: 0, difficulty: 3, targetCard: 6, matchCard: 12, badCardCount: 3, badCards: [8,17,18]},
                {sprites: 0, difficulty: 3, targetCard: 2, matchCard: 8, badCardCount: 2, badCards: [11,17,18]},
                {sprites: 1, difficulty: 3, targetCard: 2, matchCard: 9, badCardCount: 2, badCards: [10,18,19]},
                {sprites: 1, difficulty: 3, targetCard: 3, matchCard: 8, badCardCount: 2, badCards: [11,14,16]},
                {sprites: 0, difficulty: 4, targetCard: 2, matchCard: 8, badCardCount: 3, badCards: [11,17,18]},
                {sprites: 1, difficulty: 4, targetCard: 2, matchCard: 9, badCardCount: 3, badCards: [10,18,19]},
                {sprites: 1, difficulty: 4, targetCard: 3, matchCard: 8, badCardCount: 3, badCards: [11,14,16]}
            ]
        }
    ],
    Sounds: {
        soundCardDeal: "card-deal.ogg",
        soundCardFlip: "cardflip.ogg",
        soundCorrect: "correct.ogg",
        soundCorrectLess: "correct2.ogg",
        soundAchievement: "achievement.ogg",
        soundMiss: "miss.ogg",
        soundMissLess: "miss2.ogg",
        soundTap: "button-tap.ogg",
        soundIntro: "intro2.ogg",
        soundChallenge: "challenge.ogg",
        soundWin: "win.ogg",
        soundLose: "lose.ogg",
        soundBump: "bump.ogg",
        soundBonus: "bonus.ogg",
        soundMovesLow: "UhOh-2.ogg",
        soundMovesLast: "UhOh-4.ogg",
        soundShuffling: "MonteShuffle-3.ogg",
        note1: "note1.ogg",
        note2: "note2.ogg",
        note3: "note3.ogg",
        note4: "note4.ogg",
        note5: "note5.ogg",
        note6: "note6.ogg",
        note7: "note7.ogg",
        note8: "note8.ogg"
    },
    guiSpritesheet1Frames: null,
    guiSpritesheet2Frames: null,
    mapSpritesheetFrames: null,
    shareIconsFrames: null,
    particleFrames: {width:21, height:23, regX:10, regY:11},
    achievements: [
        {id: 1, name: "Fast Match", value: 50, icon: "fastmatch", description: "Make a match in less than 1 second."},
        {id: 2, name: "Fast Combo", value: 50, icon: "fastcombo", description: "Make a combo in less than 2 seconds."},
        {id: 3, name: "Triple Combo", value: 150, icon: "triplecombo", description: "Make three combos without a miss."},
        {id: 4, name: "Quad-bo", value: 250, icon: "quadbo", description: "Make four combos without a miss."},
        {id: 5, name: "Five Combos", value: 100, icon: "5combo", description: "Make five combos in one game."},
        {id: 6, name: "Fifty Combos", value: 250, icon: "50combo", description: "Make fifty combos."},
        {id: 7, name: "25 Combos", value: 100, icon: "25combo", description: "Make twenty five combos."},
        {id: 8, name: "50 Matches", value: 50, icon: "50match", description: "Make 50 matches."},
        {id: 9, name: "100 Matches", value: 150, icon: "100match", description: "Make 100 matches."},
        {id: 10, name: "250 Matches", value: 250, icon: "250match", description: "Make 250 matches."},
        {id: 11, name: "Lucky Guess", value: 50, icon: "luckyguess", description: "Make a match without seeing the second card."},
        {id: 12, name: "Clairvoyant", value: 250, icon: "clairvoyant", description: "Make a match without seeing either card."},
        {id: 13, name: "Chain Gang", value: 100, icon: "chaingang", description: "Complete three chain boards without a miss."},
        {id: 14, name: "Chaintastic", value: 250, icon: "chaintastic", description: "Complete last chain board without a miss."},
        {id: 15, name: "A Contender", value: 250, icon: "acontender", description: "Beat all 4 challenges."},
        {id: 16, name: "3-Star", value: 500, icon: "3star", description: "Earn 3 stars on all levels."},
        {id: 17, name: "Quick Draw", value: 100, icon: "quickdraw", description: "Complete a game in less than 5 seconds."},
        {id: 18, name: "Mozart", value: 275, icon: "mozart", description: "Score over 15 in simon game."},
        {id: 19, name: "Monte", value: 275, icon: "monte", description: "Beat 10 monte boards."},
        {id: 20, name: "Picasso", value: 275, icon: "picasso", description: "Beat 10 pattern boards."},
        {id: 21, name: "Eagle Eye", value: 275, icon: "eagleeye", description: "Beat 15 eyespy boards."}
    ],
    winState: {
        title: "Congratulations! You Win!",
        subtitle: "You completed the Top Chef Memory Challenge! You are a Top Chef Master!",
        info: "Now try to go back and improve your scores, earn all the achievements, and earn 3 stars in every game! You can do it!"},
    tips: [[
            {id: 1, category: 'win', text: 'How’s that first taste of victory? It’s so sweet when it hits your lips.'},
            {id: 2, category: 'win', text: 'Your palate is prepared for great things. Keep at it.'},
            {id: 3, category: 'win', text: 'Small plates, big wins. Congrats!'},
            {id: 17, category: 'win', text: 'If this is just your first course, we can’t wait for more!'},
            {id: 18, category: 'win', text: 'That canapé was a cinch for you. Keep at it!'},
            {id: 23, category: 'tip', text: 'Pack your knives and go – back to the start. Keep trying!'},
            {id: 18, category: 'tip', text: 'This game’s not your bitch, bitch. But that’s OK. Try again.'},
            {id: 18, category: 'tip', text: 'Can’t stand the heat? Prove us wrong and get back in the kitchen.'},
            {id: 18, category: 'tip', text: 'Padma is not pleased. Back to the drawing board.'}

        ],
        [
            {id: 5, category: 'win', text: 'Your skills are giving us a culinary boner. Play on!'},
            {id: 6, category: 'win', text: 'The only thing better than your knife skills is your memory!'},
            {id: 7, category: 'win', text: 'Are you a molecular gastronomist? Because your skills are out of this world!'},
            {id: 7, category: 'win', text: 'You’ve got a good simmer going. Keep at it.'},
            {id: 8, category: 'tip', text: 'Tom’s giving you his signature scowl. Go back to the kitchen and try again.'},
            {id: 20, category: 'tip', text: 'Did someone steal your pea puree? Or just your resolve? Keep trying!'},
            {id: 26, category: 'tip', text: 'Your dreams are flatter than a fallen soufflé. But don’t despair. Try again!'},
            {id: 26, category: 'tip', text: 'Was you mis en place misplaced?'},
            {id: 26, category: 'tip', text: 'You drew knives, and it didn’t work out so well.'}
        ],
        [
            {id: 13, category: 'win', text: 'It looks like you’ve found the joy in cooking. Keep it up!'},
            {id: 14, category: 'win', text: 'You knocked that out a la minute. Impressive!'},
            {id: 15, category: 'win', text: 'Are you a Top Chef or have you already moved on to Master? Because we are dazzled.'},
            {id: 15, category: 'win', text: 'Looks like you’re seasoned for a life of victory.'},
            {id: 21, category: 'tip', text: 'This is Top Chef, not Top Scallop – so maybe try that one more time.'},
            {id: 21, category: 'tip', text: 'Interesting – and no chef wants to hear that. Try again!'},
            {id: 22, category: 'tip', text: 'Looks like making things complex turned into complicated.'},
            {id: 22, category: 'tip', text: 'Is your blood boiling after that loss?'},
            {id: 22, category: 'tip', text: 'Quickfire or quick misfire? Yikes.'},
            {id: 22, category: 'tip', text: 'The only thing that got braised here was you.'},
            {id: 22, category: 'tip', text: 'No offense, but we’re a little lukewarm on your skills.'}
        ],
        [
            {id: 9, category: 'win', text: 'You got your just desserts – and they were delicious!'},
            {id: 10, category: 'win', text: 'You’re so close to getting your own Top Chef coat.'},
            {id: 11, category: 'win', text: 'Can you bake your cake and eat it too? Looks like yes!'},
            {id: 11, category: 'win', text: 'The taste of victory is sweet. Enjoy!'},
            {id: 12, category: 'win', text: 'Looks like you’ve got a perfect palette. Mazel!'},
            {id: 24, category: 'tip', text: 'The thrill of victory is always tempered with defeat. Try again.'},
            {id: 24, category: 'tip', text: 'Did someone ransack the pantry before you could find what you needed?'},
            {id: 24, category: 'tip', text: 'Thank your stars this wasn’t an Elimination Challenge. Try again.'},
            {id: 25, category: 'tip', text: 'Looks like that wasn’t easy as pie. Try again!'},
            {id: 25, category: 'tip', text: 'Do you feel those eyes upon you? That’s Tom judging you. Try again.'},
            {id: 25, category: 'tip', text: 'Did a bomb explode on your plate? Or was that intentional? Either way, try again.'}
        ]],
    mapImages: ['Map.png'],
    mapLevelPositions: [
        [{x:320, y:160}, {x:580, y:300}, {x:580, y:560}, {x:320, y:672}, {x:60, y:520}, {x:60, y:300}, {x:244, y:330}],
        [{x:480, y:840}, {x:780, y:950}, {x:780, y:1200}, {x:480, y:1300}, {x:180, y:1190}, {x:200, y:950}, {x:410, y:960}],
        [{x:1398, y:840}, {x:1670, y:950}, {x:1680, y:1200}, {x:1398, y:1300}, {x:1100, y:1200}, {x:1120, y:950}, {x:1340, y:960}],
        [{x:1540, y:160}, {x:1800, y:300}, {x:1780, y:560}, {x:1510, y:672}, {x:1260, y:520}, {x:1260, y:280}, {x:1440, y:350}]
    ],
    mapLevelColor: "#FFFFFF",
    mapPathColor: 'rgba(102,102,102,0.5)',
    mapLogoPosition: {x: 1024, y:124},
    mapAwardPosition: {x: 1024, y:572},
    mapSpecialMarkers: [],
    GUIStrings: {
        loadingMessages: ["We're loading...", "Prepping the kitchen...", "Checking ingredients...", "Ready to cook!"],
        wordsOfEncouragement: ['Amazing', 'Spectacular', 'Awesome', 'Sensational', 'Impressive', 'Inspiring', 'Magnificent', 'Wonderful'],
        bookmarkTitle: 'Did you know?',
        bookmarkMessage: 'For a better playing experience you can bookmark this app by tapping the Share icon then select Add to Home Screen.',
        shareEmailMessage: 'A Top Chef knows the recipe for success. Test your skills in the ultimate memory challenge:',
        shareStatusMessage: 'A Top Chef knows the recipe for success. Test your skills in the ultimate memory challenge:',
        shareStatusShortMessage: 'A Top Chef knows the recipe for success. Test your skills in the ultimate memory challenge:',
        shareGameOverMessage: 'A Top Chef knows the recipe for success. Test your skills in the ultimate memory challenge:',
        shareGameOverShortMessage: 'A Top Chef knows the recipe for success. Test your skills in the ultimate memory challenge:',
        orientationMessage: 'This game is best played in landscape orientation.',
        creditsInfo: 'This game was made by JumpyDot using the EaselJS HTML5 framework.',
        creditsCredit: 'Dan Hart:  Game Design & Product Management\n\nJohn Foster:     Programming & Audio\n\nJulia Deter-Keren: Game Design & Art Direction\n\nKevin Sykes, Chris Neuman:     Art & Design\n\nRobert Prescott:     Quality Assurance',
        demoTextMatchLikeCards: 'Match like cards.',
        demoTextClearBoard: 'Clear the board before you run out of misses.',
        demoTextPlayQuick: 'Play quickly for extra points.',
        demoTextStudyBoard: 'Study the board to remember where all the pairs are located.',
        demoTextOnlyAFewSeconds: 'You have only a few seconds to study the board.',
        demoTextFindPairs: 'Find the pairs but you have only a few misses!',
        demoTextNemesisGoal: 'Each time you miss your Nemesis takes your olive oil. Don\'t lose your olive oil!',
        demoTextRememberLocation: 'Remember the locations of the cards.',
        demoTextHaystackGoal: 'Locate the target card before you run out of misses.',
        sharePopupTitle: "Share %gamename% with your favorite social network:",
        emailErrorSender: 'Please provide your email address as the sender.',
        emailErrorTo: 'Please provide the email address of a recipient.',
        emailErrorFrom: 'Please provide a valid sender email address.',
        emailErrorToEmail: 'Please provide a valid email address of a recipient.',
        allLevelsUnlocked: 'You have unlocked all levels.',
        allLevelsLocked: 'You have reset all levels.'
    }
};