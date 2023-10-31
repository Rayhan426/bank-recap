document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositfield = document.getElementById('diposit-field');
    const newDepositFieldString = depositfield.value;
    const newDepositField = parseFloat(newDepositFieldString);

    depositfield.value = '';
    if (isNaN(newDepositField)) {
        alert('input valid number');
        return;
    }
    // --------------- new balance and previous balance sum -------------
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousTotalDeposit = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousTotalDeposit + newDepositField;
    depositTotal.innerText = currentDepositTotal;

// --------------------------- total balance sum----------------------------------------
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalBalance =  previousTotalBalance + newDepositField;
    totalBalance.innerText =  currentTotalBalance;
})