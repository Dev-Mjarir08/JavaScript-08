//using for loop find prime numbers between 1 to 100
let str="Prime numbers between 1 to 100 are : ";
for(let i=2;i<=100;i++){
    let count=0;
    for(let j=2;j<=i/2;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==0){
        str+=`${i} `;
    }
}
console.log(str);