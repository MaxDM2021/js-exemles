// Задача 1

let balanse1;
let balanse2;

// console.log(balanse1 || 'no'); Оператор или падает на все falsy - значения (их 6 штук)
// console.log(balanse1 ?? balanse2); Налиш оператор ?? падает на null , underfinded


// * Создайте массив genres с элементами «Jazz» и «Blues».
// * Добавьте «Рок-н-ролл» в конец.
// * Выведите в консоль первый элемент массива.
// * Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// * Удалите первый элемент и выведите его в консоль.
// * Вставьте «Country» и «Reggy» в начало массива.

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-ролл");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift()); - .shift - выделяет первый элемент массива
// console.log(genres.unshift('«Country»', '«Reggy»')) - .unshift -добавляет в начало массива 
// console.log(genres);

 /**
  * TODO Example 2 - Массивы и строки
  * Напиши скрипт для вычисления площади прямоугольника со сторонами,
  * значения которых хранятся в переменной values в виде строки.
  * Значения гарантированно разделены пробелом.
  */

//  const values = '8 11';
//  const valuesarray = values.split(" ");
//  console.log(valuesarray);
// console.log(Number(valuesarray[0]) * Number(valuesarray[1]));

// * TODO Example 3 - Перебор массива
// * Напиши скрипт для перебора массива fruits циклом for.
// * Для каждого элемента массива выведи в консоль
// * строку в формате номер_элемента: значение_элемента.
// * Нумерация элементов должна начинаться с 1.
// */


// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
// console.log(i + 1, fruits[i]);
// }

// /**
//   * TODO Example 4 - Массивы и циклы
//   * Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
//   * В переменных names и phones хранятся строки имен и телефонных номеров,
//   * разделенные запятыми. Порядковый номер имен и телефонов в строках указывают
//   * на соответствие. Количество имен и телефонов гарантированно одинаковое

// const names = 'Максим,Дима,Петя,Коля';
// const phones = '0982366595,0961515258,0672524548,0660550252';

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for (let i = 0; i < namesArr.length; i += 1){
//     console.log(namesArr[i], phonesArr[i] )
// }

 /**
  * TODO Example 5 - Массивы и строки
  * Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
  * Результирующая строка не должна начинаться или заканчиваться пробельным символом.
  * Скрипт должен работать для любой строки.
  */

//  const string = 'Welcom    to the future';
//  const stringArr = string.split(' ').slice(1, -1).join(' ').trim(); 

//  console.log(stringArr);

  /**
  * TODO Example 6 - Массивы и строки
  * Напиши скрипт который «разворачивает» строку (обратный порядок букв)
  * и выводит ее в консоль.
  */



//    const string = 'Welcom to the future!';

   //  Можно через for
//   for (let i = string.length-1; i >= 0; i -= 1){
 
//  console.log(string[i]);
// }

// Вариант 2:
  
// const stringArr = string.split(' ').reverse().join(' '); 



/* Example 10 - Ввод пользователя и ветвления
* Напиши скрипт, который будет спрашивать логин с помощью 
prompt и логировать результат в консоль браузера.
*
* Если посетитель вводит "Админ", то prompt запрашивает пароль
* Если ничего не введено или нажата клавиша Esc - 
вывести строку "Отменено"
* В противном случае вывести строку "Я вас не знаю"
* Пароль проверять так:
*
* Если введён пароль "Я админ", то 
вывести строку "Здравствуйте!"
* Иначе выводить строку "Неверный пароль"
*/

// const userName = prompt('Your name?');

// if (userName.trim === "Админ"){
//     const userPasword = prompt('Your password?');
//     if (userPasword == "Я админ"){
//         console.log('Здравствуйте!') 
//     }else {
//         console.log("Неверный пароль");
//     }
// } else if (Boolean(userName) === false){
//     console.log('Отмена');
// }else {
//     console.log ("Я вас не знаю")
// }


// Вариант 2

// switch (userName.trim()) {
//     case 'Админ':
//         const password = prompt('Your password?')   
//         if (password === 'Я админ') {
//             console.log("Здравствуйте!")
//         } else {
//             console.log("Неверный пароль")
//         }
//         break;
//     case '':
//     case null:
//         console.log('Отменено')
//         break;
//     default:
//         console.log("Я вас не знаю")
// }


// Задача
// Написать цикл сортировки по возрастанию

const numbers = [2, 5, 1, 7, 9, 3]

for (let i = 0, endI = numbers.length - 1; i < endI; i += 1){
    console.log('=================');
    console.log('i', i, 'endI', endI)
    console.log('=================');
    // #1 ====
    // i === 0
    // endI === 5
    // #2 ====
      // i === 1
    // endI === 5
     // #3 ====
      // i === 2
    // endI === 5
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j += 1) {

        // #1 ====
      // j === 0
      // endJ === 5
        // #2 ====
      // j === 1
      // endJ === 4
       // #3 ====
      // j === 2
      // endJ === 3
      console.log('j', j, 'endJ', endJ);
      if (numbers[j] > numbers[j + 1]) {
        // Идет 
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
         wasSwap = true;
      }
}
if (wasSwap ===false) break;
console.log('=================');
}
console.log(numbers);


