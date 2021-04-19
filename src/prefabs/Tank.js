class Tank extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxEmpty = scene.sound.add('sfx_clicking')
    }
    update() {
        // left/right movement
        if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } 
        if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
        }
        tankPosition = this.x;
        this.sfxEmpty.play()

        
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            
            this.reset();
        }
    }

    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}