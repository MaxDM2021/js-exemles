// Array.prototype.reduce()
// Поэлеметно перебирает оригинальный массив
// Возвращает что угодно
// Заменяет все на свете, но использовать нужно с умом.
// reduce - уменьшать с англ.


// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//     console.log('number', number);
//     console.log('acc', acc);

//     return acc + number;
// }, 0);

// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25


// Необходимо подсчитать общую зарплату:

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
    // Callback функция
//     (total, value) => total + value, 
//     0);

// console.log(totalSalary);


// Нужно посчитать общее кол-во времени, которое потратили все игроки

// const players = [
//     {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
//     {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
//     {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false},
//     {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true},
//     {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: false},
// ];


// const totaltimePlayed = players.reduce((totaltime, player) => totaltime + player.timePlayed, 0 );

// console.log(totaltimePlayed);


// Нужно посчитать общую сумму покупок

// const cart = [
//     {label: 'Apples', price: 100, quantity: 2},
//     {label: 'Bananas', price: 120, quantity: 3},
//     {label: 'Lemons', price: 70, quantity: 4},
// ]

// 1-й вариант 

// const totalAmont =cart.reduce((totalBill, product) => totalBill + product.price * product.quantity, 0);
// console.log(totalAmont);

// 2-й вариан написания с применением деструктуризации:

// const totalAmont =cart.reduce((totalBill, {price, quantity}) => totalBill + price * quantity, 0);
// console.log(totalAmont);


// Coбираем все теги из твитов

// const tweets = [
//     {id: '000', likes: 5, tags: ['js', 'node js']},
//     {id: '001', likes: 2, tags: ['html', 'css']},
//     {id: '002', likes: 17, tags: ['html', 'js', 'node js']},
//     {id: '003', likes: 8, tags: ['css', 'react']},
//     {id: '004', likes: 0, tags: ['js', 'node js', 'react']},
// ]

// Правильно записать, сначала общий распылить, а потом к нему добавлять по очереди распыленый каждый массив
// const allTags = tweets.reduce((totalTags, tweet) =>  [...totalTags, ...tweet.tags], []);
// console.log(allTags)

// Нужно сделать объект, в котором теги сгрупированы и указано количество каждого из повторяющихся тегов 
// {
//     node js: 3,
//     js: 3,
//     react: 2
// }


// Если свойсвойство с ключом tag совпадают, увеличить его значение на 1
// Если свойства нет с таким ключом что в tag, сделать и записать 1


// Вариант 1: "Эта запись не совсем хороша, т.к. работаем с исходным объектом, а нужно с копией(надо распылить)"


// const tagsOrg = allTags.reduce((acc, tag) => {
//     console.log(acc)

//     if (acc[tag]){ 
//     acc[tag] += 1; 
//     return acc;
// }
//     acc[tag] = 1
//     return acc;
// }, {})
// console.log(tagsOrg);


// Вариант 2: Применяем распыление аккумулятора

// const tagsOrg = allTags.reduce((acc, tag) => {
//     console.log(acc)

//     if (acc[tag]){ 

// return {
//     ...acc,
//     // Свойство значения
//     [tag]: acc.tag + 1,
// };
//     }

//     return {
//         ...acc,
//         // Свойство значения
//         [tag]: 1,
//     };

// }, {});
// console.log(tagsOrg);

// Вариант 3: Применяем тернарник

// const tagsOrg = allTags.reduce((acc, tag) => acc[tag] ? {...acc, [tag]: acc.tag + 1,} : {...acc, [tag]: 1,

// }, {});
// console.log(tagsOrg);


// Вариант 3: Применяем тернарник - сокращенный вариант

// const tagsOrg = allTags.reduce((acc, tag) => ( {...acc, [tag]: acc[tag] ? acc[tag] + 1 :  1,}), {});
// console.log(tagsOrg);



// ====== еще пример =====

// Reduce всегда имеет аккумулятор  в котором что-то добавляется или изменяется.

function reduce(arr, cb, startValue) {
    const [firstArrayElement] = arr
    let acc = startValue ?? firstArrayElement

for (let i = 0; i < arr.length; i +=1){
const cbRes = cb(acc, arr[i], i, arr)
console.log('i', i, 'acc', acc)
acc = cbRes
}

return acc
}

const numbers1 = [2, 3, 4]

const reduceRes = reduce(numbers1, (acc, item, i, arr) => {
    console.log('acc', acc, 'item', item, 'i', i)
    return acc + item
}, 0)








