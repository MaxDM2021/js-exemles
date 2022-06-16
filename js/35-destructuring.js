
// Деструктуризация (распаковка):


// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };
// Переименования свойства происходит через двоиточие, но оно не переименует в объекте, значение берется из объекта!
// const {name, rating = 6, tracks,  trackCount: numberOfTracks = 0, autor = 'Mishel'} = playlist;

// console.log(numberOfTracks);

// console.log (name, rating);

// Если добаляется примитив в массив, примитив добавляется

// Все значения свойств остаются из объекта
// console.log( playlist)
// В объект свойство autor  не вносится.
// console.log(autor);
// tracks.push('gfdddgd');

// console.log(tracks, );

// console.log( playlist)


// Более сложный объект (объект в объекте) и его деструктуризация:

// const profil = {
//     name: 'Jacque Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'http://fellowtraveler.ru/francija/931-jug-francii-ot-rivery-do-pireneev',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {name, tag, location, avatar, stats: {followers, views, likes}} = profil;


// console.log(name, tag, location, avatar, followers, views, likes);

// Деструктуризация массивов:

// const rgb = [255, 100, 80];

// const [a, b, c] = rgb;

// console.log(a, b, c);

// Если нужно одно из свойств пропустить используем пробел и запятую вместо того элемента который хотим пропустить:

// const [a, , c] = rgb;

// console.log(a, c);


const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

const keys = Object.keys(authors);

for (const key of keys) {
    console.log(key);
    console.log(authors[key]);
}

const entries = Object.entries(authors);


// Уровень 3 Вводим сразу переменные в перечисление, это самая лучшая запись
for (const [name, rating] of entries) {
// Уровень 2
    // const [name, rating] = entry;

// Уровень 1
// const name = entry[0];
// const rating = entry[1];


    console.log(name, rating);
}

// Операция rest:
// Если необходимо каку-то часть свойст отделить а оствшиеся сформировать в отдельный объект
// Это выполняется с помощью ...restProps, ставится всегда в конце, перед ней перечисляются те 
// свойства которые необходимо убрать

const profile = {
    name: 'Jacque Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'http://fellowtraveler.ru/francija/931-jug-francii-ot-rivery-do-pireneev',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

const { name, tag, location, ...restProps } = profile;

console.log(name, tag, location);
console.log(restProps);


// Деструктуризация внутри фунции


// const showProfileInto = function (userProfile) {
 
//     const {name, tag, location, avatar, stats: {followers, views, likes}} = userProfile;

// Если нужно что-то убрать и часть оставить.
// const {name, tag, location, ...restProps} = userProfile;

// console.log(restProps);

    // Вариант сокращенной записи
const showProfileInto = function ( {name, tag, location, avatar, stats: {followers, views, likes}} ) {
 

console.log(name, tag, location, avatar, followers, views, likes);

const profile = {
    name: 'Jacque Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'http://fellowtraveler.ru/francija/931-jug-francii-ot-rivery-do-pireneev',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};
}

showProfileInto(profile);