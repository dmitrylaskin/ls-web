const fn = (arg) => {
    return $('.reviews__item').filter((index, item) => {
        return $(item).attr('data-linked-with') === arg
    })
}


$('.interactive-avatar__link').click(event => {
    event.preventDefault()

    const $this = $(event.currentTarget)
    const target = $this.attr('data-open')
    const currentItem = $this.closest('.reviews__switcher-item')
    const itemToShow = fn(target)

    itemToShow.addClass('reviews__item--active').siblings().removeClass('reviews__item--active')
    currentItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active')
})