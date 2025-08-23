document.getElementById('btn-add =-money').addEventListener('click', function(event){
    event.preventDefault()

    const pin = '1234';

    // error messages
    let bankSelectErrorMsg = document.getElementById('bank-select-ErrorMsg');
    bankSelectErrorMsg.textContent = "";
    let accountNumberErrorMsg = document.getElementById("account-number-ErrorMsg");
    accountNumberErrorMsg.textContent = "";
    let addAmountErrorMsg = document.getElementById("add-amount-ErrorMsg");
    addAmountErrorMsg.textContent = "";
    let pinErrorMsg = document.getElementById("pin-ErrorMsg");
    pinErrorMsg.textContent = "";


    // input feild value
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = document.getElementById("add-amount").value;
    const pinValue = document.getElementById('pin').value;

    // bank selection check
    if(bank === 'Select Bank'){
        bankSelectErrorMsg.textContent = "Please Select a Bank";
        return;
    }

    // accountNumber validity check
    if(accountNumber.length === 0){
        accountNumberErrorMsg.innerText = "Please Provide a Valid Account Number"
        return;
    }
    if(accountNumber.length !== 11){
        accountNumberErrorMsg.textContent = "× Invalid Account Number";
        return;
    }
    if(accountNumber.length === 11){
        for(Character of accountNumber){
            if(isNaN(Character) || Character === ' '){
                accountNumberErrorMsg.textContent = "× Invalid Account Number";
                return;
            }
        }
    }

    // addAmount validity check
    if(addAmount === ''){
        addAmountErrorMsg.textContent = "Please Enter Valid Amount";
        return;
    }
    for(char of addAmount){
        if(isNaN(char) || char === ' '){
            addAmountErrorMsg.textContent = "× Invalid Amount";
            return;
        }
    }

    //Add Amount string to integer convert
    const correctAmount = parseInt(addAmount)
    
    // pin validity check
    if(pinValue.length === 0){
        pinErrorMsg.textContent = "Enter 4 Digit Pin";
        return;
    }
    if (pinValue !== pin) {
      pinErrorMsg.textContent = "× Wrong Pin";
      return;
    } 

    // add balance
    let availableBalance = parseInt(document.getElementById('balance').innerText);
    const newBalance = availableBalance + correctAmount;
    document.getElementById('balance').innerText = newBalance;

})
