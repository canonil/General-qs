let noButton = document.getElementById('noButton');
let yesButton = document.getElementById('yesButton');
let attemptCount = 0;
const maxAttempts = 3;

yesButton.addEventListener('click', function() {
   alert('Yay!');
});

noButton.addEventListener('mouseover', function() {
   if (attemptCount < maxAttempts) {
       // Random position within viewport
       const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
       const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
       
       // Keep button within visible area
       const safeX = Math.min(randomX, window.innerWidth - noButton.offsetWidth);
       const safeY = Math.min(randomY, window.innerHeight - noButton.offsetHeight);

       noButton.style.position = 'fixed';
       noButton.style.left = safeX + 'px';
       noButton.style.top = safeY + 'px';
       
       attemptCount++;
   } else {
       // After 3 attempts, let them click it
       noButton.addEventListener('click', function() {
           alert('Lazy fatass');
       });
   }
});

// Reset button position when mouse leaves the window
document.addEventListener('mouseleave', function() {
   if (attemptCount < maxAttempts) {
       noButton.style.position = 'static';
   }
});
