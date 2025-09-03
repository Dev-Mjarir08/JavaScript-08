//using while loop find  prime number
let num = 38;
let isPrime = true;
let i = 2;
while (i <= num/2) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
if (isPrime) {
    console.log(`${num} is a prime number`);
}   
else {
    console.log(`${num} is not a prime number`);
}
