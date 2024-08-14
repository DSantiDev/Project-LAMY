const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');

let index = 0;
const interval = 10000; 
let autoSlideInterval;

function updateCarousel() {
    const offset = -index * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    }, interval);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : items.length - 1;
    updateCarousel();
    stopAutoSlide(); // Detener el auto-slide al interactuar
    startAutoSlide(); // Reiniciar el auto-slide
});

nextButton.addEventListener('click', () => {
    index = (index < items.length - 1) ? index + 1 : 0;
    updateCarousel();
    stopAutoSlide(); // Detener el auto-slide al interactuar
    startAutoSlide(); // Reiniciar el auto-slide
});

// Iniciar el auto-slide al cargar la página
startAutoSlide();
