// Inputs

var totalAmount = () => parseFloat(document.getElementById("total").value);
var deliveredQuantity = () => parseFloat(document.getElementById("delivered").value);

var numA = 0;
var numB = 0;
var numC = (numberA, numberB) => numberA - numberB;


//Function for calculated variables

var changeFunctionTotal = () => {
    numA = totalAmount();
    document.getElementById("result").innerText = numA;
    numB = deliveredQuantity();
    document.getElementById("result2").innerText = numB;
    if (numA < numB) {
        console.log("can't be calculated")
    } else {
        return numC(numA, numB);
    }
}


// Show by console the change in bills and coins

var showResult = () => {
    result = changeFunctionTotal();
    i = 0;

    console.log("your change in bills and coins");

    while (result > 199)
        if (result / 200 >= 1) {
            result -= 200;
            i++;
            console.log(i, "bill of 200");
        }
    console.log(result);
    i = 0
    while (result > 99.9)
        if (result / 100 >= 1) {
            result -= 100;
            i++;
            console.log(i, "bill of 100");
        }
    // console.log(result);
    i = 0
    while (result > 49.9)
        if (result / 50 >= 1) {
            result -= 50;
            i++;
            console.log(i, "bill of 50");
        }
    // console.log(result);
    i = 0
    while (result > 19.9)
        if (result / 20 >= 1) {
            result -= 20;
            i++;
            console.log(i, "bill of 20");
        }
    // console.log(result);
    i = 0
    while (result > 9.9)
        if (result / 10 >= 1) {
            result -= 10;
            i++;
            console.log(i, "bill of 10");
        }
    // console.log(result);
    i = 0;
    while (result > 4.9)
        if (result / 5 >= 1) {
            result -= 5;
            i++;
            console.log(i, "bill of 5");
        }
    // console.log(result);
    i = 0;
    while (result > 1.9)
        if (result / 2 >= 1) {
            result -= 2;
            i++;
            console.log(i, "coin of 2");
        }
    i = 0;
    while (result > 0.99)
        if (result >= 1 && result < 2) {
            result -= 1;
            i++;
            console.log(i, "coin of 1");
            // console.log(result);
        }
    i = 0;
    while (result > 0.49)
        if (result >= 0.5 && result < 1) {
            result -= 0.5;
            i++;
            console.log(i, "coin of 0.5");
            // console.log(result);
        }
    i = 0;
    while (result > 0.19)
        if (result >= 0.2 && result < 0.5) {
            result -= 0.2;
            i++;
            console.log(i, "coin of 0.2");
            // console.log(result);
        }
    i = 0;
    while (result > 0.09)
        if (result >= 0.1 && result < 0.2) {
            result -= 0.1;
            i++;
            console.log(i, "coin of 0.1");
            // console.log(result);
        }
    i = 0;
    while (result > 0.04)
        if (result >= 0.5 && result < 0.5) {
            result -= 0.05;
            i++;
            console.log(i, "coin of 0,05");
            // console.log(result);
        }
    i = 0;
    while (result > 0.019)
        if (result >= 0.02 && result < 0.05) {
            result -= 0.02;
            i++;
            console.log(i, "coin of 0.02");
            // console.log(result);
        }
    i = 0;
    while (result > 0.009)
        if (result >= 0.01 && result < 0.02) {
            result -= 0.01;
            i++;
            console.log(i, "coin of 0.01");
            // console.log(result);
        }
}


// document.getElementById("calculate").addEventListener("click", changeFunctionTotal);
document.getElementById("calculate").addEventListener("click", showResult);
