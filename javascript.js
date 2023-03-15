//Barras de habilidades//
const barras = document.querySelectorAll('.barra');

//Función llenar la barra de habilidades//
function llenarBarra(barra, porcentaje) {
  barra.style.width = `${porcentaje}%`;
}

//Función animar las barras de habilidades//
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

//Animación al cargar la página//
window.addEventListener('load', animarBarras);
