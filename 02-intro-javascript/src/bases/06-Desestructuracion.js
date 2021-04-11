// Desestructuración o Asignación Desestructurante
const persona ={
    nombre :'Tony',
    edad:45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const {nombre} = persona;
//const {nombre:nombre2} = persona;
const {nombre,edad,clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);


//const imprimePersona = (usuario) => {
//    const {nombre,edad,clave} = usuario;
//
//    console.log(usuario);
//};

const imprimePersona = ({nombre, edad,clave, rango = 'Capitan'}) => {
    

    console.log(nombre, edad, rango);
};

imprimePersona(persona);

const getContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave:clave,
        anios:edad,
        latlng: {
            lat: 15,
            lng: 16,
        }

    }
}

const {nombreClave, anios, latlng:{lat, lng}} =  getContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);