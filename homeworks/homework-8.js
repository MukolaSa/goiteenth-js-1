// Завдання 1
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy'
  user.hobby = 'skydiving'
  user.premium = false

  const keys = Object.keys(user)
  console.log(keys);

  for (const key of keys) {
    console.log(key);
  }
// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число - кількість властивостей.
const countProps = function (obj) {
    // твій код
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3