const button = document.querySelector(".toggle");
const menuItems = document.querySelectorAll(".menu-item");


function classToggle() {
    menuItems.forEach(item => item.classList.toggle('active'));
}

button.addEventListener("click", classToggle);