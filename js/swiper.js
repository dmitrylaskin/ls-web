
// const swiperFn = () => {
//     if (innerWidth <= 768) {
//         var mySwiper = new Swiper('.swiper-container', {
//             // Optional parameters
//             direction: 'vertical',
//             loop: false,
//         })
//     }
// }
// swiperFn()
//

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
mySwiper.addEventListener('touchmove', {passive: true})