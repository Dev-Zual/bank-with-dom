document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the new deposit input value
  const newDeposit = getInputValue("deposit-input");

  if (isNaN(newDeposit)) {
    alert("please provide a valid number");
    depositInput.value = "";
    return;
  }

  // get the old deposit value
  const oldDepositText = document.getElementById("deposit");
  const oldDepositValue = parseFloat(oldDepositText.innerText);

  oldDepositText.innerText = oldDepositValue + newDeposit;

  // add the deposit money in balance
  const oldBalanceText = document.getElementById("balance");
  const oldBalanceValue = parseFloat(oldBalanceText.innerText);
  oldBalanceText.innerText = oldBalanceValue + newDeposit;
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the withdraw input value
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawValue = parseFloat(withdrawInput.value);
  if (isNaN(newWithdrawValue)) {
    alert("please provide a valid number");
    withdrawInput.value = "";
    return;
  }
  // get the balance value
  const oldBalanceText = document.getElementById("balance");
  const oldBalanceValue = parseFloat(oldBalanceText.innerText);
  // set the new value in balance

  // check if withdraw amount is > balance amount
  if (newWithdrawValue > oldBalanceValue) {
    alert("mayer bank a ato tk nai!!!");
    withdrawInput.value = "";
    return;
  }

  oldBalanceText.innerText = oldBalanceValue - newWithdrawValue;

  // set the withdraw money in withdraw
  const oldWithdrawText = document.getElementById("withdraw");
  const oldWithdrawValue = parseFloat(oldWithdrawText.innerText);
  oldWithdrawText.innerText = oldWithdrawValue + newWithdrawValue;
  withdrawInput.value = "";
});

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}
