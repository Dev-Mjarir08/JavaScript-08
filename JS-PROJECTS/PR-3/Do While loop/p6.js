// 5 4 3 2 1
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 
let n = 5;
let i = n;
do {
    let str = "";
    let j = n;
    do {
        str += `${j} `;
        j--;
    } while (j >= n - i + 1);
    console.log(str);
    i--;
} while (i >= 1);