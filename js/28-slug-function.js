// Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
// Строка состоит только из букв и пробелов


// Вариант 1 расширенный


const slugify = function(string){
    return slug =string.toLowerCase().split(' ').join('-');
 
}

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('European Cruises and Ferry Crossings - DFDS'));
console.log(slugify('Book a ferry ticket from the UK'));






// const normalizedTitle = title.toLowerCase();

// const words = normalizedTitle.split(' ');

// const slug = words.join('-');

// console.log(slug);

// Вариант 2 сокращенный сшитый в одну строку с одной переменной:


// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);