// Определение длинны строки, свойство length:

const message = 'В этой строке 26 символов.1';
console.log(message.length);


// Конкантенация строк - cшитиние строк:

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

console.log(fullName);


// Напиши скрипт который выведет строку в формате:
// "Гость х у поселяется в z номер класса q"

const room = 716;
const type = 'VIP';

// const welcomeMsg = 'Гость ' + firstName +' ' + lastName + ' поселяется в ' + type + ' номер ' + room;

const welcomeMsg = `Гость ${firstName}  ${lastName} поселяется в ${room} номер класса ${type}`;

console.log (welcomeMsg);

// Значение в фигурных скобках вычисляется

console.log (`ferr efef efef e ${5 + 5}`);

const quantity = 15;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;

console.log(orderMsg);

// Нормализация ввода, toLowerCase-все приводить к маленьким символам

let brand = prompt ('Давай бренд');
// brand = brand.toLowerCase();

console.log(brand);
// Выводит только 4-ю букву:
console.log(brand[4]);
// Отрезает 1-ю букву и нормализирует все остальные:
console.log(brand.slice(1).toLowerCase());

// Оставляет первую букву неизменной после первой букы все остальные нормализует
brand = brand[0] + brand.slice(1).toLowerCase();

console.log(brand);

// Поиск в строке с методом includes():

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдула, это не спам, предлагаю тебе миллион!';
const string2 = 'Cамая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная компания #fatliversmatter';

console.log (string1.includes(blacklistedWord1));
console.log (string1.includes(blacklistedWord2));

console.log (string2.includes(blacklistedWord1));
const normalizedString2 = string2.toLowerCase();
console.log (normalizedString2.includes(blacklistedWord2));

console.log (string3.includes(blacklistedWord1));
console.log (string3.includes(blacklistedWord2));


