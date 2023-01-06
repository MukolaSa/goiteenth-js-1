// імперативний код - це коли мипишемо код і в кінці бачимо результат
// дикларативний код - це коли ми взяли все і закрили в одну функцію
// ====================================================================
// чисті та брудні функції
// брудні - змінють початковий масив функція це та яка використовує масив і нам потрібно з ним щось зробити
// чисті функції створють новий
// ====================================================================
// forEach-перебирає масив
const numbers1 = [5, 10, 20, 25];
numbers.forEach(function (number, index, array) {
    console.log(number);
    console.log(index);
    console.log(array);
})
numbers1.forEach(function (number) {
    console.log(number);
})
// ====================================================================
// map-перебирає масив і його можна змінити
const number1 = [5, 10, 15, 20, 25];
number1.map(function (number) {
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
// filter-фільтрує масив
const filteredNumbers = numbers.filter(function(number) {
    return number >= 15
})
console.log(filteredNumbers);
// ====================================================================
// збільшити кількість поінтів на 10%
const player = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];

const upatedPlayers = playerr.map(function(points) {
    return {
        ...points,
        points: player.points * 1.1,
    }
})
console.log(upatedPlayers);
// ==========================================================================
// fiter - фільтрує масив
// якщо умова не виконується то []
// вибрати тих що онлайн
const filter = player.filter(function(player) {
    return player.online
})

console.log(filter);
// ==========================================================================
// find-показує перший елемент який задовільняє умову
// схожий на inclides
const numbers = [5, 10, 15, 20, 25];
const number = numbers.find(function(number) {
    return number > 5
})
console.log(number);

// ==========================================================================
// дописати 1г 5хв
// some-поелементно перебирає оригінальний масив
// повертає true якщо хоча б один елемент масиву задовільняє умову
const isOnline = players.some(function ({online}) {
    return online;
})

console.log(isOnline);
// ==========================================================================
// every-поелементно перебирає оригінальний масив
// повертає true якщо всі елементи масиву задовільняють умову якщо хоч один не задовільняї то false

const anyHardcorePlayers = players.every(function ({timePlayed}) {
    return timePlayed > 100
})
// ==========================================================================
// reduce - повертає що завгодно
// може замінити всі методи
const num = [5, 10, 15, 20, 25];
const total = num.reduce(function(acc, number) {}, )


const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
  };
  const totalSalary = salary.reduce(function(number) {
    return 
  })
  
// console.log(totalSalary);