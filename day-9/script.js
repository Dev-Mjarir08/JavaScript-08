let value1 = document.querySelector("input[name='value1']");
let value2 = document.querySelector("input[name='value2']");
let choice = document.querySelector("input[name='choice']");
let result = document.querySelector(".result");

let calc = () => {
    let val1 = parseInt(value1.value);
    let val2 = parseInt(value2.value);
    let ch = choice.value;

    switch (ch) {
        case '1':
            sum(val1, val2);
            break;
        case '2': 
            sub(val1, val2);
            break;
        case '3':
            mul(val1, val2);
            break;
        case '4':
            div(val1, val2);
            break;
        default:
            result.innerText = "Result: Invalid choice!";
    }
};

const sum = (val1, val2) => {
    result.innerText = "Result: " + (val1 + val2);
};

const sub = (val1, val2) => {
    result.innerText = "Result: " + (val1 - val2);
};

const mul = (val1, val2) => {
    result.innerText = "Result: " + (val1 * val2);
};

const div = (val1, val2) => {
    if (val2 === 0) {
        result.innerText = "Result: Cannot divide by 0!";
    } else {
        result.innerText = "Result: " + (val1 / val2);
    }
};