// ==========================
// NAV TOGGLE (MOBILE)
// ==========================
document.addEventListener("DOMContentLoaded", function () {
  const FEEDBACK_STORAGE_KEY = "mitrack-feedback-posts";

  const toggle = document.getElementById("nav-toggle");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");

        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 820 && nav && nav.classList.contains("open")) {
      nav.classList.remove("open");

      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    }
  });

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
  const faders = document.querySelectorAll(".fade-in");

  faders.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });

    faders.forEach((el) => observer.observe(el));
  } else {
    faders.forEach((el) => el.classList.add("show"));
  }

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

  // ==========================
  // FEEDBACK BOARD
  // ==========================
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackList = document.getElementById("feedbackList");
  const feedbackCount = document.getElementById("feedbackCount");
  const feedbackMessage = document.getElementById("feedbackMessage");

  function getStoredFeedback() {
    try {
      const raw = localStorage.getItem(FEEDBACK_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function saveFeedback(entries) {
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(entries));
  }

  function createStars(rating) {
    return "\u2605".repeat(rating) + "\u2606".repeat(5 - rating);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "Recently posted";
    }

    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  function renderFeedback() {
    if (!feedbackList) {
      return;
    }

    const entries = getStoredFeedback().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    feedbackList.innerHTML = "";

    if (feedbackCount) {
      feedbackCount.textContent = `${entries.length} review${entries.length === 1 ? "" : "s"}`;
    }

    if (!entries.length) {
      const emptyState = document.createElement("div");
      emptyState.className = "feedback-empty";
      emptyState.textContent = "No customer feedback has been posted yet. Be the first to share your experience.";
      feedbackList.appendChild(emptyState);
      return;
    }

    entries.forEach((entry) => {
      const article = document.createElement("article");
      article.className = "feedback-item";

      const header = document.createElement("div");
      header.className = "feedback-item-header";

      const identity = document.createElement("div");
      const name = document.createElement("h4");
      name.textContent = entry.name;

      const company = document.createElement("p");
      company.className = "feedback-company";
      company.textContent = entry.company || "Customer";

      identity.appendChild(name);
      identity.appendChild(company);

      const aside = document.createElement("div");
      const rating = document.createElement("div");
      rating.className = "feedback-rating";
      rating.textContent = createStars(entry.rating);

      const date = document.createElement("div");
      date.className = "feedback-date";
      date.textContent = formatDate(entry.createdAt);

      aside.appendChild(rating);
      aside.appendChild(date);

      const body = document.createElement("p");
      body.className = "feedback-text";
      body.textContent = entry.message;

      header.appendChild(identity);
      header.appendChild(aside);
      article.appendChild(header);
      article.appendChild(body);
      feedbackList.appendChild(article);
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(feedbackForm);
      const name = String(formData.get("name") || "").trim();
      const company = String(formData.get("company") || "").trim();
      const rating = Number(formData.get("rating"));
      const message = String(formData.get("message") || "").trim();

      if (!name || !message || !rating) {
        if (feedbackMessage) {
          feedbackMessage.textContent = "Please complete your name, rating, and feedback before posting.";
        }
        return;
      }

      const entries = getStoredFeedback();
      entries.push({
        name: name,
        company: company,
        rating: Math.min(Math.max(rating, 1), 5),
        message: message,
        createdAt: new Date().toISOString()
      });

      saveFeedback(entries);
      feedbackForm.reset();

      if (feedbackMessage) {
        feedbackMessage.textContent = "Thanks for your feedback. Your review has been added on this device.";
      }

      renderFeedback();
    });
  }

  renderFeedback();

});
