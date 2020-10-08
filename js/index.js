const sliderList = document.getElementById('slider-list')
const sliderItem = document.querySelector('.slider__item')
const arrowLeft = document.querySelector('.arrow--left')
const arrowRight = document.querySelector('.arrow--right')

let sliderStep = 0
let lastSlide = (sliderList.scrollWidth - sliderItem.clientWidth)
lastSlide = -lastSlide


arrowRight.addEventListener('click', () => {

    sliderStep = sliderStep - sliderItem.clientWidth

    if (sliderStep < lastSlide) sliderStep = 0

    sliderList.style.transform = `translate(${sliderStep}px)`

})
arrowLeft.addEventListener('click', () => {

    sliderStep = sliderStep + sliderItem.clientWidth

    if (sliderStep > 0) sliderStep = lastSlide

    sliderList.style.transform = `translate(${sliderStep}px)`

})