let isMouseDown = false;
const overlay = document.getElementById('overlay');
const hbd = document.getElementById('hbd-msg')
hbd.style.opacity = "0"

overlay.style.opacity = "0.5"

document.addEventListener('mousedown', function(event) {
  if (overlay.style.opacity !== '0') {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      hbd.style.opacity = '100'
    }, 500);
  }
  isMouseDown = true;
  spawnConfetti(event.clientX, event.clientY);
});

document.addEventListener('mouseup', function() {
  isMouseDown = false;
});

document.addEventListener('mousemove', function(event) {
  if (isMouseDown) {
    spawnConfetti(event.clientX, event.clientY);
  }
});

function spawnConfetti(x, y) {
  for (let i = 0; i < 6; i++) {
    createConfetti(x, y);
  }
}

function createConfetti(x, y) {
  const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e67e22'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.backgroundColor = randomColor;
  confetti.style.left = x + 'px';
  confetti.style.top = y + 'px';

  document.body.appendChild(confetti);

  const angle = Math.random() * Math.PI * 2;
  const velocity = 2 + Math.random() * 2;
  const rotationSpeed = (Math.random() - 0.5) * 10;

  let xVelocity = velocity * Math.cos(angle);
  let yVelocity = velocity * Math.sin(angle);
  const gravity = 0.1;

  function animateConfetti() {
    xVelocity *= 0.99;
    yVelocity += gravity;
    x += xVelocity;
    y += yVelocity;

    const currentRotation = parseFloat(confetti.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    confetti.style.transform = `rotate(${currentRotation + rotationSpeed}deg)`;

    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';

    if (y < window.innerHeight) {
      requestAnimationFrame(animateConfetti);
    } else {
      confetti.remove();
    }
  }

  requestAnimationFrame(animateConfetti);
}