const sliderList = document.getElementById('slider-list')
const sliderItem = document.querySelector('.slider__item')
const arrowLeft = document.querySelector('.arrow--left')
const arrowRight = document.querySelector('.arrow--right')
const firstSlideTitle = document.getElementById('first-slide-title')
const secondSlideTitle = document.getElementById('second-slide-title')

document.addEventListener('DOMContentLoaded', () => {
    console.log('page is loaded')})


let sliderStep = 0
let lastSlide = (sliderList.scrollWidth - sliderItem.clientWidth)
lastSlide = -lastSlide
console.log(sliderStep)


arrowRight.addEventListener('click', () => {

    sliderStep = sliderStep - sliderItem.clientWidth

    if (sliderStep < lastSlide && sliderStep < lastSlide-1) sliderStep = 0

    sliderList.style.transform = `translate(${sliderStep}px)`

})
arrowLeft.addEventListener('click', () => {

    sliderStep = sliderStep + sliderItem.clientWidth

    if (sliderStep > 0) sliderStep = lastSlide

    sliderList.style.transform = `translate(${sliderStep}px)`


})


let burger  = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');

links.forEach(function(element){
    element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
    burger.classList.toggle('burger--active');
    overlay.classList.toggle('overlay--active');
    body.classList.toggle('body--active-menu');
}

burger.addEventListener('click' , toggleMenu);



const butifySliderTitle = () => {
    if (innerWidth <= 480) {
        firstSlideTitle.innerHTML = 'Батончик<br>“Гранола виноград”'
        secondSlideTitle.innerHTML = 'Батончик<br> “Морские водоросли”'
    }
}
butifySliderTitle()




let sections = document.querySelectorAll('.accordion-section')

sections.forEach(section => {
    section.addEventListener('click', () => {
        section
            .querySelector('.accordion-section__body')
            .querySelector('.accordion-section__text').style.maxHeight = '0'
    })
  
})