//Laboratorio 4

// Sum numbers with functions

// function sumNumbers (numA , numB) {
//     var resultSum = numA + numB ;
//     console.log("The result of the sum is: " + resultSum);
// }

// sumNumbers(11, 4);

// // substraction numbers with function.

// function subNumbers (numA , numB) {
//     var resultSub = numA - numB ;
//     console.log("The result of the substraction is: " + resultSub);
// }

// subNumbers(6, 8);

// // Multiplication number with function.

// function mulNumbers (numA, numB) {
//     var resultMul = numA * numB;
//     console.log("The result of the multiplication is: " + resultMul);
// }

// mulNumbers(3,3);

// // Division numbers with function

// function divNumbers (numA, numB) {
//     var resultDiv = numA / numB;
//     console.log("The result of the division is:" , resultDiv);
// }

// divNumbers(4,2)

// console.log(sumNumbers());
// console.log(subNumbers());
// console.log(mulNumbers());
// console.log(divNumbers());

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

   //Null Field

   function ifSumNumber() {
   if (!numA() || !numB()){
      document.getElementById("result").innerText = "You should use 2 numbers";
      console.log("primera");
   } else {
      ResultSum();
      console.log("segunda");
   }
}

   function ifSubNumber() {
   if (!numA() || !numB()){
      document.getElementById("result").innerText = "You should use 2 numbers";
      console.log("tercera");
   } else {
      ResultSum();
      console.log("cuarta");
      }
   }

   function ifMulNumber() {
      if (!numA() || !numB()){
         document.getElementById("result").innerText = "You should use 2 numbers";
         console.log("quinta");
      } else {
         ResultSum();
         console.log("sexta");
      }
   }

   function ifDivNumber() {
      if (!numA() || !numB()){
         document.getElementById("result").innerText = "You should use 2 numbers";
         console.log("séptima");
      } else {
         ResultSum();
         console.log("octava");
      }
   }

