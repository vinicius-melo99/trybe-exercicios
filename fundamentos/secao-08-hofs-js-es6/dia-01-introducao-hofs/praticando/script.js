const soma = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const div = (num1, num2) => num1 / num2;
const multi = (num1, num2) => num1 * num2;

const calculator = func => func(100,50);

console.log(calculator(multi));