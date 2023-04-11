document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the new deposit input value
  const depositInput = document.getElementById("deposit-input");
  const newDeposit = parseInt(depositInput.value);
  // get the old deposit value
  const oldDepositText = document.getElementById("deposit");
  const oldDepositValue = parseInt(oldDepositText.innerText);

  oldDepositText.innerText = oldDepositValue + newDeposit;
  depositInput.value = "";
  // add the deposit money in balance
  const oldBalanceText = document.getElementById("balance");
  const oldBalanceValue = parseInt(oldBalanceText.innerText);
  oldBalanceText.innerText = oldBalanceValue + newDeposit;
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the withdraw input value
  const withdrawInput = document.getElementById("withdraw-input");
  const newWithdrawValue = parseInt(withdrawInput.value);
  // get the balance value
  const oldBalanceText = document.getElementById("balance");
  const oldBalanceValue = parseInt(oldBalanceText.innerText);
  // set the new value in balance
  const newBalance = oldBalanceValue - newWithdrawValue;
  oldBalanceText.innerText = newBalance;

  // set the withdraw money in withdraw
  const oldWithdrawText = document.getElementById("withdraw");
  const oldWithdrawValue = parseInt(oldWithdrawText.innerText);
  oldWithdrawText.innerText = oldWithdrawValue + newWithdrawValue;
  withdrawInput.value = "";
});
