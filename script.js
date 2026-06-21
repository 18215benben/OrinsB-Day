const colors = [
    'gold', 'limegreen', 'deepskyblue', 'hotpink',
    'orange', 'purple', 'cyan', 'yellowgreen', 'salmon', 'violet'
  ];
  
  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
  
    // Random position across the screen
    confetti.style.left = Math.random() * 100 + 'vw';
  
    // Random width/height for rectangles
    const width = Math.random() * 6 + 4;   // 4–10px
    const height = Math.random() * 15 + 10; // 10–25px
    confetti.style.width = `${width}px`;
    confetti.style.height = `${height}px`;
  
    // Random color
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Random animation duration
    const duration = Math.random() * 3 + 2; // 2–5s
    confetti.style.animationDuration = `${duration}s`;
  
    // Random delay to stagger falls
    confetti.style.animationDelay = `${Math.random()}s`;
  
    // Optional: add a little horizontal rotation
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  
    document.body.appendChild(confetti);
  
    // Clean up after animation
    setTimeout(() => {
      confetti.remove();
    }, duration * 1000 + 1000);
  }
  
  // Spawn more confetti more frequently
  setInterval(createConfetti, 50); // Faster spawning = more confetti