/**
 * MainMenu.js
 *
 * Show the main menu screen. This object just layouts out the screen, animates the pieces,
 * and waits for the user to make a choice. The callback is used to indicate which choice was
 * made by the user.
 *
 */
MemoryMatch = MemoryMatch || {};

MemoryMatch.MainMenu = {
    stateCompleteCallback: null,
    levelData: null,
    parentDisplayObject: null,
    groupDisplayObject: null,
    awardSprite: null,
    spriteData: null,
    mapSpriteFrames: null,
    backgroundWidth: 0,
    backgroundHeight: 0,
    width: 0,
    height: 0,
    animate: true,
    connectorShape: null,

    setup: function (displayObject, nextLevelData, stateCompleteCallbackFunction) {
        // use the level data to do any level-specific setup
        this.levelData = nextLevelData;
        this.stateCompleteCallback = stateCompleteCallbackFunction;
        this.parentDisplayObject = displayObject;
        this.backgroundWidth = displayObject.canvas.width;
        this.backgroundHeight = displayObject.canvas.height;
        this.mapSpriteFrames = MemoryMatch.GameSetup.mapSpritesheetFrames;
        this.spriteData = new createjs.SpriteSheet(this.mapSpriteFrames);
    },

    buildScreen: function (autoStart) {
        // layout the map
        this.width = this.parentDisplayObject.canvas.width;
        this.height = this.parentDisplayObject.canvas.height;
        this.groupDisplayObject = new createjs.Container();
        this.parentDisplayObject.addChild(this.groupDisplayObject);
        this.setupBackgroundAndGameLogo();
        this.setupAward();
        this.setupLevelButtons();
        if (autoStart == null) {
            autoStart = false;
        }
        if (autoStart) {
            this.start();
        }
        // The entire Map is cached, so any updates will require a call to updateCache()
        this.groupDisplayObject.setTransform(0, 0, 1, 1);
        if (this.animate) {
            this.groupDisplayObject.alpha = 0;
        }
        this.groupDisplayObject.cache(0, 0, this.width, this.height);
    },

    start: function () {

        // begin animation, then wait for user event to end this state and alert callback

        var duration,
            animator;

        if (this.animate) {
            duration = 1; // seconds of animation
            animator = MemoryMatch.AnimationHandler.addToAnimationQueue(this.groupDisplayObject, 0, 0, false, null, this.onStartFadeInComplete.bind(this));
            animator.endAlpha = 1;
            animator.vAlpha = duration / MemoryMatch.fps;
        }
        if (this.stateCompleteCallback != null) {
            // stateCompleteCallback();
        }
    },

    onStartFadeInComplete: function () {
        if (MemoryMatch.shouldAskUserToBookmarkApp()) {
            MemoryMatch.MainMenu.showBookmarkAppPrompt();
        }
    },

    showBookmarkAppPrompt: function () {
        var resolutionAdjustment = MemoryMatch.stageScaleFactor < 0.3 ? 1.4 : 1.0,
            infoPopup = new MemoryMatch.InfoPopup(MemoryMatch.stage, true, {title: MemoryMatch.GameSetup.GUIStrings.bookmarkTitle, message: MemoryMatch.GameSetup.GUIStrings.bookmarkMessage, x: MemoryMatch.stageWidth * 0.5, y: MemoryMatch.stageHeight * 0.14 * resolutionAdjustment, duration: 5.5, backgroundColor: MemoryMatch.GameSetup.achievementBackgroundColor, borderColor: MemoryMatch.GameSetup.achievementBorderColor, titleFontSize: 64 * resolutionAdjustment, messageFontSize: 52 * resolutionAdjustment, messageFont: 'Arial', width: 1280 * resolutionAdjustment, height: 380 * resolutionAdjustment, icon: "iosShare"});
    },

    onContinue: function (levelNumber) {
        // begin animation, then wait for user event to end this state and alert callback
        if (MemoryMatch.MainMenu.stateCompleteCallback != null) {
            MemoryMatch.MainMenu.stateCompleteCallback(levelNumber);
        }
        MemoryMatch.MainMenu.killScreen();
    },

    onClickedAward: function (event) {
        MemoryMatch.triggerSoundFx("soundTap");
        MemoryMatch.AwardsPopup.setup(MemoryMatch.stage, null);
        MemoryMatch.AwardsPopup.buildScreen(true, true);
    },

    setupBackgroundAndGameLogo: function () {

        // Show background image and game logo

        var spriteFrame = 'gameLogo',
            canvas = this.parentDisplayObject.canvas,
            imageSprite = new createjs.Sprite(this.spriteData, spriteFrame),
            position = MemoryMatch.GameSetup.mapLogoPosition,
            spriteSize = MemoryMatch.getSpriteFrameSize(this.mapSpriteFrames, spriteFrame),
            backgroundImageAsset = MemoryMatch.assetLoader.getResult("mapImage0"),
            bgImage = new createjs.Bitmap(backgroundImageAsset),
            bgImageOffset = {x: 0, y: canvas.height},
            xScale,
            yScale;

        if (backgroundImageAsset == null || canvas == null) {
            MemoryMatch.debugLog("Unexpected error null reference on backgroundImageAsset or canvas");
            return;
        }
        if (backgroundImageAsset.width > canvas.width) {
            xScale = canvas.width / backgroundImageAsset.width;
        } else {
            xScale = 1;
        }
        if (backgroundImageAsset.height > canvas.height) {
            yScale = canvas.height / backgroundImageAsset.height;
        } else {
            yScale = 1;
        }
        if (MemoryMatch.stageScaleFactor == 0.24) {
            bgImageOffset.y *= 0.04;
        } else {
            bgImageOffset.y *= 0.13;
        }
        bgImage.alpha = 1;
        bgImage.setTransform(bgImageOffset.x, bgImageOffset.y, xScale, yScale, 0, 0, 0, 0, 0);
        this.groupDisplayObject.addChild(bgImage);

        if (position == null) {
            position = {x: this.width * 0.5, y: this.height * 0.5};
            imageSprite.setTransform(position.x, position.y, 1, 1, 0, 0, 0, spriteSize.width * 0.5, spriteSize.height * 0.5);
        } else {
            imageSprite.setTransform(position.x * MemoryMatch.stageScaleFactor, position.y * MemoryMatch.stageScaleFactor, 1, 1, 0, 0, 0, spriteSize.width * 0.5, spriteSize.height * 0.5);
        }
        imageSprite.framerate = 0;
        this.groupDisplayObject.addChild(imageSprite);
    },

    setupAward: function () {
        // Show Award
        var spriteFrame = 'mapTrophy',
            imageSprite = new createjs.Sprite(this.spriteData, spriteFrame),
            emptySprite,
            emptySpriteSource,
            awardPosition = MemoryMatch.GameSetup.mapAwardPosition,
            position,
            spriteSize = MemoryMatch.getSpriteFrameSize(this.mapSpriteFrames, spriteFrame),
            i,
            badgePosition,
            badgeName,
            landNumber,
            numberOfLevels = MemoryMatch.GameSetup.levels.length;

        if (awardPosition == null) {
            position = {x: ((this.width - spriteSize.width) * 0.5) | 0, y: ((this.height - spriteSize.height) * 0.5) | 0};
        } else {
            position = {x: (awardPosition.x * MemoryMatch.stageScaleFactor) | 0, y: (awardPosition.y * MemoryMatch.stageScaleFactor) | 0};
        }
        imageSprite.setTransform(position.x, position.y, 1, 1, 0, 0, 0, (spriteSize.width * 0.5) | 0, (spriteSize.height * 0.5) | 0);
        imageSprite.framerate = 0;
        imageSprite.cursor = 'pointer';
        imageSprite.addEventListener('click', this.onClickedAward.bind(this));
        this.groupDisplayObject.addChild(imageSprite);
        this.awardSprite = imageSprite;

        // position badges relative to award position, accounting for the center registration of the award sprite
        spriteFrame = 'mapAwardEmpty';
        emptySpriteSource = new createjs.Sprite(this.spriteData, spriteFrame);
        spriteFrame = 'mapAwardLand';
        position.x -= (spriteSize.width * 0.5) | 0;
        position.y -= (spriteSize.height * 0.5) | 0;
        for (i = 0; i < numberOfLevels; i ++) {
            badgePosition = MemoryMatch.GameSetup.levels[i].gemPosition;
            if (i > 0) {
                emptySprite = emptySpriteSource.clone();
            } else {
                emptySprite = emptySpriteSource;
            }
            emptySprite.setTransform((position.x + (badgePosition.x * MemoryMatch.stageScaleFactor)) | 0, (position.y + (badgePosition.y * MemoryMatch.stageScaleFactor)) | 0);
            this.groupDisplayObject.addChild(emptySprite);
            landNumber = i + 1;
            badgeName = spriteFrame + landNumber.toString();
            imageSprite = new createjs.Sprite(this.spriteData, badgeName);
            imageSprite.setTransform((position.x + (badgePosition.x * MemoryMatch.stageScaleFactor)) | 0, (position.y + (badgePosition.y * MemoryMatch.stageScaleFactor)) | 0);
            imageSprite.name = badgeName;
            imageSprite.visible = MemoryMatch.didUserBeatChallenge(landNumber);
            this.groupDisplayObject.addChild(imageSprite);
        }
    },

    showAwardedGems: function () {
        var gemName = 'mapAwardLand',
            landNumber,
            imageSprite,
            i,
            numberOfLevels = MemoryMatch.GameSetup.levels.length;

        for (i = 0; i < numberOfLevels; i ++) {
            landNumber = i + 1;
            gemName = 'mapAwardLand' + landNumber.toString();
            imageSprite = this.groupDisplayObject.getChildByName(gemName);
            if (imageSprite != null) {
                imageSprite.visible = MemoryMatch.didUserBeatChallenge(landNumber);
            }
        }
    },

    setupLevelButtons: function (groupDisplayObject) {

        // Each Level button will come from a data array in Setup.js representing the type of object and the
        // center of the rectangle

        var mapLevelPositions = MemoryMatch.GameSetup.mapLevelPositions,
            levelData = MemoryMatch.GameSetup.levels,
            levelMapPosition,
            landIndex,
            landNumber,
            levelIndexLandOffset,
            levelIndex,
            levelNumber,
            levelButton,
            gameNumber,
            starsEarned,
            bestScore,
            wasPlayed,
            isLocked,
            buttonScale,
            gameScoresCollection,
            gameScoreData,
            totalGamesPlayed,
            gamesUnlocked;

        if (mapLevelPositions == null || levelData == null) {
            return;
        }
        levelIndexLandOffset = 0;
        totalGamesPlayed = 0;
        for (landIndex = 0; landIndex < levelData.length; landIndex ++) {
            landNumber = landIndex + 1;
            gameScoresCollection = MemoryMatch.UserData.getLevelDataItem(landNumber, "levelScoreCollection");
            gamesUnlocked = gameScoresCollection.length;
            for (levelIndex = 0; levelIndex < levelData[landIndex].gameCount; levelIndex ++) {
                levelNumber = levelIndex + levelIndexLandOffset + 1;
                gameNumber = levelIndex + 1;
                if (mapLevelPositions[landIndex] != null && mapLevelPositions[landIndex].length > levelIndex) {
                    levelMapPosition = mapLevelPositions[landIndex][levelIndex];
                } else {
                    levelMapPosition = {x: 0, y: 0};
                }
                gameScoreData = MemoryMatch.getPriorScoreDataForGameNumber(gameNumber, gameScoresCollection);
                if (gameScoreData != null && gameScoreData.playCount > 0) {
                    wasPlayed = true;
                    totalGamesPlayed ++;
                    isLocked = false;
                    bestScore = gameScoreData.bestScore;
                    starsEarned = gameScoreData.starsEarned;
                } else if (gameNumber == gamesUnlocked) {
                    wasPlayed = false;
                    isLocked = false;
                    bestScore = 0;
                    starsEarned = 0;
                } else {
                    wasPlayed = false;
                    isLocked = true;
                    bestScore = 0;
                    starsEarned = 0;
                }
                buttonScale = 1;
                levelButton = MemoryMatch.LevelButton({gameNumber: levelNumber, landNumber: landNumber, starsEarned: starsEarned, bestScore: bestScore, wasPlayed: wasPlayed, isLocked: isLocked, isChallengeGame: false, scale: buttonScale, callback:this.onContinue.bind(this), changeEventNotification:this.changeEvent.bind(this)});
                levelButton.x = levelMapPosition.x * MemoryMatch.stageScaleFactor;
                levelButton.y = levelMapPosition.y * MemoryMatch.stageScaleFactor;
                levelButton.name = this.makeLevelButtonName(landNumber, levelNumber);
                this.groupDisplayObject.addChild(levelButton);
            }
            levelNumber ++;
            gameNumber = 99;
            if (mapLevelPositions[landIndex] != null && mapLevelPositions[landIndex].length >= levelIndex) {
                levelMapPosition = mapLevelPositions[landIndex][levelIndex];
            } else {
                levelMapPosition = {x: 0, y: 0};
            }
            gameScoreData = MemoryMatch.getPriorScoreDataForGameNumber(gameNumber, gameScoresCollection);
            if (gameScoreData != null && gameScoreData.playCount > 0) {
                wasPlayed = true;
                totalGamesPlayed ++;
                isLocked = false;
                bestScore = gameScoreData.bestScore;
                starsEarned = gameScoreData.starsEarned;
            } else if (gameNumber <= gamesUnlocked || gamesUnlocked > levelData[landIndex].gameCount) {
                wasPlayed = false;
                isLocked = false;
                bestScore = 0;
                starsEarned = 0;
            } else {
                wasPlayed = false;
                isLocked = true;
                bestScore = 0;
                starsEarned = 0;
            }
            levelButton = MemoryMatch.LevelButton({gameNumber: levelNumber, landNumber: landNumber, starsEarned: starsEarned, bestScore: bestScore, wasPlayed: wasPlayed, isLocked: isLocked, isChallengeGame: true, scale: buttonScale, callback:this.onContinue.bind(this), changeEventNotification:this.changeEvent.bind(this)});
            levelButton.x = levelMapPosition.x * MemoryMatch.stageScaleFactor;
            levelButton.y = levelMapPosition.y * MemoryMatch.stageScaleFactor;
            levelButton.name = this.makeLevelButtonName(landNumber, levelNumber);
            this.groupDisplayObject.addChild(levelButton);
            levelIndexLandOffset += levelData[landIndex].gameCount + 1;
        }
    },

    refreshButtons: function () {

        // Update the state of all level buttons and the Award

        var levelData = MemoryMatch.GameSetup.levels,
            landIndex,
            landNumber,
            levelIndexLandOffset,
            levelIndex,
            levelNumber,
            levelButton,
            gameNumber,
            starsEarned,
            bestScore,
            wasPlayed,
            isLocked,
            gameScoresCollection,
            gameScoreData,
            totalGamesPlayed,
            gamesUnlocked;

        if (levelData == null || ! this.isShowing()) {
            return;
        }
        levelIndexLandOffset = 0;
        totalGamesPlayed = 0;
        for (landIndex = 0; landIndex < levelData.length; landIndex ++) {
            landNumber = landIndex + 1;
            gameScoresCollection = MemoryMatch.UserData.getLevelDataItem(landNumber, "levelScoreCollection");
            gamesUnlocked = gameScoresCollection.length;
            for (levelIndex = 0; levelIndex < levelData[landIndex].gameCount; levelIndex ++) {
                levelNumber = levelIndex + levelIndexLandOffset + 1;
                gameNumber = levelIndex + 1;
                gameScoreData = MemoryMatch.getPriorScoreDataForGameNumber(gameNumber, gameScoresCollection);
                if (gameScoreData != null && gameScoreData.playCount > 0) {
                    wasPlayed = true;
                    totalGamesPlayed ++;
                    isLocked = false;
                    bestScore = gameScoreData.bestScore;
                    starsEarned = gameScoreData.starsEarned;
                } else if (gameNumber == gamesUnlocked) {
                    wasPlayed = false;
                    isLocked = false;
                    bestScore = 0;
                    starsEarned = 0;
                } else {
                    wasPlayed = false;
                    isLocked = true;
                    bestScore = 0;
                    starsEarned = 0;
                }
                levelButton = this.groupDisplayObject.getChildByName(this.makeLevelButtonName(landNumber, levelNumber));
                if (levelButton != null) {
                    levelButton.refreshButton({starsEarned: starsEarned, bestScore: bestScore, wasPlayed: wasPlayed, isLocked: isLocked});
                }
            }
            levelNumber ++;
            gameNumber = 99;
            gameScoreData = MemoryMatch.getPriorScoreDataForGameNumber(gameNumber, gameScoresCollection);
            if (gameScoreData != null && gameScoreData.playCount > 0) {
                wasPlayed = true;
                totalGamesPlayed ++;
                isLocked = false;
                bestScore = gameScoreData.bestScore;
                starsEarned = gameScoreData.starsEarned;
            } else if (gameNumber == gamesUnlocked) {
                wasPlayed = false;
                isLocked = false;
                bestScore = 0;
                starsEarned = 0;
            } else {
                wasPlayed = false;
                isLocked = true;
                bestScore = 0;
                starsEarned = 0;
            }
            levelButton = this.groupDisplayObject.getChildByName(this.makeLevelButtonName(landNumber, levelNumber));
            if (levelButton != null) {
                levelButton.refreshButton({starsEarned: starsEarned, bestScore: bestScore, wasPlayed: wasPlayed, isLocked: isLocked});
            }
            levelIndexLandOffset += levelData[landIndex].gameCount + 1;
        }
        this.showAwardedGems();
        this.groupDisplayObject.updateCache();
        MemoryMatch.stageUpdated = true;
    },

    isShowing: function () {
        return this.groupDisplayObject != null && this.groupDisplayObject.visible;
    },

    changeEvent: function () {
        // provide a notification event if a child makes a display change so we can update our cache
        if (this.groupDisplayObject != null) {
            this.groupDisplayObject.updateCache();
        }
    },

    makeLevelButtonName: function (landNumber, levelNumber) {
        return 'land' + landNumber.toString() + ':level' + levelNumber.toString();
    },

    killScreen: function () {
        // remove all display objects and references
        this.stateCompleteCallback = null;
        this.groupDisplayObject.uncache();
        this.levelData = null;
        this.spriteData = null;
        this.mapSpriteFrames = null;
        this.awardSprite = null;
        this.groupDisplayObject.removeAllChildren();
        this.parentDisplayObject.removeChild(this.groupDisplayObject);
        this.groupDisplayObject = null;
        this.parentDisplayObject = null;
        this.backgroundWidth = 0;
        this.backgroundHeight = 0;
        this.width = 0;
        this.height = 0;
    }
};
