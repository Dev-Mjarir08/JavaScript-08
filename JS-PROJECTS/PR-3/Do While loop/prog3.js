//using do-while loop to check prime number
let num = 38;
let isPrime = true;
let i = 2;

do {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
    i++;
} while (i <= num/2);

if (isPrime) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}