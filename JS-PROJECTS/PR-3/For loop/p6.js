// 5 4 3 2 1
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 

let str = "";
n=5
for (let i = n; i >= 1; i--) {
    for (let j = n; j >=n - i + 1; j--) {
        str+= `${j} `
    }
    console.log(str);
    str = "";
}
