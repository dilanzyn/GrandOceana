// main.js

// Gallery thumbnail click handler
const mainImage = document.getElementById("herog-img");
const thumbnails = Array.from(document.querySelectorAll(".thumb"));
const buttons = Array.from(document.querySelectorAll(".gallery-button"));

// 1) Thumbnail → Main image + active state
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.dataset.large;
    document.querySelector(".thumb.active")?.classList.remove("active");
    thumb.classList.add("active");
  });
});

// 2) Filter function
function filterThumbnails(categoryClass) {
  thumbnails.forEach((thumb) => {
    const shouldShow =
      categoryClass === "all" || thumb.classList.contains(categoryClass);

    if (shouldShow) {
      thumb.removeAttribute("hidden");
    } else {
      thumb.setAttribute("hidden", "");
    }
  });

  // If the active thumb got hidden, clear its active state:
  const active = document.querySelector(".thumb.active");
  if (active && active.hidden) {
    active.classList.remove("active");
  }
}

// 3) Hook up gallery‑buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterThumbnails(btn.dataset.filter);
  });
});

// show sidebar
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
}

/* fade out loader once everything (images, fonts, etc.) is ready */
/* main.js  (keep this near the bottom) */
window.addEventListener('load', () => {
  const loader = document.getElementById('preloader');

  /* 1 000 ms = 1 second.  Adjust to taste. */
  const MIN_DISPLAY_TIME = 1000;         // e.g. 1 seconds

  /* Allow the CSS wave animation to keep playing
     even after all assets are ready. */
  setTimeout(() => {
    loader.classList.add('hide');        // fades out via CSS
  }, MIN_DISPLAY_TIME);
});
