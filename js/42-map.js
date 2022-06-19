// .map()

// Array.prototype.map()
// Поэлементно перебирает оригинальный массив
// Не изменяет оригинальный массив
// Возвращает новый массив такой же длинны

const numbers = [5, 10, 15, 20, 25]

const doubleedNums =numbers.map(number =>
{
    console.log(number)
    return number * 3;
}) 

console.log('numbers', numbers);
console.log('doubleedNums', doubleedNums)


const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: false},
];
console.table(players);

// Получаем только имена
const playerNames = players.map(player => player.name)
console.log('playerNames', playerNames)

// Получаем только id
const playerIds = players.map(player => player.id)
console.log('playerId', playerIds)

// Получаем mame и online
// const res = players.map(player => ({name: player.name, online: player.online,}));
// console.log('res', res);

// Получаем mame и online (Более продвинутый вид записи!! c применением деструктуризации)
const res = players.map(({name, online}) => ({name, online}));
console.log('res', res);

// Изменение параметров для каждого игрока
// Распылили старый объект, вставили в него новое значение параметра points(добавили 10%)
const upatedPlayers = players.map(player => ({  ...player, points: player.points * 1.1,}));

console.table(upatedPlayers);

// Изменение параметра для одного из игроков(часто используется)

const playerIdToUpdate = 'player-2';

// Старая запись:

// const updatedPlayers = players.map(player => { 
//     console.log(player.id);
//     if (playerIdToUpdate === player.id){
//         console.log("вот мы нашли того, кого нужно обновить!!")

//         return {...player, timePlayed: player.timePlayed + 100,}
//     }
//     return player;
//     });

//  console.table(updatedPlayers);


// Новая запись через тернарник

const updatedPlayers = players.map(player => playerIdToUpdate === player.id ? {...player, timePlayed: player.timePlayed + 100,}: player) 

 console.table(updatedPlayers);
