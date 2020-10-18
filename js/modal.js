$('form').submit( event => {
    event.preventDefault()

    $.fancybox.open({
        src: '#modal',
        type: 'inline'
    })
})

$('.app-submit-btn').click(event => {
    event.preventDefault()

    $.fancybox.close()
})