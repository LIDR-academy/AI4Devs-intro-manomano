document.getElementById('reverseButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('outputText').value = reversedText;
});