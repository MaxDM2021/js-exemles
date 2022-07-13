
// Задача №5
// === Метод call === берет функцию на которой вы его вызвали принудительно в этой жестроке вызывает в контексте
// этого же объекта
// === Метод call === позволяет взять произвольную функцию и принудительно вызвать в контексте какого-то объекта
// При этом this ссылается на на этот объект(objA или objB)

// const showThis = function(a, b, c) {
//     console.log(a, b, c);
//     console.log('showThis -> this', this);
// }

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 5, 1, 4);
// === Метод Apply ==== почти тоже самое что и call только аргументы надо передавать в виде массива [5, 1, 4, 5]
// showThis.apply(objA, [5, 1, 4]);


// const objB = {
//     a: 45,
//     b: 166,
// };

// showThis.call(objB, 55, 44, 67, 75);


const changeColor = function(color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
}

// changeColor.call(hat, 'orange');

// console.log(hat);

const sweater = {
    color: 'green',
}

// changeColor.call(sweater, 'blue');
// console.log(sweater);


// ==== Метод bind ===
// Делает копию функции
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);


changeHatColor('yellow');
console.log(hat);

changeSweaterColor('red');
console.log(sweater);


// При передачи метода объекта как колбека контекст не сохраняется!, но при 
// использовании bind функция копируется с привязанным контекстом и все работает нормально!!

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function(value, operation) {
    operation(value);
};

// This при вызове будет underfined
updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));




