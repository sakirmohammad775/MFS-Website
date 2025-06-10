document.getElementById('btn-show-cash-out')
    .addEventListener('click', function () {

        //show cash out button
        document.getElementById('cash-out-form').classList.remove('hidden')
        // hide cash out button
        document.getElementById('add-money-form').classList.add('hidden')
    })

// show add money button
document.getElementById('btn-show-add-money')
    .addEventListener('click', function () {
        // show add money button
        document.getElementById('add-money-form').classList.remove('hidden')
        // hide cash out button
        document.getElementById('cash-out-form').classList.add('hidden')
    })