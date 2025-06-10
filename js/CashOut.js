document.getElementById('btn-cashout-money')
.addEventListener('click', function(e) {
    e.preventDefault()
    // step1: get the amount of money
    const cashOutBalance= document.getElementById('cash-out-balance').value;
    const cashOut=parseFloat(cashOutBalance)

    const pinNumber = document.getElementById('input-cash-out-pin').value;
    if(pinNumber==='1234'){// step 2: pin check
           // step-4 :get the current balance
            const currentBalance = document.getElementById('account-balance').innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            // step-5: check if the cash out amount is less than the current balance
            if(cashOut <= currentBalanceNumber){
                // step-6: update the current balance
                const newBalance = currentBalanceNumber - cashOut;
                document.getElementById('account-balance').innerText = newBalance;

            }
            else{
                alert('Insufficient funds');
            }

    }
    else{
        alert('Invalid PIN');
    }

})