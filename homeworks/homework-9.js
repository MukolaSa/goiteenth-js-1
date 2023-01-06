// Завдання 1
const name = [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
const getUserNames = name.map(function(users) {
  console.log(users);
});
// Завдання 2
const getUsersWithEyeColor = (users, color) => {

};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
// Завдання 3
// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users.filter(function(users) {
  
})

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]