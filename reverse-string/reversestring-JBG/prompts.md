# Prompts Utilizados

## Prompt 1:
Como desarrollador experto y siguiendo la metodología Agile, necesito crear una página web con lógica en javascript que invierta el orden de una cadena de texto. Ejemplo: si introduzco AI4Devs devuelve sveD4IA. Hazlo apoyado en el seed index.html y script.js que te indico al final y devuelve 
index.html
 <!DOCTYPE html> <html lang="es"> <head> <meta charset="UTF-8"> <title>Inversor de Texto</title> <!-- Incluir Tailwind CSS desde CDN --> <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"> </head> <body class="bg-gray-100 flex items-center justify-center h-screen"> <div class="text-center"> <h1 class="mb-4 text-2xl font-bold text-gray-800">Inversor de Texto</h1> <input type="text" id="inputText" placeholder="Introduce un texto" class="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"> <button onclick="invertirTexto()" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Invertir </button> <p class="mt-4">Texto invertido: <span id="textoInvertido" class="text-green-500"></span></p> </div> <script src="script.js"></script> </body> </html> 
script.js
 function invertirTexto() { var texto = document.getElementById('inputText').value; var textoInvertido = texto.split('').reverse().join(''); document.getElementById('textoInvertido').textContent = textoInvertido; }

 Realiza todas las iteraciones y test necesarios para confirmar que el programa es totalmente funcional. Devuelve los resultados en dos ficheros index.html y script.js 



## Chatbot Utilizado:
ChatGPT
