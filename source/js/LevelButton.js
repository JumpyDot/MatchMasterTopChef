/**
 * LevelButton.js
 *
 * Level buttons are display object containers that support some unique functionality:
 *   Show plate/rollover
 *   Display the game number or lock
 *   Show number of stars earned
 *   Show different states for locked, unlocked, played
 *   Show different states for Challenge levels
 *   ...and act like a button!
 */
MemoryMatch = MemoryMatch || {};

MemoryMatch.LevelButton = function (parameters) {
    var levelButton = new createjs.Container();

    levelButton.callback = null;
    levelButton.width = 0;
    levelButton.height = 0;
    levelButton.gameNumber = 0;
    levelButton.landNumber = 0;
    levelButton.starsEarned = 0;
    levelButton.maxStars = 3;
    levelButton.showStarsForChallenge = true;
    levelButton.bestScore = 0;
    levelButton.wasPlayed = false;
    levelButton.isLocked = true;
    levelButton.isChallengeGame = false;
    levelButton.userBeatChallenge = false;
    levelButton.buttonScale = 1.0;
    levelButton.addShadow = false;
    levelButton.spriteData = new createjs.SpriteSheet(MemoryMatch.GameSetup.mapSpritesheetFrames);
    levelButton.shadowSource = null;
    levelButton.textColor = '#000000';
    levelButton.changeEventNotification = null;


    levelButton.setParameters = function (parameters) {
        if (parameters != null) {
            if (parameters.gameNumber != null) {
                levelButton.gameNumber = parameters.gameNumber;
            }
            if (parameters.landNumber != null) {
                levelButton.landNumber = parameters.landNumber;
            }
            if (parameters.starsEarned != null) {
                levelButton.starsEarned = parameters.starsEarned;
            }
            if (parameters.bestScore != null) {
                levelButton.bestScore = parameters.bestScore;
            }
            if (parameters.wasPlayed != null) {
                levelButton.wasPlayed = parameters.wasPlayed;
            }
            if (parameters.isLocked != null) {
                levelButton.isLocked = parameters.isLocked;
            }
            if (parameters.scale != null) {
                levelButton.buttonScale = parameters.scale;
            }
            if (parameters.addShadow != null) {
                levelButton.addShadow = parameters.addShadow;
                levelButton.shadowSource = new createjs.Shadow("#000000", 2, 2, 10);
            }
            if (parameters.isChallengeGame != null) {
                levelButton.isChallengeGame = parameters.isChallengeGame;
                if (levelButton.isChallengeGame) {
                    levelButton.userBeatChallenge = MemoryMatch.didUserBeatChallenge(levelButton.landNumber);
                }
            }
            if (parameters.callback != null) {
                levelButton.callback = parameters.callback;
            }
            if (parameters.changeEventNotification != null) {
                levelButton.changeEventNotification = parameters.changeEventNotification;
            }
        }
    };

    levelButton.createGameNumberText = function (centerPoint) {
        var numberIcon,
            spriteFrame = this.isChallengeGame ? 'bossNumberLand'+ this.landNumber.toString() : 'levelSelectOff' + this.gameNumber.toString(),
            spriteSize = MemoryMatch.getSpriteFrameSize(MemoryMatch.GameSetup.mapSpritesheetFrames, spriteFrame),
            rotation = 0;

        numberIcon = new createjs.Sprite(this.spriteData, spriteFrame);
        numberIcon.framerate = 0;
        numberIcon.name = 'gameNumber';
        numberIcon.visible = ! this.isLocked;
        numberIcon.setTransform(centerPoint.x, centerPoint.y, 1, 1, rotation, 0, 0, spriteSize.width * 0.5, spriteSize.height * 0.5);
        this.addChild(numberIcon);
    };

    levelButton.createBestScoreText = function () {
        var bestScoreText = new createjs.Text(MemoryMatch.formatNumberWithGroups(this.bestScore), MemoryMatch.getScaledFontSize(36) + " " + MemoryMatch.GameSetup.guiMediumFontName, MemoryMatch.GameSetup.mapLevelColor);
        bestScoreText.textAlign = "center";
        bestScoreText.x = this.width * 0.5;
        bestScoreText.y = this.nextYPosition;
        bestScoreText.maxWidth = this.width;
        bestScoreText.visible = ! (this.isLocked || ! this.wasPlayed);
        bestScoreText.name = "bestScore";
        if (this.addShadow && this.shadowSource != null) {
            bestScoreText.shadow = levelButton.shadowSource.clone();
        }
        this.addChild(bestScoreText);
        this.height = bestScoreText.y + (bestScoreText.getMeasuredLineHeight() * 2);
    };

    levelButton.createLockIcon = function (centerPoint) {
        var lockIcon,
            spriteFrame = this.isChallengeGame ? 'bossLockLand' + this.landNumber.toString() : 'levelSelectLock' + this.landNumber.toString(),
            spriteSize = MemoryMatch.getSpriteFrameSize(MemoryMatch.GameSetup.mapSpritesheetFrames, spriteFrame),
            rotation = 0;

        lockIcon = new createjs.Sprite(this.spriteData, spriteFrame);
        lockIcon.framerate = 0;
        lockIcon.name = 'lock';
        lockIcon.visible = this.isLocked;
        lockIcon.setTransform(centerPoint.x, centerPoint.y, 1, 1, rotation, 0, 0, spriteSize.width * 0.5, spriteSize.height * 0.5);
        this.addChild(lockIcon);
    };

    levelButton.createStars = function (centerPoint) {
        var i,
            star,
            isChallengeGame = this.isChallengeGame,
            spriteFrame = isChallengeGame ? "bossStarOff" : "levelStarOff",
            spriteSize = MemoryMatch.getSpriteFrameSize(MemoryMatch.GameSetup.mapSpritesheetFrames, spriteFrame),
            x = centerPoint.x,
            y = centerPoint.y,
            regY = centerPoint.y,
            rotation,
            showStar;

        if (isChallengeGame) {
            showStar = ! this.isLocked && this.showStarsForChallenge;
            if (this.landNumber == 4) {
                y *= 1.11;
                regY *= 0.7;
            } else if (this.landNumber == 3) {
                y *= 1.15;
                regY *= 0.6;
            } else {
                y *= 1.13;
                regY *= 0.6;
            }
        } else {
            showStar = ! this.isLocked;
        }
        for (i = 0; i < this.maxStars; i ++) {
            if (isChallengeGame) {
                spriteFrame = i < this.starsEarned ? "bossStarOn" : "bossStarOff";
            } else {
                spriteFrame = i < this.starsEarned ? "levelStarOn" : "levelStarOff";
            }
            if (i == 0) {
                rotation = -30;
            } else if (i == 2) {
                rotation = 30;
            } else {
                rotation = 0;
            }
            star = new createjs.Sprite(this.spriteData, spriteFrame);
            star.setTransform(x, y, 1, 1, rotation, 0, 0, spriteSize.width * 0.5, regY);
            star.framerate = 0;
            star.name = 'star' + (i + 1);
            star.visible = showStar;
            this.addChild(star);
        }
    };

    levelButton.showStars = function (showFlag) {
        var i,
            isChallengeGame = this.isChallengeGame,
            star,
            spriteFrame,
            showStar;

        for (i = 0; i < this.maxStars; i ++) {
            star = this.getChildByName('star' + (i + 1));
            if (star != null) {
                if (i < this.starsEarned) {
                    spriteFrame = isChallengeGame ? "bossStarOn" : "levelStarOn";
                } else {
                    spriteFrame = isChallengeGame ? "bossStarOff" : "levelStarOff";
                }
                star.gotoAndStop(spriteFrame);
                if (isChallengeGame) {
                    showStar = ! this.isLocked && this.showStarsForChallenge;
                } else {
                    showStar = ! this.isLocked;
                }
                star.visible = showStar;
            }
        }
        this.changeEvent();
    };

    levelButton.removeStars = function () {
        var i,
            star;

        for (i = 0; i < this.maxStars; i ++) {
            star = this.getChildByName('star' + i);
            if (star != null) {
                this.removeChild(star);
            }
        }
    };

    levelButton.createButton = function () {
        var spriteFrameBase, // a reference sprite frame, they should all be the same size
            spriteFrameBaseOver,
            starSpriteFrame,
            gameButton,
            rollOverFrame,
            spriteSize,
            starSpriteSize,
            starSpriteGap,
            centerPoint,
            bossYOffsets,
            hitArea,
            isChallengeGame = this.isChallengeGame;

        starSpriteFrame = isChallengeGame ? "bossStarOff" : "levelStarOff";
        starSpriteSize = MemoryMatch.getSpriteFrameSize(MemoryMatch.GameSetup.mapSpritesheetFrames, starSpriteFrame);
        starSpriteGap = starSpriteSize.height * 0.05;
        if (isChallengeGame) {
            spriteFrameBase = 'bossBaseLand' + this.landNumber.toString();
            spriteFrameBaseOver = 'bossBaseOverLand' + this.landNumber.toString();
        } else {
            spriteFrameBase = 'levelSelectCircle';
            spriteFrameBaseOver = 'levelSelectCircleOver';
        }
        spriteSize = MemoryMatch.getSpriteFrameSize(MemoryMatch.GameSetup.mapSpritesheetFrames, spriteFrameBase);
        spriteSize.width *= this.buttonScale;
        spriteSize.height *= this.buttonScale;
        this.width = spriteSize.width;
        this.height = starSpriteSize.height + starSpriteGap + spriteSize.height;
        if (isChallengeGame) {
            bossYOffsets = [80,56,56,16];
            centerPoint = {x: 80 * MemoryMatch.stageScaleFactor, y: (spriteSize.height + (bossYOffsets[this.landNumber - 1] * MemoryMatch.stageScaleFactor)) * 0.5};
        } else {
            centerPoint = {x: this.width * 0.5, y: starSpriteSize.height + starSpriteGap + (spriteSize.height * 0.5) - (16 * MemoryMatch.stageScaleFactor)};
        }
        gameButton = new createjs.Sprite(this.spriteData, spriteFrameBase);
        gameButton.setTransform(this.width * 0.5, starSpriteSize.height + starSpriteGap, this.buttonScale, this.buttonScale, 0, 0, 0, spriteSize.width * 0.5, 0);
        gameButton.framerate = 0;
        gameButton.name = 'button';
        gameButton.width = spriteSize.width;
        gameButton.height = spriteSize.height;
        this.addChildAt(gameButton, 0);

        rollOverFrame = new createjs.Sprite(this.spriteData, spriteFrameBaseOver);
        rollOverFrame.setTransform(this.width * 0.5, starSpriteSize.height + starSpriteGap, this.buttonScale, this.buttonScale, 0, 0, 0, spriteSize.width * 0.5, 0);
        rollOverFrame.visible = false;
        rollOverFrame.name = 'rollover';
        this.addChild(rollOverFrame);

        levelButton.createStars(centerPoint);
        levelButton.createLockIcon(centerPoint);
        levelButton.createGameNumberText(centerPoint);
        hitArea = new createjs.Shape();
        hitArea.graphics.beginFill("#ff0000").drawRect(0, 0, this.width, this.height);
        hitArea.cache(0, 0, this.width, this.height);
        levelButton.hitArea = hitArea;
        levelButton.cache(0, 0, this.width, this.height);
        if ( ! this.isLocked) {
            this.setEnabled(true);
        }
    };

    levelButton.refreshButton = function (parameters) {
        this.setParameters(parameters);
        this.coordinateDisplayInformation();
    };

    levelButton.onLevelSelect = function (event) {
        var that;
        if (event != null && event.target != null) {
            that = event.target;
            if (that.callback == null) {
                that = event.target.parent;
            }
            if (that.callback != null) {
                MemoryMatch.triggerSoundFx("soundTap");
                that.callback(that.gameNumber);
            }
        }
    };

    levelButton.onRollover = function (event) {
        var rollOverFrame = this.getChildByName('rollover');

        if (rollOverFrame != null) {
            rollOverFrame.visible = true;
        }
        this.changeEvent();
    };

    levelButton.onRollout = function (event) {
        var rollOverFrame = this.getChildByName('rollover');

        if (rollOverFrame != null) {
            rollOverFrame.visible = false;
        }
        this.changeEvent();
    };

    levelButton.onTouchDown = function (event) {
        if (MemoryMatch.isTouchDevice) {
            this.onRollover(event);
        }
    };

    levelButton.onTouchUp = function (event) {
        if (MemoryMatch.isTouchDevice) {
            this.onRollout(event);
        }
    };

    levelButton.show = function (showFlag) {
        this.visible = showFlag;
        this.changeEvent();
    };

    levelButton.setGameNumber = function (gameNumber) {
        this.gameNumber = gameNumber;
        this.coordinateDisplayInformation();
    };

    levelButton.setStarsEarned = function (numberOfStars) {
        this.showStars(false);
        if (numberOfStars < 0) {
            numberOfStars = 0;
        } else if (numberOfStars > this.maxStars) {
            numberOfStars = this.maxStars;
        }
        this.starsEarned = numberOfStars;
        if (numberOfStars >= 0) {
            this.showStars(true);
        }
    };

    levelButton.setBestScore = function (newScore) {
        this.bestScore = newScore;
        this.coordinateDisplayInformation();
    };

    levelButton.setIsLocked = function (isLocked) {
        this.isLocked = isLocked;
        this.coordinateDisplayInformation();
    };

    levelButton.setWasPlayed = function (wasPlayed) {
        this.wasPlayed = wasPlayed;
        this.coordinateDisplayInformation();
    };

    levelButton.coordinateDisplayInformation = function () {

        // Make sure the level button agrees with the state of the game for this user

        var gameNumberText = this.getChildByName("gameNumber"),
            lockIcon = this.getChildByName("lock"),
            showStarsFlag = false;

        if (this.gameNumber == 1 || this.wasPlayed) {
            this.isLocked = false;
        }
        if (this.isLocked) {
            this.setEnabled(false);
            lockIcon.visible = true;
            gameNumberText.visible = false;
        } else {
            this.setEnabled(true);
            lockIcon.visible = false;
            if (this.wasPlayed) {
                gameNumberText.visible = true;
                if (this.isChallengeGame) {
                    showStarsFlag = ! this.isLocked && this.showStarsForChallenge;
                } else {
                    showStarsFlag = ! this.isLocked;
                }
            } else {
                gameNumberText.visible = true;
            }
        }
        this.showStars(showStarsFlag);
        if (showStarsFlag) {
            this.setStarsEarned(this.starsEarned);
        }
        this.changeEvent();
        MemoryMatch.stageUpdated = true;
    };

    levelButton.setEnabled = function (enableFlag) {
        if (enableFlag) {
            levelButton.cursor = 'pointer';
            this.addEventListener("click", this.onLevelSelect);
            this.addEventListener("rollover", this.onRollover.bind(this));
            this.addEventListener("rollout", this.onRollout.bind(this));
            this.addEventListener("mousedown", this.onTouchDown.bind(this));
            this.addEventListener("pressup", this.onTouchUp.bind(this));
            this.addEventListener("rollout", this.onTouchUp.bind(this));
        } else {
            levelButton.cursor = null;
            this.removeEventListener("click", this.onLevelSelect);
            this.removeEventListener("rollover", this.onRollover.bind(this));
            this.removeEventListener("rollout", this.onRollout.bind(this));
            this.removeEventListener("mousedown", this.onTouchDown.bind(this));
            this.removeEventListener("pressup", this.onTouchUp.bind(this));
            this.removeEventListener("rollout", this.onTouchUp.bind(this));
        }
    };

    levelButton.kill = function () {
        var buttonRing,
            rolloverFrame,
            lockIcon,
            gameButton = this.getChildByName("button");

        this.setEnabled(false);
        if (this.isChallengeGame) {
            rolloverFrame = this.getChildByName("rollover");
            if (rolloverFrame != null) {
                rolloverFrame.uncache();
            }
            lockIcon = this.getChildByName("lock");
            if (lockIcon != null) {
                lockIcon.uncache();
            }
        }
        if (gameButton != null) {
            gameButton.uncache();
        }
        this.shadowSource = null;
        this.callback = null;
        this.spriteData = null;
        this.uncache();
        this.removeAllChildren();
    };

    levelButton.toString = function() {
        return "[LevelButton] gameNumber: " + levelButton.gameNumber.toString();
    };

    levelButton.changeEvent = function () {
        this.updateCache();
        MemoryMatch.stageUpdated = true;
        if (this.changeEventNotification != null) {
            this.changeEventNotification();
        }
    };

    levelButton.setParameters(parameters);
    levelButton.createButton();
    return levelButton;
};
