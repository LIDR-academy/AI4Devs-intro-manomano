function reverseString() {
    const input = document.getElementById('inputString').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('result').innerText = reversed;
    document.getElementById('copyButton').style.display = 'inline-block';
}

function copyToClipboard() {
    const textToCopy = document.getElementById('result').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard');
    });
}
