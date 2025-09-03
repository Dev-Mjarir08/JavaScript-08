let n = 5;
let i = n;
while (i >= 1) {
    let k = 1;
    let str = "";
    while (k <= n - i) {
        str += "  ";
        k++;
    }
    let j = 1;
    while (j <= i) {
        str += "* ";
        j++;
    }
    j = 1;
    while (j < i) {
        str += "* ";
        j++;
    }
    console.log(str);
    i--;
}
