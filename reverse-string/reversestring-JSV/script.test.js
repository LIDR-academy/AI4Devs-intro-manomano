const { invertirTexto } = require('./script');

// Conjunto de pruebas para la función invertirTexto
describe('Pruebas para la función invertirTexto', () => {
    
    test('Debe invertir una cadena de texto simple', () => {
        expect(invertirTexto('hola')).toBe('aloh');
    });

    test('Debe invertir una cadena vacía', () => {
        expect(invertirTexto('')).toBe('');
    });

    test('Debe invertir una cadena con espacios', () => {
        expect(invertirTexto('hola mundo')).toBe('odnum aloh');
    });

    test('Debe invertir una cadena con números y caracteres especiales', () => {
        expect(invertirTexto('1234!@#')).toBe('#@!4321');
    });

    test('Debe mantener la capitalización al invertir el texto', () => {
        expect(invertirTexto('Hola')).toBe('aloH');
    });

});