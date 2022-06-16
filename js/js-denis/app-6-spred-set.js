// Optional chain

// const user = { 
//     email: 'test@test.com',
//     age: 20,
//     access: {
//         status: 1,
//         role: "ADMIN"
//     }
// }

// Если нужно вывести role

// const role = user.access ? user.access.role: 'USER';
// const role = user.access?.role || 'USER';


// if  (user.access?.role || 'USER') {
//     console.log(role)
// }


/**
 * Example 1 - Комплексные задачи
 * Напиши скрипт управления личным кабинетом интернет банка. 
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw'
};
  
/*
* Каждая транзакция это объект со свойствами: id, type и amount
*/
  
const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
    * Метод создает и возвращает объект транзакции.
    * Принимает сумму и тип транзакции.
    */
    createTransaction(amount, type) {
        const validTransactionTypes = Object.values(Transaction);
        const isTypeValid = validTransactionTypes.includes(type);
     console.log(isTypeValid);

    },

    /*
    * Метод отвечающий за добавление суммы к балансу.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций
    */
    deposit(amount) {
   
    },

    /*
    * Метод отвечающий за снятие суммы с баланса.
    * Принимает сумму танзакции.
    * Вызывает createTransaction для создания объекта транзакции
    * после чего добавляет его в историю транзакций.
    *
    * Если amount больше чем текущий баланс, выводи сообщение
    * о том, что снятие такой суммы не возможно, недостаточно средств.
    */
    withdraw(amount) {

    },

    /*
    * Метод возвращает текущий баланс
    */
    getBalance() {
    
    },

    /*
    * Метод ищет и возвращает объект транзации по id
    */
    getTransactionDetails(id) {

    },

    /*
    * Метод возвращает количество средств
    * определенного типа транзакции из всей истории транзакций
    */
    getTransactionTotal(type) {

    },
};


