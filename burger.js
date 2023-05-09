const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelector('.menu-items');
const barsIcon = document.querySelector('.fa-bars');
const timesIcon = document.createElement('i');
timesIcon.classList.add('fa', 'fa-times');

burgerMenu.addEventListener('click', () => {
  menuItems.classList.toggle('show');
  barsIcon.classList.toggle('hide');
  burgerMenu.appendChild(timesIcon);
});

timesIcon.addEventListener('click', () => {
  menuItems.classList.toggle('show');
  timesIcon.classList.toggle('hide');
  burgerMenu.removeChild(timesIcon);
});