
// Псевдомассив arguments и Array.from и ....

// Задача: Напиши функцию add для сложения произвольного количества аргуметнов (чисел)

// ========Вариант 1

// const fn = function() {
    
// // Образование псевдомассива arguments
// console.log(arguments);

// //Преобразование с помощью  Array.from псевдомасиива arguments в массив
// const args = Array.from(arguments);

// console.log(args);

// }

// fn(5, 10, 15, 20);
// fn(10, 20, 30);
// fn(10, 20);


// ==========Вариант 2

// С помощью с помощью a b c оставляем выбранные переменные, остальные переменные с помощью 
//  ...args переводим  в массив

// const fn = function(a, b, c, ...args){
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// }

// fn('hello', 5, 10, 15, 20);
// fn('hi', 10, 20, 30, 40, 45, 3, 8);
// fn('aloha', 10, 20, 50, 23, 45);


// Задачка 1

// Переводим с помощью ...args переменные в массив:
// const add = function(...args){
//     console.log(args);

// let total = 0;

// for (const arg of args) {
//     total += arg;
    
// }
// return total;


// }

// console.log(add(5, 10, 15, 20));
// console.log(add(10, 20, 30, 40, 45, 3, 8));
// console.log(add(10, 20, 50, 23, 45));


// Задачка 2

// Напиши функцию filterNumbers(array [, number1, ...]) которая:
// - Первым аргументом принимает массив чисел
// - После первого аргумента может быть произвольное количество других аргументов, которые будут числами.
// - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
//   для которых есть аналог в оригинальном массиве.

// Этот метод применим только для чисел

const filterNumbers = function(array, ...args) {

    // Переводим из подмассива в массив с помощью array:
    console.log('array: ', array);

    // Переводим переменные в массив с помощью args:
    console.log('args: ', args);

    const uniqueElements = [];

    for (const element of array) {
        // Проверяю есть ли в args element, если  ответ true, тогда выскакивает ответ "есть везде!" 
       if(args.includes(element)){
       uniqueElements.push(element);

       console.log(`${element} есть везде!`);
    }
    }
return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8 ));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

























// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// // Объединение массивов, можно добавлять через запятую еще массивы:
// const arraytot = array1.concat(array2);

// let sum1 = 0;

// for (let value of arraytot){
//     console.log (value);
//     sum1 += value;
// }

// console.log("Сумма1: ", sum1);


// Моя неправильная версия

// const arrayTotal = array1.concat(array2);
// let sum1 = 0;
// for (let value of arrayTotal) {
//     console.log(value);
//     sum1 += value;
    
// }
// return sum1;