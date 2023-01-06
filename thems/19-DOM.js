// практика
// Завданн 1 створюємо заголовок
const titleEl = document.createElement('h1')
// створюємо клас до елемента
titleEl.classList.add('title')
// робимо контент для тега
titleEl.textContent = 'Заголовок'
// додаємо стилі до елемента
titleEl.style.colour = 'black'
console.log(titleEl);
// =========================================================
const titleRef = document.createElement('p')
titleEl.classList.add('paragraph')
titleRef.textContent = 'Текст'
titleRef.style.colour = 'white'
console.log(titleRef);
// =========================================================
// Створюємо зображення
// valais-alpine-mountains-glacier
// https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
const image = document.createElement('img')
image.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
image.alt = 'зображення';
image.width = '320';
console.log(image);
// =========================================================
const element = document.querySelector('.site-nav__item')
console.log(element);

const heroTitleEl = document.querySelector('.hero__title');
console.log(heroTitleEl.textContent = 'Main');
console.log(heroTitleEl);
// ==================================================================
// створення
const creation = document.createElement('img');
console.log(creation);
// додавання
// const addition = document.appendChild()
// ==================================================================
/*
* - створенння елементів
* - Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems) 
*/
// щоб додати нам потрібно мати вже існуючий елемент
const heroEl = document.querySelector('.hero')

const titleELement = document.createElement('h1');
titleELement.classList.add('title')
titleELement.textContent = 'Заголовок'
titleELement.style.color = 'red'

console.log(titleELement);
heroEl.appendChild(titleELement)


// const box = document.querySelector('.hero-image')
// const textRef = document.createElement('h2')
// textRef.classList.add('text')
// textRef.textContent = 'Контент'
// textRef.style.color = 'pink'
// console.log(textRef);

// heroEl.insertBefore(textRef, titleEl)

const navEl = document.createElement('li')
navEl.classList.add('navigation')
navEl.textContent = 'посилання'
const linkEl = document.createElement('a')
linkEl.classList.add('nav-link')
linkEl.textContent = 'посилання'
console.log(linkEl);
