class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion4.wav');
      this.load.audio('sfx_rocket', './assets/Gun clicking.wav');
      this.load.audio('sfx_clicking', './assets/Gun clicking.wav');
      
      this.load.audio('sfx_music', './assets/8bitMusic.mp3');
      
      // load images
      this.load.image('menuTank', './assets/menuBackground.png')
  }

  create() {
       music = this.sound.add('sfx_music')
      // menu text configuration
      let menuConfig = {
          fontFamily: 'Arial',
          fontSize: '28px',
          backgroundColor: '#2F4F4F',
          color: '#000000',
          align: 'right',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }
      let textConfig = {
        fontFamily: 'Arial',
        fontSize: '14px',
        backgroundColor: '#2F4F4F',
        color: '#000000',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }
      // show menu text
      this.menuTank = this.add.tileSprite(0, 0, 640, 480, 'menuTank').setOrigin(0, 0);
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Welcome to Tank game', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows keys to move & (F) to fire', textConfig).setOrigin(0.5);
      
      
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press the ← key for Easy or → for Nightmare', textConfig).setOrigin(0.5);
      
      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // easy mode
      game.settings = {
        spaceshipSpeed: 1.5,
        gameTimer: 60000
      }
      
      this.sound.play('sfx_clicking');
      this.scene.start('playScene');    
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 2.5,
        gameTimer: 59000   
      }
      
      this.sound.play('sfx_clicking');
      this.scene.start('playScene');    
    }
  }
}