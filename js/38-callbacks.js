// Функции обратного вызова (callback)

// Пример 1

const fnA = function (message, callback) {

console.log(callback);
callback(100);
};

const fnB = function (number) {

console.log('Это лог при вызове fnB', number);

};

fnA('qewqedqwe', fnB);

// Пример 2

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
}


// Вариант 1 задания функции
// const add = function (x, y) {
//     return x + y;
// }
//     const sub = function (x, y) {
//         return x - y;
// }

// doMath(2, 3, add);
// doMath(2, 3, sub);


// Вариант 2 задания функции

doMath(2, 3, function (x, y) {
    return x + y;
});
doMath(2, 3, function (x, y) {
    return x - y;
});


// Пример (Используется к примеру при регистрации событий.)

const buttonRef = document.querySelector('.js-button');



const handlBtnClick = function () {
    console.log('Клик по кнопке' + Date.now());
};


buttonRef.addEventListener('click', handlBtnClick);


// Отложенынй вызов геолокации

const onGetPositionSuccess = function (position) {

console.log('Это вызов onGetPositionSuccess');
console.log(position);
};

const onGetPositionError = function (error) {
    console.log(error);
}

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess, onGetPositionError,
);

// Oтложенный вызов: интервалы

const callback = function () {
    console.log('Через 3 секунды внутри колбека в таймауте');
}

console.log('в коде перед таймаутом');

// Cработает через 2000 милисекунд:
setTimeout(callback, 2000);

console.log('в коде после таймаута');


// Отложенный вызов: http-запрос



const onRequestSuccess = function(response) {
console.log ('Вызов функции onRequestSuccess после успешного ответа бекенда', );
console.log(response);
}

fetch('https://pokeapi.co/api/v2/pokemon')
.then(res => res.json())
.then(onRequestSuccess);


// console.log('перед fetch');
// console.log('после fetch');





// 1. Надо передать функцию;
// 2. Фунция получает элемент массива;
// 3. если элемент масива удовлетворяет условию то функция вернет true;
// 4. если элемент масива не удовлетворяет условию то функция вернет false;

// Фильтр массива, отобрать в отдельный массив с помощюь callback все числа больше 3-х и все числа больше 4-х




// Колбек функция "ФИЛЬТР"

const filter = function (array, test) {
    const filteredArray = [];

    for(const el of array){
        console.log(el);
        console.log(test(el));
        const passed = test(el);
if (passed){
    filteredArray.push(el);
}

}

    return filteredArray;
};


const callback1 = function(value){
    return value >= 3;
}

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function(value){
    return value >= 4;
}

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);
console.log(r2);




const fruits = [
    {name: 'apples', quantity: 200, isFresh: true},
    {name: 'oranges', quantity: 150, isFresh: true},
    {name: 'bananas', quantity: 100, isFresh: false},
    {name: 'pears', quantity: 50, isFresh: false},
]

const callback3 = function(fruit){
    return fruit.quantity >= 120;
}

const r3 = filter(fruits, callback3);
console.log(r3);