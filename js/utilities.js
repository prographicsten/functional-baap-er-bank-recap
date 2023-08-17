function findInputValueById(inputValue) {
    const inputField = document.getElementById(inputValue);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextValueById(elementId) {
    const previousDeposit = document.getElementById(elementId);
    const previousDepositValueString = previousDeposit.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString);
    return previousDepositValue;
}

function setAmountValueById(elementId, amount) {
    const setAmount = document.getElementById(elementId);
    setAmount.innerText = amount;
}