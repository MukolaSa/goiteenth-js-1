// повторення
// ЦИКЛИ
for(let i = 0; i <= 10; i++){
    console.log(i);
}
// ==================================================
// масиви
// Завдання 1 - записати масив та перебрати його багатьма методами
const brands = ['Nike', 'Adidas', 'Puma', 'Gucci'];
console.log(brands);
// 1
for (const brand of brands) {
    console.log(brand);
}
// 2
const lastIndex = brands.length -1;
for(let i = 0; i <= lastIndex; i++){
    console.log(brands[i]);
}
// 3
const arr = brands.map(function(brand) {
    console.log(brand);
})
// Завдання 2 - всі методи масиву
const books = ['OKR', 'One', 'Year'];
const magazines = ['Times', 'Forbes', 'Something'];
// ================================================
const connect = books.concat(magazines)
console.log(connect);
// ================================================
const names = ['Nick', 'Bob', 'Tom'];
names.splice(0, 1, 'Roby')
console.log(names);
// ================================================
const brand = ['Nike', 'Adidas', 'Puma', 'Gucci'];
console.log(brand.shift(1))
console.log(brand);
// ================================================
const stack = [1, 2, 3 ,'rfrfrf'];
stack.push('something');
console.log(stack);
// ================================================
const fruits = ['Apple', 'Orange', 'strawberry'];
stack.pop(1);
console.log(fruits);
// Завдання 3 - використати concat та ...spread
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const spread = [...lastWeekTemps, ...nextWeekTemps, ...currentTemps]
console.log(spread);

const concat = nextWeekTemps.concat(currentTemps, nextWeekTemps)
console.log(concat);
// Завдання 4 - змінити елемент та додати новий
const array = ['apple', 'xiaomy', 'samsung'];
array[1] = 'BMW'
array[3] = 'Skoda'
console.log(array);
// об'єкти
// Завдання 5 - записати об'єкт
const object = {
    phone: 'iphone',
    laptop: 'macbook',
    tv: 'samsung',
    smartband: 'xiaomy',
}
console.log(object);
// подивтис що записано в ключах
console.log(object.laptop);
console.log(object.phone);
// перезаписати значенняв об'єкті
object.phone = 'samsung'
object.laptop = 'acer'
console.log(object);
// додати новий ключ та значення
object.car = 'BMW'
object.tablet = 'ipad'
console.log(object);
// отримати ключі об'єкта
const keys = Object.keys(object)
console.log(keys);
// перебрати ключі
for (const key of keys) {
    console.log(key);
}
// перебрати значення ключів
for (const key of keys) {
    console.log(object[key]);
}
// перебрати конкретне значення ключа
for (const key of keys) {
    console.log(object['phone']);
}
// знайти значення ключів
const velue = Object.values(object)
console.log(velue);
// пошук найбйільшої та найнищої температури (числа)
const temp = [58, 4, 3, -45, 19, 0, -6, 100, 49];
const max = Math.max(...temp);
const min = Math.min(...temp);
console.log(max);
console.log(min);