// Напиши скрипт, который объединяет все элементы массива 
// в одно строковое значение.
// Элементов может быть произвольное кол-во.
// Пусть элементы массива в троке будут разделены запятой.

// - Сначала через for
// - Потом через join()


const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let message = "";

// for (let friend of friends){
    // message += friend + ',';
// }
// Вариант 1
// console.log(message.slice(0, message.length - 1));
// Вариант 2
// message = message.slice(0, message.length - 1);
// console.log(message);

// Вариант  через join:
const message = friends.join(",");
 console.log(message);