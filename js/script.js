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

// Créer le menu déroulant
function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.innerHTML = `
        <div class="navbar-toggle" id="navbar-toggle"><u>Explorer</u></div>
        <ul>
            <li><a href="../index.html">Accueil</a></li>
            <li><a href="me.html">A propos</a></li>
            <li><a href="atouts.html">Atouts</a></li>
            <li><a href="projets.html">Projets</a></li>
            <li><a href="call.html">Contacts</a></li>
        </ul>
    `;
    document.body.prepend(navbar);
}

// Créer les crédits
function createCredits() {
    const credits = document.createElement('nav');
    credits.className = 'credits';
    credits.style.color = 'rgb(190, 225, 255)';
    credits.innerHTML = `
        Site Internet propose par Aurelien Sidaner - Images par Google
        <br><a href="../index.html" style="text-decoration: none; color: rgb(1, 191, 255);">Retour a l'accueil</a> - <a href="../cv.pdf" style="text-decoration: none; color: rgb(1, 191, 255);" download>Telecharger le CV (PDF)</a>
    `;
    document.body.appendChild(credits);
}

