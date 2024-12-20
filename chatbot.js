// Configuration in JSON format
const chatConfig = {
    "start": {
        "message": "Hello! How can I assist you today?",
        "options": [
            {"text": "I need help with my order", "next": "orderHelp"},
            {"text": "I have a question about shipping", "next": "shippingQuestion"}
        ]
    },
    "orderHelp": {
        "message": "Sure, I can help with that. What's the issue?",
        "options": [
            {"text": "My order is delayed", "next": "delayedOrder"},
            {"text": "I want to cancel my order", "next": "cancelOrder"}
        ]
    },
    "shippingQuestion": {
        "message": "Sure, I can help with that. What's your question about shipping?",
        "options": [
            {"text": "When will it arrive?", "next": "arrivalTime"},
            {"text": "What are the shipping methods available?", "next": "shippingMethods"}
        ]
    },
    // Add more nodes as needed
};

// DOM Elements
const chatIcon = document.getElementById('chat-icon');
const chatbox = document.getElementById('chatbox');
const greeting = document.getElementById('greeting');
const optionsDiv = document.getElementById('options');

// Show the chatbox when the icon is clicked
chatIcon.addEventListener('click', function() {
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'block';
        displayMessage(chatConfig.start);
    } else {
        chatbox.style.display = 'none';
    }
});

// Function to display the message and options
function displayMessage(node) {
    greeting.textContent = node.message;
    optionsDiv.innerHTML = '';
    node.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.addEventListener('click', () => {
            const nextNode = chatConfig[option.next];
            if (nextNode) {
                displayMessage(nextNode);
            } else {
                alert('End of conversation!');
                // Optionally, you can add a reset function here to start over
            }
        });
        optionsDiv.appendChild(button);
    });
}
