const tlHeroLeft = gsap.timeline({delay: .5});
const tlHeroPhotos = gsap.timeline({delay: 1});
//block hero__left to visible
tlHeroLeft.from('.hero__main-img', {opacity: 0}, .2)
  //block hero__left to top
  .from(".content__title", {y: 100}, .3)
  //block hero__title to top with easing
  .fromTo(".content__button", {opacity: 0, y: 300}, {opacity: 1, y: 0,  ease: "expo.out"}, .4)
  //block hero__descr to visible
  .from('.content__description', {opacity: 0}, .5)

//the photos will be visible in turn
tlHeroPhotos.from('.pictures__title', {opacity: 0})
  .staggerFromTo('.list-2-halves__item', 1, {opacity: 0, scale: .75}, {opacity: 1, scale: 1}, 0.3)
