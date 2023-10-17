const refs = {
  burgerMenu: document.querySelector('.js-menu'),
  navList: document.querySelector('.js-nav'),
};

refs.navList.addEventListener('click', onListClick);

function onListClick(ev) {
  refs.burgerMenu.classList.remove('is-open');
}
