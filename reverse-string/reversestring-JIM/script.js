// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test cases for reverseString
console.log(reverseString("AI4Devs")); // Expected output: "sveD4IA"
console.log(reverseString("Hello World")); // Expected output: "dlroW olleH"

// Event listener for form submission
document.getElementById('reverseForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Get input value
    const inputText = document.getElementById('inputText').value;

    // Reverse the string
    const reversedText = reverseString(inputText);

    // Display reversed text and clear input
    document.getElementById('outputText').textContent = `Reversed: ${reversedText}`;
    document.getElementById('inputText').value = '';
});
