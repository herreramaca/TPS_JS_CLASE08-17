const prompt = require('prompt-sync')();
let suma = 0;
let nro = parseInt(prompt("Ingrese un numero: "));
//Agregamos el WHILE
while (nro >= 0){
    suma += nro;
    nro = parseInt(prompt("Ingrese un numero: "));
}
console.log(`La suma de todos los numeros es: ${suma}`);

//si todo esta OK saldra el resultado, de lo contrario lloremos