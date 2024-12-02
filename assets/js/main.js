// ----------- NAVIGATION BAR FUNCTION -----------
// Toggles the "responsive" class to make the navigation menu mobile-friendly
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  // Toggle the "responsive" class based on the current state
  menuBtn.classList.toggle("responsive");
}

// -------------- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----------
window.onscroll = function () {
  headerShadow();
};

// Adds or removes shadow to the navigation bar on scroll
function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// -------- TYPING EFFECT ---------------
var typingEffect = new Typed(".typedText", {
  strings: ["Software Engineer", "Full-Stack Developer", "Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// -------- SCROLL REVEAL ANIMATION ---------------
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// --- HOME ---
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".socail_icons", { delay: 200 });
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
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// --- ABOUT SKILLS & FORM BOX ---
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

// ------------- CHANGE ACTIVE LINK -----------------

// Detects the section currently in view and adds an "active-link" class to the corresponding menu item
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    // If section is in view, add active-link class, else remove it
    const link = document.querySelector(".nav-menu a[href*=" + sectionId + "]");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

// Adding scroll event listener to highlight the active link
window.addEventListener("scroll", scrollActive);

// ------------- RESPONSIVE NAVIGATION ENHANCEMENTS -----------------

// Adjust the display and behavior of the navigation menu based on screen size
function updateMenuOnResize() {
  const menuBtn = document.getElementById("myNavMenu");
  const width = window.innerWidth;

  // If the screen width is less than 768px (mobile/tablet size), toggle the menu automatically
  if (width < 768) {
    menuBtn.classList.remove("responsive");  // Ensure it starts collapsed on mobile
  } else {
    menuBtn.classList.add("responsive"); // Always show menu on larger screens
  }
}

// Initial call to adjust the menu when the page loads
updateMenuOnResize();

// Add event listener to adjust menu layout on window resize
window.addEventListener("resize", updateMenuOnResize);
