let arr = ['435', '44356', '4363', '52362', '2638547', '2', '6736'];

for (let i = 0; i < arr.length; i++){
    if (arr[i].substring(0, 1) == 4 || arr[i].substring(0, 1) == 2){
        console.log(+arr[i]);
    }
}
console.log('Простые числа: ');

nextPrime:
for (let i = 2; i <=100; i++){
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue nextPrime;
    }
    console.log(i);
    
}



// function prime (n){
//     for (let i =2; i<=Math.sqrt(n); i++){
//         if (n%i == 0)
//             return false;
//     return true;
//     }
// }

// for (let i = 0; i < 100; i++){
//     if (prime(i)){
//         console.log(i);
//     }
// }
