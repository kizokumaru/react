//Arreglos en JS

//const arreglo = new Array(10);
const arreglo = [1,4,3,4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});//callback

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);