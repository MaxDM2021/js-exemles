//  Напиши фунцию findLogin(alllogins, login) для поиска логина

// - Если логина нет, вывести сообщение 'Пользователь [логин] не найден';
// - Если нашли логин, вывести сообщение 'Пользователь [логин] найден';


// ==== Выполненно через тернарник:

// const logins = ['sfwefewcwe', 'wefewefwedc', '35fsfse5gdfgd', '3frfffr4yty6'];
// const loginToFind = '3frfffr4yty6';

// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} не найден` : `Пользователь ${loginToFind} найден`;

// console.log(message);

// ==== 1- й вариант Выполненно через функцию  и for of:

// const logins = ['sfwefewcwe', 'wefewefwedc', '35fsfse5gdfgd', '3frfffr4yty6'];

// const findLogin = function (allLogins, loginToFind) {

//     // Через for of:
//     for (const login of allLogins) {
//         if (login === loginToFind){
//        return `Пользователь ${loginToFind} найден.`;
//     }
//     } 
//      return `Пользователь ${loginToFind} не найден`;
// }
//  console.log(findLogin(logins, 'adadadqw'));
//  console.log(findLogin(logins, 'wefewefwedc'));
//  console.log(findLogin(logins, 'fdfvdfd'));
//  console.log(findLogin(logins, '3frfffr4yty6'));


// ==== 2- й вариант Выполненно через функцию  и тернарник:


const logins = ['sfwefewcwe', 'wefewefwedc', '35fsfse5gdfgd', '3frfffr4yty6'];

const findLogin = function (allLogins, loginToFind) {

// Через тернарник и return:

return  allLogins.includes(loginToFind) ? `Пользователь ${loginToFind} не найден` : `Пользователь ${loginToFind} найден`;

}
 console.log(findLogin(logins, 'adadadqw'));
 console.log(findLogin(logins, 'wefewefwedc'));
 console.log(findLogin(logins, 'fdfvdfd'));
 console.log(findLogin(logins, '3frfffr4yty6'));



     // const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} не найден` : `Пользователь ${loginToFind} найден`;
    //  return message;