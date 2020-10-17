const navigation = document.getElementById('navigation');

window.addEventListener('scroll', function() {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    navigation.classList.toggle("slicky", top > 50);
});