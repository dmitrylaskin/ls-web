let button = document.getElementById('form-submit')
let modalWindow = document.querySelector('.modal')
let onClose = document.getElementById('modal-close')

button.addEventListener('click', (event) => {
    event.preventDefault()
    modalWindow.style.display = 'block'
    body.classList.toggle('body--active-menu');
    console.log('form btn')


})
onClose.addEventListener('click', (event) => {
    event.preventDefault()

    modalWindow.style.display = 'none'
    body.classList.toggle('body--active-menu');
})
window.onclick = (event) => {
    if (event.target === modalWindow) {
        modalWindow.style.display = 'none'
        body.classList.toggle('body--active-menu');
    }
}