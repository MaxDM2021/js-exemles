const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}

let totalFeedback = 0;

// Получает массив клучей keys из объекта feedback
// const keys = Object.keys(feedback);

// for(let key of keys){
// console.log(key);
// console.log(feedback[key]);


// totalFeedback += feedback[key];
// }


// console.log('totalFeedback: ', totalFeedback);


// Получает массив знеачений values из объекта feedback
const values = Object.values(feedback);

console.log(values);

for (const value of values){
    console.log(value);

    totalFeedback += value;
}

console.log(totalFeedback);



