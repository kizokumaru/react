// Funciones en JS
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

// funciones fecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
} 

const saludar3 = (nombre) => `Hola, ${nombre}`; 
const saludar4 = () => `Hola Mundo`; 


console.log( saludar('Néstor'));
console.log( saludar2('Naéstor'));
console.log( saludar3('NSaéstor'));
console.log( saludar4());


const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

const user = getUser();
console.log(user);

// Tarea
//1 . Tranformen a una fucnión de Flecha
//2. Tiene que retornar un objeto implícito.
//3. Pruebas
const getUsuarioActivo = ( nombre) => ({
        uid:'ABC567',
        username: nombre,
    });


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);