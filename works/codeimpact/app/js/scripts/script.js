$(document).ready(function () {
    /*===== Menu link active =====*/
    let menuLink = $(".nav__menu .nav__list li a");
    menuLink.on("click", menuLink, function (event) {
        event.preventDefault();
		menuLink.removeClass("active");
        $(this).addClass("active");
	});
    
    /*===== language link active =====*/
    let langLink = $(".nav__menu .nav__lang li a");
    langLink.on("click", langLink, function (event) {
        event.preventDefault();
		langLink.removeClass("active");
        $(this).addClass("active");
	});
});