// Параметр - это  то что функции объявили как локальную переменную - это то что перед скобками add ;
// Аргумент - это значение для параметра во время вызова фунции - это то что в скобках  x, y

// const add = function (x, y) {
// console.log(x);
// console.log(y);

// const result = x + y;
// // console.log('x + y: ', result);
// console.log('Выполняет функция add');

// return x + y;
// }

// const r1 =add(5, 3);
// console.log('r1: ', r1);

// const r2 =add(10, 15);
// console.log('r2: ', r2);

// const r3 =add(20, 303);
// console.log('r3: ', r3);

// ===============================

// const fn = function () {

//     // return прекращает действие функции, вне зависимости от вложности
// return 111;

// console.log(1);

// console.log(2);

// console.log(3);


// }

// console.log('Результат функции A: ', fn());

// ======================


// const fn = function (value) {
//     console.log(1);
//     console.log(2);

//     if (value < 50) {
//         return 'Меньше чем 50';
//     }
//     return 'Больше чем 50';

// }

// console.log('Результат функции A: ', fn(10));
// console.log('Результат функции A: ', fn(1000));

// =========================

// СТЕКИ  и  вложенности ! Начинается с fnA и продолжается

// const fnA = function () {
//     console.log('Выполняется функция А');
//     fnB();
// };

// const fnB = function () {
//     console.log('Выполняется функция B');
//     fnC();
// };

// const fnC = function () {
//     console.log('Выполняется функция C');
// };

// // console.log('Лог перед вызовом фунции A');
// fnA();
// // console.log('Лог после вызова фунции A');

// // console.log('Лог перед вызовом фунции B);
// // fnB();
// // console.log('Лог после вызова фунции B');

// // console.log('Лог перед вызовом фунции C');
// // fnC();
// // console.log('Лог после вызова фунции C');

// === Выявление ошибок
// Сама ошибка в самой верхней строке в консоле:
// Параметр - это  то что функции объявили как локальную переменную в  скобках;
// Аргумент - это значение для параметра во время вызова фунции

const fnA = function () {
    console.log('Выполняется функция А');
    fnB();
};

const fnB = function () {
    console.log('Выполняется функция B');
  
    fnC();
};

const fnC = function () {
    console.log('Выполняется функция C')
    console.log(value);
};

// console.log('Лог перед вызовом фунции A');
fnA();
// console.log('Лог после вызова фунции A');

// console.log('Лог перед вызовом фунции B);
// fnB();
// console.log('Лог после вызова фунции B');

// console.log('Лог перед вызовом фунции C);
// fnC();
// console.log('Лог после вызова фунции C');