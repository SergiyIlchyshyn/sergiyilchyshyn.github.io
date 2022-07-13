const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');

navBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

AOS.init();