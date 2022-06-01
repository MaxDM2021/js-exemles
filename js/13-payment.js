// Посчитать общую сумму покупок в корзине

const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;

// 1. Перебрать массив
// 2. Сделать переменную total до цикла
// 3. Каждый элемент приплюсовать к total 

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//    total = total + cart[i];
// }
// console.log('Total: ',total);

// второй вариант использовать for of (значительно меньше кода!!):

// for (const value of cart) {
//     total += value;
// }
// console.log('Total: ', total)

// Если нужно к каждой покупке добавить 20% налога
// Выполняется только через  for i
for (let i = 0; i < cart.length; i += 1) {
    cart[i] = Math.round(cart[i] * 1.2);
}
console.log(cart);

