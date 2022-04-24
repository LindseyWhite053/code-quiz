var timerEl = document.querySelector('#timer');
var mainEl = document.querySelector('main');

var pageContentEl = document.createElement("div");
pageContentEl.id = "container";
pageContentEl.innerHTML = "<h1>Coding Quiz Challenge</h1><p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize you score/time by ten seconds!</p>"
mainEl.appendChild(pageContentEl);

var startButtonEl = document.createElement("button");
startButtonEl.id = "start-button";
startButtonEl.className = "answer-button";
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
        timerEl.textContent = "Timer: 0" 
        clearInterval(timeInterval);
    }
  }, 1000);
};

function questionOne(){
pageContentEl.innerHTML = "<h1>Commonly used data types do NOT include?</h1>"

var answerOneEl = document.createElement("button");
answerOneEl.id = "choice-one";
answerOneEl.className = "answer-button";
answerOneEl.innerHTML = "strings";
pageContentEl.appendChild(answerOneEl);

var answerTwoEl = document.createElement("button");
answerTwoEl.id = "choice-two";
answerTwoEl.className = "answer-button";
answerTwoEl.innerHTML = "booleans";
pageContentEl.appendChild(answerTwoEl);

var answerThreeEl = document.createElement("button");
answerThreeEl.id = "choice-three";
answerThreeEl.className = "answer-button";
answerThreeEl.innerHTML = "alerts";
pageContentEl.appendChild(answerThreeEl);

var answerFourEl = document.createElement("button");
answerFourEl.id = "choice-four";
answerFourEl.className = "answer-button";
answerFourEl.innerHTML = "numbers";
pageContentEl.appendChild(answerFourEl);

var choiceOneEl = document.querySelector("#choice-one");
choiceOneEl.addEventListener("click", questionTwoIncorrect);

var choiceTwoEl = document.querySelector("#choice-two");
choiceTwoEl.addEventListener("click", questionTwoIncorrect);

var choiceThreeEl = document.querySelector("#choice-three");
choiceThreeEl.addEventListener("click", questionTwoCorrect);

var choiceFourEl = document.querySelector("#choice-four");
choiceFourEl.addEventListener("click", questionTwoIncorrect);

};

function questionTwoIncorrect() {
    // timeLeft -= 10;
    pageContentEl.innerHTML = "<h1>The condition in an if/else  statement is enclosed with _____. </h1>";
    // answerOneEl.innerHTML = "quotes";
    // answerTwoEl.innerHTML = "curly brackets";
    // answerThreeEl.innerHTML = "parenthesis";
    // answerFourEl.innerHTML = "square brackets";

    var confirmationEl = document.createElement("p");
    confirmationEl.id = "confirmation";
    confirmationEl.innerHTML = "Incorrect answer provided"
    pageContentEl.appendChild(confirmationEl);

}

function questionTwoCorrect() {
    pageContentEl.innerHTML = "<h1>The condition in an if/else  statement is enclosed with _____. </h1>";
    // answerOneEl.innerHTML = "quotes";
    // answerTwoEl.innerHTML = "curly brackets";
    // answerThreeEl.innerHTML = "parenthesis";
    // answerFourEl.innerHTML = "square brackets";

    var confirmationEl = document.createElement("p");
    confirmationEl.id = "confirmation";
    confirmationEl.innerHTML = "Correct answer!";
    pageContentEl.appendChild(confirmationEl);
}
    

startQuizEl.addEventListener("click", startQuiz);
