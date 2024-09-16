// Get the form elements
const reverseForm = document.getElementById('reverseForm');
const stringInput = document.getElementById('stringInput');
const result = document.getElementById('result');
const historyList = document.getElementById('history');
const copyButton = document.getElementById('copyButton');
const copyNotification = document.getElementById('copyNotification');  // Copy notification element

// Array to store the last 10 searches
let searchHistory = [];

// Function to reverse the input string
function reverseString(string) {
    return string.split('').reverse().join('');
}

// Function to update the history panel in reverse order
function updateHistory() {
    historyList.innerHTML = '';  // Clear previous history
    if (searchHistory.length === 0) {
        // Show initial message if no history exists
        const initialMessage = document.createElement('li');
        initialMessage.classList.add('text-gray-500');
        initialMessage.textContent = 'Reverse your first string to have history.';
        historyList.appendChild(initialMessage);
    } else {
        // Update history with the latest searches
        searchHistory.slice(-10).reverse().forEach(item => {
            const li = document.createElement('li');

            // Create the reversed string (bold)
            const reversedString = document.createElement('p');
            reversedString.textContent = item.reversed;
            reversedString.classList.add('font-bold');

            // Create the original string (small, grey)
            const originalString = document.createElement('p');
            originalString.textContent = item.original;
            originalString.classList.add('text-sm', 'text-gray-500');

            li.appendChild(reversedString);
            li.appendChild(originalString);
            historyList.appendChild(li);
        });
    }
}

// Function to display the result in the same style as the history
function displayResult(original, reversed) {
    result.innerHTML = '';  // Clear previous result

    const reversedString = document.createElement('p');
    reversedString.textContent = reversed;
    reversedString.classList.add('font-bold');

    const originalString = document.createElement('p');
    originalString.textContent = original;
    originalString.classList.add('text-sm', 'text-gray-500');

    result.appendChild(reversedString);
    result.appendChild(originalString);

    // Show copy button
    copyButton.classList.remove('hidden');
}

// Function to show the copy notification
function showCopyNotification() {
    copyNotification.classList.remove('hidden');
    setTimeout(() => {
        copyNotification.classList.add('hidden');
    }, 2000);  // Hide after 2 seconds
}

// Function to copy the reversed string
function copyReversedString() {
    const reversedText = result.querySelector('p').textContent;
    navigator.clipboard.writeText(reversedText).then(() => {
        showCopyNotification();  // Show the friendly copy notification
    });
}

// Form submit event handler
reverseForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload

    const inputString = stringInput.value;
    if (inputString.trim() === '') return;  // Do nothing if input is empty

    // Reverse the string and display the result
    const reversedString = reverseString(inputString);
    displayResult(inputString, reversedString);

    // Add the input to the history and update the history panel
    searchHistory.push({ original: inputString, reversed: reversedString });
    updateHistory();

    // Clear the input field
    stringInput.value = '';
});

// Copy button event listener
copyButton.addEventListener('click', copyReversedString);
