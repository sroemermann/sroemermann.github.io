// Mobile nav visibility toggle

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("mobile-nav");
// const navOpen = false;

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
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

// hero parallax scroll effect

const bg = document.getElementById("background");
const louis = document.getElementById("louis");
const bgg = document.getElementById("bg-g");
const ht = document.getElementById("hero-text");

window.addEventListener("scroll", function() {
    const value = this.window.scrollY;

    bg.style.top = value * 1.05 + "px";
    louis.style.top = value * 0.75 + "px";
    bgg.style.top = value * 1 + "px";
    ht.style.top = value * 0.5 + "px";
})

// nav hide and show on scroll

const nav2 = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav2.classList.add("nav-hide");
    } else {
        nav2.classList.remove("nav-hide");
    }
    lastScrollY = window.scrollY;
});

// change nav styling when at top of window 

const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
nav2.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    nav2.classList.toggle('nav-middle', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);



// window.onscroll = function () { 
//     if (document.body.scrollTop < 200 ) {
//         nav2.classList.add("nav-middle");
//         nav2.classList.remove("nav-top");
//         console.log("we're at the top");
//     } 
//     else {
//         nav2.classList.add("nav-top");
//         nav2.classList.remove("nav-middle");
//         console.log("no longer at the top");

//     }
// };




// scroll ease

// const easeSpeed = 0.1;
// let moveDistance = 0,
//   curScroll = 0;

// document.addEventListener("scroll", () => {
//   moveDistance = window.scrollY
// })

// const ghostEle = document.createElement("section");
// ghostEle.style.height = document.querySelector(".main").scrollHeight + "px";
// document.querySelector(".main").after(ghostEle);

// function animate() {
//   requestAnimationFrame(animate);

//   curScroll = curScroll + (easeSpeed * (moveDistance - curScroll));
//   if (curScroll < 0.001) curScroll = 0;
//   document.querySelector(".main").style.transform = `translateY(${curScroll * -1}px)`
// }
// animate();