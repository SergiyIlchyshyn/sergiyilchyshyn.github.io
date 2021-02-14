$(function() {
    // DateTimePicker
    flatpickr('#flatpickr', {
        "mode": "range"
    });
    // =================================================
    $('.input-container').last().css("margin-bottom", "0");
    $('.form__text').last().css("margin-top", "50px");
});