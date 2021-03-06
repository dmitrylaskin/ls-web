let button = document.getElementById('form-submit')
let modalWindow = document.querySelector('.modal')
let onClose = document.getElementById('modal-close')

let formName = document.forms[0].elements.name
let formPhone = document.forms[0].elements.phone
let textArea = document.getElementById('textArea')
let modalTitle = document.querySelector('.modal__title')


button.addEventListener('click', async (event) => {
    event.preventDefault()

    let fieldValues = [formName, formPhone, textArea]
    fieldValues.forEach(field => fieldValidate(field))

    let errorFields = document.querySelectorAll('.error-field')

    if (errorFields.length === 0) {


        let data = await sendRequest('post','https://webdev-api.loftschool.com/sendmail')

                modalWindow.style.display = 'block'
                body.classList.toggle('body--active-menu');
                modalTitle.classList.remove('modal__title-error')
                modalTitle.textContent = data.message

                if (data.status === 0) {
                    modalTitle.classList.add('modal__title-error')
                }

    }

})
async function sendRequest(method, url, body = null) {
    let response = await fetch(url, {
        method: method,
        body: JSON.stringify({
                    name: formName.value,
                    comment: textArea.value,
                    phone: formPhone.value,
                    to: 'example@mail.no'
                }),
        headers: {'content-type': 'application/json'}
    })
        return response.json()
}

function fieldValidate (fieldName) {
    fieldName.classList.remove('error-field')
    if (fieldName.value.trim() === '') fieldName.classList.add('error-field')
}

onClose.addEventListener('click', (event) => {
    event.preventDefault()

    modalWindow.style.display = 'none'
    body.classList.toggle('body--active-menu');
    document.forms[0].reset()
})
window.onclick = (event) => {
    if (event.target === modalWindow) {
        modalWindow.style.display = 'none'
        body.classList.toggle('body--active-menu');
        console.log(document.forms[0])
        document.forms[0].reset()
    }
}

