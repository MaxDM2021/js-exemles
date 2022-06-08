// Функции

// Нужно определить найменьшее из чисел:

// function min(a, b) {
// const num1 = Number(a);
// const num2 = Number(b);

// if (isNaN(num1) || isNaN(num2)) return 'Должно быть число'

// return Math.min(num1, num2);
// }

// const res1 = min(1, 3)
// const res2 = min('sfdscsfs', -1)
// console.log(res1);
// console.log(res2);

/**
 * Example 3 - Логирование элементов
 * Напиши функцию logItems(items), которая получает массив и использует цикл for, 
 * который для каждого элемента массива будет выводить в консоль сообщение 
 * в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
 * 
 * Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] 
 * с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
 * 
 */

// function logItems(arr){
//     // Проверяем, массив ли это
// if(Array.isArray(arr) === false) return 'Должен быть массив';
// if(arr.length === 0) return;

// for (let i = 0; i < arr.length; i += 1){
//     console.log(i + 1, arr[i]);
// }

// }

// const items = ['Mango', 'Poly', 'Ajax']

// logItems(items)


/**
 * Example 4 - Среднее значение
 * Напишите функцию calAverage() которая принимает произвольное кол-во аргументов
 * и возвращает их среднее значение. 
 * Все аругменты будут только числами.
 */

// function calAverage(){

//     if(arguments.length === 0) return;

//     let sum = 0;

//     for (let i = 0; i < arguments.length; i += 1){
//         sum +=arguments[i]
//     }

// Или можно использовать for of:

// for (let num of arguments) {
//     sum += num
// }

//     return sum / arguments.length;

// }

// console.log(calAverage(1, 2, 3, 44, 55, 67));



/**
 * Example 5 - Коллекция курсов (includes, indexOf, push и т. д.)
 * Напишите функции для работы с коллекцией обучающих курсов courses:
 * addCourse(name) - добавляет курс в конец коллекции
 * removeCourse(name) - удаляет курс из коллекции
 * updateCourse(oldName, newName) - изменяет имя на новое
 */

 const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

 function addCourse(name) {
if (name.length === 0) return 'Должен быть рядок'
if (courses.includes(name)) return 'Уже есть в коллекции'

courses.push(name)
console.log(courses)

return courses;
}
 
// addCourse('VUE');


 function removeCourse(name) {

    if (name.length === 0) return 'Должен быть рядок'
    if (!courses.includes(name)) return 'Нет в коллекции'
// Определяем индекс
    const index = courses.indexOf(name);
// Удаляем с позиции index один параметр
    courses.splice(index, 1)
    console.log(courses);

    return courses
 }
//  removeCourse('HTML') 

 function updateCourse(oldName, newName) {
    if (oldName.length === 0 || newName.length === 0 ) return 'Должен быть рядок'
    if (!courses.includes(oldName)) return 'Нет в коллекции'
// Определяем индекс
    const index = courses.indexOf(oldName);
    // Удаляем с позиции index один параметр и добавляет newName 
    courses.splice(index, 1, newName)
    console.log(courses);

    return courses
 }

 updateCourse('HTML', 'HTML2')

