// Countdown Timer
const countdown = document.getElementById('countdown');

// Set your target date here
const targetDate = new Date('2024-12-20T18:00:00'); // Adjust as needed

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "We're Together Now!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();




// Falling Hearts Animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.querySelector('.hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);



// const slides = document.querySelector('.slides');
// const images = slides.querySelectorAll('img');
// let currentIndex = 0;

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % images.length; // Cycle through images
//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
// }, 3000); // Change image every 3 seconds
