const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
 
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(potionIndex, 1);
      }
    }
    return `Potion ${potionName.name} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (poition.name === oldName) {
        return `Potion ${oldName} is not in inventory!`;
      }
    }
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
  },

};

atTheOldToad.getPotions();
console.log(atTheOldToad.potions);

atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.log(atTheOldToad.potions);

atTheOldToad.addPotion({ name: "Power potion", price: 270 });
console.log(atTheOldToad.potions);

atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
console.log(atTheOldToad.potions);

atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
console.log(atTheOldToad.potions);

atTheOldToad.removePotion("Dragon breath");
console.log(atTheOldToad.potions);

atTheOldToad.removePotion("Speed potion");
console.log(atTheOldToad.potions);

atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.log(atTheOldToad.potions);

atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
console.log(atTheOldToad.potions);










// const atTheOldToad = {
//    potions: ["Speed potion", "Dragon breath", "Stone skin"],
//    addPotion(potionName) {
//      // Change code below this line
//  this.potions.push(potionName)
 
 
//      // Change code above this line
//    },
//  };
//  atTheOldToad.addPotion("Invisibility");
//  console.log(atTheOldToad.potions);
//  atTheOldToad.addPotion("Power potion")
//  console.log(atTheOldToad.potions);
 

// const bookShelf = {
//    books: ["The last kingdom", "Haze", "The guardian of dreams"],
   
//    updateBook(oldName, newName) {
     
//  const bookIndex = this.books.indexOf(oldName);
//  this.books.splice(bookIndex, 1, newName);
 
//    },
 
//  };
 
//  bookShelf.updateBook("Haze", "Dungeon chronicles");
//  console.log(bookShelf.books);
 
//  bookShelf.updateBook("The last kingdom", "Dune");
//  console.log(bookShelf.books);