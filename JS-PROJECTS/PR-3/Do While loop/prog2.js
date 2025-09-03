//using do-while loop to create Fibonacci series 

let n = 20;
let a, b = 0, c = 1;
let str = 'Fibonacci Series is : ';
let i = 1;

do {
    a = b;
    b += c;
    c = a;
    str += `${a} `;
    i++;
} while (i <= n);
console.log(str);