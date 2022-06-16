/**
 * Example 1 - Основы обьектов
 * Напиши скрипт, который, для объекта user, последовательно:
 * добавляет поле mood со значением 'happy'
 * заменяет значение hobby на 'skydiving'
 * заменяет значение premium на false
 * выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 */

// const key = prompt('Please type a object key')

//  const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//     'Denis Mescheryakov': 'Hello'
// };

// user.mood = 'happy';
// user['hobby'] = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);

// Квадратные скобки используются для обращения к динамически изменяемому ключу
// console.log(user[key]);

// Метод for of используется в связке с const keys = Object.keys(user);
// for (let key of keys) {
//     console.log(user[key]);
// }
    
// Метор for in
// for (let key in user){
//     console.log(key)
// }

// /**
//  * Example 2 - метод Object.values()
//  * У нас есть объект, в котором хранятся зарплаты нашей команды. 
//  * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. 
//  * Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
//  */

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };


// let total = 0;

// Метод 1 через for in
// for (let key in salaries){
//     console.log(salaries[key]);
//   total += salaries[key];
 
//   }
//   console.log(total);

// const values = Object.values(salaries);
// for(let value of values){
//     total += value;
// }

// console.log(total);

/**
 * Example 3 - Массив объектов
 * Напишите ф-цию calcTotalPrice(stones, stoneName), 
 * которая принимает массив обьектов и строку с названием камня. 
 * Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
 */

//  const stones = [
//     { name: 'Изумруд', price: 1300, quantity: 4 },
//     { name: 'Бриллиант', price: 2700, quantity: 3 },
//     { name: 'Сапфир', price: 400, quantity: 7 },
//     { name: 'Щебень', price: 200, quantity: 2 },
// ];


// function calcTotalPrice(stones, stoneName = " "){
//     // проверка масив это или нет с помощью Array.isArray(stones)
// if (Array.isArray(stones) === false) return 'Error';
// // Проверка если нет имени в списке
// if (!stoneName) return 'Error';

// let total = 0;

//    for (let stone of stones) {
// console.log(stone);
// if (stone.name === stoneName){
//     total = stone.price * stone.quantity;
//    break
// }
    
//    }
//    console.log(`Камень ${stoneName}, общая цена ${total}`);
// return total;
// }

// const res = calcTotalPrice(stones, 'Саssssфир');
// console.log(res);


// * Example 4
// * Реализуйте функцию `compare(firstNumber, secondNumber, operation, result)`, которая
// * - производит операцию `operation` над числами `firstNumber` и `secondNumber`
// * полученное число сравнивает с переменной `result`
// * возвращает результат этого сравнения.
// * 
// * compare("1", "2", "+", "3"); // true
// * 
// * Ограничения на входные данные
// * `firstNumber`, `secondNumber`, `result` - могут быть как типа Number так и String. 
// * Переменные типа String при преобразовании к числовому формату всегда будут валидным числом.
// * `operation` - строка c одной из 4 математических операций: +,-,*,/
// */

function compare(firstNumber = 0, secondNumber = 0, operation = "+", result = 0){

    
 const num1 = Number(firstNumber);
 const num2 =Number(secondNumber);
 const res = Number(result);

const operationsDic = {
    '+': function(a, b) { return a + b },
    "-": function(a, b) { return a - b },
    "*": function(a, b) { return a * b },
    "/": function(a, b) { return a / b },
}

// console.log(operation in operationsDic)
// console.log(operationsDic[operation]);
if((operation in operationsDic) === false) return 'Error'
//  To do cheack operators
if (isNaN(num1) || isNaN(num2) || isNaN(res)) return 'ERROR';

const operationResult = operationsDic[operation](num1, num2)

return operationResult === res

 

//  Вариант 1 через if
//  if(operation === "+")
//  return num1 + num2 === res; 
 
 //  Вариант 2 через swich
//  switch(operation) {
//     case '+':
//         return num1 + num2 === res
//  }

// Вариант 3 через функцию



}

const res = compare("2", "2", "*", "4");
console.log(res);

