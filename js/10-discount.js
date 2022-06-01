// Напиши скрипт подсчета суммы покупки со скидкой в зависимости от
// потраченной суммы за все время (партнерская программа).

// - Общая сумма потраченного хранится в переменной totalSpend
// - Cумма текущего платежа хранится в переменной payment
// - Скидка хранится в переменной discount

// - если потрачено от [100 до 1000) - бронзовый партнер, скидка 2%
// - если потрачено от [1000 до 5000) - серебрянный партнер, скидка 5%
// - если потрачено больше [5000 - золотой партнер, скидка 10%
// - если потрачено меньше 100 - не партнер, скидка 0%

// В результате вывести сообщение
// "Оформляем заказ на сумму [сумма] со скидкой [скидка]%"




// Вариант1 Саши Репеты, верный

// const totalSpend = 4000;
// let payment = 500;
// let discount = 0;

// if (totalSpend < 100) {
//     console.log ('не партнер, скидка 0%')
//     discount = 0;}

// else if(totalSpend >=100 && totalSpend < 1000) {
//     console.log ('бронзовый партнер, скидка 2%')
//     discount = 0.02;

// } else if (totalSpend >=1000 && totalSpend < 5000) {
//     console.log ('серебрянный партнер, скидка 5%')
//     discount = 0.05;
// }  else  {
//     console.log ('золотой партнер, скидка 10%')
//     discount = 0.1;}

// console.log(`офрмляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);


// Вариант2 Саши Репеты, тоже верный, остаток до 100 в конец под else ставим

let totalSpend = 2200;
let payment = 500;
let discount = 0;

 if (totalSpend >=100 && totalSpend < 1000) {
    console.log ('бронзовый партнер, скидка 2%')
    discount = 0.02;

} else if (totalSpend >=1000 && totalSpend < 5000) {
    console.log ('серебрянный партнер, скидка 5%')
    discount = 0.05;
}  else if (totalSpend >5000) {
    console.log ('золотой партнер, скидка 10%')
    discount = 0.1;}
    else {
        console.log ('не партнер, скидка 0%')
    }
    
    payment -= payment * discount;

console.log(`офрмляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

totalSpend += payment;

console.log(`Общая сумма потраченная в магазине ${totalSpend}`);


















// Моя версия не совсем верная, немного другие условия:

// let totalBalanse = 9000;
// let payment = 200;
// let discount = 0;

// console.log(`Ваш баланс ${totalBalanse}`);

// if (payment < 100) {
//   discount = 0;
//   console.log(`не партнер, скидка ${discount}%`);
//   totalBalanse -= payment;
// } else if (payment >= 100 && payment < 1000) {
//   discount = 0.02;
//   console.log(`бронзовый партнер, скидка ${discount * 100}%`);

//   payment = payment - payment * discount;
//   totalBalanse -= payment;
// } else if (payment >= 1000 && payment < 5000) {
//   discount = 0.05;
//   console.log(`серебрянный партнер, скидка ${discount * 100}%`);

//   payment = payment - payment * discount;
//   totalBalanse -= payment;
// } else if (payment >= 5000) {
//   discount = 0.1;
//   console.log(`золотой партнер, скидка ${discount * 100}%`);
//   payment = payment - payment * discount;
//   totalBalanse -= payment;
// }


// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
// );
// console.log(`Ваш платеж составит ${payment}`);
// console.log(`Ваш остаток на счету составит ${totalBalanse}`);




