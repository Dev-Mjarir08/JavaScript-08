// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
let i = 1;
do {
    let j = i;
    let str = "";
    do {
        str += `${j} `;
        j--;
    } while (j >= 1);
    console.log(str);
    i++;
} while (i <= 5);