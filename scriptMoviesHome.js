const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav_darker_gray');
    } else {
        nav.classList.remove('nav_darker_gray');
    }
});


const botaoConjuntos = document.querySelectorAll('.sobedesce');

botaoConjuntos.forEach(conjunto => {
    const leftButton = conjunto.querySelector('#leftButton');
    const rightButton = conjunto.querySelector('#rightButton');
    const carrossel = conjunto.parentElement.querySelector('.row_posters');

    if (carrossel && leftButton && rightButton) {
        const itemWidth = carrossel.firstElementChild.offsetWidth; 
        const numItemsToScroll = 5;
        let isScrolling = false;

        leftButton.addEventListener('click', () => {
            if (!isScrolling) {
                isScrolling = true;
                const scrollAmount = carrossel.scrollLeft - (itemWidth * numItemsToScroll);
                smoothScroll(carrossel, scrollAmount);
            }
        });

        rightButton.addEventListener('click', () => {
            if (!isScrolling) {
                isScrolling = true;
                const scrollAmount = carrossel.scrollLeft + (itemWidth * numItemsToScroll);
                smoothScroll(carrossel, scrollAmount);
            }
        });

        function smoothScroll(element, scrollAmount) {
            const startTime = performance.now();
            const startScroll = element.scrollLeft;
            const distance = scrollAmount - startScroll;
            const duration = 500; 

            function step(currentTime) {
                const elapsedTime = currentTime - startTime;
                element.scrollLeft = easeInOutQuad(elapsedTime, startScroll, distance, duration);
                if (elapsedTime < duration) {
                    requestAnimationFrame(step);
                } else {
                    isScrolling = false;
                }
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(step);
        }
    }
});