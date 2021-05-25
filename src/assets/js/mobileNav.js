const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
const body = document.body; 

burger.addEventListener('click', event => {
  if (body.classList.contains('show-sidebar') ) {
      closeSidebar();
  } else {
      showSidebar();
  }
});

function showSidebar() {
  let mask = document.createElement('div');
  console.log(mask);

  mask.classList.add('page__mask');
  console.log(mask);

  mask.addEventListener('click', closeSidebar);
  console.log(page);

  page.appendChild(mask);
  console.log(page);

  body.classList.add('show-sidebar');
};

function closeSidebar() {
  body.classList.remove('show-sidebar');
  document.querySelector('.page__mask').remove();
};