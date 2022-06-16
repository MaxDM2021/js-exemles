


// // Справа от равно - это литерал объекта
// const x = {}; 


// const fn = function (myObject) {
//     console.log(myObject);
// }

// // в значение фунции забит литерал объекта
// fn({a: 1, b: 2});  


// const rtfm = function () {

//     // Так-же в фигурных кнопках это литерал объекта
//     return {a: 5}; 
// }

// console.log(rtfm());


// const playlist = {
//     name: 'Мой супер плайлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// playlist.qwe = 56,

// console.log(playlist);

// const propertyName = 'tracks';

// // На выходе дкт одно и тоже, во втором варианте обкащаемся 
// // к ключу как к строке в ковычках!
// console.log(playlist.rating);
// console.log(playlist['rating']);

// // Такой вариант он не находит, пишет underfind, т.к. нет такого ключа propertyName в объекте
// console.log(playlist.propertyName);

// // Значение ключа лежит в переменной, вводим через квадратноые скобки
// // Такой вариант он  находит, и идет цепочка, на выходе ['трек-1', 'трек-2', 'трек-3']
// console.log(playlist[propertyName]);


// Короткая запись форм


// const username = 'Mango';
// const email = 'mango@mail.com'

// const signupData = {

    // username: username,
    // email: email,

    // Если совпадает название ключа и ниазвание переменной, 
    // в котой лежит свойство ключа:
//     username,
//     email,
// }

// console.log(signupData);


// Вычисляемые свойства



// const inputName = 'color';
// const inputValue = 'tomato';

// В квадратных скобках ищет имя переменной и после ее своство использует как ключ объекта "color", 
// После присваивает к нему 5 - значение ключа;
// const colorPickerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);


// const a = { x: 1, y: 2 };
// const b = a;

// a.c = 100;

// console.log(b === a);

// console.log(a);
// console.log(b);


// Функции и массивы - это объекты!!

// const c = [1, 3, 4, 5];
// c.hello = ':)';

// console.log(c)

// const fn = function(){
//     console.log('helo');
// }

// fn.helo = ':)'
// console.dir(fn.helo);


const playlist = {
    name: 'Мой супер плайлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    // trackCount: 3,
    // "Это старый метод ввода фунции"
    // getName: function(a){
    //     console.log('Ага это getName', a)
    // }
// "Это новый метод ввода ыункции более сокращенный
    // getName(a){
    //     console.log('Ага это getName', a)
    // }

    changeName(newName){
        console.log('this внутри changeName', this);
        
        this.name = newName;
    },

    addTrack(track) {
        this.tracks.push(track);
        // Не очень хорошее решение
        // this.trackCount = this.tracks.length;
    },
    updateRating(newRating){
        this.rating = newRating;
    },
getTrackCount(){
    return this.tracks.length;
},

}

// console.log(playlist);
// playlist.getName(5);


playlist.changeName('Новое имя');



playlist.addTrack('Новый трек 1');
console.log(playlist.getTrackCount());


playlist.addTrack('Новый трек 2');
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);