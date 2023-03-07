// Alerta en el botón "Ver nuestros servicios" (Sección Hero) //
const heroButton = document.querySelector(".hero .btn-cta");

heroButton.addEventListener("click", function(event) {
  event.preventDefault();
  alert("Lo sentimos, esta sección está en construcción.");
});

// Alerta en el botón "Ver nuestros servicios" (Diseño web) //
const button = document.querySelector(".dos-columnas .btn-cta");
const servicesSection = document.querySelector(".servicios");

button.addEventListener("click", function(event) {
  event.preventDefault();
  servicesSection.scrollIntoView({ behavior: "smooth" });
});

// Efectos hover en los elementos del menú de navegación //
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("mouseover", function() {
    this.style.textDecoration = "underline";
  });
  
  link.addEventListener("mouseout", function() {
    this.style.textDecoration = "";
  });
});

// Color de fondo del header al hacer hover sobre el log //
const logo = document.querySelector(".logo img");
const header = document.querySelector("header");

logo.addEventListener("mouseover", function() {
  header.style.backgroundColor = "gray";
});

logo.addEventListener("mouseout", function() {
  header.style.backgroundColor = "";
});