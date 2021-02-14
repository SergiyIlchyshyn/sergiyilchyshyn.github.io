$(document).ready(function() {
    // DateTimePicker
    flatpickr('#flatpickr', {
        "mode": "range"
    });

    // =================================================
    $('.input-container').last().css("margin-bottom", "0");
    $('.form__text').last().css("margin-top", "50px");

    // ================= Tabs ==========================
    $('ul.tabs__menu li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs__menu li').removeClass('current');
		$('.tab').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});