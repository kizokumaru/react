import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas de 07-deses-arr.test.js', () => {
    test('odebe de retornar un numero y un string ', () => {
        const [letras, numeros] = retornaArreglo();

        expect( letras).toBe('ABC');
        expect(numeros).toBe(123);
    })
    
})
