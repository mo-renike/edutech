// Sticky Navbar
const navbar = document.querySelector("nav");
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
window.onscroll = navbarScroll;


