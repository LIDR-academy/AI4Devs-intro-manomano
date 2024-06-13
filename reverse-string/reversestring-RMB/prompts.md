Chatbot: ChatGPT

# Prompts

Se han utilizado 3 prompts distintos, cada uno algo más completo que el anterior. En todos ellos se ha adjuntado el index.html original:

## Prompt 1

> Utilizando como plantilla el archivo html adjunto, añade una caja de texto sin bordes que ocupe la mitad izquierda de la página, que esté centrada verticalmente y con el texto alineado a la derecha, de color gris claro y en negrita. El foco estará siempre situado en esa caja de texto.
> Por encima de esa caja habrá un label con el texto "Introduce un texto:". Habrá una segunda caja de texto en la que el usuario no podrá escribir. Ocupará la mitad derecha de la página, centrada verticalmente y su texto estará alineado a la izquierda, de color gris oscuro y en negrita.
> Cuando el usuario escriba cualquier caracter en la primera caja, se actualizará el texto de la segunda caja, que será el mismo texto que en la primera caja, pero en orden inverso. Por ejemplo, si se escribe "hola" en la primera caja, en la segunda aparecerá "aloh".

## Prompt 2

> Utilizando como plantilla el archivo html adjunto, añade una caja de texto sin bordes, con el fondo gris muy oscuro, que ocupe la mitad izquierda de la página, que esté centrada verticalmente y con el texto alineado a la derecha, de color gris claro y en negrita. El foco estará siempre situado en esa caja de texto. La caja tendrá un placeholder que indique "Introduce un texto". 
> Habrá una segunda caja de texto en la que el usuario no podrá escribir. Ocupará la mitad derecha de la página, centrada verticalmente, con el fondo de color gris claro y su texto estará alineado a la izquierda, de color gris muy oscuro y en negrita.
> Cuando el usuario escriba cualquier carácter en la primera caja, se actualizará el texto de la segunda caja, que será el mismo texto que en la primera caja, pero en orden inverso. Por ejemplo, si se escribe "hola" en la primera caja, en la segunda aparecerá "aloh".
> Me gustaría que el tamaño del texto de ambas cajas vaya cambiando dependiendo de la longitud del texto que contienen, de forma que si hay poco texto, el tamaño de letra sea de 200px, y vaya bajando hasta 12px si hay mucho texto.
> El código javascript generado deberá incluirse en otro fichero llamado script.js

## Prompt 3

> Utilizando como plantilla el archivo html adjunto, añade una caja de texto sin bordes, con el fondo gris muy oscuro, que ocupe la mitad izquierda de la página, que esté centrada verticalmente y con el texto alineado a la derecha, de color gris claro y en negrita. El foco estará siempre situado en esa caja de texto. El texto inicial de la caja será '¡Hola!
> Habrá una segunda caja de texto en la que el usuario no podrá escribir. Ocupará la mitad derecha de la página, centrada verticalmente, con el fondo de color gris claro y su texto estará alineado a la izquierda, de color gris muy oscuro y en negrita.
> Cada caja deberá tener su propia clase CSS, que no compartirá con la otra caja de texto.
> Cuando el usuario escriba cualquier carácter en la primera caja, se actualizará el texto de la segunda caja, que será el mismo texto que en la primera caja, pero en orden inverso. Por ejemplo, si se escribe "hola" en la primera caja, en la segunda aparecerá "aloh".
> Me gustaría que el tamaño del texto de ambas cajas vaya cambiando dependiendo de la longitud del texto que contienen, de forma que si hay poco texto, el tamaño de letra sea de 200px, y vaya bajando hasta 12px si hay mucho texto.
> El código javascript generado deberá incluirse en otro fichero llamado script.js