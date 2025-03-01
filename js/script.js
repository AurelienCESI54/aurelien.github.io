// Menu déroulant principal

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.querySelector('.navbar');

    navbarToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêche l'événement de se propager
        navbar.classList.toggle('active');
    });

    // Ferme le menu si on clique en dehors
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});

// Animation carte à jouer
document.querySelector('.carte').addEventListener('click', function() {
    this.classList.toggle('retournee');
});
