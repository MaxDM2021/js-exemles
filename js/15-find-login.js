// Напиши скрипт поиска логина
// - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
// - Если нашли логин, вывести сообщение "Пользователь [логин] найден."

// Сначала через for
// потом через for of
// Логика brake
// Метод includes() c тернарным оператором


//Вариант 1 

// const logins = ['dgertegrgt', 'rtgete4fe', 'poly1scute', 'ertgegrvvg'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log('Login:  ', login);
//   console.log(`${login} === ${loginToFind}`, login === loginToFind);

//   if (login === loginToFind) {
//     message = `Пользователь, ${loginToFind}  найден.`;
//     break;
//   }
//   message = `Пользователь, ${loginToFind}  не найден.`;
// }

// console.log(message);


// Вариант 2, сразу в message забить неправильный ответ, и при вычислении правильного его заменить:

const logins = ['dgertegrgt', 'rtgete4fe', 'poly1scute', 'ertgegrvvg'];
const loginToFind = 'poly1scute';
//  let  message = `Пользователь, ${loginToFind}  не найден.`;;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log('Login:  ', login);
//   console.log(`${login} === ${loginToFind}`, login === loginToFind);

//   if (login === loginToFind) {
//     message = `Пользователь, ${loginToFind}  найден.`;
//     break;
//   }

// }

// console.log(message);


// 3-й вариант for of:


// for (const login of logins){
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}`, login === loginToFind);
//     if (login === loginToFind){
//         message = `Пользователь, ${loginToFind}  найден.`;
//         break;
//     }
// }

// console.log(message);

// 4-й способ .includes:

// console.log(logins.includes(loginToFind));

// 5-й тернарный оператор с применением .includes, самое лучшее решение!! :

const message = logins.includes(loginToFind) 
? `Пользователь, ${loginToFind} найден.` 
: `Пользователь, ${loginToFind}  не найден.`;

console.log(message);
