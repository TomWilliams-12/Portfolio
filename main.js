const button = document.querySelector(".toggle");
const menuItems = document.querySelectorAll(".menu-item");
const mobileMenu = document.querySelector(".menu");


function classToggle() {
    menuItems.forEach(item => item.classList.toggle('active'));
    mobileMenu.classList.toggle('active');
}

button.addEventListener("click", classToggle);