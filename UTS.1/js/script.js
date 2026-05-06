console.log("Website Pemerintah Aktif");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active");
});