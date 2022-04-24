var timerEl = document.querySelector('#timer');
var startQuizEl = document.querySelector('#start-button');


function startQuiz() {

var timeLeft = 75;

timerEl.textContent = "Timer: " + timeLeft;

  var timeInterval = setInterval(function () {
    // TODO: Add comments describing the functionality of the `if` statement:
    if (timeLeft > 1) {
        timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else if` statement:
    else {
        timerEl.textContent = "Quiz has ended" 
        clearInterval(timeInterval);
    }
  }, 1000);
};


startQuizEl.addEventListener("click", startQuiz);
