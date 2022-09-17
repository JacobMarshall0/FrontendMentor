const dropdownParents = document.querySelectorAll("#parent");
const dropdowns = document.querySelectorAll(".dropdown");
const desktopNavbar = document.querySelector(".desktop-nav");

const menuButtonOpen = document.querySelector("#menu-button");
const menuButtonClose = document.querySelector("#menu-button-close");
const mobileMenu = document.querySelector(".mobile-menu");

// Showing the dropdown
dropdownParents.forEach(function(element){
    element.addEventListener("mouseover", () => {
        // Goofy method of getting index, hashmap of dropdownParent : dropdown would work better
        dropdown = dropdowns[Array.prototype.indexOf.call(dropdownParents, element)]
        dropdown.classList.remove("hidden")
    })

    element.addEventListener("touchstart", ()=> {
        dropdown = dropdowns[Array.prototype.indexOf.call(dropdownParents, element)]
        dropdown.classList.toggle("hidden")

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

menuButtonOpen.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
})

menuButtonClose.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
})