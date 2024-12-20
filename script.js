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

// Add the updateImages function
function updateImages() {
    const buttonImage = document.getElementById('buttonImage');
    const rotatingImage = document.getElementById('rotatingImage');

    if (window.innerWidth <= 400) {
        buttonImage.src = 'guy-xsmall.jpg';
        rotatingImage.src = 'table-xsmall.jpg';
    } else if (window.innerWidth <= 600) {
        buttonImage.src = 'guy-small.jpg';
        rotatingImage.src = 'table-small.jpg';
    } else {
        buttonImage.src = 'guy.jpg';
        rotatingImage.src = 'table.jpg';
    }
}

// Initialize the chatbot state
let chatBox = document.getElementById("chat-box");

function botMessage(message) {
    let msgElement = document.createElement("div");
    msgElement.classList.add("message", "bot-message");
    msgElement.textContent = message;
    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function userMessage(message) {
    let msgElement = document.createElement("div");
    msgElement.classList.add("message", "user-message");
    msgElement.textContent = message;
    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function userChoice(choice) {
    let userMsg = '';
    if (choice === 'option1') {
        userMsg = 'You chose Option 1';
        botMessage('Great choice! Option 1 is selected. Here is some information...');
    } else if (choice === 'option2') {
        userMsg = 'You chose Option 2';
        botMessage('You picked Option 2. Let me tell you more about it...');
    } else if (choice === 'option3') {
        userMsg = 'You chose Option 3';
        botMessage('Option 3 is selected. Here is what I know about it...');
    }

    // Display user message
    userMessage(userMsg);

    // Disable buttons after choice is made
    disableOptions();
}

function disableOptions() {
    let options = document.querySelectorAll(".option-button");
    options.forEach(button => {
        button.disabled = true;
        button.style.backgroundColor = '#ddd';
    });
}

// Initial bot greeting
botMessage('Hello! I am your chatbot. Please choose an option:');


// Call the function on page load
window.onload = updateImages;

// Call the function on window resize
window.onresize = updateImages;
