
// Array.prototype.flat(depth)
// - Расглаживает массив до указанной глубины
// - По умолчанию глубина 1

// .flat(3) в скобках указана глубина 3
const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat(3));


const tweets = [
    {id: '000', likes: 5, tags: ['js', 'node js']},
    {id: '001', likes: 2, tags: ['html', 'css']},
    {id: '002', likes: 17, tags: ['html', 'js', 'node js']},
    {id: '003', likes: 8, tags: ['css', 'react']},
    {id: '004', likes: 0, tags: ['js', 'node js', 'react']},
]
// Раньше делали так (распыляли и т.д.):
const allTags = tweets.reduce((totalTags, tweet) =>  [...totalTags, ...tweet.tags], []);
console.log(allTags)

// Более совремнный метод через map и flat, flat -позволяет указать глубину в скобках :

// const tags = tweets.map(tweet => tweet.tags).flat()

// Есть смешаный способ flatMap (но при одной вложенности)


// Применением цепочки:
const tags = tweets
.flatMap(tweet => tweet.tags)
.reduce((acc, tag) => ( {...acc, [tag]: acc[tag] ? acc[tag] + 1 :  1,}), {});
console.log(tags);



