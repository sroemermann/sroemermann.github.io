// Mobile nav visibility toggle

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
let navToggle = false;

hamburger.addEventListener("click", () => {
    if (navToggle === false) {
        mobileNav.classList.add("open");
        hamburger.classList.add("open");
        navToggle = true;
    } else {
        mobileNav.classList.remove("open");
        hamburger.classList.remove("open");
        navToggle = false;
    }
    
});

const links = document.querySelectorAll(".mobile-nav-list a");

links.forEach(l => {
    l.addEventListener("click", () => {
        if (navToggle === true) {
            mobileNav.classList.remove("open");
            hamburger.classList.remove("open");
            navToggle = false;
        } else {
            mobileNav.classList.add("open");
            hamburger.classList.add("open");
            navToggle = true;
        }
});
});


// Close mobile menu if window resized > 800px

onresize = (event) => {
    let w = window.innerWidth;
    if (w > 800) {
        if (navToggle === true) {
            mobileNav.classList.remove("open");
            hamburger.classList.remove("open");
            navToggle = false;
        } 
    }
};


// Light & dark mode toggle

const moonPath = "M7.21127 12C7.21127 21.1636 16 23.4843 16 23.4843C14.8591 23.8197 13.6485 24 12.3944 24C5.54915 24 0 18.6274 0 12C0 5.37258 5.54915 0 12.3944 0C13.6485 0 14.8591 0.180332 16 0.515673C16 0.515673 7.21127 2.83636 7.21127 12Z";
const sunPath = "M24.2799 11.9968C24.2799 17.5883 20.4556 22.2866 15.2799 23.6187C14.3211 23.8655 13.3158 23.9968 12.2799 23.9968C5.65251 23.9968 0.279922 18.6242 0.279922 11.9968C0.279922 5.36938 5.65251 -0.00320435 12.2799 -0.00320435C13.3158 -0.00320435 14.3211 0.128055 15.2799 0.374848C20.4556 1.70698 24.2799 6.40528 24.2799 11.9968Z";
const mode = document.getElementById("mode");
const modeMobile = document.getElementById("light-mode-mobile");
const root = document.documentElement;
let modeToggle = false;

mode.addEventListener("click", () => {
    const modeTimeline = anime.timeline({
        duration : 750,
        easing: "easeOutExpo"
    });
    modeTimeline.add({
        targets: ".sun",
        d: [
            {value: modeToggle ? sunPath : moonPath}
        ],
        fill: modeToggle ? "#e5ff66" : "#debd00"
    })
    .add({
        targets: "#mode",
        rotate: modeToggle ? 0 : 320
    }, 
    "-= 350"
    )

    if(!modeToggle) {
        modeToggle = true;
        root.classList.add("light-mode");
        modeMobile.innerHTML = "Dark mode";
    } else {
        modeToggle = false;
        root.classList.remove("light-mode");
        modeMobile.innerHTML = "Light mode";
    }
});

modeMobile.addEventListener("click", () => {
    if(!modeToggle) {
        modeToggle = true;
        root.classList.add("light-mode");
        modeMobile.innerHTML = "Dark mode";
    } else {
        modeToggle = false;
        root.classList.remove("light-mode");
        modeMobile.innerHTML = "Light mode";
    }
});


// hero parallax scroll effect

const bg = document.getElementById("background");
const louis = document.getElementById("louis");
const bgg = document.getElementById("bg-g");

window.addEventListener("scroll", function() {
    const value = this.window.scrollY;
    let w = window.innerWidth;

    if (w > 800) {
        bg.style.top = value * 1.05 + "px";
        louis.style.top = value * 0.75 + "px";
        bgg.style.top = value * 1 + "px";  
    } else {
        bg.style.top = 0;
        louis.style.top = 0;
        bgg.style.top = 0;  
    }
})


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
// ghostEle.style.height = document.querySelector(".main").scrollHeight + "px";
// document.querySelector(".main").after(ghostEle);

// function animate() {
//   requestAnimationFrame(animate);

//   curScroll = curScroll + (easeSpeed * (moveDistance - curScroll));
//   if (curScroll < 0.001) curScroll = 0;
//   document.querySelector(".main").style.transform = `translateY(${curScroll * -1}px)`
// }
// animate();

