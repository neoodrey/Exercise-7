const quizData = [
    {
        question: "What is the chemical symbol for water?",
        a: "H2O",
        b: "O2",
        c: "CO2",
        d: "H2",
        correct: "a"
    },
    {
        question: "What planet is known for its rings?",
        a: "Earth",
        b: "Mars",
        c: "Saturn",
        d: "Jupiter",
        correct: "c"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        correct: "b"
    },
    {
        question: "What is the powerhouse of the cell?",
        a: "Nucleus",
        b: "Mitochondria",
        c: "Ribosome",
        d: "Chloroplast",
        correct: "b"
    },
    {
        question: "What is the most abundant element in the universe?",
        a: "Oxygen",
        b: "Carbon",
        c: "Hydrogen",
        d: "Helium",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultDisplay = document.getElementById('result');
const retryButton = document.getElementById('retry');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <ul class="answers">
            <li><input type="radio" name="answer" value="a">${currentQuestion.a}</li>
            <li><input type="radio" name="answer" value="b">${currentQuestion.b}</li>
            <li><input type="radio" name="answer" value="c">${currentQuestion.c}</li>
            <li><input type="radio" name="answer" value="d">${currentQuestion.d}</li>
        </ul>
    `;
}

function calculateScore() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function showResult() {
    quiz.innerHTML = '';
    resultDisplay.innerHTML = `You scored ${score} out of ${quizData.length}.`;
    submitButton.classList.add('hidden');
    retryButton.classList.remove('hidden');
}

function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultDisplay.innerHTML = '';
    retryButton.classList.add('hidden');
    submitButton.classList.remove('hidden');
    loadQuestion();
}

submitButton.addEventListener('click', calculateScore);
retryButton.addEventListener('click', retryQuiz);

// Load the first question
loadQuestion();
