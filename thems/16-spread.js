// concat
const numbers = [1, 6, 8, 10, 54, 3].concat([5, 4,], [63, 11])
console.log(numbers);

const array = ['Kivi', 'Mango', 'Banan'];
const num = [1, 3, 5, 67];
const result = array.concat(num)
console.log(result);
// spread
const numbers1 = [1, 6, 8, 10, 54, 3, ...[5, 4], ...[63, 11]]
console.log(numbers1);
// ======
// пошук найбйільшої та найнищої температури (числа)
const temps = [18, 14, 12, 21, 21, 17, 29, 24];
const min = Math.min(...temps);
const max = Math.max(...temps);
console.log(min);
console.log(max);
// ======
// якщо нам потрідні лише елеиенти які знаходяться в масиві то ми використовуємо розпорошення
const a = [
    {x: 1},
    {y: 2},
    {z: 3}
];
const b = [...a];
console.log('a: ', a);
console.log('b: ', b); 
// concat + ...spread
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
console.log(allTemps);

const all = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(all);
// assign
const f = { x: 1, y: 2 };
const p = { x: 0, z: 3 };

const c = Object.assign({}, f, p);
console.log(c);
