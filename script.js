const menuToggle = document.getElementById('menuToggle');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const menuLinks = fullscreenMenu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  fullscreenMenu.classList.toggle('is-open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('is-active');
    fullscreenMenu.classList.remove('is-open');
  });
});

// ── Slideshow ──
const track = document.querySelector('.hero__track');
const totalSlides = track.querySelectorAll('img').length;
const arrowLeft = document.querySelector('.hero__arrow--left');
const arrowRight = document.querySelector('.hero__arrow--right');
const ctas = document.querySelectorAll('.hero__cta');
let currentSlide = 0;

function goToSlide(index) {
  ctas[currentSlide].classList.remove('hero__cta--active');
  currentSlide = (index + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  ctas[currentSlide].classList.add('hero__cta--active');
}

arrowRight.addEventListener('click', () => goToSlide(currentSlide + 1));
arrowLeft.addEventListener('click', () => goToSlide(currentSlide - 1));
