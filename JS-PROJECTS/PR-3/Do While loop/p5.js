// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
let i = 5;
do {
    let str = "";
    let j = i;
    do {
        str += `${j} `;
        j--;
    } while (j >= 1);
    console.log(str);
    i--;
} while (i >= 1);