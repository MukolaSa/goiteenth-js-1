const counterContainer = document.querySelector('#counter')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('["data-action="increment"]')
const value = document.querySelector('#value')

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)

let counterValue = 0;

function increment() {
    value.textContent = counterValue += 1
}

function decrement() {
    counterValue -= 1
    value.textContent = counterValue
}