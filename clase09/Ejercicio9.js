const prompt = require('prompt-sync')();


let radio= parseFloat(prompt("Ingrese el radio de un circulo: "));

const PI = 3.14159;

let area= PI* (radio**2) ;

let perimetro = 2* PI * radio;

console.log( `El area del circulo es: ${area}`);
console.log(`El perimetro del circulo es ${perimetro}`);