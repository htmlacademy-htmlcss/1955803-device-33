
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
let slideIndex = 0;
showSlides(slideIndex);

btnSliderNext.addEventListener("click", nextSlide);
/* Increase the index on 1 - show the following slide*/
function nextSlide() {
    showSlides(slideIndex += 1);

}

btnSliderPrev.addEventListener("click", previousSlide);
/*Reduces index on 1 - show the previous slide*/
function previousSlide() {
    showSlides(slideIndex -= 1);

}
/* Swipe btns*/
btnSliderPagination.forEach((element, index) => {
  element.addEventListener("click", () => {
     showSlides(index);
    });
 })

/* Swipe slides function*/
function showSlides(n) {
  slideIndex = (n + slides.length) % slides.length;
  sliderCounter.innerText = "0" + (slideIndex +1);

  for (let slide of slides) {
      slide.classList.remove("slide--show");
  }
  slides[slideIndex].classList.add("slide--show");

  for (let btn of btnSliderPagination) {
    btn.classList.remove("slider-pagination-btn--current");
  }
  btnSliderPagination[slideIndex].classList.add("slider-pagination-btn--current");
}


