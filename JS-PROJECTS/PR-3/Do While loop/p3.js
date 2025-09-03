// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5
let i = 5;
do {
    let j = i;
    let str = "";
    do {
        str += `${j} `;
        j++;
    } while (j <= 5);
    console.log(str);
    str = "";
    i--;
} while (i >= 1);