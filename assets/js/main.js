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