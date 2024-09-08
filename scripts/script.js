/*Top-Rated Product*/
const productSlider = document.querySelector('.product-slider');
const productContainer = document.querySelector('.product-container');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.product-item').length;
const itemsPerSlide = 4;

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsPerSlide) {
        currentIndex += itemsPerSlide;
        productContainer.style.transform = `translateX(-${100 * (currentIndex / itemsPerSlide)}%)`;
    } else {
        currentIndex = 0;
        productContainer.style.transform = `translateX(0)`;
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= itemsPerSlide;
        productContainer.style.transform = `translateX(-${100 * (currentIndex / itemsPerSlide)}%)`;
    } else {
        currentIndex = totalItems - itemsPerSlide;
        productContainer.style.transform = `translateX(-${100 * (currentIndex / itemsPerSlide)}%)`;
    }
});

// Smooth Scrolling for Section Buttons
document.querySelectorAll('.section-buttons .btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.build-slider-wrapper');
    const slider = document.querySelector('.build-slider');
    const slides = slider.querySelectorAll('.build-slide');
    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth; // Get width of one slide
    const gap = 20; // Gap between slides
    const visibleSlides = 4; // Number of slides to show at a time
    let currentIndex = 0;

    // Calculate the total width needed for the slider
    const totalWidth = (slideWidth + gap) * slideCount - gap;
    slider.style.width = `${totalWidth}px`;

    function updateSlider() {
        const offset = -(slideWidth * currentIndex + gap * currentIndex);
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % (slideCount);
        updateSlider();
    }

    // Set up automatic sliding
    setInterval(nextSlide, 3000); // Adjust the interval time as needed
});

