document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const reverseButton = document.getElementById('reverseButton');
    const resultSection = document.getElementById('resultSection');
    const resultText = document.getElementById('resultText');
    const copyButton = document.getElementById('copyButton');

    // Habilitar/deshabilitar el botón Reverse según el campo de texto
    inputText.addEventListener('input', () => {
        reverseButton.disabled = inputText.value.trim() === '';
    });

    // Invertir la cadena de texto
    reverseButton.addEventListener('click', () => {
        const reversedText = inputText.value.split('').reverse().join('');
        inputText.value = '';
        resultText.innerText = reversedText;
        resultSection.style.display = 'block';
    });

    // Copiar el texto invertido al portapapeles
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(resultText.innerText).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
});
