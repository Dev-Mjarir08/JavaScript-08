//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1
let str = " ";
let i = 1;
while (i <= 5) {
    let k = 5 - i;
    while (k) {
        str = str + "  ";
        k--;
    }   
    let j = 1;
    while (j <= i) {
        str = str + j + " ";
        j++;  
    }
    j = i - 1;
    while (j >= 1) {
        str = str + j + " ";
        j--;  
    }
    console.log(str);
    str = " ";
    i++;
}   
