(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-ingredients-open]'),
    closeModalBtn: document.querySelector('[modal-ingredients-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
