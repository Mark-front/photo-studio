const burgerBtnOpen = document.querySelector('.burger-open');
const burgerBtnClose = document.querySelector('.burger__close');
const anchors = document.querySelectorAll('a[href*="#"]')
const tlBurger = gsap.timeline();
//container to visible
tlBurger.fromTo('.burger', {opacity: 0, display:'none'}, {opacity: 1, display:'block'}, .1)
//nav to visible and top
.fromTo('.nav--burger', {opacity: 0, y: 50}, {opacity: 1, y: 0}, .3)
//social to visible and top
.fromTo('.burger__tel', {opacity: 0, x: -20}, {opacity: 1, x: 0 }, .3).pause()

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    tlBurger.reverse(1);
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

burgerBtnOpen.addEventListener('click',() => tlBurger.play());
burgerBtnClose.addEventListener('click',() => tlBurger.reverse(1));
window.addEventListener('resize', function(){
  // document.querySelector('#burger').style.display = "none";
  tlBurger.restart(true).pause();
})

