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
    // Inclut téléphone en paysage : largeur > 768 mais hauteur faible → sinon la barre ne se masquait jamais
    if (header) {
        let lastScrollTop = 0;
        let ticking = false;

        function isCompactHeaderViewport() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            if (w <= 768) return true;
            if (h <= 560 && w < 1300) return true;
            return false;
        }

        function scrollHideThreshold() {
            return document.body.classList.contains("compet-page") ? 28 : 100;
        }

        function handleScroll() {
            if (!isCompactHeaderViewport()) return;

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const threshold = scrollHideThreshold();

            if (scrollTop > lastScrollTop && scrollTop > threshold) {
                header.classList.add("header-hidden");
            } else {
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

        function applyCompetMobileHeaderDefault() {
            if (!isCompactHeaderViewport()) return;
            if (!document.body.classList.contains("compet-page")) return;
            header.classList.add("header-hidden");
        }

        requestAnimationFrame(function () {
            applyCompetMobileHeaderDefault();
        });

        function syncHeaderForViewport() {
            if (!isCompactHeaderViewport()) {
                header.classList.remove("header-hidden");
            } else if (document.body.classList.contains("compet-page")) {
                header.classList.add("header-hidden");
            }
        }

        window.addEventListener("resize", syncHeaderForViewport);

        window.addEventListener("orientationchange", function () {
            setTimeout(function () {
                syncHeaderForViewport();
            }, 150);
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

    const pdfViewerContainer = document.getElementById("pdf-viewer-container");
    const pdfViewerFallback = document.getElementById("pdf-viewer-fallback");
    const pdfContainer = document.querySelector(".pdf-container");
    const documentCards = document.querySelectorAll(".document-card");

    // Configuration PDF.js si disponible
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    // Variables pour le visualiseur PDF
    let pdfDoc = null;
    let pageNum = 1;
    let pageRendering = false;
    let pageNumPending = null;
    let renderTask = null; // Référence à la tâche de rendu en cours
    let scale = window.innerWidth <= 768 ? 1.0 : 1.5;
    const canvas = document.getElementById('pdf-canvas');

    // Fonction pour rendre une page PDF
    function renderPage(num) {
        if (!canvas || !pdfDoc) return;
        
        // Annuler la tâche de rendu précédente si elle existe
        if (renderTask) {
            renderTask.cancel();
            renderTask = null;
        }
        
        // Si une opération de rendu est en cours, mettre en attente
        if (pageRendering) {
            pageNumPending = num;
            return;
        }
        
        pageRendering = true;
        const ctx = canvas.getContext('2d');
        
        pdfDoc.getPage(num).then(function(page) {
            // Vérifier à nouveau si une nouvelle opération n'a pas été demandée
            if (pageNumPending !== null && pageNumPending !== num) {
                pageRendering = false;
                renderPage(pageNumPending);
                return;
            }
            
            const viewport = page.getViewport({scale: scale});
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            renderTask = page.render(renderContext);

            renderTask.promise.then(function() {
                pageRendering = false;
                renderTask = null;
                if (pageNumPending !== null) {
                    const nextPage = pageNumPending;
                    pageNumPending = null;
                    renderPage(nextPage);
                } else {
                    updatePageInfo();
                }
            }).catch(function(error) {
                // Ignorer les erreurs d'annulation
                if (error.name !== 'RenderingCancelledException') {
                    console.error('Erreur lors du rendu:', error);
                }
                pageRendering = false;
                renderTask = null;
                if (pageNumPending !== null) {
                    const nextPage = pageNumPending;
                    pageNumPending = null;
                    renderPage(nextPage);
                }
            });
        }).catch(function(error) {
            console.error('Erreur lors du chargement de la page:', error);
            pageRendering = false;
            renderTask = null;
        });
    }

    // Fonction pour mettre à jour les informations de page
    function updatePageInfo() {
        const pageInfo = document.getElementById('pdf-page-info');
        if (pageInfo && pdfDoc) {
            pageInfo.textContent = `Page ${pageNum} / ${pdfDoc.numPages}`;
        }
        
        const prevBtn = document.getElementById('pdf-prev');
        const nextBtn = document.getElementById('pdf-next');
        if (prevBtn) prevBtn.disabled = pageNum <= 1;
        if (nextBtn) nextBtn.disabled = pageNum >= pdfDoc.numPages;
    }

    // Fonction pour charger un PDF
    function loadPDF(url) {
        if (!pdfViewerContainer || !pdfViewerFallback) return;
        
        // Annuler toute opération de rendu en cours
        if (renderTask) {
            renderTask.cancel();
            renderTask = null;
        }
        pageRendering = false;
        pageNumPending = null;
        
        // Utiliser PDF.js si disponible, sinon fallback vers iframe
        if (typeof pdfjsLib === 'undefined') {
            pdfViewerContainer.style.display = 'none';
            pdfViewerFallback.src = url + "#toolbar=0";
            pdfViewerFallback.style.display = 'block';
            return;
        }
        
        // Utiliser PDF.js (fonctionne sur PC et mobile)
        pdfViewerFallback.style.display = 'none';
        pdfViewerContainer.style.display = 'block';
        
        pdfjsLib.getDocument(url).promise.then(function(pdf) {
            pdfDoc = pdf;
            pageNum = 1;
            renderPage(pageNum);
        }).catch(function(error) {
            console.error('Erreur lors du chargement du PDF:', error);
            pdfViewerContainer.style.display = 'none';
            pdfViewerFallback.src = url + "#toolbar=0";
            pdfViewerFallback.style.display = 'block';
        });
    }

    // Gestionnaires d'événements pour les contrôles PDF
    const prevBtn = document.getElementById('pdf-prev');
    const nextBtn = document.getElementById('pdf-next');
    const zoomOutBtn = document.getElementById('pdf-zoom-out');
    const zoomInBtn = document.getElementById('pdf-zoom-in');
    const downloadBtn = document.getElementById('pdf-download');

    if (downloadBtn && pdfViewerFallback) {
        downloadBtn.addEventListener('click', function() {
            const activeCard = document.querySelector('.document-card.active');
            const pdfUrl = activeCard ? activeCard.getAttribute('data-pdf') : (pdfViewerFallback.getAttribute('src') || '').replace('#toolbar=0', '');
            if (!pdfUrl) return;
            const filename = (pdfUrl.split('/').pop() || 'document.pdf').split('?')[0];
            const a = document.createElement('a');
            a.href = pdfUrl;
            a.download = filename;
            a.rel = 'noopener';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (pageNum <= 1 || !pdfDoc) return;
            pageNum--;
            renderPage(pageNum);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
            pageNum++;
            renderPage(pageNum);
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function() {
            if (scale <= 0.5) return;
            scale -= 0.25;
            renderPage(pageNum);
        });
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function() {
            if (scale >= 3) return;
            scale += 0.25;
            renderPage(pageNum);
        });
    }

    // Vérifier si les éléments PDF existent avant d'ajouter les event listeners
    if (pdfViewerContainer && documentCards.length > 0) {
        // Charger le PDF initial si présent dans le DOM
        const initialPdf = pdfViewerFallback ? pdfViewerFallback.getAttribute('src') : null;
        if (initialPdf) {
            loadPDF(initialPdf.replace('#toolbar=0', ''));
        }

        documentCards.forEach(card => {
            card.addEventListener("click", function() {
                const pdfUrl = this.getAttribute("data-pdf");

                if (pdfUrl) {
                    loadPDF(pdfUrl);
                    
                    if (window.innerWidth <= 768 && pdfContainer) {
                        setTimeout(() => {
                            window.scrollTo({ 
                                top: 0,
                                behavior: 'smooth'
                            });
                        }, 100);
                    }
                }

                documentCards.forEach(c => c.classList.remove("active"));
                this.classList.add("active");
            });
        });
    }
});

function showPDF(pdfURL) {
    document.getElementById("pdf-viewer").src = pdfURL;
    document.getElementById("pdf-viewer").style.display = "block";
}