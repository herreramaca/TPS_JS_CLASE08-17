const prompt = require("prompt-sync")({ sigint: true});

let condicion1 = prompt("Ingrese un valor booleano: ");
let condicion2 = prompt("Ingrese otro valor booleano: ");

console.log(
    `COMBINACIONES LOGICAS CON EL OPERADOR AND
    Si el valor es ${condicion1} y el otro es ${condicion2} entonces el resultado sera ${condicion1 && condicion2};`)

console.log(
    `COMBINACIONES LOGICAS CON EL OPERADOR OR
   Si el valor es ${condicion1}  y el otro es ${condicion2} el resultado sera ${condicion1 || condicion2}`
);

console.log(
    `COMBINACIONES LOGICAS CON EL OPERADOR NOT
   Si el valor es ${condicion1} y el otro valor es ${condicion2} el resultado sera ${condicion1 != condicion2}
  `
);