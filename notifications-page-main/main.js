const notificationCount = document.querySelector("#notifications-count");
let unreadNotifications = document.querySelectorAll(".unread");
const button = document.querySelector("button")

function updateNotifications() {
    // Get num of notifications with unread class
    num_notifs = document.querySelectorAll(".unread").length;
    if (num_notifs > 0) {
        // Show if there are more than zero and update the count
        notificationCount.classList.remove("hidden");
        notificationCount.textContent = num_notifs;
    } else {
        // Hide the notifications count - as no need to show "0"
        notificationCount.classList.add("hidden")
    }
}

function markAllAsRead() {
    unreadNotifications = document.querySelectorAll(".unread");
    unreadNotifications.forEach(element => {
        element.classList.remove("unread")
        element.querySelector(".text-area").querySelector("p").querySelector(".unread-icon").classList.add("hidden")
    })
    updateNotifications();
}

button.addEventListener("click", markAllAsRead);

// Handle clicking for notifications
unreadNotifications.forEach(element => {
    element.addEventListener("click", () => {
        // Mark display as read
        element.classList.remove("unread");

        element.querySelector(".text-area").querySelector("p").querySelector(".unread-icon").classList.add("hidden")

        // Update notification count
        updateNotifications();
    })
});


updateNotifications()