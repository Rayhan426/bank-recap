document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);
withdrawField.value = '';
if (isNaN(newWithdrawField)) {
    alert('Input An Amount');
    return;
}
const withdrawTotal =  document.getElementById('withdraw-total');
const previousWithdrawTotalString =  withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

const totalBalance = document.getElementById('total-balance');
const previousTotalBalanceString = totalBalance.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceString);

if (newWithdrawField > previousTotalBalance) {
    alert('You do not have more money');
    return;
}
const currentWithdrawBalance = previousWithdrawTotal + newWithdrawField;
withdrawTotal.innerText = currentWithdrawBalance;

const currentTotalBalance = previousTotalBalance - newWithdrawField;
totalBalance.innerText = currentTotalBalance;
})