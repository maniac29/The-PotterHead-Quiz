var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  question: "What is the name of Harry Potter's owl? ",
  answer: "Hedwig"
}, {
  question: "Who is Draco Malfoy's dad? ",
  answer: "Lucius Malfoy"
},
{
  question: "Name Ron Weasley's pet rat. ",
  answer: "Scabbers"
},
{
  question: "What creature is Aragog? ",
  answer: "Acromantula"
},
{
   question: "Name the centaur who taught at Hogwarts? ",
  answer: "Professor Firenze"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " let's see if you know about THE WIZARDING WORLD");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}




welcome();
game();
console.log("The Quiz Has Ended!! ");
