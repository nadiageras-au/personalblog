// let modalBtn = document.getElementById('datamodal');
const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
//вызов модального окна
modalBtn.forEach(item  => {
  item.addEventListener('click', event => {
    let $this = event.currentTarget;
    let modalID = $this.getAttribute('data-modal');
    let modal = document.getElementById(modalID);
    let modalContent = modal.querySelector('.modal__content');

    modalContent.addEventListener('click', event => {
      event.stopPropagation();
    });
    
    modal.classList.add('show');
    body.classList.add('no-scroll');

    setTimeout(function() {
      modalContent.style.transform = 'none';
      modalContent.style.opacity = '1';
    }, 1);    
  });
});

//Закрытие модального окна по крестику
modalClose.forEach(item  => { 
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget.closest('.modal');

    currentModal.classList.remove('show');
    body.classList.remove('no-scroll');  
    
  });
});

//Закрытие модального окна по нажатию в области за пределами окна
modal.forEach(item  => { 
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget;

    closeModal(currentModal);
    
  });
});

function closeModal(currentModal) {
  let modalContent = currentModal.querySelector('.modal__content');
  modalContent.removeAttribute('style');

  setTimeout(() => {
    currentModal.classList.remove('show');
    body.classList.remove('no-scroll');
  }, 200);
}




