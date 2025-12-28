document.addEventListener("DOMContentLoaded", function() {
    // Base de données de questions sur le Taekwondo organisées par catégorie
    const allQuestions = {
        vocabulaire: [
            {
                question: "Que signifie 'Ap Chagi' en français ?",
                options: ["Coup de pied avant", "Coup de pied latéral", "Coup de pied arrière", "Coup de poing"],
                correct: 0,
                explanation: "Ap Chagi signifie 'coup de pied avant' en coréen."
            },
            {
                question: "Que signifie 'Yop Chagi' en français ?",
                options: ["Coup de pied avant", "Coup de pied latéral", "Coup de pied arrière", "Coup de poing"],
                correct: 1,
                explanation: "Yop Chagi signifie 'coup de pied latéral' en coréen."
            },
            {
                question: "Que signifie 'Dwit Chagi' en français ?",
                options: ["Coup de pied avant", "Coup de pied latéral", "Coup de pied arrière", "Coup de poing"],
                correct: 2,
                explanation: "Dwit Chagi signifie 'coup de pied arrière' en coréen."
            },
            {
                question: "Que signifie 'Makki' en français ?",
                options: ["Attaque", "Défense", "Position", "Coup de pied"],
                correct: 1,
                explanation: "Makki signifie 'défense' ou 'blocage' en coréen."
            },
            {
                question: "Que signifie 'Kibon' en français ?",
                options: ["Forme de base", "Coup de pied", "Position", "Attaque"],
                correct: 0,
                explanation: "Kibon signifie 'forme de base' ou 'fondamentaux' en coréen."
            },
            {
                question: "Que signifie 'Poomse' en français ?",
                options: ["Coup de pied", "Forme", "Position", "Défense"],
                correct: 1,
                explanation: "Poomse signifie 'forme' ou 'enchaînement de techniques' en coréen."
            },
            {
                question: "Que signifie 'Ap Seogi' en français ?",
                options: ["Position avant", "Position arrière", "Position latérale", "Position de combat"],
                correct: 0,
                explanation: "Ap Seogi signifie 'position avant' en coréen."
            },
            {
                question: "Que signifie 'Dwit Seogi' en français ?",
                options: ["Position avant", "Position arrière", "Position latérale", "Position de combat"],
                correct: 1,
                explanation: "Dwit Seogi signifie 'position arrière' en coréen."
            },
            {
                question: "Que signifie 'Jireugi' en français ?",
                options: ["Coup de poing", "Coup de pied", "Blocage", "Position"],
                correct: 0,
                explanation: "Jireugi signifie 'coup de poing' en coréen."
            },
            {
                question: "Que signifie 'Juchum Seogi' en français ?",
                options: ["Position du cavalier", "Position avant", "Position latérale", "Position de combat"],
                correct: 0,
                explanation: "Juchum Seogi signifie 'position du cavalier' en coréen."
            },
            {
                question: "Que signifie 'Chagi' en français ?",
                options: ["Coup de pied", "Coup de poing", "Blocage", "Position"],
                correct: 0,
                explanation: "Chagi signifie 'coup de pied' en coréen."
            },
            {
                question: "Que signifie 'Seogi' en français ?",
                options: ["Position", "Coup de pied", "Attaque", "Défense"],
                correct: 0,
                explanation: "Seogi signifie 'position' ou 'posture' en coréen."
            },
            {
                question: "Que signifie 'Dollyo' en français ?",
                options: ["Circulaire", "Latéral", "Avant", "Arrière"],
                correct: 0,
                explanation: "Dollyo signifie 'circulaire' ou 'tournant' en coréen."
            },
            {
                question: "Que signifie 'Bandae' en français ?",
                options: ["Contraire", "Même côté", "Avant", "Arrière"],
                correct: 0,
                explanation: "Bandae signifie 'contraire' en coréen."
            },
            {
                question: "Que signifie 'Baro' en français ?",
                options: ["Même côté", "Contraire", "Avant", "Arrière"],
                correct: 0,
                explanation: "Baro signifie 'même côté' en coréen."
            },
            {
                question: "Que signifie 'Dojang' en français ?",
                options: ["Salle d'entraînement", "Maître", "Élève", "Compétition"],
                correct: 0,
                explanation: "Dojang signifie 'salle d'entraînement' en coréen."
            },
            {
                question: "Que signifie 'Dobok' en français ?",
                options: ["Tenue d'entraînement", "Ceinture", "Salle", "Maître"],
                correct: 0,
                explanation: "Dobok signifie 'tenue d'entraînement' en coréen."
            },
            {
                question: "Que signifie 'Kibon Jakjeol' en français ?",
                options: ["Ordre fondamental", "Coup de pied", "Position", "Forme"],
                correct: 0,
                explanation: "Kibon Jakjeol signifie 'ordre fondamental' en coréen."
            }
        ],
        "coups-pied": [
            {
                question: "Quelle partie du pied utilise-t-on pour un Ap Chagi ?",
                options: ["Le talon", "La plante du pied", "Le dessus du pied", "Le côté du pied"],
                correct: 1,
                explanation: "Pour un Ap Chagi, on utilise la plante du pied (balles des orteils)."
            },
            {
                question: "Quelle partie du pied utilise-t-on pour un Yop Chagi ?",
                options: ["Le talon", "La plante du pied", "Le dessus du pied", "Le tranchant externe du pied"],
                correct: 3,
                explanation: "Pour un Yop Chagi, on utilise le tranchant externe du pied."
            },
            {
                question: "Quel est le nom du coup de pied circulaire en Taekwondo ?",
                options: ["Ap Chagi", "Dollyo Chagi", "Yop Chagi", "Dwit Chagi"],
                correct: 1,
                explanation: "Dollyo Chagi est le coup de pied circulaire en Taekwondo."
            },
            {
                question: "Quel est le nom du coup de pied crocheté en Taekwondo ?",
                options: ["Dollyo Chagi", "Huryo Chagi", "Ap Chagi", "Yop Chagi"],
                correct: 1,
                explanation: "Huryo Chagi est le coup de pied crocheté en Taekwondo."
            },
            {
                question: "Quel est le nom du coup de pied retourné en Taekwondo ?",
                options: ["Dwit Chagi", "Dollyo Chagi", "Bandal Chagi", "Twio Chagi"],
                correct: 2,
                explanation: "Bandal Chagi est le coup de pied retourné (crescent kick) en Taekwondo."
            },
            {
                question: "Quelle partie du pied utilise-t-on pour un Dollyo Chagi ?",
                options: ["Le talon", "La plante du pied", "Le dessus du pied", "Le côté du pied"],
                correct: 2,
                explanation: "Pour un Dollyo Chagi, on utilise le dessus du pied."
            },
            {
                question: "Quel est le nom du coup de pied sauté en Taekwondo ?",
                options: ["Twio Chagi", "Ap Chagi", "Yop Chagi", "Dwit Chagi"],
                correct: 0,
                explanation: "Twio Chagi est le coup de pied sauté en Taekwondo."
            },
            {
                question: "Dans quelle direction part principalement un Yop Chagi ?",
                options: ["Vers l'avant", "Sur le côté", "Vers l'arrière", "En cercle"],
                correct: 1,
                explanation: "Un Yop Chagi part sur le côté, d'où son nom 'latéral'."
            },
            {
                question: "Quel est le nom du coup de pied croisé ?",
                options: ["Kyeorugi Chagi", "Naejo Chagi", "Bakkat Chagi", "Deol Chagi"],
                correct: 1,
                explanation: "Naejo Chagi est le coup de pied croisé vers l'intérieur."
            },
            {
                question: "Quelle partie du pied utilise-t-on pour un Dwit Chagi ?",
                options: ["Le talon", "La plante du pied", "Le dessus du pied", "Le côté du pied"],
                correct: 0,
                explanation: "Pour un Dwit Chagi, on utilise le talon."
            },
            {
                question: "Quel est le nom du coup de pied en revers ?",
                options: ["Bandal Chagi", "Huryo Chagi", "Dwit Chagi", "Dollyo Chagi"],
                correct: 0,
                explanation: "Bandal Chagi est le coup de pied en revers (crescent kick)."
            },
            {
                question: "Combien de types de coups de pied principaux existe-t-il en Taekwondo ?",
                options: ["5-8", "10-15", "15-20", "20-25"],
                correct: 2,
                explanation: "Il existe environ 15-20 types de coups de pied principaux en Taekwondo."
            }
        ],
        "attaques-bras": [
            {
                question: "Que signifie 'Jireugi' en français ?",
                options: ["Coup de poing", "Blocage", "Position", "Coup de pied"],
                correct: 0,
                explanation: "Jireugi signifie 'coup de poing' en coréen."
            },
            {
                question: "Quel est le nom du coup de poing direct en Taekwondo ?",
                options: ["Ap Jireugi", "Dung Jireugi", "Sewo Jireugi", "Montong Jireugi"],
                correct: 0,
                explanation: "Ap Jireugi est le coup de poing direct vers l'avant."
            },
            {
                question: "Quel est le nom du coup de poing revers en Taekwondo ?",
                options: ["Dung Jireugi", "Ap Jireugi", "Montong Jireugi", "Sewo Jireugi"],
                correct: 0,
                explanation: "Dung Jireugi est le coup de poing revers (back fist)."
            },
            {
                question: "Quelle partie de la main utilise-t-on pour un Ap Jireugi ?",
                options: ["Les jointures", "Le talon de la main", "Le dos de la main", "Le tranchant"],
                correct: 0,
                explanation: "Pour un Ap Jireugi, on utilise les jointures des phalanges."
            },
            {
                question: "Quel est le nom du coup de coude en Taekwondo ?",
                options: ["Palkup", "Jireugi", "Makki", "Chagi"],
                correct: 0,
                explanation: "Palkup est le coup de coude en Taekwondo."
            },
            {
                question: "Quel est le nom du coup de poing au niveau moyen en Taekwondo ?",
                options: ["Montong Jireugi", "Are Jireugi", "Olgul Jireugi", "Ap Jireugi"],
                correct: 0,
                explanation: "Montong Jireugi est le coup de poing au niveau moyen (ventre)."
            },
            {
                question: "Quel est le nom du coup de poing au niveau haut en Taekwondo ?",
                options: ["Olgul Jireugi", "Montong Jireugi", "Are Jireugi", "Ap Jireugi"],
                correct: 0,
                explanation: "Olgul Jireugi est le coup de poing au niveau haut (visage)."
            },
            {
                question: "Quel est le nom du coup de poing au niveau bas en Taekwondo ?",
                options: ["Are Jireugi", "Montong Jireugi", "Olgul Jireugi", "Ap Jireugi"],
                correct: 0,
                explanation: "Are Jireugi est le coup de poing au niveau bas."
            },
            {
                question: "Que signifie 'Sewo Jireugi' ?",
                options: ["Coup de poing latéral", "Coup de poing avant", "Coup de poing revers", "Coup de poing montant"],
                correct: 0,
                explanation: "Sewo Jireugi signifie 'coup de poing latéral' en coréen."
            },
            {
                question: "Quelle est la position des poings dans un Jireugi de base ?",
                options: ["Paume vers le bas puis rotation", "Paume vers le haut", "Paume vers le côté", "Les jointures vers le bas"],
                correct: 0,
                explanation: "Dans un Jireugi de base, le poing part avec la paume vers le bas puis pivote lors de l'extension."
            }
        ],
        positions: [
            {
                question: "Que signifie 'Ap Seogi' en français ?",
                options: ["Position avant", "Position arrière", "Position latérale", "Position de combat"],
                correct: 0,
                explanation: "Ap Seogi signifie 'position avant' en coréen."
            },
            {
                question: "Que signifie 'Dwit Seogi' en français ?",
                options: ["Position avant", "Position arrière", "Position latérale", "Position de combat"],
                correct: 1,
                explanation: "Dwit Seogi signifie 'position arrière' en coréen."
            },
            {
                question: "Quelle est la position de base la plus utilisée en Taekwondo ?",
                options: ["Ap Seogi", "Dwit Seogi", "Juchum Seogi", "Kibon Seogi"],
                correct: 2,
                explanation: "Juchum Seogi (position du cavalier) est une position de base fondamentale."
            },
            {
                question: "Que signifie 'Juchum Seogi' en français ?",
                options: ["Position du cavalier", "Position avant", "Position latérale", "Position de combat"],
                correct: 0,
                explanation: "Juchum Seogi signifie 'position du cavalier' en coréen."
            },
            {
                question: "Quelle est la largeur des pieds dans une position Ap Seogi ?",
                options: ["Largeur des épaules", "Largeur des hanches", "Pieds joints", "Très large"],
                correct: 1,
                explanation: "Dans une position Ap Seogi, les pieds sont écartés d'environ la largeur des hanches."
            },
            {
                question: "Dans quelle direction regarde-t-on principalement dans une Dwit Seogi ?",
                options: ["Vers l'avant", "Vers l'arrière", "Vers le côté", "Vers le bas"],
                correct: 0,
                explanation: "Dans une Dwit Seogi, on regarde principalement vers l'avant malgré la position arrière."
            },
            {
                question: "Quel est le nom de la position de combat de base ?",
                options: ["Gyoroogi Seogi", "Ap Seogi", "Juchum Seogi", "Dwit Seogi"],
                correct: 0,
                explanation: "Gyoroogi Seogi est la position de combat de base."
            },
            {
                question: "Dans une position Juchum Seogi, comment sont placés les pieds ?",
                options: ["Très écartés, pieds parallèles", "Pieds joints", "Un pied devant l'autre", "Pieds croisés"],
                correct: 0,
                explanation: "Dans une position Juchum Seogi, les pieds sont très écartés et parallèles, comme à cheval."
            },
            {
                question: "Quel pourcentage du poids repose sur la jambe avant dans une Ap Seogi ?",
                options: ["30%", "50%", "70%", "90%"],
                correct: 2,
                explanation: "Dans une position Ap Seogi, environ 70% du poids repose sur la jambe avant."
            },
            {
                question: "Quel est le nom de la position sur un pied ?",
                options: ["Ipsun Seogi", "Ap Seogi", "Juchum Seogi", "Dwit Seogi"],
                correct: 0,
                explanation: "Ipsun Seogi est la position sur un pied (équilibre sur une jambe)."
            }
        ],
        poomse: [
            {
                question: "Quel est le premier poomse que l'on apprend ?",
                options: ["Poomse 1", "Poomse 2", "Poomse 3", "Kibon"],
                correct: 0,
                explanation: "Le Poomse 1 est le premier poomse que l'on apprend en Taekwondo."
            },
            {
                question: "Combien de mouvements composent généralement un poomse ?",
                options: ["10-15", "15-25", "25-35", "35-50"],
                correct: 2,
                explanation: "Un poomse comprend généralement entre 25 et 35 mouvements."
            },
            {
                question: "Quelle forme géométrique suit généralement un poomse ?",
                options: ["Un cercle", "Une ligne droite", "Un triangle", "Un carré"],
                correct: 2,
                explanation: "Un poomse suit généralement une forme triangulaire sur le sol."
            },
            {
                question: "Combien de poomse existe-t-il dans le Taekwondo traditionnel ?",
                options: ["6", "8", "10", "12"],
                correct: 1,
                explanation: "Il existe 8 poomse dans le Taekwondo traditionnel (Poomse 1 à 8)."
            },
            {
                question: "À quel niveau de ceinture apprend-on généralement le Poomse 1 ?",
                options: ["Ceinture blanche", "Ceinture jaune", "Ceinture orange", "Ceinture verte"],
                correct: 1,
                explanation: "Le Poomse 1 est généralement appris à partir de la ceinture jaune."
            },
            {
                question: "Quel est le but principal des poomse ?",
                options: ["Combat réel", "Mémorisation des techniques", "Compétition", "Échauffement uniquement"],
                correct: 1,
                explanation: "Les poomse servent principalement à mémoriser et perfectionner les techniques de base."
            },
            {
                question: "Combien de directions principales un poomse couvre-t-il généralement ?",
                options: ["4", "8", "12", "16"],
                correct: 1,
                explanation: "Un poomse couvre généralement 8 directions principales (les 8 points cardinaux)."
            },
            {
                question: "Quel poomse est considéré comme le plus complexe ?",
                options: ["Poomse 8", "Poomse 5", "Poomse 3", "Poomse 1"],
                correct: 0,
                explanation: "Le Poomse 8 est généralement le plus complexe des 8 poomse de base."
            },
            {
                question: "Quelle est la durée approximative d'exécution d'un poomse ?",
                options: ["30-45 secondes", "1-2 minutes", "2-3 minutes", "3-5 minutes"],
                correct: 1,
                explanation: "Un poomse prend généralement entre 1 et 2 minutes à exécuter correctement."
            },
            {
                question: "Dans un poomse, que signifie 'Kihap' ?",
                options: ["Cri d'attaque", "Salut", "Position", "Fin du poomse"],
                correct: 0,
                explanation: "Kihap est le cri d'attaque utilisé à certains moments dans un poomse."
            }
        ]
    };

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedQuestions = [];
    let userAnswers = [];
    let currentQuizType = "all";

    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const scoreElement = document.getElementById("score");
    const progressElement = document.getElementById("progress");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");
    const restartButton = document.getElementById("restart-btn");
    const startButton = document.getElementById("start-btn");
    const backButton = document.getElementById("back-btn");
    const startScreen = document.getElementById("start-screen");
    const quizSelectScreen = document.getElementById("quiz-select-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultsScreen = document.getElementById("results-screen");
    const startTitle = document.getElementById("start-title");
    const startDescription = document.getElementById("start-description");
    const quizTypeButtons = document.querySelectorAll(".quiz-type-btn");

    // Fonction pour obtenir toutes les questions d'un type spécifique
    function getQuestionsByType(type) {
        if (type === "all") {
            // Mélanger toutes les questions de toutes les catégories
            const all = [];
            Object.values(allQuestions).forEach(category => {
                all.push(...category);
            });
            return all;
        }
        return allQuestions[type] || [];
    }

    // Fonction pour sélectionner des questions aléatoires
    function selectRandomQuestions(type) {
        const availableQuestions = getQuestionsByType(type);
        const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
        const questionCount = Math.min(10, availableQuestions.length);
        selectedQuestions = shuffled.slice(0, questionCount);
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

    // Fonction pour afficher l'écran de démarrage avec le bon type de quiz
    function showStartScreen(type) {
        currentQuizType = type;
        
        const quizInfo = {
            "all": { title: "Quiz Général", desc: "Ce quiz contient 10 questions mélangées sur tous les thèmes du Taekwondo." },
            "vocabulaire": { title: "Quiz Vocabulaire", desc: "Ce quiz contient 10 questions sur le vocabulaire coréen du Taekwondo." },
            "coups-pied": { title: "Quiz Coups de Pied", desc: "Ce quiz contient 10 questions sur les techniques de coups de pied." },
            "attaques-bras": { title: "Quiz Attaques Bras", desc: "Ce quiz contient 10 questions sur les techniques d'attaque avec les bras." },
            "positions": { title: "Quiz Positions", desc: "Ce quiz contient 10 questions sur les positions de base du Taekwondo." },
            "poomse": { title: "Quiz Poomse", desc: "Ce quiz contient 10 questions sur les poomse (formes)." }
        };

        const info = quizInfo[type] || quizInfo["all"];
        startTitle.textContent = info.title;
        startDescription.textContent = info.desc;
        
        quizSelectScreen.style.display = "none";
        startScreen.style.display = "block";
    }

    // Fonction pour démarrer le quiz
    function startQuiz() {
        selectRandomQuestions(currentQuizType);
        startScreen.style.display = "none";
        quizScreen.style.display = "block";
        displayQuestion();
    }

    // Fonction pour retourner à la sélection
    function backToSelection() {
        startScreen.style.display = "none";
        quizSelectScreen.style.display = "block";
    }

    // Fonction pour redémarrer le quiz
    function restartQuiz() {
        resultsScreen.style.display = "none";
        quizSelectScreen.style.display = "block";
    }

    // Event listeners pour les boutons de sélection de quiz
    quizTypeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const quizType = this.getAttribute("data-quiz");
            showStartScreen(quizType);
        });
    });

    // Event listeners
    startButton.addEventListener("click", startQuiz);
    backButton.addEventListener("click", backToSelection);
    nextButton.addEventListener("click", nextQuestion);
    restartButton.addEventListener("click", restartQuiz);
});
