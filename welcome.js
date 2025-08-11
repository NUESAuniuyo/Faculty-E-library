// ========================
// Mobile Hamburger Menu
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    // Toggle menu visibility
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

  // ========================
  // Slideshow Functionality
  // ========================
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll

  function showSlides() {
    if (slides.length === 0) return; // Exit if no slides

    // Hide all slides
    slides.forEach((slide, i) => {
      slide.classList.add("opacity-0");
      slide.classList.remove("opacity-100");
      if (dots[i]) dots[i].classList.remove("bg-yellow-400");
    });

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Show active slide
    slides[slideIndex - 1].classList.remove("opacity-0");
    slides[slideIndex - 1].classList.add("opacity-100");

    // Highlight active dot
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].classList.add("bg-yellow-400");
    }

    // Change slide every 1 second
    setTimeout(showSlides, 2000);
  }

  // Start slideshow
  showSlides();
});
