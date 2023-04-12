function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}

function getInnerTextValue(id) {
  const oldInnerText = document.getElementById(id);
  const oldInnerTextValue = parseFloat(oldInnerText.innerText);
  return oldInnerTextValue;
}

function setTotalValue(idToSet, newValue) {
  const elementToSetValue = document.getElementById(idToSet);
  elementToSetValue.innerText = newValue;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the new deposit input value
  const newDeposit = getInputValue("deposit-input");

  if (isNaN(newDeposit)) {
    alert("please provide a valid number");
    depositInput.value = "";
    return;
  }

  // get the old deposit value
  const oldDepositValue = getInnerTextValue("deposit");

  const totalDepositValue = oldDepositValue + newDeposit;
  setTotalValue("deposit", totalDepositValue);
  // add the deposit money in balance
  const oldBalanceValue = getInnerTextValue("balance");
  const newBalance = oldBalanceValue + newDeposit;
  setTotalValue("balance", newBalance);
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the withdraw input value
  const newWithdrawValue = getInputValue("withdraw-input");
  if (isNaN(newWithdrawValue)) {
    alert("please provide a valid number");
    withdrawInput.value = "";
    return;
  }
  // get the balance value
  // const oldBalanceText = document.getElementById("balance");
  const oldBalanceValue = getInnerTextValue("balance");
  // set the new value in balance

  // check if withdraw amount is > balance amount
  if (newWithdrawValue > oldBalanceValue) {
    alert("mayer bank a ato tk nai!!!");
    withdrawInput.value = "";
    return;
  }

  const newBalance = oldBalanceValue - newWithdrawValue;
  setTotalValue("balance", newBalance);

  // set the withdraw money in withdraw
  const oldWithdrawValue = getInnerTextValue("withdraw");
  const totalWithdraw = oldWithdrawValue + newWithdrawValue;
  setTotalValue("withdraw", totalWithdraw);
  withdrawInput.value = "";
});
