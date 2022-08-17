const submitButton = document.getElementById("submit");
const ratingButtons = document.getElementsByClassName("rating-button");
const ratingCard = document.getElementById("rating");
const thanksCard = document.getElementById("thanks");
const ratingSpan = document.getElementById("chosen-rating");

var rating = null;

/* Select a rating */
submitButton.disabled = true
for (let i = 0; i < ratingButtons.length; i++){
    ratingButtons[i].onclick = () => {
        submitButton.disabled = false
        rating=ratingButtons[i].innerHTML
    }
}

/* Submit rating */
submitButton.onclick = () => {
    if (rating != null) {
        ratingCard.style.display = "none"
        thanksCard.style.display = "inline"
        ratingSpan.innerHTML = rating
    }
    // Could implement a warning if rating has not been selected and user tries clicking
}