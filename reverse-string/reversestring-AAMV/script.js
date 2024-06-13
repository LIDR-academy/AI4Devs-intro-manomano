function reverseString() {
    const inputString = document.getElementById('inputString').value;
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById('result').innerText = reversedString;
}
