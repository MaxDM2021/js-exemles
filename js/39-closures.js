// Замыкание
// Функция результатом своей работы может возвращать другую функцию.

// Возвращаемая функция во время вызова будет иметь доступ 
// ко всем локальным переменным (области видимости)
// родительской функции (той из которой ее вернули),
// это называется "замыкание".

const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

const innerFunction = function() {
    console.log(parameter);
    console.log(innerVariable);
    console.log('Это вызов innerFunction');
}

return innerFunction;

};

const fnB =fnA(555);

fnB();

console.log(fnB);

// Пример поваренок

// const makeDish = function (shefName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`);
    }
    return makeDish;
}

const mango = makeSheff('Mango');

console.dir(mango);

mango('котлеты');
mango('пирожок');


const poly = makeSheff('Poly');

console.dir(poly);

poly('сырники');
poly('компот');



// Округлятор

// Обычный способ

// const floatingPoint = 3.456789;
// const someInt =Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const number1 = 3.6678;
// const number2 = 4.1234;
// console.log(Number(number1.toFixed(3)));
// console.log(Number(number2.toFixed(4)));


// Через замыкание


const rounder = function(places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};


const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.dir(rounder2);

console.log(rounder2(3.4567));
console.log(rounder3(3.4567));
console.log(rounder3(5.12345));
console.log(rounder3(4.333444));


// Обезопасить доступ к данным

// Пример 1

const myLibFactory = function () {

let value = 0;

const add = function (num){
    value += num;
};

return {
    add: add,
    getValue(){
        return value;
    },
};

};

const myLib = myLibFactory();

console.dir(myLib.getValue);

console.log(myLib);
console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue());

// Пример 2 (нет доступа к ЗП)

const salaryManagerFactory = function (employeeName, baseSalary = 0) {

let salary = baseSalary;

return {
    raise(amount) {
        if(amount > 1000){
            return 'Ты офигел?';
        }
        salary += amount;
    },
    lower(amount) {
        salary -= amount;
    },
    current() {
        return `Текущая зарплата ${employeeName} - ${salary}`;
    },
};
};

const salaryManager = salaryManagerFactory('Mango', 5000);
// underfined - нет доступа
console.log(salaryManager.salary);

console.log(salaryManager.current());


console.log(salaryManager.raise(1000000));



