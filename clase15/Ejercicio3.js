let mascotas = ["Perro", "Gato", "Conejo"];
mascotas.unshift("Hámster");
let primerAgregado = mascotas.shift("Hámster");
console.log("Por prioridad agregamos atendemos primero a ", primerAgregado);
console.log("Actualizamos la lista en la fila de mascotas en la clinica, por orden prioritario: ", mascotas);