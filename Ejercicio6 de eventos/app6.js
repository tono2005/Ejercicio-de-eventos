// Obtén todos los elementos con la clase "elemento"
const elementos = document.querySelectorAll('.elemento');

// Agrega el evento click a cada elemento
elementos.forEach(elemento => {
  elemento.addEventListener('click', function() {
    // Elimina la clase "activo" de cualquier otro elemento
    elementos.forEach(elemento => {
      elemento.classList.remove('activo');
    });

    // Agrega la clase "activo" al elemento clickeado
    this.classList.add('activo');
  });
});