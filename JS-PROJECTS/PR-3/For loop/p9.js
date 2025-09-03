// * * * * * * * * *
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 

let n = 5;

for (let i = n; i >= 1; i--) {
    let str = "";
    for (let k = 1; k <= n - i; k++) {
        str+= "  "
    }
    for (let j = 1; j <= i; j++) {
        str+= "* "
    }
    for (let j = 1; j < i; j++) {      
        str+= "* "
    }
    console.log(str);
    str = "";
}