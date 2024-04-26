// Mobile nav visibility toggle

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

const links = document.querySelectorAll(".mobile-nav-list a");

links.forEach(l => {
    l.addEventListener("click", () => {
        nav.classList.toggle("open");
});
});

// Scroll ease