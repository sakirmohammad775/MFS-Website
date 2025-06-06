document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault()// Prevent the default action of the button
        console.log('login started')

        const phoneNumber = document.getElementById('phone-number').value
        console.log(phoneNumber)

        const pinNumber = document.getElementById('pin-number').value
        console.log(pinNumber)

        if (phoneNumber == '0' && pinNumber == '1234') {
            console.log('login successful')
            window.location.href = "/Home.html";
        }
        else {
            console.log('login failed')
        }
    }) 