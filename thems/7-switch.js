// 1. Ми у любому випадку використовуємо else якщо false
// 2. Шаблоі рядки (``)
// 3. else if використовуємо коли в нас є декілька умов



// Напиши скрипт вибору готеля по кількості зірок
// 1 - 20$ 2 - 30$ 3 - 50$ 4 - 70$ 5 - 120$
// 
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок 'Такої кількості зірок немає'


const stars = 4;
let price;

if (stars === 1) {
    price = 20
    console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
    // Ціна готелю з 5 зірками - 120$

}else if (stars === 2) {
    price = 30
    console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
}else if (stars === 3) {
    price = 50
    console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
}else if (stars === 4) {
    price = 70
    console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
}else if (stars === 5) {
    price = 120
    console.log(`Ціна готелю з ${stars} зірками - ${price}$`);
}else {
    console.log('Такої кількості зірок немає');
}
// ======================================================================
// Switch
// Switch-використовуємо щоб спростити код

const experience = 3;
let salary;

switch (experience) {
    case 1:
        salary = 1000;
        console.log('Ви стажер');
        break;
    case 2:
        salary = 1500;
        console.log('Ви junior Frond end developer');
        break;
    case 3:
        salary = 4000;
        console.log('Ви middle Frond end developer');
        break;
    case 4:
        salary = 7000;
        console.log('Ви senior Frond end developer');
        break;
    default:
        console.log('Ви нам не підходите');
        break;
}

// switch(змінна)
// case значення;
// break - розділяє код
// default - else





const name = 'Генератор захисного поля';
const priceу = 1000;

console.log(`Обрано ${name}, ціеа товару ${priceу}`);