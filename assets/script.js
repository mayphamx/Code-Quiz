window.alert("Hi! Welcome to my code quiz :)");
var fun = window.confirm("Please click start and answer the questions by clicking on the answer.");
console.log(fun);

var timerElement = document.getElementById("timer");
var leaderboards = [];

var quizQuestions = [
  {
    question: "What color is the sky?",
    options: ["blue", "green", "yellow","red"],
    answer: 0,
  },
  {
    question: "What color is the grass?",
    options: ["blue", "green", "yellow","red"],
    answer: 1,
  },
  {
    question: "What color is the sun?",
    options: ["blue", "green", "yellow","red"],
    answer: 2,
  },
  {
    question: "What color is a firetruck?",
    options: ["blue", "green", "yellow","red"],
    answer: 3,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
var endTime;
const initialElement = document.getElementById ("initial");
const startElement = document.getElementById ("start");
const submitElement = document.getElementById("submit");
const optionElement = document.getElementById ("option");
const questionElement = document.getElementById ("question");

startElement.addEventListener("click", startClicked);
submitElement.addEventListener("click", saveScore);
submitElement.style.display = "none";
initialElement.style.display = "none";


function startClicked() {
  setQuestion();
  startElement.style.display = "none";
  timerInterval = setInterval(updateTimer, 1000);
};

function updateTimer() {
  timeLeft--;
  timerElement.textContent = timeLeft;
  if (timeLeft <= 0) {
    endQuiz();
  }
};

// displays quiz questions 
function setQuestion() {
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionElement.innerHTML = "";
  for (let i = 0; i < currentQuestion.options.length; i++) {
    var choice = document.createElement("li");
    choice.textContent = currentQuestion.options[i];
    choice.addEventListener("click", () => {
      checkAnswer(i);
    });
    optionElement.appendChild(choice);
  };
};

function checkAnswer(answerIndex) {
  var currentQuestion = quizQuestions[currentQuestionIndex];
  if (timeLeft <= 0){
    endQuiz();
  };
  if (answerIndex === currentQuestion.answer) {
    score++;
  } else {
    timeLeft -= 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    setQuestion();
  } else {
      endQuiz();
  }
};

function endQuiz() {
  clearInterval(timerInterval);
  endTime = timeLeft;
  questionElement.textContent = "You got " + score + " out of 4 questions correct with " + endTime + " seconds left.";
  initialElement.style.display = "block";
  timerElement.style.display = "none";
  submitElement.style.display = "block";
  optionElement.style.display = "none";
};