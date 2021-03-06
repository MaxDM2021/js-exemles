// Приведение к булю на примере Boolean(value)
// 6 ложных значений, приводящих к false: 0, NaN, null, underfined, пустая строка "" или '', false
// Абсолютно все остальные приводятся к true

console.log(Boolean(666));

// Логическое И (оператор &&):
// - запинается на лжи-false (определяет true или false);
// - Возвращает то значении, на чем запнулось или последний операнд, с примением правила Boolean

console.log(5 && 6 && 7 && 99 && 'hello');
console.log(0 && 6 && 7 && 99 && 'hello');

// Логическое ИЛИ (оператор ||):
// - Запинается на правде;
// - возвращает то, на чем запнулось или последний операнд

console.log(5 || 7 || 8 || 10);
console.log(false || 0 || 8 || 10);

// Логическое НЕ (оператор !):
// Делает инверсию правда > ложь и ложь > правда
// Ставит в булевом преобразовании противоположное значение или true или false

console.log(!true);
console.log(!false);
console.log(!0);
console.log(!'dkjbkj');
console.log(!5);


