const aple = 100;
const grapes = 50;

const total = aple + grapes;

console.log(total);

const diff = aple - grapes;

console.log(diff);


let students = 132;
students += 10;

console.log(students);

// Приоритет оператора:

const result = 100 + 223 - 2 * 5;
console.log(result);

const value = 25.8;

//Класс Math.floor - округление в нижнюю сторону
// Класс Math.ceil - округление в верхнюю сторону
// Класс Math.round - округление по стандартному принципу

const valuemath = 25.5; 
console.log(Math.floor(valuemath));
console.log(Math.ceil(valuemath));
console.log(Math.round(valuemath));

// Шаблонные строки
// Нужно составить фразу с помощью наблонных строк

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const sum = repairBots + defenceBots;
// Cyberdyne Systems has 200 bots in stock

const str = companyName + " " + "has" + " " + sum + " " + "bots in stock";
console.log(str);

const str2 = `${companyName} has ${sum} bots in stock`;
console.log(str2);


// Рачет индекса масса тела, есть ошибка запятая и точка, запятые должны переобразоваться в точку


const weight = '88,7';
const height = '1.75';

// const weightCom = weight.indexOf(',');
// const weightFirstPart = weight.slice(0, weightCom);
// const weightLastPart =  weight.slice(weightCom + 1);
// console.log(`${weightFirstPart}.${weightLastPart}`);


// replace, replaceAll
// Замена запятой на точку

const fixedWeight = weight.replace(',', ".");
const fixedHeight = height.replace(',', ".");

const weightNum = Number(fixedWeight);
const heightNum = Number(fixedHeight);

console.log (weightNum);
console.log (heightNum);

// Math.pow(heightNum, 2) - квадрат высоты
// .toFixed(2) - обрезание после 2-го числа после запятой, но при этом переводит в строку, 
// нужно через Number перевести обратно в число.

const bmi = (weightNum / Math.pow(heightNum, 2)).toFixed(2);

console.log(Number(bmi));

// console.log(5 > 4);
// Ответ true

// console.log(10 >= '7');
// Ответ true

// console.log('2' > '12');
// Ответ true (В строках учитывается первая цифра и сравнивается, получается 2>1);

// console.log('2' < '12');
// Ответ false (В строках учитывается первая цифра и сравнивается, получается 2>1);

// console.log('4' == 4);
// Ответ true (т.к. нестрогое равенство 4=4);

// console.log('6' === 6);
// Ответ false (т.к. строгое равенство проверяются типы);

// console.log(1 == true);
// Ответ true (1=1);

// console.log(1 === true);
// Ответ false (т.к. строгое равенство проверяются типы);

// console.log('0'== false);
// Ответ true (0=0);

// console.log('0'=== false);
// Ответ false (т.к. строгое равенство проверяются типы);

// console.log('Papaya' < 'papaya');
// Ответ true  (Если проверить через 'Papaya'.charCodeAt(0) результат будет 80, 'papaya'.charCodeAt(0) результат будет 112)

// console.log('Papaya' === 'papaya');
// Ответ false

// console.log(underfined === null);
// Ответ true (0=0)

// console.log(underfined ==== null);
// Ответ false



// Логические операторы

// &&- запинается на false, - это 0, false, null, udefined, “”, NaN 
// || - запинается на true - это циифры все кроме нуля  и строки кроме пробелов ;

// console.log (true && 3);
// Ответ 3 - (операется на последнее значение если true)

// console.log (false && 3);
// Ответ false - (операется запинается false )

// console.log (true && 4 && 'kivi');
// Ответ kivi - (операется на последнее значение если все true)

// // console.log ('Poly' &&  'Mango');
// Ответ 'Мango' - (операется на последнее значение если все true)

// console.log (true && 0 && 'kivi');
// Ответ 0 - (операется запинается на 0, а это false )

// console.log (true || 3)
// Ответ true (при значении "или" всегда запинается на true);

// console.log (true || 3 || 4)
// Ответ true

// console.log (true || false || 7)
// Ответ true

// console.log (0 || " " || false)
// Ответ true (при значении "или" если нет true спукает к последнему значению);

// console.log(null || 2 || uderfined);
// Ответ 2

// console.log(1 && null && 2) > 0);
// Ответ true

// console.log(1 && null && 2) > 0);
// Ответ false (null > 0 -нет, 0 = 0);

// console.log(null || (2 && 3)) || 4);
// Ответ 3 ((2 && 3) => 3, a 3 - это true, останавливается на  true);

// Console.log (null && "false" && "Mango");
// Ответ null (т.к. null - это false, оператор && запинается на false);

// Console.log (null || "false" || "Mango");
// Ответ "false" (т.к. "false" - это строка и определяется как true, оператор || запинается на true);

// Console.log ("false" && "Mango" || "null");
// Ответ "Mango" (т.к. "false" && "Mango" -это "true" && "true" выбор падает на последнее true, а это "Mango", после идет сравнение "Mango" || "null" это оба true, запинается на первом true, a это "Mango")

// Console.log ("Mango" && null || false);
// Ответ false ("Mango" && null)


// if(null) {} else {}
//  В данном случае работает блок else


// var - не имеет блочной области видимости, старый тип пеерменной
var d = 1;
let cd;

if(d === 1) {
    let cd =1222;
    d += 10;
}

console.log(cd);