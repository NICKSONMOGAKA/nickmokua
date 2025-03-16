// ----------- NAVIGATION BAR FUNCTION -----------
// Toggles the "responsive" class to make the navigation menu mobile-friendly
function myMenuFunction() {
  const navMenu = document.getElementById("myNavMenu");
  if (!navMenu.classList.contains("responsive")) {
    navMenu.classList.add("responsive");
  } else {
    navMenu.classList.remove("responsive");
  }
}

// Optional: Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches('.nav-menu-btn') && !event.target.matches('.nav-link')) {
    Array.from(document.getElementsByClassName("dropdown")).forEach((dropdown) => {
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    });
  }
};

// -------------- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----------
function headerShadow() {
  const navHeader = document.getElementById("header");
  const scrollThreshold = 50;

  if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
window.addEventListener("scroll", headerShadow);

// -------- TYPING EFFECT ---------------
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typedtext", {
    strings: ["Software Engineer", "Full-Stack Developer", "Web Developer"],
    loop: true,
    typeSpeed: 50, // Normal typing speed
    backSpeed: 30, // Normal backspacing speed
    backDelay: 1000, // Delay before backspacing starts
    showCursor: true, // Show blinking cursor
  });
});

// -------- SCROLL REVEAL ANIMATION ---------------
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
});

// --- HOME ---
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 }); // Fixed typo: "socail_icons" -> "social_icons"
sr.reveal(".featured-image", { delay: 300 });

// --- PROJECT BOX ---
sr.reveal(".project-box", { interval: 200 });

// --- HEADINGS ---
sr.reveal(".top-header", {});

// ------------- SCROLL REVEAL LEFT_RIGHT ANIMATION -----------------

// --- ABOUT INFO & CONTACT INFO ---
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// --- ABOUT SKILLS & FORM BOX ---
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

// ------------- CHANGE ACTIVE LINK -----------------
// Detects the section currently in view and adds an "active-link" class to the corresponding menu item
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;
  let activeFound = false;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add("active-link");
      activeFound = true;
    } else {
      link?.classList.remove("active-link");
    }
  });

  if (!activeFound) {
    document.querySelector(".nav-menu a.active-link")?.classList.remove("active-link");
  }
}
window.addEventListener("scroll", scrollActive);

// ------------- RESPONSIVE NAVIGATION ENHANCEMENTS -----------------
// Adjust the display and behavior of the navigation menu based on screen size
function updateMenuOnResize() {
  const menuBtn = document.getElementById("myNavMenu");
  const width = window.innerWidth;

  if (width < 768) {
    menuBtn.classList.remove("responsive"); // Collapse menu on mobile
  } else {
    menuBtn.classList.remove("responsive"); // Keep menu collapsed on larger screens
  }
}

// Initial call to adjust the menu when the page loads
updateMenuOnResize();

// Add event listener to adjust menu layout on window resize
window.addEventListener("resize", updateMenuOnResize);