const array = ['pool', undefined, 0, 'type', NaN, 'String', 'call'];
console.table(array);
// дізнатись останній індекс елемента
const lastIndex  = array.length -1;
for(let i = 0; i <= lastIndex; i++){
    console.log(array[i]);
}og(text.split('')); // по буквах
console.log(text.split(' ')); // по словах
console.log(text.split(',')); // все в один елемент
// змінити значення елемента масиву
array[3] = 3938949
console.table(array);
// методи масиву
const books = ['OKR', 'One', 'Year'];
const magazines = ['Times', 'Forbes', 'Something'];
// concat
const concat = books.concat(magazines);
console.log(concat);
// split
const text = 'Notes on startups';
console.log(text);

console.l
// pop
console.log(magazines.pop());
console.log(magazines);
// push
books.push('item');
console.log(books);