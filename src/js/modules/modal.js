let body = document.querySelector('body');
let modalWindow = document.querySelector('#modal-window');
let closeBtn = document.querySelector('#modal-close');


function openModal() {
    modalWindow.classList.toggle('modal__hide');
    body.classList.toggle('body__modal-open');
    body.classList.add('modal__open');
};

function closeModal() {
    modalWindow.classList.toggle('modal__hide');
    body.classList.toggle('body__modal-open');
    body.classList.remove('modal__open');
};

closeBtn.addEventListener('click', closeModal);

setTimeout(() => {
    openModal();
}, 10000);
