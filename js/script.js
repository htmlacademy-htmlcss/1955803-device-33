
// BTN CATALOG TOGGLE
let btnToggleCatalog = document.querySelector(".catalog-toggler-btn");
let catalogNav = document.querySelector(".catalog-toggler-nav");

// BTN CATALOG ACTION
btnToggleCatalog.addEventListener("click", clickBtnCatalog);
function clickBtnCatalog(evt){
  btnToggleCatalog.classList.toggle("active");
}

// SLIDER
let btnSliderPrev = document.querySelector(".slider-btn-prev");
let btnSliderNext = document.querySelector(".slider-btn-next");
let slides = document.querySelectorAll(".slide");
let sliderCounter = document.querySelector(".slider-counter");
let btnSliderPagination = document.querySelectorAll(".slider-pagination-btn");

/* Install the default slide and btns index */
let slideIndex = 1;
showSlides(slideIndex);

btnSliderNext.addEventListener("click", nextSlide);
/* Increase the index on 1 - show the following slide*/
function nextSlide() {
    showSlides(slideIndex += 1);
     sliderCounter.innerText = "0" + slideIndex;
     showBtn();
}

btnSliderPrev.addEventListener("click", previousSlide);
/*Reduces index on 1 - show the previous slide*/
function previousSlide() {
    showSlides(slideIndex -= 1);
     sliderCounter.innerText = "0" + slideIndex;
     showBtn();
}


/* Swipe slides function*/
function showSlides(n) {

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
      slideIndex = slides.length;
  }

  for (let slide of slides) {
      slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}
/* Swipe btns function*/
function showBtn(n) {

  if (n > btnSliderPagination.length) {
    slideIndex = 1;
  }

  if (n < 1) {
      slideIndex = btnSliderPagination.length;
  }
  for (let btn of btnSliderPagination) {
    btn.style.backgroundColor = "transparent";
}
btnSliderPagination[slideIndex - 1].style.backgroundColor = "var(--basic-black)";

}
