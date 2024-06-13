$(document).ready(function() {
    $('#wordForm').submit(function(event) {
        event.preventDefault();
        const word = $('#wordInput').val();
        const reversedWord = word.split('').reverse().join('');
        $('#resultAlert').text(`La palabra invertida es: ${reversedWord}`);
        $('#resultAlert').show();
    });
});