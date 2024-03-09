//noting all variables that may change or have something happen to them
var scoreboard = document.getElementById("scoreboard");
var questionBox = document.getElementById("quiz'");
var submitButton = document.getElementById("submit");
var grade = document.getElementById("grade");
var timer = document.getElementById("timer");
var score = document.getElementById("playerScore");


function submitAnswer () {//basic example for the function called when user's answer is submitted without question variables or adding to the score.
    const grade = document.getElementById("grade"); //changed variable "grade" from a var to a const within the function
    if (response = "A") {
        grade.innerHTML = "Correct!";//resplaces "correct or incorrect" with the result of the question answer
    }
    else {
        grade.innerHTML = "Incorrect!";
    }
}