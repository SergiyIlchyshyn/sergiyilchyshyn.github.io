/**
 * Created by Sergiy on 26.09.2017.
 */
$(document).ready(function () {
    $("#arrow").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1..0 мс
        $('body,html').animate({scrollTop: top}, 1500);
    }); // закінчення on

    // Initializing popup
    $(".button").magnificPopup();

    // Ajax відправка форми
    $("#form").submit(function(){
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