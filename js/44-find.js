// Array.prorotype.find()
// Поэлементно перебирает оригинальный массив
// Возвращает первый элемент, удовлетворяющий условию или underfined

const numbers = [5, 10, 15, 20, 25];
// После того как нашел, прекращает поиск, т.е. до первого найденого

const number = numbers.find(number => number === 15)
console.log(number);

const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: false},
];


// Нужно найти игрока с id: 'player-3'

const playerToFind = 'player-3'

// Вариант набора 1

// const playerToFinded =  players.find(player => player.id === playerToFind)

// console.log(playerToFinded);

// Вариант набора 2 с деструктуризацией
const playerToFinded =  players.find(({id}) => id === playerToFind)

console.log(playerToFinded);

// Нужно найти игрока с Именем: 'Kiwi'

const playerWithName = 'Ajax'
const playerName =  players.find(({name}) => name === playerWithName )
console.log(playerName);

// Вариант записи через фунцию

// const finePlayerById = (allPlayer, playerId) => {
//     return allPlayer.find(player => player.id === playerId);
// };

// console.log(finePlayerById(players, 'player-1'))
// console.log(finePlayerById(players, 'player-4'))

// Вариант c использованием тернарника и с без return( с непрямым возвратом)

const finePlayerById = (allPlayer, playerId) => 
     allPlayer.find(({id}) => id === playerId);


console.log(finePlayerById(players, 'player-1'))
console.log(finePlayerById(players, 'player-4'))