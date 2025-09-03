// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1


let i = 5;
while (i >= 1) {
    let str = "";
    let j = 5;
    while (j >= i) {
        str += `${j} `;
        j--;
    }
    console.log(str);
    i--;
}
