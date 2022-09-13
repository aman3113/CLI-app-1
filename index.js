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
  {
    question: " If we minus 712 from 1500, how much do we get?",
    answer: "788"
  },
  {
    question: "The product of 82 and 5 is:",
    answer: "410"
  },
  {
    question: "The value of pi is equal to:",
    answer: "3.14"
  },
  {
    question: "8 raised to the power 0 is equal to",
    answer: "1"
  },
  {
    question: "A square has all its angles equal to",
    answer: "90 degree"
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
  console.log("---------")
}


for (let i = 0; i < questions.length; i++) {

  var currentQuestion = questions[i];
  ask(currentQuestion.question, currentQuestion.answer)

}
console.log("Your Score:" + score);
