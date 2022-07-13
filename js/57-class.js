class Car1 {
    // Статические свойства, после них обязательна ';'  после методов классов нет
static AAA = 'AAA';
static description = 'Класс описывающий автомобиль';
static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
}
//  Приватное свойство, если нужно
#test = 'test';

mySuperPublicField = 555;

  constructor({brand, model, price} = {}) {
    this.brand = brand;
    this._model = model;
    this.price = price;

    this.mySuperPublicField = 555;
  }

  changePrice(newPrice) {
    this.price = newPrice;

    console.log(this.#test);

  }

  setModel(newModel) {
    this.model = newModel;
  }

//   Гетер - при обращении
  get model () {
    return this._model;
  }

// Сеттер - при записи
set model(newModel) {
    this._model = newModel;
}



}

console.dir(Car1);
console.log(Car1.description);

const carInstance = new Car1({
    brand: 'Audi',
    model: 'Q3',
    price: 35000, 
});




console.log(carInstance);

// Вызывает get model
console.log(carInstance.model);

// когда что-то нужно записать, вызывается set model
carInstance.model = 'Q4';
console.log(carInstance.model);

// Гетер и сетер применяется к каждому экземпляру


// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);

// console.log(carInstance.model);

// carInstance.setModel('Q4');

// console.log(carInstance.getModel());

// Car1.logInfo(carInstance.getModel());

