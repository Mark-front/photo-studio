let tlAbStud = gsap.timeline()
  .from('.about-studio__title', { opacity: 0}, .1)
  .fromTo('.about-studio__text', { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, .2)
  .from('.subscribe__title', { opacity: 0}, .3)
  .from('.subscribe__input', { opacity: 0, y: 50}, .4)
  .from('.subscribe__btn', { opacity: 0, x: -30}, .7)
  .pause();

