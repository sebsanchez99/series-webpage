// Selecciona elementos del DOM 
const menu = document.querySelector('#menu-icon');
const menuLinks = document.querySelector('.menu-links');
const catalogueSection = document.querySelector('#catalogue');
const scrollButton = document.querySelector('.scroll');
const scrollLink = scrollButton.querySelector('a');

// Añade un evento onclick al elemento menu
menu.onclick = () => {
  // Llama a clase open cada vez que se da click
   menuLinks.classList.toggle('open');
}

// Escucha eventos de desplazamiento para determinar la posición del usuario
document.addEventListener("scroll", () => {
  // Detecta cuando el usuario está en la parte superior de la pantalla
  if (window.scrollY === 0) {
    scrollLink.href = "#catalogue";
    scrollLink.innerHTML = `
      <i class="fa fa-hand-o-down" aria-hidden="true"></i>
      Ir abajo
    `;
  }

  // Calcula posición y altura de la sección catálogo(Sección que se encuentra más abajo)
  const catalogueOffsetTop = catalogueSection.offsetTop;
  const catalogueHeight = catalogueSection.offsetHeight;

  // Determina si el usuario está dentro de la sección catálogo
  if (window.scrollY >= catalogueOffsetTop - 10 && window.scrollY < catalogueOffsetTop + catalogueHeight) {
    scrollLink.href = "#top";
    scrollLink.innerHTML = `
      <i class="fa fa-hand-o-up" aria-hidden="true"></i>
      Ir arriba
    `;
  }
});

