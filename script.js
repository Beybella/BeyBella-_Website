// Laboratory Activity #8
//VALERIO, Arabella S.  BSIT 3A

// Array of quiz questions and answers
const quizData = [
  {
    question: '1. What will be the result of 2 + "2" in JavaScript?',
    answer: ["22", "twenty two", "twenty-two", "twentytwo"],
  },
  {
    question: '2️. What does TUP stand for?',
    answer: ["Technological University of the Philippines", "technological university of the philippines"], 
  },
  {
    question: '3️. What is 1 + 1?',
    answer: ["2", "two"],
  },
  {
    question: '4️. Which symbol is used for single-line comments in JavaScript?',
    answer: ["//"],
  },
  {
    question: '5️. What is 5 + 5?',
    answer: ["10", "ten"],
  }
];

// Track current question index and score
let currentQuestion = 0;
let score = 0;

// Display the first question
window.onload = function() {
  loadQuestion();
};

// Function to load the current question
function loadQuestion() {
  document.getElementById("question").textContent = quizData[currentQuestion].question;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("score").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const possibleAnswers = quizData[currentQuestion].answer.map(ans => ans.toLowerCase());
  const feedback = document.getElementById("feedback");

  if (possibleAnswers.includes(userAnswer)) {
    feedback.innerHTML = `Correct!, Nice one`;
    feedback.style.color = "green";
    score++;
  } else {
    feedback.innerHTML = `Incorrect. Try Again!`;
    feedback.style.color = "red";
  }

  // Move to next question after 2 seconds
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  }, 2000);
}

// Function to show the final score
function showFinalScore() {
  document.getElementById("quiz-container").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your final score: <strong>${score} / ${quizData.length}</strong></p>
    <p>${score === quizData.length ? "Excellent job!" : "Keep practicing and try again!"}</p>
  `;
}
