const sliderList = document.getElementById('slider-list')
const sliderItem = document.querySelector('.slider__item')
const arrowLeft = document.querySelector('.arrow--left')
const arrowRight = document.querySelector('.arrow--right')
const navbar = document.getElementById('navbar')
const sliderTitle = document.querySelector('.slider-desc__title')


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

// window.addEventListener('resize', () => {
//     if (innerWidth > 768) {
//         burger.style.display = 'none'
//     } else burger.style.display = 'block'
// })

// burger.addEventListener('click', () => {
//
//     navbar.classList.add('navbar--burger')
//     document.body.classList.add('body--active-menu')
//     burger.style.display = 'none'
//
//     burgerCloseBtn.style.cssText = `
//     display: block;
//     position: fixed;
//     top: 2.5%;
//     right: 4.5%;
//     cursor: pointer;
//     z-index: 30;
//     `
//
// })
// burgerCloseBtn.addEventListener('click', () => {
//     navbar.classList.remove('navbar--burger')
//     document.body.classList.remove('body--active-menu')
//     burger.style.display = 'inline-flex'
//     burgerCloseBtn.style.display = 'none'
// })


// burgerLink.addEventListener('click', (event) => {
//     event.preventDefault()
//
//     navbar.classList.remove('navbar--burger')
//     document.body.classList.remove('body--active-menu')
//     burger.style.display = 'inline-flex'
//     burgerCloseBtn.style.display = 'none'
// })
// burgerLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault()
//
//         navbar.classList.remove('navbar--burger')
//         document.body.classList.remove('body--active-menu')
//         burger.style.display = 'inline-flex'
//         burgerCloseBtn.style.display = 'none'
//
//     })
// })


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
        sliderTitle.innerHTML = 'Батончик<br>“Гранола виноград”'
    }
}
butifySliderTitle()