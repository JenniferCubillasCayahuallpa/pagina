function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isExpanded = content.style.display === 'block';

    // Cierra todos los demás contenidos
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(item => {
        item.style.display = 'none'; // Cierra todos los contenidos
        item.previousElementSibling.classList.remove('active'); // Remueve la clase activa de todos los encabezados
    });

    // Alternar el contenido del elemento clicado
    content.style.display = isExpanded ? 'none' : 'block';
    header.classList.toggle('active', !isExpanded); // Alternar la clase activa del encabezado clicado
}

function showImage(imageId) {
    const image = document.getElementById(imageId);
    image.style.display = image.style.display === 'block' ? 'none' : 'block';
}
