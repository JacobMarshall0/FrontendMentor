const tipButtons = Array.from(document.getElementsByClassName("tip-button"));
const resetButton = document.querySelector("#reset");
const customInput = document.querySelector(".custom-tip");
const displayTipPP = document.querySelector("#tip-pp");
const displayTotalPP = document.querySelector("#total-pp");
const formBill = document.querySelector("#bill");
const formBillError = document.querySelector("#bill-error");
const formPeople = document.querySelector("#people");
const formPeopleError = document.querySelector("#people-error");

let errorTextArray = [formBillError, formPeopleError];
let errorElementsArray = [formBill, formPeople, customInput];

let chosen_tip;

// Remove the selected class from the elements, and reset chosen tip value
function clearSelected() {
    tipButtons.forEach(element => {
        element.classList.remove("selected-button");
        customInput.classList.remove("selected-button");
        chosen_tip = null;
    })
}

// give an element the selected class
function assignSelected(element) {
    element.classList.add("selected-button");
}

// Calculate the tip results and return it as an object
function calcResults(bill, tip, num_people) {
    let tip_amount = (bill * (1 + tip)) - bill;

    let tip_amount_pp = (tip_amount / num_people).toFixed(2);
    let total_pp = ((parseFloat(bill) + parseFloat(tip_amount)) / num_people).toFixed(2);

    return {"tip_pp": tip_amount_pp, "total_pp": total_pp};
}

// check if all requirements for calculating results are entered
function validateForm(){
    if ((chosen_tip != null) && (formBill.value > 0) && (formPeople.value > 0)){
        return true
    } else {
        return false
    }
}

// Calculates the results and displays them if all requirements are met
function updateDisplay(){
    if (validateForm()){
        money_data = calcResults(formBill.value, chosen_tip, formPeople.value)
        displayTipPP.textContent = money_data['tip_pp']
        displayTotalPP.textContent = money_data['total_pp']
    }
}

// Resets the display values
function resetDisplay(){
    displayTipPP.textContent = "0.00";
    displayTotalPP.textContent = "0.00";
}

// Resets the form values
function restForm(){
    formBill.value = "";
    formPeople.value = "";
    customInput.value = "";
}

// Clears the error class from all elements and deletes error text
function resetErrors(){
    errorTextArray.forEach(element => {
        element.textContent = "";
    });
    errorElementsArray.forEach(element => {
        element.classList.remove("error")
    })
}

// Assigns event handlers for all tip buttons
tipButtons.forEach(element => {
    element.addEventListener("click", () => {
        if (!element.classList.contains("selected-button")) {
            clearSelected();
            assignSelected(element);
            chosen_tip = parseFloat(element.value);
            updateDisplay();
        } else {
            element.classList.remove("selected-button");
            chosen_tip = null;
        }
        
    })
});


// for some reason when using the arrow buttons to increment the value, it is one click behind
const customRegex = /^\d*$/
customInput.addEventListener("input", () => {
    if (!(customRegex.test(customInput.value))) { 
        customInput.classList.add("error")
    } else if (customInput.value == "") {
        customInput.classList.remove("selected-button");
        chosen_tip = null;
    } else {
        customInput.classList.remove("error")
        updateDisplay();
        clearSelected()
        customInput.classList.add("selected-button")
        chosen_tip = parseFloat(customInput.value / 100)
    }

    if (customInput.value < 0) {
        customInput.value = 0;
        customInput.classList.remove("error");
    }
    
    
})

// click handler for when a user enters a value, clicks a different button, and comes back to custom
customInput.addEventListener("click", () => {
    if (customInput.value != "") {
        clearSelected()
        customInput.classList.add("selected-button");
        chosen_tip = parseFloat(customInput.value / 100)
    }  
})

const formRegex = /^\d+(\.|\,)\d{2}$/
const formRegex2 = /^\d*$/
formBill.addEventListener("input", () => {
    if (formRegex.test(formBill.value) || (formRegex2.test(formBill.value))) {
        updateDisplay()
        formBillError.textContent = ""
        formBill.classList.remove("error")

    } else {
        formBillError.textContent = "Wrong format"
        formBill.classList.add("error")
    }
    if (formBill.value == "") { 
        resetDisplay() 
        formBill.classList.remove("error")
    }
})

formPeople.addEventListener("input", () => {
    updateDisplay();
    if ((formPeople.value == "") || (formPeople.value <= 0)) { 
        resetDisplay();
        formPeopleError.textContent = "Can't be 0";
        formPeople.value = "0";
        formPeople.classList.add("error");
    } else {
        formPeopleError.textContent = "";
        formPeople.classList.remove("error");
    }
})

resetButton.addEventListener("click", () => {
    resetForm();
    resetDisplay();
    resetErrors();
    clearSelected();
})