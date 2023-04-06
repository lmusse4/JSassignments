let billTotal = 50;


function calculateTip(amount) {
  let tipAmount = amount * 0.2;
  return tipAmount;
}


function getBillTotal(amount) {
  let tipAmount = calculateTip(billTotal);
  return  amount + tipAmount;
}


console.log("Tip: $ " + calculateTip(billTotal));
console.log("Bill total with tip: $ " + getBillTotal(billTotal));
