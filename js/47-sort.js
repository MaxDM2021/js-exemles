
// Array.prototype.sort(callback(currentEl, nextEl){})

// Сортирует и ИЗМЕНЯЕТ оригинальный массив
// По умолчанию:
// - сортирует по возрастанию
// - приводит элементы к строке и сортирует по [Unicode](http://unicode-table.com/en/)

const numbers = [1, 9, 6, 2, 3];
numbers.sort();
console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log('letters', letters);

// conpareFunction - функция сравнения (callback)
// Элементы массива сортируются в соответсвии с ее возрастаемым значением

// - если compareFunction(A, B) меньше 0, сортировка поставит А перед В
// - если compareFunction(A, B) больше 0, сортировка поставит B перед A
// - если compareFunction(A, B) вернет 0, сортировка оставит B и A на своих местах по отношению друг к другу,
// но отсортирует их по отношению ко всем другим элементам.


// // Сортировка по убыванию
// numbers.sort((curEl, nextEl) => {
//     return nextEl -curEl;
// });

console.log(numbers);

// Как сделать конию массива, что-бы не сортировать оригинал
// -Array.prototype.slice()
// -Операция spread

// По убыванию
const descSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log('descSortedNumbers', descSortedNumbers);

// По возрастанию
const asccSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log('asccSortedNumbers', asccSortedNumbers);

// Можно так-же revers() применить
// console.log(asccSortedNumbers.reverse());


const players = [
    {id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true},
    {id: 'player-3', name: 'Aiwi', timePlayed: 230, points: 48, online: false},
    {id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true},
    {id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: false},
];

// Сортировка по возрастанию параметра timePlayed:
const sortByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
    return prevPlayer.timePlayed - nextPlayer.timePlayed
})
console.table(sortByBestPlayers);

// Сортировка по убыванию параметра timePlayed:
const sortByWorstPlayers = [...players].sort((prevPlayer, nextPlayer) => {
    return nextPlayer.timePlayed - prevPlayer.timePlayed 
})
console.table(sortByWorstPlayers);

// Сортировка по алфавиту параметра name:
const sortByWordPlayers = [...players].sort((prevPlayer, nextPlayer) => {
    prevPlayer.name[0] > nextPlayer.name[0];

    if(result) {
        return 1;
    }

if(!result) {
    return - 1
}
});

console.table(sortByWordPlayers);

// Как определить юникод символа 'a' с индексом 0 :
console.log('abc'.charCodeAt(0));




