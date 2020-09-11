// set a type 'variable' called an alias that sets 1 variable for a union type
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

// use the | command to create UNION TYPES. This allows you to input 2 or more values for one input

// UNION types require more logic in the function at run time as more types confuse typescript:

//  this now uses alias types
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
    return result;
  } else {
    result = input1.toString() + input2.toString();
  }

  return resultConversion === "as-number" ? +result : result.toString();
}

console.log(combine(34, 56, "as-number"));
console.log(combine("34", "56", "as-string"));
console.log(combine("al", "an", "as-string"));
