function reverseString() {
  // Get the value from the input field
  let inputStr = document.getElementById('inputString').value;
  
  // Reverse the string
  let reversedStr = inputStr.split('').reverse().join('');
  
  // Display the result
  document.getElementById('result').textContent = 'Reversed String: ' + reversedStr;
}