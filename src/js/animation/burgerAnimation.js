const burgerBtnOpen = document.querySelector('.burger-open');
const burgerBtnClose = document.querySelector('.burger__close');
let reversed = false;

function burgerClick() {
  const tlBurger = gsap.timeline();
  //container to visible
  tlBurger.fromTo('.burger', {opacity: 0, display:'none'}, {opacity: 1, display:'block'}, .1)
  //nav to visible and top
  .fromTo('.nav--burger', {opacity: 0, y: 50}, {opacity: 1, y: 0}, .3)
  //social to visible and top
  .fromTo('.burger__tel', {opacity: 0, x: -20}, {opacity: 1, x: 0 }, .3)

  if (!reversed) {
    tlBurger.play();
    reversed = !reversed;
  } else {
    reversed = !reversed;
    tlBurger.reverse(1);
  }

}
burgerBtnOpen.addEventListener('click',() => burgerClick());
burgerBtnClose.addEventListener('click',() => burgerClick());
window.addEventListener('resize', function(){
  document.querySelector('#burger').style.display = "none";
  reversed = false;
})
