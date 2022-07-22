const $menuIcon = document.querySelector('#menu-icon');
const $navMenu = document.querySelector('#nav-menu');
const $navLinks = document.querySelector('#nav-links');

$menuIcon.addEventListener('click', () => {
  if($navMenu.classList.contains('none')) {
    $navMenu.classList.remove('none');
    $navMenu.classList.add('block');
    $navLinks.classList.remove('none');
    $navLinks.classList.add('block');
    $menuIcon.src = './images/icon-close.svg';
  } else if ($navMenu.classList.contains('block')) {
    $navMenu.classList.remove('block');
    $navMenu.classList.add('none');
    $navLinks.classList.remove('block');
    $navLinks.classList.add('none');
    $menuIcon.src = './images/icon-hamburger.svg';
  }
})

