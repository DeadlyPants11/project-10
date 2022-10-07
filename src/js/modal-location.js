(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-location-open]'),
    closeModalBtn: document.querySelector('[modal-location-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
