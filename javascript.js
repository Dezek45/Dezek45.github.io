// Index //

// Nosotros //


// Contacto //

// Obtener el formulario
const form = document.querySelector('form');

// Escuchar el evento submit del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el envío por defecto del formulario

  // Obtener los valores de los campos del formulario
  const nombre = document.querySelector('#nombre').value;
  const correo = document.querySelector('#correo').value;
  const mensaje = document.querySelector('#mensaje').value;

  // Validar que los campos no estén vacíos
  if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
    alert('Por favor complete todos los campos.');
    return;
  }

  // Crear el objeto FormData y agregar los valores del formulario
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('correo', correo);
  formData.append('mensaje', mensaje);

  // Enviar los datos del formulario utilizando Fetch API
  fetch('enviar.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Mostrar el mensaje de éxito o error según la respuesta del servidor
    if (data.status === 'success') {
      alert('El mensaje ha sido enviado.');
    } else {
      alert('Ha ocurrido un error. Por favor intente nuevamente.');
    }
  })
  .catch(error => {
    // Mostrar el mensaje de error en caso de que la petición falle
    console.error('Error:', error);
    alert('Ha ocurrido un error. Por favor intente nuevamente.');
  });
});
