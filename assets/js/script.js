var mainEl = document.querySelector('main');
var timerEl = document.querySelector('#timer');
var timeLeft = 75;
var viewHighscoreEl = document.querySelector("#high-score");
var quizEnd = "";

var highscores = JSON.parse(localStorage.getItem ("existing")) || []


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
var highscoreEl = document.querySelector('#high-score');


var answerOneEl = document.createElement("button");
answerOneEl.id = "choice-one";
answerOneEl.className = "answer-button";
answerOneEl.innerHTML = "";

var answerTwoEl = document.createElement("button");
answerTwoEl.id = "choice-two";
answerTwoEl.className = "answer-button";
answerTwoEl.innerHTML = "";

var answerThreeEl = document.createElement("button");
answerThreeEl.id = "choice-three";
answerThreeEl.className = "answer-button";
answerThreeEl.innerHTML = "";

var answerFourEl = document.createElement("button");
answerFourEl.id = "choice-four";
answerFourEl.className = "answer-button";
answerFourEl.innerHTML = "";

var choiceOneEl = document.querySelector("#choice-one");

var choiceTwoEl = document.querySelector("#choice-two");

var choiceThreeEl = document.querySelector("#choice-three");

var choiceFourEl = document.querySelector("#choice-four");


var retryButtonEl = document.createElement("button");
retryButtonEl.id = "retry-button";
retryButtonEl.className = "answer-button";
retryButtonEl.innerHTML = "Try again";


function tryAgain () {
    pageContentEl.innerHTML = "<h1>	Your time has run out. Would you like to try again?</h1>";
    pageContentEl.appendChild(retryButtonEl);
    retryButtonEl.addEventListener("click", startQuiz);
}


function timeInterval() {
  var timeInterval = setInterval(function () {


    if (quizEnd == true) {
        clearInterval(timeInterval);
        timerEl.textContent = ""
    }
    else if (timeLeft <= 0) {
        tryAgain ();
        
        clearInterval(timeInterval);
        timerEl.textContent = ""
    }
    else if (timeLeft >= 1) {
        timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } 
  }, 1000);
}

function startQuiz() {
    
    if (timeLeft === 0){
        timeLeft = 75;
    }
    timerEl.textContent = "Timer: " + timeLeft;

    questionOne();
    
    timeInterval();
};

function incorrectAnswer () {
    timeLeft -= 10;
}



function questionOne(){
pageContentEl.innerHTML = "<h1>Commonly used data types do NOT include?</h1>"


answerOneEl.innerHTML = "strings";
pageContentEl.appendChild(answerOneEl);


answerTwoEl.innerHTML = "booleans";
pageContentEl.appendChild(answerTwoEl);


answerThreeEl.innerHTML = "alerts";
pageContentEl.appendChild(answerThreeEl);


answerFourEl.innerHTML = "numbers";
pageContentEl.appendChild(answerFourEl);

var choiceOneEl = document.querySelector("#choice-one");
choiceOneEl.addEventListener("click", questionOneIncorrect);

var choiceTwoEl = document.querySelector("#choice-two");
choiceTwoEl.addEventListener("click", questionOneIncorrect);

var choiceThreeEl = document.querySelector("#choice-three");
choiceThreeEl.addEventListener("click", questionOneCorrect);

var choiceFourEl = document.querySelector("#choice-four");
choiceFourEl.addEventListener("click", questionOneIncorrect);

};

function questionOneIncorrect() {
    incorrectAnswer();

    questionTwo();
 

    console.log ("question incorrect");
}

function questionOneCorrect() {


    questionTwo();

    console.log("question correct");
}


