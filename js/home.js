// global variable
const pin = '1234';

// function to use toggle homepage form
function toggleHomePageForm(id){
    const toggleForms = document.getElementsByClassName("homepage-form")
    for(const toggleForm of toggleForms){
        toggleForm.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

// function to use toggle home page btn 
function toggleHomePageBtn(id){
    const toggleBtns = document.getElementsByClassName('home-page-toggle-btn')
    for(const toggleBtn of toggleBtns){
        toggleBtn.classList.remove("bg-[#0845f20d]", "border-[#0874F2]")
        toggleBtn.classList.add("border-gray-200")
    }
    const currentBtn = document.getElementById(id)
    currentBtn.classList.remove("border-gray-200")
    currentBtn.classList.add("bg-[#0845f20d]", "border-[#0874F2]",)
}

// funtion to use toggle btn title
function toggleBtnTitle(id){
    const toggleBtnTitles = document.getElementsByClassName("toggle-btn-title")
    for(const toggleBtnTitle of toggleBtnTitles){
        toggleBtnTitle.classList.remove("font-bold", "text-blue-500")
        toggleBtnTitle.classList.add("font-semibold", "text-[#08080880]")
    }
    const currentBtnTitle = document.getElementById(id)
    currentBtnTitle.classList.remove("font-semibold", "text-[#08080880]")
    currentBtnTitle.classList.add("font-bold", "text-blue-500")
}

// toggle section
document.getElementById('add-money-btn').addEventListener('click', function(){
    toggleHomePageForm("add-money-parent")
    toggleHomePageBtn('add-money-btn')
    toggleBtnTitle('add-money-title')
})
document.getElementById('cashout-btn').addEventListener('click', function(){
    toggleHomePageForm("withdraw-money-parent")
    toggleHomePageBtn('cashout-btn')
    toggleBtnTitle("cashout-title")
})
document.getElementById('transfer-money-btn').addEventListener('click', function(){
    toggleHomePageForm("transfer-money-parent")
    toggleHomePageBtn('transfer-money-btn')
    toggleBtnTitle("transfer-money-title")
})
document.getElementById("get-bonus-btn").addEventListener("click", function(){
    toggleHomePageForm("get-bonus-parent")
    toggleHomePageBtn('get-bonus-btn')
    toggleBtnTitle("get-bonus-title")
})
document.getElementById("pay-bill-btn").addEventListener("click", function(){
    toggleHomePageForm("pay-bill-parent")
    toggleHomePageBtn('pay-bill-btn')
    toggleBtnTitle("pay-bill-title")
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
    if(withdrawAmount > availableBalance){
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

// transfer money section js
document.getElementById('btn-transfer-money').addEventListener('click', function(event){
    event.preventDefault()

    // error messages
    let transferAgentNumberErrorMsg = document.getElementById("transfer-agent-number-ErrorMsg");
    transferAgentNumberErrorMsg.textContent = "";
    let transferAmountErrorMsg = document.getElementById("transfer-amount-ErrorMsg");
    transferAmountErrorMsg.textContent = "";
    let transferPinErrorMsg = document.getElementById("transfer-pin-ErrorMsg");
    transferPinErrorMsg.textContent = "";

    // input field value
    const transferAgentNumber = document.getElementById('transfer-agent-number').value;
    const transferAmount = document.getElementById("transfer-amount").value;
    const pinValue = document.getElementById('transfer-pin').value;
    let availableBalance = parseInt(document.getElementById('balance').innerText)

    // transfer agent Number validity check
    if(transferAgentNumber.length === 0){
        transferAgentNumberErrorMsg.textContent = "Please Provide a Valid Number"
        return;
    }
    if(transferAgentNumber.length !== 11){
        transferAgentNumberErrorMsg.textContent = "× Invalid Number";
        return;
    }
    if(transferAgentNumber.length === 11){
        for(Character of transferAgentNumber){
            if(isNaN(Character) || Character === ' '){
                transferAgentNumberErrorMsg.textContent = "× Invalid Number";
                return;
            }
        }
    }

    // transfer Amount validity check
    if(transferAmount >= availableBalance){
        transferAmountErrorMsg.textContent = "Unavailable Balance";
        return;     
    }
    if(transferAmount === ''){
        transferAmountErrorMsg.textContent = "Please Enter Valid Amount";
        return;
    }
    for(char of transferAmount){
        if(isNaN(char) || char === ' '){
            transferAmountErrorMsg.textContent = "× Invalid Amount";
            return;
        }
    }

    //transfer Amount string to integer convert
    const correctAmount = parseInt(transferAmount)

    //transfer pin validity check
    if(pinValue.length === 0){
        transferPinErrorMsg.textContent = "Enter 4 Digit Pin";
        return;
    }
    if (pinValue !== pin) {
      transferPinErrorMsg.textContent = "× Wrong Pin";
      return;
    } 

    //transfer balance
    const newBalance = availableBalance - transferAmount
    document.getElementById('balance').innerText = newBalance;

})

// get bonus section js
document.getElementById('btn-get-bonus').addEventListener('click', function(event){
    event.preventDefault()

    // error messages
    let getBonusErrorMsg = document.getElementById("get-bonus-ErrorMsg");
    getBonusErrorMsg.textContent = "";

    // input field value
    const getBonusCouponNumber = document.getElementById('get-bonus-coupon').value;
    let availableBalance = parseInt(document.getElementById('balance').innerText)

    // Coupon Number validity check
    if(getBonusCouponNumber.length === 0){
        getBonusErrorMsg.textContent = "Please Provide a Valid Coupon Number"
        return;
    }

    // //get Bonus balance
    // const newBalance = availableBalance - getBonusAmount
    // document.getElementById('balance').innerText = newBalance;

})

// Pay Bill section js
document.getElementById('btn-pay-bill').addEventListener('click', function(event){
    event.preventDefault()

    // error messages
    let payBillSelectErrorMsg = document.getElementById('pay-bill-select-ErrorMsg');
    payBillSelectErrorMsg.textContent = "";
    let billerAccountNumberErrorMsg = document.getElementById("biller-account-number-ErrorMsg");
    billerAccountNumberErrorMsg.textContent = "";
    let payAmountErrorMsg = document.getElementById("pay-amount-ErrorMsg");
    payAmountErrorMsg.textContent = "";
    let payBillPinErrorMsg = document.getElementById("paybill-pin-ErrorMsg");
    payBillPinErrorMsg.textContent = "";


    // input field value
    const payBillSelect = document.getElementById('pay-bill-select').value;
    const billerAccountNumber = document.getElementById('biller-account-number').value;
    const payAmount = document.getElementById("pay-amount").value;
    const pinValue = document.getElementById('pay-bill-pin').value;
    let availableBalance = parseInt(document.getElementById('balance').innerText);

    // Pay Bill Type selection check
    if(payBillSelect === 'Select Bill Type'){
        payBillSelectErrorMsg.textContent = "Please Select a Bill Type";
        return;
    }

    // Biller Account Number validity check
    if(billerAccountNumber.length === 0){
        billerAccountNumberErrorMsg.innerText = "Please Provide a Valid Account Number"
        return;
    }
    for(Character of billerAccountNumber){
        if(isNaN(Character) || Character === ' '){
            billerAccountNumberErrorMsg.textContent = "× Invalid Account Number";
            return;
        }
    }

    // pay Amount validity check
    if(payAmount > availableBalance){
        payAmountErrorMsg.textContent = "Unavailable Balance";
        return;     
    }
    if(payAmount === ''){
        payAmountErrorMsg.textContent = "Please Enter Valid Amount";
        return;
    }
    for(char of payAmount){
        if(isNaN(char) || char === ' '){
            payAmountErrorMsg.textContent = "× Invalid Amount";
            return;
        }
    }

    //pay Amount string to integer convert
    const correctAmount = parseInt(payAmount)
    
    // pin validity check
    if(pinValue.length === 0){
        payBillPinErrorMsg.textContent = "Enter 4 Digit Pin";
        return;
    }
    if (pinValue !== pin) {
      payBillPinErrorMsg.textContent = "× Wrong Pin";
      return;
    } 

    // pay balance
    const newBalance = availableBalance - correctAmount;
    document.getElementById('balance').innerText = newBalance;
})
