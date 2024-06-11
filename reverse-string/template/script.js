function reverseString() {
    const inputString = document.getElementById("inputString").value;
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById("result").innerText = reversedString;
}

function copyToClipboard() {
    const resultDiv = document.getElementById("result");
    if (resultDiv.innerText) {
        navigator.clipboard.writeText(resultDiv.innerText).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    } else {
        alert("No hay texto para copiar");
    }
}