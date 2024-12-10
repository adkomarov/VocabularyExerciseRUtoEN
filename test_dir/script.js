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
        return;
    }

    // Выбираем случайное слово из оставшихся
    currentWordIndex = Math.floor(Math.random() * remainingWords.length);
    wordContainer.textContent = remainingWords[currentWordIndex].russian;
    buttonsContainer.style.display = "none"; // Скрываем кнопки "Правильно" и "Неправильно"
}

function checkTranslation() {
    const userTranslation = translationInput.value.trim().toLowerCase();
    const correctTranslation = words[currentWordIndex].english.toLowerCase();

    // Показываем правильный перевод
    correctTranslationContainer.textContent = `Правильный перевод: ${correctTranslation}`;
    correctTranslationContainer.style.display = "block";

    // Показываем кнопки "Правильно" и "Неправильно"
    buttonsContainer.style.display = "block";
}

function handleCorrect() {
    words[currentWordIndex].correctAttempts++; // Увеличиваем количество правильных ответов
    resultContainer.textContent = "Правильно!";
    resultContainer.style.color = "green";
    getRandomWord(); // Переходим к следующему слову
    translationInput.value = "";
    correctTranslationContainer.style.display = "none";
}

function handleIncorrect() {
    resultContainer.textContent = "Неправильно!";
    resultContainer.style.color = "red";
    getRandomWord(); // Слово будет повторяться, если ответ неправильный
    translationInput.value = "";
    correctTranslationContainer.style.display = "none";
}

checkButton.addEventListener("click", checkTranslation);
correctButton.addEventListener("click", handleCorrect);
incorrectButton.addEventListener("click", handleIncorrect);

getRandomWord();