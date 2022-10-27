// Завдання 1
const Arr1 = [1.5, '4', 'hello'];
const Arr2 = [true, 2, {}, ["a"], 222];
console.log(Arr1[1]);
console.log(Arr2[1]);
const Sum = Arr1[1] + Arr2[1];
console.log(Sum);

// Завдання 2
Arr1.push(22);
console.log(Arr1[0], Arr1[1], Arr1[2], Arr1[3]);

// Завдання 3
for (const Arr of Arr2) {
    console.log(typeof Arr);
}
// Завдання 4

const message = 'Welcome to Ukraine!';
const messages = ['Welcome', 'to', 'Ukraine!'];
console.log(message.split(''));
console.log(message.indexOf('l'));
console.log(messages.join(''));

// const message = 'Welcome to Ukraine!';
// const messages = message.split('');
// console.log(messages);
// console.log(messages.indexOf('l'));
// const messageS = messages.join('');
// console.log(messageS);

// Завдання 5

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(0, 3, 'Класика');
const replace = styles.splice(0,1);
console.log(replace);
styles.unshift('Реп');
styles.unshift('Perri');
console.log(styles);

// Завдання 6
let country = prompt ('Введіть в пошук країну для доставки');
switch (country) {
    case 'Китай':
        alert('Вартість доставки в Китай коштує 100 кредитів');
        break;
    case 'Чилі':
        alert('Вартість доставки в Чилі коштує 250 кредитів');            
        break;
    case 'Австралія':
        alert('Вартість доставки в Австралію коштує 170 кредитів');            
         break;
     case 'Індія':
        alert('Вартість доставки в Індію коштує 80 кредитів');            
        break;
    case 'Ямайка':
        alert('Вартість доставки до Ямайки коштує 120 кредитів');            
        break;
    default:
        alert('Доставка не доступна у вашому регіоні!');
        break;
}