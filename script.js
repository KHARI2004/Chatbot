document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user-message');

    document.getElementById('user-input').value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot-message');
    }, 1000);
}

function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = text;
    
    const chatLog = document.getElementById('chat-log');
    chatLog.appendChild(messageDiv);
    
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the bottom
}

function getBotResponse(userInput) {
    // Simple responses for demonstration
    const responses = {
        "hello": "Hi there!",
        "how are you": "I'm a bot, so I'm always good!",
        "what's your name": "I'm your friendly chatbot.",
        "I love you": "I love you too"
    };
    
    const defaultResponse = "I'm not sure how to respond to that.";
    
    //return responses[userInput.toLowerCase()] || defaultResponse;
    return responses[userInput] || defaultResponse;
}








