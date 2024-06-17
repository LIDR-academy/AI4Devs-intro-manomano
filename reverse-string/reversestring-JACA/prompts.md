# Initial Prompt
```
Vas a actuar como un Senior Web Developer experto en las siguientes tecnologías frontend:
- HTML
- CSS
- Javascript
- React

Construye un sitio web usando Material UI y React para hacer un string reverse.

El string reverse debe funcionar de la siguiente manera:
- Título: "Reverse String"
- Un input text con un placeholder de ejemplo con el siguiente string "I'm a string reverser"
- Un botón azúl que diga "Reverse" y que incluya un emoji de flechas invertidas
- Un label para el resultado que inicialmente tenga como placeholder "resrever gnirts a m'I"
- Un icono junto al label del resultado con el emoji de copiar
- Hay dos maneras de visualizar los resultados
  - Cuando el usuario escribe en el input text, inmediatamente se va mostrando la reversed string en el label del resultado usando una animación de entrada
  - Al dar click en el botón "Reverse", el resultado de la reversed string se carga nuevamente usando la misma animación
- Al poner el mouse en el ícono de copiar junto a la label de resultado, se debe mostrar el pointer cursor, al dar click, debe copiar la reversed string al portapapeles

El código debe seguir las mejores prácticas de diseño y desarrollo de software incluyendo:
- DRY
- Separación de capa de presentación, datos y negocio
- Pruebas unitarias usando jest
- Documentación a nivel de código, funcionalidad y colaboración
```

# Execution Error Prompt
```
El código ha dado el siguiente error en tiempo de ejecución "Can't resolve '@mui/icons-material/ContentCopy"
```

# Styling Error Prompt
```
El emoji en el botón "Reverse" debe aparecer junto al texto y no debajo del texto.
```

# Unit Testing Error Prompt
```
Las siguientes pruebas unitarias fallaron
- reverses string correctly on button click con el error TestingLibraryElementError: Unable to find an element with the text: /Reverse 🔄/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.
- copies reversed string to clipboard con el error TestingLibraryElementError: Unable to find an element with the title: /Copy to clipboard/i
```

```
Las pruebas unitarias han fallado de nuevo
- reverses string correctly on button click

    TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `(content, element) => {
      const hasText = element => element.textContent === text;
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(child => !hasText(child));
      const hasIcon = Array.from(element.querySelectorAll('span[role="img"]')).some(el => el.getAttribute('aria-label') === icon);
      return elementHasText && childrenDontHaveText && hasIcon;
    }`
- copies reversed string to clipboard

    TypeError: Cannot read property 'writeText' of undefined
```

```
La siguiente prueba unitaria ha vuelto a fallar
- reverses string correctly on button click

    TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/Reverse 🔄/i`
```

# Label improvement
```
Cambia la label del input text de "Enter text" a "Reverse a string"
```