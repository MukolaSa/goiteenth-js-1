// callback це та функція я повина відбудися коли буде якась подія
// const targetBtn = document.querySelector('.target')
// targetBtn.addEventListener('click', ()=>{
//     console.log('Відслідковуємо клік');
// })
// ================================================================
// const form = document.querySelector('.js-register-form')
// form.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     console.dir(event.currentTarget);
//     console.log('Submit');
// })
// ================================================================
// const inputEl = document.querySelector('.js-input');
// const checkbox = document.querySelector('js-licence');
// ================================================================
// const targetBtn = document.querySelector('.js-target-dtn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');
// додаємо слухача подій на цільову кнопку
// targetBtn.addEventListener('click', ()=>{
//     console.log('Нажали на кнопку');
// })

// кнопка Додати слухача віщала слухача подій на цільвову кнопку, а зняти слухача знімала з цільової кнопки
// коли буде клік на addListenerBtn ми повісимо слухача подій на іншу кнопку
// addListenerBtn.addEventListener('click', ()=>{
//     console.log('Додаємо слухача на цільову кнопку');
//     targetBtn.addEventListener('click', ()=>{
//         console.log('Нажали на кнопку');
//     })
// })
// Знімаємо слухача подій
// removeListenerBtn.addEventListener('click', ()=>{
//     console.log('Знімаємо слухача на цільову кнопку');
//     targetBtn.removeEventListener('click', ()=>{
//         console.log('Нажали на кнопку');
//     })
// })
// ====================================================================================================
// const targetBtn = document.querySelector('.js-target-dtn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// обираємо еемент на який ми вішаємо слухач подій
// першим елеентом ми передаємо
// першим елеентом ми передаємо callback
// targetBtn.addEventListener('click', ()=>{
//     console.log('Відслітковуємо клік');
// })

// щоб кнопка Додати слухача, яка додає слухача подій вішала слухача подій на цільову кнопку, а Зняти слухача знімала слухача подійй з цільової кнопки

// коли ми будемо наживати на Додати слухача ми будемо робити це
// addListenerBtn.addEventListener('click', ()=>{
//     console.log('Вішаємо слухача подій на Цільову кнопку');
//     targetBtn.addEventListener('click', ()=>{
//         console.log('Відслітковуємо клік');
//     })
// })

// removeListenerBtn.addEventListener('click', ()=>{
//     console.log('Зняли слухача подій');
//     targetBtn.addEventListener('click', ()=>{
//         console.log('Відслітковуємо клік');
//     })
// })
// addListenerBtn.addEventListener('click', ()=>{
//     console.log('Вішаємо слухача подій на Цільову кнопку');
//     targetBtn.addEventListener('click', onClick)
// })

// removeListenerBtn.addEventListener('click', ()=>{
//     console.log('Зняли слухача подій');
//     targetBtn.removeEventListener('click', onClick)
// })

// const onClick = function(param) {
//     console.log('Відслідковуємо клік');
// }
// ===============================================================
// коли ми сабмітимо форму, браузер перезавантажує сторінку це погано для розробника,
// бо ми повинні отримати якісь дані, а при перевантажені дані йдуть на backend і консоль чиста
// тому ми викликаємо event.preventDefault() робимо це коли працюємо з формами
// кнопка
// const form = document.querySelector('.js-register-form')
// form.addEventListener('sublit', (event)=>{
//     event.preventDefault()
//     console.log('Submit');
// })
// ====================
// ====================
const targetBtn = document.querySelector('.js-target-dtn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', ()=>{
    console.log('Вішаємо слухача подій на Цільову кнопку');
    targetBtn.addEventListener('click', onClick)
})

removeListenerBtn.addEventListener('click', ()=>{
    console.log('Зняли слухача подій');
    targetBtn.removeEventListener('click', onClick)
})

// const onClick = function(param) {
//     console.log('Відслідковуємо клік');
// }
// addListenerBtn.addEventListener('click', ()=>{
//     console.log('Слухач');
//     targetBtn.addEventListener('click', act)
//     console.log('Кілк');
// })

// removeListenerBtn.addEventListener('click', ()=> {
//     targetBtn.removeEventListener('keydown', act)
// })

// const act = function(param) {
//     console.log('Відслідковуємо клік');
// }

const book = {
    title: 'React',
    showThis() {
        console.log(this);
    },
    showTitle() {
        console.log(this.title);
    },

}

// book.showThis()

const out = book.showThis
out()