function questionTwo () {
    pageContentEl.innerHTML = "<h1>The condition in an if/else  statement is enclosed with _____. </h1>";
    answerOneEl.innerHTML = "quotes";
    answerTwoEl.innerHTML = "curly braces";
    answerThreeEl.innerHTML = "parenthesis";
    answerFourEl.innerHTML = "square brackets";

    pageContentEl.appendChild(answerOneEl);
    pageContentEl.appendChild(answerTwoEl);
    pageContentEl.appendChild(answerThreeEl);
    pageContentEl.appendChild(answerFourEl);



    var choiceOneEl = document.querySelector("#choice-one");
    choiceOneEl.removeEventListener("click", questionOneIncorrect);
    choiceOneEl.addEventListener("click", questionTwoIncorrect);

    var choiceTwoEl = document.querySelector("#choice-two");
    choiceTwoEl.removeEventListener("click", questionOneIncorrect);
    choiceTwoEl.addEventListener("click", questionTwoIncorrect);

    var choiceThreeEl = document.querySelector("#choice-three");
    choiceThreeEl.removeEventListener("click", questionOneCorrect);
    choiceThreeEl.addEventListener("click", questionTwoCorrect);

    var choiceFourEl = document.querySelector("#choice-four");
    choiceFourEl.removeEventListener("click", questionOneIncorrect);
    choiceFourEl.addEventListener("click", questionTwoIncorrect);

}

function questionTwoIncorrect() {
    incorrectAnswer();

    questionThree();
    

    console.log ("question incorrect");
}

function questionTwoCorrect() {


    questionThree();


    console.log ("question Correct");
}

function questionThree() {
    pageContentEl.innerHTML = "<h1>Arrays in JavaScript can be used to store ___ . </h1>";
    answerOneEl.innerHTML = "numbers and strings";
    answerTwoEl.innerHTML = "other arrays";
    answerThreeEl.innerHTML = "booleans";
    answerFourEl.innerHTML = "all of the above";

    pageContentEl.appendChild(answerOneEl);
    pageContentEl.appendChild(answerTwoEl);
    pageContentEl.appendChild(answerThreeEl);
    pageContentEl.appendChild(answerFourEl);

    var choiceOneEl = document.querySelector("#choice-one");
    choiceOneEl.removeEventListener("click", questionTwoIncorrect);
    choiceOneEl.addEventListener("click", questionThreeIncorrect);

    var choiceTwoEl = document.querySelector("#choice-two");
    choiceTwoEl.removeEventListener("click", questionTwoIncorrect);
    choiceTwoEl.addEventListener("click", questionThreeIncorrect);

    var choiceThreeEl = document.querySelector("#choice-three");
    choiceThreeEl.removeEventListener("click", questionTwoCorrect);
    choiceThreeEl.addEventListener("click", questionThreeIncorrect);
    

    var choiceFourEl = document.querySelector("#choice-four");
    choiceFourEl.removeEventListener("click", questionTwoIncorrect);
    choiceFourEl.addEventListener("click", questionThreeCorrect);

}

function questionThreeIncorrect() {
    incorrectAnswer();
    questionFour();
    

    console.log ("question incorrect");
}

function questionThreeCorrect() {

    questionFour();


    console.log ("question Correct");
}

function questionFour() {
    pageContentEl.innerHTML = "<h1>String values must be enclosed within _____ when being assigned variables. </h1>";
    answerOneEl.innerHTML = "commas";
    answerTwoEl.innerHTML = "curly braces";
    answerThreeEl.innerHTML = "quotes";
    answerFourEl.innerHTML = "parenthesis";

    pageContentEl.appendChild(answerOneEl);
    pageContentEl.appendChild(answerTwoEl);
    pageContentEl.appendChild(answerThreeEl);
    pageContentEl.appendChild(answerFourEl);

    var choiceOneEl = document.querySelector("#choice-one");
    choiceOneEl.removeEventListener("click", questionThreeIncorrect);
    choiceOneEl.addEventListener("click", questionFourIncorrect);

    var choiceTwoEl = document.querySelector("#choice-two");
    choiceTwoEl.removeEventListener("click", questionThreeIncorrect);
    choiceTwoEl.addEventListener("click", questionFourIncorrect);

    var choiceThreeEl = document.querySelector("#choice-three");
    choiceThreeEl.removeEventListener("click", questionThreeIncorrect);
    choiceThreeEl.addEventListener("click", questionFourCorrect);

    var choiceFourEl = document.querySelector("#choice-four");
    choiceFourEl.removeEventListener("click", questionThreeCorrect);
    choiceFourEl.addEventListener("click", questionFourIncorrect);

}

