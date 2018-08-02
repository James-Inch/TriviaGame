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
    question: "What are the 'Ball Fondlers'?",
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
     
    // Hide the start button
    $(".startBtn").hide();

    // set initial timer
    var count = 30;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
      count = count - 1;
      if (count <= -1) {
        clearInterval(counter);
        return;
      }
      $(".timer").html("00 : " + count + " secs");
    }

    // display first question...
    var question1 = questions[0].question;
    $(".question").append(question1);

    var answerChoices = questions[0].answers;
    console.log(answerChoices);

    for (i = 0; i < answerChoices.length; i++) {
      console.log(answerChoices[i]);
      $(".answerChoices").append(answerChoices[i] + "<br>");
    }
    // asnswer choices need to be tied to a click function to be compared...
    
    // I need some sort of answer checker function to campare the users choice to the correct answer...


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
