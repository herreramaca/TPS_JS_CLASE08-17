const prompt = require ('prompt-sync')();

let numero = parseFloat(prompt("Ingrese un número para poder multiplicarlo: "));

for (let i = 1; i <= 10; i++){ 
    console.log(`${numero} x ${i} = ${numero * i}`);
}