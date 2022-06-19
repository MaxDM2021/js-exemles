
const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: false},
];


// Array.prototype.every()
// - Поэлементно перебирает оригинал массива
// - Возвращает true если все элементы массива удовлетворяют условию


// проверить, все ли игроки онлайн??
// Ответ: true - если все удовлетворяют, false -если хотя-бы один не удовлетворяет.



const isAllOnlone = players.every(player => player.online);
console.log('isAllOnline: ', isAllOnlone);



// Array.prototype.some()
// - Поэлементно перебирает оригинал массива
// - Возвращает true если хотябы один элементы массива удовлетворяют условию
// Ответ: true - если хотябы один элемент массива удовлетворяет, false -если хотя-бы один не удовлетворяет.



const isAnyOnlone = players.some(player => player.online);
console.log('isAllOnline: ', isAnyOnlone);









