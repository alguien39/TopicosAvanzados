document.addEventListener('DOMContentLoaded', () => {
    // Evento para la barra de búsqueda
    const searchBar = document.querySelector('.search');
    const searchInput = document.querySelector('.search-bar');
    searchInput.addEventListener('focus', () => {
        searchBar.style.border = '2px solid var(--detail)';
    });
    searchInput.addEventListener('blur', () => {
        searchBar.style.border = '';
    });

    // Evento de teclado: Detectar cuando se presiona "Enter" en la barra de búsqueda
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            alert(`Búsqueda realizada: ${searchInput.value}`);
        }
    });

    // Evento para las imágenes dentro de las cajas
    const boxes = document.querySelectorAll('.gallery_item');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            alert(`Has hecho clic en el item: ${box.id}`);
        });
        
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.05)';
            box.style.transition = 'transform 0.3s ease-in-out';
        });

        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
        });
    });

    // Evento para la ventana modal
    const modal = document.getElementById("myModal");
    const btn = document.querySelector('.Title img');
    const span = document.getElementsByClassName("close")[0];

    btn.addEventListener('click', () => {
        modal.style.display = "block";
    });

    span.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});