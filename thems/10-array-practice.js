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

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// for(let i = 0; i < logins.length; i += 1 ){
//     if (logins[i] === loginToFind) {
//         console.log(`Користувач ${loginToFind} знайдено`);
//     } else {
//         console.log(`Користувач ${loginToFind} не знайдено`);
//     }
// }

// or

// for (const login of logins) {
//     if (login === loginTofind) {
//         message = `Користувач ${loginToFind} знайдено`;
//     }
// }
// console.log(message);

// includes

// if (logins.includes(loginToFind)) {
//     message = `Користувач ${loginToFind} знайдено`
// }

// console.log(message);

// тернарний оператор

// const message = logins.includes(loginToFind)? `Користувач ${loginToFind} знайдено`:`Користувач ${loginToFind} знайдено`;
// console.log(message);

// =======================================================================

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const arrays = array1.concat(array2);
console.log(arrays);

for(const array of arrays){
    total += array
}