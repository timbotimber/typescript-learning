const userName: string = "Timmy";

console.log(userName);

// TS doesn't moan about the DOM api because it's recognized by default in the config file
const button = document.querySelector("button")!;

// The if statement below works the same as the ! above and makes sure that if the button doesn't exist in the DOM then the code isn't accessible.

if (button) {
  button.addEventListener("click", () => {
    console.log("Tiiimmaahhh");
  });
}

// Strict Null checks in the config would also help with this

// the spread operation works better than pushing individual elements in typescript
const hobbies = ["sports", "cooking"];

const activeHobbies = ["hiking", ...hobbies];

activeHobbies.push("cats");

const person = {
  name: "abbasm'n",
  age: 60,
};

const copiedPerson = { ...person };

// the rest method below allows us to take multiple items for the same type

const add = (...numbers: number[]) => {
  numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

const addedNumber = add(4, 6, 7, 6, 5, 2);
console.log(addedNumber);
