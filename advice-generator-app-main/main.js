let adviceID;
let adviceText;

const adviceDisplayHeader = document.querySelector("#advice-head");
const adviceDisplayText = document.querySelector("#advice-text");

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => {
        return res.json();
    })
    .then(res => {
        adviceID = res["slip"]["id"];
        adviceText = res["slip"]["advice"];

        adviceDisplayHeader.textContent = `Advice #${adviceID}`
        adviceDisplayText.textContent = `"${adviceText}"`
    })
}
getAdvice();