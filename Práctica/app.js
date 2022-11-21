Apuntes en bruto -

var ciudades = ["Bali", "Roma", "Berlín"];

//Push 
var longitud = ciudades.push("Río");

console.log(ciudades);

//UnShift

ciudades.unshift("Madrid");

console.log(ciudades);

//Sacar último elemento - Pop - devuelve el elemento(podemos almacenarlo en una variable si queremos tener el elemento guardado)

var lastElement = ciudades.pop();

console.log(ciudades);
console.log(lastElement);

//Eliminar primer elemento - shift (al igual que pop, podemos almacenarlo en una variable)

var firstElement = ciudades.shift();
console.log(ciudades);
console.log(firstElement);

// Buscar un índice (en que posición) en el array - ejemplo: Buscamos la palabra "Roma"

var index = ciudades.indexOf("Roma")

console.log(index);


// Elmininar elementos con el indice

var elementosEliminados = ciudades.splice(0, 2);

console.log(ciudades);
console.log(elementosEliminados);


// Copiar un array con la opcion de slice

var copia = ciudades.slice();

console.log(copia);

console.log(ciudades === copia);

// Acceder a los elementos del Array.

console.log(ciudades[0]);
console.log(ciudades[1]);
console.log(ciudades[2]);

// Sustituir un elemento de array

ciudades[0] = "Málaga";

console.log(ciudades);


// Longitud de un array

console.log(ciudades.length);

// Ejemplo para comprobar que pasa si metemos en un array un numero alto

var ciudades = ["Bali", "Roma", "Berlín"];

// Longitud de un array

ciudades[10] = "Jerez de la Frontera";

console.log(ciudades.length);

console.log(ciudades[10]);


//ejemplo para introducir a los bucles. Es interesante porque podemos acceder a la posicion mediante una variable

let indice = 0;
console.log(ciudades[indice]);

indice = indice + 1;
console.log(ciudades[indice]);
console.log(ciudades[2]);
console.log(ciudades[3]);
console.log(ciudades[4]);

// Ejemplo

let indice = 0;
console.log(ciudades[indice]);

indice++;
console.log(ciudades[indice]);
indice++;
console.log(ciudades[indice]);
indice++;
console.log(ciudades[indice]);
indice++;
console.log(ciudades[indice]);

// Ejemplo

console.log(ciudades[ciudades.length - 1]);

//Primer Bucle

var ciudades = ["Bali", "Roma", "Berlín", "Málaga", "Madrid"];

for(i = 0; i < ciudades.length ; i++) {
    console.log(ciudades[i]);
}

//Bucle empezando desde la última posición del array

for(i = ciudades.length - 1; i >= 0 ; i--) {
    console.log(ciudades[i]);
};


// Interesante Ejemplo de bucles con objetos

var reserva1 = { id: 1, price: 24.59, client: "Caroline"};
var reserva2 = { id: 2, price: 61.50, client: "Liam"};
var reserva3 = { id: 3, price: 49.85, client: "Andrew"};
var reserva4 = { id: 4, price: 37.10, client: "John"};

const reservas = [reserva1, reserva2, reserva3, reserva4];

// console.log(reservas);

var sumTotal = 0;

for (i=0; i<reservas.length ; i++ ){
    sumTotal = sumTotal + reservas[i].price;
}

console.log(sumTotal);

// var comprob = reserva1.price + reserva2.price + reserva3.price + reserva4.price;

// console.log(comprob);


// Ejemplo con el for of - este ejemplo nos sirve para recorrer un array completo desde el inicio hasta el final, no nos sirve al revés

for (reserva of reservas){
    sumTotal = sumTotal + reserva.price;
}

console.log(sumTotal);


//FOR IN

var reserva1 = { id: 1, price: 24.50, client: "Caroline"};


// for in - recorre cada propiedad o atributo del objeto - al menos en este caso, no sé que pasará con el array
for (propiedad in reserva1) {
    console.log(propiedad);
}


// Segundo ejemplo de for in - tengo algunas dudas con este ejemplo

var reserva1 = { id: 1, price: 24.50, client: "Caroline"};


