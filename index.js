var readLineSync = require("readline-sync");

var score = 0;

var questions = [
  {
    question: "what is the Prime number after 7?",
    answer: "11"
  },
  {
    question: "How many years are there in a decade? ",
    answer: "10"
  },
  {
    question: "27 is a perfect cube of?",
    answer: "3"
  },
  {
    question: "where is the sum of opposite angles in a cyclic quadrilateral?",
    answer: "180"
  },
]
var name = readLineSync.question("What is your Name?")
console.log(name + " are you ready for this maths quiz!")
console.log("-----------")

function ask(question, answer) {

  var username = readLineSync.question(question);
  if (username === answer) {
    score++;
    console.log("right")
  } else {
    console.log("wrong!")
  }
}


for (let i = 0; i < questions.length; i++) {

  var currentQuestion = questions[i];
  ask(currentQuestion.question, currentQuestion.answer)

}
console.log("Your Score:" + score);
