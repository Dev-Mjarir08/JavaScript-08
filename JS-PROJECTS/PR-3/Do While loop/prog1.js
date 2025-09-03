//using do-while loop find factorial of a number
let num = 5;
let fact = 1;
let i = 1;
let str = `Factorial of ${num} is : `;
do {
    fact = fact * i;
    i++;
    str += `${fact} `;
} while (i <= num);
console.log(str);