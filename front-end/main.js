/*-------scrolling-images-part-two------*/

const images = [
    "style/images-used/part-two/part-two-living-room.webp",
    "style/images-used/part-two/part-two-jacuzzi-.webp",
    "style/images-used/part-two/part-two-pool-table.webp"
];

let currentIndex = 0;

const container = document.querySelector(".scrolling-images-part-two");
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
}

function animateSlide(direction) {
    container.classList.add(`slide-${direction}`);

    setTimeout(() => {
        currentIndex = (direction === "left")
            ? (currentIndex + 1) % images.length
            : (currentIndex - 1 + images.length) % images.length;

        updateImages();
        container.classList.remove(`slide-${direction}`);
    }, 300);
}

rightArrow.addEventListener("click", () => {
    animateSlide("right");
});

leftArrow.addEventListener("click", () => {
    animateSlide("left");
});

updateImages();


/*----------------PART-THREE-ANIMATION--------*/


document.querySelectorAll('.part-three-choose-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.part-three-choose-button').forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        const leftImage = "style/images-used/part-three/part-three-kitchen.webp";
        const centerImage = "style/images-used/part-three/part-three-sauna.webp";
        const rightImage = "style/images-used/part-three/part-three-bar.webp";
        let selectedImage;
        let newText;

        if (button.id === 'leftImage') {
            selectedImage = leftImage;
            newText = {
                heading: "Bienvenue à l'Eclipse 1723",
                subheading: 'Une cuisine<br>entièrement équipée',
                description: 'Une cuisine moderne et luxueuse, pensée pour allier confort, espace et plaisir culinaire.'
            };
        } else if (button.id === 'centerImage') {
            selectedImage = centerImage;
            newText = {
                heading: 'Relaxez-vous dans notre sauna',
                subheading: 'Évasion Bien-Être',
                description: 'Un sauna haut de gamme pour un pur moment de détente après une journée en montagne.'
            };
        } else if (button.id === 'rightImage') {
            selectedImage = rightImage;
            newText = {
                heading: 'Ambiance conviviale au bar',
                subheading: 'L’Art du Cocktail',
                description: 'L’endroit idéal pour trinquer en toute intimité.',
            };
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

/*-------------------map-location-------------------*/

const imagesPartFour = document.querySelectorAll('.part-four-img img');
const imagesBathroomPartFour = document.querySelectorAll('.part-four-img-bathroom img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');

imagesPartFour.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

imagesBathroomPartFour.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});


/*-------------------map-location-------------------*/



/*------------------------TRANSLATE-----------------------*/



const translations = {
    fr: {
        heroTitle: "Bienvenue sur mon site",
        heroText: "Ceci est une belle introduction.",
    },
    en: {
        heroTitle: "Welcome to my website",
        heroText: "This is a nice introduction.",
    }
    };

    function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key] || key;
    });
    localStorage.setItem('lang', lang);
    }

    document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'fr';
    setLanguage(savedLang);
    });