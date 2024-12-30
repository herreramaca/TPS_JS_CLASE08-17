const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;



if ((edad> EDAD_MINIMA) && (edad< EDAD_MAXIMA)) {
    console.log(`Su edad se encuentra dentro del rango permitido`);
} else { console.log(`Usted se encuentra fuera del rango permitido`);
    
}