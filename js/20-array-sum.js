// Напиши скрипт, который считает сумму элементов двух массивов

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

// Объединение массивов, можно добавлять через запятую еще массивы:
const arraytot = array1.concat(array2);

let sum1 = 0;

for (let value of arraytot){
    console.log (value);
    sum1 += value;
}

console.log("Сумма1: ", sum1);



