$(document).ready(function() {
  /* =============================== */
    /* Mobile nav */
    /* =============================== */
    const navToggle = $("#navToggle");
    const popupMenu = $(".popup-menu");
    const mobileLinks = $(".mobile-menu__link");
    
    navToggle.on("click", function (event) {
        event.preventDefault();
        $(this).children().toggleClass("active");
        popupMenu.toggleClass("is-active");
        $("body").toggleClass("hidden");
    });
    mobileLinks.click(function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
    });

    /* =============================== */
    /* DatePicker */
    /* =============================== */
    flatpickr('#flatpickr', {
        mode: "range",
        dateFormat: "j M Y"
    });

    // =================================================
    $('.input-container').last().css("margin-bottom", "0");
    $('.form__text').last().css("margin-top", "50px");

    /* =============================== */
    /* TABS */
    /* =============================== */
    $('#tabs-menu-1 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('#tabs-menu-1 li').removeClass('current');
        $('.tab_1').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
    /* =============================== */
    /* Select Menu */
    /* =============================== */
    const selectMenu = $('.select__menu');
    selectMenu.on("click", function (event) {
        event.preventDefault();
        $(this).parent().toggleClass('is-active');
    });
    let k = '';
    selectMenu.change(function (event) {
        event.preventDefault();
        const newTab = $(this).children(':selected').data('tab');
        k = newTab;
        myFunc(k);      
    });
    function myFunc(item) { 
        console.log(item);
        return item;
    }
    // var a = myFunc;
    console.log(myFunc);
    
    /* =============================== */
    $('#tabs-menu-2 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('#tabs-menu-2 li').removeClass('current');
        $('.tab_2').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
    /* =============================== */
    $('#tabs-menu-3 li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('#tabs-menu-3 li').removeClass('current');
        $('.tab_3').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    /* =============================== */
    /* SWIPER CAROUSEL */
    /* =============================== */
    const mySwiper = new Swiper('.content__row', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        clickable: true,
        // breakpoints: {
        //     640: {
        //         slidesPerView: 3,
        //     },
        //     1024: {
        //         slidesPerView: 4,
        //     },
        // }
    });

    /* =============================== */
    /* Chart.js */
    /* =============================== */
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
          datasets: [{ 
              data: [86,114,106,106,107,111,133,221,783,2478],
              label: "Followers",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: [282,350,411,502,635,809,947,1402,3700,5267],
              label: "Followed",
              borderColor: "#8e5ea2",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Followers and Following Chart'
          }
        }
      });
});