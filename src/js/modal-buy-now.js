(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[modal-buy-now-open]'),
    closeModalBtn: document.querySelector('[modal-buy-now-close]'),
    modal: document.querySelector('[data-modal-buy-now]'),
  };

  for (let i = 0; i < refs.openModalBtn.length; ++i) { 
    refs.openModalBtn[i].addEventListener('click', toggleModal);
  }
  
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
