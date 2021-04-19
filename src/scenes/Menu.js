class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

      // load images
      this.load.image('menuTank', './assets/enemyTank.png')
  }

  create() {
      // menu text configuration
      let menuConfig = {
          fontFamily: 'Arial',
          fontSize: '28px',
          backgroundColor: '#F3B141',
          color: '#843605',
          align: 'right',
          padding: {
              top: 5,
              bottom: 5,
          },
          fixedWidth: 0
      }
      
      // show menu text
      
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'TANK PATROL', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows keys to move & (F) to fire', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '	#5F9EA0';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // easy mode
      game.settings = {
        spaceshipSpeed: .5,
        gameTimer: 60000
      }
      
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
      time = 60
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // hard mode
      game.settings = {
        spaceshipSpeed: 1.5,
        gameTimer: 45000   
      }
      
      this.sound.play('sfx_select');
      this.scene.start('playScene');    
      time = 45
    }
  }
}