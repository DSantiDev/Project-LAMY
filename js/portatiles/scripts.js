// Selecciona los elementos necesarios
const orderToggle = document.getElementById('order-toggle');
const orderButton = document.querySelector('.order-button .order-text1');
const radioButtons = document.querySelectorAll('.sub-order-content input[type="radio"]');

// Agrega un event listener a cada botón de radio
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        // Cambia el texto del botón al valor seleccionado
        orderButton.textContent = radio.value;
        
        // Cierra el menú de ordenación
        orderToggle.checked = false;
    });
});

// Cambia el texto del botón cuando se abre o cierra el menú
orderToggle.addEventListener('change', () => {
    if (orderToggle.checked) {
        orderButton.textContent = "";
    } else {
        // Restablecer al texto de la opción seleccionada
        const selectedOption = document.querySelector('.sub-order-content input[type="radio"]:checked').value;
        orderButton.textContent = selectedOption;
    }
});
