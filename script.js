// Определяем сцены квеста
// Создаем объект scenes, где каждая сцена - это ключ со своим текстом и вариантами выбора
const scenes = {
    start: { // Начальная сцена
        text: "Вы находитесь в старом замке. Перед вами два пути: налево или направо.",
        choices: [ // Массив вариантов выбора для начальной сцены
            { text: "Пойти налево", next: "left" }, // Вариант выбора с текстом и следующей сценой
            { text: "Пойти направо", next: "right" } // Второй вариант выбора
        ]
    },
    left: { // Сцена "left"
        text: "Вы нашли сундук с золотом!",
        choices: [
            { text: "Открыть сундук", next: "open" },
            { text: "Кинуть в него камень", next: "camen" }

        ] // Нет вариантов выбора - это конечная сцена
    },
    open: {
        text: "Там ничего нет. Печаль и разочарование",
        choices: []
    },
    camen: {
        text: "Сундук зашевелился и открыл зубастую пасть. Это мимик.",
        choices: []
    },
    
    right: { // Сцена "right"
        text: "На вас напал дракон. Попробуйте снова!",
        choices: [] // Нет вариантов выбора - это конечная сцена
    }
};

// Функция для отображения сцены
function showScene(scene) {
    // Получаем элемент для отображения текста истории
    const storyText = document.querySelector('.story-text');
    // Получаем контейнер для кнопок выбора
    const choices = document.querySelector('.choices');
    
    // Устанавливаем текст текущей сцены
    storyText.textContent = scene.text;
    
    // Очищаем контейнер с кнопками выбора
    choices.innerHTML = '';
    // Для каждого варианта выбора создаем кнопку
    scene.choices.forEach(choice => {
        // Создаем новый элемент div для кнопки
        const button = document.createElement('div');
        // Добавляем класс для стилизации
        button.classList.add('choice');
        // Устанавливаем текст кнопки
        button.textContent = choice.text;
        // Добавляем обработчик клика
        button.addEventListener('click', () => showScene(scenes[choice.next]));
        // Добавляем кнопку в контейнер
        choices.appendChild(button);
    });
}

// Начинаем игру после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Показываем начальную сцену
    showScene(scenes.start);
});
