document.addEventListener("DOMContentLoaded", () => {
  const stringInput = document.getElementById("stringInput");
  const reverseButton = document.getElementById("reverseButton");
  const resultParagraph = document.getElementById("result");
  const copyButton = document.getElementById("copyButton");
  const errorSpan = document.getElementById("error");

  /**
   * Reverses the given string.
   * This function is optimized for efficiency, especially for large strings.
   * @param {string} str - The string to be reversed.
   * @returns {string} - The reversed string.
   */
  const reverseString = (str) => {
    // Efficient reverse function for large strings
    return str.split("").reverse().join("");
  };

  /**
   * Event listener for the reverse button.
   * Checks if the input field is empty, shows an error message if true,
   * otherwise, reverses the input string and displays the result.
   */
  reverseButton.addEventListener("click", () => {
    const inputValue = stringInput.value.trim();

    if (!inputValue) {
      errorSpan.classList.remove("hidden");
      return;
    }

    errorSpan.classList.add("hidden");
    const reversedString = reverseString(inputValue);
    resultParagraph.textContent = reversedString;
    copyButton.disabled = false;
  });

  /**
   * Event listener for the copy button.
   * Copies the reversed string displayed in the result paragraph to the clipboard.
   * Shows an alert upon successful copy.
   */
  copyButton.addEventListener("click", () => {
    const resultText = resultParagraph.textContent;
    navigator.clipboard
      .writeText(resultText)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  });
});
