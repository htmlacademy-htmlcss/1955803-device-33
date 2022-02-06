
// BTN CATALOG TOGGLE
let btnToggleCatalog = document.querySelector(".catalog-toggler-btn");
let catalogNav = document.querySelector(".catalog-toggler-nav");

// BTN CATALOG ACTION
btnToggleCatalog.addEventListener("click", clickBtnCatalog);
function clickBtnCatalog(evt){
  btnToggleCatalog.classList.toggle("active");
}

// SLIDER
// let btnSliderPrev = document.querySelector(".slider-btn-prev");
// let wrapSlide = document.querySelector(".wrap-slide");
// let btnSliderNext = document.querySelector(".slider-btn-next");

// let btnPagination = document.querySelectorAll(".slider-pagination-btn");
// let btnPaginationCurrent = document.querySelector(".slider-pagination-btn--current");
// SLIDER BTN ACTION
/*
btnSliderPrev.addEventListener("click", elementSlides);


function slids(){
  let slides = wrapSlide.children;
  let slideAll =[];
  for(let i=0;i<slides.length;i++){
    slideAll.push(slides[i]);
}
// console.log(slideAll);
return slideAll;
}


function elementSlides(){
  let allSlide = slids();
  for(let i=0;i<allSlide.length;i++){
  console.log(allSlide[i])

  }
}
*/
