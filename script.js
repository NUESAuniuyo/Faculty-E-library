document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const redirectForm = document.getElementById("redirectForm");
  const semesterText = document.querySelector('h3.italic');

  // Make sure elements exist before adding listeners
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // prevent triggering document click
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // Semester text hover color change
  if (semesterText) {
    semesterText.addEventListener('mouseenter', () => {
      semesterText.classList.replace('text-green-300', 'text-green-500');
    });

    semesterText.addEventListener('mouseleave', () => {
      semesterText.classList.replace('text-green-500', 'text-green-300');
    });
  }




  // Redirect form
  if (redirectForm) {
    redirectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const semester = document.getElementById("semester").value;
      const level = document.getElementById("level").value;
      const department = document.getElementById("department").value;

      const fileName = `resources/${department}/${level}/${semester}.html`;

      if (semester && level && department) {
        alert(`Redirecting to ${level} Level ${semester} Semester - ${department.charAt(0).toUpperCase() + department.slice(1)} Materials`);
        window.location.href = fileName;
      } else {
        alert("Invalid selection. Please choose valid options.");
      }
    });
  }
});
