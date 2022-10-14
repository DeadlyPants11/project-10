(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open-icecream]'),
    closeModalBtn: document.querySelector('[modal-close-icecream]'),
    modal: document.querySelector('[data-modal-icecream]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open-icecoffee]'),
    closeModalBtn: document.querySelector('[modal-close-icecoffee]'),
    modal: document.querySelector('[data-modal-icecoffee]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-open-milkshake]'),
    closeModalBtn: document.querySelector('[modal-close-milkshake]'),
    modal: document.querySelector('[data-modal-milkshake]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
