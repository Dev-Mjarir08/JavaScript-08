let s_name="Jarir Multani";
let s_id=9302;
let html_marks=80;
let dsa_marks=93;
let mq_bt=65;
let total=html_marks+dsa_marks+mq_bt;
let avg=total/3;


console.log("Name: "+s_name);
console.log("----------------Mark Sheet----------------");
console.log("Subject 1: "+ html_marks);
console.log("Subject 2: "+dsa_marks);
console.log("Subject 3: "+mq_bt);
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