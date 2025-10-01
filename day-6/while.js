
console.log("--------------");
//print 20 to 1 numbers using while loop
let j = 20;
while (j >= 1) {
    console.log(j);
    j--;
} 
console.log("--------------");  
//print  even numbers from 1 to 20 using while loop
let k = 1;
while (k <= 20) {
    if (k % 2 === 0) {
        console.log(k);
    }
    k++;
}
console.log("--------------");
//print odd numbers from 1 to 20 using while loop
let m = 1; 
while (m <= 20) {
    if (m % 2 !== 0) {
        console.log(m);
    }
    m++;
}
console.log("--------------");
//print table of 5 using while loop
let n = 1;
while (n <= 10) {
    console.log(5 * n);
    n++;
}
console.log("--------------");
//print table of 10 using while loop
let p = 1;
while (p <= 10) {
    console.log(10 * p);
    p++;
}   
console.log("--------------");
//print table of 10 in reverse order using while loop
let q = 10;
while (q >= 1) {    
    console.log(10 * q);
    q--;
}   
console.log("--------------");
//print sum of first 10 natural numbers using while loop
let r = 1;
let sum = 0;
while (r <= 10) {
    sum += r;
    r++;
}
console.log("Sum of first 10 natural numbers is: " + sum);
console.log("--------------");
//print factorial of a number using while loop
let num = 5; // You can change this number to calculate factorial of another number
let factorial = 1;  
let s = 1;
while (s <= num) {
    factorial *= s;
    s++;
}
console.log("Factorial of " + num + " is: " + factorial);
console.log("--------------");
//print fibonacci series up to 10 terms using while loop
let terms = 10;
let a = 0, b = 1, nextTerm; 
let count = 1;
console.log("Fibonacci Series:");
while (count <= terms) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
    count++;
}