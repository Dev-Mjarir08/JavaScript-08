let numberInput = document.querySelector('#numberInput');
let result = document.querySelector('#result');



const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const fact = () => {
    let n = parseFloat(numberInput.value);
    let ans = factorial(n);
   result.innerText = "Factorial: " + ans;
}
