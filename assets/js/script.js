document.addEventListener("DOMContentLoaded", function() {
    // Menu hamburger pour mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".header nav, #menu");
    const header = document.querySelector(".header, #header");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function(event) {
            event.stopPropagation();
            nav.classList.toggle("active");
        });

        // Fermer le menu quand on clique sur un lien
        const navLinks = nav.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                nav.classList.remove("active");
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener("click", function(event) {
            if (header && !header.contains(event.target) && nav.classList.contains("active")) {
                nav.classList.remove("active");
            }
        });
    }

    // Navbar rétractable sur mobile (cache/montre au scroll)
    if (header) {
        let lastScrollTop = 0;
        let ticking = false;

        function handleScroll() {
            if (window.innerWidth > 768) return; // Seulement sur mobile
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scroll vers le bas - cacher la navbar
                header.classList.add("header-hidden");
            } else {
                // Scroll vers le haut - montrer la navbar
                header.classList.remove("header-hidden");
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            ticking = false;
        }

        window.addEventListener("scroll", function() {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        }, { passive: true });

        // Reset sur resize
        window.addEventListener("resize", function() {
            if (window.innerWidth > 768) {
                header.classList.remove("header-hidden");
            }
        });
    }

    // Animations GSAP uniquement si GSAP est disponible (page d'accueil)
    if (typeof gsap !== 'undefined') {
        gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
        gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
        gsap.from(".btn", { duration: 1, scale: 0, opacity: 0, delay: 1 });
        // Animation des features avec garantie que l'opacité reste à 1
        const features = document.querySelectorAll(".feature");
        const totalAnimationTime = 1.5 + 2 + (features.length * 0.3); // delay + duration + stagger
        
        gsap.to(".feature", { 
            opacity: 1, 
            y: 0, 
            duration: 2, 
            stagger: 0.3, 
            delay: 1.5,
            startAt: { opacity: 0, y: 50 },
            onComplete: function() {
                // S'assurer que tous les éléments sont visibles après l'animation
                features.forEach(feature => {
                    feature.style.opacity = "1";
                });
            }
        });
        
        // Backup: forcer l'opacité après l'animation complète au cas où
        setTimeout(() => {
            features.forEach(feature => {
                feature.style.opacity = "1";
            });
        }, (totalAnimationTime * 1000) + 500);
    }

    const pdfViewer = document.getElementById("pdf-viewer");
    const pdfContainer = document.querySelector(".pdf-container");
    const documentCards = document.querySelectorAll(".document-card");

    // Vérifier si pdfViewer existe avant d'ajouter les event listeners
    if (pdfViewer && documentCards.length > 0) {
        documentCards.forEach(card => {
            card.addEventListener("click", function() {
                // Récupérer le fichier PDF depuis l'attribut data-pdf
                const pdfUrl = this.getAttribute("data-pdf");

                if (pdfUrl) {
                    // Modifier l'URL du PDF
                    pdfViewer.src = pdfUrl + "#toolbar=0";
                    pdfViewer.style.display = "block";
                    
                    // Scroll automatique vers le PDF sur mobile (maintenant en haut)
                    if (window.innerWidth <= 768 && pdfContainer) {
                        setTimeout(() => {
                            window.scrollTo({ 
                                top: 0,
                                behavior: 'smooth'
                            });
                        }, 100);
                    }
                }

                // Supprimer la classe active des autres documents
                documentCards.forEach(c => c.classList.remove("active"));

                // Ajouter la classe active à l'élément cliqué
                this.classList.add("active");
            });
        });
    }
});

function showPDF(pdfURL) {
    document.getElementById("pdf-viewer").src = pdfURL;
    document.getElementById("pdf-viewer").style.display = "block";
}