console.log("test")
$(document).ready(function () {
  $("startBtn").on("click", function(){
    
  });   

  // State manangement variables
  var correctAnswers = 0;
  var incorrectAnswers = 0;

  
  
  // set initial timer

});
// create an array of objects for the questions, answer choices and correct answer
var questions = [{
      question: "What is the name of the gaget that Rick uses to travel between dimensions and universes?",
      answers: ["","","",""],
      correctAnswers: "Portal Gun"},
    {
      question: "What is a schmeckle?",
      answers: ["","","",""],
      correctAnswers: "A currency"},
    {
      question:"What is the name of the rock band Rick and his best friend were in back in the 20's?",
      answers:["","","",""],
      correctAnswers: "'The Flesh Curtains'"},
    {
      question: "What are the 'ball fondlers'?",
      answers: ["","","",""],
      correctAnswers: "Rick and Morty’s favorite TV show"},
    {
      question: "what does the microscope that the devil gave Rick do?",
      answers: ["","","",""],
      correctAnswers: "Makes people retarded"
}];

console.log(questions.question[0]);






// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).