const array = ['pool', undefined, 0, 'type', NaN, 'String', 'call'];
console.table(array);
// дізнатись останній індекс елемента
const lastIndex  = array.length -1;
for(let i = 0; i <= lastIndex; i++){
    console.log(array[i]);
}og(text.split('')); // по буквах
console.log(text.split(' ')); // по словах
console.log(text.split(',')); // все в один елемент
// змінити значення елемента масиву
array[3] = 3938949
console.table(array);
// методи масиву
const books = ['OKR', 'One', 'Year'];
const magazines = ['Times', 'Forbes', 'Something'];
// concat
const concat = books.concat(magazines);
console.log(concat);
// split
const text = 'Notes on startups';
console.log(text);

console.l
// pop
console.log(magazines.pop());
console.log(magazines);
// push
books.push('item');
console.log(books);
// ============================================
// const array = ['rotate', 'help', null, 2, 'happy'];
// console.table(array);
//     const lastIndex = array.length -4;
//     console.log(lastIndex);
//         console.log(array[1]);
//         console.log(array[2]);

// array[3] = undefined;
// console.log(array[3]);
// console.table(array);

// array[2] = 'change';
// console.log(array[2]);
// console.table(array);

// array[3] = 2182912917291729;
// console.log(array[3]);
// console.table(array);




// const concat = array[3];
// console.log(concat);

// const lastIndes = array[4];
// console.log(lastIndes);


// array[4] = 'lol';
// console.log(array[4]);
// console.table(array);


// array[1] = null;
// console.log(array[1]);
// console.table(array);



// const arrayA = ['string', 'strong', 'downturn', null, 1, 'Ayax']
// console.table(arrayA);

// arrayA[2] = 'downgrabe';
// console.log(arrayA[2]);
// console.table(arrayA);

// const last = arrayA.length -1;
// for(let i = 0; i <= last; i += 1){
//     console.log(i);
// }



// const arr = [1, 2, 3, 4, 5, 6, 'log', 'Boolean', 'type', null, 0, 'programming']
// console.table(arr);

// arr[8] = 'genius'
// console.log(arr[8]);
// console.table(arr);

// const lastInd = arr.length -1;
// for (let i = 0; i <= arr.length; i++) {
//     console.log(i);
// }


// const arr1 = [1, 2, 3, 4, 5, 6, 'log', 'string', 'strong', 'downturn'];
// console.table(arr1);

// arr1[6] = 'useless';
// console.log(arr1[6]);
// console.table(arr1);

// const lastArr = arr1.length -1;
// for(let i = 0; i <= lastArr; i ++){
//     console.log(i);
// }







// const arr2 = [3, 4, 5, 6, 'log', 'string','help', null, 2, 'happy']
// console.table(arr2);

// arr2[6] = 'rename'
// console.log(arr2[6]);
// console.table(arr2);

// for(let i = 0; i <= arr2.length -1; i ++){
//     console.log(arr2[i]);
// }



// const arr3 = [3, 4, 5, 6, 'log', 'string','outarageous', 'zero-sum', 2, 'affordable'];
// console.table(arr3);

// arr3[5] = 'awesome';
// console.log(arr3[5]);
// console.table(arr3);

// const lastt = arr3.length -1;
// for(let i = 0; i <= lastt; i++){
//     arr3[i] += '-1'
//     console.log(arr3[i]);
// }
// console.table(arr3);


// for (const arr of arr3) {
//     console.log(arr);
//     arr += '-1'
      
// }
// console.table(arr3);






// const arr4 = [6, 'log', 'string','outarageous', 'zero-sum', 33333, 588679857, 'lopped on'];
// console.table(arr4);

// arr4[2] = 'ops'
// console.log(arr4[2]);
// console.table(arr4);

// const l = arr4.length -1;


// for (const o of arr4) {
//     console.log(o);
// }

// console.table(arr4);


// const a = ['Welcome', 'to', 'UA'];
// console.log(a.join(' '));



// ==================================================================================================
// МЕТОДИ МАСИВІВ

// pop-видаляє останній
// const languages = ['English', 'Ukrainian', 'French'];
// console.log(languages.pop());
// console.log(languages);

// push-додає елемент в кінець
// const books = ['OKR', 'Zero to one', 'on screen b1'];
// console.log(books.push('one', 'tho'));
// console.log(books);

// join-з циклу в рядок
// const sizes = ['big', 'L', 'slmall', 'average']
// console.log(sizes.join(' '));


// split-з рядка в цикл
// const countryes = 'French, USA, Ukraine, Uk';
// console.log(countryes.split(' '));


//===================================================================================================
const arr1 =  ['BMW', 'Mercedes', 'Skoda', 'Ford', 'Mustang', 'Audi'];
const arr2 = ['Apple', 'Asus', 'Xiaomy', 'Noting', 'Pixel', 'Acer'];
console.table(arr1);
console.table(arr2);

// ========================
console.log(arr1.pop());
console.table(arr1);
// ========================
console.log(arr1.push('Porshe'));
console.table(arr1);
// ========================
console.log(arr1.join(', '));
// ========================
const textt = 'Notes on startups';
console.log(textt);

console.log(textt.split(''));// по буквах

console.log(textt.split(' ')); // по словах

console.log(textt.split(',')); // все в один елемент
// ========================
console.log(arr1.indexOf('BMW'));

// ===========================================================================
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
console.log(velues);
// з'єднати масиви за допомогою concat
const array = ['Apple', 'Samsung', 'Xiaomy', 'Acer'];
const array1 = ['top', 5, NaN, undefined];
const conc = array.concat(array1)
console.log(conc);
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
// =================================================================
const games = ['fifa', 'cs', 'fortnite', 'Horizon', 'Free fire'];
const all = games.forEach(function (game) {
    console.log(game);
})

const all1 = games.map(function(all) {
    console.log(all);
})

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]

const playersOnline = players.map(function(online) {
    return online.online
})

console.log('Are online?', playersOnline);


const cars = ['Audi', 'Skoda', 'BMW'];
const car1 = cars.map(function(car) {
    console.log(car);
})

const countryes = ['Ucraine', 'Poland', 'German', 'Frech'];
const conclusion = countryes.forEach(function(number) {
    console.log(number);
})

const player = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]

const playersTimePlayed = player.map(function(time) {
    return time.timePlayed
})
console.log('timePlayed:', playersTimePlayed);


const total = player.map(function(number) {
    return number.id
})
console.log("Player's ID:", total);