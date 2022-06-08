// // Задача 16 и модуля 2

// // =========Вариант 1



// function makeArray(firstArray, secondArray, maxLength) {
 
//     let totalArray =  firstArray.concat(secondArray);
    
//     let totalArrayLenght = totalArray.length;
    
//     if (totalArrayLenght > maxLength){
//       return totalArray.slice(0, maxLength);
//     }   
//    return totalArray;
   
   
//        // Change code above this line
//      }
   
//      console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//      console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
//      console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
//      console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
//      console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
//      console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
   

// // ========== Вариант 2

//      function makeArray(firstArray, secondArray, maxLength) {
 
//         let newArray =  [];
       
//         newArray =  firstArray.concat(secondArray)
        
        
//         if (newArray.length > maxLength){
//           return newArray.slice(0, maxLength)
//         }   
       
//        return newArray;
//          }
       
//          console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//          console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
//          console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
//          console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
//          console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
//          console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


// Задача 21



// const randarray = [...Array(40)].map(_=>Math.ceil(Math.random()*40));
// const randomworsd = randarray.join(" ");


// function findLongestWord(string) {
  
//   const stringMasives = string.split(" ");
//   let bigestWord = stringMasives[0];



//  for (let stringMasive of stringMasives){

// if (bigestWord.length < stringMasive.length) {
//   bigestWord = stringMasive;
// } 
 
//  }
//  return bigestWord;
//   }
  
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWord("Google do a roll"));
//   console.log(findLongestWord("May the force be with you"));
//   console.log(findLongestWord(randomworsd));
       


// Задача 22:


// Дополни код функции createArrayOfNumbers(min, max) так, 
// чтобы она возвращала массив всех целых чисел от значения min до max.



// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//  for (i = min; i <= max; i += 1){

//  numbers.push(i)
//  }
// return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));



// Задача 23

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), 
// и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// Вариант 1:

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   const message = true ? fruits.includes(fruit) : message = false;

//    return message; 
// }


// Вариант 2

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//    return fruits.includes(fruit); 
// }

// console.log (checkFruit("plum"));
// console.log (checkFruit("mandarin"));
// console.log (checkFruit("pear"));
// console.log (checkFruit("Pear"));
// console.log (checkFruit("apple"));
// console.log (checkFruit("carot"));


// Задача 32

// Напиши функцию includes(array, value), которая делает тоже самое, 
// что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя 
// использовать метод массив.includes(значение).

// Вариант решения 1

// function includes(array, value) {
 

//    for (const i of array){
//      if([i] === value){
//        return true;
//      } 
//    }
//   return false; 
//   }
  
//   console.log(includes([1, 2, 3, 4, 5], 3));
//   console.log(includes([1, 2, 3, 4, 5], 17));
//   console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
//   console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
//   console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
//   console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
//   console.log(includes(["solt", "sugar", "water", "air"], "air"));


// // Вариант решения 2

//   function includes(array, value) {
//     const index = array.indexOf(value);
//     return (index !== -1);
   
//    }
   
//    console.log(includes([1, 2, 3, 4, 5], 3));
//    console.log(includes([1, 2, 3, 4, 5], 17));
//    console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
//    console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
//    console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
//    console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
//    console.log(includes(["solt", "sugar", "water", "air"], "air"));
  
 


const test = [1, 3, 4, 6, 7, 8];

const win = test.slice(1, -2);

console.log(win);

