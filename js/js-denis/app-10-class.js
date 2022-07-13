
// ====== Cтарый вариант===========

// function User(name) {
//  this.name = name;
//  let password = ''

//  this.getName = function() {
//     return this.name
//  }

//  this.getPasword = function(){
//     return password
//  }
//  this.setPassword = function (newPassword) {
//     password = newPassword
//  }

// }

// User.prototype.setName = function(name) {
//     this.name = name
// }

// function AdminUser(name) {
//     User.call(this, name)

//     this.isAdmin = true
// }

// const user1 = new User('Denis')
// const user2 = new User('Max')
// console.log(user1)
// console.log(user1.getName())
// console.log(user2)

// const admin = new AdminUser('Dima')

// console.log(admin)
// console.log(admin.getName())

// ====== Новый вариант ========


// class User {
//     constructor (name){
//         this.name = name
//     }
// getName(){
//     return this.name
// }

// setName(newName) {
//     return this.name = newName;
// }
// }

// const user = new User('Denis')

// class AdminUser extends User {
//     constructor(name) {
//         super(name)
//         this.isAdmin = true
//     }
// }

// const admin = new AdminUser('Dima')
// console.log(admin)


// ========Задача 1==========
// Напиши класс `Blogger` для создания обьекта блоггера со следующим свойствами:

// - `email` - почта, строка
// - `age` - возраст, число
// - `numberOfPosts` - кол-во постов, число
// - `topics` - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод `getInfo()`, который, возвращает строку:
// `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.

// Добавь метод `updatePostCount(value)`, который в параметре `value` принимает
// количество постов которые нужно добавить пользователю.

// class User {
//     constructor(config) {
//         const {email, age, blog} = config
//         const {numberOfPost, topics} = blog
//         this.email = email
//         this.age = age
//         this.numberOfPost = numberOfPost
//         this.topics = topics
//     }

//     getInfo (){
//         const {email, age, numberOfPost} = this
//         return `User ${email} is ${age} years old and has ${numberOfPost} posts`
//     }

// updatePostCount(value) {
//     this.numberOfPost = value
// }

// }

// const mango  =new User({
//     email: 'mango@mail.com',
//     age: 24,
//     blog: {
//     numberOfPost: 20,
//     topics: ['tech', 'cooking'],
// }
// });

// console.log(mango.getInfo())


// ========Задача 2==========
// Напиши класс `Storage` который создаёт объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать
// его в свойство `items`.

// class Storage {
//     constructor(items) {
//         this.items = items
//     }
// getItem() {
//     return this.items
// }

// addItems(item) {
//     this.items. push(item)
// }

// removeItem(item) {
    // Вариант 1
    // const index = this.items.indexOf(item)
    // console.log(index)
    // this.items.push(index, 1)
    // console.log(this.items)

     // Вариант 2
//      this.items = this.items.filter((el) => el !==item)
//      console.log(this.items)
// }


// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// console.log(storage);

// storage.removeItem('🍇')

// ========Задача 3==========
// Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
// Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
// геттер и сеттер `login` и `email`.

// class User {
//     #login
//     #email

//     constructor(login, email){
//         this.#email = email
//         this.#login = login
//         this._isAdmin = true
        //    this. lastChanges = [email]
//     }
// get email(){
//     return this.#email
// }

// set email(value) {
    // if (!value) throw new Error('Some message')
    // this.lastChanges.push(value)
//    this.#email = value
// }

// get login(){
//     return this.#login
// }

// set login(value) {
//    this.#login = value
// }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// mango.email = 'new@new.com'
// mango.email = 'new2@new2.com'

// console.log(mango)

// ========Задача 4==========

// Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`.
// Заметка это объект со свойствами `text` и `priority`. Добавь классу статическое
// свойство `Priority`, в котором будет храниться объект с приоритетами.

class Notes {
static Priority = {
    LOW: 'Low',
    NORMAL: 'normal',
    HIGH: 'high'
}

    constructor(items) {
        this.items = items
    }

    addNote({text, priority = Notes.Priority.LOW}) {
        this.items.push({text, priority})
    }

removeNote (text) {
    const index = this.items.findIndex((note) => note.text === text)
    if (index === -1) return
   this.items.splice(index, 1)
}

updateNote(text, Priority){
    const index = this.items.findIndex((note) => note.text === text)
    if (index === -1) return
    // Вариант 1
    // const updatedNote = {text, priority}
    // this.items.splice(index, 1, updatedNote)
    // Вариант 2 - лучший
    // console.log(this.items[index])
    
    this.items[index] = {text, priority}
    // Вариант 3
    // this.items[index].priority = priority
}

}

const myNotes = new Notes([]);

myNotes.addNote({
    text: 'Моя первая заметка',
priority: Notes.Priority.NORMAL
 });

myNotes.removeNote('Моя первая заметка')
console.log(myNotes.items);

myNotes.updateNote('Моя первая заметка222', Notes.Priority.HIGH)
console.log(myNotes.items);
