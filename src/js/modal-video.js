(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-video-open]'),
    closeModalBtn: document.querySelector('[modal-video-close]'),
    modal: document.querySelector('[data-modal-video]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
