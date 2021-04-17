$(document).ready(function () {
    /*===== SWIPER CAROUSEL =====*/
    var mySwiper1 = new Swiper('.reviews__clients', {
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination.swiper-pagination1',
        }
    });
    var mySwiper2 = new Swiper('.component-slider', {
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination.swiper-pagination2',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});