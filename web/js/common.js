const toggleButton = document.querySelectorAll(".menu-toggle");
const closeButton = document.querySelector(".menu-close");
const menu = document.getElementById("menu");

toggleButton.forEach((button) => {
    button.addEventListener("click", () => {
        menu.classList.toggle("active");
        // Change icon
        if (menu.classList.contains("active")) {
            button.innerHTML = "&#9776;"; // ☰ (hamburger)
        } else {
            button.innerHTML = "&#9776;"; // ☰ (hamburger)
        }
    });
});

closeButton.addEventListener("click", () => {
    menu.classList.remove("active");
});