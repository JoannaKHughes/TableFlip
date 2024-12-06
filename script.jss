document.addEventListener('DOMContentLoaded', () => {
    const buttonImage = document.getElementById('buttonImage');
    const rotatingImage = document.getElementById('rotatingImage');
    const resetButton = document.getElementById('resetButton');

    // Ensure no visual shift by setting explicit initial values in CSS.
    rotatingImage.style.left = '100px';
    rotatingImage.style.top = '0px';

    // Function to handle rotation and movement
    const rotateAndMove = () => {
        console.log('Rotating and moving the image');
        rotatingImage.style.transform = 'rotate(360deg)';
        rotatingImage.style.left = '300px'; // Move to the right
        rotatingImage.style.top = '-100px'; // Move up
    };

    // Function to reset the image
    const resetImage = () => {
        console.log('Resetting the image');
        rotatingImage.style.transform = 'rotate(0deg)';
        rotatingImage.style.left = '100px'; // Reset left position
        rotatingImage.style.top = '0px'; // Reset top position
    };

    // When the button is clicked (or touched on mobile devices)
    buttonImage.addEventListener('click', () => {
        console.log('Button clicked');
        rotateAndMove();
    });

    resetButton.addEventListener('click', () => {
        console.log('Reset button clicked');
        resetImage();
    });

    // Touch events for mobile optimization
    buttonImage.addEventListener('touchend', (event) => {
        event.preventDefault(); // Prevent default touch behavior
        console.log('Touch on button');
        rotateAndMove();
    });

    resetButton.addEventListener('touchend', (event) => {
        event.preventDefault(); // Prevent default touch behavior
        console.log('Touch on reset button');
        resetImage();
    });
});
