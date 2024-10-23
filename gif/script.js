function toggleChat() {
    var chat = document.getElementById('chatbot');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'flex';
    } else {
        chat.style.display = 'none';
    }
}

document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var inputField = document.getElementById('userInput');
    var message = inputField.value.trim().toLowerCase();  // Приводим сообщение к нижнему регистру для удобства обработки

    if (message !== '') {
        // Добавляем сообщение пользователя в чат
        var chatBody = document.getElementById('chatBody');
        var userMessage = document.createElement('p');
        userMessage.textContent = "Вы: " + inputField.value;
        userMessage.style.color = "#45a049";  // Можно стилизовать сообщение пользователя
        chatBody.appendChild(userMessage);

        // Автоматически прокручиваем чат вниз, если сообщения выходят за пределы видимой области
        chatBody.scrollTop = chatBody.scrollHeight;

        // Очищаем поле ввода
        inputField.value = '';

        // Определяем ответ бота в зависимости от сообщения пользователя
        var botMessageText = getBotResponse(message);

        // Ответ от чат-бота
        setTimeout(function() {
            var botMessage = document.createElement('p');
            botMessage.textContent = "Бот: " + botMessageText;
            chatBody.appendChild(botMessage);

            // Прокручиваем вниз после ответа бота
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000); // Ответ бота через 1 секунду
    }
}

function getBotResponse(message) {
    // Простой набор ответов бота на ключевые слова
    if (message.includes('привет') || message.includes('здравствуйте')) {
        return "Здравствуйте! Как я могу вам помочь?";
    } else if (message.includes('велосипед')|| message.includes('велик')) {
        return "Мы предлагаем широкий выбор велосипедов! Какие вас интересуют?";
    } else if (message.includes('МТБ') || message.includes('мтб') || message.includes('Fix') || message.includes('фикс')) {
        return "Какая модель вас интересует?";
    } else if (message.includes('цены')) {
        return "Цены на наши велосипеды начинаются от 10,000 рублей.";
    } else if (message.includes('адрес')) {
        return "Наш магазин находится на улице Ленина, 123.";
    } else if (message.includes('время работы')) {
        return "Мы работаем с понедельника по пятницу с 9:00 до 18:00.";
    } else {
        return "Извините, я не понимаю ваш вопрос. Могу помочь с информацией о велосипедах, ценах и адресе!";
    }
}
function presetMessage(message) {
    var inputField = document.getElementById('userInput');
    inputField.value = message;
    sendMessage(); // Отправляем сообщение сразу после выбора готового
}
