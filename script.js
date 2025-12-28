// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Close nav on link click (mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

// Theme switcher
const themeDots = document.querySelectorAll(".theme-dot");
const body = document.body;

themeDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const theme = dot.getAttribute("data-theme");
    body.setAttribute("data-theme", theme);

    themeDots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Demo form submit
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "This is a demo form for the template.\n\nConnect it to your email or booking system to receive real messages."
    );
  });
}
