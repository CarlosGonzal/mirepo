// Práctica

const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
},
{
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
},
{
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: true
},
{
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: true
},
];

// Ejercicio 1

// for ( i = 0; i < carrito.length ; i++) {
//     imprimir(carrito[i]);
// }

// function imprimir(carrito) {
//     console.log("-------------");
//     for (attr in carrito) {
//         console.log(attr + ": " + carrito[attr]);
//     }
// }


// Ejercicio 2

// var elementoEliminado = carrito.splice(2,1);

// console.log(carrito);

/* Ejercicio 3 */
// var sumTotal = 0;

// for ( i = 0 ; i < carrito.length ; i++ ) {
//     sumTotal = sumTotal + (carrito[i].price * carrito[i].count)
// }

// console.log(sumTotal);

// Ejercicio 4

// for (i = 0; i < carrito.length ; i++) {
//     if (carrito[i].premium) {
//         console.log(carrito[i]);
//     }
// }


// EJERCICIOS OPCIONALES

// Ejercicio opcional 1

// var checkPremium = true;

// for (i = 0 ; i < carrito.length ; i++) {
//         checkPremium = checkPremium && carrito[i].premium
// }

// if (checkPremium) {
//     console.log("No tiene gastos de envío");
// } else {
//     console.log("Tiene gastos de envío")
// }

// Ejercicio opcional 2

// for ( i=0 ; i < carrito.length ; i++) {

//     var lista = ("Objeto N:" + (i) + "\n\n ID : " + carrito[i].id + "\n ");
//     var lista1 = ("Name: " + carrito[i].name + "\n ");
//     var lista2 = ("Price: " + carrito[i].price + "\n ");
//     var lista3 = ("Count: " + carrito[i].count + "\n ");
//     var lista4 = ("Premium: " + carrito[i].premium + "\n\n ");
//     var lista5 = lista + lista1 + lista2 + lista3 + lista4 + lista5; 
//     document.getElementById("lista").innerText = (lista5);

// }

// Ejercicio opcional 3

// var sumTotal = 0;

// for ( i = 0 ; i < carrito.length ; i++ ) {
//     sumTotal = sumTotal + (carrito[i].price * carrito[i].count)
// }

// console.log(sumTotal);

// if (sumTotal > 50) {
//     sumTotal = sumTotal - (sumTotal * 0.05);
// }

// console.log(sumTotal);




