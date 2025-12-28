document.addEventListener("DOMContentLoaded", function() {
    // Base de données de questions sur le Taekwondo
    const questions = [
        // Vocabulaire coréen
        {
            type: "vocabulaire",
            question: "Que signifie 'Ap Chagi' en français ?",
            options: ["Coup de pied avant", "Coup de pied latéral", "Coup de pied arrière", "Coup de poing"],
            correct: 0,
            explanation: "Ap Chagi signifie 'coup de pied avant' en coréen."
        },
        {
            type: "vocabulaire",
            question: "Que signifie 'Yop Chagi' en français ?",
            options: ["Coup de pied avant", "Coup de pied latéral", "Coup de pied arrière", "Coup de poing"],
            correct: 1,
            explanation: "Yop Chagi signifie 'coup de pied latéral' en coréen."
        },
        {
            type: "vocabulaire",
            question: "Que signifie 'Dwit Chagi' en français ?",
            options: ["Coup de pied avant", "Coup de pied latéral", "Coup de pied arrière", "Coup de poing"],
            correct: 2,
            explanation: "Dwit Chagi signifie 'coup de pied arrière' en coréen."
        },
        {
            type: "vocabulaire",
            question: "Que signifie 'Makki' en français ?",
            options: ["Attaque", "Défense", "Position", "Coup de pied"],
            correct: 1,
            explanation: "Makki signifie 'défense' ou 'blocage' en coréen."
        },
        {
            type: "vocabulaire",
            question: "Que signifie 'Kibon' en français ?",
            options: ["Forme de base", "Coup de pied", "Position", "Attaque"],
            correct: 0,
            explanation: "Kibon signifie 'forme de base' ou 'fondamentaux' en coréen."
        },
        {
            type: "vocabulaire",
            question: "Que signifie 'Poomse' en français ?",
            options: ["Coup de pied", "Forme", "Position", "Défense"],
            correct: 1,
            explanation: "Poomse signifie 'forme' ou 'enchaînement de techniques' en coréen."
        },
        {
            type: "vocabulaire",
            question: "Que signifie 'Ap Seogi' en français ?",
            options: ["Position avant", "Position arrière", "Position latérale", "Position de combat"],
            correct: 0,
            explanation: "Ap Seogi signifie 'position avant' en coréen."
        },
        {
            type: "vocabulaire",
            question: "Que signifie 'Dwit Seogi' en français ?",
            options: ["Position avant", "Position arrière", "Position latérale", "Position de combat"],
            correct: 1,
            explanation: "Dwit Seogi signifie 'position arrière' en coréen."
        },
        // Techniques
        {
            type: "technique",
            question: "Combien de poomse existe-t-il dans le Taekwondo traditionnel ?",
            options: ["6", "8", "10", "12"],
            correct: 1,
            explanation: "Il existe 8 poomse dans le Taekwondo traditionnel (Poomse 1 à 8)."
        },
        {
            type: "technique",
            question: "Quelle est la position de base la plus utilisée en Taekwondo ?",
            options: ["Ap Seogi", "Dwit Seogi", "Juchum Seogi", "Kibon Seogi"],
            correct: 2,
            explanation: "Juchum Seogi (position du cavalier) est une position de base fondamentale."
        },
        {
            type: "technique",
            question: "Quel est le nom du coup de pied circulaire en Taekwondo ?",
            options: ["Ap Chagi", "Dollyo Chagi", "Yop Chagi", "Dwit Chagi"],
            correct: 1,
            explanation: "Dollyo Chagi est le coup de pied circulaire en Taekwondo."
        },
        {
            type: "technique",
            question: "Quelle partie du pied utilise-t-on pour un Ap Chagi ?",
            options: ["Le talon", "La plante du pied", "Le dessus du pied", "Le côté du pied"],
            correct: 1,
            explanation: "Pour un Ap Chagi, on utilise la plante du pied (balles des orteils)."
        },
        {
            type: "technique",
            question: "Quelle partie du pied utilise-t-on pour un Yop Chagi ?",
            options: ["Le talon", "La plante du pied", "Le dessus du pied", "Le tranchant externe du pied"],
            correct: 3,
            explanation: "Pour un Yop Chagi, on utilise le tranchant externe du pied."
        },
        // Poomse
        {
            type: "poomse",
            question: "Quel est le premier poomse que l'on apprend ?",
            options: ["Poomse 1", "Poomse 2", "Poomse 3", "Kibon"],
            correct: 0,
            explanation: "Le Poomse 1 est le premier poomse que l'on apprend en Taekwondo."
        },
        {
            type: "poomse",
            question: "Combien de mouvements composent généralement un poomse ?",
            options: ["10-15", "15-25", "25-35", "35-50"],
            correct: 2,
            explanation: "Un poomse comprend généralement entre 25 et 35 mouvements."
        },
        {
            type: "poomse",
            question: "Quelle forme géométrique suit généralement un poomse ?",
            options: ["Un cercle", "Une ligne droite", "Un triangle", "Un carré"],
            correct: 2,
            explanation: "Un poomse suit généralement une forme triangulaire sur le sol."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedQuestions = [];
    let userAnswers = [];

    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const scoreElement = document.getElementById("score");
    const progressElement = document.getElementById("progress");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");
    const restartButton = document.getElementById("restart-btn");
    const startButton = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultsScreen = document.getElementById("results-screen");

    // Fonction pour sélectionner 10 questions aléatoires
    function selectRandomQuestions() {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        selectedQuestions = shuffled.slice(0, 10);
        userAnswers = [];
        currentQuestionIndex = 0;
        score = 0;
    }

    // Fonction pour afficher une question
    function displayQuestion() {
        if (currentQuestionIndex >= selectedQuestions.length) {
            showResults();
            return;
        }

        const question = selectedQuestions[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsContainer.innerHTML = "";

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "option-btn";
            button.textContent = option;
            button.addEventListener("click", () => selectAnswer(index));
            optionsContainer.appendChild(button);
        });

        // Mettre à jour la progression
        progressElement.textContent = `Question ${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
        scoreElement.textContent = `Score: ${score} / ${selectedQuestions.length}`;
        
        feedbackElement.textContent = "";
        feedbackElement.className = "feedback";
        nextButton.style.display = "none";
    }

    // Fonction pour sélectionner une réponse
    function selectAnswer(selectedIndex) {
        const question = selectedQuestions[currentQuestionIndex];
        const buttons = optionsContainer.querySelectorAll(".option-btn");
        
        // Désactiver tous les boutons
        buttons.forEach(btn => btn.disabled = true);

        // Enregistrer la réponse
        userAnswers.push(selectedIndex);

        // Vérifier la réponse
        if (selectedIndex === question.correct) {
            score++;
            buttons[selectedIndex].classList.add("correct");
            feedbackElement.textContent = "✓ Correct ! " + question.explanation;
            feedbackElement.classList.add("correct-feedback");
        } else {
            buttons[selectedIndex].classList.add("incorrect");
            buttons[question.correct].classList.add("correct");
            feedbackElement.textContent = "✗ Incorrect. " + question.explanation;
            feedbackElement.classList.add("incorrect-feedback");
        }

        nextButton.style.display = "block";
    }

    // Fonction pour passer à la question suivante
    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    // Fonction pour afficher les résultats
    function showResults() {
        quizScreen.style.display = "none";
        resultsScreen.style.display = "block";

        const percentage = Math.round((score / selectedQuestions.length) * 100);
        const resultsScore = document.getElementById("results-score");
        const resultsPercentage = document.getElementById("results-percentage");
        const resultsMessage = document.getElementById("results-message");
        const resultsDetails = document.getElementById("results-details");

        resultsScore.textContent = `${score} / ${selectedQuestions.length}`;
        resultsPercentage.textContent = `${percentage}%`;

        let message = "";
        if (percentage >= 90) {
            message = "Excellent ! Vous maîtrisez parfaitement le Taekwondo ! 🥇";
        } else if (percentage >= 70) {
            message = "Très bien ! Vous avez de bonnes connaissances ! 🥈";
        } else if (percentage >= 50) {
            message = "Pas mal ! Continuez à vous entraîner ! 🥉";
        } else {
            message = "Continuez à apprendre ! La pratique fait la différence ! 💪";
        }
        resultsMessage.textContent = message;

        // Afficher les détails
        resultsDetails.innerHTML = "";
        selectedQuestions.forEach((question, index) => {
            const detail = document.createElement("div");
            detail.className = "result-detail";
            const isCorrect = userAnswers[index] === question.correct;
            detail.innerHTML = `
                <div class="result-question">${index + 1}. ${question.question}</div>
                <div class="result-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓' : '✗'} Votre réponse: ${question.options[userAnswers[index]]}
                    ${!isCorrect ? `<br>✓ Bonne réponse: ${question.options[question.correct]}` : ''}
                </div>
            `;
            resultsDetails.appendChild(detail);
        });
    }

    // Fonction pour démarrer le quiz
    function startQuiz() {
        selectRandomQuestions();
        startScreen.style.display = "none";
        quizScreen.style.display = "block";
        displayQuestion();
    }

    // Fonction pour redémarrer le quiz
    function restartQuiz() {
        resultsScreen.style.display = "none";
        startScreen.style.display = "block";
    }

    // Event listeners
    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", nextQuestion);
    restartButton.addEventListener("click", restartQuiz);
});
