// Завдання 1
const number = prompt('Enter number');

if (number >= 55 && number <= 99){
    console.log('Число потрапляє в діапазон');
} else {
    console.log('Число не потрапляє в діапазон');
}


// Завдання 2
const namme = 'Max';
const age = 55;

if (age > 0 && age < 16) {
    console.log('kids');
} else if (age >= 17 && age <= 60) {
    console.log('adult');
} else if (age >= 61 && age <= 100) {
    console.log('pensioner');
}

// Завдання 3
const yourName = 'Mykola';
const surname = 'Salamakha';

if (yourName.length > 4 && surname.length > 5) {
    console.log(yourName.length + surname.length);
} else {
    console.log('УПС');
}

// Завдання 4
if (1 <= 5) {
    console.log(Math.round(Math.random() * (5 - 1) + 1))
} else {
    console.log(' ');
}

// Завдання 5
let lang;

switch (lang) {
    case 'ua':
        console.log('Вересень');
        break;
    case 'en':
        console.log('September');
        break;
    case 'pl':
        console.log('Wrzesień');
        break;
    case 'ru':
        console.log('сентябрь');
        break;
    default:
        console.log('Такої мови не існує');
        break;
}


