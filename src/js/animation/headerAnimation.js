const tlHeader = gsap.timeline({delay: 0.5})
  .fromTo('.header', {opacity: 0}, {opacity: 1}, 0.1)
  .fromTo('.header__logo', {opacity: 0, x: -20}, {opacity: 1, x: 0})
  .staggerFromTo(".header__nav--top>.nav__list>.nav__item", 0.2, {opacity: 0, x: -20}, {opacity: 1, x: 0}, 0.1)
  .staggerFromTo(".social__item", 0.2, {opacity: 0, y:-10, scale: 2}, {opacity: 1, y: 0, scale: 1}, 0.1).pause();
document.addEventListener('DOMContentLoaded', () => {
  tlHeader.play()
});