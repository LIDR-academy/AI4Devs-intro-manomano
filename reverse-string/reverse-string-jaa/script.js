document.getElementById('invertForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene el valor de la cadena introducida
    const inputText = document.getElementById('inputText').value;

    // Invierte la cadena
    const invertedText = inputText.split('').reverse().join('');

    // Muestra la cadena invertida en el elemento con id "outputText"
    document.getElementById('outputText').textContent = invertedText;
});
