// Mobile nav visibility toggle

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
let navToggle = false;

const openNav = function () {
  navToggle = true;
  mobileNav.classList.add("open");
  hamburger.classList.add("open");
  nav2.classList.add("nav-open");
};

const closeNav = function () {
  navToggle = false;
  mobileNav.classList.remove("open");
  hamburger.classList.remove("open");
  nav2.classList.remove("nav-open");
};

hamburger.addEventListener("click", () => {
  !navToggle ? openNav() : closeNav();
});

const links = document.querySelectorAll(".mobile-nav-list a");

// Close nav when one of the links are clicked

links.forEach((l) => {
  l.addEventListener("click", () => closeNav());
});

// Close mobile menu if window resized > 800px

onresize = (event) => {
  let w = window.innerWidth;

  if (w > 800 && navToggle === true) {
    closeNav();
  }
};

// Light & dark mode toggle

const moonPath =
  "M7.21127 12C7.21127 21.1636 16 23.4843 16 23.4843C14.8591 23.8197 13.6485 24 12.3944 24C5.54915 24 0 18.6274 0 12C0 5.37258 5.54915 0 12.3944 0C13.6485 0 14.8591 0.180332 16 0.515673C16 0.515673 7.21127 2.83636 7.21127 12Z";
const sunPath =
  "M24.2799 11.9968C24.2799 17.5883 20.4556 22.2866 15.2799 23.6187C14.3211 23.8655 13.3158 23.9968 12.2799 23.9968C5.65251 23.9968 0.279922 18.6242 0.279922 11.9968C0.279922 5.36938 5.65251 -0.00320435 12.2799 -0.00320435C13.3158 -0.00320435 14.3211 0.128055 15.2799 0.374848C20.4556 1.70698 24.2799 6.40528 24.2799 11.9968Z";
const mode = document.getElementById("modeBtn");
const modeMobile = document.getElementById("light-mode-mobile");
const root = document.documentElement;
let modeToggle = false;

const toggleDarkMode = function () {
  const modeTimeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  modeTimeline
    .add({
      targets: ".sun",
      d: [{ value: modeToggle ? sunPath : moonPath }],
      fill: modeToggle ? "#e3da4e" : "#debd00",
    })
    .add(
      {
        targets: "#mode",
        rotate: modeToggle ? 0 : 320,
      },
      "-= 350"
    );

  if (!modeToggle) {
    modeToggle = true;
    root.classList.add("light-mode");
    modeMobile.innerHTML = "Dark mode";
  } else {
    modeToggle = false;
    root.classList.remove("light-mode");
    modeMobile.innerHTML = "Light mode";
  }
};

mode.addEventListener("click", toggleDarkMode);
modeMobile.addEventListener("click", toggleDarkMode);

// Hero parallax scroll effect

const bg = document.getElementById("background");
const louis = document.getElementById("louis");
const bgg = document.getElementById("bg-g");
const ship = document.getElementById("space-ship");
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let w = window.innerWidth;

if (!mediaQuery || mediaQuery.matches) {
  bg.style.top = 0;
  louis.style.top = 0;
  bgg.style.top = 0;
  ship.style.top = 0;
} else if (w < 600) {
  bg.classList.add("fixed");
  bgg.classList.add("fixed");
} else {
  window.addEventListener("scroll", function () {
    const value = this.window.scrollY;

    bg.style.top = value * 1.04 + "px";
    louis.style.top = value * 0.75 + "px";
    bgg.style.top = value * 1 + "px";
    ship.style.top = value * 0.9 + "px";
  });
}

// change nav styling when at top of window

const nav2 = document.querySelector("header");
const hero = document.getElementById("hero");

const heroOptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const heroObserver = new IntersectionObserver(function (entries, heroObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav2.classList.add("scrolled");
    } else {
      nav2.classList.remove("scrolled");
    }
  });
}, heroOptions);

heroObserver.observe(hero);

// Copy email

const copyEmail = function () {
  navigator.clipboard.writeText("roemermann.steven@gmail.com");
  document.getElementById("copied").innerHTML = "Copied!";
};

// Add email address to page

document.getElementById("contact-email").innerHTML =
  "roemermann.steven@gmail.com";
