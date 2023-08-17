/*
1. add withdraw button event handlers
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4-5. set new withdraw total by using setTextElementValueById function
*/
// step 1
document.getElementById('btn_withdraw').addEventListener('click', function () {
    // console.log('got withdraw amount');
    // step 2
    const newWithdraw = findInputValueById('withdraw_field');
    // console.log(newWithdraw);
    // step 3
    const oldWithdraw = getTextValueById('withdraw_total');
    // console.log(oldWithdraw);
    // step 4
    const newAndOldWithdraw = oldWithdraw + newWithdraw;
    // console.log(newAndOldWithdraw);
    // step 5
    setAmountValueById('withdraw_total', newAndOldWithdraw);
    // step 6
    const currentOldAmount = getTextValueById('balance_total');
    const countPresentCurrentBalance = currentOldAmount - newWithdraw;
    // console.log(currentOldAmount);
    // step 7
    setAmountValueById('balance_total', countPresentCurrentBalance);
});