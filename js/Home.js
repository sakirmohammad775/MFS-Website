//step 1 :add an event handler to the button
document.getElementById('btn-add-money')
    .addEventListener('click', function (e) {
        e.preventDefault() // prevent default form submission behavior
        // step 2 : get the amount from the input field
        const addMoneyInput = document.getElementById('input-add-money').value;
        // step 3: get the pin number provided
        const pinNumber = document.getElementById('input-pin-number').value;

        if (pinNumber === '1234') {  // check if the pin number is correct
            // step-4 :get the current balance
            const currentBalance = document.getElementById('account-balance').innerText;
            console.log(currentBalance)

            // step 5 : add the amount to the current balance
            const newBalance = parseInt(currentBalance) + parseInt(addMoneyInput);
        
            // step 6 : update the balance
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Incorrect PIN');
        }
        
        

    })