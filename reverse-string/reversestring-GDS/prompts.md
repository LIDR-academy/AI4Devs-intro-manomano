CHATGPT:
Programemos en en JavaScript. Nunca lo he hecho antes.
1 - Quiero crear un página web (index.html) con lógica en javascript .
2 - Deberá tener un Textbox o cuadro donde el usuario pueda ingresar una palabra.
3 - Deberá tener un Botón de accion con label "Reverse".
4 - AL presionar el Botón "Reverse" el programa deberá tomar la palabra de la Textbox e invertir el orden de las letras de la palabra. Teniendo como resultado ahora la ultima letra será la primera , la penultima letra sera la segunda, y asi sucesivamente.



¡Vamos a crear tu primera página web con JavaScript! Aquí tienes los pasos detallados para crear un archivo `index.html` que contiene una caja de texto, un botón y la lógica para invertir el orden de las letras de una palabra ingresada.

### Paso 1: Crear el archivo `index.html`

Primero, abre tu editor de texto favorito y crea un nuevo archivo llamado `index.html`. Luego, copia y pega el siguiente código en ese archivo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invertir Palabra</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
        }
        input[type="text"] {
            padding: 10px;
            font-size: 16px;
            margin-bottom: 10px;
            width: 200px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        p {
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Invertir Palabra</h1>
        <input type="text" id="wordInput" placeholder="Ingresa una palabra">
        <br>
        <button onclick="reverseWord()">Reverse</button>
        <p id="result"></p>
    </div>

    <script>
        function reverseWord() {
            const input = document.getElementById('wordInput').value;
            const reversed = input.split('').reverse().join('');
            document.getElementById('result').innerText = reversed;
        }
    </script>
</body>
</html>
```

### Explicación del código

1. **Estructura básica de HTML:**
   - `<html>`, `<head>`, `<body>` son etiquetas básicas de un documento HTML.
   - Dentro del `<head>`, configuramos el título de la página y algunos estilos CSS para darle un mejor aspecto visual.

2. **Estilo CSS:**
   - Utilizamos el CSS dentro de la etiqueta `<style>` para centrar el contenido de la página y darle estilo a la caja de texto y al botón.

3. **Estructura de la página:**
   - Dentro de un `div` con clase `container`, colocamos un título, un `input` para que el usuario ingrese la palabra, un `button` con un evento `onclick` que llama a la función `reverseWord()`, y un párrafo `p` donde se mostrará el resultado.

4. **JavaScript:**
   - El script JavaScript se encuentra dentro de la etiqueta `<script>` al final del cuerpo del documento.
   - La función `reverseWord()` obtiene el valor ingresado en el `input` con `document.getElementById('wordInput').value`.
   - Luego, convierte la cadena en un arreglo de caracteres, invierte el orden del arreglo con `.reverse()`, y vuelve a unir el arreglo en una cadena con `.join('')`.
   - Finalmente, muestra el resultado invertido en el párrafo con id `result`.

### Paso 2: Guardar y abrir el archivo

Guarda el archivo `index.html` y ábrelo en tu navegador web. Verás una página simple con un campo de texto y un botón "Reverse". Ingresa una palabra, haz clic en el botón y verás cómo se invierte la palabra.

¡Felicidades! Has creado tu primera página web con HTML, CSS y JavaScript.