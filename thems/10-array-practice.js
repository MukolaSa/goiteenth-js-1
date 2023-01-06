// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for(const price of cart){
//     total += price;
// }
// console.log(total);
// =======================================================================
// Напиши скрипт який порахує суму всіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for(const number of numbers) {
//     if (number % 2 === 0) {
//         total += number
//     }
// }
// console.log(total);
// =======================================================================
/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

for(let i = 0; i < logins.length; i += 1 ){
    if (logins[i] === loginToFind) {
        console.log(`Користувач ${loginToFind} знайдено`);
    } else {
        console.log(`Користувач ${loginToFind} не знайдено`);
    }
}

// or

for (const login of logins) {
    if (login === loginTofind) {
        message = `Користувач ${loginToFind} знайдено`;
    }
}
console.log(message);

// includes

if (logins.includes(loginToFind)) {
    message = `Користувач ${loginToFind} знайдено`
}
console.log(message);

// or

const message = logins.includes(loginToFind)? `Користувач ${loginToFind} знайдено`:`Користувач ${loginToFind} знайдено`;
console.log(message);

// =======================================================================

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const arrays = array1.concat(array2);
// console.log(arrays);

// for(const array of arrays){
//     total += array
// }
// ========================================================================
//Напиши скрипт пошуку самого маленького числа в масиві,
// при умові, що числа унікальні (не повторюються).
// const number = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 * - Спочатку через for
 * - Потім через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// console.log(friends.join(', '));
// for (const friend of friends) {
//     string += friend + ','
// }

// /*
//  * Напиши скрипт який замінює регістр кожного символа в рядку на протилежний.
//  * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
//  */

const str = 'JavaScript';

const arrStr = str.split('');

console.log(arrStr);

for(const letter of arrStr){
    if (letter === letter.toLocaleLowerCase()) {
        reversStr += letter.toLocaleUpperCase();
    } else {
        reversStr += letter.toLocaleLowerCase();
    }
}
console.log(reversStr);
/*
 * Робимо slug в URL з назви стратті (приклад на dev.to)
 * Заголовок статті складається тільки з букв та пропусків
 *
 * - Нормалізуємо рядок
 * - Разбиваємо по словах
 * - Зшиваємо в рядок з розділителями
 * - Ченінг
 */

// Повинно вийти top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';
const normoliserTitle = title.toLocaleLowerCase();
console.log(normoliserTitle);
const splitTitle = title.split(' ');
console.log(arrTitile);
const slugTitle = arrTitle.join('-')
console.log(slugTitle);

/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = ['Карточка-1','Карточка-2','Карточка-3','Карточка-4','Карточка-5',];
console.table(cards);

const cardToRemove = 'Карточка-3';
const cardToInsert = 'Карточка-6';
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToRemove);
console.log(cards.splice(index, 1));
console.log(cards);

cards.splice(cards.lendth, 0, cardToInsert);
console.log(cards);