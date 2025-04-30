/*-------scrolling-images-part-two------*/

const images = [
    "style/images-used/part-two-pool-table.webp",
    "style/images-used/part-two-living-room.webp",
    "style/images-used/part-two-jacuzzi-.webp"
];

let currentIndex = 0;

const leftImage = document.querySelector(".left-image img");
const mainImage = document.querySelector(".main-image img");
const rightImage = document.querySelector(".right-image img");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");


function updateImages() {
    const left = (currentIndex + images.length - 1) % images.length;
    const main = currentIndex;
    const right = (currentIndex + 1) % images.length;

    leftImage.src = images[left];
    mainImage.src = images[main];
    rightImage.src = images[right];

    leftImage.classList.add('fade');
    rightImage.classList.add('fade');
    setTimeout(() => {
        leftImage.classList.remove('fade');
        rightImage.classList.remove('fade');
    }, 500);
}

rightArrow.addEventListener("click", () => {
    mainImage.classList.add('slide-right');

    setTimeout(() => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImages();
        mainImage.classList.remove('slide-right');
        mainImage.classList.add('fade-in'); // ➔ nouvelle image qui apparaît doucement

        setTimeout(() => {
            mainImage.classList.remove('fade-in');
        }, 500); // Nettoyage
    }, 500);
});

leftArrow.addEventListener("click", () => {
    mainImage.classList.add('slide-left');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImages();
        mainImage.classList.remove('slide-left');
        mainImage.classList.add('fade-in'); // ➔ nouvelle image qui apparaît doucement

        setTimeout(() => {
            mainImage.classList.remove('fade-in');
        }, 500); // Nettoyage
    }, 500);
});

updateImages();


/*----------------PART-THREE-ANIMATION--------*/


document.querySelectorAll('.part-three-choose-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.part-three-choose-button').forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        const leftImage = "style/images-used/part-three-kitchen.webp";
        const centerImage = "style/images-used/part-three-sauna.webp";
        const rightImage = "style/images-used/part-three-bar.webp";
        let selectedImage;
        let newText;

        if (button.id === 'leftImage') {
            selectedImage = leftImage;
            newText = {
                heading: 'Cuisine entièrement équipée',
                subheading: 'Préparez vos plats préférés dans notre cuisine moderne',
                description: 'Profitez de la commodité d\'une cuisine entièrement équipée pour vos repas.'
            };
            console.log("Cuisine sélectionnée");
        } else if (button.id === 'centerImage') {
            selectedImage = centerImage;
            newText = {
                heading: 'Relaxez-vous dans notre sauna',
                subheading: 'Un sauna pour se ressourcer après une journée de ski',
                description: 'Détendez-vous pleinement dans notre sauna après une journée bien remplie.'
            };
            console.log("Sauna sélectionné");
        } else if (button.id === 'rightImage') {
            selectedImage = rightImage;
            newText = {
                heading: 'Ambiance conviviale au bar',
                subheading: 'Un lieu chaleureux pour partager de bons moments',
                description: 'Venez profiter de notre bar cosy et convivial.'
            };
            console.log("Bar sélectionné");
        }

        const img = document.querySelector('.main-image-part-three');
        const heading = document.getElementById('part-three-text-heading');
        const subheading = document.getElementById('part-three-text-subheading');
        const description = document.getElementById('part-three-text-description');

        if (newText && img && heading && subheading && description) {
            heading.textContent = newText.heading;
            subheading.innerHTML = newText.subheading;
            description.textContent = newText.description;
            img.src = selectedImage;
        }
    });
});





/*-------------------fade-in-animation-------------------*/

window.addEventListener('load', () => {
    const modal = document.getElementById('welcomeModal');

    setTimeout(() => {
        modal.classList.add('hidden');


        setTimeout(() => {
            modal.style.display = 'none';
        }, 800);

    }, 2000);

    setTimeout(() => {
        document.querySelector('.part-one').classList.add('animate-title');
    }, 3000);
});


