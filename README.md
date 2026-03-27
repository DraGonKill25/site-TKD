# SP Training TaeKwonDo 🥋

Site web éducatif dédié à l'apprentissage du Taekwondo, proposant des ressources complètes pour améliorer ses connaissances sur les techniques, le vocabulaire coréen, les poomse, une notation type compétition et bien plus encore.

## 📋 Description

SP Training TaeKwonDo est une plateforme interactive d'apprentissage du Taekwondo offrant :
- Des ressources PDF sur les bases techniques
- Des guides sur les poomse (formes)
- Un lexique du vocabulaire coréen
- Une page **Compétition** pour noter un poomsae selon une grille proche des règles WT (technique / présentation sur 10)
- Des quiz interactifs pour tester ses connaissances

## ✨ Fonctionnalités

### 🥊 Les Bases du Taekwondo
Accès à des documents PDF couvrant :
- Les techniques d'attaque (bras)
- Les coups de pied
- Les positions de base
- La forme Kibon (fondamentaux)

### 🥋 Les Poomse
Guides complets pour les 8 poomse traditionnels (Poomse 1 à 8), avec documents PDF détaillés pour chaque enchaînement.

### 🏆 Compétition (notation Poomsae)
Page [`compet.html`](compet.html) : interface utilisable sur mobile (déductions technique, critères de présentation sur 2 points chacun, ajustement fin de la note, enregistrement avec libellé optionnel). L’historique des notes est stocké **localement dans le navigateur** (`localStorage`), sans serveur.

### 📚 Vocabulaire
Lexique officiel du Taekwondo avec tous les termes coréens essentiels et leurs traductions.

### ❓ Quiz Interactifs
Système de quiz dynamique permettant de :
- Tester ses connaissances sur le vocabulaire coréen
- Réviser les techniques et positions
- S'entraîner sur les poomse
- Obtenir des explications détaillées pour chaque réponse
- Suivre sa progression avec un système de score

## 🗂️ Structure du projet

```
site-TKD/
├── index.html              # Page d'accueil
├── bases.html              # Section des bases du Taekwondo
├── poomse.html             # Section des poomse
├── compet.html             # Notation Poomsae (type compétition)
├── vocabulaire.html        # Lexique du vocabulaire
├── quiz.html               # Quiz interactif
├── assets/
│   ├── css/
│   │   └── style.css       # Feuille de style principale
│   └── js/
│       ├── script.js       # Script principal (animations, PDF viewer, menu)
│       ├── quiz.js         # Logique du quiz
│       └── compet.js       # Logique de la page Compétition
├── pdf/
│   ├── poomse/             # PDF des poomse (1 à 8)
│   ├── attaquebras.pdf
│   ├── coupdepied.pdf
│   ├── forme-kibon.pdf
│   ├── positions.pdf
│   └── Lexique_Officiel.pdf
└── images/                 # Ressources images
```

## 🚀 Utilisation

### Installation

1. Clonez ou téléchargez le projet :
```bash
git clone <url-du-repo>
cd site-TKD
```

2. Ouvrez le fichier `index.html` dans votre navigateur web préféré.

Aucune installation supplémentaire n'est requise ! Le site utilise uniquement HTML, CSS et JavaScript vanilla, avec GSAP (chargé via CDN) pour les animations.

### Navigation

- **Page d'accueil** (`index.html`) : Vue d'ensemble et point d'entrée
- **Les Bases** (`bases.html`) : Techniques fondamentales avec visualiseur PDF
- **Poomse** (`poomse.html`) : Guides des 8 poomse
- **Compétition** (`compet.html`) : Notation Poomsae (WT) et historique local
- **Vocabulaire** (`vocabulaire.html`) : Lexique complet
- **Quiz** (`quiz.html`) : Testez vos connaissances

## 🛠️ Technologies utilisées

- **HTML5** : Structure des pages
- **CSS3** : Styling moderne avec thème sombre
- **JavaScript (ES6+)** : Interactivité et logique métier
- **GSAP** (GreenSock Animation Platform) : Animations fluides
- **PDF.js** : Visualisation des documents PDF (via les navigateurs modernes)
- **Web Storage (localStorage)** : Persistance de l’historique des notes sur la page Compétition

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**DraGonKill25**

Développé en 2025 pour faciliter l'apprentissage du Taekwondo.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ouvrir une issue pour signaler un bug ou proposer une amélioration
- Soumettre une pull request avec vos améliorations

## 📝 Notes

- Les documents PDF doivent être placés dans le dossier `pdf/` pour être accessibles
- Le site est optimisé pour les navigateurs modernes (Chrome, Firefox, Edge, Safari)
- Le design est responsive et s'adapte aux différentes tailles d'écran
- Les données d’historique de **Compétition** restent sur l’appareil (navigateur) ; les effacer ou changer de navigateur supprime cet historique

---

**Bon entraînement ! 💪🥋**
