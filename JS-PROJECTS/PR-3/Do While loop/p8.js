//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

let i = 1;
do {
     let str = '';
    let k = 6 - i;
    do {
        str += '  ';
        k--;
    } while (k >= 1);
   
    let j = 1;
    do {
        str += `${j} `;
        j++;
    } while (j <= i);
     j = i - 1;
    do {
        if (j != 0) {
            str += `${j} `;
            j--;
        }
    } while (j >= 1);
    console.log(`${str}`);
    i++;
} while (i <= 5);