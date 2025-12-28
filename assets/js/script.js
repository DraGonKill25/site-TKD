document.addEventListener("DOMContentLoaded", function() {
    // Animations GSAP uniquement si GSAP est disponible (page d'accueil)
    if (typeof gsap !== 'undefined') {
        gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
        gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
        gsap.from(".btn", { duration: 1, scale: 0, opacity: 0, delay: 1 });
        gsap.from(".feature", { duration: 2, opacity: 0, y: 50, stagger: 0.3, delay: 1.5 });
    }

    const pdfViewer = document.getElementById("pdf-viewer");
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