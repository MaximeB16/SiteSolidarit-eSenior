const contents = [
    {
        images: [
            '../IMAGES/MarcheDeNoel/marchedenoel1.jpg',
            '../IMAGES/MarcheDeNoel/marchedenoel2.jpg',
            '../IMAGES/MarcheDeNoel/marchedenoel3.jpg'
        ],
        video: '../VIDEO/MarcheDeNoel.mp4'
    },
    {
        images: [
            '../IMAGES/PanierGourmand/PanierGourmand1.jpg',
            '../IMAGES/PanierGourmand/PanierGourmand1.jpg',
            '../IMAGES/PanierGourmand/PanierGourmand1.jpg'
        ],
        video: '../VIDEO/PanierGourmand.mp4'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments nécessaires
    const popUp = document.getElementById('popup');
    const popUpImage1 = document.getElementById('popupImage1');
    const popUpImage2 = document.getElementById('popupImage2');
    const popUpImage3 = document.getElementById('popupImage3');
    const popUpVideo = document.getElementById('popupVideo');
    const popUpVideoSource = document.getElementById('popupVideoSource');
    const closePopup = document.getElementById('closePopup');
    const boxes = document.querySelectorAll('.Sorties');

    if (!popUp || !popUpImage1 || !popUpImage2 || !popUpImage3 || !popUpVideo || !popUpVideoSource || !closePopup) {
        console.error("Élément(s) manquant(s) dans le DOM");
        return;
    }

    console.log("Éléments trouvés :", { popUp, popUpImage1, popUpImage2, popUpImage3, popUpVideo, closePopup, boxes });

    // Ajout d'événements pour chaque cadre
    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            console.log("Cadre cliqué :", index);

            const content = contents[index];

            if (content) {
                // Mise à jour des images
                popUpImage1.src = content.images[0];
                popUpImage2.src = content.images[1];
                popUpImage3.src = content.images[2];

                // Mise à jour de la vidéo
                popUpVideoSource.src = content.video;
                popUpVideo.load(); // Recharge la vidéo avec la nouvelle source

                popUp.classList.remove('hidden'); // Affiche la pop-up
            } else {
                console.error("Aucun contenu trouvé pour ce cadre.");
            }
        });
    });

    // Fermer la pop-up via le bouton
    closePopup.addEventListener('click', () => {
        console.log("Fermeture via bouton");
        popUp.classList.add('hidden');
        popUpVideo.pause(); // Pause la vidéo en cas de fermeture
    });

    // Fermer la pop-up en cliquant en dehors du contenu
    popUp.addEventListener('click', (event) => {
        if (event.target === popUp) {
            console.log("Fermeture en cliquant en dehors");
            popUp.classList.add('hidden');
            popUpVideo.pause(); // Pause la vidéo en cas de fermeture
        }
    });
});