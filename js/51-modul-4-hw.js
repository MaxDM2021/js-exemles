// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//   if(this.pizzas.includes(pizzaName)){
//         return onSuccess(pizzaName);
//       } 
//         return onError(pizzaName);
//       },
//   };
    
  
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(pizzaName) {
//     return `There is no pizza with a name ${pizzaName} in the assortment.`;
//   }
  
//   // Method calls with callbacks
//   console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
//   console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));


  // function calculateTotalPrice(orderedItems) {
   
  
  //   orderedItems.forEach (function (orderedItem, index){
  //       let totalPrice = 0;
  //     totalPrice += orderedItem[index];
  //      return totalPrice;
  //   })  
   
  
  
  // console.log(calculateTotalPrice([12, 85, 37, 4]));
  // console.log(calculateTotalPrice([164, 48, 291]));
  // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


  class StringBuilder {
    constructor (initialValue){
        this.value = initialValue;
    }
getValue () {
    return this.value; 
}
padEnd (str) {
    return this.value.padEnd(2, str)
}
padStart (str) {
     return this.value.padStart(3, str)
}

padBoth (str) {
     return this.value.padBoth(5, str);
}
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
  