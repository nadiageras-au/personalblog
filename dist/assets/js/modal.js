const modalBtn = document.querySelectorAll(['data-modal']);

modalBtn.forEach(item => {
  item.addEventListener('click', event => {
    console.log('clicked1');
  });
});


