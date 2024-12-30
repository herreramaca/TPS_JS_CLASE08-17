const prompt =require('prompt-sync')();

let edad = parseFloat ( prompt("Ingrese su edad: "));

if (edad>=18) {
    console.log(`Usted es mayor de edad`);
}
else console.log(`Usted es menor de edad`);