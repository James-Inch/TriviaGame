// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
$(document).ready(function () {

// State manangement variables
var correctAnswers = 0;
var incorrectAnswers = 0;


// set initial timer
function fiveSeconds() {

    // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    // console log 10 seconds left
    $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
    console.log("10 seconds left");
  }
});