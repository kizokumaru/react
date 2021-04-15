
describe('Pruebas en el archivo demo.test.js', () => {

    test('deben de ser iguales los string ', () => {

        //Inicializa
        const mensaje = 'Hola Mundo';

        //Estimulo
        const mensaje2 = "Hola Mundo";

        //Assert
        expect(mensaje).toBe(mensaje2);

    })


})

