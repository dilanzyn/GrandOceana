// Grab elements
const mainImage = document.getElementById("herog-img");
const thumbs = Array.from(document.querySelectorAll(".thumb"));
const buttons = Array.from(document.querySelectorAll(".gallery-button"));

// Swap main image (with CSS fade-out class)
function changeMainImage(src) {
  mainImage.classList.add("fade-out");
  mainImage.addEventListener("transitionend", function handler(e) {
    if (e.propertyName !== "opacity") return;
    mainImage.removeEventListener("transitionend", handler);
    mainImage.src = src;
    void mainImage.offsetWidth;
    mainImage.classList.remove("fade-out");
  });
}

// Show only thumbs matching `category` (or all if category==="all")
function filterThumbnails(category) {
  // hide/show
  thumbs.forEach((t) => {
    const keep = category === "all" || t.classList.contains(category);
    t.hidden = !keep;
    t.classList.toggle("active", false);
  });

  // pick first visible
  const first = thumbs.find((t) => !t.hidden);
  if (first) {
    first.classList.add("active");
    changeMainImage(first.dataset.large);
  }
}

// wire up category buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterThumbnails(btn.dataset.filter);
    document.getElementById("thumb-strip").scrollTop = 0;
  });
});

// wire up direct thumbnail clicks
thumbs.forEach((t) => {
  t.addEventListener("click", () => {
    document.querySelector(".thumb.active")?.classList.remove("active");
    t.classList.add("active");
    changeMainImage(t.dataset.large);
  });
});

// Sidebar (unchanged)
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
}
