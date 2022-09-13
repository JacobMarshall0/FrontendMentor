const dropdownParents = document.querySelectorAll("#parent")
const dropdowns = document.querySelectorAll(".dropdown")
const desktopNavbar = document.querySelector(".desktop-nav");


// Showing the dropdown
dropdownParents.forEach(function(element){
    element.addEventListener("mouseover", () => {
        // Goofy method of getting index, hashmap of dropdownParent : dropdown would work better
        dropdown = dropdowns[Array.prototype.indexOf.call(dropdownParents, element)]
        dropdown.classList.remove("hidden")
    })
})

// Removing the dropdown on mouseout
dropdowns.forEach(function(element){
    element.addEventListener("mouseout", ()=> {     
        element.classList.add("hidden")
    })
})

desktopNavbar.addEventListener("mouseout", () => {
    dropdowns.forEach(function(element){
        element.classList.add("hidden")
    })
})

/* 
value = 1
        setInterval(function (){
            if (value > 0){
                value -= .05
                element.setAttribute("style", `opacity: ${value}`)
                console.log(value)
            }
        }, 100)
*/

/* 
function fadeOut(element) {
    intervalID = setInterval(() => {
        let opacity = Number(window.getComputedStyle(element).getPropertyValue("opacity"))

        if (opacity > 0) {
            opacity -= 0.1
            element.style.opacity = opacity
        }
        else {
            clearInterval(intervalID)
        }
    }, 20);
}
*/