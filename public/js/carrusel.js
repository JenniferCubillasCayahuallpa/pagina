document.addEventListener('DOMContentLoaded', function() {
    var videoCarousel = new bootstrap.Carousel(document.getElementById('videoCarousel'), {
      interval: 1000, // Cambia de video cada 5 segundos (ajusta este valor según prefieras)
      ride: 'carousel', // Asegura que el carrusel comience a desplazarse automáticamente
      pause: false // El carrusel no se pausa al pasar el mouse por encima
    });
  
  })