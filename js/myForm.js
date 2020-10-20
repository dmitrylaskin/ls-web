let button = document.getElementById('form-submit')
let modalWindow = document.querySelector('.modal')
let onClose = document.getElementById('modal-close')

let formName = document.forms[0].elements.name
let formPhone = document.forms[0].elements.phone
let textArea = document.getElementById('textArea')
let modalTitle = document.querySelector('.modal__title')

console.log(document.forms[0].elements.name.value)
console.log(document.forms[0].elements.phone.value)
console.log(document.forms[0].phone.value)

button.addEventListener('click', (event) => {
    event.preventDefault()
    modalWindow.style.display = 'block'
    body.classList.toggle('body--active-menu');
    console.log(formName.value)
    console.log(formPhone)


    sendRequest('post', 'https://webdev-api.loftschool.com/sendmail')
        .then(data => {
            console.log(data.message)

            modalTitle.textContent = data.message
        })
    console.log(modalTitle.textContent)


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

