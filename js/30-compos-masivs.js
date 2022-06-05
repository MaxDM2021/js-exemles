// Задача 16 и модуля 2

// =========Вариант 1



function makeArray(firstArray, secondArray, maxLength) {
 
    let totalArray =  firstArray.concat(secondArray);
    
    let totalArrayLenght = totalArray.length;
    
    if (totalArrayLenght > maxLength){
      return totalArray.slice(0, maxLength);
    }   
   return totalArray;
   
   
       // Change code above this line
     }
   
     console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
     console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
     console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
     console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
     console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
     console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
   

// ========== Вариант 2

     function makeArray(firstArray, secondArray, maxLength) {
 
        let newArray =  [];
       
        newArray =  firstArray.concat(secondArray)
        
        
        if (newArray.length > maxLength){
          return newArray.slice(0, maxLength)
        }   
       
       return newArray;
         }
       
         console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
         console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
         console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
         console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
         console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
         console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
       