// for in - recorre cada propiedad o atributo del objeto - al menos en este caso, no sé que pasará con el array
for (propiedad in reserva1) {
    console.log(propiedad + ":" + reserva1[propiedad]);
}


// for in - trabajando con arrays, nos da la posición del array y despues podemos ver que hay en el interior;

var array = ["hola", "adios", "bye"]

for (propiedad in array) {
    console.log(propiedad + ": " + array[propiedad]);
}

// Sentencia While con ejemplo

// Sentencia While

var ciudades = ["Bali", "Roma", "Tokio", "Montevideo"];

var i = 0;
while (i < ciudades.length) {
    console.log("Estamos visitando " + ciudades[i]);
    i++;
}

//Ejemplo de bucle


var reserva1 = {id: 1, price: 24.5, client: "Caroline"};
var reserva2 = {id: 2, price: 61.5, client: "Liam"};
var reserva3 = {id: 1, price: 49.85, client: "Andrew"};
var reserva4 = {id: 1, price: 37.1, client: "Caroline"};

var reservas = [reserva1, reserva2, reserva3, reserva4];

// Ejemplo de bucle con while

var total = 0;
var i = 0;
while (i < reservas.length) {
    total += reservas[i].price;
    i++;
}

console.log(total);

// Ejemplo de bucle con while

var total = 0;
var i = 0;
var encontrado = false;
while (i < reservas.length || !encontrado) {
    encontrado = reservas[i].id == 3;
    i++;
}

console.log(total);

// Ejemplo de bucle con while

var total = 0;
var i = 0;
do {
    total += reservas[i].price;
    i++;
} while (i < reservas.length);


// sentencia do - while

var reserva1 = {id: 1, price: 24.5, client: "Caroline"};
var reserva2 = {id: 2, price: 61.5, client: "Liam"};
var reserva3 = {id: 1, price: 49.85, client: "Andrew"};
var reserva4 = {id: 1, price: 37.1, client: "Caroline"};

var reservas = [reserva1, reserva2, reserva3, reserva4];

// Ejemplo de bucle con while

var total = 0;
var i = 0;
do {
    total += reservas[i].price;
    i++;
} while (i < reservas.length);

console.log("Hola");
console.log(reservas[3]);

// Ejemplo de bucle con while

var esCorrecto = false;
do {
    // prompt

    // comprobamos valor
} while (!esCorrecto);


//EJEMPLO DE BUCLE - INTERESANTE

// sentencia do - while

var reserva1 = {id: 1, price: 24.5, client: "Caroline"};
var reserva2 = {id: 2, price: 61.5, client: "Liam"};
var reserva3 = {id: 1, price: 49.85, client: "Andrew"};
var reserva4 = {id: 1, price: 37.1, client: "Caroline"};

var reservas = [reserva1, reserva2, reserva3, reserva4];


var total = 0;
var i = 0;
var encontrado = false;
while (i < reservas.length && !encontrado) {
    console.log("indice " + i);
    encontrado = reservas[i].price > 50;
    i ++;
}

console.log(total);

//Práctica

// Práctica

const booking = [
    {id: 1, price: 45.30, count: 3, room:"standar", prepaid: false, succeeeded: true},
    {id: 2, price: 92.45, count: 4, room:"superior", prepaid: false, succeeeded: true},
    {id: 3, price: 45.30, count: 7, room:"standar", prepaid: true, succeeeded: false},
    {id: 4, price: 45.30, count: 2, room:"superior", prepaid: true, succeeeded: true},
    {id: 5, price: 45.30, count: 5, room:"standar", prepaid: true, succeeeded: false},
];

for(i = 0; i < booking.length; i++){
    console.log(booking[i].id);
}

function imprimir(reserva) {
    console.log("------ Reserva " + reserva.id + " ----------");
    console.log("Price: ", reserva.price);
    console.log("Noches: ", reserva.count);
    console.log("Tipo habitación: ", reserva.room);
    console.log("Está pagada: ", reserva.prepaid);
    console.log("Error: ", !reserva.succeeeded);
}



// Ejemplo con función y for of

// Práctica

