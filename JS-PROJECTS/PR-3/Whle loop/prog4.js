//using while loop find prime number1 to 100
let n = 100;
let i = 2;
let str = 'Prime numbers between 1 and 100 are : '; 
while (i <= n) {
    let j = 2;
    let isPrime = true;
    while (j <= i / 2) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    }
    if (isPrime) {
        str += `${i} `;
    }
    i++;
}   
console.log(str);