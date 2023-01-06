const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
  };

 function onBtnClickOpen() {
    document.body.classList.add('show-modal')
  }

  function onBtnClose() {
    document.body.classList.add('')
  }