// кожному масиву надається доступ до об'кту з матодами
// інтерфейс це набір методів та властивостей для роботи з якоюсь сутністю(об'єкти, масиви)
// const arr = Object.create(car)
// arr.a = 5
// arr.c = false
// console.log(arr);


// const objB = {
//     car: 'BMW',
// }
// const object = Object.create(objB)
// object.name = 'Nick'
// object.color = 'black'

// console.log(object);
// =================================================
// конкструктор
// function student() {
//     this.name = 'Bob'
//     this.age = 18
// }

// console.log();
// const student = new student()
// console.log(student);
// ================================
// ===============================
// function Car (model, price, year, color){
//     this.model = model;
//     this.price = price;
//     this.year = year;
//     this.color = color;
// }

// // const carInstance = new Car();
// const audi = new Car('A5', 40000, 2020, 'black');
// console.log(audi);


// const mazda = new Car('mazda-3', 35000, 2022, 'red');




// ===============================================
// function Hotel (name, age, date) {
//     this.name = name
//     this.age = age
//     this.date = date
// }

// Hotel.prototype.changeDate = function(newDate) {
//     this.date = newDate
// }

// const client = new Hotel('Oleg', 'Matviy', 19, '25.12.2022')
// const lastClient = new Hotel('Bob', 'Rock', 24, '13.11.2022')

// class Hotel {
//     // static desc = 'Конструктор'

//     constructor(name, age, date) {
//         this.name = name
//         this.age = age
//         this.date = date
//     }
//     get date() {
//         this._date
//     }
//     set date(newDate) {
//         this._date = newDate
//     }
// }
// ===================================================================
// Осннови ООП: клас, о'бєкт, інтерфейс
// ООП-це коли ви все що відеоситься до чогось одного ви робите одним об'єктом(коли ви логічно пов'язані частини коду робите об'єктом)
/**
 * Функції конкструктор
 * Властивість prototype
 * Властивість Function.prototype
 */
// ===============================================================
// Функція конкструктор - є функція конструктор з якої будуть брати дані іншй функції
// оператор new створює пустий об'єкт і в контексті цього об'єкту викликає ф-ю конструктор
function Car(brand, model, speed, run, color) {
    this.brand = brand
    this.model = model
    this.speed = speed
    this.run = run
    this.color = color
}

const bmw = new Car('BMW', 'm5', '300km/hour', '5900km', 'khaki')
const porshe = new Car('Porshe', 'Cayenee', '290km/hour', '12093km', 'black')
console.log(bmw);
console.log(porshe);