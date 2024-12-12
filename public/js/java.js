function actReloj() {
    let hhmmss = new Date();
    let horas = hhmmss.getHours();
    let minutos = hhmmss.getMinutes();
    let segundos = hhmmss.getSeconds();
    let lahora = "";

    // Convertimos los números a dos dígitos, o sea, 6 -> 06
    horas = (horas <= 9) ? ("0" + horas) : horas;
    minutos = (minutos <= 9) ? ("0" + minutos) : minutos;
    segundos = (segundos <= 9) ? ("0" + segundos) : segundos;

    // Aquí construimos la cadena de texto HTML con la hora
    lahora = horas + ":" + minutos + ":" + segundos;

    // Obtiene el elemento con el ID 'reloj'
    let reloj = document.getElementById('reloj');

    // Actualiza el contenido del elemento con la hora actual
    reloj.innerHTML = lahora;

    // Ejecuta la función cada segundo (1000 miliseg)
    setTimeout(actReloj, 1000);
}

// Llama a la función actReloj() cuando se carga la página
window.onload = function() {
    actReloj();
};