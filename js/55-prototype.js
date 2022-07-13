// Цепочки прототипов

// const objC = {
//     z: 5
// }

// const objB = Object.create(objC);
// objB.y = 2;


// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// objA.z = 1000;

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));


// ========

// const dumyObj = Object.create({ message: 'Это свойство объекта прототипа' });
// console.log('dumyObj', dumyObj);

// console.log(dumyObj.message);


// Алгоритм поиска свойст в цепочке прототипов:
// 1. Поиск начинается в собственных свойствах
// 2. Если свойства нет в собственных, поиск переходит к цепочке прототипов;
// 3. Поиск прекращиется при первом совпадении (есть такое свойство.)
// 4. Возвращается значение свойства


// =======

// const objA = Object.create({ x: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);

// ==== Функции-Конструкторы =====
// Название пишется с большой буквы (Car) в единственном числе.

// const Car = function ({ brand, model, price } = {}) {
    // Деструктуризация
    // const { brand, model, price} = config
// 2. Функция вызывается в контексте созданного объекта
// т.е. в this записывается ссылка на него.
    // this.brand = brand;
    // this.model = model;
    // this.price = price;

//3. В свойство this __proto__ записывается ссылка на объект Car.prototype
// т.е. Car.prototype - это ПРОТОТИП будущего объекта(экземпляра).

// 4. Ссылка на объект возвращается в место вызова new Car

    // this.changePrise = function (newPrice) {
    //     this.price = newPrice;
    // }


// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this)
//     console.log('Hello :) ')
// }

// Car.prototype.changePrise = function (newPrice) {
//     this.price = newPrice;
// }

// console.log(Car.prototype);


// 1. Если функция вызывается через оператор new, создается пустой объект
// Свойство prototype есть только у функции. 

// const myCar = new Car({
//     brand: 'Audi', 
//     model: 'Q3', 
//     price: 35000});
// console.log(myCar);
// myCar.sayHi();
// myCar.changePrise(1000);

// const myCar2 = new Car({brand: 'BMW', 
// model: 'X6', 
// price: 50000});
// console.log(myCar2);
// myCar2.sayHi();


// ===== Еще один пример на ПРОТОТИПЫ ====

const User = function ({email, password} = {}) {

this.email = email;
this.password = password;

};

User.prototype.changeEmail = function(newMail){
    this.email = newMail
}


const mango = new User({ email: 'mango@mail.com', password: 111111 });
console.log(mango);

mango.changeEmail('my-new-mail@mail.com');
console.log(mango)



// const myCar3 = new Car({ brand: 'Audi', 
// model: 'A6', 
// price: 65000 });
// console.log(myCar3);
// myCar3.sayHi();


// 1. У каждого объекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его прототип, т.е. другой объект
// 3. При создания литерала (объекта, функции) в свойство __proto__записывается ссылка на Функцию.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создается пустой объект в памяти.
// 7. Функция вызывается в контексте созданого объекта.
// 8. В свойство this. __proto__ записывается ссылка на объект Функция.prototype

// this = Object.create(User.prototype);
// 9. Ссылка на объект возвращается в место вызова new Функция()

// Статические свойства методы

console.log(mango);

User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
    console.log('User.logInfo -> obj', obj);
    console.log('Почта: ', obj.email);
    console.log('Пароль: ', obj.password);
};

User.logInfo(mango);

// console.dir(User);


// console.log(Math.round(5.1))
// console.log(Math.PI);








