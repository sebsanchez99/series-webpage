// Selecciona elementos del DOM 
const menu = document.querySelector('#menu-icon');
const menuLinks = document.querySelector('.menu-links');

// Añade un evento onclick al elemento menu
menu.onclick = () => {
  // Llama a clase open cada vez que se da click
   menuLinks.classList.toggle('open');
}