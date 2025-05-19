// Toggle mobile navigation menu
const hamburger = document.getElementById("hamburger");
const navLeft = document.getElementById("nav-left");
const navRight = document.getElementById("nav-right");

hamburger.addEventListener("click", () => {
  navLeft.classList.toggle("show");
  navRight.classList.toggle("show");

  // Update ARIA attribute for accessibility
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("section, header.hero");
const navLinks = document.querySelectorAll("nav a");

function activateNav() {
  const scrollPosition = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust offset for fixed header height
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id") || "home";

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document.querySelectorAll(`nav a[href*="#${sectionId}"]`).forEach((link) => {
        link.classList.add("active");
      });
    }
  });
}

window.addEventListener("scroll", activateNav);

// Gallery thumbnail click handler
const mainImage = document.getElementById("herog-img");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Change main image src to clicked thumbnail's large image
    mainImage.src = thumb.dataset.large;

    // Update active thumbnail styling
    const currentActive = document.querySelector(".thumb.active");
    if (currentActive) currentActive.classList.remove("active");
    thumb.classList.add("active");
  });
});
