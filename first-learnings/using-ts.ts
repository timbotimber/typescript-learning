const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  // this is how you check the type at run time
  // if (typeof num1 !== "number" || typeof num2 !== "number") {
  //   throw new Error("Nope!");
  // }

  if (showResult) {
    console.log(phrase + num1 + num2);
  } else {
    console.log("hello mother fucker", num1 + num2);
  }
}

// only define the type of variable when initializing it..
let powerPhrase: string;
powerPhrase = "I am the one and only";

// It's not best practice to define the type if it's explicit like...
let number1 = 3000;
let printResult = true;

let number2 = 4000;
let resultPrase = "songs of praise";

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value, printResult));
// });

add(number1, number2, printResult, resultPrase);

// all numbers are floats in javascript. Fun fact
