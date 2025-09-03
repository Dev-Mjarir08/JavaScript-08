// 5 4 3 2 1
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 


let n = 5;
let i = n;
while (i >= 1) {
    let str = "";
    let j = n;
    while (j >= n - i + 1) {
        str += `${j} `;
        j--;
    }
    console.log(str);
    i--;
}
