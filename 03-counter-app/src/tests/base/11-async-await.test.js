import { getImagen } from "../../base/11-async-await"


describe('Pruebas con async-await y Fetch', () => {
    
    test('Debe retornar una url', async() => {
            const url = await getImagen();
            console.log()
            expect( url.includes('https://') ).toBe(true);
    })
        
})
