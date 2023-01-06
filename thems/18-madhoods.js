// збільшити кількість поінтів на 10%
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];

// const upatedPlayers = players.map(function(points) {
//     return {
//         ...points,
//         points: player.points * 1.1,
//     }
// })
// console.log(upatedPlayers);
// ==========================================================================
// fiter - фільтрує масив
// якщо умова не виконується то []
// вибрати тих що онлайн
const filter = players.filter(function(player) {
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
  // ========================================================================== 