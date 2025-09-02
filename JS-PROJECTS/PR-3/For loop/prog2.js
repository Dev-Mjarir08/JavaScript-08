//using for loop find fibonacci series
 let a , b=0 , c=1;
 let n=10;
 let str="Fibonacci series is : ";
    for(let i=1;i<=n;i++){
        a=b;
        b+=c;
        c=a;
        str+=`${a} `;
    }
console.log(str);
console.log("--------------------------------------------------");