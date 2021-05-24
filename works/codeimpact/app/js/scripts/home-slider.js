$(document).ready(function () {
    let homeSlider = new Swiper(".home__slider-container", {
        direction: "vertical",
        slidesPerView: "auto",
        watchSlidesVisibility: true,
        spaceBetween: 16,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});