
// IVA General 0.21
// IVA Alimentación 0.10
// IVA Libro 0.4




// const product = { count: 3, price: 5, type: "libro"};

// Código con switch

// IVAProducto = 0;

// switch(product.type) {
//     case "alimentacion": IVAProducto = 0.1; break;
//     case "libro": IVAProducto = 0.04; break;
//     default: IVAProducto = 0.21; break;
// }

// let precioProducto = 0;


// if(product.count < 0 || product.price < 0){
//    precioProducto = 0;
// } else {
//    precioProducto = product.count * product.price;
// }

// console.log(precioProducto);

// precioProducto = precioProducto + (precioProducto * IVAProducto);

// console.log(precioProducto);




//Código con IF

// let IVAAplicado = 0;

// if (IVAAplicado == "libro") {
//     IVAAplicado = 0.04;
// } else if (IVAAplicado == "alimentacion") {
//     IVAAplicado = 0.1;
// } else {
//     IVAAplicado = 0.21;
// }

// let precioProducto = 0;

// if(product.count < 0 || product.price < 0){
//     precioProducto = 0;
// } else {
//     precioProducto = product.count * product.price;
// }

// console.log("El precio del producto sin IVA es: ", precioProducto);

// precioProducto = precioProducto + (precioProducto * IVAAplicado);

// console.log("El precio de producto con el IVA aplicado es: ", precioProducto);





// Calcular sueldo

const empleado = {
    bruto : 14500,
    hijos : 2,
    pagas : 14
}

let retencion = 0;

if(empleado.bruto < 12000){
    retencion = 0;
} else if (empleado.bruto > 12000 && empleado.bruto < 24000) {
    retencion = 0.08;
} else if (empleado.bruto > 24000 && empleado.bruto < 34000) {
    retencion = 0.16;
} else {
    retencion = 0.30;
}

console.log("El dinero Bruto es: ", empleado.bruto);

let DineroBruto = 0;

DineroBruto = empleado.bruto - (empleado.bruto * retencion);

console.log("El dinero Bruto más la retención es: ", DineroBruto);

DineroNeto = 0;

if (empleado.pagas == 14) {
    DineroNeto = DineroBruto / 14;
} else {
    DineroNeto = DineroBruto / 12;
}

console.log("El dinero Neto es: ", DineroNeto);
