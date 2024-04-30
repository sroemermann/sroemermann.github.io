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


// Close mobile menu if window resized

const width = window.innerWidth;



// Light mode toggle

// mode.addEventListener("click", () => {
//     root.classList.toggle("light-mode");
    // if (mode.innerHTML === "Light") {
    //     mode.innerHTML = "Dark";
    //     modeMobile.innerHTML = "Dark mode";
    // } else {
    //     mode.innerHTML = "Light";
    //     modeMobile.innerHTML = "Light mode";
    // }
// });


// Light / dark mode switcher svg icon

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
        fill: modeToggle ? "#e8fa46" : "#000000"
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
    if (modeMobile.innerHTML === "Light mode") {
        root.classList.add("light-mode");
        modeMobile.innerHTML = "Dark mode";
        modeToggle = true;
    } else {
        modeMobile.innerHTML = "Light mode";
        root.classList.remove("light-mode");
        modeToggle = false;
    }
});



// hero parallax scroll effect

// if width > 600, add fixed class and remove parallax class. else, reverse.

const bg = document.getElementById("background");
const louis = document.getElementById("louis");
const bgg = document.getElementById("bg-g");

window.addEventListener("scroll", function() {
    const value = this.window.scrollY;
    
        bg.style.top = value * 1.05 + "px";
        louis.style.top = value * 0.75 + "px";
        bgg.style.top = value * 1 + "px";  
}
    
)


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

