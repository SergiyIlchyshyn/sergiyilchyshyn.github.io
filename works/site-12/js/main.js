$(function () {

    const worksSlider = $('[data-slider="slick"]');

    /* Filter
    =============================== */
    let filter = $("[data-filter");

    filter.on("click", function (event) {
        event.preventDefault();  // забераємо стандартну поведунку кліку по ссилці

        let category = $(this).data('filter');

        if (category == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function () {
                let workCategory = $(this).data('cat');

                if (workCategory != category) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    /* Modal
    =============================== */
    const modalCall = $("[data-modal");
    const modalClose = $("[data-close");

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalID = $this.data('modal');

        $(modalID).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalID).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);
    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

    
        modalParent.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

        worksSlider.slick('setPosition');
    });
    
    $(".modal").on("click", function(event){
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        setTimeout(() => {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
       
    });

    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();
    });

    /* Slider: slick.js
    =============================== */
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    $(".slickPrev").on("click", function (event) {
        event.preventDefault;

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick("slickPrev"); 
    });
    $(".slickNext").on("click", function (event) {
        event.preventDefault;
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick("slickNext"); 
    });

    /* Mobile nav
    =============================== */
    const navToggle = $("#navToggle");
    const nav = $("#nav");
    
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
        $(this).children().toggleClass("active");
    });

    /* Smooth scroll
    =============================== */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top; // відступ від вверха 
        
        $('html, body').animate({
            scrollTop: elementOffset - 93
        }, 800);
    });

    //Click Logo To Scroll To Top
    // $('#logo').on('click', () => {
    //     $('html,body').animate({
    //         scrollTop: 0
    //     }, 500);
    // });
});