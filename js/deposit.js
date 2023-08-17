// step 1
document.getElementById('btn_deposit').addEventListener('click', function () {
    // console.log('Deposit button clicked');
    // step 2
    const newDeposit = findInputValueById('deposit_field');
    // console.log(newDeposit);
    // step 3
    const oldDeposit = getTextValueById('deposit_total');
    // console.log(oldDeposit);
    // step 4
    const newAndoldDeposit = oldDeposit + newDeposit;
    setAmountValueById('deposit_total', newAndoldDeposit);
    // step 5
    const currentAmout = getTextValueById('balance_total');
    // console.log(currentAmout);
    // step 6
    const currentBalance = currentAmout + newDeposit;
    // step 7
    setAmountValueById('balance_total', currentBalance);
});