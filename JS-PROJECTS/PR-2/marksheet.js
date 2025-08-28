let s_name="Jarir Multani";
let s_id=9302;
let sub1=80;
let sub2=70;
let sub3=90;
let sub4=85;
let sub5=95;    
let total=sub1+sub2+sub3+sub4+sub5;
let avg=total/5;


console.log("Name: "+s_name);
console.log("----------------Mark Sheet----------------");
console.log("Subject 1: "+sub1);
console.log("Subject 2: "+sub2);
console.log("Subject 3: "+sub3);
console.log("Subject 4: "+sub4);
console.log("Subject 5: "+sub5);
console.log("-----------------------------------------");
console.log("Total Marks: "+total);
console.log("Average Marks: "+avg);


if(avg>=90 && avg<=100){
    console.log("Status A+");
}
else if(avg>=80 && avg<90){
    console.log("Status A");
}
else if(avg>=70 && avg<80){
    console.log("Status B+");
}
else if(avg>=60 && avg<70){
    console.log("Status B");
}
else{
    console.log("Status F");
}