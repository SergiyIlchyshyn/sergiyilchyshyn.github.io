$(document).ready(function () {
    /*===== SWIPER CAROUSEL =====*/
    let mySwiper1 = new Swiper('.reviews__clients', {
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination.swiper-pagination1',
        }
    });
    let componentThumbs = new Swiper('.thumbs-slider', {
        slidesPerView: 1,
        loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        grabCursor: false,
    });
    let componentSlider = new Swiper('.main-slider', {
        slidesPerView: 1,
        watchSlidesVisibility: true,
        loop: true,
        grabCursor: false,
        thumbs: {swiper: componentThumbs},
        pagination: {
            el: '.swiper-pagination.swiper-pagination2',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    /*===== Accordion =====*/
    $(".faq__accordion-item h5").on("click", function(event) {
		$(this).toggleClass("active").next().slideToggle();
	});
});