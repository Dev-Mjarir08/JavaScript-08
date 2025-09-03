// * * * * * * * * *
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         *
let i = 1;
do {
    let str = '';
    let k = 1;
    do {
        str += '  ';
        k++;
    } while (k <= i);

    let j = i;
    do {
        str += '* ';
        j++;
    } while (j <= 5 * 2 - i);
    console.log(`${str}`);
    i++;
} while (i <= 5);