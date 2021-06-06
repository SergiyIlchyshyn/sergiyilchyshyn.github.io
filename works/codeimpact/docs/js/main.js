function stickyHeader() {
    const element = document.querySelector(".main-header");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 0) {
        element.classList.add("scrolled");
    } else {
        element.classList.remove("scrolled");
    }
}
$(window).scroll(function(){
    stickyHeader();
});
$(document).ready(function () {
    /*===== Menu link active =====*/
    let menuLink = $(".nav__menu .nav__list li a");
    menuLink.on("click", menuLink, function (event) {
        event.preventDefault();
		menuLink.removeClass("active");
        $(this).addClass("active");
	});
    
    /*===== language link active =====*/
    let langLink = $(".nav__menu .nav__lang li a");
    langLink.on("click", langLink, function (event) {
        event.preventDefault();
		langLink.removeClass("active");
        $(this).addClass("active");
	});
});
$(document).ready(function () {
    /* ===== Home slider ===== */
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
    /* ===== Overview slider ===== */
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
    /* ===== Projects slider ===== */
    let projectsSlider = new Swiper(".projects__slider-wrap", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerView: "auto",
    });
    /* ===== Brands slider ===== */
    let brandsSlider = new Swiper(".brands__list", {
        slidesPerView: 5,
        spaceBetween: 100,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});