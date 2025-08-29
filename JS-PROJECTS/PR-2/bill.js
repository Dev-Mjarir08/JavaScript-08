//product bill
let product = "iPhone 14 Pro Max";
let price = 149999;
let quantity = 2;
let discount ;
let total = price * quantity;
dsc=total*0.1;
if (total > 100000) {
    discount = 1.2 // 10% discount for bills above 100000
}
else if (total > 50000) {
    discount = 0.1// 5% discount for bills above 50000
}
else {
    discount = 0; // no discount for bills below 50000
}
let final_amount = total - dsc;
console.log("Product: " + product);
console.log("Price: " + price);
console.log("Quantity: " + quantity);
console.log("Total: " + total);
console.log("Discount: " + dsc);
console.log("Final Amount: " + final_amount);
console.log("Thank you for shopping with us!");