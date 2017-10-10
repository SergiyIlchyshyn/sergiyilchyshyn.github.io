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
});     // закінчення ready