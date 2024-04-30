// Mobile nav visibility toggle

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    hamburger.classList.toggle("open");
});

const links = document.querySelectorAll(".mobile-nav-list a");

links.forEach(l => {
    l.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
        hamburger.classList.toggle("open");
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

// if width > 600, add fixed class and remove parallax class. else, reverse.

// const width = window.innerWidth;
// const bg = document.getElementById("background");
// const louis = document.getElementById("louis");
// const bgg = document.getElementById("bg-g");

// window.addEventListener("scroll", function() {
//     const value = this.window.scrollY;
            
//     bg.style.top = value * 1.1 + "px";
//     louis.style.top = value * 0.75 + "px";
//     bgg.style.top = value * 1 + "px";  
//     }
    
// )


// change nav styling when at top of window 

const nav2 = document.querySelector("header");
const hero = document.getElementById("hero");

const heroOptions = {
    rootMargin: "-50px 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(function(entries, heroObserver) {entries.forEach(entry => { if(!entry.isIntersecting) {
    nav2.classList.add("scrolled");
} else {
    nav2.classList.remove("scrolled");
}
})}, heroOptions);

heroObserver.observe(hero);


// scroll ease

// const easeSpeed = 0.1;
// let moveDistance = 0,
//   curScroll = 0;

// document.addEventListener("scroll", () => {
//   moveDistance = window.scrollY
// })

// const ghostEle = document.createElement("section");
// ghostEle.style.height = document.querySelector("body").scrollHeight + "px";
// document.querySelector("body").after(ghostEle);

// function animate() {
//   requestAnimationFrame(animate);

//   curScroll = curScroll + (easeSpeed * (moveDistance - curScroll));
//   if (curScroll < 0.001) curScroll = 0;
//   document.querySelector("body").style.transform = `translateY(${curScroll * -1}px)`
// }
// animate();