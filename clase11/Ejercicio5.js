const prompt = require ('prompt-sync')();

let inicio = parseFloat (prompt("Ingrese un número entero: "));
let fin = parseFloat (prompt("Ingrese otro número entero: "));

if (inicio < fin) {      //utilizo un If para poner la condicion de que inicio debe ser menor a fin.

    for (let i = inicio; i <= fin; i++){//dentro del if utilizo el CICLO FOR pra poder correr los nuemeros 
        if (i % 2 == 0){                //agrego un if dentro del ciclo for para poner la condicion de que los nros deben ser solamente pares
            console.log(i);             //mando a emprimir la condicion "i".  
        }
    }
}
else {
    console.log('Los valores ingresados son invalidos.'); //si no se cumple lo pedido por el CICLO FOR.
}