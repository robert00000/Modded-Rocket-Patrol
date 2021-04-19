//A simple function to update the time.

// global variables
var timerVar;
var game_time = game.settings.gameTimer;

// functions to add to main program
function timerFunction() {
  timerVar = setInterval(everySec, 1000);
  timerVar = game.settings.gameTimer / 1000 - 10  - parseInt(timerVar / 100);
  if(timerVar < 0){
    timerVar = 0;
  }
}

function everySec() {
  timerVar--;
}
function timerReset(){
  timerVar = game.settings.gameTimer;
}

//the box for the timer

let timerConfig = {
    fontFamily: 'Courier',
    fontSize: '28px',
    backgroundColor: '#F3B141',
    color: '#843605',
    align: 'right',
    padding: {
        top: 5,
        bottom: 5,
    },
    fixedWidth: 100
}

//this.timer = this.add.text(275 + 275, borderUISize + borderPadding*2, time , timerConfig);
