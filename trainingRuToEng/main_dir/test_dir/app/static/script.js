/*
const words = [
    { russian: "апельсиновый сок", english: "orange juice", correctAttempts: 0 },
    { russian: "сок грейпфрута", english: "grapefruit juice", correctAttempts: 0 },
];

let currentWordIndex = 0;

const wordContainer = document.getElementById("word");
const translationInput = document.getElementById("translation");
const checkButton = document.getElementById("check-button");
const correctButton = document.getElementById("correct-button");
const incorrectButton = document.getElementById("incorrect-button");
const resultContainer = document.getElementById("result");
const correctTranslationContainer = document.getElementById("correct-translation");
const finalMessage = document.getElementById("final-message");
const buttonsContainer = document.getElementById("buttons-container");

function getRandomWord() {
    // Фильтруем слова, которые еще не были правильно отвечены 3 раза
    const remainingWords = words.filter(word => word.correctAttempts < 3);

    if (remainingWords.length === 0) {
        // Все слова правильно отвечены 3 раза
        finalMessage.style.display = "block";
        wordContainer.textContent = "";
        return;
    }

    // Выбираем случайное слово из оставшихся
    currentWordIndex = Math.floor(Math.random() * remainingWords.length);
    wordContainer.textContent = remainingWords[currentWordIndex].russian;
    buttonsContainer.style.display = "none"; // Скрываем кнопки "Правильно" и "Неправильно"
    translationInput.value = ""; // Очищаем поле ввода
    resultContainer.textContent = ""; // Очищаем результат
    correctTranslationContainer.style.display = "none"; // Скрываем правильный перевод
}

function checkTranslation() {
    const userTranslation = translationInput.value.trim().toLowerCase();
    const correctTranslation = words[currentWordIndex].english.toLowerCase();

    if (userTranslation === correctTranslation) {
        // Идеальное совпадение, сразу увеличиваем correctAttempts и переходим к следующему слову
        words[currentWordIndex].correctAttempts++;
        resultContainer.textContent = "Правильно!";
        resultContainer.style.color = "green";
        getRandomWord();
    } else {
        // Не идеальное совпадение, показываем правильный перевод и кнопки для подтверждения
        correctTranslationContainer.textContent = `Правильный перевод: ${correctTranslation}`;
        correctTranslationContainer.style.display = "block";
        buttonsContainer.style.display = "block";
    }
}

function handleCorrect() {
    words[currentWordIndex].correctAttempts++; // Увеличиваем количество правильных ответов
    resultContainer.textContent = "Правильно!";
    resultContainer.style.color = "green";
    getRandomWord(); // Переходим к следующему слову
}

function handleIncorrect() {
    resultContainer.textContent = "Неправильно!";
    resultContainer.style.color = "red";
    getRandomWord(); // Слово будет повторяться, если ответ неправильный
}

checkButton.addEventListener("click", checkTranslation);
correctButton.addEventListener("click", handleCorrect);
incorrectButton.addEventListener("click", handleIncorrect);

getRandomWord();
*/

const words = [];

let currentWordIndex = 0;

const wordContainer = document.getElementById("word");
const translationInput = document.getElementById("translation");
const checkButton = document.getElementById("check-button");
const correctButton = document.getElementById("correct-button");
const incorrectButton = document.getElementById("incorrect-button");
const resultContainer = document.getElementById("result");
const correctTranslationContainer = document.getElementById("correct-translation");
const finalMessage = document.getElementById("final-message");
const buttonsContainer = document.getElementById("buttons-container");

// Загружаем данные из всех JSON файлов в папке vocabulary_set
/*
async function loadVocabularySets() {
    try {
        const response = await fetch("./vocabulary_set/");
        const files = await response.json();

        for (const file of files) {
            if (file.startsWith("set") && file.endsWith(".json")) {
                const fileResponse = await fetch(`./vocabulary_set/${file}`);
                const data = await fileResponse.json();

                data.forEach(([russian, english]) => {
                    words.push({ russian, english, correctAttempts: 0 });
                });
            }
        }

        getRandomWord();
    } catch (error) {
        console.error("Ошибка при загрузке словарных наборов:", error);
    }
}
*/
async function loadVocabularySets() {
    try {
        // Запрашиваем список файлов
        const response = await fetch("/vocabulary_set/");
        const files = await response.json();

        for (const file of files) {
            const fileResponse = await fetch(`/vocabulary_set/${file}`);
            const data = await fileResponse.json();

            data.forEach(([russian, english]) => {
                words.push({ russian, english, correctAttempts: 0 });
            });
        }

        getRandomWord();
    } catch (error) {
        console.error("Ошибка при загрузке словарных наборов:", error);
    }
}

function getRandomWord() {
    // Фильтруем слова, которые еще не были правильно отвечены 3 раза
    const remainingWords = words.filter(word => word.correctAttempts < 3);

    if (remainingWords.length === 0) {
        // Все слова правильно отвечены 3 раза
        finalMessage.style.display = "block";
        wordContainer.textContent = "";
        return;
    }

    // Выбираем случайное слово из оставшихся
    currentWordIndex = Math.floor(Math.random() * remainingWords.length);
    wordContainer.textContent = remainingWords[currentWordIndex].russian;
    buttonsContainer.style.display = "none"; // Скрываем кнопки "Правильно" и "Неправильно"
    translationInput.value = ""; // Очищаем поле ввода
    resultContainer.textContent = ""; // Очищаем результат
    correctTranslationContainer.style.display = "none"; // Скрываем правильный перевод
}

function checkTranslation() {
    const userTranslation = translationInput.value.trim().toLowerCase();
    const correctTranslation = words[currentWordIndex].english.toLowerCase();

    if (userTranslation === correctTranslation) {
        // Идеальное совпадение, сразу увеличиваем correctAttempts и переходим к следующему слову
        words[currentWordIndex].correctAttempts++;
        resultContainer.textContent = "Правильно!";
        resultContainer.style.color = "green";
        getRandomWord();
    } else {
        // Не идеальное совпадение, показываем правильный перевод и кнопки для подтверждения
        correctTranslationContainer.textContent = `Правильный перевод: ${correctTranslation}`;
        correctTranslationContainer.style.display = "block";
        buttonsContainer.style.display = "block";
    }
}

function handleCorrect() {
    words[currentWordIndex].correctAttempts++; // Увеличиваем количество правильных ответов
    resultContainer.textContent = "Правильно!";
    resultContainer.style.color = "green";
    getRandomWord(); // Переходим к следующему слову
}

function handleIncorrect() {
    resultContainer.textContent = "Неправильно!";
    resultContainer.style.color = "red";
    getRandomWord(); // Слово будет повторяться, если ответ неправильный
}

checkButton.addEventListener("click", checkTranslation);
correctButton.addEventListener("click", handleCorrect);
incorrectButton.addEventListener("click", handleIncorrect);

loadVocabularySets();
