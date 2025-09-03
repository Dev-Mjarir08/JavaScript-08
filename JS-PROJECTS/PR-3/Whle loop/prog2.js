//using while loop find fibonacci series

let n = 20;
let a, b = 0, c = 1;
let str = 'Fibonacci Series is : ';

for (let i = 1; i <= n; i++) {
    a = b;
    b += c;
    c = a;
    str += `${a} `;
}
console.log(str);