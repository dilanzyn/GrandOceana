/* simple hamburger ⇄ menu toggle  */
const hamburger  = document.getElementById('hamburger');
const navLeft    = document.getElementById('nav-left');
const navRight   = document.getElementById('nav-right');

hamburger.addEventListener('click', () => {
  navLeft.classList.toggle('show');
  navRight.classList.toggle('show');
  hamburger.classList.toggle('open');
});
