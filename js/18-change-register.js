// Напиши скрипт, который заменяет регистр каждого символа в строке 
// на противоположный.

const string = 'JavaScript5';
const letters = string.split('');
let invertedSring = "";
console.log (letters);

for (const letter of letters){
// console.log(letter);
// Вариант 1 олдскул:

// if (letter === letter.toLowerCase()){
//     console.log('Эта буква в нижнем регистре!!! - ', letter);

//     invertedSring += letter.toUpperCase();
// } else {
//     console.log('Эта буква в верхнем регистре!!! - ', letter);
//     invertedSring +=letter.toLowerCase();
// }

// Вариант 2 через тернарник:
const isEqual = letter === letter.toLowerCase();
invertedSring += isEqual  ? letter.toUpperCase() : letter.toLowerCase();
}

console.log('invertedSring: ', invertedSring);

