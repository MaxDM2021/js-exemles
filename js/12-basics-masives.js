// Базовые понятия о массивах:

// const friends =['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.log(friends.length);
// friends[1] = 'dsfsfsef'
//  вывод в виде таблицы:
// console.table(friends);

// const lastIndex = friends.length -1;
// console.log(lastIndex);
// console.log(friends[1]);


// let a =10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);
// Равны потому-что ведут на однуи туже ссылку
// console.log (a === b);
// Не равны потому-что ведут на разные ячейки и соответвенно разные ссылки
// console.log([1, 2, 3] === [1, 2, 3]);


// Перебор (итерация) массива

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// Примео for для того что-бы перебрать и изменить элементы!!
// for(let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += '-1'
// }

// console.table(friends);

// Пример for off, если не нужно изменять элементы, а просто перебать. выбираются элементы из массива в единственном числе,  :
for (const friend of friends) {
    console.log(friend);

}



