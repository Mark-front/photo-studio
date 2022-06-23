const addressBtnOpen = document.querySelector('.address__open');
const addressBtnClose = document.querySelector('.address__close');
let tlAddress = gsap.timeline()
  .fromTo('.contacts__address', { x: '-80%' }, { x: 0 }, .1)
  .fromTo('.address__open',
    { opacity: 1, display: "block" }, { opacity: 0, display: "none" }, .1)
  .fromTo('.address__close',
    { opacity: 0, display: "none" }, { opacity: 1, display: "block" }, .2)
  .fromTo('.address__title', { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, .3)
  .fromTo('.address__address', { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, .4)
  .fromTo('.address__tel', { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, .5)
  .pause();

function requestUpdate() {
  const screenWidth = screen.width;
  if(screenWidth <= 1024) {
    tlAddress = gsap.timeline()
      .fromTo('.contacts__address', { y: '75%', x:0 }, { y: 0, x:0 }, .1)
      .fromTo('.address__open',
        { opacity: 1, display: "block" }, { opacity: 0, display: "none" }, .1)
      .fromTo('.address__close',
        { opacity: 0, display: "none" }, { opacity: 1, display: "block" }, .2)
      .fromTo('.address__title', { opacity: 0, y: 50, x: 0 }, { opacity: 1, y: 0, x:0 }, .3)
      .fromTo('.address__address', { opacity: 0, y: 50, x: 0 }, { opacity: 1, y: 0, x:0 }, .4)
      .fromTo('.address__tel', { opacity: 0, y: 50, x: 0 }, { opacity: 1, y: 0, x:0 }, .5)
      .pause();
  } else {
    tlAddress = gsap.timeline()
      .fromTo('.contacts__address', { x: '-80%', y: 0 }, { x: 0, y: 0 }, .1)
      .fromTo('.address__open',
        { opacity: 1, display: "block" }, { opacity: 0, display: "none" }, .1)
      .fromTo('.address__close',
        { opacity: 0, display: "none" }, { opacity: 1, display: "block" }, .2)
      .fromTo('.address__title', { opacity: 0, x: -50, y: 0 }, { opacity: 1, x: 0, y: 0 }, .3)
      .fromTo('.address__address', { opacity: 0, x: -50, y: 0 }, { opacity: 1, x: 0, y: 0 }, .4)
      .fromTo('.address__tel', { opacity: 0, x: -50, y: 0 }, { opacity: 1, x: 0, y: 0 }, .5)
      .pause();
  }
}
requestUpdate()
window.addEventListener("resize",() => requestUpdate());
addressBtnOpen.addEventListener('click', () => tlAddress.play());
addressBtnClose.addEventListener('click', () => tlAddress.reverse(1));