function stickyHeader() {
    const element = document.querySelector(".main-header");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > 0) {
        element.classList.add("scrolled");
    } else {
        element.classList.remove("scrolled");
    }
}
$(window).scroll(function(){
    stickyHeader();
});
$(document).ready(function () {
    /*===== Menu link active =====*/
    let menuLink = $(".nav__menu .nav__list li a");
    menuLink.on("click", menuLink, function (event) {
        // event.preventDefault();
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