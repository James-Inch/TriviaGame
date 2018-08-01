// Once document is ready, then the game can begin with the start game button...
$(document).ready(function () {

  // State manangement variables
  var correct = 0;
  var incorrect = 0;
  var userChoice;
  

  // create an array of objects for the questions, answer choices and correct answer...
  var questions = [{
    question: "What is the name of the gaget that Rick uses to travel between dimensions and universes?",
    answers: ["Not the answer", "Portal Gun", "Not the answer", "Not the answer"],
    correctAnswer: "Portal Gun"
  },
  {
    question: "What is a schmeckle?",
    answers: ["Not the answer", "Not the answer", "A currency", "Not the answer"],
    correctAnswer: "A currency"
  },
  {
    question: "What is the name of the rock band Rick and his best friend were in back in the 20's?",
    answers: ["Not the answer", "Not the answer", "Not the answer", "'The Flesh Curtains'"],
    correctAnswer: "'The Flesh Curtains'"
  },
  {
    question: "What are the 'ball fondlers'?",
    answers: ["Not the answer", "Rick and Morty’s favorite TV show", "Not the answer", "Not the answer"],
    correctAnswer: "Rick and Morty’s favorite TV show"
  },
  {
    question: "What does the microscope that the devil gave Rick do?",
    answers: ["Makes people retarded", "Not the answer", "Not the answer", "Not the answer"],
    correctAnswer: "Makes people retarded"
  }]
  // test my object... 
  console.log(questions[0].question);

  // game start..
  $(".startBtn").click(function () {
    // set initial timer 
    // Hide the start button
    $(".startBtn").hide();
    // display timer

    // display first question
    var question1 = questions[0].question;
    $(".question").append(question1);
    // display answer choices
    for( i = 0; i < questions.answers; i++){
      $("ul").append(this);
      console.log(this);
    }
  });
});

/* 
  when the document is ready 
  click start button and game begins 
  30 second timer, first question and clickable answer choices are displayed on html

  when the user chooses their answer it is compared to the corrct answer and the info is stored in either the correct or incorrect variables to be displayed at the end of the game. 

  once the user has pick thier answer the second question should come up and so on and so on...

  at the end of the game the number of correct answers and wrong answers is displayed along with a button that allows them to restart the game...
*/
