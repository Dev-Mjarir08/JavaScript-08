//using while loop find factorial of a number
let num = 5;
let fact = 1;
let i = 1;
let str = `Factorial of ${num} is : `;
while (i <= num) {
    fact = fact * i;
    i++;
    str += `${fact} `;
}   
console.log(str);

