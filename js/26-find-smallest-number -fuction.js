//  Напиши функцию findSmallestNumber(numbers) для поиска самого маленького числа в массиве
// при условии, что числа уникальные (не повторяются);


// ====1-й вариант решения через for of

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber){
//         smallestNumber = number;
//     }
    
// }

// console.log('smallestNumber: ', smallestNumber);

// ====1-й вариант решения через function и for of


const findSmallestNumber = function (numbers){
    let smallestNumber = numbers[0];
    
    for (const number of numbers) {
        if (number < smallestNumber){
            smallestNumber = number 
        }
    }
    return smallestNumber;
};
console.log(findSmallestNumber([3, 5, 6, 7, 8, 9, 1, 4]));
console.log(findSmallestNumber([3, 5, 24, 6, 8, 9, 2, 4]));
console.log(findSmallestNumber([3, 5, 6, 7, 8, 9, 4]));
console.log(findSmallestNumber([3, 5, 24, 2, 4]));
