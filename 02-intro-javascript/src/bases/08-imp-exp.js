// Importaciones y exportaciones en JS
//import {heroes} from './data/heroes';
//import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';
//console.log(owners);

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

//console.log(getHeroeById(2));
//console.log(getHeroeById(1));
//console.log(getHeroeById(5));

export const getHeroesByOwner = (owner) => heroes.filter(hero => hero.owner === owner);

//console.log(getHeroesByOwner('DC'));
//console.log(getHeroesByOwner('Marvel'));

