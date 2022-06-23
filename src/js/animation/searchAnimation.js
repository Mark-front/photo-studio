const searchBtnOpen = document.querySelector('.search-open');
const searchBtnClose = document.querySelector('.search__btn');
let reversed = false;

function searchClick() {
  const tlSearch = gsap.timeline();
  tlSearch.fromTo('.header__search',
    {opacity: 0, display:'none', y: 20}, 
    {opacity: 1, display:'grid', y: 0}, .1)
  .fromTo('.search-open',
    {opacity: 1, pointerEvents: "auto"}, {opacity: 0, pointerEvents: "none"}, .1)

  if (!reversed) {
    tlSearch.play();
    reversed = !reversed;
  } else {
    reversed = !reversed;
    tlSearch.reverse(1);
  }

}

searchBtnOpen.addEventListener('click',() => searchClick());
searchBtnClose.addEventListener('click',() => searchClick());