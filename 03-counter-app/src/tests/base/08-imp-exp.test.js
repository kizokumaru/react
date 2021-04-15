import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en fucniones de Heroes', () => {

    test('getHeroeById retorna por id el 1 ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toBe(heroeData);

    });
    
    test('getHeroeById retorna por id debe retornar undefined ', () => {
        const id = 15;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);

    });

    test('Debe retornar un arreglo con los heroes de DC',()=>{

        
        const owner = 'DC';
        const heroesDC = heroes.filter( (heroe) => heroe.owner === owner );
        const heroesData = getHeroesByOwner(owner);

        expect(heroesDC).toEqual(heroesData);
    });

    test('Debe retornar un arreglo con los heroes de Marvel',()=>{

        const owner = 'Marvel';

        const numHeroesMarvel = getHeroesByOwner(owner).length;

        expect(2).toBe(numHeroesMarvel);

    });
})
