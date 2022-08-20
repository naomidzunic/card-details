



// Cardholder Name
document.querySelector('.cardholder-name-input').oninput = () =>{
    document.querySelector('.card-name').innerText = document.querySelector('.cardholder-name-input').value;
}


// Credit Card Number

document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.front-number').innerText = document.querySelector('.card-number-input').value;
}

var cardNumber = new Cleave('.card-number-input', {
    creditCard: true,
    delimiter: " ",
    onCreditCardTypeChanged: function (type) {
        const cardLogo = document.getElementsByClassName('front-logo'),
        visa = 'fa-brands fa-cc-visa';


        switch (type) {
            case "visa":
                cardLogo.setAttribute("class", visa);
                break;
        
            default: 
            cardLogo.setAttribute("class", ' ');
            break;
        }
    }
});

// Ensures no letters are added to the expiry date
const cleaveDate = new Cleave(".card-expiry", {
    date: true, 
    datePattern: ['m', 'y']
})

// Ensures no letters are added to CVC


const cleaveCVC = new Cleave(".card-cvc", {
    datePattern: ['m', 'y']
})


// Expiration Month

document.querySelector('.exp-mm-input').oninput = () =>{
    document.querySelector('.month').innerText = document.querySelector('.exp-mm-input').value;
}

// Expiration Year

document.querySelector('.exp-yy-input').oninput = () =>{
    document.querySelector('.year').innerText = document.querySelector('.exp-yy-input').value;
}

//CVC

document.querySelector('.cvc-input').oninput = () =>{
    document.querySelector('.cvc-zero').innerText = document.querySelector('.cvc-input').value;
}


