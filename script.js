function invertirTexto() {
    const textoOriginal = document.getElementById('texto-original').value;
    const textoInvertido = textoOriginal.split('').reverse().join('');
    document.getElementById('texto-invertido').textContent = textoInvertido;
  }
  