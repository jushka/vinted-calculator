var monthlyExpenseInput = document.getElementById("monthlyExpense");
var yearlyExpenseOutput = document.getElementById("yearlyExpense");
var saveBtn = document.getElementById("saveBtn");
var saveOnSellOutput = document.getElementById("saveOnSell");
var buyBtn = document.getElementById("buyBtn");
var saveOnBuyOutput = document.getElementById("saveOnBuy");
var showReasonsBtn = document.getElementById("showReasonsBtn");
var ul = document.getElementsByTagName("ul");

function monthlyExpense() {
  return monthlyExpenseInput.value;
}

function yearlyExpense() {
  return monthlyExpense() * 12;
}

//show yearly expense
monthlyExpenseInput.addEventListener("change", function() {
  yearlyExpenseOutput.textContent = Math.round(yearlyExpense() * 100) / 100;
});

//show "Easy path" result
saveBtn.addEventListener("click", function() {
  if(document.querySelector('input[name="sellPercent"]:checked') !== null && monthlyExpense() !== "") {
    var sellPercent = Number(document.querySelector('input[name="sellPercent"]:checked').value);
    var savedSum = yearlyExpense() * sellPercent / 100 * 0.3;
    saveOnSellOutput.textContent = Math.round(savedSum * 100) / 100;
  }
});

//show "Practical path" result
buyBtn.addEventListener("click", function() {
  if(document.querySelector('input[name="buyPercent"]:checked') !== null && monthlyExpense() !== "") {
    var buyPercent = Number(document.querySelector('input[name="buyPercent"]:checked').value);
    var savedSum = yearlyExpense() - (yearlyExpense() * (1 - buyPercent / 100) * 0.7 + yearlyExpense() * (buyPercent / 100) * 0.3 * 0.5);
    saveOnBuyOutput.textContent = Math.round(savedSum * 100) / 100;
  }
});

//show reasons
showReasonsBtn.addEventListener("click", function() {
  ul[0].classList.toggle("show");
});