// ОБ'ЄКТИ
// Написати об'кт
const object = {
    phone: 'iphone',
    laptop: 'macbook',
    tv: 'samsung',
    smartband: 'xiaomy',
}
console.log(object);
// подивитись що записано у ключах
console.log(object.phone);
console.log(object.laptop);
console.log(object.tv);
console.log(object.smartband);
// перезаписати значення в об'єкті
object.tv = 'Sony'
object.laptop = 'Acer'
object.smartband = 'Huawei'
console.log(object);
// додати новий ключ та значення
object.tablet = 'Apple';
object.flip = 'Samsung';
console.log(object);
// Отримати ключі ою'єкта
const keys = Object.keys(object);
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
    console.log(object['laptop']);
}
// знайти значення ключів
const velues = Object.values(object);
console.log(values);
// з'єднати масиви за допомогою concat
const array = ['Apple', 'Samsung', 'Xiaomy', 'Acer'];
const array1 = ['top', 5, NaN, undefined];
const concat = array.concat(array1)
console.log(concat);
// з'єднати масиви за допомогою spread
const iphones = ['iphone 14 pro Max', 'iphone 13', 'iphone 12 pro', 'iphone 13 mini'];
const laptops = ['Acer', 'Lenovo', 'Asus', 'Macbook'];
const spread = [...iphones, ...laptops];
console.log(spread);
// пошук найбйільшої та найнищої температури (числа)
const temp = [58, 4, 3, -45, 19, 0, -6, 100, 49];
const min = Math.min(...temp);
const max = Math.max(...temp);
console.log(min);
console.log(max);
// concat + ...spread
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const first = lastWeekTemps.concat(nextWeekTemps, currentTemps);
const second = [...nextWeekTemps, ...lastWeekTemps, ...currentTemps]
console.log(first);
console.log(second);
// assign
const f = { x: 1, y: 2 };
const p = { x: 0, z: 3 };

const c = Object.assign({}, f, p);
console.log(c);
// ===========================================
// destructuring
const playlist = {
    name: 'My playlist',
    rating: 5,
    tracks: ['No lie', 'Natural', 'track'],
    trackCount: 3,
}

console.log(
    playlist.name,
    playlist.rating,
    playlist.tracks,
    playlist.trackCount
);

// destructuring
const { name, rating, tracks, trackCount } = playlist;
console.log(
    name,
    rating,
    tracks,
    trackCount,
);
// =======================================================
const car = ['BMW', 'Skoda', 'Ford', 'Audi', 'Porshe'];

const carShop = {
    price: '100000$',
    cars: car,
    colours: ['blue', 'red'],
}

console.log(
    carShop.price,
    carShop.cars,
    carShop.colours
);

const { price, cars, colours } = carShop;
console.log(
    price,
    cars,
    colours
);