// List all your logo image paths here
  const images = [
    'logo/Agric.png',
    'logo/Chem.jpg',
    'logo/Civil.png',
    'logo/Com.png',
    'logo/Elect.png',
    'logo/im.png',
    'logo/img.png',
    'logo/pet.jpeg',
    // Add more as needed
  ];

  let current = 0;
  const welcomeContainer = document.querySelector('.welcome-container');

  function changeBackground() {
    welcomeContainer.style.background = `url('${images[current]}') no-repeat center center/cover`;
    current = (current + 1) % images.length;
  }

  // Initial background
  changeBackground();
  // Change every 3 seconds
  setInterval(changeBackground, 3000);