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
    if (centerX >= 4 && centerX <= 20 && centerY >= 22 && centerY <= 38) {
        showInfoBox("<h4>Info 1</h4><p>Description de l'info 1</p>");
    } else if (centerX >= 0 && centerX <= 5 && centerY >= 0 && centerY <= 5) {
        showInfoBox(`
            <u>Commandes</u><br>
            <p>
                Deplacer le pion orange avec les touches directionnelles.<br>
                Une fois sur la case souhaitee, l'information s'affichera ici.
            </p>
        `);
    } else if (centerX >= 69 && centerX <= 84 && centerY >= 4 && centerY <= 20) {
        showInfoBox(`
            <h4>Info 2</h4>
            <p>Description de l'info 2</p>
        `);
    } else if (centerX >= 51 && centerX <= 67 && centerY >= 42 && centerY <= 58) {
        showInfoBox(`
            <h4>Info 3</h4>
            <p>Description de l'info 3</p>
        `);
    } else if (centerX >= 27 && centerX <= 42 && centerY >= 78 && centerY <= 93) {
        showInfoBox(`
            <h4>Info 4</h4>
            <p>Description de l'info 4</p>
        `);
    } else if (centerX >= 78 && centerX <= 93 && centerY >= 80 && centerY <= 96) {
        showInfoBox(`
            <h4>Info 5</h4>
            <p>Description de l'info 5</p>
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
