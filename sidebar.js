const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const links = sidebar.querySelectorAll("a");

function openSidebar() {
  sidebar.classList.add("open");
  menuBtn.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  menuBtn.classList.remove("active");
}

// Toggle via button
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.contains("open") ? closeSidebar() : openSidebar();
});

// Prevent sidebar clicks from closing it
sidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close when clicking outside
document.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  }
});

// ✅ Close sidebar when a link is clicked
links.forEach(link => {
  link.addEventListener("click", closeSidebar);
});