const nav = document.getElementById('nav')

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                nav.classList.add('nav_darker_gray')
            } else {
                nav.classList.remove('nav_darker_gray');
            }
        });

        // Seleciona todos os elementos com a classe '.sobedesce'
const botaoConjuntos = document.querySelectorAll('.sobedesce');

// Para cada conjunto de botões encontrado, atribui o evento de clique aos botões de navegação dentro dele
botaoConjuntos.forEach(conjunto => {
    const leftButton = conjunto.querySelector('#leftButton');
    const rightButton = conjunto.querySelector('#rightButton');
    const carrossel = conjunto.parentElement.querySelector('.row_posters');

    if (carrossel && leftButton && rightButton) {
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
    }
});

