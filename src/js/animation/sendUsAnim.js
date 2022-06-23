let tlSendUs = gsap.timeline()
  .from('.send-us__title', { opacity: 0}, .1)
  .fromTo('.send-us__tip', { opacity: 0, x: -20 }, { opacity: 1, x: 0 }, .1)
  .staggerFromTo('.send-us__form>label>.input', .3, {opacity: 0, scale: 0, transformOrigin: "left top", ease: "power4.out"}, {opacity: 1, scale: 1}, 0.1)
  .fromTo('.form-communication__btn', {opacity: 0, scale: 0, transformOrigin: "left top", ease: "power4.out"}, {opacity: 1, scale: 1}, .6 )
  .pause();

