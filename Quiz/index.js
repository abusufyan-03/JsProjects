document.addEventListener('DOMContentLoaded', function () {
    // const quizContainer = document.querySelector('.quiz-container');
    // const startQuiz = document.getElementById('start-quiz-btn');

    // quizContainer.style.display = 'none';
    // // startQuiz.classList.remove('hidden')


    // startQuiz.addEventListener('click', function (e) {
    //     startQuiz.classList.add('hidden');
    //     quizContainer.style.display = 'block';
    // })


    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartBtn = document.getElementById('restart-quiz-btn');
    const nextQuizBtn = document.getElementById('next-quiz-btn');
    const quizContainer = document.querySelector('.quiz-container');
    const quizQuestion = document.querySelector('.quiz-question');
    const quizOptions = document.querySelector('.quiz-options');
    const resultContainer = document.querySelector('.result-container');
    const score = document.querySelector('.score')

    const questions = [
        {
            question: "What is the capital of france?",
            choices: ['Paris', 'London', "Berlin", 'Madrid'],
            answer: "Paris"
        },
        {
            question: 'Which planet is known as red planet?',
            choices: ['Mars', 'Venus', 'Jupitar', 'Saturn'],
            answer: 'Mars'
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: ['Charles Dicken', 'Jane Austen', 'William Shakespear', 'Mark Twain'],
            answer: 'William Shakespear'
        }
    ];

    let currentQuizeIndex = 0;
    let totalScore = 0;


    // startQuizBtn.addEventListener('click', function (e) {
    //     nextQuizBtn.style.display = 'none'
    //     startQuizBtn.style.display = 'none';
    //     quizContainer.style.display = 'inline-block';

    //     startQize()
    // });

    // nextQuizBtn.addEventListener('click', function () {
    //     if (currentQuizeIndex < questions.length) {
    //         currentQuizeIndex++;
    //         console.log(currentQuizeIndex)
    //         startQize()

    //     } else {
    //         quizContainer.style.display = 'none';
    //         score.innerHTML = `${toalScore} out of ${questions.length}`
    //         resultContainer.style.display = 'block'
    //         console.log(currentQuizeIndex)
    //     }

    // });

    // restartBtn.addEventListener('click', function () {
    //     resultContainer.style.display = 'none';
    //     currentQuizeIndex = 0;
    //     toalScore = 0;
    //     startQuizBtn.style.display = 'block';
    // })

    // function startQize() {
    //     let currentQuestion = questions[currentQuizeIndex];
    //     quizQuestion.innerHTML = `${currentQuestion.question}`;
    //     quizeOptions.innerHTML = '';
    //     currentQuestion.choices.forEach((ch) => {
    //         const li = document.createElement('li');
    //         li.classList.add('quiz-option');
    //         li.innerHTML = ch;
    //         quizeOptions.appendChild(li);
    //         li.addEventListener('click', () => selectOption(ch))

    //     });

    // };

    // function selectOption(ch) {
    //     let correctAnswer = questions[currentQuizeIndex].answer;
    //     if (correctAnswer === ch) {
    //         nextQuizBtn.style.display = 'block'
    //         toalScore++;
    //         console.log('total score:', toalScore);
    //     } else {
    //         nextQuizBtn.style.display = 'block'
    //     }
    // }

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
        let currentQuestion = questions[currentQuizeIndex];
        quizQuestion.innerHTML = currentQuestion.question;
        quizOptions.innerHTML = ''; // clearing prev choice list
        currentQuestion.choices.forEach((choice) => {
            const li = document.createElement('li');
            li.classList.add('quiz-option');
            li.innerHTML = choice;
            quizOptions.appendChild(li);
            li.addEventListener('click', () => selectOption(choice))
        });
    };

    function selectOption(choice) {
        let correctAnswer = questions[currentQuizeIndex].answer;
        nextQuizBtn.style.display = 'block';
        if (correctAnswer === choice) {
            totalScore++;
            currentQuizeIndex++;
            console.log('question Index: ', currentQuizeIndex)
            console.log('total score:', totalScore)
        } else {
            currentQuizeIndex++;
            console.log('question Index: ', currentQuizeIndex)
        }
    };

    function nextQuestion() {
        if (currentQuizeIndex < questions.length) {
            startQuiz();
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