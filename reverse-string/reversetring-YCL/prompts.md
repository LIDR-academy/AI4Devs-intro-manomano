# Reverse String Webpage Instructions

Create a webpage that allows a user to reverse a string by entering the desired text in a text input. Use only HTML and JavaScript for this task. For CSS, use the latest version of the Tailwind library to achieve the required styles.

## Requirements

### HTML Structure

1. The page should contain an `h1` title with the value "Reverse string".
2. Below the title, include a text input where the user will enter the string they want to reverse. The input should have the following placeholder: "Hello, welcome to AI4Devs".
3. Below the text input, add a button with the color `#0d6efd` and the text "Reverse". This button should execute the reverse string action with the value contained in the input. It should have a top margin of `2rem`.
   - Add an icon to represent the reverse action using Font Awesome.
4. Below the button, add a `<p>` element that will display the result of the reversed string once the user clicks the button. This paragraph should have a top margin of `2rem`, a text color of `#198754`, and a font size of `1rem`.
5. Below the `<p>` element for the result, create a button that allows the user to copy the reversed result to the clipboard when clicked. This button should be initially disabled and only be enabled when the user successfully executes the reverse function. It should have a top margin of `2rem`.
   - Add an icon to represent the reverse action using Font Awesome.

### Optimization

1. Ensure the code is optimized for efficiency, especially for reversing strings of large size, using the best algorithms available.

### Error Handling

1. Create a `<span>` element with the following text: "El campo no puede estar vacio" in the color `#dc3545` below the text input. This span should only be displayed if the user does not enter any value and clicks the "Reverse" button. Add a class to this span to show it as a block element.
   - Put the span and the text input in a `<section>` element. This section should have a top margin of `2rem`. If the input field is empty, the reverse string function should not be executed.

### Separation of Concerns

1. Separate the JavaScript into a separate file.
2. Add documentation to the created JS functions.
3. Create a prompt.md file with the instructions I provided, making them readable in code format and in English.
