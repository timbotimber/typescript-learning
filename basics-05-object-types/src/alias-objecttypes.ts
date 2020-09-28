// Type aliases can be used to create personalized types. Aliases can be given to object types. This works a liiiittle bit like a class?:

type Player = { name: string; age: number };
const PlayerOne: Player = { name: "Max", age: 30 };
const PlayerTwo: Player = { name: "cools man", age: 35 };

function greet(user: { name: string; age: number }) {
  console.log(`hi, ${user.name}`);
}
