// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5
let str = " ";
let i = 5;
while (i >= 1) {
    let j = i;
    while (j <= 5) {
        str = str + j + " ";
        j++;  
    }
    console.log(str);
    str = " ";
    i--;
}