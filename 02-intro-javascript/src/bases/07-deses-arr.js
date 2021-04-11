const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [,goku] = personajes;
console.log(goku);


const retornaArreglo = () =>{
    return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const getState = ( valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] =getState('Goku');

console.log(nombre);
setNombre();