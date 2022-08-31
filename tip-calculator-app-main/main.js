const tipButtons = Array.from(document.getElementsByClassName("tip-button"));
const customInput = document.querySelector(".custom-tip");
const displayTipPP = document.querySelector("#tip-pp");
const displayTotalPP = document.querySelector("#total-pp");
const formBill = document.querySelector("#bill");
const formPeople = document.querySelector("#people");

let chosen_tip;

function clearSelected() {
    tipButtons.forEach(element => {
        element.classList.remove("selected-button");
        chosen_tip = null;
    // Need to clear the custom form
    })
}

function assignSelected(element) {
    element.classList.add("selected-button");
}

function calcResults(bill, tip, num_people) {
    let tip_amount = (bill * (1 + tip)) - bill;

    let tip_amount_pp = tip_amount / num_people;
    let total_pp = (bill + tip_amount) / num_people;

    return {"tip_pp": tip_amount_pp, "total_pp": total_pp};
}

tipButtons.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element.value);
        clearSelected();
        assignSelected(element);
        chosen_tip = parseFloat(element.value)
    })
});

customInput.addEventListener("input", () => {
    clearSelected()
    customInput.classList.add("selected-button")
})

formBill.addEventListener("input", () => {
    
})

formPeople.addEventListener("input", () => {
    
})