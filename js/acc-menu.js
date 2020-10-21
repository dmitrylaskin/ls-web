const tabs = document.querySelectorAll('.sizes__item-title');

tabs.forEach((tab) => {
    tab.addEventListener('click', function ($event) {
        const parentElement = $event.target.parentElement;
        const descriptionElement = parentElement.querySelector('.sizes__item-description');

        if (descriptionElement.classList.contains('sizes__item-description_active')) {
            descriptionElement.classList.remove('sizes__item-description_active');
        } else {
            descriptionElement.classList.add('sizes__item-description_active');
        }

        document.querySelectorAll('.sizes__item-description').forEach((item) => {
            if (item.parentElement.querySelector('.sizes__item-title').textContent !== $event.target.textContent){
                item.classList.remove('sizes__item-description_active');
            }
        });
    });
})
