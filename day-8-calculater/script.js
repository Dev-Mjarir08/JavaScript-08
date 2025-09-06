let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let ans = document.getElementById("ans");



const sum =() =>{
    let val1 = parseFloat(num1.value);
    let val2 = parseFloat(num2.value);

    ans.value = val1 + val2;

    num1.value = "";
    num2.value = "";
}
const  sub =() =>{

    let val1 = parseFloat(num1.value);
    let val2 = parseFloat(num2.value);

    ans.value = val1 - val2;
    num1.value = "";
    num2.value = "";
}   
const  mul =() =>{

    let val1 = parseFloat(num1.value);
    let val2 = parseFloat(num2.value);

    ans.value = val1 * val2;
    num1.value = "";
    num2.value = "";
}
const  divid =() =>{

    let val1 = parseFloat(num1.value);
    let val2 = parseFloat(num2.value);

    ans.value = val1 / val2;
    num1.value = "";
    num2.value = "";
}
