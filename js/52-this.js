// // false
// console.log('[] === []:', [] === []);
// // false
// console.log('{} === {}:', {} === {});
// // false
// console.log('function() {} === function() {}:', function() {} === function() {});

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// // true
// console.log('fnB === fnA:', fnB === fnA);

// Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст
// Контекст определяется в МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.

// Как метод объекта. В контексте объекта

// В данном примере this ссылается на user

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };
// user.showTag();



// Вызов без контекста

// Если в скрипте стоит type="module"(строгий режим) - this будет выдавать underfined, 
// Если удалить type="module"(нестрогий режим) - this будет выдавать window

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();


// ======= Как метод объекта, но объявлена как внешняя функция.
// В контексте объекта

//Значение this определилось в 66-й строке! не раньше
// Не важно где объявил, важно где и в каком контексте вызвал.
// This будет ссылаться на user во время вызова

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// }

// showTag()

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();


// ======= Вызов без контекста, но объявлена как метод объекта

// const user1 = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user1.showTag();
// const outerShowTag = user1.showTag;

// // В этом случае this будет underfined
// outerShowTag();


// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);
// // this примет значение underfined (см.скрин 3)
//     action();
// };

// invokeAction(user.showTag);


// ======Задачки небольшие

// Задачка №1
// const fn = function () {
//     console.log('fn -> this', this)
// }
// // This - примет значение underfined
// fn();

// Задачка №2
// const book = {
// title: 'React for beginners',
// showThis() {
//     console.log('showThis -> this', this);
// },
// showTitle(){
//     console.log('showTitle -> this', this.title)
// },
// };
// // This - примет значение book
// book.showThis();

// const outerShowThis = book.showThis;
// // This - примет значение underfined
// outerShowThis()

// const outerShowTitle = book.showTitle;
// outerShowTitle();

// Задачка №3

// const makeChangeColor = function() {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         this.color = color;
//     };
//     const sweater = {
//         color: 'teal',
//     };
// sweater.updateColor = changeColor;

// // This - будет принимать значение sweater
// sweater.updateColor('red');

// return sweater.updateColor;

// }
// // This - будет принимать значение underfined
// makeChangeColor()


// const swapColor = makeChangeColor();
// // This - будет принимать значение underfined
// swapColor('blue');


//  Задачка №4

// const makeChangeColor = function() {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
        
//     };
// return changeColor;

// }

// const updateColor = makeChangeColor();
// // This будет underfined
// updateColor('yellow');

// const hat = {
//     color: 'blue',
//     updateColor,
// }

// // This будет co значением hat
// hat.updateColor('orange');
// console.log(hat);


// Задача №5
// При передачи метода объекта как колбека контекст не сохраняется!!!

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function(value, operation) {
//     operation(value);
// };

// // This при вызове будет underfined
// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);







