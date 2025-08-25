// Product Bill

let Pname, Pprice, Pqty, Pgst, Pdsc;
//producct details
Pname = "Sugar";
Pprice = 50;
Pqty = 5;
dsc = 0.12;

//bill calculations
let total, nettotal;
total = Pqty * Pprice;
Pdsc = total * dsc
nettotal = total -  Pdsc
//

//bill output method
console.log("Product Name : " + Pname)
console.log("Product Price : " + Pprice)
console.log("Product Pquty : " + Pqty)
console.log("Product Discount : " + dsc)
console.log("Product Total : " + total)
console.log("Product Pdsc ammount : " + Pdsc)
console.log("Product Nettotal: " + nettotal)

