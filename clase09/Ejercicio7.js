const prompt = require ('prompt-sync')();

let peso = parseFloat (prompt("Ingrese su peso en Kg:"));

let pesoLibras = peso * 2.20462 ;

console.log( `Su peso el libras es ${pesoLibras}`);