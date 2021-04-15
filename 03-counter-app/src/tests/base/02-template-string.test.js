import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas del 02-template-string.js', () => {
    
    test('getSaludo debe de retornar hola fernando',()=>{

        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + "!");


    });

    test('getSaludo debe de retornar hola Carlos! si no hay argumento',()=>{

        const nombre = 'Carlos';

        const saludo = getSaludo();

        expect(saludo).toBe('Hola ' + nombre+"!");


    });
})
