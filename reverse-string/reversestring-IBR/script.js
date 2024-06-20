document.getElementById('reverseButton').addEventListener('click', function() {
    // Get the input text value
    let inputText = document.getElementById('inputText').value;

    // Reverse the text
    let reversedText = inputText.split('').reverse().join('');

    // Display the reversed text
    document.getElementById('reversedText').innerText = reversedText;
});
