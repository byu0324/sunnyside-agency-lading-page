const menu = document.querySelector('.menu');
const visible = document.querySelector('.top .mobile');

visible.style.opacity = '0';

function visibility () {
  if(visible.style.opacity == '0') {
    visible.style.opacity = '01';
    menu.style.opacity = '.5';
  } else {
    visible.style.opacity = '0';
    menu.style.opacity = '1';
  }
}

menu.addEventListener('click', visibility);