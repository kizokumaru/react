import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('Pruebas de 05-funciones.test.js', () => {
    test(' getUser Debe retornar el objeto  ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test(' getUsuarioActivo Debe retornar el objeto ', () => {


        const userTest = {
            uid: 'ABC567',
            username: 'Fernando'
        }
        
        const activeUser = getUsuarioActivo('Fernando');

        expect(activeUser).toEqual(userTest);
    })
})
