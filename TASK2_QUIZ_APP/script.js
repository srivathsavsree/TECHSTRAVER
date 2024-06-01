document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const nextButton = document.getElementById('next');
    const resultContainer = document.getElementById('result');

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What year was the first iPhone released?",
            choices: ["2005", "2007", "2009", "2010"],
            correctAnswer: 1
        },
        {
            question: "Who is the current CEO of Apple?",
            choices: ["Steve Jobs", "Tim Cook", "Elon Musk", "Jeff Bezos"],
            correctAnswer: 1
        },
        {
            question: "Which of these is not an Apple product?",
            choices: ["iPad", "MacBook", "Galaxy S", "Apple Watch"],
            correctAnswer: 2
        },
        {
            question: "What is the primary programming language used for iOS development?",
            choices: ["Python", "Java", "Swift", "Kotlin"],
            correctAnswer: 2
        },
        {
            question: "What is Apple's virtual assistant called?",
            choices: ["Alexa", "Siri", "Cortana", "Google Assistant"],
            correctAnswer: 1
        }
    ];

    function showQuestion(questionIndex) {
        const question = questions[questionIndex];
        quizContainer.innerHTML = `
            <div class="question">${question.question}</div>
            <ul class="choices">
                ${question.choices.map((choice, index) => `
                    <li>
                        <label>
                            <input type="radio" name="choice" value="${index}">
                            ${choice}
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    function showNextQuestion() {
        const selectedChoice = document.querySelector('input[name="choice"]:checked');
        if (selectedChoice) {
            const answer = parseInt(selectedChoice.value);
            if (answer === questions[currentQuestionIndex].correctAnswer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        } else {
            alert('Please select an answer');
        }
    }

    function showResult() {
        quizContainer.innerHTML = '';
        nextButton.style.display = 'none';
        resultContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
    }

    nextButton.addEventListener('click', showNextQuestion);

    showQuestion(currentQuestionIndex);
});