function questionFourIncorrect() {
    incorrectAnswer();
    questionFive();
    
 
    console.log ("question incorrect");
 }
 
 function questionFourCorrect() {

     questionFive();
 
 
     console.log ("question Correct");
 }

function questionFive () {
    pageContentEl.innerHTML = "<h1>	A very useful tool used during development and debugging for printing content to the debugger is: </h1>";
    answerOneEl.innerHTML = "JavaScript";
    answerTwoEl.innerHTML = "Terminal/bash";
    answerThreeEl.innerHTML = "for loops";
    answerFourEl.innerHTML = "console.log";

    pageContentEl.appendChild(answerOneEl);
    pageContentEl.appendChild(answerTwoEl);
    pageContentEl.appendChild(answerThreeEl);
    pageContentEl.appendChild(answerFourEl);

    var choiceOneEl = document.querySelector("#choice-one");
    choiceOneEl.removeEventListener("click", questionFourIncorrect);
    choiceOneEl.addEventListener("click", questionFiveIncorrect);

    var choiceTwoEl = document.querySelector("#choice-two");
    choiceTwoEl.removeEventListener("click", questionFourIncorrect);
    choiceTwoEl.addEventListener("click", questionFiveIncorrect);

    var choiceThreeEl = document.querySelector("#choice-three");
    choiceThreeEl.removeEventListener("click", questionFourCorrect);
    choiceThreeEl.addEventListener("click", questionFiveIncorrect);

    var choiceFourEl = document.querySelector("#choice-four");
    choiceFourEl.removeEventListener("click", questionFourIncorrect);
    choiceFourEl.addEventListener("click", questionFiveCorrect);
}

function questionFiveIncorrect() {
    incorrectAnswer();
    
    playerScore();
}

function questionFiveCorrect() {

    
    playerScore();
}

function playerScore (){
    quizEnd = true
    timerEl.textContent = ""; 
    pageContentEl.innerHTML = "<h1>	Your final score is " + timeLeft + "!</h1>";
    
    var playerScoreEl = document.createElement("input");
    playerScoreEl.type = "text";
    playerScoreEl.name = "user-name";
    playerScoreEl.placeholder = "Enter your initials"
    pageContentEl.appendChild(playerScoreEl);

    var submitButtonEl = document.createElement("button");
    submitButtonEl.id = "submit-button";
    submitButtonEl.className = "answer-button";
    submitButtonEl.innerHTML = "Submit your score";
    pageContentEl.appendChild(submitButtonEl);

    submitButtonEl.addEventListener("click", scoreFormHandler);
}


var displayHighscores = function() {
    
    pageContentEl.innerHTML = "<h1>Highscores</h1>";
   
    var highscores = JSON.parse(localStorage.getItem ("existing"))

    var highscoreSorted = highscores.sort(function(a, b) {

        if (a.Score > b.Score) {
            return -1
        }
        else if (b.Score> a.Score) {
            return 1
        }
        return 0
    });

    for (var i = 0; i < highscoreSorted.length; i++) {

        var newElement = document.createElement("h2")
        newElement.textContent = highscoreSorted[i].Player + " " + highscoreSorted[i].Score;
        pageContentEl.appendChild(newElement);
    }

};


var scoreFormHandler = function () {

    var scoreNameInput = document.querySelector("input[Name='user-name']").value;

    while (!scoreNameInput){
    alert("Enter your initials.")
    return false;
    }

    var score = {
    Player:scoreNameInput,
    Score: timeLeft,
    }

    highscores.push(score)

    localStorage.setItem("existing",JSON.stringify(highscores));

    displayHighscores()
}


startQuizEl.addEventListener("click", startQuiz);

viewHighscoreEl.addEventListener("click", displayHighscores);
