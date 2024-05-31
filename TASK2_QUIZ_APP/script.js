document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const nextButton = document.getElementById('next');
    const resultContainer = document.getElementById('result');

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctAnswer: 2
        },
        {
            question: "Which language runs in a web browser?",
            choices: ["Java", "C", "Python", "JavaScript"],
            correctAnswer: 3
        },
        {
            question: "What does CSS stand for?",
            choices: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
            correctAnswer: 1
        },
        {
            question: "What year was JavaScript launched?",
            choices: ["1996", "1995", "1994", "none of the above"],
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
