// ==========================
// NAV TOGGLE (MOBILE)
// ==========================
document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("nav");

  if (toggle) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // ==========================
  // SCROLL EFFECT (NAVBAR)
  // ==========================
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // ==========================
  // FADE-IN ANIMATION
  // ==========================
  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));

});
