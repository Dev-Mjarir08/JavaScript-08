//creat calculator
let num1 =  document.getElementById("num1");
let num2 = document.getElementById("num2");
let ans =  document.getElementById("ans");
const sum = () => {
    let val1=parseInt(num1.value);
    let val2=parseInt(num2.value);
    ans.value=val1+val2;
}
const sub = () => {
    let val1=parseInt(num1.value);
    let val2=parseInt(num2.value);
    ans.value=val1-val2;
}
const multiplie = () => {
    let val1=parseInt(num1.value);
    let val2=parseInt(num2.value);
    ans.value=val1*val2;
}
const divide = () => {
    let val1=parseInt(num1.value);
    let val2=parseInt(num2.value);
    ans.value=val1/val2;
}