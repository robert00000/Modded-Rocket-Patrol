//Student Name:Robert Williams   
//Project title: Modded Rocket Patrol Date: 4/19/21 : Time Over 12 hours
//Points made Implemented a UI that shows which side is the time remaining as well as the score.
// Added background music, made tank fire a rocket while in position. Changed colors of UI and font of text
//Added background to the menu and replaced the player sprite and all enemies. Added a bonus enemy that can be hard to hit.
// Custom artwork and changed all ingame sounds. The game is no longer sci fi but a battle between Tanks and a moving turret. UI is aesthetically similar to old types of games.
// Added a timer that counts down how much time is remaining.
//Can move after firing rocket to reposition while it is loading a new rocket.
// Should have a slight speed increase after some time.
let config = {
  type: Phaser.CANVAS,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, key4, key6, key8, time, tankPosition, highScore;
var timer, music; //Variables for storing values.