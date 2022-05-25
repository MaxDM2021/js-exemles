
// Запинается на первом нечисле читает-парсит только числа, px - уже не читает:


let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:', elementWidth);


// Читает-парсит не только числа но и точки, px - уже не читает:

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:', elementHeight);

// Отсекает (не округляет) две цифры после запятой:

// Вариант 1 записи
// let salary = 1300.12888;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);

// Вариант 2 записи -метод матрешки :

let salary = 1300.12888;
salary = Number(salary.toFixed(2));

console.log(salary);
// Вариант записи "матрешки" в консоли 
console.log(Number(salary.toFixed(2)));

let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

// true - при приобразовании приводится к единице 1;
// false- при приобразовании приводится к нулю 0;
// Если не число а набор букв и дугих символов выдает NaN -yt не число;
console.log(Number(quantity));

console.log(Math.PI);


// Возведение в степень 3 в 5-ю степень:
const base = 3;
const power = 5;
const result = Math.pow(base, power);


console.log(result);
// ** значек экпаненты, 3 в 5-й степени:
console.log(base ** power);


// Напиши скрипт который просит пользователя ввести число и степень,
// возводит число в эту степень и выводит результат в консоль 

// 1. попросить ввести число и сохранить в переменную
// 2. попросить ввести степень и сохранить в переменную
// 3. Возвести введенные данные в степень и вывести

// 1. попросить ввести число и сохранить в переменную
let bases = prompt('Давай число');
bases = Number(bases);

console.log(bases);

// 2. попросить ввести степень и сохранить в переменную

let powers = prompt('Давай степень')
powers = Number(powers);

console.log(powers);

// 3. Возвести введенные данные в степень и вывести
const results = bases ** powers;
console.log(results);

// В функции MAth есть подбока случайных чисел:
console.log(Math.random());

// В функции MAth есть подбока случайных чисел в определенном диапазоне:

const max = 80;
const min = 30;
const resultss = Math.round(Math.random() * (max-min) + min)

console.log(resultss);


// Случайное включение цветов :

const colors = ['tomato', 'teal', 'orange', 'deeppink'];
const maxs = colors.length - 1;
const mins = 0;

const index = Math.round(Math.random() * (maxs - mins) + mins)
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;
