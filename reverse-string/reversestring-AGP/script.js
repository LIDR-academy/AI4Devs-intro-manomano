document.getElementById('textInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        invertText();
    }
});

function invertText() {
    const input = document.getElementById('textInput').value;
    const reversedText = input.split('').reverse().join('');
    document.getElementById('result').innerText = "Texto invertido: " + reversedText;
    launchConfetti();
}


function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
function launchConfetti() {
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(200, 1000),
        origin: { y: 0.6 }
    });
}