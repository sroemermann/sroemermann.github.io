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


// Light mode toggle

const mode = document.getElementById("mode");
const modeMobile = document.getElementById("light-mode-mobile");
const root = document.documentElement;

mode.addEventListener("click", () => {
    root.classList.toggle("light-mode");
    if (mode.innerHTML === "Light") {
        mode.innerHTML = "Dark";
        modeMobile.innerHTML = "Dark mode";
    } else {
        mode.innerHTML = "Light";
        modeMobile.innerHTML = "Light mode";
    }
    
});

modeMobile.addEventListener("click", () => {
    root.classList.toggle("light-mode");
    if (modeMobile.innerHTML === "Light mode") {
        modeMobile.innerHTML = "Dark mode";
        mode.innerHTML = "Dark";
    } else {
        modeMobile.innerHTML = "Light mode";
        mode.innerHTML = "Light";
    }
});