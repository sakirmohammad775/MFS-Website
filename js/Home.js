//step 1 :add an event handler to the button
document.getElementById('btn-add-money')
.addEventListener('click', function(e) {
    e.preventDefault() // prevent default form submission behavior
   // step 2 : get the amount from the input field
   const addMoneyInput = document.getElementById('input-add-money').value;
   // step 3: get the pin number provided
   const pinNumber = document.getElementById('input-pin-number').value;

})