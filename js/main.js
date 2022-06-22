// TIMERS

// setInterval
let myTimer = window.setInterval(function(){
  console.log('1 second');
}, 1000); 

let timerText = document.getElementById('timer');

function startTimer () {
  timerText.innerHTML += "Time's Up - ";
  timerText.style.color = '#FB6955';
}

setInterval(startTimer, 3000);

let reset = document.getElementById('reset-btn');
reset.onclick = function () {
  clearInterval(myTimer);
}

// setTimeout
let clock = document.getElementById('clock');

function showClock(){
  clock.src = "img/clock.jpg";
}

let showClockTimer = setTimeout(showClock, 5000);

let hideClockBtn = document.getElementById('hideclock-btn');
hideClockBtn.onclick = function () {
  clearTimeout(showClockTimer);
}