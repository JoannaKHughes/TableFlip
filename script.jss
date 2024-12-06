const buttonImage = document.getElementById('buttonImage');
const rotatingImage = document.getElementById('rotatingImage');
const resetButton = document.getElementById('resetButton');

// Ensure no visual shift by setting explicit initial values in CSS.
rotatingImage.style.left = '100px';
rotatingImage.style.top = '0px';

// Function to handle rotation and movement
const rotateAndMove = () => {
    rotatingImage.style.transform = 'rotate(360deg)';
    rotatingImage.style.left = '300px'; // Move to the right
    rotatingImage.style.top = '-100px'; // Move up
};

// Function to reset the image
const resetImage = () => {
    rotatingImage.style.transform = 'rotate(0deg)';
    rotatingImage.style.left = '100px'; // Reset left position
    rotatingImage.style.top = '0px'; // Reset top position
};

// When the button is clicked (or touched on mobile devices)
buttonImage.addEventListener('click', rotateAndMove);
resetButton.addEventListener('click', resetImage);

// Touch events for mobile optimization
buttonImage.addEventListener('touchend', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    rotateAndMove();
});

resetButton.addEventListener('touchend', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    resetImage();
});
