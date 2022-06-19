
// forEach

// Array.prototype.forEach(calldack(currentValue, index, array), thisArg)
// Поэлементно перебирает оригинальный массив
// Ничего не возвращает
// Заменяет классический for, если не нужно прерывать цикл

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function(number, index, array) {
    console.log('number', number);
console.log (this)}, {a: 5, b: 10});

console.log(numbers);
