const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});

const images = [
  'logo/Agric.jpg',
  'logo/Chem.jpg',
  'logo/Civil.png',
  'logo/Com.png',
  'logo/Elect.png',
  'logo/im.png',
   'logo/pet.jpeg',
  'logo/faculty building.png',
  'logo/faculty.png',
];

let current = 0;
const imageSide = document.querySelector('.image-side');

function changeBackground() {
  imageSide.style.opacity = '0';
  
  setTimeout(() => {
    imageSide.style.background = `url('${images[current]}') no-repeat center center`;
    imageSide.style.backgroundSize = 'cover';
    imageSide.style.opacity = '1';
    current = (current + 1) % images.length;
  }, 1000);
}

// Initial background
imageSide.style.transition = 'opacity 1s ease-in-out';
changeBackground();

// Change every 5 seconds
setInterval(changeBackground, 5000);