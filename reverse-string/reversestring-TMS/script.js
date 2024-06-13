document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const reverseBtn = document.getElementById('reverseBtn');
    const copyBtn = document.getElementById('copyBtn');
    const result = document.getElementById('result');
    const resultContainer = document.getElementById('resultContainer');

    reverseBtn.addEventListener('click', () => {
        const reversedString = reverseString(userInput.value);
        result.textContent = reversedString;
        result.style.display = 'block';
        copyBtn.style.display = 'block';
    });

    copyBtn.addEventListener('click', () => {
        copyToClipboard(result.textContent);
        alert('Text copied!');
    });

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
});