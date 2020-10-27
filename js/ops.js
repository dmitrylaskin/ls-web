const section = $('section')
const display = $('.maincontent')

let inScroll = false

section.first().addClass('active')

const perfTr = sectionEq => {

    if (inScroll === false) {
        inScroll = true
        const position = sectionEq * -100

        const currentSec = section.eq(sectionEq)
        const menuTheme = currentSec.attr('data-sidemenu-theme')
        const sideMenu = $('.fixed-menu')

        if (menuTheme === 'green') {
            sideMenu.addClass('fixed-menu-shadowed')
        } else {
            sideMenu.removeClass('fixed-menu-shadowed')
        }



        display.css({
            transform: `translateY(${position}%)`
        })
        section.eq(sectionEq).addClass('active').siblings().removeClass('active')

        setTimeout(() => {
            inScroll = false

            sideMenu
                .find('.fixed-menu__item')
                .eq(sectionEq)
                .addClass('fixed-menu__item--active')
                .siblings()
                .removeClass('fixed-menu__item--active')


        },600)
    }


}

const scrollView = direction => {
    const active = section.filter('.active')
    const nextSec = active.next()
    const prevSec = active.prev()

    if (direction === 'next' && nextSec.length) {
        perfTr(nextSec.index())

    }
    if (direction === 'prev' && prevSec.length) {
        perfTr(prevSec.index())
    }
}

// window.addEventListener('resize', () => {
//     if (innerWidth > 768) {
//
//     }
// })

$(window).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY

    if (deltaY > 0) {
        scrollView('next')
    }
    if (deltaY < 0) {
        scrollView('prev')
    }
})
$(window).on('keydown', e => {

    const tagName = e.target.tagName.toLowerCase()

    if (tagName !== 'input' && tagName !== 'textarea') {
        switch (e.keyCode) {
            case 38:
                scrollView('prev')
                break
            case 40:
                scrollView('next')
                break

        }
    }
})

$(`[data-scroll-to]`).click(e => {
    e.preventDefault()

    const $this = $(e.currentTarget)
    const target = $this.attr('data-scroll-to')
    const reqSec = $(`[data-section-id=${target}]`)

    perfTr(reqSec.index())
})



    // $('body').swipe({
    //
    //     swipe: function (event, direction) {
    //
    //         const scroller = viewportScroller();
    //         let scrollDirection = ''
    //
    //         if(direction === 'up') scrollDirection = 'next'
    //         if(direction === 'down') scrollDirection = 'prev'
    //
    //
    //         alert(direction);
    //         scroller[scrollDirection]()
    //     },
    // });


// $(function() {
//     $("body").swipe( {
//         //Generic swipe handler for all directions
//         swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//             $(this).text("You swiped " + direction );
//         }
//     });
//
//     //Set some options later
//     $("body").swipe( {fingers:2} );
// });
