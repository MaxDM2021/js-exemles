
// Pаботаем с коллекцией товаров

// -  item: [],
// -  getItem()
// -  add(product) {},
// -  remove(productname) {},
// -  clear() {},
// -  countTotalPRice() {},
// -  increaseQuantity(productName) {},
// -  decreaseQuantity(productName) {},


const cart = {
    items: [],
    getItem(){
        return this.items;
    },
add(product) {
    console.table(this.items);
    
    for (const item of this.items) {
        
        if(item.name === product.name ){
            console.log('Такой продукт уже есть в корзине:', product.name)
            item.quantity += 1;
            return;
        }





    }

    const newProduct = {
        ...product,
        quantity: 1,
    };
    this.items.push(newProduct);
},
  

    // for (let i = 0; i < items.length; i += 1) {
    //     // Деструктуризация
    //     const { name }= items[i];
    //     const { quantity } = newProduct.quantity; 

    //     if (newProduct ===  name){
    //         console.log('Нашли такой продукт: ', newProduct);
    //         console.log('индекс: ', i);
    //         // В массве items удалить i-й индекс 1шт
    //         quantity += 1;
    //         console.log(items);
    //     }
    // }

    //     },



    remove(productName) {

        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
            // Деструктуризация
            const { name }= items[i];

            if (productName ===  name){
                console.log('Нашли такой продукт: ', productName);
                console.log('индекс: ', i);
                // В массве items удалить i-й индекс 1шт
                items.splice(i, 1);
                console.log(items);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPRice() {

        let totalPrice = 0;
        const { items } = this;
        for (const {price, quantity} of items) {
            totalPrice += price * quantity;
        }
        return totalPrice;
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.log(cart.getItem());


// add
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍑', price: 70 });
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍌', price: 80 });
cart.add({ name: '🍋', price: 80 });
cart.add({ name: '🍑', price: 80 });
cart.add({ name: '🍋', price: 80 });
cart.add({ name: '🍋', price: 80 });



console.table(cart.getItem());



console.log('Total: ',cart.countTotalPRice())

cart.remove('orange');
console.table(cart.getItem());

cart.clear();
console.log(cart.getItem());




