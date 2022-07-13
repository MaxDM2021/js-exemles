
// ==== Замыкание =====

// function slider(slidCount) {
//     let numberFotos = 4;

//     function animation(time) {
//         console.log(`animate sliders ${slidCount} with time ${time}`);
//     }

// return animation;
// }

// const slider1 = slider(10);
// console.log(slider1(200))

// const slider2 = slider(20);
// console.log(slider2(400))

// const slider3 = slider(30);
// console.log(slider3(1000))


// ===== разница между квадратным ии круглыми скобками =============


// const user = {
//     name: 'John',
//     age: 30,
//     status: "Premium"
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.status);

// const userChoise = prompt('Enter object key')
// console.log(user['userChoise'])

// Применяется когда динамический код ключа
// console.log(user['name']);
// console.log(user['age']);
// console.log(user['status']);


// Применение квадратных скобок []

// const book = {
//     title: 'The Greate Gatsby',
//     author: 'F. Scoot Fitzgerald',
//     publisher: 'Scribner',
//     year: 1925,
//     pages: 180,
//     price: 20,
// };


// const propKey = 'title';
// const bookAutothor = book[propKey];
// console.log(bookAuthor);


// ===============

// for in - для объектов
// for of - для массивов



// const user = {
//     name: 'John',
//     age: 30,
//     status: 'Premium',
// }

// for (const key of user) {
//     console.log(key);
// }

// 1. Счетчик - переменная, которая контролирует сколько раз отработал цикл - i = 0
// 2. Условие, при котором цикл останавливается - цикл останавливается если счетчик будет больше длинны массива
// 3. Код, который изменяет значение счетчика - i++ 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Цикл for
// for(let i = 0; i <numbers.length; i += 1){
//     if(i % 2 !== 0){
    //    Продолжать
//         continue
//     }

//     if (number[i] === 2){
        // останавливает вообще
//         break;
//     }
//     console.log(numbers[i]);
// }

// Цикл while
// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i = +1;
// }

// do while

// do {
//     console.log(number[i]);
//     i = +1;
// }while(i < numbers.length);

// slice, concat, ...spred оператори делают копию!!

// () - арифметические операции, запуск фунции, часть конструкций в js (циклы, if, switch, образование функции) 
// [] - массивы, доступ до ключа объекта, если ключ динамичный, доступ до элемента массива по индексу, , деструктуризация
// {} - объект, часть конструкций в js (циклы, if, switch, образование функции), деструктуризация, тело фунции, класс



// Call stag

// function bar() {
//     console.log('bar');
// }
// function baz() {
//     console.log('baz');
// }

// function foo() {
//     console.log('foo');
//     bar();
//     baz();
// }

// foo();


// Рекурсия:

function pow(number, power) {
if (power === 0) {
    return 1;
}
return number * pow(number, power - 1)
}

pow (2, 3)

// 1) number = 2 power = 3 => 2 * pow(2, 2) => 4 = 8) =>
//    number = 2 power = 2 => 2 * pow(2, 1) => 2 = 4) =>
//    number = 2 power = 1 => 2 * pow(2, 0) => 1 = 2) =>
//    number = 2 power = 0 => 1



// pow (2, 0);  1
// pow (2, 1); 2 * 1 = 2
// pow (2, 2); 2 * 2 = 4
// pow (2, 3); 2 * 4 = 8


'use strick'

// Контекст  с this -  все очень понятно!!!


// const user = {
//     name: 'John',
//     age: 30,
//     showUserThis: function () {
//         console.log(this);
//         const arrowThis = () => {
//             console.log('arrow', this)
//         }
        // User - в стрелочной функции контекст будет той функции в которой она создана! 
        // Есть контекcт только в фунции
    //     arrowThis()
    // },
// Window - т.к. в контексте маасива нет ничего
// const arrowThis = () => {
//     console.log('arrow', this)
// }
// }
// underfined
// function showThis() {
//     console.log('function ',this);
// }

// Window
// const arrowThis = () => {
//     console.log('arrow', this)
// }

// call  и aplly используется одноразово
// showThis.call(user);
// showThis.apply(user);
// для bind нужно согдать копию и с ней ее уже запускать, использовать привязку, если вызов будет многоразовый
// const bindedFunction = showThis.bind(user);
// bindedFunction();



// underfined
// showThis();
// user
// user.showUserThis()
// window
// arrowThis();

// call и apply  сразу запускают фунцию, но для стрелочной функции они все не работают
// call - все аргументы передаются через запятую
// apply - все аргументы передаются через массив
// bind - делает копию

// user.arrowThis.call(user);
// user.arrowThis.bind(user)();

// ========Callback -фунции========

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Старый способ ввода
// const myMap = (arr, callback) => {
//     const result = [];
//     for (let element of arr) {
//         result.push(callback(element));
//     }
//     return result;
// }

// Новый способ - аналог.

// const variant1 = numbers.map((number) => number * 2);
// const variant2 = numbers.map((number) => number - 2);
// const variant3 = numbers.map((number) => number + 100);
// const variant3 = numbers.filter((number) => number > 5);


// Очень понятный пример callback функции:
// При передачи collback функции в виде аргумента теряется контекст

// function createTransaction (amount, onError, onSuccess, currency) {
// if(amount < 0) {
//     onError()
// }else {
//     onSuccess(amount)
// }
// }


// function error() {
//     console.log('Transaction failed')
// };

// function success(amount){
//     console.log(`Transaction successful. Amount: ${amount}`);
// }

// function USDsuccess(amount) {
//     console.log(`Transaction successful. Amount: ${amount} USD`)
// }

// createTransaction ('100 UAH', error, success.bind(user));
// createTransaction ('1000 USD', error, USDsuccess.bind(hotel));