document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const description = this.closest('.box').querySelector('.description');
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
            this.textContent = '▲';
        } else {
            description.style.display = 'none';
            this.textContent = '▼';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carres = document.querySelectorAll('.carre');
    const infoBox = document.getElementById('info-box');

    carres.forEach(carre => {
        carre.addEventListener('click', function() {
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
        if (!event.target.closest('.carre') && !event.target.closest('#info-box')) {
            infoBox.style.display = 'none';
        }
    });
});

