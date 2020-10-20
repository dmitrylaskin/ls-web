let button = document.getElementById('form-submit')
let modalWindow = document.querySelector('.modal')
let onClose = document.getElementById('modal-close')

let formName = document.forms[0].elements.name
let formPhone = document.forms[0].elements.phone
let textArea = document.getElementById('textArea')
let modalTitle = document.querySelector('.modal__title')


button.addEventListener('click', (event) => {
    event.preventDefault()

    modalWindow.style.display = 'block'
    body.classList.toggle('body--active-menu');

    modalTitle.classList.remove('modal__title-error')



    sendRequest('post', 'https://webdev-api.loftschool.com/sendmail')
        .then(data => {

            modalTitle.textContent = data.message

            if (data.status === 0) {
                modalTitle.classList.add('modal__title-error')
            }
        })


})
function sendRequest(method, url, body = null) {
    return fetch(url, {
        method: method,
        body: JSON.stringify({
                    name: formName.value,
                    comment: textArea.value,
                    phone: formPhone.value,
                    to: 'example@mail.no'
                }),
        headers: {'content-type': 'application/json'}
    })
        .then(response => {
        return response.json()
    })
}


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

