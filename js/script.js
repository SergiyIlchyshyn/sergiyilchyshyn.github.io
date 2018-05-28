$(document).ready(function () {
    // Preloader init
    setTimeout(function() {
        $('.wrapper').addClass('loaded');
    }, 2000);

    // ParticlesJS
	particlesJS.load('particles-js', 'assets/particles.json', function() {
		console.log('callback - particles-min.js config loaded');
	});

    // Add active class
    $('.categoty__btn').click(function(){
        $('.category__filter ul li').removeClass('active');
        $(this).addClass('active');
    });

    // Category filter
    $('.categoty__btn').click(function(){
        var category = $(this).attr('data-filter');
        if (category == 'all') {
            $('.filter').show('300');
        } else {
            $('.filter').not('.' + category).hide('300');
            $('.filter').filter('.' + category).show('300');
        }
    });

    // Initializing popup
    $(".button-with-form").magnificPopup({
        type: 'inline',
        preloader: false,
        closeBtnInside: false
        //focus: '.name'
    });

    // Ajax відправка форми
    $("form").submit(function(event){
        event.preventDefault();
        $.ajax({
            url: "https://formspree.io/sergiy.ilchyshyn@gmail.com",
            method: "POST",
            data: {
                name: $("#name").val(),
                email: $("#email").val(),
                message: $("#msg").val(),
                _subject: "Заявка із сайту ilchyshyn.ml"
            },
            dataType: "json"
        }).done(function(){
            $("#name").val("");
            $("#email").val("");
            $("#msg").val("");
            alert("Дякую за заявку! Найближчим часом з Вами зв'яжемося.");
            setTimeout(function(){
                $.magnificPopup.close();
            }, 1000); // закінчення setTimeout
        }).fail(function(){
           alert("Помилка при відправлені листа.")
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