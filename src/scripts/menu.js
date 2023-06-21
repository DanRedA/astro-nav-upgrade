document.querySelector('.menu-icon').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
  [...document.querySelectorAll('.navmenu-toggle')].forEach((e) => {
    e.classList.toggle('hidden');
  });
});