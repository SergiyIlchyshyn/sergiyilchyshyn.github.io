// $(document).ready(function () {
// 	var link = $('.nav-link');
// 	// var link_active = $('.nav-link__active');
// 	var menu = $('#myTopnav');
//
// 	link.click(function () {
// 		link.toggleClass('nav-link__active');
// 		menu.toggleClass('menu-active');
// 	});
// 	// link_active.click(function () {
// 	// 	link.removeClass('nav-link__active');
// 	// });
// });

menu.onclick = function myFunc() {
	var x = document.getElementById('myTopnav');

	if (x.className === "mobilenav") {
		x.className += " menu-active";
	} else {
		x.className = "mobilenav";
	}
}