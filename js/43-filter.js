// Array.prototype.filter(
// Поэлементно перебирает оригинальный массиы
// Возвращает новый массив (с элементами или пустой)
// Добавляет в возвращаемый массив элементы, которые удовлетворяют условию колбек-функции
// Если колбек вернул true элемент добавляетсяв возвращаемый массив
// Если колбек вернул false элемент НЕ добавляется в возвращаемый массив.

const numbers = [5, 10, 15, 20, 25];

const filterNumbers = numbers.filter(number =>  number < 10 || number > 20 );
console.log(filterNumbers);
console.log('numbers ', numbers  )

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: false},
];

// Отфильтровать только тех игроков, кто онлайн

const onlinePlayers = players.filter(player => player.online)

// Вариант набора с деструктуризацией
// const onlinePlayers = players.filter(({online}) => online)

console.table(onlinePlayers);

// Отфильтровать только тех игроков, кто не онлайн

const offlinePlayers = players.filter(player => !player.online)
console.table(offlinePlayers);

// Получить список хардкор игрогов с временем больше 250

// const hardcorePlayers = players.filter(player => player.timePlayed > 80)
// console.table(hardcorePlayers);

// Запись через деструктуризацию
const hardcorePlayers = players.filter(({timePlayed}) => timePlayed > 80)
console.table(hardcorePlayers);


