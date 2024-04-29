const nav = document.getElementById('nav')

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                nav.classList.add('nav_darker_gray')
            } else {
                nav.classList.remove('nav_darker_gray');
            }
        });

        const carrosseis = document.querySelectorAll('.row_posters');

        carrosseis.forEach(carrossel => {
            let isMouseDown = false;
            let startX;
            let scrollLeft;

            carrossel.addEventListener('mousedown', (e) => {
                isMouseDown = true;
                startX = e.pageX - carrossel.offsetLeft;
                scrollLeft = carrossel.scrollLeft;
            });

            document.addEventListener('mouseup', () => {
                isMouseDown = false;
            });

            carrossel.addEventListener('mousemove', (e) => {
                if (!isMouseDown) return;
                const x = e.pageX - carrossel.offsetLeft;
                const walk = (x - startX) * 3;
                carrossel.scrollLeft = scrollLeft - walk;
            });
        });

