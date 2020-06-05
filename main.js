let num = 266219;
let numStr = String(num);
let temp = 0;
let = mult = 1;

for(let i = 0; i< 6; i++){ 
    temp = numStr % 10;
    numStr = numStr.substr(0, numStr.length-1);
    mult *= temp;
}

console.log(mult);

console.log(+String(mult ** 3).substr(0,3));




