//Promesas
import {getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject)=>{
//     //resolve cuando la promesa funciona .then
//     //reject cuando la promesa no funciona .catch

//     setTimeout(()=>{
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         //reject ('No se pudo encontrar el heroe');
//     },2000)
// });


// promesa.then((heroe) => {
//     console.log('hero: ', heroe);
// })

// .catch ( err => console.warn(err));


const getheroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        //resolve cuando la promesa funciona .then
        //reject cuando la promesa no funciona .catch
    
        setTimeout(()=>{
            const heroe = getHeroeById(id);
            if (heroe){
                resolve(heroe);
            }
            else{
                reject('No se pudo encontrar el heroe');
            }
           
        },2000)
    });
    
}

getheroeByIdAsync(1)
    .then(console.log)
    .catch( err => console.log(err));