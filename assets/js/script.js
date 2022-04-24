var timerEl = document.querySelector('#timer');
var mainEl = document.querySelector('main');

var pageContentEl = document.createElement("div");
pageContentEl.id = "container";
pageContentEl.innerHTML = "<h1>Coding Quiz Challenge</h1><p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize you score/time by ten seconds!</p>"
mainEl.appendChild(pageContentEl);

var startButtonEl = document.createElement("button");
startButtonEl.id = "start-button";
startButtonEl.innerHTML = "Start Quiz";
pageContentEl.appendChild(startButtonEl);

var startQuizEl = document.querySelector('#start-button');

function startQuiz() {
questionOne();
var startQuizEl = document.querySelector('#start-button');
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

function questionOne(){

}


startQuizEl.addEventListener("click", startQuiz);
