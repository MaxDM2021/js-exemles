// Напиши скрипт поиска самого маленького числа в массиве, 
// при условии, что числа уникальные.


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let minNumber = numbers[0];

// for (let number of numbers) {
//     if(number < minNumber){
//     minNumber = number;
//     break;
// }
// }
// console.log('minNumber: ', minNumber);

// Тернарник не подойдет..


// Напиши скрипт поиска самого большого числа в массиве, 
// при условии, что числа уникальные.

const numbers = [51, 18, 13, 24, 7, 85, 19];
let maxNumber = numbers[0];

for (let number of numbers) {
    if(number > maxNumber){
    maxNumber = number;
    break;
}
}
console.log('maxNumber: ', maxNumber);