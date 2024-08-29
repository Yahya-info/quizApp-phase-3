const quizData = [
    {
        question: "When did Tunisia gain independance ?",
        answers: ["15th of January 1955", "29th of April 1955", "20 of March 1956", "25 of July 1957"],
        correct: "20 of March 1956"
    },
    {
        question: "when did tunisia become a republic?",
        answers: ["15th of January 1955", "29th of April 1955", "20 of March 1956", "25 of July 1957"],
        correct: "25 of July 1957"
    },
    {
        question: "When did Tunisia make slavery illegal?",
        answers: ["1856", "1846", "1864", "1901"],
        correct: "1846"
    },
    {
        question: "Who is the last bey in tunisia?",
        answers: ["Muhammad al- Amin Bey", "Moncef Bey", "Muhammad al- Sadak Bey"],
        correct: "Muhammad al- Amin Bey"
    },
    {
        question: "When did tunisia make its first constitution?",
        answers: ["1861", "1959", "2014", "2022"],
        correct: "Oxygen"
    }
];



let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    // Réinitialise les retours
    document.getElementById('feedback').innerText = "";
    
    const currentQuestionData = quizData[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestionData.question;
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestionData.answers[index];
        button.onclick = () => selectAnswer(button.innerText);
    });
}

function selectAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].correct;
    
    // Compare la réponse sélectionnée avec la réponse correcte
    if (selectedAnswer === correctAnswer) {
        document.getElementById('feedback').innerText = "Correct!";
        score++; // Incrémente le score si la réponse est correcte
    } else {
        document.getElementById('feedback').innerText = "Wrong! The correct answer was: " + correctAnswer;
    }
    
    // Affiche le score actuel
    document.getElementById('score-display').innerText = "Score: " + score;
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        // Attends que l'utilisateur clique sur "Next" pour passer à la question suivante
    } else {
        document.getElementById('feedback').innerText += " Quiz finished! Your final score is: " + score + "/" + quizData.length;
        document.getElementById('next-btn').disabled = true; // Désactive le bouton "Next" après la fin du quiz
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length) {
        loadQuiz(); // Charge la question suivante
    }
});

// Charge la première question
loadQuiz();