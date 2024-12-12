function toggleCard(card) {
    // Obtener todas las cartas
    const cards = document.querySelectorAll('.card');

    // Iterar sobre todas las cartas
    cards.forEach((otherCard) => {
        // Si la carta actual no es la que se clicó, cerrarla
        if (otherCard !== card) {
            otherCard.classList.remove('active');
            otherCard.style.transform = 'translateY(0)'; // Resetea su posición
        }
    });

    // Alternar la clase 'active' para la carta clicada
    const isActive = card.classList.toggle('active');

    // Si la carta está activa, desplazarla hacia arriba
    if (isActive) {
        card.style.transform = 'translateY(-20px)'; // Ajustar la cantidad de desplazamiento
    } else {
        card.style.transform = 'translateY(0)'; // Resetea a la posición original
    }
}
