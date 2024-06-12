function reverseString() {
    // Get the input string value
    var inputString = document.getElementById("inputString").value;
    
    // Reverse the string
    var reversedString = inputString.split('').reverse().join('');
    
    // Display the reversed string in the paragraph
    document.getElementById("reversedString").textContent = reversedString;
}

function checkEnterKey(event) {
    // Check if the pressed key is Enter
    if (event.key === 'Enter') {
        reverseString();
    }
}