const playlist = {
  name: 'play',
  passward: 128916296,
  stars: 5,
  colour: 'one',
}
console.log(playlist);

// подивились що записано у name і colour
console.log(playlist.name);
console.log(playlist['colour']);

// перезаписали
playlist.name = 'logo'
console.log(playlist); 

// додали
playlist.time = 'sdd'

// ==================================================================
const username = 'Mango';
const email = 'mango@gmail.com';

const signulData = {
  username: username,
  email: email
};
// ====================================
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

// Щоб отримати всі ключі об'єкта
const keys = Object.keys(feedback)
console.log(keys);

// перебираємо ключі
for (const key of keys) {
  console.log(key);
}

// перебираємо значення ключів
for (const key of keys) {
  console.log(feedback[key]);
}

// перебираємо конкретне значення ключа
for (const key of keys) {
  console.log(feedback['bad']);
}

// додали значення ключів
let totalFeed = 0;

for (const key of keys) {
  console.log(feedback[key]);

  totalFeed += feedback[key]
}
console.log(totalFeed);


// значення ключів
const values = Object.values(feedback);
console.log(values);

let total = 0;

for (const value of values) {
  console.log(value);

  total += value
}
console.log('totalFeedback:', total);