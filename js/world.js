document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.movable-box');
    const messageDisplay = document.getElementById('message-display');
    const infoBox = document.querySelector('.info-box');
    const playground = document.querySelector('.playground');
    
    // Initialisation de la position
    setBoxPosition(box, 2, 2);
    updateDisplay(box, messageDisplay, infoBox);

    // Ajout de l'écouteur pour le redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        setBoxPosition(box, getBoxX(box), getBoxY(box));
        updateDisplay(box, messageDisplay, infoBox);
    });
});

document.addEventListener('keydown', function(event) {
    const box = document.querySelector('.movable-box');
    const playground = box.parentNode;
    const step = 2;
    const messageDisplay = document.getElementById('message-display');
    const infoBox = document.querySelector('.info-box');

    event.preventDefault();

    let x = getBoxX(box);
    let y = getBoxY(box);

    switch (event.key) {
        case 'ArrowUp':
            y = Math.max(0, y - step);
            break;
        case 'ArrowDown':
            y = Math.min(100 - getBoxHeightPercent(box), y + step);
            break;
        case 'ArrowLeft':
            x = Math.max(0, x - step);
            break;
        case 'ArrowRight':
            x = Math.min(100 - getBoxWidthPercent(box), x + step);
            break;
    }

    setBoxPosition(box, x, y);
    updateDisplay(box, messageDisplay, infoBox);
});

function updateDisplay(box, messageDisplay) {
    const centerX = getBoxX(box) + getBoxWidthPercent(box) / 2;
    const centerY = getBoxY(box) + getBoxHeightPercent(box) / 2;
    
    const infoBox = document.querySelector('.info-box');
    
    // Vérifier si le pion est dans la zone spécifiée (ajustez ces valeurs selon vos besoins)
    if (centerX >= 0 && centerX <= 5 && centerY >= 0 && centerY <= 5) {
        showInfoBox(`
            <h4><u>Commandes</u></h4>
            <p>
                Deplacer le pion orange avec les touches directionnelles.<br>
                Une fois sur la case souhaitee, l'information s'affichera ici.
            </p>
        `);

    } else if (centerX >= 69 && centerX <= 84 && centerY >= 4 && centerY <= 20) {
        showInfoBox(`
            <h4><u>Qui est Aurelien ?</u></h4>
            <p>
                Je suis un jeune francais ne en 2006 a Cormeilles-en-Parisis, qui vit actuellement dans la region du Grand-Est.<br>
                Passionne d'informatique depuis tout jeune, je suis aujourd'hui etudiant en developpement informatique au CESI de Vandoeuvre-les-Nancy, et ce, depuis 2024.<br>
                Plus d'informations sur moi sur les autres points.
            </p>
        `);

    } else if (centerX >= 4 && centerX <= 20 && centerY >= 22 && centerY <= 38) {
        showInfoBox(`
            <h4><u>Ce que j'aime bien faire</u></h4>
            <p>
                En dehors des cours, j'aime bien jouer a des jeux et aller me balader : ca me permet de m'evader de mon quotidien sympatique, mais tendu par moments.<br>
                De plus, je cree occasionnellement du contenu sur Internet, notamment des modifications pour un jeu de rythme populaire et des videos YouTube.<br><br>
                Pour plus d'infos, voir les autres points et la section "Projets" du site. 
            </p>
        `);

    } else if (centerX >= 51 && centerX <= 67 && centerY >= 42 && centerY <= 58) {
        showInfoBox(`
            <h4><u>Mon quotidien</u></h4>
            <p>
                Durant ma semaine, je suis des etudes au CESI, ou je realise souvent des projets de programmation, comme un jeu de l'oie en Python ou un site Internet en HTML.<br>
                En dehors, je passe mes journees libres a me balader, jouer a des jeux et avancer sur mes projets professionnels et personnels.<br><br>
                Pour plus d'infos, voir la section "Projets" du site.
            </p>
        `);

    } else if (centerX >= 27 && centerX <= 42 && centerY >= 78 && centerY <= 93) {
        showInfoBox(`
            <h4><u>Comment suis-je arrive au CESI ?</u></h4>
            <p>
                Apres une periode au college Langevin Wallon (Blainville-sur-l'eau) extremement difficile, je me suis oriente vers un lycee prive generaliste, Saint Pierre Fourier (Luneville), qui me permetterait de me fixer sur mon orientation definitive.<br><br>
                Durant ces 3 annees, j'ai suivi les specialites Mathematiques - avec partie Experte en Terminale - NSI et Physique-Chimie (arretee en Premiere), avec option Theatre, et grace a ca, j'ai eu l'idee de m'orienter dans le D.I., un domaine d'avenir ou la reconversion professionnelle est aisee.<br><br>
                Finalement, j'en suis a avoir une formation de 3 ans au CESI : 2 ans de formation sous status etudiant suivi d'une annee en alternance. Et je suis loin d'en etre decu !<br><br>
                Pour mon futur metier, je pense partir sur de la creation de logiciels, avec une promiximite avec des clients. Les details ne sont pas pensees pour l'instant.
            </p>
        `);

    } else if (centerX >= 78 && centerX <= 93 && centerY >= 80 && centerY <= 96) {
        showInfoBox(`
            <h4><u>Je suis un peu different...</u></h4>
            <p>
                Contrairement a la plupart des personnes de mon age, je suis quelqu'un de tres sensible a l'ambiance : tout ce qui est bruit et mouvement me fatigue tres rapidement. De plus, mes reactions sont souvent decales par rapport a certaines situations.<br>
                Couple a une introversion tres presente (parler de mes avis et de mes activites personnelles est tres difficile pour moi), cela me rend peu sociable, y compris - peut-etre meme surtout - pour des proches et/ou personnes de confiance.<br><br>
                Cependant, grace a des conditions de travail adaptes, je poursuis une formation de D.I. dans une promotion de 15 personnes, comme un jeune adulte passionne "lambda" le ferait.<br><br>
                Tout cela pour dire que ma vie n'est vraiment pas aise, mais que cela ne m'empeche pas de decouvrir un metier que j'aimerais faire.<br>
                Pour ceux qui se posent la question, j'ai une reconnaissance RQTH de mon handicap.
            </p>
        `);

    } else {
        hideInfoBox();
    }    
}

function showInfoBox(content) {
    const infoBox = document.querySelector('.info-box');
    const messageDisplay = document.getElementById('message-display');
    infoBox.classList.remove('hidden');
    messageDisplay.innerHTML = content;
}

function hideInfoBox() {
    const infoBox = document.querySelector('.info-box');
    infoBox.classList.add('hidden');
}

// Fonctions utilitaires pour travailler avec des pourcentages
function getBoxX(box) {
    return parseFloat(box.style.left) || 0;
}

function getBoxY(box) {
    return parseFloat(box.style.top) || 0;
}

function getBoxWidthPercent(box) {
    return (box.offsetWidth / box.parentNode.offsetWidth) * 100;
}

function getBoxHeightPercent(box) {
    return (box.offsetHeight / box.parentNode.offsetHeight) * 100;
}

function setBoxPosition(box, x, y) {
    box.style.left = x + '%';
    box.style.top = y + '%';
}
