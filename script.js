// Mobile nav visibility toggle

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mobile-nav");
const links = document.querySelectorAll("mobile-nav-list ul li");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});

links.forEach((link) => addEventListener("click", () => {
    nav.classList.toggle("open");
    console.log("clicked");
})
);