// Наследование
// -extends
// -super

class Hero {
    constructor({name = 'hero' , xp = 0} = {}){
        this.name = name;
        this.xp = xp; 
       }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

// Класс воин расширяет-наследует класс Hero

class Warrior extends Hero {
    constructor({weapon, ...restProps} = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack(){
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }

    }

class Mage extends Hero {
    constructor({spells, ...resProps} = {}) {
        super(resProps);

        this.spells = spells;
    }

    cast(){
        console.log();
        console.log(`${this.name} что-то там кастует`);
    }
}

class Berserk extends Warrior {
    constructor({warcry, ...restProps} = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const ajax = new Berserk({
    name: 'ajax', 
    xp: 500, 
    weapon: 'axe', 
    warcry: 'waaaaaa'
});

console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp();



// const mango = new Warrior({name: 'mango', xp: 1000, weapon: 'алебарда'});
// console.log(mango);


// mango.attack();

// mango.gainXp(1000);

// true
// console.log(mango.__proto__ === Warrior.prototype);

console.log('Warior.prototype', Warrior.prototype);
// true
// console.log(Warrior.prototype.__proto__ === Hero.prototype);

console.log('Hero.prototype', Hero.prototype);
console.log(Hero.prototype.__proto__ === Object.prototype);


const poly = new Mage({name: 'poly', xp: 500, spells: ['фаербол']});

console.log(poly);

poly.cast();
poly.gainXp(200);



// у переменной нет типа, тип есть у значения!!

// let name = 'Poly';

// name = 5
// name = true;
// name = []

