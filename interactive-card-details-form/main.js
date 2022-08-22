// Can probably refactor most of this into individual functions

const cardNumberDisplay = document.querySelector(".card-number");
const cardNumberInput = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#form-cardnumber-error");

cardNumberInput.addEventListener("input", () => {
    // Stop user from entering spaces
    cardNumberInput.value = cardNumberInput.value.replace(/\s/g, "")
    // Check input 
    let cardNumberRegEx = /^[0-9]*$/;
    let regExResult = cardNumberRegEx.test(cardNumberInput.value);

    // Handle validation
    if (regExResult) {
        // Add the spaces between the 4 digits on the card
        let cleanedCardNumber = [...cardNumberInput.value].map((digits, index) => index % 4 == 0 ? " " + digits : digits).join("")
        cardNumberDisplay.innerText = cleanedCardNumber;
        cardNumberError.innerText = ""; // remove the error message
    } else {
        cardNumberError.innerText = "Wrong format, numbers only";
    }

    // Reset to default
    if (cardNumberInput.value == "") { 
        cardNumberDisplay.innerText = "0000 0000 0000 0000";
        cardNumberError.innerText = "";
    }
});

const cardholderDisplay = document.querySelector(".card-cardholder");
const cardholderInput = document.querySelector("#cardholder");
const cardholderError = document.querySelector("#form-cardholder-error");

cardholderInput.addEventListener("input", () => {
    let cardholderRegEx = /^[A-z ]*$/;
    let regExResult = cardholderRegEx.test(cardholderInput.value);

    if (regExResult) {
        cardholderDisplay.innerText = cardholderInput.value;
        cardholderError.innerText = "";
    } else {
        cardholderError.innerText = "Alphabetical Letters only";
    }

    if (cardholderInput.value == "") {
        cardholderDisplay.innerText = "Jane Appleseed";
        cardholderError.innerText = "";
    }
});

const cardExpiryMonthDisplay = document.querySelector(".card-month");
const cardExpiryMonthInput = document.querySelector("#cardExpiryMonth");
const cardExpiryMonthError = document.querySelector("#monthError");

cardExpiryMonthInput.addEventListener("input", () => {
    let expiryMonthRegEx = /^(0[1-9]|1[012])$/
    let expiryMonthRegExResult = expiryMonthRegEx.test(cardExpiryMonthInput.value);

    if (expiryMonthRegExResult) {
        cardExpiryMonthDisplay.innerText = cardExpiryMonthInput.value;
        cardExpiryMonthError.innerText = "";
    } else {
        if (cardExpiryMonthInput.value.length == 1) {
            cardExpiryMonthError.innerText = "Incorrect format (MM)";
        } else {
            cardExpiryMonthError.innerText = "Invalid Month";
        }        
    }
    if (cardExpiryMonthInput.value == "") {
        cardExpiryMonthDisplay.innerText = "00";
        cardExpiryMonthError.innerText = ""; 
        }

})

const cardExpiryYearDisplay = document.querySelector(".card-year");
const cardExpiryYearInput = document.querySelector("#cardExpiryYear");
const cardExpiryYearError = document.querySelector("#yearError");

cardExpiryYearInput.addEventListener("input", () => {
    let expiryYearRegEx = /^(2[2-9]|[3-4][0-9])$/
    let expiryYearRegExResult = expiryYearRegEx.test(cardExpiryYearInput.value);

    if (expiryYearRegExResult) {
        cardExpiryYearDisplay.innerText = cardExpiryYearInput.value;
        cardExpiryYearError.innerText = "";

    } else {
        if (cardExpiryYearInput.value.length == 1) {
            cardExpiryYearError.innerText = "Incorrect format (YY)";
        } else {
            cardExpiryYearError.innerText = "Invalid Year";
        } 
    }

    if (cardExpiryYearInput.value == "") { 
        cardExpiryYearDisplay.innerText = "00";
        cardExpiryYearError.innerText = ""; 
    }
})

const cardSecurityNumDisplay = document.querySelector(".card-security-num");
const cardSecurityNumInput = document.querySelector("#cardSecurityNum");
const cardSecurityNumError = document.querySelector("#securityNumError");

cardSecurityNumInput.addEventListener("input", () => {
    let cardSecurityNumRegEx = /^([0-9]{3,4})$/
    let cardSecurityNumRegExResult = cardSecurityNumRegEx.test(cardSecurityNumInput.value);

    if (cardSecurityNumRegExResult) {
        cardSecurityNumDisplay.innerText = cardSecurityNumInput.value;
        cardSecurityNumError.innerText = "";

    } else {
        if (cardSecurityNumInput.value.length < 3) {
            cardSecurityNumError.innerText = "Invalid";
        } 
    }

    if (cardSecurityNumInput.value == "") { 
        cardSecurityNumDisplay.innerText = "000";
        cardSecurityNumError.innerText = ""; 
    }
})


// Submitting the form
const submitButton = document.querySelector(".form-submit");
const detailsSection = document.querySelector(".details-section");
const thanksSection = document.querySelector(".thanks");
const submitError = document.querySelector(".submit-error");

function validateDetails(string, regex) {
    return regex.test(string)
}

submitButton.addEventListener("click", event => {
    event.preventDefault();

    cardholderVerification = validateDetails(cardholderInput.value, /^[A-z ]*$/);
    cardNumberVerification = validateDetails(cardNumberInput.value, /^[0-9 ]{16}$/);
    cardMonthVerification = validateDetails(cardExpiryMonthInput.value, /^(0[1-9]|1[012])$/);
    cardYearVerification = validateDetails(cardExpiryYearInput.value, /^(2[2-9]|[3-4][0-9])$/);
    cardSecNumVerification = validateDetails(cardSecurityNumInput.value, /^([0-9]{3,4})$/);

    // there must be a better way
    if (cardholderVerification && cardNumberVerification && cardMonthVerification && cardYearVerification && cardSecNumVerification) {
        detailsSection.classList.add("hidden")
        thanksSection.classList.remove("hidden")
        
    } else { 
        submitError.innerText = "Invalid information, unable to submit";
    }
})