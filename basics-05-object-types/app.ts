// To note an object you need to assign an empty curly bracket
// the types get put into the curlies but it's not best practice
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Timmy",
//   age: 32,
// };

const person: {
  // if you're defining the tuple type you need to add the definition before you declare the object
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "timmmehh",
  age: 32,
  // TS knows this is a array of strings
  hobbies: ["star wars", "DnD", "synths"],
  // this is a tuple type. Not really sure what this is for yet...
  role: [2, "teacher"],
};

// the any type allows you to have a mixed array of types
let favouritetings: any[];
favouritetings = ["X-wings", 45];

// because we've set the type as a array of strings above, TS recommends functions because it knows what the type is.
for (const hobby of person.hobbies) {
  // TS recommended the .toUpperCase
  console.log(hobby.toUpperCase());
  // using .map below breaks it
  // console.log(hobby.map());
}

console.log(person.age);
