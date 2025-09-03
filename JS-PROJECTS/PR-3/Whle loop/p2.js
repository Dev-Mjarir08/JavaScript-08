// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1
let i = 1;
while (i <= 5) {
    let j = i;
    let str = "";
    while (j >= 1) {
        str += `${j} `;
        j--;
    }
    console.log(str);
    i++;
}

