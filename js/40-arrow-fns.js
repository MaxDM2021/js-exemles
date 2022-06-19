// Стрелочные функции
// Объявление
// Явный и неявный возврат
// Аргументы
// Неявный возврат объекта

// const add = function(a,b,c) {
// console.log(a, b, c);
// return a + b + c;
// }

// console.log(add(5, 10, 15))



// Если параметр 2 и больше значения, скобки обязательны
// const addArrow = (a, b, c) => {
//     console.log(a, b, c);
//      return a + b + c;
// }

// Если параметр 1, скобки можно пропустить
// const addArrow = a => {
//     console.log(a, b, c);
//      return a + b + c;
// }



// Если параметра вообще нет, пустые  скобки обязательны
// Тут есть return, это - явный возврат (explicit)!
// const addArrow = () => {
//     console.log(a, b, c);
//      return a + b + c;
// }
// Если в теле функции одна команда, пишем сразу команду, без скобок, 
// Это - неявный возврат (implicit)!
// const addArrow = (a, b, c) => a + b + c;

// console.log(addArrow(5, 10, 15))


// Через сбор в массив

//    const addArrow = (...args) => {
//         console.log(args);
//         //  return a + b + c;
//     }

//     console.log(addArrow(5, 10, 15));



// const showThis = () => {
//     console.log('this in showThis:' this);
// };

// showThis(); 

// const user = {name: 'Mango'};
// user.showContext = showThis;

// user.showContext();



// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// console.log(fnA());

// // Нужно применять круглые скобки, т.к. если оставить фигурные -функция воспринимает как команду
// const arrowFnA = () => ({ arrowA: 5,});

// console.log(arrowFnA());

// Гелокация

// const onGetPositionSuccess =  (position) => {

//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);
//     };
    
//     const onGetPositionError =  (error) => {
//         console.log(error);
//     }
    
//     window.navigator.geolocation.getCurrentPosition(
//         onGetPositionSuccess, onGetPositionError,
//     );


    // Инлайн


    // const filter = (array, test) => {
    //     const filteredArray = [];
    
    //     for(const el of array){
    //         console.log(el);
    //         console.log(test(el));
    //         const passed = test(el);
    // if (passed){
    //     filteredArray.push(el);
    // }
    
    // }
    
    //     return filteredArray;
    // };
    
    

    
    
    // const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
    // console.log(r1);
    
  
    
    // const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], value => value >= 4);
    // console.log(r2);
    
    
    
    
    // const fruits = [
    //     {name: 'apples', quantity: 200, isFresh: true},
    //     {name: 'oranges', quantity: 150, isFresh: true},
    //     {name: 'bananas', quantity: 100, isFresh: false},
    //     {name: 'pears', quantity: 50, isFresh: false},
    // ]
    
    // const r3 = filter(fruits, fruit => fruit.quantity >= 120);
    // console.log(r3);



    // стрелка выводит значение родительской фунции
    // const user = { 
    //     fullName: 'Mango',
    //     showName(){
    //         console.log('this: ', this);
    //         console.log('this.fullName: ', this.fullName);

    //         const inner = () => {
    //             console.log('this in inner: ', this);
    //         };
    //         inner();
    //     },
    // };

    // user.showName();

    // Ограничения, никогда не используйте стрелки как стрелки как методы объекта

    // const user = {
    //     fullName: 'Mango',
    //     // Так делать нельзя
    //     showName: () => {
    //         console.log('this: ', this);
    //         console.log('this fullName: ', this.fullName);
    //     },
    // };

    // user.showName();


// Стрелка  не конструктор

    // const User = function(name) {
    //     this.name = name;
    // }

    // console.log(new User('Mango'));

// Так делать нельзя:

// const User = name => {
//     this.name = name;
// }

// console.log( User('Mango'));


// const objA = {
//     x: 5,
//     showX() {
//     console.log('this в objA.showX: ', this);
//     console.log(this.x);
    
//     const objB = {
//     y: 10,

//     // Так делать нельзя!
//     //  showThis: () => {} 
//     showThis() {
//         console.log('this в objB.showThis: ', this);
//     },
// };
// objB.showThis();
// },
// };
// objA.showX();

// Пример стрелок:

const numbers = [1, 2, 3, 4, 5, 6];

const greaterThenTwo = numbers.filter(num => num > 2)

console.log(greaterThenTwo);

const multByTwo = greaterThenTwo.map(num => num * 3)

console.log(multByTwo);

const sorted = multByTwo.sort ((a, b) => a - b)

console.log(sorted);

// Что было
// const res = numbers
// .filter(function(num) {return num > 2})
// .map(function(num) { return num * 3})
// .sort(function(a,b) {return a - b});

// console.log(res);

// Что стало
const res = numbers
.filter(num =>  num > 2)
.map(num =>  num * 3)
.sort((a,b) =>  a - b);

console.log(res);

// Если нужно вернуть объект:

// Что было
// const onlineAndSorted = players
// .filter(fuction(player) { return player.isOnline})
// .sort(function(prevPlayer, nextPlayer {return prevPlayer.rank - nextPlayer.rank});

// Что стало
const onlineAndSorted = players
.filter(player => player.isOnline)
.sort((prevPlayer, nextPlayer) =>  prevPlayer.rank - nextPlayer.rank);



// Что было:
const updatePlayers = players.map(function (player) {return {...player, points: player.points + player.points * 0.1,
};
});

// Что стало
const updatePlayers = players.map(player => ({...player, points: player.points + player.points * 0.1,}));

// Что было

const updatePlayers = players.map(function(player) {
    if (player.id ===playerIdToUpdate) {
        return {
            ...player,
            timePlayed: player.timePlayed +50,
        };
    }
    return player;
});

console.table (updatePlayers);

// Что стало

const updatePlayers = players.map(player =>
player.id === playerIdToUpdate  
   ? {...player, timePlayed: player.timePlayed +50}
   : player,);

console.table (updatePlayers);



