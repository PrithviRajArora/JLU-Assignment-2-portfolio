const phrases = ["Developer", "AI/ML Enthusiast", "Full Stack Learner", "Guitarist"];
let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {
  const el = document.getElementById("typed-text");
  const current = phrases[i];
  
  // Typing phase
  if (!isDeleting) {
    el.innerText = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // Wait before deleting
      return;
    }
  } 
  // Deleting phase
  else {
    el.innerText = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  // Control speed
  const speed = isDeleting ? 75 : 150;
  setTimeout(typeEffect, speed);
}

typeEffect();
const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Optional: grow cursor when hovering interactive elements
const interactive = document.querySelectorAll('a, button');

interactive.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
  });
});