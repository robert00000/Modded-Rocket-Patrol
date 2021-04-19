class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        this.load.image('rocket', './assets/Rocket redone.png');
        this.load.image('p1Tank', './assets/playerTank.png')
        this.load.image('spaceship', './assets/enemyTank.png');
        this.load.image('starfield', './assets/Field.png');
        this.load.image('bonusTank', './assets/bonusTank.png');
        // load spritesheet
        this.load.spritesheet('explosion', './assets/pixelatedExplosion.png',{
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        });

    }
//Make player 2 as well as add some kind of music.
    create() {
        music.play();
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x5F9EA0).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        // add Rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
        this.p1Tank = new Tank(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'p1Tank').setOrigin(0.5, 0);
        // p2 rocket
        //this.p2Rocket = new Rocket2(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(-0.5, 0);
        // add Spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);
        this.ship04 = new Spaceship(this, game.config.width, borderUISize*7 + borderPadding*6, 'spaceship', 0, 10).setOrigin(0,0);
        this.ship05 = new Spaceship(this, game.config.width, borderUISize*5 + borderPadding*4, 'bonusTank', 0, 50).setOrigin(0,0);
        
        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        //Key4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.Keycodes.NUMPAD_4)
        //Key6 = this.input.keyboard.addKey(Phaser.Input.Keyboard.Keycodes.NUMPAD_6)
        //Key8 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_8)
        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });

        // initialize score
        this.p1Score = 0;
        this.highScore;
        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FFF8DC',
            color: '#9400D3',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        //this.Highscore = this.add.text(200 + 200, borderUISize + borderPadding*2, this.highScore, scoreConfig);

        // GAME OVER flag
        this.gameOver = false;

        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(60000, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'Time is up!', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← to Menu', scoreConfig).setOrigin(0.5);
            this.gameOver = true;
        }, null, this);
        
        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });
        
        this.fire = this.add.text(100 + 100, borderUISize + borderPadding*2, 'Score : Time', scoreConfig);
        //The text for the timer.
        // if(setInterval(clockFunc(), 1000)){
            
        // }
        this.timer = this.add.text(275 + 275, borderUISize + borderPadding*2, timerVar, scoreConfig);
        
        
    }
    update(){
        timerFunction();
        this.timer.text = timerVar;
        
        this.starfield.tilePositionX += 1;
        
        //check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
            music.stop();
            this.scene.restart();
            timerReset(); //Tries to have the timer go to its number.
            this.timer.text = timerVar; //Tries to change the timer text.
        }



        //update time
        //update rocket
        this.p1Rocket.update();
        this.p1Tank.update();
        // update spaceships (x3)
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();
        this.ship04.update();
        this.ship05.update();
        // check collisions
        if(this.checkCollision(this.p1Rocket, this.ship04)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship04);
        }
        if(this.checkCollision(this.p1Rocket, this.ship03)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
        }
        if(this.checkCollision(this.p1Rocket, this.ship02)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
        }
        if(this.checkCollision(this.p1Rocket, this.ship01)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
        }
        if(this.checkCollision(this.p1Rocket, this.ship05)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship05);
        }
        if (!this.gameOver){
            this.p1Rocket.update();
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
            this.ship04.update();
            this.ship05.update();
        }
    }

    checkCollision(rocket, ship) {
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && 
            rocket.x + rocket.width > ship.x && 
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship. y) {
                return true;
        } else {
            return false;
        }
    }

    shipExplode(ship) {
        // temporarily hide ship
        ship.alpha = 0;
        // create explosion sprite at ship's position
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        this.sound.play('sfx_explosion');
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
          ship.reset();                         // reset ship position
          ship.alpha = 1;                       // make ship visible again
          boom.destroy();       // remove explosion sprite
        });   
       
        this.p1Score += ship.points;
        
        this.scoreLeft.text = this.p1Score;
       
                
        
    }

    
      
}