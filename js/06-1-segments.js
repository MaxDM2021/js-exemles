// Напиши скрипт, который проверяет вхождение числа
// в отрезок, обозначенный х1 и х2,

// - До х1
// - После х2
// От х1 до х2
// До х1 или после х2

const x1 = 10;
const x2 = 30;
const number = 20;

// - До х1:

console.log (`Число ${number} попадает в отрезок до ${x1}?`, number < x1 );

// - После х2:

console.log (`Число ${number} попадает в отрезок после ${x2}?`, number > x2 );

// От х1 до х2:

const res2 = number > x1  &&  number< x2;

console.log (`Число ${number} попадает в отрезок от ${x1} до ${x2}?`, res2);

// До х1 или после х2:

const res3 = number < x1 || number > x2;

console.log (`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, res3);
