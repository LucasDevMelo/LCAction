const nav = document.getElementById('nav')

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                nav.classList.add('nav_darker_gray')
            } else {
                nav.classList.remove('nav_darker_gray');
            }
        });

        const carrossel = document.querySelector('.row_posters');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const itemWidth = carrossel.firstElementChild.offsetWidth; // largura de cada item do carrossel

leftButton.addEventListener('click', () => {
    carrossel.scrollTo({
        left: carrossel.scrollLeft - (5 * itemWidth),
        behavior: 'smooth' // Adiciona uma transição suave
    });
});

rightButton.addEventListener('click', () => {
    carrossel.scrollTo({
        left: carrossel.scrollLeft + (5 * itemWidth),
        behavior: 'smooth' // Adiciona uma transição suave
    });
});



