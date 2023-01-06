/*
 * Створюємо і додаємо колекцію
 */
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
  ];
  const colorPickerContainer = document.querySelector('.js-color-picker');
  // створюємо кнопку
  const option = colorPickerContainer[0]
  console.log(option);

  const buttonEl = document.createElement('button');
  buttonEl.type = 'button'
  buttonEl.textContent = option.label;
  