// Вызов лодаш библиотеки МЕТОДОВ
// К примеру метод _.get:

// console.dir(_);


// console.log(_.isEpmty({}));
// console.log(_.isEpmty({a: 1}));



const user = {
    name: 'mango',
    location: {
        coords: [1, 2],
        city: 'Lviv',
    },
};

// Ладаш метод _.get
// Спасает от ошибки, выдает всегда underfined, если малоли нет такого свойства..
// console.log(_.get(user, 'location.city'))

// проверка наличия свойств, тоже спасает от ошибки, выдает underfined, проверяет ? 
// на уровне каждой вложенности:

console.log(user?.location?.city);


// Ладаш метод _.union()
// Позволяет склеить два массива и убрать повторяющиеся свойства.

console.log(_.union([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// Ладеш метод _.range
// делает массив от включительно до невключительно, третья цифра 2 -шаг
// Если передать только одно число, то будет от нуля до этого числа невключительно

console.log(_.range(1, 8, 2));

// Ладеш метод _.sortBy()

const users = [
    {user: 'fred', age: 48},
    {user: 'barney', age: 36},
    {user: 'fred', age: 40},
    {user: 'barney', age: 34},
]

// Отсортировать по нескольким полям

console.log(_.sortBy(users, ['user', 'age']));

// Ладеш метод _.sum() и _.sumBy()
//  _.sum()  Выдает сумму чисел массива, 
console.log(_.sum([1, 2, 3, 4, 5]))

// _.sumBy() -выдает сумму элементов массива объектов 

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Aiwi', timePlayed: 230, points: 48, online: false},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: false},
];

// аналог reduse
// выводит сумму всего затраченного времени:
console.log(_.sumBy(players, player => player.timePlayed));

// Ладеш метод _.uniq() и uniqBy()


// Ладеш метод _.min() и _.minqBy() _.max() и _.maxqBy()

// Выбирает объект в массиве с  каким-то минимальным свойством 

console.log(_.minBy(players, player => player.timePlayed))

// Ладеш метод _.camelCase(), _.capitalize, _.kebabCase(), _.lowerCase(), _.upperCase()

console.log(_.kebabCase(' a b c '));