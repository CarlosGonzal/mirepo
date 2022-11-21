// // Choose typeRoom - standar, junior suite, 
// var typeOfRoom = () => document.getElementById("hotels").value;

// // console.log(typeOfRoom());

// function handleTypeOfRoom() {
//     var priceHotel = 0;
//     if (typeOfRoom() === "standar") {
//         priceHotel = 100;
//     } else if (typeOfRoom() === "junior-suite") {
//         priceHotel = 120;
//     } else {
//         priceHotel = 150;
//     }
//     // console.log(priceHotel);
//     return priceHotel;
//     }

// // Spa yes or no

// function spa() {
//     var spaChecked = document.getElementById("check-spa").checked;
//     if (spaChecked) {
//         return 20;
//     } else {
//         return 0;
//     }
// }

// var price = handleTypeOfRoom() + spa();


// // Choose RoomSize - we need price for calculate room individual, doble or triple

// var roomSize = () => document.getElementById("rooms").value;


// function room(){
//     var roomI = 0;
//     if (roomSize() === "individual") {
//         roomI = 0.75;
//     }  else if (roomSize() === "double") {
//         roomI = 1;
//     }  else if (roomSize() === "triple") {
//         roomI = 1.25;
//     }
//     return roomI;
// }

// // Choose number of nights - use funcion ParseInt
// var numberNights = () => parseInt(document.getElementById("number-nights").value);

// // Parking

// var numberNightsParking = () => parseInt(document.getElementById("number-nights-parking").value);

// // Sumamos las cantidades

// suma = () => (((handleTypeOfRoom() + spa()) * room()) * (numberNights())) + (numberNightsParking() * 10);

// // document.getElementById("hotels").addEventListener("change" , () => console.log(handleTypeOfRoom())); 

// // document.getElementById("resultado").innerText = handleTypeOfRoom();


// document.getElementById("calculate-price").addEventListener("click", () => console.log(suma()));


// CALCULADORA SECUENCIAL

// Inputs

var numA = () => parseInt(document.getElementById("first-number").value);
var numB = () => parseInt(document.getElementById("second-number").value);

// Sum numbers with functions

var sumNumbers = () => numA() + numB();

// Substraction numbers with function.

var subNumbers = () => numA() - numB();


// Multiplication number with function.

var mulNumbers = () => numA() * numB();


// Division numbers with function

var divNumbers = () => numA() / numB();


// Results

var ResultSum = () => document.getElementById("result").innerText = sumNumbers();
var ResultSub = () => document.getElementById("result").innerText = subNumbers();
var ResultMul = () => document.getElementById("result").innerText = mulNumbers();
var ResultDiv = () => document.getElementById("result").innerText = divNumbers();



// Events

document.getElementById("sum").addEventListener("click", ifSumNumber);
document.getElementById("sub").addEventListener("click", ifSubNumber);
document.getElementById("mul").addEventListener("click", ifMulNumber);
document.getElementById("div").addEventListener("click", ifDivNumber);
