// Цепочки вызовов - chaining

const numbers = [1, 9, 6, 2, 3];

// Фильтруем элементы больше 2

// const greaterThenTwo = numbers.filter(num => num >2);
// console.log(greaterThenTwo);

// Нужно утроить все оставшиеся элементы

// const multByThree = greaterThenTwo.map( (num) => num * 3);
// console.log(multByThree);

// Сортирую по возрастанию

// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);


// Cокращенная запись в одну строку - называется цепочка вызовов - chaining
const sorted = numbers
  .filter(num => num >2)
  .map( (num) => num * 3)
  .sort((a, b) => a - b);

console.log(sorted);


// Задача отобрать всех игроков online и отсортировать их по возрастанию rank

const players = [
    {id: 'id-1', tag: 'Mango', isonline: true, rank: 800},
    {id: 'id-2', tag: 'Poly', isonline: false, rank: 600},
    {id: 'id-3', tag: 'Aiwi', isonline: true, rank: 100},
    {id: 'id-4', tag: 'Ajax', isonline: true, rank: 400},
    {id: 'id-5', tag: 'Chelsy', isonline: true, rank: 500},
];


const playersSorted = players
   .filter(player => player.isonline)
   .sort((a, b) => a.rank - b.rank); 

console.table(playersSorted);

// отобрать игроков, те что offline)

// const playersSorted = players
//    .filter(player => !player.isonline)
//    .sort((a, b) => a.rank - b.rank); 

// console.table(playersSorted);


// Chaining в методах объекта как jquery

const element = {
    class: ' ',
    hovered: false,
    changeClass(cls) {
        this.class = cls;

        return this;
    },
    toggleHobered() {
        this.hovered = !this.hovered;

        return this;
    },
};

element.toggleHobered().changeClass('open');
console.log(element);


console.log(_);