$(document).ready(function () {
   var toggle_link = $('.toggle-nav');
   var toggle_link_active = $('.active');
   var menu = $('.menu');

   toggle_link.click(function(){
       toggle_link.toggleClass('active');
       menu.toggleClass('menu-active');
   });
   toggle_link_active.click(function(){
       toggle_link.removeClass('active');
   })
});