const menu = document.querySelector('.menu');
const visible = document.querySelector('.top ul');

function visibility () {
  if(visible.style.display == 'none') {
    visible.style.display = 'flex';
    menu.style.opacity = '.5';
  } else {
    visible.style.display = 'none';
    menu.style.opacity = '1';
  }
}

menu.addEventListener('click', visibility);