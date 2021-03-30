// let dvResponse = document.getElementById("dvResponse");
// let userName = document.getElementById("userName");

function doThing(bill) {
   
   var initialBill = Number(bill.value);
   //gets the inital bill total

   var tip = initialBill * .2;
   //calculates the tip

   var newBill = initialBill + tip;
   //calculates the new total

   console.log("Tip: $" + tip + "  Total: $" + newBill);
   dvResponse.innerHTML = "Tip: $" + tip + "  Total: $" + newBill;
}