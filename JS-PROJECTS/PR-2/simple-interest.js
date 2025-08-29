// calculating simple interest
console.log("->->->->->Simple Interest Calculation-<-<-<-<-<");
console.log("------------------------------");

let principal = 1500000// initial amount
let time = 5; // time in years
let rate; // rate of interest
if(principal>=100000 && time>=5){
    rate = 9.8; // rate of interest
}
else if(principal>=800000 && time<3){
    rate = 8.5; // rate of interest
}
else if(principal>=500000 && time<2){
    rate = 7.5; // rate of interest
}
else{
    rate = 6.5; // rate of interest
}
total_amount = principal + (principal * rate * time) / 100; // total amount after adding simple interest
let simple_interest = (principal * rate * time) / 100; // formula for simple interest
console.log("Principalamount: " + principal);
console.log("Rate of Interest: " + rate + "%");
console.log("Time Period: " + time + " years");
console.log("------------------------------");
console.log("Simple Interest: " + simple_interest);
console.log("Total Amount: " + total_amount);// total amount after adding simple interest
