//using for loop find prime number 
let num = 29;
let str="";
let isPrime = true;
for (let i = 2; i <= num/2; i++) {
    if (num % i == 0) {
        isPrime = false;
    }
}
if (isPrime) {
    str=`${num} is a prime number`;
}   
else {
    str=`${num} is not a prime number`;
}   
console.log(str);
console.log("--------------------------------------------------");
