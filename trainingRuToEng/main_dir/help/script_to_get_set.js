// Исходный список словарей
const data = [
    {russian: "плата за обслуживание", english: "service charge", correctAttempts: 0 },
    {russian: "напитки", english: "beverages", correctAttempts: 0 },
    {russian: "отмена", english: "cancellation", correctAttempts: 0 },
    {russian: "кухня (питание)", english: "cuisine [kwi’zin]", correctAttempts: 0 },
    {russian: "пробовать (блюда)", english: "try (dishes)", correctAttempts: 0 },
    {russian: "апельсиновый сок", english: "orange juice", correctAttempts: 0 },
    {russian: "сок грейпфрута", english: "grapefruit juice", correctAttempts: 0 },
    {russian: "овсяная каша", english: "porridge", correctAttempts: 0 },
    {russian: "кукурузные хлопья", english: "cereal", correctAttempts: 0 },
    {russian: "яичница с беконом", english: "bacon and egg(s)", correctAttempts: 0 },
    {russian: "яичница с ветчиной", english: "ham and egg", correctAttempts: 0 },
    {russian: "вареное яйцо", english: "boiled egg", correctAttempts: 0 },
    {russian: "яичница-болтунья", english: "scrambled egg(s)", correctAttempts: 0 },
    {russian: "тост, гренок", english: "toast", correctAttempts: 0 },
    {russian: "конфитюр", english: "marmalade", correctAttempts: 0 },
    {russian: "закуска", english: "starter", correctAttempts: 0 },
    {russian: "салат", english: "salad", correctAttempts: 0 },
    {russian: "суп", english: "soup", correctAttempts: 0 },
    {russian: "бульон", english: "clear soup", correctAttempts: 0 },
    {russian: "овощной суп", english: "vegetable soup", correctAttempts: 0 },
    {russian: "куриный бульон", english: "chicken soup", correctAttempts: 0 },
    {russian: "основное блюдо (второе)", english: "the main course", correctAttempts: 0 },
    {russian: "жареная говядина (баранина)", english: "roast beef (lamb)", correctAttempts: 0 },
    {russian: "бифштекс", english: "beef-steak", correctAttempts: 0 },
    {russian: "баранья отбивная", english: "mutton chop", correctAttempts: 0 },
    {russian: "свиная отбивная", english: "pork chop", correctAttempts: 0 },
    {russian: "рыба с жареным картофелем", english: "fish and chips", correctAttempts: 0 },
    {russian: "треска", english: "cod", correctAttempts: 0 },
    {russian: "сельдь", english: "herring", correctAttempts: 0 },
    {russian: "жареный (печеный) картофель", english: "fried (baked) potatoes", correctAttempts: 0 },
    {russian: "пюре", english: "mashed potatoes", correctAttempts: 0 },
    {russian: "горошек (горох)", english: "beans (peas)", correctAttempts: 0 },
    {russian: "зеленый салат", english: "lettuce", correctAttempts: 0 },
    {russian: "огурец", english: "cucumber", correctAttempts: 0 },
    {russian: "помидор", english: "tomato", correctAttempts: 0 },
    {russian: "десерт, сладкое", english: "dessert (sweet)", correctAttempts: 0 },
    {russian: "яблочный торт", english: "apple tart (pie)", correctAttempts: 0 },
    {russian: "пудинг", english: "pudding", correctAttempts: 0 },
    {russian: "фруктовый салат", english: "fruit salad", correctAttempts: 0 },
    {russian: "мороженое", english: "iсe-cream", correctAttempts: 0 },
    {russian: "алкогольные напитки", english: "strong drinks", correctAttempts: 0 },
    {russian: "вино", english: "wine", correctAttempts: 0 },
    {russian: "пиво", english: "beer", correctAttempts: 0 },
    {russian: "(сухое) красное вино", english: "claret", correctAttempts: 0 },
    {russian: "безалкогольные напитки", english: "soft drinks", correctAttempts: 0 },
    {russian: "чай с молоком", english: "English tea", correctAttempts: 0 },
    {russian: "чай с лимоном", english: "Russian tea", correctAttempts: 0 },
    {russian: "чайник чаю", english: "pot of tea", correctAttempts: 0 },
    {russian: "хлеб с маслом", english: "bread and butter", correctAttempts: 0 },
    {russian: "пирожное, кекс", english: "cake", correctAttempts: 0 },
    {russian: "чайная", english: "tea-shop", correctAttempts: 0 },
    {russian: "закусочная", english: "snack-bar", correctAttempts: 0 },
    {russian: "бутербродная", english: "sandwich-bar", correctAttempts: 0 },
    {russian: "учреждение", english: "establishment", correctAttempts: 0 },
    {russian: "кейтеринговые услуги (the business providing food and drink at meetings and social events)", english: "catering service", correctAttempts: 0 },
];

// Преобразование каждого словаря в список
const transformedData = data.map(item => [item.russian, item.english]);

// Преобразование в JSON
const jsonData = JSON.stringify(transformedData, null, 4);

// Вывод JSON
//console.log(jsonData);

// Сохранение в файл (опционально, в браузере это не сработает, только в Node.js)
const fs = require('fs'); // Подключаем модуль fs для работы с файловой системой
fs.writeFileSync('output.json', jsonData, 'utf-8');