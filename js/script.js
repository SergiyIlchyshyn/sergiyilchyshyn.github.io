$(document).ready(function () {
    // Preloader init
    setTimeout(function() {
        $('.wrapper').addClass('loaded');
    }, 2000);

    $(".categoty__btn").click(function(){
       var value = $(this).attr("data-filter");
       if(value == "all") {
           $(".filter").show("1000");
       } else {
           $(".filter").not("."+value).hide("1000");
           $(".filter").filter("."+value).show("1000");
       }
       // Add active class
        $(".category__filter ul li").click(function(){
           $(this).addClass('active').siblings().removeClass('active');
        });
    });

    // Initializing popup
    $(".button-with-form").magnificPopup({
        type: 'inline',
        preloader: false,
        closeBtnInside: false
        //focus: '.name'
    });

    // Ajax відправка форми
    $("form").submit(function(){
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            alert("Дякую за заявку! Найближчим часом з Вами зв'яжемося.");
            setTimeout(function(){
                $.magnificPopup.close();
            }, 1000); // закінчення setTimeout
        }); // закінчення ajx
        return false;
    }); // закінчення form
});     // закінчення ready

$(window).load(function(){
    var winHeight = $(document).height();
    var step = 2;
    var timeToScroll = winHeight/step;

    $('.scrolltop').on('click', function(){

        $('html, body').animate({
            scrollTop: 0
        }, timeToScroll);
    });
    // Плавний скрол
    $("#arrow").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за ... мс
        $('body,html').animate({scrollTop: top}, timeToScroll);
    }); // закінчення on
});