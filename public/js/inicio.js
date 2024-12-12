document.addEventListener('DOMContentLoaded', function() {
    
    // funcionalidad loader 
    setTimeout(function() {
        document.querySelector(".loader-container").style.display = "none";
    }, 3000); // 3000 milisegundos = 3 segundos
});

//Tipeado de texto 
        const mensaje = document.getElementById('titulo');
        const texto = 'EDUCACIÓN DE CALIDAD';
        let indice = 0;
        function typeWriter() {
            if (indice < texto.length) {
                mensaje.innerHTML = texto.substring(0, indice + 1);
                indice++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(function() {
                    indice = 0;
                    mensaje.innerHTML = '';
                    typeWriter();
                }, 1000); // 1000 milisegundos = 1 segundo
            }
        }
        typeWriter();

//Menú responsive
        const toggleButton = document.getElementById('toggle-button');
        const menu = document.getElementById('menu');
        const menuIcon = document.getElementById('menu-icon');

        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('active');
            if (menu.classList.contains('active')) {
                menuIcon.innerHTML = '✖'; // Cierre de menú con '✖'
            } else {
                menuIcon.innerHTML = '&#9776;'; // ícono del menú responsive
            }

        });

//Movimiento de las Tarjetas
        document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('mouseover', () => {
        const randomX = Math.random() * 20 - 10; // Mueve en el eje X entre -10 y 10 px
        const randomY = Math.random() * 20 - 10; // Mueve en el eje Y entre -10 y 10 px
        const randomRotate = Math.random() * 20 - 10; // Gira entre -10 y 10 grados
        tarjeta.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
    });

    tarjeta.addEventListener('mouseout', () => {
        tarjeta.style.transform = ''; // Restablece la transformación al estado original
    });
});

// Detectar desplazamiento para activar el la sección
window.addEventListener('scroll', function() {
    const mainSection = document.querySelector('main');
    const position = mainSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.1; // Tiempo de espera en aparecer de la sección

    if (position < screenPosition) {
        mainSection.classList.add('active');
    }
});

// Función para aplicar la rotación constante al logo
function rotarLogo() {
    const logo = document.getElementById("logo");
    let angulo = 0;

    setInterval(() => {
        angulo += 3;  // Incrementa la rapidez de rotación
        logo.style.transform = `rotate(${angulo}deg)`;  // Aplica la rotación
    }, 10);  // Intervalo de tiempo en milisegundos para suavizar la rotación
}

// Llama a la función cuando la página se carga
window.onload = rotarLogo;
