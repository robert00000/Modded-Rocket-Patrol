class bonusTarget extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 4;
        
    }
    update(){

        // move spaceship left
        this.x -= .5;
        // wrap around from left to right edge
        if(this.x <= 0 - this.width){
            this.reset();
        }

    }

    reset(){
        this.x = game.config.width;
    }
}