const booking = [
    {id: 1, price: 45.30, count: 3, room:"standar", prepaid: false, succeeeded: true},
    {id: 2, price: 92.45, count: 4, room:"superior", prepaid: false, succeeeded: true},
    {id: 3, price: 45.30, count: 7, room:"standar", prepaid: true, succeeeded: true},
    {id: 4, price: 45.30, count: 2, room:"superior", prepaid: true, succeeeded: true},
    {id: 5, price: 45.30, count: 5, room:"standar", prepaid: true, succeeeded: true},
];

// for(i = 0; i < booking.length; i++){
//     console.log(booking[i].id);
// }


function existeError() {
    let exito = true;

    for(reserva of booking) {
        exito = exito && reserva.succeeeded;
    }

    return !exito;
}

console.log("Existe reserva con error: " + existeError());



// Ejemplo muy importante


// Práctica

const booking = [
    {id: 1, price: 45.30, count: 3, room:"standar", prepaid: false, succeeded: true},
    {id: 2, price: 92.45, count: 4, room:"superior", prepaid: false, succeeded: true},
    {id: 3, price: 45.30, count: 7, room:"standar", prepaid: true, succeeded: false},
    {id: 4, price: 45.30, count: 2, room:"superior", prepaid: true, succeeded: true},
    {id: 5, price: 45.30, count: 5, room:"standar", prepaid: true, succeeded: true},
];

// for(i = 0; i < booking.length; i++){
//     console.log(booking[i].id);
// }


function existeError() {
    let exito = true;

    let i = 0;
    while(exito) {
            console.log("Comprobando reserva en posición " + i);
            console.log("Éxito vale " + exito + " y la reserva " + booking[i].succeeded);
        exito = exito && booking[i].succeeded;
        console.log("Resultado de exito " + exito);
        i++;
    }

    return !exito;
}

console.log("Existe reserva con error: " + existeError());


// OTRO EJEMPLO CON BUCLE WHILE - SE PUEDE HACER CON FOR Y SUS DISTINTAS VARIANTES

// Práctica

const booking = [
    {id: 1, price: 45.30, count: 3, room:"standar", prepaid: false, succeeded: true},
    {id: 2, price: 92.45, count: 4, room:"superior", prepaid: false, succeeded: true},
    {id: 3, price: 45.30, count: 7, room:"standar", prepaid: true, succeeded: false},
    {id: 4, price: 45.30, count: 2, room:"superior", prepaid: true, succeeded: true},
    {id: 5, price: 45.30, count: 5, room:"standar", prepaid: true, succeeded: true},
];

// for(i = 0; i < booking.length; i++){
//     console.log(booking[i].id);
// }


// Listar solo las reservas que han tenido éxito
let i= 0;

while (i < booking.length) {
    if (booking[i].succeeded == true){
        imprimir(booking[i]);
    } 
    i++;
    } 

function imprimir(booking) {
    console.log("---------------");
    for (attr in booking) {
        console.log(attr.toUpperCase()) + ": " + booking[attr];
    }
}


// Bucle práctica


// Práctica

const booking = [
    {id: 1, price: 45.30, count: 3, room:"standar", prepaid: false, succeeded: true},
    {id: 2, price: 92.45, count: 4, room:"superior", prepaid: false, succeeded: true},
    {id: 3, price: 63.50, count: 7, room:"standar", prepaid: true, succeeded: false},
    {id: 4, price: 37.20, count: 2, room:"superior", prepaid: true, succeeded: true},
    {id: 5, price: 87.90, count: 5, room:"standar", prepaid: true, succeeded: true},
];


let repetido = false; // booleano con condición falsa
let encontrado; // variable sin declaración

for ( i = 0; i < booking.length; i++) {
    const id = booking[i].id;
    
    for (x = 0; x < booking.length + 1; x++) {
        encontrado = encontrado || booking[x].id == id;
    }
}

console.log("Hay identificadores repetidos: " + repetido);

// function imprimir(booking) {
//     console.log("------------");
//     for (attr in booking) {
//         console.log(attr.toUpperCase() + ": " + booking[attr]);
//     }
// }
