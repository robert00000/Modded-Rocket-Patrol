class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = .5;
        this.sfxRocket = scene.sound.add('sfx_rocket');  // add rocket sfx
    }
    update() {
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x = tankPosition;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x = tankPosition;
            }
        }
        
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.moveSpeed = 3;
            this.sfxRocket.play();
        }

        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.moveSpeed = .5
            this.reset();
        }
    }

    reset(){
        this.isFiring = false;
        this.moveSpeed = .5;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}