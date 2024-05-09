const menu = document.querySelector('#menu-icon');
const menuLinks = document.querySelector('.menu-links');

// Añade un evento "onclick" al elemento 'menu'
menu.onclick = () => {
      // Alterna la clase 'open' en el elemento 'menuLinks' cada vez que se hace clic en 'menu'
    menuLinks.classList.toggle('open');
}