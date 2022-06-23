const tlProjPhotos = gsap.timeline();

tlProjPhotos.from('.our-projects__title', {opacity: 0})
.staggerFromTo('.our-projects__card', 1, {opacity: 0, scale: .75}, {opacity: 1, scale: 1}, 0.1).pause();