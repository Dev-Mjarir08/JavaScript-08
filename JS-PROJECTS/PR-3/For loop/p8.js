//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

let n=5
for (let i = 1; i <= n; i++) {
    let str = ""; 
    for (let k = 1; k <= n - i; k++) {
        str+= "  "
    }
    for (let j = 1; j <= i; j++) {
        str+= `${j} `
    }
    for (let j = i - 1; j >= 1; j--) {      
        str+= `${j} `
    }
    console.log(str);
   
}
