// arguments - псевдо масив який має амло методів
// аргументів моде бути більше ніж параметрів тому ми використовуєио arguments
// Array.from - робить масив з псевдомасиву
// const fn = function () {
//     console.log(arguments);
//     const arg = Array.from(arguments)
//     console.log(arg);
    
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5, 6);
// fn(1, 2, 3, 4, 5, 6, 7);


// const functio = function () {
//     console.log(arguments);

//     const argf = Array.from(arguments);
//     console.log(argf);
// }

// functio(1, 33, null, "OKKO");


// const fnn = function (...args) {
//     console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5, 6);
// fn(1, 2, 3, 4, 5, 6, 7);









// arguments
const fnf = function () {
    console.log(arguments);
    const argg = Array.from(arguments)
    console.log(argg);
}

fnf(1, 2, null, 'line', 0, 'string');
fnf(null, 0, 'zero', undefined, 23, 'string');

// rets
const fnfn = function (...rest) {
    console.log(rest);
}

fnf(1, 2, null, 'line', 0, 'string');
fnf(null, 0, 'zero', undefined, 23, 'string');



const fun = function (...a) {
    console.log(a);
}

fun(1);



const array = [null, 0, 'zero', undefined, 23, 'string'];
console.table(array);
array[2] = 'one';
console.log(array[2]);
console.table(array);
    const lastIndex = array.length -1;
    console.log(lastIndex);

    for(let i = 0; i <= lastIndex; i++){
        console.log(array[i]);
    }

    const func = function (...args) {
        console.log(args);
    }
    func(0, 'zero', undefined, 23)
    func('lock', null, undefined, 0)
    func('level', 1, 'completed', undefined)


    const fff = function () {
        console.log(arguments);
        const a = Array.from(arguments)
        console.log(a);
    }

    fff('lock', null, undefined)
    fff('level', 1)
    fff(undefined, 23, 'string')




    /*
 * Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

    const changeCase = function () {
    
    }
    
    const str = 'JavaScript';
    
    const arrStr = str.split('');
    console.log(arrStr);
    
    let reversStr = '';
    
    // for (const letter of arrStr) {
    //     if(letter === letter.toLocaleLowerCase()){
    //         reversStr += letter.toLocaleUpperCase();
    //     } else {
    //         reversStr += letter.toLocal
    // console.log(reversStr);
      
      console.log(changeCase('qweRTY')); // QWErty
      console.log(changeCase('mAnGo')); // MaNgO
      console.log(changeCase('AjAx')); // aJa