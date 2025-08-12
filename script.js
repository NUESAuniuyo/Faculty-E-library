  // Toggle Mobile Menu
  document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

document.getElementById("redirectForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const semester = document.getElementById("semester").value;
  const level = document.getElementById("level").value;
  const department = document.getElementById("department").value;

  
  // const fileName = fileMapping[level]?.[semester]?.[department];

  const fileName = `resources/${department}/${level}/${semester}.html`;
  if (fileName) {
    alert(`Redirecting to ${level} Level ${semester} Semester - ${department.charAt(0).toUpperCase() + department.slice(1)} Materials`);
    console.log(fileName);
    window.location.href = fileName;
  } else {
    alert("Invalid selection. Please choose valid options.");
  }
});
