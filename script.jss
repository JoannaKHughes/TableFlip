const buttonImage = document.getElementById('buttonImage');
const rotatingImage = document.getElementById('rotatingImage');
const resetButton = document.getElementById('resetButton');

// Ensure no visual shift by setting explicit initial values
rotatingImage.style.left = '100px';
rotatingImage.style.top = '0px';

buttonImage.addEventListener('click', () => {
    rotatingImage.style.transform = 'rotate(360deg)';
    rotatingImage.style.left = '300px'; // Move right
    rotatingImage.style.top = '-100px'; // Move up
});

resetButton.addEventListener('click', () => {
    rotatingImage.style.transform = 'rotate(0deg)';
    rotatingImage.style.left = '100px'; // Reset right position
    rotatingImage.style.top = '0px'; // Reset top position
});
