const sliderList = document.getElementById('slider-list')
const sliderItem = document.querySelector('.slider__item')
const arrowLeft = document.querySelector('.arrow--left')
const arrowRight = document.querySelector('.arrow--right')
const burger = document.getElementById('burger')
const navbar = document.getElementById('navbar')
const burgerCloseBtn = document.getElementById('burger-close')

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
burger.addEventListener('click', () => {
 
    navbar.classList.add('navbar--burger')
    document.body.classList.add('body--active-menu')
    burger.style.display = 'none'

    burgerCloseBtn.style.cssText = `
    display: block;
    position: absolute;
    top: 2.5%;
    right: 4.5%;
    cursor: pointer;
    z-index: 20;
    `

})
burgerCloseBtn.addEventListener('click', () => {
    navbar.classList.remove('navbar--burger')
    document.body.classList.remove('body--active-menu')
    burger.style.display = 'inline-flex'
    burgerCloseBtn.style.display = 'none'
})
window.addEventListener('resize', () => {
    if (innerWidth > 768) {
        burger.style.display = 'none'
    } else burger.style.display = 'inline-flex'
})

