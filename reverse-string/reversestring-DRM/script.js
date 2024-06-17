document.getElementById('submitButton').addEventListener('click', function() {
    // Obtener el valor del campo de texto
    var inputText = document.getElementById('inputText').value;

    // Invertir la cadena de texto
    var reversedText = inputText.split('').reverse().join('');

    // Mostrar el resultado
    document.getElementById('resultText').innerText = reversedText;
});