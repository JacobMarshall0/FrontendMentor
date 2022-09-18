const dropdownParents = document.querySelectorAll("#parent");
const dropdowns = document.querySelectorAll(".dropdown");
const desktopNavbar = document.querySelector(".desktop-nav");

const dropdownIconsOpen = document.querySelectorAll(".dropdown-image-up");
const dropdownIconsClose = document.querySelectorAll(".dropdown-image-down");

const menuButtonOpen = document.querySelector("#menu-button");
const menuButtonClose = document.querySelector("#menu-button-close");
const mobileMenu = document.querySelector(".mobile-menu");

function changeIcon(index){
    if (dropdownIconsClose[index].classList.contains("hidden")){
        dropdownIconsClose[index].classList.remove("hidden")
        dropdownIconsOpen[index].classList.add("hidden")
    } else {
        dropdownIconsClose[index].classList.add("hidden")
        dropdownIconsOpen[index].classList.remove("hidden")
    }
}

// Showing the dropdown
dropdownParents.forEach(function(element){
    if (!element.classList.contains("mobile")){
        element.addEventListener("mouseover", () => {
            // Goofy method of getting index, hashmap of dropdownParent : dropdown would work better
            index = Array.prototype.indexOf.call(dropdownParents, element)
            dropdown = dropdowns[index]
            dropdown.classList.remove("hidden")

        })
    } else {
        element.addEventListener("touchstart", ()=> {
            index = Array.prototype.indexOf.call(dropdownParents, element)
            dropdown = dropdowns[index]
            dropdown.classList.toggle("hidden")
            changeIcon(index)
        })
    }    
})

// Removing the dropdown on mouseout
dropdowns.forEach(function(element){
    element.addEventListener("mouseout", ()=> {    
        if (!element.classList.contains("mobile")){
            element.classList.add("hidden")
        } 
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


