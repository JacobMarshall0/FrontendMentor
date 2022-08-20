const cardNumberDisplay = document.querySelector(".card-number");
const cardNumberInput = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#form-cardnumber-error");

cardNumberInput.addEventListener("input", () => {
    let cardNumberRegEx = /^[0-9]*$/;
    let regExResult = cardNumberRegEx.test(cardNumberInput.value);

    if (regExResult == false) {
        cardNumberError.innerText = "Wrong format, numbers only";
    } else {
        let cleanedCardNumber = cardNumberInput.value;
        // Split into 4 parts with spaces

        cardNumberDisplay.innerText = cleanedCardNumber;
    }

    if (cardNumberInput.value == "") { cardNumberDisplay.innerText = "0000 0000 0000 0000"; }
});

const cardholderDisplay = document.querySelector(".card-cardholder");
const cardholderInput = document.querySelector("#cardholder");
const cardholderError = document.querySelector("#form-cardholder-error");

cardholderInput.addEventListener("input", () => {
    let cardholderRegEx = /^[A-z]*$/;
    let regExResult = cardholderRegEx.test(cardholderInput.value);

    if (regExResult == false) {
        cardholderError.innerHTML = "Letters only"
    } else {
        
    }
});