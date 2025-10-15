document.addEventListener('DOMContentLoaded', function () {
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartBtn = document.getElementById('restart-quiz-btn');
    const nextQuizBtn = document.getElementById('next-quiz-btn');
    const quizContainer = document.querySelector('.quiz-container');
    const quizQuestion = document.querySelector('.quiz-question');
    const quizOptions = document.querySelector('.quiz-options');
    const quizOption = document.querySelector('.quiz-option');
    const resultContainer = document.querySelector('.result-container');
    const score = document.querySelector('.score')

    const questions = [
    {
        question: "Who is known as the father of computers?",
        choices: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "What does 'HTTP' stand for?",
        choices: [
            "HyperText Transfer Protocol",
            "HyperText Transmission Process",
            "HighText Transfer Program",
            "Hyper Transfer Text Protocol"
        ],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "Which data structure uses FIFO (First In First Out) principle?",
        choices: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue"
    },
    {
        question: "Which company developed the programming language 'Python'?",
        choices: ["Microsoft", "Google", "Bell Labs", "Python Software Foundation"],
        answer: "Python Software Foundation"
    },
    {
        question: "What does ‘CPU’ stand for?",
        choices: [
            "Central Processing Unit",
            "Computer Processing Unit",
            "Central Programming Unit",
            "Control Processing Utility"
        ],
        answer: "Central Processing Unit"
    }
];


    let currentQuizeIndex = 0;
    let totalScore = 0;


    // Refactorin

    startQuizBtn.addEventListener('click', startQuiz);
    nextQuizBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);

    function startQuiz() {
        console.log("clicked start button");
        startQuizBtn.style.display = 'none';
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        showQuestion();
    }

    function showQuestion() {
        nextQuizBtn.style.display = 'none';
        let currentQuestion = questions[currentQuizeIndex];
        quizQuestion.innerHTML = currentQuestion.question;
        quizOptions.innerHTML = ''; // clearing prev choice list
        currentQuestion.choices.forEach((choice) => {
            const li = document.createElement('li');
            li.classList.add('quiz-option');
            li.innerHTML = choice;
            quizOptions.appendChild(li);
            li.addEventListener('click', () => selectOption(choice, li))
        });
    };

    function selectOption(choice, li) {
        let correctAnswer = questions[currentQuizeIndex].answer;
        if (correctAnswer === choice) {
            totalScore++;
            li.classList.add('correct')
            setTimeout(nextQuestion, 300);
            console.log('question Index: ', currentQuizeIndex);
            console.log('total score:', totalScore);
        } else {
            li.classList.add('wrong')
            setTimeout(nextQuestion, 300);
            console.log("total score:", totalScore);
            console.log('question Index: ', currentQuizeIndex);
        }
    };

    function nextQuestion() {
        if (currentQuizeIndex + 1 < questions.length) {
            currentQuizeIndex++;
            console.log('question index', currentQuizeIndex);
            showQuestion();
        } else {
            quizContainer.style.display = 'none';
            resultContainer.style.display = 'block';
            score.innerHTML = `${totalScore} out of ${questions.length}`
        }
    }

    function restartQuiz(){
        currentQuizeIndex = 0;
        totalScore = 0;
        nextQuizBtn.style.display = 'none';
        startQuiz();
    }

});