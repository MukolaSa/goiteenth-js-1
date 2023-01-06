const random = Math.random() * (6 - 0) + 0;

console.log(Number.parseInt(random));
if (random > 0 && random <= 1) {
    console.log(1);
} else if (random >= 2 && random < 3) {
    console.log(2);
} else if (random >= 3 && random < 4) {
    console.log(3);
} else if (random >= 4 && random < 5) {
    console.log(4);
} else if (random >= 5 && random < 6) {
    console.log(5)
}
// розгалуження switch
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