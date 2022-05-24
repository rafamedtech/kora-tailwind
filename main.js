import './style.css';

const mobileMenu = document.querySelector('#mobile-menu');
const nav = document.querySelector('header');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
  const menu = document.querySelector('#menu');
  if (menu.classList.contains('translate-x-full')) {
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
  } else {
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-full');
  }
});

// Fixed Navbar transition
window.addEventListener('scroll', () => {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('nav-active');
    nav.classList.remove('md:bg-transparent');
  } else {
    nav.classList.remove('nav-active');
    nav.classList.add('md:bg-transparent');
  }
});
