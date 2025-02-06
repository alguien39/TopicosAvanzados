document.addEventListener('DOMContentLoaded', () => {
    // Evento para la barra de búsqueda
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('focus', () => {
        searchBar.style.borderColor = 'blue';
    });
    searchBar.addEventListener('blur', () => {
        searchBar.style.borderColor = '';
    });

    // Evento para las imágenes dentro de las cajas
    const boxes = document.querySelectorAll('.box img');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            alert(`Has hecho clic en la imagen: ${box.alt}`);
        });
    });

    
});