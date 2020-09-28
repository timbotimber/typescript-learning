function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Void signifies that a function doesn't return a value/doesn't use return

function printResult(num: number): void {
  console.log("Results:" + num);
}
// function types help define parameters/arguments etc

// this defines a function that takes 2 arguments and returns a number
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// we don't have to specify anything in the callback as it's defined above

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
