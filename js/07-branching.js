// Оператор ветвления if
// 

// Если if - true тело выполнится, если if -false тело игнорируется

if (5 > 1) {
// тело
console.log('sfsfs');
}
console.log ('дальше')

// Оператор ветвления if... else
// Если  If -true, выполняется тело, в противном случае выполняется иное значение else 

if (50 > 60) {
    console.log('x > y');
} else {
    console.log('x < y')
}

// Оператор ветвления else...if

const salary = 4000;

if (salary <= 500) {
    console.log('Уровень 1');
} else if (salary > 500 && salary <= 1500) {
    console.log('Уровень 2');
} else if (salary > 1500 && salary < 3000) {
    console.log('Уровень 3');}
    else {
        console.log('Уровень 4');
    }

    console.log ('adadaq')

    // Если все с помощью if делать то это не совсем правильно, будут все if проверяться,
    // а else if только то нахождения правильного варианта!!! 


    // Тернарный оператор

    const balanse = -1000;

    // Вариант черех if...else:

    // let message;

    // if (balanse >= 0) {
    //     message = 'Позитивный баланс';
    // } else {
    //     message = 'Негативный баланс';
    // }

    // Вариант более краткий через Тернарный оператор и если два варианта ответов:

const message = balanse >=0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log (message);

// Блочная область видимости переменных

// видимо то  что сверху и внутри, 
// не видноо то что внутри и ниже за пределом вложенности!!!
const b = 10;

if (true) {
    console.log (b);
const a = 5;
console.log (a);
}

console.log(b);

// еще раз для повтора, как пример блочной области видимости переменных

 let message1;

if (balanse >= 0) {
    message1 = 'Позитивный баланс';
    } else {
     message1 = 'Негативный баланс';
    }

    console.log (message1);