const math = require('./math');
const msg = require('./message');

console.log("Welcome to Node.js Learning!");

let result1 = math.add(10, 20);
let result2 = math.multiply(5, 6);
let greeting = msg.getMessage();

console.log("Addition: " + result1);
console.log("Multiplication: " + result2);
console.log(greeting);
