// ========================
// Mobile Hamburger Menu
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle menu visibility for .hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

// Toggle Mobile Menu
  document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  // ========================
  // Slideshow Functionality (No dots)
  // ========================
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlides() {
    if (slides.length === 0) return;

    // Hide all slides
    slides.forEach(slide => {
      slide.classList.add("opacity-0");
      slide.classList.remove("opacity-100");
    });

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Show active slide
    slides[slideIndex - 1].classList.remove("opacity-0");
    slides[slideIndex - 1].classList.add("opacity-100");

    // Change slide every 1 second
    setTimeout(showSlides, 2000);
  }

  // Start slideshow
  showSlides();
});
