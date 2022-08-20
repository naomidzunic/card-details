



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
        const cardBrand = document.getElementsByClassName('front-logo'),
        visa = 'fab fa-cc-visa';


        switch (type) {
            case "visa":
                cardBrand.setAttribute("class", visa);
                break;
        
            default: 
            cardBrand.setAttribute("class", ' ');
            break;
        }
    }
});






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


