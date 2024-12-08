// Fonction pour fermer la pop-up
function closePopUp() {
    const popup = document.getElementById('PopUp').remove();
}

// Ajouter un événement au bouton
document.getElementById('CloseBtn').addEventListener('click', closePopUp);