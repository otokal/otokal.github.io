const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  {
    question: 'What is the largest ocean in the world?',
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    answer: 'Pacific Ocean'
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;

  optionsContainer.innerHTML = '';
  currentQuizData.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option');
    optionsContainer.appendChild(button);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('.option:checked');
  if (!selectedOption) return;

  const answer = selectedOption.innerText;
  if (answer === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = `<h2>You scored ${score}/${quizData.length}!</h2>`;
  }
}

loadQuestion();

submitButton.addEventListener('click', checkAnswer);
