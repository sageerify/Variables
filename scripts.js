//Can ternary operators be used in the loop?

let numbers = [1, 2, 3, 4, 5];
let results = [];

for (let i = 0; i < numbers.length; i++) {
  results.push(numbers[i] % 2 === 0 ? "Even" : "Odd");
}

console.log(results); // Output: ["Odd", "Even", "Odd", "Even", "Odd"]