Se ha creado una página web con el título "Reverse String CAAM". La página contiene un campo para ingresar texto con un placeholder, un botón "Reverse" que invierte el texto ingresado y un botón "Copy" que copia el resultado al portapapeles. El botón "Reverse" se habilita solo cuando hay texto en el campo de entrada. Al invertir el texto, se muestra el resultado y el campo de entrada se limpia. Al copiar el resultado, se muestra una notificación de éxito.

lista de promps con Chatgpt

- primer intento: 


"tengo estos archivos:
- index.html(adjunto)
- promps.md
- scripts.js

dame el codigo mas eficiente para crear una página web con lógica en javascript que invierta el orden de una cadena de texto.

la pagina debe contener 
- un titulo "Revese String CAAM"
- un campo para ingresar texto
- un boton "reverse" 
- una sección donde muestre el resultado
- un botton "copy" para copiar el resultado

se espara que
- el capo de texto tenga un place holder, que desapareca una vez comience a escribir
- una vez el usuario  ingrese texto el botton revese se habilite, de lo contrario con un campo vacio o en blanco estaria deshabilitado
- al usar el botton revese, borrara el texto del usuario y dara el resultado con el texto invertido
- al usar el botton copy, habra una notificacion emergente sobre el copiado exitoso

nota:
añade este mensaje al archivo promp.md"


- segundo intento:

"al probar la pagina alguans cosas no funcionan:

- al escribir en el campo de texto el botton reverse no se habilita
- no existe el espacio para mostrar el texto de resultado
- no existe el botton copy"

- tercer intento:
"aun no muestra lo requerido
 solo existen el tittulo el campo de texto y el botn reverse

no existe el espacio para mostrar el resultado y el segundo boton copy

y el botton reverse no se habilita luego de escribir en el campo de texto"

- cuarto intento:
"siguen los mismos errores.
revisa el codigo, explicame como funciona cada parte
y dame una solucion
Adicionalmente, muestrame como hubieras escrito el mesaje inicial que te pedi para conseguir el resultadod eseado desde el principio o indicame que datos o info me falto darte."

- quinto intento:
"Quiero crear una página web con el siguiente contenido y funcionalidad:

- Un título "Reverse String CAAM".
- Un campo de texto con placeholder "Enter text here". El placeholder debe desaparecer al comenzar a escribir.
- Un botón "Reverse" que esté deshabilitado por defecto y se habilite solo cuando el campo de texto no esté vacío.
- Al presionar el botón "Reverse":
  - El texto ingresado debe invertirse.
  - El campo de texto debe borrarse.
  - El texto invertido debe mostrarse en una sección debajo del botón "Reverse".
- Una sección para mostrar el resultado con el texto invertido.
- Un botón "Copy" en la misma sección que copie el texto invertido al portapapeles.
- Al presionar el botón "Copy", debe aparecer una notificación emergente que indique que el texto fue copiado exitosamente.

El código HTML debe incluir todos estos elementos, y el código JavaScript debe manejar la lógica de habilitar/deshabilitar el botón, invertir el texto, mostrar el resultado y copiar el texto al portapapeles."

- sexto intento:
"al iniciar la pagina existe este error en las dev tools del browser

"scripts.js:1 
        
       
       Failed to load resource: net::ERR_FILE_NOT_FOUND"


y al ingresear texto aparece este error

"index.html:39 
Uncaught ReferenceError: checkInput is not defined
    at HTMLInputElement.oninput (index.html:39:96)
oninput	@	index.html:39"

explica porque susceden estos errores y dame una solucion aplicada a los archivos index.html y  script.js"

- septimo intento:
"tenen cuenta que no es 'scripts.js' es 'script.js. arreglalo'"