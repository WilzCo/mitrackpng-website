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

  // ==========================
  // PROFILE MODAL FUNCTIONALITY
  // ==========================
  const modal = document.getElementById("profileModal");
  const modalName = document.getElementById("modalName");
  const modalRole = document.getElementById("modalRole");
  const modalPhone = document.getElementById("modalPhone");
  const modalEmail = document.getElementById("modalEmail");
  const modalImg = document.getElementById("modalImg");
  const modalWhatsapp = document.getElementById("modalWhatsapp");
  const modalCall = document.getElementById("modalCall");

  const cards = document.querySelectorAll(".contact-card");
  const closeBtn = document.querySelector(".modal-close");

  // Open modal on card click
  cards.forEach(card => {
    card.addEventListener("click", () => {

      const name = card.dataset.name;
      const role = card.dataset.role;
      const phone = card.dataset.phone;
      const email = card.dataset.email;
      const img = card.dataset.img;

      modalName.textContent = name;
      modalRole.textContent = role;
      modalPhone.textContent = phone;
      modalEmail.textContent = email;
      modalImg.src = img;

      // Clean phone number for WhatsApp
      const cleanPhone = phone.replace(/\D/g, "");

      modalWhatsapp.href = `https://wa.me/${cleanPhone}`;
      modalCall.href = `tel:${phone}`;

      modal.style.display = "block";
    });
  });

  // Close modal (X button)
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Close modal (click outside)
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
