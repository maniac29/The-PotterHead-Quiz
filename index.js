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
   question: "Name the centaur who taught at Hogwarts. ",
  answer: "Professor Firenze"
},{
  question: "Who killed Dobby by throwing a knife at him? ",
  answer: "Bellatrix Lestrange"
},{
  question: "Name the killing curse. ",
  answer: "Avada Kedavra"
},{
  question: "What was Harry’s Patronus? ",
  answer: "stag"
},{
  question: "What spell would you use to get rid of a nasty boggart? ",
  answer: "Riddikulus"
},{
  question: "Dumbledore is an old fashioned word for bumblebee - true or false? ",
  answer: "true"
},{
  question: "Who does Hermione Granger become when she takes a Polyjuice Potion to break into Gringotts Bank? ",
  answer: "Bellatrix Lestrange"
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
console.log("Your total score is :" , score);
