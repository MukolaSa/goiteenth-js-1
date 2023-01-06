// коли ми функцію як аргумент передаємо іншій функції, вона записується як параметр і ми в функції fnA викликаємо FnB, ця функція називається callback функція
// функція яка примає callback це функція вищого порядку
// const fnB = function () {
//     console.log('Hello');
// }

// const fnA = function (callback) {
//     console.log(callback());
// }
// fnA(fnB)

// ====================================================================
// імперативний код - це коли мипишемо код і в кінці бачимо результат
// дикларативний код - це коли ми взяли все і закрили в одну функцію
// ====================================================================
// чисті та брудні функції
// брудна - змінює початковий масив функція це та яка використовує масив і нам потрібно з ним щось зробити
// // чиста функція створює новий
// ====================================================================
// forEach-перебирає масив
const numbers = [5, 10, 20, 25];
numbers.forEach(function (number, index, array) {
    console.log(number);
    console.log(index);
    console.log(array);
})
numbers.forEach(function (number) {
    console.log(number);
})
// ====================================================================
// map-перебирає масив і його можна змінити
const number = [5, 10, 15, 20, 25];
number.map(function (number) {
    console.log(number);
})
// ===================
// доробити
const doubledNums = function (numbers) {
    numbers.map(function(number) {
        
    })
}
// ===================
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]
// перебрати name гравців
const playerNames = players.map(function (player) {
    return player.name
})
console.log('playerNames:', playerNames);

// перебрати points гравців
const playerPoints = players.map(function (player) {
    return player.points
})
console.log('points:', playerPoints);

// перебрати id гравців
const playersId = players.map(function (player) {
    return player.id
})
console.log('Id of players:', playersId);
// ====================================================================
// filter-
const filteredNumbers = numbers.filter(function(number) {
    return number >= 15
})
console.log(filteredNumbers);