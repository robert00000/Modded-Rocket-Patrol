class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to existing scene
        this.points = pointValue; // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;
    }
    update(){

        // move spaceship left
        if(game_time < 30){
            this.x -= this.moveSpeed*2;
        }else{
            this.x -= this.moveSpeed;
        }
        
        // wrap around from left to right edge
        if(this.x <= 0 - this.width){
            this.reset();
        }

    }

    reset(){
        this.x = game.config.width;
    }
    
}