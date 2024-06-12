function invertirTexto() {
  const textoEntrada = document.getElementById('textoEntrada').value;
  const textoInvertido = textoEntrada.split('').reverse().join('');
  document.getElementById('textoInvertido').textContent = textoInvertido;
}