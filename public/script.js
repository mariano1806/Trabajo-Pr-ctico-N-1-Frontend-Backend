function obtenerSaludo() {
    const nombre = document.getElementById('nombreInput').value;
    if (!nombre) {
      document.getElementById('mensaje').textContent = 'Por favor ingresá un nombre.';
      return;
    }
  
    fetch(`/saludo/${nombre}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('mensaje').textContent = data;
      })
      .catch(error => {
        document.getElementById('mensaje').textContent = 'Hubo un error al obtener el saludo.';
        console.error(error);
      });
  }
  