const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {}; //this is an object
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
// questions array

let questions = [
  {
    question: "Inside which HTML element dp we put the JavaScript",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question: "Which of the following keyword is used to create an object in Java",
    choice1: "create",
    choice2: "new",
    choice3: "implements",
    choice4: "extends",
    answer: 2,
  },
  {
    question: "Find the next one 2,A,9,B,6,C,13,D",
    choice1: "9",
    choice2: "10",
    choice3: "E",
    choice4: "15",
    answer: 2,
  },
  {
    question: "Which character is used in Python to make a single line comment",
    choice1: "/",
    choice2: "//",
    choice3: "#",
    choice4: "!",
    answer: 3,
  },
  {
    question: "JavaScript is",
    choice1: "Server-side scripting language",
    choice2: "Client-side scripting language",
    choice3: "Both of the above",
    choice4: "None of these",
    answer: 3,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  //   using spread operator making an entire copy of the questions array
  console.log(availableQuestions);
  getNewQuestion();
};
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page if the questions array is empty
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  //   get the available question and remove it so that it wont come again while a player is playing
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"]; //this returns a string
    // const classToApply = 'incorrect';
    // if(selectedAnswer == currentQuestion.answer){
    //     classToApply = 'correct';
    // }
    //or can use a ternary operator
    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    console.log(classToApply);
    //take the parent element of the sleected choice to whome the class will be applied
    selectedChoice.parentElement.classList.add(classToApply);
    //now i want some delay between adding and removing classes
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
    // console.log(selectedAnswer);
  });
});
startGame();
