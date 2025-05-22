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

// show sidebar
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.display === 'flex') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'flex';
  }
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

