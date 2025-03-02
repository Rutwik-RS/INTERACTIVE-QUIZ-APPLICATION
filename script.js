const questions = [
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Which programming language is used for web development?",
        answers: [
            { text: "Python", correct: false },
            { text: "C++", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Java", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Styling System", correct: false },
            { text: "Creative Style Syntax", correct: false },
            { text: "Colorful Simple Sheets", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to display images?",
        answers: [
            { text: "<image>", correct: false },
            { text: "<img>", correct: true },
            { text: "<pic>", correct: false },
            { text: "<src>", correct: false }
        ]
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        answers: [
            { text: "let", correct: true },
            { text: "var", correct: true },
            { text: "const", correct: true },
            { text: "int", correct: false }
        ]
    }
];

let questionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreDisplay = document.getElementById("score-display");

function startQuiz() {
    questionIndex = 0;
    score = 0;
    scoreDisplay.innerText = "";
    restartButton.classList.add("hidden");
    nextButton.classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[questionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    answerButtons.innerHTML = "";
}

function selectAnswer(button, correct) {
    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll("#answer-buttons button").forEach(btn => {
        btn.disabled = true;
    });

    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.innerText = `Quiz Finished! You scored ${score} out of ${questions.length}.`;
    answerButtons.innerHTML = "";
    nextButton.classList.add("hidden");
    restartButton.classList.remove("hidden");
}

restartButton.addEventListener("click", startQuiz);

startQuiz();
