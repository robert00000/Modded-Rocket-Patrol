//A simple function to update the time.


var myVar = setInterval(myTimer, 1000);
var tim_left = 60;

function myTimer() {

  // document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  // document.write ("Time left: ", tim_left," of 60<br>");
  
  tim_left--;
  
  //if (tim_left < 0) {
   //document.write ("Sorry... wah wah wah...")

  //}


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
