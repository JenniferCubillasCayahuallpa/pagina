document.addEventListener("DOMContentLoaded", () => {
    const fechaInput = document.getElementById("fecha");
    const consultarBtn = document.getElementById("consultar-fecha");
    const eventoInfoDiv = document.getElementById("evento-info");

    // Establece la fecha actual como valor predeterminado
    const obtenerFechaActual = () => {
        const hoy = new Date();
        const dia = String(hoy.getDate()).padStart(2, "0");
        const mes = String(hoy.getMonth() + 1).padStart(2, "0"); // Los meses son base 0
        const año = hoy.getFullYear();
        return `${año}-${mes}-${dia}`;
    };

    fechaInput.value = obtenerFechaActual();

    // Función para consultar el evento del calendario
    const consultarFecha = () => {
        const fecha = fechaInput.value;

        if (!fecha) {
            eventoInfoDiv.innerHTML = "<p>Por favor, selecciona una fecha válida.</p>";
            return;
        }

        fetch(`http://localhost:3000/api/dates/${fecha}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la solicitud: " + response.status);
                }
                return response.json();
            })
            .then((data) => {
                if (data) {
                    eventoInfoDiv.innerHTML = `
                        <p><strong>Evento:</strong> ${data.nombre}</p>
                        <p><strong>Fecha:</strong> ${data.dia}</p>
                    `;
                } else {
                    eventoInfoDiv.innerHTML = "<p>No se encontró información para la fecha ingresada.</p>";
                }
            })
            .catch((error) => {
                console.error("Error al consultar la fecha:", error);
                eventoInfoDiv.innerHTML = "<p>Ocurrió un error al consultar la fecha.</p>";
            });
    };

    // Agregar evento al botón
    consultarBtn.addEventListener("click", consultarFecha);
});
