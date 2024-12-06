const buttonImage = document.getElementById('buttonImage');
const rotatingImage = document.getElementById('rotatingImage');
const resetButton = document.getElementById('resetButton');

// Ensure no visual shift by setting explicit initial values in CSS.
rotatingImage.style.left = '100px';
rotatingImage.style.top = '0px';

// When the button is clicked (or touched on mobile devices)
buttonImage.addEventListener('click', () => {
    rotatingImage.style.transform = 'rotate(360deg)';
    rotatingImage.style.left = '300px'; // Move to the right
    rotatingImage.style.top = '-100px'; // Move up
});

// Reset the image back to its initial position when the reset button is clicked
resetButton.addEventListener('click', () => {
    rotatingImage.style.transform = 'rotate(0deg)';
    rotatingImage.style.left = '100px'; // Reset left position
    rotatingImage.style.top = '0px'; // Reset top position
});

// Optionally, add touch events for mobile optimization (if needed)
buttonImage.addEventListener('touchstart', (event) => {
    // Same logic for touch events
    rotatingImage.style.transform = 'rotate(360deg)';
    rotatingImage.style.left = '300px';
    rotatingImage.style.top = '-100px';
});

resetButton.addEventListener('touchstart', (event) => {
    // Reset for touch events
    rotatingImage.style.transform = 'rotate(0deg)';
    rotatingImage.style.left = '100px';
    rotatingImage.style.top = '0px';
});
