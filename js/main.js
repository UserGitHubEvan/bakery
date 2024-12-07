const c = console.log;

const backdrop = document.querySelector('.backdrop');
const modalBtnOpens = document.querySelectorAll('#modal-btn-open');
const modalBtnClose = document.querySelector('#modal-btn-close');

const toggleModal = () => backdrop.classList.toggle('is-hidden');

modalBtnOpens.forEach(el => {
    el.addEventListener('click', toggleModal);
});
modalBtnClose.addEventListener('click', toggleModal);