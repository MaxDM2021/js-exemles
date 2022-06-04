// Напишите фунцию calculateTotalPrice(item)  item - параметр
// которая принимает массив цен (чисел) и возвращает их сумму


// ==== В данном примере выполнено через for of:

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ' total);

// ==== В данном примере выполнено через function:

const calculateTotalPrice = function (items) {
    console.log ('items внутри функции: ', items);

    let total = 0;
    for (const item of items){
        total +=item;
    }
        return total;
   

}

const r1 = calculateTotalPrice([1, 2, 3]);


console.log(`Общая фунция покупок: ${r1}`);
console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([100, 200, 300]));