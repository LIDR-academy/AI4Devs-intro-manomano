document.getElementById('reverseButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var reversedText = inputText.split('').reverse().join('');
    document.getElementById('result').textContent = reversedText;
});