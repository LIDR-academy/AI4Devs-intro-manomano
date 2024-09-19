// Función que invierte una cadena de texto
function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

// Asociar la funcionalidad con el botón (esto es solo para la página web)
document.getElementById('invertButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let reversedText = invertirTexto(inputText);
    document.getElementById('outputText').innerText = reversedText;
});

// Exportar la función para usarla en los tests
module.exports = { invertirTexto };