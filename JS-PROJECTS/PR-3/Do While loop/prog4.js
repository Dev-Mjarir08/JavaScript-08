//using do-while loop to print all prime numbers between 1 and 100
let n = 100;
let i = 2;
let str = 'Prime numbers between 1 and 100 are : ';

do {
    let j = 2;
    let isPrime = true;
    
    do {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    } while (j <= i / 2);
    
    if (isPrime) {
        str += `${i} `;
    }
    i++;
} while (i <= n);

console.log(str);