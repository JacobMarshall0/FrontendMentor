const tipButtons = Array.from(document.getElementsByClassName("tip-button"));
const resetButton = document.querySelector("#reset")
const customInput = document.querySelector(".custom-tip");
const displayTipPP = document.querySelector("#tip-pp");
const displayTotalPP = document.querySelector("#total-pp");
const formBill = document.querySelector("#bill");
const formPeople = document.querySelector("#people");

let chosen_tip;


function clearSelected() {
    tipButtons.forEach(element => {
        element.classList.remove("selected-button");
        customInput.classList.remove("selected-button");
        // Need to clear the value of customTip
        chosen_tip = null;
    })
}

function assignSelected(element) {
    element.classList.add("selected-button");
}

function calcResults(bill, tip, num_people) {
    let tip_amount = (bill * (1 + tip)) - bill;

    let tip_amount_pp = (tip_amount / num_people).toFixed(2);
    let total_pp = ((parseFloat(bill) + parseFloat(tip_amount)) / num_people).toFixed(2);

    return {"tip_pp": tip_amount_pp, "total_pp": total_pp};
}

function validateForm(){
    if ((chosen_tip != null) && (formBill.value > 0) && (formPeople.value > 0)){
        console.log("TRUE")
        return true
    } else {
        console.log("FALSE")
        return false
    }
}

// Need to figure out why this goes NaN
function updateDisplay(){
    if (validateForm()){
        money_data = calcResults(formBill.value, chosen_tip, formPeople.value)
        console.log(money_data['tip_pp'])
        console.log(money_data['total_pp'])
        displayTipPP.textContent = money_data['tip_pp']
        displayTotalPP.textContent = money_data['total_pp']
    }
}

function resetDisplay(){
    displayTipPP.textContent = "0.00";
    displayTotalPP.textContent = "0.00";
}


tipButtons.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element.value);
        clearSelected();
        assignSelected(element);
        chosen_tip = parseFloat(element.value) 
        updateDisplay();
    })
});

// Need to reset the chosen_tip and selected class when value becomes empty
// Also need to add % after text
customInput.addEventListener("input", () => {
    clearSelected()
    customInput.classList.add("selected-button")
    chosen_tip = parseFloat(customInput.value / 100)
    updateDisplay();
})

// Need to add regex to force format of ddd or ddd.dd
formBill.addEventListener("input", () => {
    updateDisplay()
})

formPeople.addEventListener("input", () => {
    updateDisplay();
})

// Needs to clear the custom input field
resetButton.addEventListener("click", () => {
    formBill.value = "";
    formPeople.value = "";
    resetDisplay();
    clearSelected();
})