//using for loop find factorial of a number
let num = 10;
let fact = 1;
for (let i = 1; i <= num; i++) {
    let str="";
    fact = fact * i;
    str+=`${fact}`;
}
console.log(`Factorial of ${num} is : ${fact}`);
console.log("--------------------------------------------------");
