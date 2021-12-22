// Sticky Navbar
const navbar = document.querySelector("header");
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
window.onscroll = navbarScroll;


console.log(navbar);

//navigation 

const nav = document.querySelector('.nav')
const toggler = document.querySelector('.toggler')
const close = document.querySelector('.nav__close')

toggler.addEventListener('click', () =>{
nav.classList.add('show')
})
close.addEventListener('click', () =>{
nav.classList.remove('show')
})


//preloader and pop-up text
window.onload = function () {
  document.querySelector(".preloader").style.display = "none";
};

//swiper
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});