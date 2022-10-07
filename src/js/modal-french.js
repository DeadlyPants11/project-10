(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-french-open]'),
    closeModalBtn: document.querySelector('[modal-french-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
