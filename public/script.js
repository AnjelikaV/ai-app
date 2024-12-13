document.getElementById('apiButton').addEventListener('click', function() {
    const text = "can you chcek the code?"; // Замените на текст, который вы хотите отправить
    const conversationId = "13erg"; // Уникальный идентификатор для беседы

    fetch(`http://localhost:3000/api/blackbox?text=${encodeURIComponent(text)}&conversationId=${conversationId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data); // Выводим весь ответ
        console.log(data.response); // Обработка полученных данных
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});