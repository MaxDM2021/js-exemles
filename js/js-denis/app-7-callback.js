

//  * Example 1 - Коллбек функции
// * Напишите следующие функции:
// * createProduct(obj, callback) - 
// * принимает объект товара без id, а также колбек. 
// * Функция создаёт обьект товара, 
// * добавляя ему уникальный идентификатор в свойство id и 
// * вызывает колбек передавая ему созданный обьект.
// * 
// * logProduct(product) - коллбек принимающий обьект продукта 
// * и логирующий его в консоль
// * logTotalPrice(product) - коллбек принимающий обьект продукта 
// * и логирующий общую стоимость товара в консоль

function createProduct(obj, callback) {
    const product = {
        id: Math.random(), ...obj}
        callback(product)
    
}

const p = {name: 'Apple', count: 4, price: 10}

function logProduct(product) {
    console.log(product)
}

function logTotalPrice(product) { 
    console.log(product.count * product.price)
}

// createProduct(p, logTotalPrice) 


/**
 *  Example 2 - Коллбек функции
 * Напишите функцию each(array, callback), 
 * которая первым параметром ожидает массив, а вторым - функцию, 
 * которая применится к каждому элементу массива. 
 * Функция each должна вернуть новый массив, 
 * элементами которого будут результаты вызова коллбека.
 */


function each(arr, cb) {
    const newArr = []

    for (let i = 0; i < arr.length; i += 1) {
        const res = cb(arr[i], i)
        newArr.push(res)
    }

    return newArr
}

// const eachRes1 = each([1, 2, 3], function(item, i) {
// return `Iteration number: ${i}; Iteration value: ${item}`
// })

// const eachRes2 = each(['Denis', 'Max'], function(name, i) {
//     return `Hello ${name}`
//     })


// console.log(eachRes2)


// Необходимо вывести из массива объектов новый массив имён:

const users = [ 
    {name: 'Denis'},
    {name: 'Max'}
]

const userNames = each(users, function (user) {
    return user.name
})

// console.log(userNames)


/**
  * Выполните рефакторинг Example 2 кода используя стрелочные функции.
*/

const eachRes1 = each([1, 2, 3], (item, i) => 
     `Iteration number: ${i}; Iteration value: ${item}`
)

const eachRes2 = each(['Denis', 'Max'], (name, i) =>
     `Hello ${name}`)





     /**
 * Example 3 - Коллбек функции
 * Добавьте объекту account методы 
 * withdraw(amount, onSuccess, onError) и 
 * deposit(amount, onSuccess, onError), 
 * где первый параметр это сумма операции, а второй и третий - колбеки.
 * Метод withdraw вызывает onError если amount больше 
 * TRANSACTION_LIMIT или this.balance, 
 * и onSuccess в противном случае.
 * Метод deposit вызывает onError если amount больше 
 * TRANSACTION_LIMIT или меньше либо равен нулю, 
 * и onSuccess в противном случае.
 */

const TRANSACTION_LIMIT = 1000;

const account = {
    username: 'Jacob',
    balanse: 400,
    deposit(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT || amount === 0){
             return onError('Error message')
        }
        account.balanse += amount
        const {balanse} = account
            onSuccess({ balanse })
    },
    withdraw(amount, onSuccess, onError) {
        if (amount > TRANSACTION_LIMIT || amount > account.balanse){
             return onError('Error message')
        }
        account.balanse -= amount
        const {balanse} = account
            onSuccess({ balanse })
    }
}

const onSuccessHandler = (currentBalance) => console.log('Success', currentBalance)
const onErrorHandler = (err) => console.log('Error', Error)

// account.deposit(
//     100,
//     onSuccessHandler,
//     onErrorHandler
// )

// account.withdraw(
//     500,
//     onSuccessHandler,
//     onErrorHandler
// )


/**
 * Example 4 - Метод forEach
 * Выполните рефакторинг кода используя метод forEach и стрелочные функции.
 */

 function logItems(items) {
    // console.log(items);
    // for (let i = 0; i < items.length; i += 1) {
    //     console.log(`${i + 1} - ${items[i]}`);
    // }
   
// Метод forEach ничего не возвращает
items.forEach((item, i) => console.log(`${i + 1} - ${item}`))
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
