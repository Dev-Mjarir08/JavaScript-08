// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
let i = 5;
while (i >= 1) {
    let str = "";
    let j = i;
    while (j >= 1) {
        str += `${j} `;
        j--;
    }
    console.log(str);
    i--;
}