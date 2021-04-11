const persona = {
    nombre: 'Tony',
    apellid: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5555,
        lat: 14.3232,
        lng: 34.922525,
    }
};
//console.table(persona);
console.log(persona);

const persona2 = {...persona};//Clon
persona2.nombre = 'Peter';
console.log(persona2);
console.log(persona);