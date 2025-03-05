document.addEventListener('DOMContentLoaded', function() {
    const carres = document.querySelectorAll('.carre');
    const infoBox = document.getElementById('info-box-alt');

    carres.forEach(carre => {
        carre.addEventListener('click', function(event) {
            event.stopPropagation(); // Empêche la propagation du clic
            const infoId = this.getAttribute('data-info');
            const infoContent = document.getElementById(infoId);
            
            if (infoContent) {
                infoBox.innerHTML = infoContent.innerHTML;
                infoBox.style.display = 'block';
            } else {
                infoBox.innerHTML = "Information non disponible";
                infoBox.style.display = 'block';
            }

            // Positionnement de la boîte d'info
            infoBox.style.position = 'relative';
        });
    });

    // Fermer la boîte d'info en cliquant ailleurs
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.carre') && !event.target.closest('#info-box-alt')) {
            infoBox.style.display = 'none';
        }
    });
});
