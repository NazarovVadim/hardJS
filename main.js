let num = 266219;

console.log(num.toString().split('').reduce((mult, curr) => mult * curr));
console.log((num.toString().split('').reduce((a, b) => a * b ) **3).toString().slice(0, 2));
