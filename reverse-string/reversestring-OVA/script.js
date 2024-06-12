function reverseString() {
    // Get the input string value
    let input = document.getElementById("inputString").value;
    // Reverse the string
    let reversed = input.split('').reverse().join('');
    // Display the reversed string
    document.getElementById("outputString").innerText = reversed;
}