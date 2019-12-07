$(document).ready(function () {

    const headerSlider = $("#headerSlider");

    headerSlider.on('initialize.owl.carousel initialized.owl.carousel', function (event) {
        $(".slider__controls--number-active").text(event.item.index + 1);
        $(".slider__controls--number-total").text(event.item.count);
    })
    headerSlider.owlCarousel({
        items: 1,
        // loop: true,
        dots: false,
        smartSpeed: 1000
    });
    // Go to the next item
    $('#headerSliderRight').click(function () {
        console.log("Right");
        headerSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('#headerSliderLeft').click(function () {
        console.log("Left");
        headerSlider.trigger('prev.owl.carousel');
    })
    headerSlider.on('changed.owl.carousel', function (event) {
        $(".slider__controls--number-active").text(event.item.index + 1);
        $(".slider__controls--number-total").text(event.item.count);
    })

});