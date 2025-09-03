//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5
let n = 5;
let i = 1;
do {
    let str = "";
    let k = 1;
    do {
        str += "  ";
        k++;
    } while (k <=n-i+1);
    j = 1;
    do {
        str += `${j} `;
        j++;
    } while (j <= i);
    console.log(str);
    i++;
} while (i <= n);