$(document).ready(function () {

    const shopSlider = $("#shopSlider");
    shopSlider.owlCarousel({
        loop: true,
        dots: false,
        // margin: 2,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            // 1200: {
            //     items: 2,
            // },
            1254: {
                items: 3,
            }
        }
    });
    // Go to the next item
    $('#shopSliderRight').click(function () {
        console.log("Right");
        shopSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('#shopSliderLeft').click(function () {
        console.log("Left");
        shopSlider.trigger('prev.owl.carousel');
    })
});