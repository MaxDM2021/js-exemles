// * This

// function foo(){
//     console.log(this)
// }
// foo()

// const obj = {
//     name: 'Denis',
//     info:{
//         some: 'info',
//         foo
//     }
// }

// // выводить будет первое после точки(info) перед foo
// obj.info.foo();

// const obj2 = {
//     method: obj.info.foo
// }
// // выводить будет первое после точки(obj2) перед method
// obj2.method()


// // ошибка, info - это не переменная
// info.foo()

// =========================

// const foo = () => console.log(this);
// foo()

// const obj3 = {
//     info: {
//     foo
//     }
// }

// // Выдает window
// obj3.info.foo()

// =========================

// const obj3 = {
//     info:{
//         foo() {
//             const arrow = () => console.log(this)

//             arrow()
//         }
//     }
// }

// obj3.info.foo();

/**
 * TODO Example #1
 * Создать объект, который описывает ширину и высоту
 * прямоугольника, а также может посчитать площадь фигуры:
 * const rectangle = {width:..., height:..., getSquare:...};
 */


const rectangle = {
    width: 10,
    height: 10,
    getSquare() {
        return this.width * this.height
    }
}

const square = rectangle.getSquare()
// console.log(square);

/**
 * TODO Example #2
 * Создать объект, у которого будет цена товара и его скидка, а также
 * два метода: для получения цены и для расчета цены с учетом скидки:
 */

const price = {
    price: 100,
    discount: '35%',
    getPrice() {
        return this.price
    },
  parseDiscount() {
    return parseInt(this.discount) / 100
  },
    getPriceWithDiscount() {
        // parseInt отбрасывает все значки оставляет только цифры, но при условии, что цифры стоят первыми и перед ними нет ничего
        // parseFloat - отбрасывает делает тоже самое но еще и с дробными числами.
        const discount = this.parseDiscount()
        return this.price - (this.price * discount)
        console.log(discount);
    }
};

const priceWithDicount = price.getPriceWithDiscount()
// console.log(priceWithDicount)


/**
 * TODO Example #3
 * Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. 
 * Метод должен возвращать новую высоту:
 * object.height = 10;
 * object.inc();
 * object.height; // 11;
 */

// const obj = {
//     height: 10,
//     setHeight(value = 0) {
//         this.height = value
//         return this.height
//     }
// }

// obj.setHeight(111)
// console.log(obj)

// const test = {
//     number: 10,
//     calc(func) {
//         func()
//     }
// }

// const obj5 = {
//     obj: 5,
//     testFunc() {
//         console.log(this)
//     }
// }

// function testFunc() {
// Выдает window
//     console.log(this)
// }

// Выдает window
// test.calc(obj5.testFunc);


/**
 * TODO Example #4
 * Создать объект “вычислитель”, у которого есть числовое свойство
 * “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
 * Методы можно вызывать через точку, образуя цепочку методов:
 */

const calc = { 
    value: 4,
    plus(num) {
        this.value += num
        return this
    },
    minus(num) {
        this.value -= num
        return this
    },
    multiply(num) {
        this.value *= num
        return this
    },
    getValue() {
        return this.value
    }
}

// calc.value -= 1

// calc.plus(10)
// calc.minus(5)
// calc.multiply(2)
// console.log(calc)

// console.log(calc.plus(10))

const res = calc.plus(1)
    .minus(2)
    .multiply(3)
    .getValue()

// console.log(res)


/**
 * TODO Example #5
 * Даны объект и функция:



 * Не изменяя функцию или объект, 
получить результат функции getSquare для объекта sizes
 */

let sizes = {width: 5, height: 10}
function getSquare() {return this.width * this.height}
function changeWidth(num) {return this.width += num}

// console.log(getSquare.apply(sizes))

// const newWidth = changeWidth.apply(sizes, [10])
// console.log(newWidth);

/**
 * TODO Example #6
 * Измените функцию getElementHeight таким образом,
 * чтобы можно было вызвать getElementHeight() и получить 25.
 */

let element = {
    name: 'element',
    height: 25,
    getHeight(){
        console.log(this)
        return this.height
    }
};

let element2 = {
    name: 'element2',
    height: 25
};

let getElementHeight1 = element.getHeight.bind(element);
getElementHeight1()

let getElementHeight2 = element.getHeight.bind(element2);

getElementHeight2()


let getElementHeight3 = getElementHeight1.bind(element2);
console.log('getElementHeight3')
getElementHeight3()


// bind возвращает новую функцию с привязанным контекстом
// let getElementHeight = element.getHeight.bind(element);

// getElementHeight === element.getHeight  возвращает false, т.к. bind возвращает новую функцию
// console.log(getElementHeight()); 


// let elemen2 = {
//     height: 25,
//   deep: {
//     getHeight() {
//         console.log(this)
//         return this.height
//     }
//   }
// };

// element2.deep.getHeight()

// const bindedFunc = elemen2.deep.getHeight.bind(elemen2)

// bindedFunc()