// global variable
const pin = '1234';

// toggle section
document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('withdraw-money-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
    document.getElementById('add-money').style.border = '2px solid blue'
    document.getElementById('cashout').style.border = ''

})
document.getElementById('cashout').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('withdraw-money-parent').style.display = 'block'
    document.getElementById('cashout').style.border = '2px solid blue'
    document.getElementById('add-money').style.border = ''
})

// add Money section js
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()

    // error messages
    let bankSelectErrorMsg = document.getElementById('bank-select-ErrorMsg');
    bankSelectErrorMsg.textContent = "";
    let accountNumberErrorMsg = document.getElementById("account-number-ErrorMsg");
    accountNumberErrorMsg.textContent = "";
    let addAmountErrorMsg = document.getElementById("add-amount-ErrorMsg");
    addAmountErrorMsg.textContent = "";
    let addPinErrorMsg = document.getElementById("add-pin-ErrorMsg");
    addPinErrorMsg.textContent = "";


    // input feild value
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = document.getElementById("add-amount").value;
    const pinValue = document.getElementById('add-pin').value;
    let availableBalance = parseInt(document.getElementById('balance').innerText);

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
        addPinErrorMsg.textContent = "Enter 4 Digit Pin";
        return;
    }
    if (pinValue !== pin) {
      addPinErrorMsg.textContent = "× Wrong Pin";
      return;
    } 

    // add balance
    const newBalance = availableBalance + correctAmount;
    document.getElementById('balance').innerText = newBalance;
})


// withdraw money section js
document.getElementById('btn-withdraw-money').addEventListener('click', function(event){
    event.preventDefault()
    console.log('hello')
    // error messages
    let agentNumberErrorMsg = document.getElementById("agent-number-ErrorMsg");
    agentNumberErrorMsg.textContent = "";
    let withdrawAmountErrorMsg = document.getElementById("withdraw-amount-ErrorMsg");
    withdrawAmountErrorMsg.textContent = "";
    let withdrawPinErrorMsg = document.getElementById("withdraw-pin-ErrorMsg");
    withdrawPinErrorMsg.textContent = "";

    // input feild value
    const agentNumber = document.getElementById('agent-number').value;
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const pinValue = document.getElementById('withdraw-pin').value;
    let availableBalance = parseInt(document.getElementById('balance').innerText)

    // agent Number validity check
    if(agentNumber.length === 0){
        agentNumberErrorMsg.innerText = "Please Provide a Valid Number"
        return;
    }
    if(agentNumber.length !== 11){
        agentNumberErrorMsg.textContent = "× Invalid Number";
        return;
    }
    if(agentNumber.length === 11){
        for(Character of agentNumber){
            if(isNaN(Character) || Character === ' '){
                agentNumberErrorMsg.textContent = "× Invalid Number";
                return;
            }
        }
    }

    // withdraw Amount validity check
    if(withdrawAmount >= availableBalance){
        withdrawAmountErrorMsg.textContent = "Unavailable Balance";
        return;     
    }
    if(withdrawAmount === ''){
        withdrawAmountErrorMsg.textContent = "Please Enter Valid Amount";
        return;
    }
    for(char of withdrawAmount){
        if(isNaN(char) || char === ' '){
            withdrawAmountErrorMsg.textContent = "× Invalid Amount";
            return;
        }
    }

    //withdraw Amount string to integer convert
    const correctAmount = parseInt(withdrawAmount)

    //withdraw pin validity check
    if(pinValue.length === 0){
        withdrawPinErrorMsg.textContent = "Enter 4 Digit Pin";
        return;
    }
    if (pinValue !== pin) {
      withdrawPinErrorMsg.textContent = "× Wrong Pin";
      return;
    } 

    //withdraw balance
    const newBalance = availableBalance - withdrawAmount
    document.getElementById('balance').innerText = newBalance;

})
