//chatgpt free

INPUT:
act as an web developer and provide:
a simple index.html with 
       1. header with Text REVERSE STRING
       2. Input text to enter a any text to be reversed
       3. A button to execute the function
       4. Show the output with text reversed
the funtion to reverse the text must be placed in a script.js file

OUTPUT:

ChatGPT
Sure! Here is a simple implementation of an index.html file along with a script.js file to reverse a string entered by the user.

index.html
html
Copiar código
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>REVERSE STRING</h1>
    </header>
    <main>
        <input type="text" id="inputText" placeholder="Enter text to reverse">
        <button onclick="reverseString()">Reverse</button>
        <p id="outputText"></p>
    </main>
    <script src="script.js"></script>
</body>
</html>
script.js
javascript
Copiar código
function reverseString() {
    const input = document.getElementById('inputText').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('outputText').textContent = reversed;
}
styles.css (Optional)
If you want to add some basic styling, you can create a styles.css file:

css
Copiar código
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

header {
    margin-bottom: 20px;
}

main {
    text-align: center;
}

input {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#outputText {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}
With these files:

The index.html provides the structure of the web page.
The script.js contains the JavaScript function to reverse the string.
The styles.css file is optional and adds some basic styling to the page.
To test this setup, ensure all three files are in the same directory and open index.html in a web browser.