//Obtenemos las barras de habilidades
const barras = document.querySelectorAll('.barra');

//Función para llenar la barra de habilidades
function llenarBarra(barra, porcentaje) {
  barra.style.width = `${porcentaje}%`;
}

//Función para animar las barras de habilidades
function animarBarras() {
  barras.forEach(barra => {
    const porcentaje = barra.dataset.porcentaje;
    let progreso = 0;
    const intervalo = setInterval(() => {
      llenarBarra(barra, progreso);
      progreso++;
      if (progreso > porcentaje) {
        clearInterval(intervalo);
      }
    }, 10);
  });
}

//Evento que dispara la animación al cargar la página
window.addEventListener('load', animarBarras);
