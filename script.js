document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('sendButton');
    const userInput = document.getElementById('userInput');
    const messages = document.getElementById('messages');

    const responses = {
        '你好': '你好！有什么我可以帮助你的吗？',
        '你是谁': '我是一个简单的AI聊天机器人。',
        '再见': '再见！祝你有美好的一天。'
    };

    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendMessage('用户', userMessage);
            const botResponse = responses[userMessage] || '抱歉，我不理解你的问题。';
            appendMessage('机器人', botResponse);
            userInput.value = '';
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }
});