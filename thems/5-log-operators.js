// якщо (0, null, '', false, NaN, undefined), то false
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
// якщо (5, -10, true,), то true
console.log(Boolean(5));
console.log(Boolean(-10));
console.log(Boolean(true));
console.log(Boolean(' '));
// Якщо змінна (a, salary), то undefined
// console.log(Boolean(salary);
// ======================================================
// логічне &&
// зупиняється на брехні.Якщо брехні нема то на останьому значенні
console.log(5 && 10 && 'mango');
console.log(6 && 0 && 'mango' );
console.log('console' && null && 8);

//логічне ||
// зупиняється на правді.Якщо правди нема то на останьому значенні
console.log(null || 9 || 0);
console.log(null || undefined || 0);
console.log('name' || 0 || null || "");

// логічне !
// з правди робить брехню з брехні робить правду
console.log(!0);
console.log(5 !== 5);
console.log(!'');