// Цикл for
// for (initialisation; condition; post-expression) (инициализация; условие; пост-выражение)
// i +=1 это все равно что i = i + 1
// i -=3 это уменьшение с шагом 3 i = i - 3

// for (let i = 0; i <= 5; i += 1) {
//     // Тело цикла
//     console.log(i);
// }

// console.log('qqddwq')


// Pre-increment и Post-increment, лучше их не использовать!!
// i++ это аналог i = i + 1
// 

// for (let i=0; i <= 10; i++) {
//     console.log(i);
// }

// let a = 10;
// // Pre-increment
// const b = ++a;
// // Post-increment
// const b = a++

// console.log(a);
// console.log(b);


// Напиши скрипт, который подсчитывает общую сумму зарплат работников.
// Кол-во работников хранится в переменной employees.
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

// 1. Сделать переменные
// 2. Перебрать работников в цикле
// 3. Сгенерить случайную зп
// 4. Прибавить к total
// 5. Лог


// // 1. Сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0;

// // 2. Перебрать работников в цикле
// for (let i = 1; i <= employees; i +=1) {

// // 3. Сгенерить случайную зп
//     const salary = Math.round( Math.random()*(maxSalary - minSalary) + minSalary,);
     
//     console.log(`ЗП работника номер ${i} - ${salary}`);

// // 4. Прибавить к total
//      totalSalary += salary;
//      }
// // 5. Лог
//      console.log('totalSalary:', totalSalary)

    //  Задача 2
    // Напиши срипт, который подсчитывает сумму всех четных чисел, 
    // которые входят в диапазон чисел в переменных от min  до max.
    // Например, если min=0 и max=5, то диапазон 0-5, и в нем два четных числа - 2 и 4, их сумма 6. 


    // 1. Задаем переменные
    // 2. Перечисляем все числа от min до max
    // 3. Проверяем остаток от деления, т.е. вычмисляем где четные числа
    // 4. Пишем в сумму



 // 1. Задаем переменные
    const min = 1;
    const max = 10;
    let total = 0;
// // 2. Перечисляем все числа от min до max
//     for (let i=min; i <= max; i +=1 ) {
//         // console.log(i);
// // 3. Проверяем остаток от деления, т.е. вычмисляем где четные числа
//         if (i % 2 === 0){
//             console.log('четное: ', i);
//         }
// // 4. Пишем в сумму
// total += i;
//     }
//     console.log ('total: ', total);

    // Вариант 2 решения задачи отталкиваемся от обратного:
    for (let i=min; i <= max; i +=1 ) {
        if (i % 2 !==0) {
            console.log('Не четное: ', i);
            continue;
        }
        console.log('чётное: ', i);
        // total = total +i :
        total += i;
    }

    console.log('total: ', total);


