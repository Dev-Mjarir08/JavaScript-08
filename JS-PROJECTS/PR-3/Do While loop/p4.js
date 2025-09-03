// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

let i = 5;
do {
    let str = "";
    let j = 5;
    do {
        str += `${j} `;
        j--;
    } while (j >= i);
    console.log(str);
    i--;
} while (i >= 1);