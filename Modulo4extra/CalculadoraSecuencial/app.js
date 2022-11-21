// Inputs

var numA = () => parseInt(document.getElementById("first-number").value);
var numB = 0;

// Sum numbers with functions

var sumNumbers = () => numA() + numB;

// Substraction numbers with function.

var subNumbers = () => numB - numA();


// Multiplication number with function.

var mulNumbers = () => numA() * numB;


// Division numbers with function

var divNumbers = () => numB / numA() ;


// Results

function resultSum() {
    numB = sumNumbers();
    document.getElementById("result").innerText = numB;
}

function resultSub() {
    numB = subNumbers();
    document.getElementById("result").innerText = numB;
}

function resultMul() {
    numB = mulNumbers();
    document.getElementById("result").innerText = numB;
}

function resultDiv() {
    numB = divNumbers();
    document.getElementById("result").innerText = numB;
}

// Events

document.getElementById("sum").addEventListener("click", resultSum);
document.getElementById("sub").addEventListener("click", resultSub);
document.getElementById("mul").addEventListener("click", resultMul);
document.getElementById("div").addEventListener("click", resultDiv);


