const cars = [
    { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
    { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
    { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
    { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
    { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
    { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
  ];

//   const getModels = cars => {
//     return cars.map(({model}) => model)
//   };

//   console.table(getModels(cars));


// Task #2 метод .map
// Создать новый массив с указанием новой цены с учетом скидки 

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((car) => {
//         const { price } = car
//         const newPrice = price * (1 - discount)
        
//         return {
//             ...car,
//             price: newPrice
//         }
//     })
// };

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));


// Task #3 метод .filter:
// Отфильтровать машниы с ценой меньше той что указана

// const filterByPrice = (cars, threshold) =>  cars.filter(({price}) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));


// Task #4 метод .filter
// Отобрать те машины, что onSale

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

// Task #5  метод .filter
//Найти машины которые совпадают с параметром type

// const getCarsWithType = (cars, type1) => {
//     return cars.filter(({ type }) => type === type1 )

// }

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// Task #5 метод .find
//Найти машины которые совпадают с параметром model

// const getCarsByModel = (cars, model) => {
//     return cars.find((car) => car.model === model )

// }

// console.table(getCarsByModel(cars, 'F-150'));
// console.table(getCarsByModel(cars, 'CX-9'));

// const carIndex = cars.findIndex((car) => car.model === 'F-150')
// console.log(carIndex);

// Task #6 метод .sort
// Нужно отсортировать все машины по возрастанию параметра amount

// const sortByAscendingAmount = cars => {
    // копия массива через  ... rest
    // return [...cars].sort((a, b) => a.amount - b.amount);
    // копия массива через  .slice()
//     return cars.slice().sort((a, b) => a.amount - b.amount);
// }

// console.table(sortByAscendingAmount(cars));

// Task #7 метод .sort
// Нужно отсортировать все машины по убыванию параметра price


// const sortByAscendingPrice = cars => {
   
//     return [...cars].sort((a, b) => b.price - a.price);
// }

//  console.table(sortByAscendingPrice(cars));

 // Task #8 метод .sort
// Нужно отсортировать все машины по названию в алфавитном порядке

// const sortByAscendingMake = cars => {
   
//     return [...cars].sort((a, b) => a.make.localeCompare(b.make));
// }

//  console.table(sortByAscendingMake(cars));

 // Task #8 метод .sort
// Нужно отсортировать все машины по названию в обратном алфавитном порядке

//  const sortByAscendingMake1 = cars => {
   
//     return [...cars].sort((a, b) => b.make.localeCompare(a.make));
// }

//  console.table(sortByAscendingMake1(cars));

//  Еще один вариант сортировки по алфавиту и обратно

const sortByModel = (cars, order) => {
 
    const callbackDic = { 
        asc(a, b) {
            return a.model.localeCompare(b.model)
        },
        desc(a, b) {
            return b.model.localeCompare(a.model)
        }
        }
        return [...cars].sort(callbackDic[order])
    };

console.table(sortByModel(cars, 'asc'))
console.table(sortByModel(cars, 'desc'))

// Task #10 метод .reduce

const getTotalAmount = cars => {
    return cars.reduce((acc, {amount}, i) => {
        console.log('i', i, 'acc', acc, 'amount:', amount)

        return acc + amount
}, 0)
};

console.log(getTotalAmount(cars));

// Task #11
// Нужно сделать объект объектов
// {'CR-V': { ... }, 'Accord': { ... }}

const carsObj = cars.reduce((acc, car) => {
 
   return { ...acc, [car.model]: { ...car }}
}, {})

console.log(carsObj)
// const obj = {}
// 1
// obj['CR-V'] = {}

// ДЗ с reduce 
// {'suv': [{...}, {...}], 'sedan': [{...}, {...}], 'truck': [{...}, {...}] }
// Надо доделать!!

// const carsObj1 = cars.reduce((acc, car) => {
 
//     return { ...acc, [car.type]: { ...car }}
//  }, [])
 
//  console.log(carsObj1)




// Task #12 Метод цепочек (отбираем все что onSale формируем массив с названиями)

const getModelOnSale = cars => {
    return [...cars].filter(({onSale}) => onSale)
    .map(({model}) => model)
};

console.table(getModelOnSale(cars));


// Task #13 (отбираем все что onSale и сортируем по возрастанию цены)
// Сортировка всегда работает только с массивом

const getModelOnSale1 = cars => {
    return [...cars].filter(({onSale}) => onSale)
    .sort((prev, next) => prev.price - next.price)
};

console.table(getModelOnSale1(cars));



