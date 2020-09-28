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
