// Напиши сумму всех четных чисел

const numbers = [1, 5, 8, 12, 4, 15, 27, 30, 18, 11];
let total = 0;

// for(const number of numbers) {
//     console.log(number);

//     if(number % 2 === 0){
//         console.log('Четное!!! ', number);
//     total += number;}
// }
// console.log('Total: ', total);


// Вариант выполнения от обратного:

for(const number of numbers) {
    console.log(number);

    if(number % 2 !== 0){
        console.log('Эту итерацию нужно пропустить! ',number);
    continue;
    }
    console.log('Четное!!! ',number);
        total += number;
    
}
console.log('Total: ', total);
