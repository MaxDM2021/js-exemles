
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// Распыление: беред коллекцию распаковывет в другую коллекцию:

// const numbers = [0, 5, 10, ...[1, 2, 3, 100, 500], 4, 5]

// console.log(numbers);


// Найти найбольше число среди элементов, ... -распыляют массив в отдельные значения:

// const temp = [1, 2, 3, 4, 5, 45, 7, 23, 56];

// console.log(Math.max(...temp));

// Копия массива:

// const a = [1, 2, 3];

// const b = [...a];

// console.log(a);
// console.log(b);

// const a = [{x: 1}, {y: 2}, {z: 3}];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// a[0].x = 1000;

// true, т.к. сравниваются элементы массивов:
// console.log(a[0] === b[0]); 
// false , т.к. сравниваются массивы .а у них разные ссылки:
// console.log(a === b)

 
// Сшиваем несколько массивов в один через spread:

// const lwt = [1, 2, 3];
// const cwt = [4, 5, 6];
// const nwt = [7, 8, 9];

// const allTemps = [...lwt, ...cwt, ...nwt];

// console.log(allTemps);

// Через .concat:

// const xx = lwt.concat(cwt, nwt);

// console.log(xx);


const a = {x: 1, y: 2};
const b = {x: 0, z: 3};

// const c = Object.assign({}, a, b);

// Еще вариант записи:

const c = {...a, ...b,}

// На выходе {x: 0, y: 2; z: 3}
console.log(c);


// Свойсва переопределяются- заменяются при распылении

const defaultSettings = {
    theme: 'light',
    showNot: true,
    hideSidebar: false,
}

const userSettings = {
    showNot: false,
    hideSidebar: true,
}

const finalSettings = {
    ...defaultSettings, 
    ...userSettings
}

console.log(finalSettings);

