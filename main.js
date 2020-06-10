let arr = ['435', '44356', '4363', '52362', '2638547', '2', '6736'];

let arr2 = arr.filter(a => a[0] == 4 || a[0] == 2);
console.log(arr2);

console.log('Простые числа: ');
let del = 0;

function isPrime (n){
    let start = 2;
    const a = Math.sqrt(n);
    while (start <= a){
        if (n % start++ < 1) return false;
    }
    return true;
}
for(let i = 2; i<=100; i++){
    if(isPrime(i)){
        console.log(i + '  Делители: 1 и ' + i);
    }
}