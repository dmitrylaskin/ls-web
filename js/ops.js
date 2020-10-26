const section = $('section')
const display = $('.maincontent')

let inScroll = false

section.first().addClass('active')

const perfTr = sectionEq => {

    if (inScroll === false) {
        inScroll = true
        const position = sectionEq * -100

        display.css({
            transform: `translateY(${position}%)`
        })
        section.eq(sectionEq).addClass('active').siblings().removeClass('active')

        setTimeout(() => {
            inScroll = false
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