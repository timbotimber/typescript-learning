var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2, showResult, phrase) {
    // this is how you check the type at run time
    // if (typeof num1 !== "number" || typeof num2 !== "number") {
    //   throw new Error("Nope!");
    // }
    if (showResult) {
        console.log(phrase + num1 + num2);
    }
    else {
        console.log("hello mother fucker", num1 + num2);
    }
}
// only define the type of variable when initializing it..
var powerPhrase;
powerPhrase = "I am the one and only";
// It's not best practice to define the type if it's explicit like...
var number1 = 3000;
var printResult = true;
var number2 = 4000;
var resultPrase = "songs of praise";
// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value, printResult));
// });
add(number1, number2, printResult, resultPrase);
// all numbers are floats in javascript. Fun fact
