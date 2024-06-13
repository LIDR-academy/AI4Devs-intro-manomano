document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtén el valor del campo de texto
    const textInput = document.getElementById('textInput').value;
    
    // Invierte la cadena de texto
    const reversedText = textInput.split('').reverse().join('');
    
    // Muestra la cadena invertida
    document.getElementById('output').innerText = `Cadena invertida: ${reversedText}`;
});
