// Завдання 1
for(let i = 1; i <= 10; i += 1){
    console.log(i);
}
// Завдання 2
// let num = 1;
// while (num <= 10) {
//     num += 1
//     if (num % 2 === 0){
//         console.log('Число парне');
//     } else {
//         console.log('Число не парне');
//     }
// }

for(let i = 1; i <= 10; i += 1 ){
    if (i % 2 === 0) {
        console.log('Число парне');
    } else {
        console.log('Число не парне');
    }
}

// Завдання 3
// З while не працює

// const num = 20;
// const numMax = 28
// while (num < numMax) {
//     console.log(num);
//     num += 1
// }

for(let i = 20; i <= 28; i += 1){
    console.log(i);
}

// Завдання 4
let name = "";
while(name.length < 6){
    name = prompt(`Напишіть ім'я вашого улюбленого героя:`)
    if (name.length < 6) {
        console.log(`${name} - виводити`);
    } else {
        console.log(`Завершити`);
    }
}
