// Работаем с коллекцией карточек в trello

// - Menjl splice()
// - Удалить
// - Добавить
// - Обновить

const cards = [
    'Карточка-1', 
    'Карточка-2', 
    'Карточка-3', 
    'Карточка-4', 
    'Карточка-5',
];
console.table(cards);
// const cardToRemove = 'Карточка-3';
// // .indexOf - позволяет найти индекс элемента
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// Удаление: splice(index, 1) -удаляет, в скобках номер индекса элемента и кол-во элементов после него включительно с ним
// cards.splice(index, 1);
// Добавление: splice(1, 0, 5, 6, 7) - добавляет (т.к. второе число 0 удаляемых элементов, добавляется начиная с первого индекса)
// cards.splice(1, 0, 5, 6, 7);
// const cardToInsert = 'Карточка-6';
// const indexs = 3;
// cards.splice(indexs, 0, cardToInsert);
// console.table(cards);

// Обновление по индексу

const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);
cards.splice(index, 1, 'Обновленная карточка-4' )

console.table(cards);







console.table(cards)



