$(document).ready(function () {
    /*===== Home slider =====*/
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
    /*===== Overview slider =====*/
    let overviewSlider = new Swiper(".overview__slider-wrap", {
		slidesPerView: 1,
		spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 1,
        slideToClickedSlide: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
		keyboard: true,
	});
});