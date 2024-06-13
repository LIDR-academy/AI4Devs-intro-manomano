function reverseText() {
    const input = document.getElementById('textInput').value;
    const reversed = input.split('').reverse().join('');
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = reversed;
    resultDiv.style.display = 'block';
}