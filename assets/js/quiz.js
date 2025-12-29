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
            },
            {
                question: "Que signifie 'Tchaliot' (ou 'Charyeot') en français ?",
                options: ["Garde à vous", "Saluez", "Position de départ", "Commencez"],
                correct: 0,
                explanation: "Tchaliot (ou Charyeot) signifie 'garde à vous' en coréen."
            },
            {
                question: "Que signifie 'Kyongnye' (ou 'Gyeongnye') en français ?",
                options: ["Garde à vous", "Saluez", "Position de départ", "Commencez"],
                correct: 1,
                explanation: "Kyongnye (ou Gyeongnye) signifie 'saluez' en coréen."
            },
            {
                question: "Que signifie 'Jumbi' (ou 'Junbi') en français ?",
                options: ["Garde à vous", "Saluez", "Position de départ", "Commencez"],
                correct: 2,
                explanation: "Jumbi (ou Junbi) signifie 'position de départ' en coréen."
            },
            {
                question: "Que signifie 'Maki' (ou 'Makki') en français ?",
                options: ["Blocage", "Coup de pied", "Position", "Attaque"],
                correct: 0,
                explanation: "Maki (ou Makki) signifie 'blocage' en coréen."
            },
            {
                question: "Que signifie 'Tchagui' (ou 'Chagi') en français ?",
                options: ["Coup de pied", "Coup de poing", "Blocage", "Position"],
                correct: 0,
                explanation: "Tchagui (ou Chagi) signifie 'coup de pied' en coréen."
            },
            {
                question: "Que signifie 'Seugui' (ou 'Seogi') en français ?",
                options: ["Position", "Coup de pied", "Blocage", "Attaque"],
                correct: 0,
                explanation: "Seugui (ou Seogi) signifie 'position' en coréen."
            },
            {
                question: "Que signifie 'Tie' (ou 'Tti') en français ?",
                options: ["Ceinture", "Tenue", "Salle", "Cri"],
                correct: 0,
                explanation: "Tie (ou Tti) signifie 'ceinture' en coréen."
            },
            {
                question: "Que signifie 'Kihap' en français ?",
                options: ["Cri", "Salut", "Position", "Commencez"],
                correct: 0,
                explanation: "Kihap signifie 'cri' en coréen."
            },
            {
                question: "Que signifie 'Dwiro Dora' (ou 'Dwiro Dora') en français ?",
                options: ["Commencez", "Retournez-vous", "Garde à vous", "Saluez"],
                correct: 1,
                explanation: "Dwiro Dora signifie 'retournez-vous' en coréen."
            },
            {
                question: "Que signifie 'Shijak' (ou 'Sijak') en français ?",
                options: ["Commencez", "Arrêtez", "Garde à vous", "Retournez-vous"],
                correct: 0,
                explanation: "Shijak (ou Sijak) signifie 'commencez' en coréen."
            },
            {
                question: "Que signifie 'Youkeupja' (ou 'Yeokeupja') en français ?",
                options: ["Pratiquant avant la ceinture noire", "Pratiquant après la ceinture noire", "Maître", "Instructeur"],
                correct: 0,
                explanation: "Youkeupja (ou Yeokeupja) signifie 'pratiquant avant la ceinture noire' (grades Gup)."
            },
            {
                question: "Que signifie 'Youdanja' (ou 'Yeodanja') en français ?",
                options: ["Pratiquant avant la ceinture noire", "Pratiquant après la ceinture noire", "Maître", "Instructeur"],
                correct: 1,
                explanation: "Youdanja (ou Yeodanja) signifie 'pratiquant après la ceinture noire' (grades Dan)."
            },
            {
                question: "Que signifie 'Annyeonghaseyo' en français ?",
                options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
                correct: 0,
                explanation: "Annyeonghaseyo signifie 'bonjour' en coréen (formule de politesse)."
            },
            {
                question: "Que signifie 'Ye' (ou 'Ne') en français ?",
                options: ["Oui", "Non", "Merci", "Bonjour"],
                correct: 0,
                explanation: "Ye (ou Ne) signifie 'oui' en coréen."
            },
            {
                question: "Que signifie 'Anio' en français ?",
                options: ["Oui", "Non", "Merci", "Bonjour"],
                correct: 1,
                explanation: "Anio signifie 'non' en coréen."
            },
            {
                question: "Que signifie 'Jebal' en français ?",
                options: ["S'il vous plaît", "Merci", "Bonjour", "Au revoir"],
                correct: 0,
                explanation: "Jebal signifie 's'il vous plaît' en coréen."
            },
            {
                question: "Que signifie 'Gamsahabnida' en français ?",
                options: ["Merci", "Bonjour", "Au revoir", "S'il vous plaît"],
                correct: 0,
                explanation: "Gamsahabnida signifie 'merci' en coréen (formule de politesse)."
            },
            {
                question: "Que signifie 'Kyorugui' en français ?",
                options: ["Combat", "Forme", "Position", "Blocage"],
                correct: 0,
                explanation: "Kyorugui (ou Gyeorugi) signifie 'combat' en coréen."
            },
            {
                question: "Comment dit-on 'un' en coréen (comptage) ?",
                options: ["Hana", "Doul", "Set", "Net"],
                correct: 0,
                explanation: "En coréen, 'un' se dit 'Hana' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'deux' en coréen (comptage) ?",
                options: ["Hana", "Doul", "Set", "Net"],
                correct: 1,
                explanation: "En coréen, 'deux' se dit 'Doul' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'trois' en coréen (comptage) ?",
                options: ["Hana", "Doul", "Set", "Net"],
                correct: 2,
                explanation: "En coréen, 'trois' se dit 'Set' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'quatre' en coréen (comptage) ?",
                options: ["Net", "Dasot", "Yosot", "Ilgop"],
                correct: 0,
                explanation: "En coréen, 'quatre' se dit 'Net' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'cinq' en coréen (comptage) ?",
                options: ["Net", "Dasot", "Yosot", "Ilgop"],
                correct: 1,
                explanation: "En coréen, 'cinq' se dit 'Dasot' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'six' en coréen (comptage) ?",
                options: ["Dasot", "Yosot", "Ilgop", "Yeudol"],
                correct: 1,
                explanation: "En coréen, 'six' se dit 'Yosot' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'sept' en coréen (comptage) ?",
                options: ["Yosot", "Ilgop", "Yeudol", "Ahop"],
                correct: 1,
                explanation: "En coréen, 'sept' se dit 'Ilgop' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'huit' en coréen (comptage) ?",
                options: ["Ilgop", "Yeudol", "Ahop", "Yeul"],
                correct: 1,
                explanation: "En coréen, 'huit' se dit 'Yeudol' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'neuf' en coréen (comptage) ?",
                options: ["Yeudol", "Ahop", "Yeul", "Hana"],
                correct: 1,
                explanation: "En coréen, 'neuf' se dit 'Ahop' (comptage natif coréen)."
            },
            {
                question: "Comment dit-on 'dix' en coréen (comptage) ?",
                options: ["Ahop", "Yeul", "Hana", "Doul"],
                correct: 1,
                explanation: "En coréen, 'dix' se dit 'Yeul' (comptage natif coréen)."
            },
            {
                question: "Que signifie 'Alé Maki' (ou 'Arae Makki') en français ?",
                options: ["Blocage en bas", "Blocage niveau moyen", "Blocage niveau tête", "Blocage latéral"],
                correct: 0,
                explanation: "Alé Maki (ou Arae Makki) signifie 'blocage en bas'."
            },
            {
                question: "Que signifie 'Momtong Maki' (ou 'Momtong Makki') en français ?",
                options: ["Blocage en bas", "Blocage niveau moyen", "Blocage niveau tête", "Blocage latéral"],
                correct: 1,
                explanation: "Momtong Maki (ou Momtong Makki) signifie 'blocage niveau moyen' (plexus)."
            },
            {
                question: "Que signifie 'Eulgoul Maki' (ou 'Eolgul Makki') en français ?",
                options: ["Blocage en bas", "Blocage niveau moyen", "Blocage niveau tête", "Blocage latéral"],
                correct: 2,
                explanation: "Eulgoul Maki (ou Eolgul Makki) signifie 'blocage niveau tête'."
            },
            {
                question: "Que signifie 'Sonnal Momtong Maki' en français ?",
                options: ["Blocage tranchant extérieur du bras avec renfort tranchant plexus", "Blocage descendant avec la paume", "Blocage niveau moyen avec l'extérieur du bras", "Blocage niveau moyen"],
                correct: 0,
                explanation: "Sonnal Momtong Maki (ou Sonnal Momtong Makki) est le blocage tranchant extérieur du bras avec renfort tranchant plexus."
            },
            {
                question: "Que signifie 'Batangson Nelyeu Maki' en français ?",
                options: ["Blocage tranchant extérieur du bras", "Blocage descendant avec la paume niveau plexus", "Blocage niveau moyen avec l'extérieur du bras", "Blocage niveau tête"],
                correct: 1,
                explanation: "Batangson Nelyeu Maki (ou Batangson Naeryeo Makki) est le blocage descendant avec la paume, niveau plexus."
            },
            {
                question: "Que signifie 'Momtong Bakkat Maki' en français ?",
                options: ["Blocage tranchant extérieur du bras", "Blocage descendant avec la paume", "Blocage niveau moyen avec l'extérieur du bras", "Blocage niveau tête"],
                correct: 2,
                explanation: "Momtong Bakkat Maki (ou Momtong Bakkat Makki) est le blocage niveau moyen avec l'extérieur du bras."
            },
            {
                question: "Que signifie 'Han Sonnal Eulgoul Pitreu Maki' en français ?",
                options: ["Blocage tranchant de la main niveau visage", "Blocage niveau moyen", "Blocage en bas", "Blocage avec la paume"],
                correct: 0,
                explanation: "Han Sonnal Eulgoul Pitreu Maki (ou Han Sonnal Eolgul Bitureo Makki) est le blocage tranchant de la main niveau visage."
            },
            {
                question: "Que signifie 'Eulgoul Bakkat Maki' en français ?",
                options: ["Blocage extérieur de l'avant-bras niveau tête", "Blocage niveau moyen", "Blocage en bas", "Blocage avec la paume"],
                correct: 0,
                explanation: "Eulgoul Bakkat Maki (ou Eolgul Bakkat Makki) est le blocage extérieur de l'avant-bras niveau tête."
            },
            {
                question: "Que signifie 'Ale Hetcheu Maki' (ou 'Arae Hechyo Makki') en français ?",
                options: ["Double blocage Ale Maki", "Blocage niveau moyen", "Blocage niveau tête", "Blocage avec la paume"],
                correct: 0,
                explanation: "Ale Hetcheu Maki (ou Arae Hechyo Makki) est le double blocage Ale Maki."
            },
            {
                question: "Que signifie 'Batangson Momtong Maki' en français ?",
                options: ["Blocage niveau moyen avec la paume de la main", "Blocage en bas", "Blocage niveau tête", "Blocage tranchant"],
                correct: 0,
                explanation: "Batangson Momtong Maki (ou Batangson Momtong Makki) est le blocage niveau moyen avec la paume de la main."
            },
            {
                question: "Que signifie 'Sonnal Alé Maki' en français ?",
                options: ["Blocage en bas avec le tranchant extérieur", "Blocage niveau moyen", "Blocage niveau tête", "Blocage avec la paume"],
                correct: 0,
                explanation: "Sonnal Alé Maki (ou Sonnal Arae Makki) est le blocage en bas avec le tranchant extérieur."
            },
            {
                question: "Que signifie 'Keudeuro Batangson Momtong Maki' en français ?",
                options: ["Blocage niveau plexus avec la paume + soutien de l'autre bras", "Blocage en bas", "Blocage niveau tête", "Double blocage"],
                correct: 0,
                explanation: "Keudeuro Batangson Momtong Maki (ou Keudeuro Batangson Momtong Makki) est le blocage niveau plexus avec la paume + soutien de l'autre bras."
            },
            {
                question: "Que signifie 'Kawi Maki' en français ?",
                options: ["Blocage double simultané en ciseaux", "Blocage niveau moyen", "Blocage niveau tête", "Blocage en bas"],
                correct: 0,
                explanation: "Kawi Maki (ou Kawi Makki) est le blocage double simultané en ciseaux."
            },
            {
                question: "Que signifie 'Momtong Bakkat Palmok Hetcho Maki' en français ?",
                options: ["Double blocage en dégagement simultané des deux bras niveau moyen", "Blocage niveau tête", "Blocage en bas", "Blocage simple"],
                correct: 0,
                explanation: "Momtong Bakkat Palmok Hetcho Maki (ou Momtong Bakkat Palmok Hechyo Makki) est le double blocage en dégagement simultané des deux bras niveau moyen."
            },
            {
                question: "Que signifie 'Eutkeleu Alé Maki' en français ?",
                options: ["Blocage Ale Maki renforcé avec l'autre bras", "Blocage niveau moyen", "Blocage niveau tête", "Double blocage en ciseaux"],
                correct: 0,
                explanation: "Eutkeleu Alé Maki (ou Eutkeureo Arae Makki) est le blocage Ale Maki renforcé avec l'autre bras."
            },
            {
                question: "Que signifie 'Han Sonnal Momtong Maki' en français ?",
                options: ["Blocage en tranchant avec l'extérieur du bras niveau moyen", "Blocage en bas", "Blocage niveau tête", "Blocage avec la paume"],
                correct: 0,
                explanation: "Han Sonnal Momtong Maki (ou Han Sonnal Momtong Makki) est le blocage en tranchant avec l'extérieur du bras niveau moyen."
            },
            {
                question: "Que signifie 'Keudeuro Momtong Bakkat Maki' en français ?",
                options: ["Blocage Momtong Bakkat Maki avec protection du plexus poing fermé", "Blocage niveau tête", "Blocage en bas", "Double blocage"],
                correct: 0,
                explanation: "Keudeuro Momtong Bakkat Maki (ou Keudeuro Momtong Bakkat Makki) est le blocage Momtong Bakkat Maki avec protection du plexus poing fermé."
            },
            {
                question: "Que signifie 'Owe Santeul Maki' en français ?",
                options: ["Blocage double à deux niveaux", "Blocage niveau moyen", "Blocage niveau tête", "Blocage en bas"],
                correct: 0,
                explanation: "Owe Santeul Maki (ou Oe Santeul Makki) est le blocage double à deux niveaux."
            },
            {
                question: "Que signifie 'Keudeuro Ale Maki' en français ?",
                options: ["Blocage Alé Maki avec protection du plexus poings fermés", "Blocage niveau moyen", "Blocage niveau tête", "Double blocage en ciseaux"],
                correct: 0,
                explanation: "Keudeuro Ale Maki (ou Keudeuro Arae Makki) est le blocage Alé Maki avec protection du plexus poings fermés."
            },
            {
                question: "Que signifie 'Han Sonnal Momtong Bakkat Maki' en français ?",
                options: ["Blocage en tranchant niveau moyen avec le tranchant extérieur du bras", "Blocage en bas", "Blocage niveau tête", "Blocage avec la paume"],
                correct: 0,
                explanation: "Han Sonnal Momtong Bakkat Maki (ou Han Sonnal Momtong Bakkat Makki) est le blocage en tranchant niveau moyen avec le tranchant extérieur du bras."
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
            },
            {
                question: "Quel est le nom du coup de pied de face montant en Taekwondo ?",
                options: ["Ap Tchagui", "Yop Tchagui", "Nelyeu Tchagui", "Mireu Tchagui"],
                correct: 0,
                explanation: "Ap Tchagui (ou Ap Chagi) est le coup de pied de face montant."
            },
            {
                question: "Quel est le nom du coup de pied poussé en Taekwondo ?",
                options: ["Ap Tchagui", "Mireu Tchagui", "Nelyeu Tchagui", "Yop Tchagui"],
                correct: 1,
                explanation: "Mireu Tchagui (ou Mireo Chagi) est le coup de pied poussé."
            },
            {
                question: "Quel est le nom du coup de pied marteau en Taekwondo ?",
                options: ["Ap Tchagui", "Nelyeu Tchagui", "Yop Tchagui", "Fulyeu Tchagui"],
                correct: 1,
                explanation: "Nelyeu Tchagui (ou Naeryeo Chagi) est le coup de pied marteau (descendant)."
            },
            {
                question: "Quel est le nom du coup de pied ciseaux en Ap Tchagui (de face) ?",
                options: ["Tuyeu Ap Tchagui", "Nelyeu Tchagui", "Yop Tchagui", "Fulyeu Tchagui"],
                correct: 0,
                explanation: "Tuyeu Ap Tchagui (ou Twieo Ap Chagi) est le coup de pied ciseaux en Ap Tchagui (de face)."
            },
            {
                question: "Quel est le nom du coup de pied fouetté avec le dessous du pied niveau tête ?",
                options: ["Yop Tchagui", "Nelyeu Tchagui", "Fulyeu Tchagui", "Ap Tchagui"],
                correct: 2,
                explanation: "Fulyeu Tchagui (ou Bandeal Chagi) est le coup de pied fouetté avec le dessous du pied niveau tête."
            },
            {
                question: "Quel est le nom du coup de pied poussé sur le côté avec percussion ?",
                options: ["Ap Tchagui", "Yop Tchagui", "Nelyeu Tchagui", "Mireu Tchagui"],
                correct: 1,
                explanation: "Yop Tchagui (ou Yop Chagi) est le coup de pied poussé sur le côté avec percussion."
            },
            {
                question: "Quel est le nom du coup de pied ascendant en torsion, frappe avec le bol du pied ?",
                options: ["Biteureu Tchagui", "Ap Tchagui", "Yop Tchagui", "Nelyeu Tchagui"],
                correct: 0,
                explanation: "Biteureu Tchagui (ou Bitureo Chagi) est le coup de pied ascendant en torsion, frappe avec le bol du pied."
            },
            {
                question: "Qu'est-ce qu'un 360° Pit Tchagui ?",
                options: ["Un coup de pied retourné après une rotation complète", "Un coup de pied de face", "Un coup de pied latéral", "Un coup de pied descendant"],
                correct: 0,
                explanation: "Le 360° Pit Tchagui (ou 360° Bit Chagi) est un coup de pied retourné après une rotation complète de 360 degrés."
            },
            {
                question: "Quel est le nom du coup de genou niveau plexus avec poings fermés niveau cheville ?",
                options: ["Mourup Tchigui", "Ap Tchagui", "Yop Tchagui", "Nelyeu Tchagui"],
                correct: 0,
                explanation: "Mourup Tchigui (ou Mureup Chigi) est le coup de genou niveau plexus avec poings fermés niveau cheville."
            },
            {
                question: "Quel est le nom du coup de pied en demi-lune dans la paume ?",
                options: ["Pyo Jeuk Tchagui", "Ap Tchagui", "Yop Tchagui", "Biteureu Tchagui"],
                correct: 0,
                explanation: "Pyo Jeuk Tchagui (ou Pyojeok Chagi) est le coup de pied en demi-lune dans la paume."
            },
            {
                question: "Que signifie 'Tuyeu Tchagui' ?",
                options: ["Tous les coups de pieds 'classiques' sautés", "Coup de pied de face", "Coup de pied latéral", "Coup de pied retourné"],
                correct: 0,
                explanation: "Tuyeu Tchagui (ou Twieo Chagi) signifie tous les coups de pieds 'classiques' sautés."
            },
            {
                question: "Quel est le nom du double Ap Tchagui enchaînés sans poser ?",
                options: ["Dou Bal Dang Sang Ap Tchagui", "Momtong Dou Bon Jeleugui", "Ap Tchagui", "Tuyeu Tchagui"],
                correct: 0,
                explanation: "Dou Bal Dang Sang Ap Tchagui (ou Du Bal Dangsang Ap Chagi) est le double Ap Tchagui enchaînés sans poser."
            },
            {
                question: "Que signifie 'Han Gorum Nagamien Tchagui' ?",
                options: ["Tous les coups de pieds 'classiques' en pas chassé", "Coup de pied sauté", "Coup de pied de face", "Double coup de pied"],
                correct: 0,
                explanation: "Han Gorum Nagamien Tchagui (ou Han Georeum Nagamyeon Chagi) signifie tous les coups de pieds 'classiques' en pas chassé."
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
            },
            {
                question: "Quel est le nom du coup de poing niveau plexus en Taekwondo ?",
                options: ["Momtong Jeleugui", "Eulgoul Jeleugui", "Are Jeleugui", "Ap Jeleugui"],
                correct: 0,
                explanation: "Momtong Jeleugui (ou Momtong Jireugi) est le coup de poing niveau plexus."
            },
            {
                question: "Quel est le nom du coup de poing niveau tête en Taekwondo ?",
                options: ["Momtong Jeleugui", "Eulgoul Jeleugui", "Are Jeleugui", "Ap Jeleugui"],
                correct: 1,
                explanation: "Eulgoul Jeleugui (ou Eolgul Jireugi) est le coup de poing niveau tête."
            },
            {
                question: "Quel est le nom de la frappe avec le bout des doigts au plexus ?",
                options: ["Pyon Sonn Keut Séo Jeleugui", "Momtong Jeleugui", "Deung Joumok Ap Tchigui", "Jebipoum Sonnal Mok Tchigui"],
                correct: 0,
                explanation: "Pyon Sonn Keut Séo Jeleugui (ou Pyonsonkeut Seo Jireugi) est la frappe avec le bout des doigts au plexus."
            },
            {
                question: "Quel est le nom de la frappe en tranchant et blocage tête en tranchant en simultané ?",
                options: ["Jebipoum Sonnal Mok Tchigui", "Momtong Jeleugui", "Deung Joumok Ap Tchigui", "Pyon Sonn Keut Séo Jeleugui"],
                correct: 0,
                explanation: "Jebipoum Sonnal Mok Tchigui (ou Jebipoom Sonnal Mok Chigi) est la frappe en tranchant et blocage tête en tranchant en simultané."
            },
            {
                question: "Quel est le nom de la frappe avec le revers du poing niveau tête ?",
                options: ["Deung Joumok Ap Tchigui", "Momtong Jeleugui", "Eulgoul Jeleugui", "Pyon Sonn Keut Séo Jeleugui"],
                correct: 0,
                explanation: "Deung Joumok Ap Tchigui (ou Deung Jumeok Ap Chigi) est la frappe avec le revers du poing niveau tête."
            },
            {
                question: "Quel est le nom des deux coups de poing à la suite au plexus ?",
                options: ["Momtong Dou Bon Jeleugui", "Eulgoul Jeleugui", "Momtong Jeleugui", "Are Jeleugui"],
                correct: 0,
                explanation: "Momtong Dou Bon Jeleugui (ou Momtong Du Beon Jireugi) sont deux coups de poing à la suite au plexus."
            },
            {
                question: "Quel est le nom de la frappe avec le revers du poing + soutien de l'autre bras ?",
                options: ["Keudeuro Deung Joumok Ap Tchigui", "Deung Joumok Ap Tchigui", "Momtong Jeleugui", "Eulgoul Jeleugui"],
                correct: 0,
                explanation: "Keudeuro Deung Joumok Ap Tchigui (ou Keudeuro Deung Jumeok Ap Chigi) est la frappe avec le revers du poing + soutien de l'autre bras."
            },
            {
                question: "Quel est le nom du mouvement philosophique principe du Yin Yang niveau menton ?",
                options: ["Bo Joumok", "Momtong Jeleugui", "Eulgoul Jeleugui", "Pyon Sonn Keut Séo Jeleugui"],
                correct: 0,
                explanation: "Bo Joumok (ou Bo Jumeok) est le mouvement philosophique principe du Yin Yang niveau menton."
            },
            {
                question: "Quel est le nom de la frappe ascendante simultanée des deux poings ?",
                options: ["Dou Joumok Jetcho Jeleugui", "Momtong Dou Bon Jeleugui", "Momtong Jeleugui", "Eulgoul Jeleugui"],
                correct: 0,
                explanation: "Dou Joumok Jetcho Jeleugui (ou Du Jumeok Jjeokchyo Jireugi) est la frappe ascendante simultanée des deux poings."
            },
            {
                question: "Quel est le nom de la frappe circulaire avec le revers du poing ?",
                options: ["Joumok Eulgoul Bakkat Tchigui", "Deung Joumok Ap Tchigui", "Momtong Jeleugui", "Eulgoul Jeleugui"],
                correct: 0,
                explanation: "Joumok Eulgoul Bakkat Tchigui (ou Jumeok Eolgul Bakkat Chigi) est la frappe circulaire avec le revers du poing."
            },
            {
                question: "Quel est le nom de la frappe du coude en percussion dans la paume de la main ?",
                options: ["Palkoup Pyo Jeuk Tchigui", "Palkoup Dolyeu Tchigui", "Momtong Jeleugui", "Eulgoul Jeleugui"],
                correct: 0,
                explanation: "Palkoup Pyo Jeuk Tchigui (ou Palkup Pyojeok Chigi) est la frappe du coude en percussion dans la paume de la main."
            },
            {
                question: "Quel est le nom du coup de poing niveau moyen de profil ?",
                options: ["Momtong Yop Jeleugui", "Momtong Jeleugui", "Eulgoul Jeleugui", "Yop Jeleugui"],
                correct: 0,
                explanation: "Momtong Yop Jeleugui (ou Momtong Yop Jireugi) est le coup de poing niveau moyen de profil."
            },
            {
                question: "Quel est le nom de la frappe ascendante sous le menton (uppercut) avec l'autre bras plié, poing fermé contre le haut du biceps ?",
                options: ["Dang Kyeu Teuk Jeleugui", "Momtong Jeleugui", "Eulgoul Jeleugui", "Are Jeleugui"],
                correct: 0,
                explanation: "Dang Kyeu Teuk Jeleugui (ou Dangkyeo Teuk Jireugi) est la frappe ascendante sous le menton (uppercut), l'autre bras plié, poing fermé contre le haut du biceps."
            },
            {
                question: "Quel est le nom de la frappe circulaire avec le coude niveau tête ?",
                options: ["Palkoup Dolyeu Tchigui", "Palkoup Pyo Jeuk Tchigui", "Momtong Jeleugui", "Eulgoul Jeleugui"],
                correct: 0,
                explanation: "Palkoup Dolyeu Tchigui (ou Palkup Dollyeo Chigi) est la frappe circulaire avec le coude niveau tête."
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
            },
            {
                question: "Que signifie 'Ap Seugui' (ou 'Ap Seogi') en français ?",
                options: ["Petite position", "Grande position", "Position en L", "Position du cavalier"],
                correct: 0,
                explanation: "Ap Seugui (ou Ap Seogi) signifie 'petite position' (position avant courte)."
            },
            {
                question: "Que signifie 'Ap Koubi Seugui' (ou 'Ap Gubi Seogi') en français ?",
                options: ["Petite position", "Grande position", "Position en L", "Position du cavalier"],
                correct: 1,
                explanation: "Ap Koubi Seugui (ou Ap Gubi Seogi) signifie 'grande position' (position avant longue)."
            },
            {
                question: "Que signifie 'Dwitt Koubi Seugui' (ou 'Dwit Gubi Seogi') en français ?",
                options: ["Petite position", "Grande position", "Position en L", "Position du cavalier"],
                correct: 2,
                explanation: "Dwitt Koubi Seugui (ou Dwit Gubi Seogi) signifie 'position en L'."
            },
            {
                question: "Que signifie 'Naranhi Seugui' (ou 'Naranhi Seogi') en français ?",
                options: ["Pieds parallèles, distants d'un pied", "Position en L", "Position du cavalier", "Petite position"],
                correct: 0,
                explanation: "Naranhi Seugui (ou Naranhi Seogi) signifie 'pieds parallèles, distants d'un pied'."
            },
            {
                question: "Que signifie 'Beum Seugui' (ou 'Beom Seogi') en français ?",
                options: ["Position du tigre - pied arrière ouvert 30°, pied avant sur la pointe", "Position du cavalier", "Position en L", "Pieds parallèles"],
                correct: 0,
                explanation: "Beum Seugui (ou Beom Seogi) est la position du tigre : pied arrière ouvert 30°, pied avant sur la pointe."
            },
            {
                question: "Que signifie 'Moa Seugui' (ou 'Moa Seogi') en français ?",
                options: ["Pieds joints, jambes tendues", "Pieds parallèles", "Position en L", "Position du cavalier"],
                correct: 0,
                explanation: "Moa Seugui (ou Moa Seogi) signifie 'pieds joints, jambes tendues'."
            },
            {
                question: "Que signifie 'Joutchoum Seugui' (ou 'Juchum Seogi') en français ?",
                options: ["Position du cavalier - pieds parallèles distants d'un pas et demi", "Position du tigre", "Position en L", "Pieds joints"],
                correct: 0,
                explanation: "Joutchoum Seugui (ou Juchum Seogi) est la position du cavalier : pieds parallèles distants d'un pas et demi."
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
            },
            {
                question: "Quel est le nom coréen du Poomse 1 ?",
                options: ["Tae Geug Il Jang", "Tae Geug Yi Jang", "Tae Geug Sam Jang", "Tae Geug Sa Jang"],
                correct: 0,
                explanation: "Le Poomse 1 s'appelle 'Tae Geug Il Jang' (Il = un)."
            },
            {
                question: "Quel est le nom coréen du Poomse 2 ?",
                options: ["Tae Geug Il Jang", "Tae Geug Yi Jang", "Tae Geug Sam Jang", "Tae Geug Sa Jang"],
                correct: 1,
                explanation: "Le Poomse 2 s'appelle 'Tae Geug Yi Jang' (Yi = deux)."
            },
            {
                question: "Quel est le nom coréen du Poomse 4 ?",
                options: ["Tae Geug Il Jang", "Tae Geug Yi Jang", "Tae Geug Sam Jang", "Tae Geug Sa Jang"],
                correct: 3,
                explanation: "Le Poomse 4 s'appelle 'Tae Geug Sa Jang' (Sa = quatre)."
            },
            {
                question: "Quel est le nom coréen du Poomse 5 ?",
                options: ["Tae Geug O Jang", "Tae Geug Youk Jang", "Tae Geug Tchil Jang", "Tae Geug Pal Jang"],
                correct: 0,
                explanation: "Le Poomse 5 s'appelle 'Tae Geug O Jang' (O = cinq)."
            },
            {
                question: "Quel est le nom coréen du Poomse 6 ?",
                options: ["Tae Geug O Jang", "Tae Geug Youk Jang", "Tae Geug Tchil Jang", "Tae Geug Pal Jang"],
                correct: 1,
                explanation: "Le Poomse 6 s'appelle 'Tae Geug Youk Jang' (Youk = six)."
            },
            {
                question: "Quel est le nom coréen du Poomse 7 ?",
                options: ["Tae Geug O Jang", "Tae Geug Youk Jang", "Tae Geug Tchil Jang", "Tae Geug Pal Jang"],
                correct: 2,
                explanation: "Le Poomse 7 s'appelle 'Tae Geug Tchil Jang' (Tchil = sept)."
            },
            {
                question: "Quel est le nom coréen du Poomse 8 ?",
                options: ["Tae Geug O Jang", "Tae Geug Youk Jang", "Tae Geug Tchil Jang", "Tae Geug Pal Jang"],
                correct: 3,
                explanation: "Le Poomse 8 s'appelle 'Tae Geug Pal Jang' (Pal = huit)."
            },
            {
                question: "À quel niveau de ceinture apprend-on généralement le Poomse 6 ?",
                options: ["Ceinture bleue", "Ceinture violette", "Ceinture rouge", "Ceinture noire"],
                correct: 1,
                explanation: "Le Poomse 6 est généralement appris à partir de la ceinture violette."
            },
            {
                question: "À quel niveau de ceinture apprend-on généralement le Poomse 7 ?",
                options: ["Ceinture violette", "Ceinture rouge", "Ceinture rouge-noire", "Ceinture noire"],
                correct: 1,
                explanation: "Le Poomse 7 est généralement appris à partir de la ceinture rouge."
            },
            {
                question: "À quel niveau de ceinture apprend-on généralement le Poomse 8 ?",
                options: ["Ceinture rouge", "Ceinture rouge-noire", "Ceinture noire", "Ceinture noire 1er Dan"],
                correct: 1,
                explanation: "Le Poomse 8 est généralement appris à partir de la ceinture rouge-noire."
            }
        ],
        general: [
            {
                question: "Que signifie 'Taekwondo' ?",
                options: ["La voie du pied et du poing", "La voix du pied et du poing", "L'art du combat", "La danse du combat"],
                correct: 0,
                explanation: "Taekwondo signifie 'La voie du pied et du poing' (Tae = pied, Kwon = poing, Do = voie)."
            },
            {
                question: "De quel pays vient le Taekwondo ?",
                options: ["Japon", "Chine", "Corée du Sud", "Thaïlande"],
                correct: 2,
                explanation: "Le Taekwondo vient de Corée du Sud."
            },
            {
                question: "Quelle est la spécialité du Taekwondo ?",
                options: ["Les coups de poing", "Les coups de pied", "Les prises au sol", "Les blocages"],
                correct: 1,
                explanation: "La spécialité du Taekwondo est les coups de pied."
            },
            {
                question: "Comment s'appelle la tenue de Taekwondo ?",
                options: ["Kimono", "Gi", "Dobok", "Uniforme"],
                correct: 2,
                explanation: "La tenue de Taekwondo s'appelle le Dobok."
            },
            {
                question: "Quelles sont les valeurs du Taekwondo ?",
                options: ["Force, Vitesse, Endurance", "Fair-play, Humilité, Loyauté, Maîtrise de soi, Persévérance et Respect", "Victoire, Compétition, Excellence", "Discipline, Obéissance, Soumission"],
                correct: 1,
                explanation: "Les valeurs du Taekwondo sont : Fair-play, Humilité, Loyauté, Maîtrise de soi, Persévérance et Respect."
            },
            {
                question: "Combien y a-t-il de Dan après la ceinture noire club ?",
                options: ["5 Dan", "7 Dan", "9 Dan", "10 Dan"],
                correct: 2,
                explanation: "Il y a 9 Dan après la ceinture noire club. Un 10ème Dan existe mais n'est décerné qu'à titre posthume."
            },
            {
                question: "En quelle année a été fondée la FFTDA (Fédération Française de Taekwondo et Disciplines Associées) ?",
                options: ["1990", "1993", "1995", "1997"],
                correct: 2,
                explanation: "La FFTDA a été fondée en 1995."
            },
            {
                question: "Quel est le symbole du Poomse 1 (Tae Geug Il Jang) ?",
                options: ["Le Lac", "Le Ciel", "Le Feu", "Le Tonnerre"],
                correct: 1,
                explanation: "Le Poomse 1 (Tae Geug Il Jang) symbolise le Ciel, le début de la création de toute chose dans l'univers."
            },
            {
                question: "Quel est le symbole du Poomse 2 (Tae Geug Yi Jang) ?",
                options: ["Le Ciel", "Le Lac", "Le Feu", "Le Vent"],
                correct: 1,
                explanation: "Le Poomse 2 (Tae Geug Yi Jang) symbolise le Lac, la fermeté intérieure et la souplesse extérieure."
            },
            {
                question: "Quel est le symbole du Poomse 4 (Tae Geug Sa Jang) ?",
                options: ["Le Feu", "Le Vent", "Le Tonnerre", "L'Eau"],
                correct: 2,
                explanation: "Le Poomse 4 (Tae Geug Sa Jang) symbolise le Tonnerre, une puissance capable de se déchaîner en un éclair."
            },
            {
                question: "Qui a importé le Taekwondo en France et quand ?",
                options: ["Maître Lee Kwan Young en 1969", "Maître Park Jong Soo en 1972", "Maître Kim Young Ho en 1965", "Maître Choi Hong Hi en 1968"],
                correct: 0,
                explanation: "Maître Lee Kwan Young a importé le Taekwondo en France en 1969."
            },
            {
                question: "Quel est le sigle de la fédération mondiale de Taekwondo ?",
                options: ["KTA", "WT", "ITF", "WTF"],
                correct: 1,
                explanation: "WT signifie World Taekwondo. C'est la fédération mondiale de Taekwondo."
            },
            {
                question: "Quel est le contre mondial du Taekwondo ?",
                options: ["Le Kukkiwon", "Le Taekwondowon", "Le Dojangwon", "Le Dojang Center"],
                correct: 0,
                explanation: "Le Kukkiwon est le contre mondial du Taekwondo, situé à Séoul en Corée du Sud."
            },
            {
                question: "Quel équipement est nécessaire pour la pratique du Taekwondo ?",
                options: ["Dobok, ceinture, protège-pieds, protège-tibias, coquille, protège-dents, casque", "Kimono uniquement", "Dobok et ceinture uniquement", "Protège-pieds et protège-tibias uniquement"],
                correct: 0,
                explanation: "L'équipement nécessaire comprend : Dobok, ceinture, protège-pieds, protège-tibias, coquille, protège-dents, et casque (en compétition)."
            },
            {
                question: "Qui sont les Hwarangs et pourquoi ont-ils marqué l'histoire du Taekwondo ?",
                options: ["Des moines guerriers coréens qui ont développé les arts martiaux", "Des rois coréens", "Des champions modernes", "Des maîtres récents"],
                correct: 0,
                explanation: "Les Hwarangs étaient des jeunes guerriers coréens de la dynastie Silla qui ont développé et perfectionné les arts martiaux coréens, précurseurs du Taekwondo moderne."
            },
            {
                question: "Quel est le barème des points en compétition combat Taekwondo ?",
                options: ["1 point coup de poing, 2 points coup de pied corps, 3 points coup de pied tête, 4 points coup de pied retourné tête", "Tous les coups valent 1 point", "2 points coup de poing, 3 points coup de pied", "5 points pour un K.O."],
                correct: 0,
                explanation: "Le barème officiel : 1 point pour coup de poing au corps, 2 points pour coup de pied au corps, 3 points pour coup de pied à la tête, 4 points pour coup de pied retourné à la tête."
            },
            {
                question: "Quel est le symbole du Poomse 6 (Tae Geug Youk Jang) ?",
                options: ["Le Lac", "L'Eau", "Le Feu", "Le Vent"],
                correct: 1,
                explanation: "Le Poomse 6 (Tae Geug Youk Jang) symbolise l'Eau, la capacité à contourner tous les obstacles rencontrés."
            },
            {
                question: "Quel est le symbole du Poomse 7 (Tae Geug Tchil Jang) ?",
                options: ["La Montagne", "Le Feu", "Le Vent", "Le Tonnerre"],
                correct: 0,
                explanation: "Le Poomse 7 (Tae Geug Tchil Jang) symbolise la Montagne, la connaissance et la sagesse."
            },
            {
                question: "Quel est le symbole du Poomse 8 (Tae Geug Pal Jang) ?",
                options: ["La Terre - Le Yin", "Le Feu", "Le Vent", "Le Ciel"],
                correct: 0,
                explanation: "Le Poomse 8 (Tae Geug Pal Jang) symbolise la Terre - Le Yin, l'enracinement, mais aussi le début et la fin."
            },
            {
                question: "Quels sont des exemples de Français(es) médaillés olympiques en Taekwondo ?",
                options: ["Gwladys Epanqgue, Pascal Gentil, Anne-Caroline Graffe, Marlène Harnois, Althéa Laurin, Haby Niaré, Myriam Baverel", "Seulement des hommes", "Seulement des femmes", "Aucun Français médaillé"],
                correct: 0,
                explanation: "Plusieurs Français(es) ont été médaillés olympiques : Gwladys Epanqgue, Pascal Gentil, Anne-Caroline Graffe, Marlène Harnois, Althéa Laurin, Haby Niaré, Myriam Baverel."
            }
        ]
    };

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedQuestions = [];
    let userAnswers = [];
    let currentQuizType = "all";
    let selectedQuestionCount = 10; // Nombre de questions par défaut

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
    const questionCountButtons = document.querySelectorAll(".question-count-btn");
    const maxCountBtn = document.getElementById("max-count-btn");
    const maxCountInfo = document.getElementById("max-count-info");

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
    function selectRandomQuestions(type, count) {
        const availableQuestions = getQuestionsByType(type);
        const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
        const questionCount = (count === "max") ? availableQuestions.length : Math.min(count, availableQuestions.length);
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
            "all": { title: "Quiz Général", desc: "Choisissez le nombre de questions pour ce quiz mélangé sur tous les thèmes du Taekwondo." },
            "vocabulaire": { title: "Quiz Vocabulaire", desc: "Choisissez le nombre de questions sur le vocabulaire coréen du Taekwondo." },
            "coups-pied": { title: "Quiz Coups de Pied", desc: "Choisissez le nombre de questions sur les techniques de coups de pied." },
            "attaques-bras": { title: "Quiz Attaques Bras", desc: "Choisissez le nombre de questions sur les techniques d'attaque avec les bras." },
            "positions": { title: "Quiz Positions", desc: "Choisissez le nombre de questions sur les positions de base du Taekwondo." },
            "poomse": { title: "Quiz Poomse", desc: "Choisissez le nombre de questions sur les poomse (formes)." },
            "general": { title: "Quiz Général Taekwondo", desc: "Choisissez le nombre de questions sur l'histoire, les valeurs et les connaissances générales du Taekwondo." }
        };

        const info = quizInfo[type] || quizInfo["all"];
        startTitle.textContent = info.title;
        startDescription.textContent = info.desc;
        
        // Calculer le nombre maximum de questions disponibles
        const availableQuestions = getQuestionsByType(type);
        const maxQuestions = availableQuestions.length;
        
        // Mettre à jour le texte du bouton Max
        maxCountBtn.textContent = `Max (${maxQuestions})`;
        maxCountInfo.textContent = `${maxQuestions} questions disponibles pour ce quiz`;
        
        // Désactiver les boutons supérieurs au maximum
        questionCountButtons.forEach(btn => {
            const count = btn.getAttribute("data-count");
            if (count !== "max") {
                const countNum = parseInt(count);
                if (countNum > maxQuestions) {
                    btn.disabled = true;
                    btn.style.opacity = "0.5";
                    btn.style.cursor = "not-allowed";
                } else {
                    btn.disabled = false;
                    btn.style.opacity = "1";
                    btn.style.cursor = "pointer";
                }
            }
        });
        
        // Réinitialiser la sélection à 10 (ou au maximum si moins de 10)
        selectedQuestionCount = Math.min(10, maxQuestions);
        questionCountButtons.forEach(btn => {
            btn.classList.remove("selected");
            const count = btn.getAttribute("data-count");
            
            // Sélectionner 10 par défaut si disponible, sinon le maximum
            if (maxQuestions >= 10 && count === "10") {
                btn.classList.add("selected");
            } else if (maxQuestions < 10) {
                if (count === "max") {
                    btn.classList.add("selected");
                    selectedQuestionCount = maxQuestions;
                } else if (count !== "max" && parseInt(count) === maxQuestions) {
                    btn.classList.add("selected");
                    selectedQuestionCount = maxQuestions;
                }
            }
        });
        
        quizSelectScreen.style.display = "none";
        startScreen.style.display = "block";
    }

    // Fonction pour démarrer le quiz
    function startQuiz() {
        selectRandomQuestions(currentQuizType, selectedQuestionCount);
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

    // Event listeners pour les boutons de sélection du nombre de questions
    questionCountButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (this.disabled) return;
            
            // Retirer la sélection de tous les boutons
            questionCountButtons.forEach(btn => btn.classList.remove("selected"));
            
            // Ajouter la sélection au bouton cliqué
            this.classList.add("selected");
            
            // Mettre à jour le nombre de questions sélectionné
            const count = this.getAttribute("data-count");
            if (count === "max") {
                const availableQuestions = getQuestionsByType(currentQuizType);
                selectedQuestionCount = availableQuestions.length;
            } else {
                selectedQuestionCount = parseInt(count);
            }
        });
    });

    // Event listeners
    startButton.addEventListener("click", startQuiz);
    backButton.addEventListener("click", backToSelection);
    nextButton.addEventListener("click", nextQuestion);
    restartButton.addEventListener("click", restartQuiz);
});
