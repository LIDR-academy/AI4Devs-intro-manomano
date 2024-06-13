function updateOutput() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    const outputText = document.getElementById('outputText');

    outputText.value = reversedText;

    const length = inputText.length;
    const fontSize = Math.max(12, 200 - (length * 8));

    document.getElementById('inputText').style.fontSize = `${fontSize}px`;
    outputText.style.fontSize = `${fontSize}px`;
}

// Initialize the output box with the reversed initial value
document.addEventListener('DOMContentLoaded', () => {
    updateOutput();
});