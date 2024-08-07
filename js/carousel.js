const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');

let index = 0;

function updateCarousel() {
    const offset = -index * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : items.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index = (index < items.length - 1) ? index + 1 : 0;
    updateCarousel();
});