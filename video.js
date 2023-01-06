// подивтись що записано у h1 та змінити контент та стилі
const titleEl = document.querySelector('.hero__title');
console.log(titleEl.textContent);
// 
console.log(titleEl.textContent = 'Main title');
console.log(titleEl.style.color = 'red');
// =======================================================
/* Атрибути
 * get - 
 * set
 * remove
 * has
 */
// =======================================================
const heroEl = document.querySelector('.hero__title');
console.log(heroEl);

const titleRef = document.createElement('h1');
titleRef.classList.add('title')
titleRef.textContent = 'Заголовок'
titleRef.style.color = '#212121'

heroEl.appendChild(titleRef)
// ======================================================
const title = document.querySelector('.hero__title')
console.log(title);

const newEl = document.createElement('p')
newEl.classList.add('new-element')
newEl.textContent = 'Новоутворенний елемент'
newEl.style.color = '#fff'
newEl.style.backgroundColor = 'orange'
console.log(newEl);

title.appendChild(newEl)

const linkEl = document.createElement('a')
linkEl.classList.add('link')
console.log(linkEl);




// ======================
// ======================
// ======================
// достукатись до якогось елементу
// const titleEl = document.querySelector('.main')
console.log(titleEl);
console.log(titleEl.textContent = 'header');
titleEl.style.color = 'red'

// DOM-властивості та атрибути
// 1. Властивості
// hidden - контролює видимість елемента.
// value - містить поточний текстовий контент елементів input, select, textarea.
// checked - зберігає стан чекбокса або радіо кнопки.
// name - зберігає значення вказане в HTML-атрибут name.
// src - шлях до зображення тега <img>.

// ====================================================================================
// ====================================================================================
// 2. Інші властивості
// elem.textContent - дозволяє додати контент в тег

// elem.classList.contains(cls) - повертає true або false, в залежності
// від того, чи є в елемента клас cls

// elem.classList.add(cls) - додає клас cls в список класів елемента

// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента

// elem.classList.replace(oldClass, newClass) - замінює старий клас на новий

// elem.classList.toggle(cls) - якщо класу cls немає, додає його, якщо є, видаляє

// ====================================================================================
// ====================================================================================
// 3. Атрибути
// elem.setAttribute(name, value) - встановлює атрибут
const imgEl = document.querySelector('.image')
console.log(imgEl.setAttribute('src', 'https://s.mind.ua/img/forall/a/202371/20.jpg?1646548477'));

// elem.getAttribute(name) - отримує значення атрибута з яким ми працюємо і повертає його
// аналогічні записи
console.log(imgEl);
console.log(imgEl.getAttribute('src'));

// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false
console.log(imgEl.hasAttribute('src'));
// elem.removeAttribute(name) - видаляє атрибут
// elem.attributes - властивість, повертає колекцію всіх атрибутів елемента

// ====================================================================================
// ====================================================================================
// змінити картинку
// const imgEl = document.querySelector('.image')
console.log(imgEl);
console.log(imgEl.src = 'https://cdn.lifehacker.ru/wp-content/uploads/2014/12/Depositphotos_33643749_m.jpg');
// змінити картинку атрибутами
console.log(imgEl.setAttribute('src', 'https://s.mind.ua/img/forall/a/202371/20.jpg?1646548477'));

// ====================================================================================
// ====================================================================================
// 8.12.2022
// 4. Методи append/prepend, before/after, replaceWith
const descEl = document.createElement('p')
descEl.classList.add('description')
descEl.textContent = 'Lorem ipsum dolor sit amet'
descEl.style.color = 'pink'
console.log(descEl);

titleEl.appendChild(descEl)
// ====================================================================================
// створити елемент
const imageEl = document.createElement('img')
imageEl.src = 'https://www.pizzatravel.com.ua/uploads/2019/33473.jpg'
imageEl.alt = 'Відень'
imageEl.classList.add('art')
imageEl.width = '350'
console.log(imageEl);

// descEl.insertBefore(imageEl, )
// ====================================================================================
/* <ul class="unouded-list">
    <li class="site-nav__item"><a class="link__item"></a></li>
</ul> */
const ulEl = document.createElement('ul')
ulEl.classList.add('unouded-list')

const nav = document.createElement('li')
nav.classList.add('site-nav__item')

const link = document.createElement('a')
link.classList.add('link__item')
// ulEl.appendChild(nav, linkEl)
ulEl.appendChild(nav)
nav.appendChild(link)
console.log(ulEl);
// ====================================================================================
// ====================================================================================
// 5. innerHTML
const ul = document.querySelector('.list');
console.log(ul.innerHTML);

ul.innerHTML = '<li class="text"><a class="open">посилання</a></li>'
ul.insertAdjacentElement
console.log(ul);
// Метод insertAdjacentHTML()


