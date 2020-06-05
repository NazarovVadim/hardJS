let num = 266219;
let numStr = String(num);
let arr = [];

for(let i = 0; i < 6; i++){
    arr.push(numStr[i]);
}

let mult = arr.reduce(function(sum, current){
    return sum * current;
});

console.log(mult);
console.log(+String(mult ** 3).substr(0,3));