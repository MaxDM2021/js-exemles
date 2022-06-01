// Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов

// - Нормализуем строку
// - Разбиваем по словам
// - Сливаем в строку с разделителями

// Должно получиться top-10-benefits-of-react-framework

// Вариант 1 расширенный
const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();

// const words = normalizedTitle.split(' ');

// const slug = words.join('-');

// console.log(slug);

// Вариант 2 сокращенный сшитый в одну строку с одной переменной:


const slug = title.toLowerCase().split(' ').join('-');
console.log(slug);